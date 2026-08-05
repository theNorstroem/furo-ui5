#!/usr/bin/env node
/**
 * Generates the `exports` map for package.json.
 *
 * Reads element folders from src/elements/ (preferred) or src/web-components/
 * (fallback during refactor transition). For each direct subdirectory that
 * contains an index.ts, emits a per-component subpath export pointing at
 * dist/elements/<name>/index.{js,d.ts}.
 *
 * Special folders `impl` and `subcomponents` are skipped (internal-only).
 * A leading `furo-ui5-` prefix is stripped from legacy folder names.
 *
 * The same is done for src/type-renderers/, emitting one `./type-renderers/<slug>` key per
 * renderer directory — see collectRendererEntries() for why these are enumerated rather than
 * covered by a wildcard.
 *
 * Usage:
 *   node scripts/gen-exports.mjs            # print full exports map to stdout
 *   node scripts/gen-exports.mjs --write    # splice into package.json in place
 */

import { readFileSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const SKIP_FOLDERS = new Set(["impl", "subcomponents"]);

const STATIC_ENTRIES = {
  ".": {
    types: "./dist/index.d.ts",
    default: "./dist/index.js",
  },
  // JSX intrinsic element declarations (React >= 19). `./JSX` pulls in every
  // component's augmentation at once; `./JSX/*` exposes a single one.
  "./JSX": {
    types: "./dist/JSX/index.d.ts",
    default: "./dist/JSX/index.js",
  },
  "./JSX/*": {
    types: "./dist/JSX/*.d.ts",
    default: "./dist/JSX/*.js",
  },
  // Type renderers are not here — they are generated per renderer by collectRendererEntries().
  //
  // Generated open-models types (from contracts/proto via `npm run gen:contracts`).
  // These names appear in the public signatures of component `model` accessors
  // (FuroFatString, IFuroFatString, NavigationNode, …), so consumers need to be
  // able to spell them. Barrel only — deliberately no `./models/*`: the per-file
  // tree is ~200 modules of generated code whose layout churns with the .proto
  // files, and the barrel already re-exports every model type used publicly.
  "./models": {
    types: "./dist/models/index.d.ts",
    default: "./dist/models/index.js",
  },
  // Enums for every enum-valued component property — mostly one-line re-exports of
  // the corresponding @ui5/webcomponents(-fiori) enum, so consumers can spell
  // `TitleLevel.H2` without reaching into a transitive dependency's dist/.
  // Barrel only — deliberately no `./types/*`, for the same reason as `./models`:
  // a wildcard would freeze every filename as public API.
  "./types": {
    types: "./dist/types/index.d.ts",
    default: "./dist/types/index.js",
  },
  // Side-effect import that registers the UI5 assets and adopts the furo
  // global stylesheet (theme vars, scrollbar, raw <table> styling) onto
  // document.adoptedStyleSheets.
  "./Assets": {
    types: "./dist/Assets.d.ts",
    default: "./dist/Assets.js",
  },
  // Side-effect import registering all SAP icon sets at once (icons + tnt +
  // business-suite), so consumers write one line instead of three
  // package-internal AllIcons.js paths.
  "./Icons": {
    types: "./dist/Icons.d.ts",
    default: "./dist/Icons.js",
  },
  // Adoptable stylesheets for shadow-DOM consumers. The light DOM gets these
  // for free via "./Assets"; a component with a shadow root has to adopt them.
  "./styles/table.css": {
    types: "./dist/styles/table.css.d.ts",
    default: "./dist/styles/table.css.js",
  },
  "./styles/scrollbar.css": {
    types: "./dist/styles/scrollbar.css.d.ts",
    default: "./dist/styles/scrollbar.css.js",
  },
  "./styles/GlobalStyles": {
    types: "./dist/styles/GlobalStyles.d.ts",
    default: "./dist/styles/GlobalStyles.js",
  },
  // Lit directives. Exported per-file rather than via a `./directives/*`
  // wildcard: the sibling files in that folder (nl2br-test-helper, nl2br.spec)
  // are deliberately excluded from the published tarball by the `files`
  // negations, so a wildcard would advertise subpaths that resolve to nothing.
  "./directives/nl2br": {
    types: "./dist/directives/nl2br.d.ts",
    default: "./dist/directives/nl2br.js",
  },
  // App-level settings (locale today; theme, language, calendar, … to follow). Barrel only —
  // deliberately no `./settings/*`, for the same reason as `./models` and `./types`: a wildcard
  // would freeze every filename as public API, and would advertise the co-located `*.spec`
  // files, which are excluded from the published tarball. New settings are added to
  // `src/settings/index.ts`, not here.
  "./settings": {
    types: "./dist/settings/index.d.ts",
    default: "./dist/settings/index.js",
  },
  // Applies the persisted settings to UI5's page configuration as an import side effect. A
  // separate subpath rather than part of the barrel above: it has to be imported first, before
  // anything reads UI5's configuration, and it must not run just because someone wanted a getter.
  "./settings/init": {
    types: "./dist/settings/init.d.ts",
    default: "./dist/settings/init.js",
  },
  "./package.json": "./package.json",
  "./custom-elements.json": "./custom-elements.json",
  "./web-types.json": "./web-types.json",
  "./dist/custom-elements-internal.json":
    "./dist/custom-elements-internal.json",
  // VS Code HTML custom data, post-processed by scripts/HtmlDataPostprocessor.mjs.
  // Consumed by lit-analyzer / ts-lit-plugin via their `customHtmlData` option.
  "./dist/furo-ui5.html-data.json": "./dist/furo-ui5.html-data.json",
};

function pickSourceDir() {
  const elementsDir = resolve(repoRoot, "src/elements");
  const legacyDir = resolve(repoRoot, "src/web-components");
  if (existsSync(elementsDir)) return elementsDir;
  if (existsSync(legacyDir)) return legacyDir;
  return null;
}

function shortName(folder) {
  return folder.startsWith("furo-ui5-")
    ? folder.slice("furo-ui5-".length)
    : folder;
}

function collectComponentEntries(sourceDir) {
  const entries = readdirSync(sourceDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !SKIP_FOLDERS.has(name))
    .filter((name) => existsSync(resolve(sourceDir, name, "index.ts")))
    .map((name) => shortName(name));

  // Deduplicate (in case both layouts existed) and sort alphabetically.
  const unique = Array.from(new Set(entries)).sort((a, b) =>
    a.localeCompare(b),
  );

  const result = {};
  for (const name of unique) {
    result[`./${name}`] = {
      types: `./dist/elements/${name}/index.d.ts`,
      default: `./dist/elements/${name}/index.js`,
    };
  }
  return result;
}

/**
 * One subpath per type renderer, generated from src/type-renderers/ exactly like the element
 * entries above. There is deliberately no barrel:
 * `import "@furo/ui5/type-renderers/display-string"` registers that one renderer and re-exports
 * its class, so the same specifier serves both roles. This is the form furo-ui5-typerenderer's
 * docs tell consumers to use.
 *
 * There used to be a `./type-renderers` barrel advertised as "classes for typing only, registers
 * nothing". That contract was not achievable: all 30 `form-*` renderers import
 * `@/elements/form-row`, `@/elements/label` and an input element in order to render, so importing
 * the barrel reached 172 modules and defined 9 furo tags. Per-renderer subpaths cost 5 modules
 * and register exactly the one renderer you asked for.
 *
 * Enumerated rather than a `./type-renderers/*` pattern — the one case where the reasoning behind
 * the `./models` / `./types` barrels inverts. A subpath *pattern* does no existence check, so
 * every conceivable slug "resolved": both `@furo/ui5/type-renderers/display-google-protobuf-any`
 * (real, but unbuilt at the time) and `@furo/ui5/type-renderers/totally-made-up` mapped to a
 * dist/ path that was not there, failing at load with ERR_MODULE_NOT_FOUND instead of a clean
 * ERR_PACKAGE_PATH_NOT_EXPORTED. Enumerating freezes nothing that was not already public: a
 * renderer's directory name *is* its tag name, which furo-ui5-typerenderer resolves by convention.
 */
function collectRendererEntries() {
  const rendererDir = resolve(repoRoot, "src/type-renderers");
  if (!existsSync(rendererDir)) return {};

  const names = readdirSync(rendererDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !SKIP_FOLDERS.has(name))
    .filter((name) => existsSync(resolve(rendererDir, name, "index.ts")))
    .sort((a, b) => a.localeCompare(b));

  const result = {};
  for (const name of names) {
    result[`./type-renderers/${name}`] = {
      types: `./dist/type-renderers/${name}/index.d.ts`,
      default: `./dist/type-renderers/${name}/index.js`,
    };
  }
  return result;
}

function buildExportsMap(componentEntries, rendererEntries) {
  // Preserve a stable, readable order:
  //   1. root "."
  //   2. per-component entries (alphabetical)
  //   3. type renderers (one key per renderer, alphabetical — no barrel)
  //   4. generated open-models types (barrel) + property enums (barrel)
  //   5. JSX intrinsic declarations
  //   6. assets, icons + adoptable stylesheets
  //   7. lit directives
  //   8. app-level settings (locale, …)
  //   9. static metadata entries
  const out = {};
  out["."] = STATIC_ENTRIES["."];
  for (const [key, val] of Object.entries(componentEntries)) {
    out[key] = val;
  }
  for (const [key, val] of Object.entries(rendererEntries)) {
    out[key] = val;
  }
  out["./models"] = STATIC_ENTRIES["./models"];
  out["./types"] = STATIC_ENTRIES["./types"];
  out["./JSX"] = STATIC_ENTRIES["./JSX"];
  out["./JSX/*"] = STATIC_ENTRIES["./JSX/*"];
  out["./Assets"] = STATIC_ENTRIES["./Assets"];
  out["./Icons"] = STATIC_ENTRIES["./Icons"];
  out["./styles/table.css"] = STATIC_ENTRIES["./styles/table.css"];
  out["./styles/scrollbar.css"] = STATIC_ENTRIES["./styles/scrollbar.css"];
  out["./styles/GlobalStyles"] = STATIC_ENTRIES["./styles/GlobalStyles"];
  out["./directives/nl2br"] = STATIC_ENTRIES["./directives/nl2br"];
  out["./settings"] = STATIC_ENTRIES["./settings"];
  out["./settings/init"] = STATIC_ENTRIES["./settings/init"];
  out["./package.json"] = STATIC_ENTRIES["./package.json"];
  out["./custom-elements.json"] = STATIC_ENTRIES["./custom-elements.json"];
  out["./web-types.json"] = STATIC_ENTRIES["./web-types.json"];
  out["./dist/custom-elements-internal.json"] =
    STATIC_ENTRIES["./dist/custom-elements-internal.json"];
  out["./dist/furo-ui5.html-data.json"] =
    STATIC_ENTRIES["./dist/furo-ui5.html-data.json"];
  return out;
}

function spliceIntoPackageJson(exportsMap) {
  const pkgPath = resolve(repoRoot, "package.json");
  const raw = readFileSync(pkgPath, "utf8");

  // Detect trailing newline so we preserve it.
  const trailingNewline = raw.endsWith("\n") ? "\n" : "";

  // Parse to figure out indent; default to 2-space.
  // Use a regex-based splice so we don't reorder other top-level fields.
  const exportsRegex = /^(\s*)"exports"\s*:\s*\{[\s\S]*?\n\1\}(,?)/m;
  const match = raw.match(exportsRegex);
  if (!match) {
    throw new Error("Could not locate `exports` block in package.json");
  }
  const indent = match[1] ?? "  ";
  const trailingComma = match[2] ?? "";

  // Pretty-print the new exports block at the existing indent level.
  const serialized = JSON.stringify({ exports: exportsMap }, null, 2);
  // Strip the outer `{ \n` and `\n}` so we get just the `"exports": { ... }` line(s).
  const lines = serialized.split("\n");
  // Drop first and last lines ("{" and "}").
  const innerLines = lines.slice(1, -1);
  // Re-indent: serialized inner lines start with 2 spaces; prepend `indent` and
  // shift nested indentation onto the package.json baseline.
  const reIndented = innerLines
    .map((line) => (line.length ? indent + line.slice(2) : line))
    .join("\n");

  const replacement = reIndented + trailingComma;
  const updated = raw.replace(exportsRegex, replacement);

  writeFileSync(
    pkgPath,
    trailingNewline && !updated.endsWith("\n") ? updated + "\n" : updated,
  );
}

function main() {
  const sourceDir = pickSourceDir();
  if (!sourceDir) {
    console.error(
      "ERROR: neither src/elements/ nor src/web-components/ was found.",
    );
    process.exit(1);
  }

  const componentEntries = collectComponentEntries(sourceDir);
  const rendererEntries = collectRendererEntries();
  const exportsMap = buildExportsMap(componentEntries, rendererEntries);

  const write = process.argv.includes("--write");
  if (write) {
    spliceIntoPackageJson(exportsMap);
    const count = Object.keys(componentEntries).length;
    const rendererCount = Object.keys(rendererEntries).length;
    console.error(
      `gen-exports: wrote ${count} per-component entries and ${rendererCount} type-renderer entries to package.json (source: ${sourceDir.replace(repoRoot + "/", "")})`,
    );
  } else {
    console.log(JSON.stringify(exportsMap, null, 2));
  }
}

main();

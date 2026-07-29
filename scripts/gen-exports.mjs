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
  // Side-effect import that registers the UI5 assets and adopts the furo
  // global stylesheet (theme vars, scrollbar, raw <table> styling) onto
  // document.adoptedStyleSheets.
  "./Assets": {
    types: "./dist/Assets.d.ts",
    default: "./dist/Assets.js",
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
  "./package.json": "./package.json",
  "./custom-elements.json": "./custom-elements.json",
  "./web-types.json": "./web-types.json",
  "./dist/custom-elements-internal.json":
    "./dist/custom-elements-internal.json",
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

function buildExportsMap(componentEntries) {
  // Preserve a stable, readable order:
  //   1. root "."
  //   2. per-component entries (alphabetical)
  //   3. JSX intrinsic declarations
  //   4. assets + adoptable stylesheets
  //   5. static metadata entries
  const out = {};
  out["."] = STATIC_ENTRIES["."];
  for (const [key, val] of Object.entries(componentEntries)) {
    out[key] = val;
  }
  out["./JSX"] = STATIC_ENTRIES["./JSX"];
  out["./JSX/*"] = STATIC_ENTRIES["./JSX/*"];
  out["./Assets"] = STATIC_ENTRIES["./Assets"];
  out["./styles/table.css"] = STATIC_ENTRIES["./styles/table.css"];
  out["./styles/scrollbar.css"] = STATIC_ENTRIES["./styles/scrollbar.css"];
  out["./styles/GlobalStyles"] = STATIC_ENTRIES["./styles/GlobalStyles"];
  out["./package.json"] = STATIC_ENTRIES["./package.json"];
  out["./custom-elements.json"] = STATIC_ENTRIES["./custom-elements.json"];
  out["./web-types.json"] = STATIC_ENTRIES["./web-types.json"];
  out["./dist/custom-elements-internal.json"] =
    STATIC_ENTRIES["./dist/custom-elements-internal.json"];
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
  const exportsMap = buildExportsMap(componentEntries);

  const write = process.argv.includes("--write");
  if (write) {
    spliceIntoPackageJson(exportsMap);
    const count = Object.keys(componentEntries).length;
    console.error(
      `gen-exports: wrote ${count} per-component entries to package.json (source: ${sourceDir.replace(repoRoot + "/", "")})`,
    );
  } else {
    console.log(JSON.stringify(exportsMap, null, 2));
  }
}

main();

/**
 * Matches a `ui5-` tag-name prefix.
 *
 * - the lookbehind skips names that were already rewritten, which makes the rewrite idempotent
 * - the lookahead skips `ui5-webcomponents…`, which is SAP's repository/package name rather than a
 *   tag name. Rewriting it inside a link like `https://sap.github.io/ui5-webcomponents/…` produced
 *   a dead URL. Those particular links have since been migrated to `https://ui5.github.io/
 *   webcomponents/components/…`, which contains no `ui5-` at all, so the lookahead is now a guard
 *   against reintroducing the problem (e.g. via a `@ui5/webcomponents-icons` reference).
 */
const UI5_TAG_PREFIX = /(?<!furo-)ui5-(?!webcomponents)/g;

/**
 * Rewrites documentation text inherited from `@ui5/webcomponents` so that it refers to the furo
 * wrappers instead: `ui5-button` becomes `furo-ui5-button`, `@ui5/webcomponents/…` becomes
 * `@furo/ui5/…`.
 *
 * The rewrite is **idempotent** — text that already reads `furo-ui5-…` is left untouched. That
 * matters because the same description is rewritten more than once on its way into the generated
 * files: `internal-cem.config.mjs` rewrites it while building the manifest, and
 * `scripts/IntrinsicElements/render.js` rewrites it again while rendering the JSX intrinsics from
 * that manifest. With a plain `replaceAll("ui5-", "furo-ui5-")` each pass prepended another `furo-`,
 * so a hand written `furo-ui5-money-input` ended up as `furo-furo-furo-ui5-money-input`.
 *
 * @param {string | undefined} text - documentation text, may be undefined
 * @returns {string | undefined} the rewritten text, or undefined if none was given
 */
export function furoizeDocText(text) {
  return text
    ?.replaceAll(UI5_TAG_PREFIX, "furo-ui5-")
    .replaceAll("@ui5/webcomponents/", "@furo/ui5/")
    .replaceAll("@ui5/webcomponents-fiori/", "@furo/ui5/");
}

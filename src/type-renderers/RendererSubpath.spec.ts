/**
 * Guards the type-renderer public surface: one subpath per renderer, doing both jobs.
 *
 * `@furo/ui5/type-renderers/<slug>` must register the tag *and* export the class. There is
 * deliberately no renderer barrel — see the comment in `scripts/gen-exports.mjs`. If someone
 * reintroduces a registration-only `index.ts`, the class assertion here fails.
 */
import { describe, expect, it } from "vitest";

// One per registration idiom, since the three differ in how (and where) they define the tag:
//   display-*  -> window.customElements.define(...) before `declare global`
//   celledit-* -> Class.define()            (extends a UI5 element)
//   form-*     -> window.customElements.define(...) after `declare global`
//   the money celledits are the only guarded `if (!customElements.get(...))` pair
import * as celleditEnum from "./celledit-enum/index";
import * as celleditFuroTypeMoney from "./celledit-furo-type-money/index";
import * as celleditString from "./celledit-string/index";
import * as displayInt32 from "./display-int32/index";
import * as formString from "./form-string/index";

const CASES = [
  { tag: "display-int32", className: "DisplayInt32", mod: displayInt32 },
  { tag: "celledit-string", className: "CelleditString", mod: celleditString },
  { tag: "form-string", className: "FormString", mod: formString },
  { tag: "celledit-furo-type-money", className: "CelleditFuroTypeMoney", mod: celleditFuroTypeMoney },
  { tag: "celledit-enum", className: "CelleditEnum", mod: celleditEnum },
] as const;

describe("type-renderer subpaths", () => {
  describe.each(CASES)("$tag", ({ tag, className, mod }) => {
    it("registers its tag", () => {
      expect(customElements.get(tag)).toBeDefined();
    });

    it("re-exports its class", () => {
      expect(typeof (mod as Record<string, unknown>)[className]).toBe("function");
    });

    it("exports the very class it registered", () => {
      expect(customElements.get(tag)).toBe((mod as Record<string, unknown>)[className]);
    });
  });
});

import "@/Assets";
import "@/elements/number-input";
import "@/elements/password-input";
import "@/elements/relative-time-badge";
import "@/elements/relative-time-display";
import "@/elements/select";
import "@/elements/select-enum";
import "@/elements/tag";
import "@/elements/text";
import "@/elements/text-input";

import { assert, describe, it } from "vitest";

/**
 * Every furo component that subclasses a UI5 element overrides `static get metadata()`
 * to rename its tag. That override must NOT mutate the parent's metadata object —
 * `UI5Element.getMetadata()` walks the prototype chain reading each `klass.metadata`,
 * so mutating `super.metadata` rewrites the UI5 base class's own tag in place.
 *
 * It only shows up where several furo classes share one UI5 base: each mutation
 * clobbers the previous one, and the last writer wins. The non-mutating
 * `{ ...super.metadata, tag }` form makes every subclass independent of import order.
 */

/**
 * Note on what is actually asserted below.
 *
 * `getMetadata()` caches its merged result per class in `_metadata`, and every UI5
 * module calls `<Class>.define()` at import time — so the base has already cached the
 * right tag before any furo getter can run. That makes `getMetadata().getTag()` return
 * the correct value under BOTH the mutating and the non-mutating form; asserting on it
 * would be a test with no teeth (verified: it passes either way).
 *
 * The damage the mutating form does is to the raw static `metadata` object, which is
 * left permanently pointing at a `furo-ui5-*` tag. That is what this spec checks.
 */
interface UI5ElementConstructor {
  metadata: { tag?: string };
  getMetadata: () => { getTag: () => string };
}

const ctorOf = (tag: string): UI5ElementConstructor => {
  const ctor = customElements.get(tag);
  assert.isOk(ctor, `${tag} was never defined`);
  return ctor as unknown as UI5ElementConstructor;
};

const SHARED_BASE_GROUPS: { base: string; furoTags: string[] }[] = [
  { base: "ui5-input", furoTags: ["furo-ui5-text-input", "furo-ui5-number-input", "furo-ui5-password-input"] },
  { base: "ui5-text", furoTags: ["furo-ui5-text", "furo-ui5-relative-time-display"] },
  { base: "ui5-tag", furoTags: ["furo-ui5-tag", "furo-ui5-relative-time-badge"] },
  { base: "ui5-select", furoTags: ["furo-ui5-select", "furo-ui5-select-enum"] },
];

describe("metadata tag isolation", () => {
  SHARED_BASE_GROUPS.forEach(({ base, furoTags }) => {
    describe(`furo classes sharing ${base}`, () => {
      it(`leaves ${base} itself registered`, () => {
        assert.isOk(customElements.get(base), `${base} is no longer registered`);
      });

      it(`no furo subclass has rewritten ${base}'s raw static metadata.tag`, () => {
        assert.equal(ctorOf(base).metadata.tag, base, `${base}.metadata.tag was mutated by a furo subclass — the override must spread, not assign`);
      });

      furoTags.forEach(tag => {
        it(`${tag} resolves its own tag`, () => {
          assert.equal(ctorOf(tag).getMetadata().getTag(), tag);
        });
      });
    });
  });
});

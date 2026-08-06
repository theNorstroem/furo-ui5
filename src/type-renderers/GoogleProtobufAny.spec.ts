/**
 * Spec for the four `google.protobuf.Any` renderers.
 *
 * These are the only renderers that cannot know what they render at authoring time. An `ANY` is
 * an envelope: it holds nothing until data arrives, at which point `__updateWithLiteral` resolves
 * `@type` against the model Registry and populates `ANY.value` with a node of the real type.
 * Each renderer therefore delegates to `furo-ui5-typerenderer`, bound to that **payload** — not
 * to the ANY node, which always reports `google.protobuf.Any` and would resolve straight back to
 * the renderer under test.
 *
 * `@/models` is imported for its `Registry.register(...)` side effects; without it
 * `__updateWithLiteral` cannot construct the payload at all (see `AnyRegistration.spec.ts`).
 */
import "@/Assets";
import "@/models";
import "@/type-renderers/cell-furo-fat-string";
import "@/type-renderers/celledit-furo-fat-string";
import "@/type-renderers/display-furo-fat-string";
import "@/type-renderers/form-furo-fat-string";

import "./cell-google-protobuf-any/index";
import "./celledit-google-protobuf-any/index";
import "./display-google-protobuf-any/index";
import "./form-google-protobuf-any/index";

import { ANY } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html, type LitElement } from "lit";
import { afterEach, describe, expect, it } from "vitest";

import type { FuroUi5Typerenderer } from "@/elements/typerenderer/FuroUi5Typerenderer";
import { delay } from "@/util/test-helpers/delay";

/** A payload type that is both Registry-registered and has a renderer in all four contexts. */
const FAT_STRING_LITERAL = {
  "@type": "type.googleapis.com/furo.fat.String",
  value: "hello from inside an Any",
};

/** Registered, but deliberately has no `display-tree-navigationnode` renderer. */
const UNRENDERABLE_LITERAL = {
  "@type": "type.googleapis.com/tree.NavigationNode",
};

/**
 * The four renderers share no base class, so the spec types them structurally. `LitElement` is
 * the base each one extends, and it is what supplies `updateComplete`.
 */
interface AnyRenderer extends LitElement {
  model: ANY;
  bindData: (node: ANY | undefined) => void;
}

const CASES = [
  { tag: "display-google-protobuf-any", context: "display", payloadTag: "display-furo-fat-string" },
  { tag: "cell-google-protobuf-any", context: "cell", payloadTag: "cell-furo-fat-string" },
  { tag: "celledit-google-protobuf-any", context: "celledit", payloadTag: "celledit-furo-fat-string" },
  { tag: "form-google-protobuf-any", context: "form", payloadTag: "form-furo-fat-string" },
] as const;

/** The inner typerenderer, once the renderer has rendered one. */
const inner = (el: AnyRenderer): FuroUi5Typerenderer | null => el.shadowRoot?.querySelector<FuroUi5Typerenderer>("furo-ui5-typerenderer") ?? null;

const makeFixture = async (tag: string): Promise<AnyRenderer> => {
  const el = await fixture<AnyRenderer>(`<${tag}></${tag}>`);
  return el;
};

describe("google.protobuf.Any renderers", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  describe.each(CASES)("$tag", ({ tag, context, payloadTag }) => {
    it("is registered and exposes the bindable API", async () => {
      const el = await makeFixture(tag);

      expect(customElements.get(tag)).toBeDefined();
      expect(typeof el.bindData).toBe("function");
      // the WIP versions had bindData only, so `.model="${node}"` from a parent silently did nothing
      expect(el.model).toBeInstanceOf(ANY);
    });

    it("renders nothing while the Any is still empty", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();

      el.bindData(node);
      await el.updateComplete;

      expect(inner(el)).toBeNull();
      expect(el.shadowRoot?.textContent.trim()).toBe("");
    });

    it("renders the payload's renderer once data arrives", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      el.bindData(node);
      await el.updateComplete;

      node.__updateWithLiteral(FAT_STRING_LITERAL);
      await el.updateComplete;

      const typerenderer = inner(el);
      expect(typerenderer).not.toBeNull();
      // bound to the unpacked payload, NOT to the ANY envelope
      expect(typerenderer?.model).toBe(node.value);
      expect(typerenderer?.model?.__meta.typeName).toBe("furo.fat.String");
    });

    it(`asks the typerenderer for the "${context}" context`, async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      node.__updateWithLiteral(FAT_STRING_LITERAL);

      el.bindData(node);
      await el.updateComplete;

      expect(inner(el)?.getAttribute("context")).toBe(context);
    });

    it(`resolves to <${payloadTag}>`, async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      node.__updateWithLiteral(FAT_STRING_LITERAL);

      el.bindData(node);
      await el.updateComplete;

      const typerenderer = inner(el);
      await typerenderer?.updateComplete;

      expect([...(typerenderer?.children ?? [])].map(child => child.nodeName.toLowerCase())).toEqual([payloadTag]);
    });

    it("accepts data that was already present at bind time", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      node.__updateWithLiteral(FAT_STRING_LITERAL);

      // no listener has fired yet — the initial read in bindData has to cover this
      el.bindData(node);
      await el.updateComplete;

      expect(inner(el)?.model).toBe(node.value);
    });

    it("setting `model` is equivalent to bindData", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      node.__updateWithLiteral(FAT_STRING_LITERAL);

      el.model = node;
      await el.updateComplete;

      expect(el.model).toBe(node);
      expect(inner(el)?.model).toBe(node.value);
    });

    it("clears back to nothing when the Any is cleared", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      node.__updateWithLiteral(FAT_STRING_LITERAL);
      el.bindData(node);
      await el.updateComplete;
      expect(inner(el)).not.toBeNull();

      node.__clear();
      await el.updateComplete;

      expect(inner(el)).toBeNull();
    });

    it("follows the new node after a rebind, and stops following the old one", async () => {
      const el = await makeFixture(tag);
      const first = new ANY();
      const second = new ANY();

      el.bindData(first);
      el.bindData(second);
      await el.updateComplete;

      // the abandoned node must no longer drive this element
      first.__updateWithLiteral(FAT_STRING_LITERAL);
      await el.updateComplete;
      expect(inner(el)).toBeNull();

      second.__updateWithLiteral(FAT_STRING_LITERAL);
      await el.updateComplete;
      expect(inner(el)?.model).toBe(second.value);
    });

    it("ignores a rebind to the same node and to undefined", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      el.bindData(node);

      el.bindData(node);
      el.bindData(undefined);
      await el.updateComplete;

      node.__updateWithLiteral(FAT_STRING_LITERAL);
      await el.updateComplete;

      // still bound to `node`, and still updating exactly once
      expect(el.model).toBe(node);
      expect(inner(el)?.model).toBe(node.value);
    });

    it("stops listening once disconnected", async () => {
      const el = await makeFixture(tag);
      const node = new ANY();
      el.bindData(node);
      await el.updateComplete;

      el.remove();
      node.__updateWithLiteral(FAT_STRING_LITERAL);
      await delay(0);

      expect(inner(el)).toBeNull();
    });
  });

  describe("[element-specific] missing payload renderer", () => {
    it("surfaces renderer-missing from the inner typerenderer rather than failing silently", async () => {
      const el = await fixture<AnyRenderer>(html`<display-google-protobuf-any></display-google-protobuf-any>`);
      const node = new ANY();
      node.__updateWithLiteral(UNRENDERABLE_LITERAL);

      el.bindData(node);
      await el.updateComplete;

      const typerenderer = inner(el);
      expect(typerenderer).not.toBeNull();

      // the typerenderer waits `rendererTimeout` (300ms) before reporting
      await delay(400);

      expect(typerenderer?.hasAttribute("renderer-missing")).toBe(true);
      expect(typerenderer?.getAttribute("renderer-missing")).toContain("display-tree-navigationnode");
    });
  });
});

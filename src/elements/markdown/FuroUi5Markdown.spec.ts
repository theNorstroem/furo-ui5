/**
 * Spec for `FuroUi5Markdown`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model → UI, rebinding, lifecycle cleanup) and are intended to be portable
 * across binding elements. Blocks tagged `[element-specific]` cover this
 * element's own surface (streaming-mode renderer switch, the `markdown`
 * property, `parseMarkdown()`).
 *
 * Markdown-specific notes vs. the TextInput template:
 *   - Display-only element (extends LitElement, not a UI5 input). The
 *     template's UI→model, FAT, readonly, value-state, and field-constraint
 *     blocks have no analogue here and are omitted.
 *   - Only `STRING` is supported (no `FuroFatString`, no `StringValue`), per
 *     `bindData(fieldNode: STRING | undefined)`.
 *   - Two markdown-it instances toggled by `stream-begins` / `stream-ends`
 *     custom model events; `stream-ends` triggers a re-render with the final
 *     (typographer-enabled) renderer.
 *   - Rendered output lives in the shadow root; tests must
 *     `await el.updateComplete` before asserting on `el.shadowRoot`.
 */
import "@/Assets";
import "./index";

import { STRING } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5Markdown } from "./FuroUi5Markdown";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5Markdown", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Markdown;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-markdown data-testid="test"></furo-ui5-markdown> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-markdown element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-markdown");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Default model state
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5Markdown;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default STRING model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.STRING");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync
  //
  // Only `STRING` is supported. Rendered output is in the shadow root.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5Markdown;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", async () => {
      const model = new STRING("# hello");
      el.bindData(model);
      await el.updateComplete;
      const h1 = el.shadowRoot!.querySelector("h1");
      assert.isOk(h1, "an <h1> should be rendered in the shadow root");
      assert.equal(h1.textContent, "hello");
    });

    it("propagates STRING.value changes to the rendered HTML", async () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "**bold**";
      await el.updateComplete;
      const strong = el.shadowRoot!.querySelector("strong");
      assert.isOk(strong, "a <strong> should be rendered in the shadow root");
      assert.equal(strong.textContent, "bold");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Markdown;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the rendered HTML", async () => {
      const modelA = new STRING("# A");
      const modelB = new STRING("# B");
      el.bindData(modelA);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("h1")?.textContent, "A");
      el.bindData(modelB);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("h1")?.textContent, "B");
      modelA.value = "# stale";
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("h1")?.textContent, "B");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", async () => {
      const model = new STRING("# once");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // a single model mutation should still produce a single, consistent render
      model.value = "# again";
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("h1")?.textContent, "again");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Streaming mode
  //
  // mdFinal has typographer:true → `(c)` becomes `©`.
  // mdStream has typographer:false → `(c)` stays as `(c)`.
  // The renderer is toggled by `stream-begins` / `stream-ends` custom model
  // events; `stream-ends` triggers a re-render with the final renderer.
  // ───────────────────────────────────────────────────────────────────────
  describe("streaming mode [element-specific]", () => {
    let el: FuroUi5Markdown;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("uses the final (typographer) renderer by default", async () => {
      const model = new STRING("(c)");
      el.bindData(model);
      await el.updateComplete;
      const text = el.shadowRoot!.textContent;
      assert.include(text, "©");
      assert.notInclude(text, "(c)");
    });

    it("switches to the stream (no-typographer) renderer after stream-begins", async () => {
      const model = new STRING();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("stream-begins", { detail: model }));
      model.value = "(c)";
      await el.updateComplete;
      const text = el.shadowRoot!.textContent;
      assert.include(text, "(c)");
      assert.notInclude(text, "©");
    });

    it("re-renders with the final renderer on stream-ends", async () => {
      const model = new STRING();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("stream-begins", { detail: model }));
      model.value = "(c)";
      await el.updateComplete;
      assert.include(el.shadowRoot!.textContent, "(c)");
      model.__dispatchEvent(new CustomEvent("stream-ends", { detail: model }));
      await el.updateComplete;
      const text = el.shadowRoot!.textContent;
      assert.include(text, "©");
      assert.notInclude(text, "(c)");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Direct property API (works without bindData)
  // ───────────────────────────────────────────────────────────────────────
  describe("direct property API [element-specific]", () => {
    let el: FuroUi5Markdown;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders when the markdown property is set directly", async () => {
      el.markdown = "# direct";
      await el.updateComplete;
      const h1 = el.shadowRoot!.querySelector("h1");
      assert.isOk(h1);
      assert.equal(h1.textContent, "direct");
      assert.equal(el.markdown, "# direct");
    });

    it("parseMarkdown() renders identically to setting the property", async () => {
      el.parseMarkdown("**hello**");
      await el.updateComplete;
      const strong = el.shadowRoot!.querySelector("strong");
      assert.isOk(strong);
      assert.equal(strong.textContent, "hello");
      assert.equal(el.markdown, "**hello**");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Lifecycle — disconnectedCallback removes model listeners
  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("does not re-render after the element is disconnected", async () => {
      const el: FuroUi5Markdown = await fixture(html`<furo-ui5-markdown></furo-ui5-markdown>`);
      const model = new STRING("# initial");
      el.bindData(model);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("h1")?.textContent, "initial");

      const snapshot = el.shadowRoot!.innerHTML;
      el.remove();
      model.value = "# after-disconnect";
      // give the engine a tick to confirm no async re-render fires
      await delay(50);
      assert.equal(el.shadowRoot!.innerHTML, snapshot);
    });
  });
});

/**
 * Spec for `FuroUi5PrettyJson`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` and mirrored after
 * `src/elements/markdown/FuroUi5Markdown.spec.ts` (the closest reference
 * for a display-only, custom-reader element).
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model -> UI, rebinding) and are intended to be portable across binding
 * elements. Blocks tagged `[element-specific]` cover this element's own
 * surface (`injectData()` method, `json` property setter, and the current
 * lifecycle behavior — see note on that block).
 *
 * PrettyJson-specific notes vs. the TextInput template:
 *   - Display-only element (extends LitElement, not a UI5 input). The
 *     template's UI->model, FAT, readonly, value-state, and field-constraint
 *     blocks have no analogue here and are omitted.
 *   - Custom reader: `bindData` registers a `update` listener
 *     that calls `readFromModel`, which forwards `__toLiteral()` to
 *     `injectData()`.
 *   - The default model is a `STRING("")` constructed in the field
 *     initializer; `bindData(undefined)` is a no-op.
 *   - Rendered output is in the shadow root inside `<pre id="content">`;
 *     tests must `await el.updateComplete` before asserting on it.
 */
import "@/Assets";
import "./index";

import { STRING } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5PrettyJson } from "./FuroUi5PrettyJson";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5PrettyJson", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5PrettyJson;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-pretty-json data-testid="test"></furo-ui5-pretty-json> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-pretty-json element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-pretty-json");
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
    let el: FuroUi5PrettyJson;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-pretty-json></furo-ui5-pretty-json>`);
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
  // Only `STRING` is supported (via the custom `readFromModel` -> `injectData`
  // flow). Rendered output lives in the shadow root inside `<pre id="content">`.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5PrettyJson;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-pretty-json></furo-ui5-pretty-json>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind via the custom reader", async () => {
      const model = new STRING("hello");
      el.bindData(model);
      await el.updateComplete;
      const pre = el.shadowRoot!.querySelector("pre#content");
      assert.isOk(pre, 'a <pre id="content"> should be rendered in the shadow root');
      // JSON.stringify("hello") -> "\"hello\"" -> highlighted as a string span
      const stringSpan = pre.querySelector("span.string");
      assert.isOk(stringSpan, 'a <span class="string"> should highlight the JSON string');
      assert.equal(stringSpan.textContent, '"hello"');
    });

    it("propagates STRING.value changes through update", async () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "world";
      await el.updateComplete;
      const stringSpan = el.shadowRoot!.querySelector("pre#content span.string");
      assert.isOk(stringSpan);
      assert.equal(stringSpan.textContent, '"world"');
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5PrettyJson;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-pretty-json></furo-ui5-pretty-json>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the rendered HTML", async () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("pre#content span.string")?.textContent, '"A"');
      el.bindData(modelB);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("pre#content span.string")?.textContent, '"B"');
      modelA.value = "stale";
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("pre#content span.string")?.textContent, '"B"');
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", async () => {
      const model = new STRING("once");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // a single model mutation should still produce a single, consistent render
      model.value = "again";
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("pre#content span.string")?.textContent, '"again"');
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Direct property API (works without bindData)
  // ───────────────────────────────────────────────────────────────────────
  describe("direct property API [element-specific]", () => {
    let el: FuroUi5PrettyJson;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-pretty-json></furo-ui5-pretty-json>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders when injectData() is called directly without bindData", async () => {
      el.injectData({ name: "alice", age: 30 });
      await el.updateComplete;
      const pre = el.shadowRoot!.querySelector("pre#content");
      assert.isOk(pre);
      const keys = pre.querySelectorAll("span.key");
      const strings = pre.querySelectorAll("span.string");
      const numbers = pre.querySelectorAll("span.number");
      assert.equal(keys.length, 2, "two keys should be highlighted");
      assert.equal(keys[0].textContent, '"name":');
      assert.equal(keys[1].textContent, '"age":');
      assert.equal(strings.length, 1);
      assert.equal(strings[0].textContent, '"alice"');
      assert.equal(numbers.length, 1);
      assert.equal(numbers[0].textContent, "30");
    });

    it("injectData(undefined) clears the rendered content", async () => {
      el.injectData({ a: 1 });
      await el.updateComplete;
      assert.isOk(el.shadowRoot!.querySelector("pre#content span"), "should have content before clear");
      el.injectData(undefined);
      await el.updateComplete;
      assert.isNull(el.shadowRoot!.querySelector("pre#content span"), "content should be cleared");
      const pre = el.shadowRoot!.querySelector("pre#content");
      assert.isOk(pre);
      assert.equal(pre.textContent.trim(), "");
    });

    it("highlights boolean and null values with the correct classes", async () => {
      el.injectData({ flag: true, missing: null });
      await el.updateComplete;
      const boolSpan = el.shadowRoot!.querySelector("pre#content span.boolean");
      const nullSpan = el.shadowRoot!.querySelector("pre#content span.null");
      assert.isOk(boolSpan);
      assert.equal(boolSpan.textContent, "true");
      assert.isOk(nullSpan);
      assert.equal(nullSpan.textContent, "null");
    });

    it("renders when the json property is set directly", async () => {
      el.json = { greeting: "hi" };
      await el.updateComplete;
      const pre = el.shadowRoot!.querySelector("pre#content");
      assert.isOk(pre);
      const key = pre.querySelector("span.key");
      const value = pre.querySelector("span.string");
      assert.isOk(key);
      assert.equal(key.textContent, '"greeting":');
      assert.isOk(value);
      assert.equal(value.textContent, '"hi"');
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Lifecycle
  //
  // `FuroUi5PrettyJson.disconnectedCallback` detaches the
  // `update` listener from the currently bound model. After
  // `el.remove()` a subsequent model mutation must NOT trigger `injectData`
  // → `content` state change → Lit re-render of the (now detached) shadow
  // root, mirroring the markdown reference.
  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("detaches the model listener on disconnect", async () => {
      const el: FuroUi5PrettyJson = await fixture(html`<furo-ui5-pretty-json></furo-ui5-pretty-json>`);
      const model = new STRING("initial");
      el.bindData(model);
      await el.updateComplete;
      assert.equal(el.shadowRoot!.querySelector("pre#content span.string")?.textContent, '"initial"');

      const snapshot = el.shadowRoot!.innerHTML;
      el.remove();
      model.value = "after-disconnect";
      // give the engine a tick for any (unwanted) re-render to settle
      await delay(50);
      assert.equal(el.shadowRoot!.innerHTML, snapshot, "the detached element should not re-render after a model mutation");
    });
  });
});

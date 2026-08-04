/**
 * Spec for `FuroUi5MultiInput`, adapted from the `FuroUi5TextInput` template.
 *
 * `[TEMPLATE]` blocks exercise the universal binding contract (model → UI,
 * UI → model, readonly / value-state, rebinding, a11y) adjusted for a *repeated*
 * string model: each array element renders as a `ui5-token`, committing the input
 * appends an element, deleting a token removes one. The contract is verified for
 * all three accepted element types (STRING, FuroFatString, StringValue).
 * `[element-specific]` blocks cover token rendering and `token-delete` handling.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { ARRAY, STRING, StringValue, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import type Token from "@ui5/webcomponents/dist/Token.js";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterEach, assert, beforeEach, chai, describe, it, test } from "vitest";

import type { FuroUi5MultiInput } from "./FuroUi5MultiInput";

import { FuroFatString, type IFuroFatString } from "@/models";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

/**
 * Returns the tokens this element currently renders, in document order. Query by tag
 * only: once rendered, UI5 reassigns each token to an individual slot (`tokens-1`,
 * `tokens-2`, …), so a `[slot="tokens"]` filter would miss them in a real browser.
 */
const tokensOf = (el: FuroUi5MultiInput): Token[] => [...el.querySelectorAll<Token>("ui5-token")];

describe("FuroUi5MultiInput", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html` <furo-ui5-multi-input accessible-name="name" data-testid="test"></furo-ui5-multi-input> `);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-multi-input element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-multi-input");
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
  // [TEMPLATE] Default model state — a default empty STRING array, and
  // bindData(undefined) / bindData(same) are no-ops.
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default empty array model and renders no tokens", () => {
      assert.isOk(el.model);
      assert.equal(el.model.length, 0);
      assert.equal(tokensOf(el).length, 0);
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = ARRAY.Builder(STRING, ["a"]);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      assert.equal(tokensOf(el).length, 1);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync — binding an array renders one token per
  // element; mutating the array re-renders. Runs for all three element types.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders one token per STRING element on bind", () => {
      el.bindData(ARRAY.Builder(STRING, ["a", "b"]));
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["a", "b"]
      );
    });

    it("adds a token when a STRING element is pushed to the model", () => {
      const model = ARRAY.Builder(STRING, ["a", "b"]);
      el.bindData(model);
      model.push("c");
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["a", "b", "c"]
      );
    });

    it("removes a token when a STRING element is deleted from the model", () => {
      const model = ARRAY.Builder(STRING, ["a", "b"]);
      el.bindData(model);
      model.delete(0);
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["b"]
      );
    });

    it("renders one token per FuroFatString element on bind", () => {
      el.bindData(ARRAY.Builder(FuroFatString, [{ value: "x" }, { value: "y" }] as IFuroFatString[]));
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["x", "y"]
      );
    });

    it("renders one token per StringValue element on bind", () => {
      el.bindData(ARRAY.Builder(StringValue, ["s1", "s2"]));
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["s1", "s2"]
      );
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — committing the input appends an element;
  // deleting a token removes the matching element. Runs for all three types.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("appends a STRING element on change and clears the input", () => {
      const model = ARRAY.Builder(STRING, []);
      el.bindData(model);
      setInputValue(el, "new");
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.value, "new");
      assert.equal(el.value, "");
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["new"]
      );
    });

    it("appends a FuroFatString element on change", () => {
      const model = ARRAY.Builder(FuroFatString, []);
      el.bindData(model);
      setInputValue(el, "new");
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.value.toString(), "new");
    });

    it("appends a StringValue element on change", () => {
      const model = ARRAY.Builder(StringValue, []);
      el.bindData(model);
      setInputValue(el, "new");
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.value, "new");
    });

    it("ignores a change with an empty input value", () => {
      const model = ARRAY.Builder(STRING, ["a"]);
      el.bindData(model);
      el.value = "";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.length, 1);
    });

    it("removes the matching element on token-delete", () => {
      const model = ARRAY.Builder(STRING, ["a", "b", "c"]);
      el.bindData(model);
      const second = tokensOf(el)[1];
      el.dispatchEvent(new CustomEvent("token-delete", { detail: { tokens: [second] } }));
      assert.deepEqual(model.__toLiteral(), ["a", "c"]);
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["a", "c"]
      );
    });

    it("removes multiple elements on a multi-token delete", () => {
      const model = ARRAY.Builder(STRING, ["a", "b", "c"]);
      el.bindData(model);
      const [first, , third] = tokensOf(el);
      el.dispatchEvent(new CustomEvent("token-delete", { detail: { tokens: [first, third] } }));
      assert.deepEqual(model.__toLiteral(), ["b"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly and value-state on the array node
  // propagate to the component.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set / -unset to el.readonly", () => {
      const model = ARRAY.Builder(STRING, []);
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = ARRAY.Builder(STRING, []);
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("applies field constraints (required, read_only, max_length) on bind", () => {
      const model = ARRAY.Builder(STRING, []);
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
        max_length: 10,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
      assert.equal(el.maxlength, 10);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness — re-binding detaches the old array's
  // listeners so stale mutations don't leak through.
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old array after rebind does not change the tokens", () => {
      const modelA = ARRAY.Builder(STRING, ["A"]);
      const modelB = ARRAY.Builder(STRING, ["B"]);
      el.bindData(modelA);
      el.bindData(modelB);
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["B"]
      );
      modelA.push("A2");
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["B"]
      );
    });

    it("UI writes go to the new array only after rebind", () => {
      const modelA = ARRAY.Builder(STRING, []);
      const modelB = ARRAY.Builder(STRING, []);
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(el, "typed");
      assert.equal(modelB.length, 1);
      assert.equal(modelA.length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] token rendering keeps in step with the array
  // ───────────────────────────────────────────────────────────────────────
  describe("token rendering [element-specific]", () => {
    let el: FuroUi5MultiInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-input></furo-ui5-multi-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("rebinds without leaking tokens from the previous array", () => {
      el.bindData(ARRAY.Builder(STRING, ["a", "b", "c"]));
      assert.equal(tokensOf(el).length, 3);
      el.bindData(ARRAY.Builder(STRING, ["x"]));
      assert.equal(tokensOf(el).length, 1);
      assert.equal(tokensOf(el)[0].text, "x");
    });

    it("keeps the token count in sync (no duplication) across delete + add", () => {
      const model = ARRAY.Builder(STRING, ["a", "b", "c"]);
      el.bindData(model);
      assert.equal(tokensOf(el).length, 3);

      // delete the middle token
      const second = tokensOf(el)[1];
      el.dispatchEvent(new CustomEvent("token-delete", { detail: { tokens: [second] } }));
      assert.equal(tokensOf(el).length, model.length);
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["a", "c"]
      );

      // add via committing the input — count tracks the model, no pile-up
      setInputValue(el, "d");
      assert.equal(tokensOf(el).length, model.length);
      assert.deepEqual(
        tokensOf(el).map(t => t.text),
        ["a", "c", "d"]
      );
    });
  });
});

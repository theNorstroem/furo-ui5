/**
 * Spec for the composite `FuroUi5MoneyInput`.
 *
 * Unlike the single-`model` template elements, money is a two-control composite: an
 * amount `ui5-input` (id="amount", round-trips `units`/`nanos`) plus a currency
 * `furo-ui5-combobox` (id="currency", bound to `currencyCode`). The `[TEMPLATE]` blocks
 * are adapted accordingly — amount sync is asserted via the host `amountValue` and the
 * inner controls are reached through the shadow root.
 */
import "@/Assets";
import "./index";

import { ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5MoneyInput } from "./FuroUi5MoneyInput";

import { Money as FuroMoney } from "@/models/furo/type/Money";
import { Money as GoogleMoney } from "@/models/google/type/Money";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

/** Reach the inner amount input (in the shadow root). */
const amountOf = (el: FuroUi5MoneyInput): HTMLElement & { value: string; valueState: string } =>
  el.shadowRoot?.getElementById("amount") as HTMLElement & { value: string; valueState: string };

/** Reach the inner currency combobox (in the shadow root). */
const currencyOf = (el: FuroUi5MoneyInput): HTMLElement & { value: string; optionList?: { id: string }[] } =>
  el.shadowRoot?.getElementById("currency") as HTMLElement & { value: string; optionList?: { id: string }[] };

describe("FuroUi5MoneyInput", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-money-input accessible-name="amount" data-testid="test"></furo-ui5-money-input> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-money-input element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-money-input");
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
  // [TEMPLATE] Default model state — the default model is google.type.Money.
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default google.type.Money model", () => {
      assert.isOk(el.model);
      assert.instanceOf(el.model, GoogleMoney);
      assert.equal(el.model.__meta.typeName, "google.type.Money");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync — amount (units+nanos) → host amountValue,
  // currency → inner combobox value.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial google.type.Money amount + currency on bind", () => {
      const model = new GoogleMoney({ units: "42", nanos: 500000000, currencyCode: "EUR" });
      el.bindData(model);
      assert.equal(el.amountValue, "42.5");
      assert.equal(currencyOf(el).value, "EUR");
    });

    it("reads an empty amount (units=0, nanos=0) as empty string", () => {
      const model = new GoogleMoney({ currencyCode: "EUR" });
      el.bindData(model);
      assert.equal(el.amountValue, "");
    });

    it("propagates units changes to the amount", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      model.units = 7n;
      assert.equal(el.amountValue, "7");
    });

    it("propagates nanos changes to the amount", () => {
      const model = new GoogleMoney({ units: "1" });
      el.bindData(model);
      model.nanos = 250000000;
      assert.equal(el.amountValue, "1.25");
    });

    it("renders a furo.type.Money model the same way", () => {
      const model = new FuroMoney({ units: "5", nanos: 0, currencyCode: "USD" });
      el.bindData(model);
      assert.equal(el.model.__meta.typeName, "furo.type.Money");
      assert.equal(el.amountValue, "5");
      assert.equal(currencyOf(el).value, "USD");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — amount writes on `change` to units/nanos,
  // currency writes through the combobox.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes a decimal amount into units + nanos on change", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      setInputValue(amountOf(el), "42.5");
      assert.equal(model.units.value, 42n);
      assert.equal(model.nanos.value, 500000000);
    });

    it("writes a whole amount with zero nanos", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      setInputValue(amountOf(el), "7");
      assert.equal(model.units.value, 7n);
      assert.equal(model.nanos.value, 0);
    });

    it("writes an empty amount as zero units/nanos", () => {
      const model = new GoogleMoney({ units: "9", nanos: 100000000 });
      el.bindData(model);
      setInputValue(amountOf(el), "");
      assert.equal(model.units.value, 0n);
      assert.equal(model.nanos.value, 0);
    });

    it("writes the currency through the combobox", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      setInputValue(currencyOf(el), "USD");
      assert.equal(model.currencyCode.value, "USD");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly propagation + value-state.
  // readonly lives on the host and reflects to both inner controls.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set / unset to el.readonly", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("reflects readonly to both inner controls", async () => {
      const model = new GoogleMoney();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      await el.updateComplete;
      assert.equal((amountOf(el) as unknown as { readonly: boolean }).readonly, true);
      assert.equal((currencyOf(el) as unknown as { readonly: boolean }).readonly, true);
    });

    it("propagates state-changed → valueState + valueStateMessage on the amount input", () => {
      const model = new GoogleMoney();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      const amount = amountOf(el);
      assert.equal(amount.valueState, ValueState.Negative);
      const vse = amount.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new GoogleMoney();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] currencies attribute populates the combobox option list.
  // ───────────────────────────────────────────────────────────────────────
  describe("currencies attribute [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the comma-separated currencies as combobox options", async () => {
      const el: FuroUi5MoneyInput = await fixture(html`<furo-ui5-money-input currencies="CHF,EUR,USD"></furo-ui5-money-input>`);
      el.bindData(new GoogleMoney());
      await el.updateComplete;
      const options = currencyOf(el).optionList;
      assert.isOk(options);
      assert.deepEqual(
        options.map(o => o.id),
        ["CHF", "EUR", "USD"]
      );
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5MoneyInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the amount", () => {
      const modelA = new GoogleMoney({ units: "1" });
      const modelB = new GoogleMoney({ units: "2" });
      el.bindData(modelA);
      assert.equal(el.amountValue, "1");
      el.bindData(modelB);
      assert.equal(el.amountValue, "2");
      modelA.units = 99n;
      assert.equal(el.amountValue, "2");
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new GoogleMoney({ units: "1" });
      const modelB = new GoogleMoney({ units: "2" });
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(amountOf(el), "42");
      assert.equal(modelB.units.value, 42n);
      assert.equal(modelA.units.value, 1n);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new GoogleMoney({ units: "5" });
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(amountOf(el), "42");
      assert.equal(model.units.value, 42n);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Lifecycle — disconnecting removes the listeners bindData added.
  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("stops reacting to model changes after disconnect", async () => {
      const el: FuroUi5MoneyInput = await fixture(html`<furo-ui5-money-input></furo-ui5-money-input>`);
      const model = new GoogleMoney({ units: "1" });
      el.bindData(model);
      assert.equal(el.amountValue, "1");
      el.remove();
      model.units = 99n;
      assert.equal(el.amountValue, "1");
    });
  });
});

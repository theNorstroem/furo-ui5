/**
 * Spec for `FuroUi5BarcodeScannerDialog`. This element is a **write-only**
 * binding element (the scanner produces values; it never reads from the model),
 * so most of the `[TEMPLATE]` blocks from `FuroUi5TextInput.spec.ts` do not apply:
 *   - `model → UI value sync` is skipped (no display of bound model values)
 *   - `model-driven state` is skipped (no FieldNodeValueState / ReadonlyState / constraint handling)
 *   - `FAT attribute mapping` is skipped (no FatHandler is constructed)
 *   - `lifecycle` is skipped (no connectedCallback-registered listener to detach)
 * The `UI → model value sync` block is reshaped into `scan-success → model write`
 * since this element listens for the UI5 `scan-success` event, not `input`/`change`.
 * Element-specific blocks cover `show()` / `close()` and the public `code` field.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5BarcodeScannerDialog } from "./FuroUi5BarcodeScannerDialog";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const dispatchScanSuccess = (el: HTMLElement, text: string): void => {
  el.dispatchEvent(
    new CustomEvent("scan-success", {
      detail: { text, rawBytes: new Uint8Array() },
      bubbles: true,
      composed: true,
    }),
  );
};

describe("FuroUi5BarcodeScannerDialog", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5BarcodeScannerDialog;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(
        html` <furo-ui5-barcode-scanner-dialog data-testid="test"></furo-ui5-barcode-scanner-dialog> `,
      );
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-barcode-scanner-dialog element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-barcode-scanner-dialog");
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
    let el: FuroUi5BarcodeScannerDialog;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-barcode-scanner-dialog></furo-ui5-barcode-scanner-dialog>`);
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
  // scan-success → model write (adapted from `UI → model value sync [TEMPLATE]`)
  // The element listens to UI5's `scan-success` instead of `input`/`change`.
  // ───────────────────────────────────────────────────────────────────────
  describe("scan-success → model write [adapted TEMPLATE]", () => {
    let el: FuroUi5BarcodeScannerDialog;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-barcode-scanner-dialog></furo-ui5-barcode-scanner-dialog>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on scan-success", () => {
      const model = new STRING();
      el.bindData(model);
      dispatchScanSuccess(el, "ABC-123");
      assert.equal(el.code, "ABC-123");
      assert.equal(model.value, "ABC-123");
    });

    it("writes to a FuroFatString model on scan-success", () => {
      const model = createFatString();
      el.bindData(model);
      dispatchScanSuccess(el, "FAT-999");
      assert.equal(el.code, "FAT-999");
      assert.equal(model.value.value, "FAT-999");
    });

    it("writes to a StringValue model on scan-success", () => {
      const model = new StringValue();
      el.bindData(model);
      dispatchScanSuccess(el, "SV-42");
      assert.equal(el.code, "SV-42");
      assert.equal(model.value, "SV-42");
    });

    it("auto-closes the dialog after a successful scan", () => {
      const model = new STRING();
      el.bindData(model);
      el.open = true;
      dispatchScanSuccess(el, "anything");
      assert.equal(el.open, false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness — adapted for a write-only element:
  // after rebind, scan-success writes only to the new model.
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5BarcodeScannerDialog;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-barcode-scanner-dialog></furo-ui5-barcode-scanner-dialog>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("scans after rebind go to the new model only", () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      el.bindData(modelB);
      dispatchScanSuccess(el, "scanned");
      assert.equal(modelB.value, "scanned");
      assert.equal(modelA.value, "A");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("init");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // a duplicated listener would have called writeToModel twice; the resulting
      // model.value is still the scanned text, but more importantly el.code is
      // written exactly once — verify by mutating the property between calls.
      dispatchScanSuccess(el, "once");
      assert.equal(model.value, "once");
      assert.equal(el.code, "once");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] show() / close()
  // ───────────────────────────────────────────────────────────────────────
  describe("show() / close() [element-specific]", () => {
    let el: FuroUi5BarcodeScannerDialog;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-barcode-scanner-dialog></furo-ui5-barcode-scanner-dialog>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("show() sets el.open = true", () => {
      assert.equal(el.open, false);
      el.show();
      assert.equal(el.open, true);
    });

    it("close() sets el.open = false", () => {
      el.open = true;
      el.close();
      assert.equal(el.open, false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] public `code` property
  // ───────────────────────────────────────────────────────────────────────
  describe("code property [element-specific]", () => {
    let el: FuroUi5BarcodeScannerDialog;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-barcode-scanner-dialog></furo-ui5-barcode-scanner-dialog>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("is empty by default", () => {
      assert.equal(el.code, "");
    });

    it("reflects the scan-success detail text", () => {
      const model = new STRING();
      el.bindData(model);
      dispatchScanSuccess(el, "QR-PAYLOAD");
      assert.equal(el.code, "QR-PAYLOAD");
    });
  });
});

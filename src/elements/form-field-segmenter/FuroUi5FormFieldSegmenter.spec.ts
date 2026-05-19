import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5FormFieldSegmenter } from "./FuroUi5FormFieldSegmenter";

import FormFieldSegmentationPatterns from "@/types/FormFieldSegmentationPatterns";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FormFieldSegmenter Component", async () => {
  let el: FuroUi5FormFieldSegmenter;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-form-field-segmenter data-testid="test" unit="EUR" pattern="SmallBig">
        <span data-testid="child-a">A</span>
        <span data-testid="child-b">B</span>
      </furo-ui5-form-field-segmenter>
    `);
    await el.updateComplete;
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-form-field-segmenter element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-form-field-segmenter");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose unit as a property reflecting the attribute", () => {
    assert.equal(el.unit, "EUR");
  });

  it("should expose pattern as a property reflecting the attribute (SmallBig)", () => {
    assert.equal(el.pattern, FormFieldSegmentationPatterns.SmallBig);
  });

  it("should reflect pattern back to the host attribute", () => {
    assert.equal(el.getAttribute("pattern"), "SmallBig");
  });

  it("should accept a different pattern value at runtime (BigSmall)", async () => {
    el.pattern = FormFieldSegmentationPatterns.BigSmall;
    await el.updateComplete;
    await delay(16);
    assert.equal(el.pattern, FormFieldSegmentationPatterns.BigSmall);
    assert.equal(el.getAttribute("pattern"), "BigSmall");
    // reset for any downstream assertions
    el.pattern = FormFieldSegmentationPatterns.SmallBig;
    await el.updateComplete;
  });

  it("should render the unit text inside the .unit div in shadow DOM", () => {
    const unitDiv = el.shadowRoot!.querySelector(".unit");
    assert.isOk(unitDiv);
    assert.equal(unitDiv.textContent, "EUR");
  });

  it("should render a default slot that exposes the light-DOM children", () => {
    const slot = el.shadowRoot!.querySelector("slot");
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 2);
    assert.equal(assigned[0].getAttribute("data-testid"), "child-a");
    assert.equal(assigned[1].getAttribute("data-testid"), "child-b");
  });

  it("should lay out the host as a 12-column CSS grid", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.display, "grid");
    // grid-template-columns is resolved to 12 explicit tracks
    const tracks = styles.gridTemplateColumns.split(/\s+/).filter(Boolean);
    assert.equal(tracks.length, 12, `expected 12 grid columns, got ${String(tracks.length)} (${styles.gridTemplateColumns})`);
  });

  it("should set align-items to center on the host", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.alignItems, "center");
  });
});

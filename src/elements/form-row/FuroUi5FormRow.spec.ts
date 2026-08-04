import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5FormRow } from "./FuroUi5FormRow";

chai.use(chaiA11yAxe);

describe("FormRow Component", async () => {
  let el: FuroUi5FormRow;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-form-row data-testid="test">
        <span slot="label" data-testid="label-child">Label</span>
        <input data-testid="field-child" aria-label="field" />
        <span slot="text" data-testid="text-child">Helper text</span>
      </furo-ui5-form-row>
    `);
    await el.updateComplete;
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-form-row element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-form-row");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose the label slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="label"]');
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1);
    assert.equal(assigned[0].getAttribute("data-testid"), "label-child");
  });

  it("should expose the default (field) slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>("slot:not([name])");
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1, "expected exactly one element in the default (field) slot");
    assert.equal(assigned[0].getAttribute("data-testid"), "field-child");
  });

  it("should expose the text slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="text"]');
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1);
    assert.equal(assigned[0].getAttribute("data-testid"), "text-child");
  });

  it("should render the .label, .field, and .space wrapper divs in the shadow root", () => {
    const labelDiv = el.shadowRoot!.querySelector(".label");
    const fieldDiv = el.shadowRoot!.querySelector(".field");
    const spaceDiv = el.shadowRoot!.querySelector(".space");
    assert.isOk(labelDiv);
    assert.isOk(fieldDiv);
    assert.isOk(spaceDiv);
  });

  it("should lay out the host as a 12-column CSS grid", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.display, "grid");
    const tracks = styles.gridTemplateColumns.split(/\s+/).filter(Boolean);
    assert.equal(tracks.length, 12, `expected 12 grid columns, got ${String(tracks.length)} (${styles.gridTemplateColumns})`);
  });

  it("should align grid items to the start on the host", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.alignItems, "start");
  });

  it("should declare inline-size container queries on the host", () => {
    const styles = window.getComputedStyle(el);
    // container-type: inline-size resolves to the keyword as-is
    assert.equal(styles.containerType, "inline-size");
  });

  it("should hide the host when the [hidden] attribute is set", async () => {
    el.setAttribute("hidden", "");
    await el.updateComplete;
    const styles = window.getComputedStyle(el);
    assert.equal(styles.display, "none");
    el.removeAttribute("hidden");
    await el.updateComplete;
  });
});

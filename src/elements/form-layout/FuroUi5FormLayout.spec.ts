import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5FormLayout } from "./FuroUi5FormLayout";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FormLayout Component", async () => {
  let el: FuroUi5FormLayout;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-form-layout form-title="My Form" heading-level="H3">
        <button slot="action" data-testid="action-btn">Save</button>
        <div data-testid="content">CONTENT</div>
      </furo-ui5-form-layout>
    `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-form-layout element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-form-layout");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose formTitle and headingLevel properties from the fixture", () => {
    assert.equal(el.formTitle, "My Form");
    assert.equal(el.headingLevel, "H3");
  });

  it("should render the form title text in shadow", () => {
    assert.include(el.shadowRoot!.textContent, "My Form");
  });

  it("should reflect headingLevel onto the inner ui5-title level attribute", () => {
    const title = el.shadowRoot!.querySelector("ui5-title");
    assert.isNotNull(title);
    assert.equal(title.getAttribute("level"), "H3");
  });

  it("should expose default-slot content to the slot", () => {
    const slotted = el.querySelector('[data-testid="content"]');
    assert.isNotNull(slotted);
    assert.equal(slotted.textContent, "CONTENT");
  });

  it("should assign slotted elements with slot=action to the action slot", () => {
    const action = el.querySelector('[data-testid="action-btn"]');
    assert.isNotNull(action);
    assert.equal(action.getAttribute("slot"), "action");

    const actionSlot: HTMLSlotElement | null = el.shadowRoot!.querySelector('slot[name="action"]');
    assert.isNotNull(actionSlot);
    const assigned = actionSlot.assignedElements();
    assert.equal(assigned.length, 1);
    assert.equal(assigned[0], action);
  });

  it("should default headingLevel to H5 when no attribute is supplied", async () => {
    const fresh = await fixture<FuroUi5FormLayout>(html` <furo-ui5-form-layout></furo-ui5-form-layout> `);
    await delay(16);
    assert.equal(fresh.headingLevel, "H5");
    assert.equal(fresh.formTitle, "");
    const title = fresh.shadowRoot!.querySelector("ui5-title");
    assert.isNotNull(title);
    assert.equal(title.getAttribute("level"), "H5");
  });

  it("should not reflect multi-columns when only a single default-slot child is present", async () => {
    const single = await fixture<FuroUi5FormLayout>(html`
      <furo-ui5-form-layout form-title="Single">
        <div>only-child</div>
      </furo-ui5-form-layout>
    `);
    await delay(16);
    assert.equal(single.hasAttribute("multi-columns"), false);
  });

  it("should auto-detect multi-columns when more than one default-slot child exists", async () => {
    const multi = await fixture<FuroUi5FormLayout>(html`
      <furo-ui5-form-layout form-title="Multi">
        <div>one</div>
        <div>two</div>
      </furo-ui5-form-layout>
    `);
    await delay(16);
    assert.equal(multi.hasAttribute("multi-columns"), true);
  });

  it("should flip multi-columns reactively after appending a second child via slotchange", async () => {
    const dyn = await fixture<FuroUi5FormLayout>(html`
      <furo-ui5-form-layout form-title="Dyn">
        <div>first</div>
      </furo-ui5-form-layout>
    `);
    await delay(16);
    assert.equal(dyn.hasAttribute("multi-columns"), false);

    const extra = document.createElement("div");
    extra.textContent = "second";
    dyn.appendChild(extra);
    await delay(16);

    assert.equal(dyn.hasAttribute("multi-columns"), true);
  });
});

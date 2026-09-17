import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5TableToolbar } from "./FuroUi5TableToolbar";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const displayOf = (el: FuroUi5TableToolbar, selector: string): string => {
  const node = el.shadowRoot!.querySelector(selector);
  assert.isOk(node, `expected ${selector} in the shadow root`);
  return window.getComputedStyle(node).display;
};

describe("TableToolbar Component", async () => {
  let el: FuroUi5TableToolbar;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-table-toolbar data-testid="test">
        <span data-testid="title-child">Positions (23)</span>
        <input slot="middle" data-testid="middle-child" aria-label="search" />
        <span slot="action" data-testid="action-child">actions</span>
      </furo-ui5-table-toolbar>
    `);
    await el.updateComplete;
    await delay(0);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-table-toolbar element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-table-toolbar");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should render the #wrapper and the three area divs in the shadow root", () => {
    assert.isOk(el.shadowRoot!.querySelector("#wrapper"));
    assert.isOk(el.shadowRoot!.querySelector("#default"));
    assert.isOk(el.shadowRoot!.querySelector("#mid"));
    assert.isOk(el.shadowRoot!.querySelector("#action"));
  });

  it("should expose the three areas as css parts", () => {
    assert.equal(el.shadowRoot!.querySelector("#default")!.getAttribute("part"), "default");
    assert.equal(el.shadowRoot!.querySelector("#mid")!.getAttribute("part"), "middle");
    assert.equal(el.shadowRoot!.querySelector("#action")!.getAttribute("part"), "action");
  });

  it("should expose the default slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>("slot:not([name])");
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1, "expected exactly one element in the default slot");
    assert.equal(assigned[0].getAttribute("data-testid"), "title-child");
  });

  it("should expose the middle slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="middle"]');
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1);
    assert.equal(assigned[0].getAttribute("data-testid"), "middle-child");
  });

  it("should expose the action slot via assignedElements()", () => {
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="action"]');
    assert.isOk(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 1);
    assert.equal(assigned[0].getAttribute("data-testid"), "action-child");
  });

  it("should declare inline-size container queries on the host", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.containerType, "inline-size");
  });

  it("should hide the host when the [hidden] attribute is set", async () => {
    el.setAttribute("hidden", "");
    await el.updateComplete;
    assert.equal(window.getComputedStyle(el).display, "none");
    el.removeAttribute("hidden");
    await el.updateComplete;
  });
});

describe("TableToolbar empty area collapsing", async () => {
  afterAll(() => {
    fixtureCleanup();
  });

  it("should lay out the middle and the action area when both are filled", async () => {
    const el: FuroUi5TableToolbar = await fixture(html`
      <furo-ui5-table-toolbar>
        <span>Positions</span>
        <span slot="middle">search</span>
        <span slot="action">actions</span>
      </furo-ui5-table-toolbar>
    `);
    await el.updateComplete;
    await delay(0);

    assert.equal(displayOf(el, "#default"), "flex");
    assert.equal(displayOf(el, "#mid"), "flex", "[has-middle] should reveal #mid");
    assert.equal(displayOf(el, "#action"), "flex", "[has-action] should reveal #action");
    assert.isTrue(el.hasAttribute("has-middle"));
    assert.isTrue(el.hasAttribute("has-action"));
  });

  it("should remove the middle and the action area from the layout when nothing is slotted into them", async () => {
    const el: FuroUi5TableToolbar = await fixture(html`
      <furo-ui5-table-toolbar>
        <span>Positions</span>
      </furo-ui5-table-toolbar>
    `);
    await el.updateComplete;
    await delay(0);

    assert.equal(displayOf(el, "#default"), "flex", "the start area is always laid out");
    assert.equal(displayOf(el, "#mid"), "none");
    assert.equal(displayOf(el, "#action"), "none");
    assert.isFalse(el.hasAttribute("has-middle"));
    assert.isFalse(el.hasAttribute("has-action"));
  });

  it("should collapse only the middle area when just the action slot is filled", async () => {
    const el: FuroUi5TableToolbar = await fixture(html`
      <furo-ui5-table-toolbar>
        <span>Positions</span>
        <span slot="action">actions</span>
      </furo-ui5-table-toolbar>
    `);
    await el.updateComplete;
    await delay(0);

    assert.equal(displayOf(el, "#mid"), "none");
    assert.equal(displayOf(el, "#action"), "flex");
  });

  it("should react to a slotted element being added or removed at runtime", async () => {
    const el: FuroUi5TableToolbar = await fixture(html`
      <furo-ui5-table-toolbar>
        <span>Positions</span>
      </furo-ui5-table-toolbar>
    `);
    await el.updateComplete;
    await delay(0);
    assert.equal(displayOf(el, "#action"), "none");

    const action = document.createElement("span");
    action.slot = "action";
    action.textContent = "actions";
    el.appendChild(action);
    await delay(0);
    assert.equal(displayOf(el, "#action"), "flex", "adding a [slot=action] child should reveal #action");
    assert.isTrue(el.hasAttribute("has-action"));

    action.remove();
    await delay(0);
    assert.equal(displayOf(el, "#action"), "none", "removing it should collapse #action again");
    assert.isFalse(el.hasAttribute("has-action"));
  });
});

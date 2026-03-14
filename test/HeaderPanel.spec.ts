import "@/Assets";
import "@/web-components/furo-ui5-header-panel";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Button, FuroUi5HeaderPanel, FuroUi5Icon } from "../src";

chai.use(chaiA11yAxe);

describe("DynamicHeader Component", async () => {
  let el: FuroUi5HeaderPanel;

  let elLocator: LocatorSelectors;
  let headerButton: FuroUi5Button;
  let objectIcon:FuroUi5Icon;
  let collapseExpandIcon:FuroUi5Icon;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-header-panel
        is-favorite
        collapsed
        show-dropdown
        shadow
        object-icon="product"
        header-text="Header">
        <div data-testid="content">CONTENT</div>
      </furo-ui5-header-panel> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("header");
    headerButton = el.shadowRoot!.querySelector("furo-ui5-button") as FuroUi5Button;
    objectIcon = el.shadowRoot!.querySelector("furo-ui5-icon[name='product']") as FuroUi5Icon;
    collapseExpandIcon = el.shadowRoot!.querySelector("furo-ui5-icon.collapser-button") as FuroUi5Icon;
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-header-panel element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-header-panel");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should notify variant-icon-clicked", () =>
    new Promise(done => {
      el.addEventListener("variant-icon-clicked", ((e: CustomEvent<HTMLElement>) => {
        assert.equal(headerButton, e.detail);
        done(1);
      }) as EventListener);
      headerButton.click();
    }));

  it("should notify variant-icon-clicked on arrow down", () =>
    new Promise(done => {
      el.addEventListener("variant-icon-clicked", ((e: CustomEvent<HTMLElement>) => {
        assert.equal(headerButton, e.detail);
        done(1);
      }) as EventListener);
      headerButton.focus();
      headerButton.dispatchEvent(new KeyboardEvent("keydown", {code:'ArrowDown',key:'ArrowDown'}))
    }));

  it("should expand on click ", async () => {
    assert.equal(el.collapsed, true);

    collapseExpandIcon.click()

    assert.equal(el.getAttribute('collapsed') === null, true);
  });
});

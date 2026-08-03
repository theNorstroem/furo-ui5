import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5HeaderPanel } from "./FuroUi5HeaderPanel";

import { FuroUi5Button } from "@/elements/button/FuroUi5Button";
import { FuroUi5Icon } from "@/elements/icon/FuroUi5Icon";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("DynamicHeader Component", async () => {
  let el: FuroUi5HeaderPanel;

  let headerButton: FuroUi5Button;
  let collapseExpandIcon: FuroUi5Icon;
  let favoriteIcon: FuroUi5Icon;
  let objectIcon: FuroUi5Icon;
  let pinIcon: FuroUi5Icon;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-header-panel is-favorite collapsed show-dropdown shadow object-icon="product" header-text="Header">
        <div data-testid="content">CONTENT</div>
      </furo-ui5-header-panel>
    `);
    await delay(16);

    headerButton = el.shadowRoot!.querySelector("furo-ui5-button")!;
    collapseExpandIcon = el.shadowRoot!.querySelector("furo-ui5-icon.collapser-button")!;
    favoriteIcon = el.shadowRoot!.querySelector('furo-ui5-icon[name="favorite"]')!;
    objectIcon = el.shadowRoot!.querySelector('furo-ui5-icon[name="product"]')!;
    pinIcon = el.shadowRoot!.querySelector("furo-ui5-icon.pin-button")!;
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

  it("should render the configured header text", () => {
    assert.include(el.shadowRoot!.textContent, "Header");
  });

  it("should expose default-slot content to the slot", () => {
    const slottedContent = el.querySelector('[data-testid="content"]');
    assert.isNotNull(slottedContent);
    assert.equal(slottedContent.textContent, "CONTENT");
  });

  it("should resolve the favorite, object and pin sub-icons in shadow", () => {
    assert.isNotNull(favoriteIcon, "favorite icon is rendered when is-favorite is set");
    assert.isNotNull(objectIcon, "object icon is rendered when object-icon is set");
    assert.isNotNull(pinIcon, "pin icon is always rendered in the splitter bar");
  });

  it("should notify variant-icon-clicked on the header button click", () =>
    new Promise(done => {
      el.addEventListener(
        "variant-icon-clicked",
        e => {
          assert.equal(headerButton, (e as CustomEvent<HTMLElement>).detail);
          done(1);
        },
        { once: true }
      );
      headerButton.click();
    }));

  it("should notify variant-icon-clicked on ArrowDown keydown", () =>
    new Promise(done => {
      el.addEventListener(
        "variant-icon-clicked",
        e => {
          assert.equal(headerButton, (e as CustomEvent<HTMLElement>).detail);
          done(1);
        },
        { once: true }
      );
      headerButton.focus();
      headerButton.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowDown", key: "ArrowDown" }));
    }));

  it("should notify favorite-icon-clicked when the favorite icon is clicked", () =>
    new Promise(done => {
      el.addEventListener(
        "favorite-icon-clicked",
        () => {
          done(1);
        },
        { once: true }
      );
      favoriteIcon.click();
    }));

  it("should notify object-icon-clicked when the object icon is clicked", () =>
    new Promise(done => {
      el.addEventListener(
        "object-icon-clicked",
        () => {
          done(1);
        },
        { once: true }
      );
      objectIcon.click();
    }));

  it("focus() should focus the variant button", async () => {
    el.focus();
    // The variant button is a UI5 element, whose focus() is async — it awaits its own DOM ref. The
    // override does not surface that promise, so yield a task before reading activeElement rather
    // than racing it. Without this the assertion passes only when the machine is fast enough.
    await delay(0);
    assert.equal(el.shadowRoot!.activeElement, headerButton);
  });

  it("expand() should clear the collapsed state", async () => {
    assert.equal(el.collapsed, true, "fixture starts collapsed");
    el.expand();
    await delay(300);
    assert.equal(el.collapsed, false, "collapsed cleared after expand()");
  });

  it("collapse() should set the collapsed state", async () => {
    assert.equal(el.collapsed, false, "starts expanded from previous test");
    el.collapse();
    await delay(300);
    assert.equal(el.collapsed, true, "collapsed set after collapse()");
  });

  it("toggling via the collapser button should expand from collapsed", async () => {
    assert.equal(el.collapsed, true);
    collapseExpandIcon.click();
    await delay(600);
    assert.equal(el.getAttribute("collapsed") === null, true);
  });

  // pin tests run consecutively: first click sets pinned=true and fires "pinned",
  // second click sets pinned=false and fires "unpinned". Order matters.
  it("clicking the pin icon should fire pinned and set isPinned=true", () =>
    new Promise(done => {
      el.addEventListener(
        "pinned",
        () => {
          assert.equal(el.isPinned, true);
          done(1);
        },
        { once: true }
      );
      pinIcon.click();
    }));

  it("collapse() and expand() should be no-ops while pinned", async () => {
    assert.equal(el.isPinned, true, "preceded by pin test");
    const initial = el.collapsed;
    el.collapse();
    await delay(300);
    assert.equal(el.collapsed, initial, "collapse() does nothing while pinned");
    el.expand();
    await delay(300);
    assert.equal(el.collapsed, initial, "expand() does nothing while pinned");
  });

  it("clicking the pin icon again should fire unpinned and set isPinned=false", () =>
    new Promise(done => {
      el.addEventListener(
        "unpinned",
        () => {
          assert.equal(el.isPinned, false);
          done(1);
        },
        { once: true }
      );
      pinIcon.click();
    }));
});

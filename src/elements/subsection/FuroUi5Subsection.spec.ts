import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Subsection } from "./FuroUi5Subsection";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Subsection Component", async () => {
  let el: FuroUi5Subsection;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-subsection heading="Sub Title" heading-level="H3" show-more-text="more" show-less-text="less">
        <div data-testid="content">CONTENT</div>
        <div slot="action" data-testid="action">ACTION</div>
        <div slot="more" data-testid="more">MORE</div>
      </furo-ui5-subsection>
    `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-subsection element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-subsection");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should set the furo-ui5-subsection attribute on connect", () => {
    assert.equal(el.hasAttribute("furo-ui5-subsection"), true);
  });

  it("should expose heading and configurable show-more/less labels", () => {
    assert.equal(el.heading, "Sub Title");
    assert.equal(el.headingLevel, "H3");
    assert.equal(el.showMoreText, "more");
    assert.equal(el.showLessText, "less");
  });

  it("should render the heading text in shadow", () => {
    assert.include(el.shadowRoot!.textContent, "Sub Title");
  });

  it("should start collapsed (expanded=false)", () => {
    assert.equal(el.expanded, false);
    assert.equal(el.hasAttribute("expanded"), false);
  });

  it("should reflect expanded as attribute when toggled", async () => {
    el.expanded = true;
    await delay(16);
    assert.equal(el.hasAttribute("expanded"), true, "expanded attribute reflected");
    el.expanded = false;
    await delay(16);
    assert.equal(el.hasAttribute("expanded"), false);
  });

  it("should toggle expanded when the 'show more' link is clicked", async () => {
    const moreLink = el.shadowRoot!.querySelector<HTMLElement>("furo-horizontal-flex.more furo-ui5-link")!;
    moreLink.click();
    await delay(16);
    assert.equal(el.expanded, true, "expanded=true after show-more click");
    const lessLink = el.shadowRoot!.querySelector<HTMLElement>("furo-horizontal-flex.less furo-ui5-link")!;
    lessLink.click();
    await delay(16);
    assert.equal(el.expanded, false, "expanded=false after show-less click");
  });

  it("should reflect fullWidth as an attribute", async () => {
    el.fullWidth = true;
    await delay(16);
    assert.equal(el.hasAttribute("full-width"), true);
    el.fullWidth = false;
    await delay(16);
    assert.equal(el.hasAttribute("full-width"), false);
  });

  it("should reveal the 'show more' link reactively when a more-slot child is appended", async () => {
    const dyn = await fixture<FuroUi5Subsection>(html` <furo-ui5-subsection heading="Dyn"><div>content</div></furo-ui5-subsection> `);
    await delay(16);
    const moreLink = dyn.shadowRoot!.querySelector<HTMLElement>("furo-horizontal-flex.more furo-ui5-link")!;
    assert.equal(moreLink.hasAttribute("hidden"), true, "link hidden without more content");

    const extra = document.createElement("div");
    extra.slot = "more";
    extra.textContent = "MORE";
    dyn.appendChild(extra);
    await delay(16);

    assert.equal(moreLink.hasAttribute("hidden"), false, "link visible after appending more content");
  });

  it("should expose default, action, and more slot content", () => {
    assert.isNotNull(el.querySelector('[data-testid="content"]'));
    assert.isNotNull(el.querySelector('[data-testid="action"]'));
    assert.isNotNull(el.querySelector('[data-testid="more"]'));
  });
});

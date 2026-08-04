import "@/Assets";
import "@/elements/title";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Section } from "./FuroUi5Section";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Section Component", async () => {
  let el: FuroUi5Section;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-section heading="My Heading" heading-level="H2">
        <div data-testid="content">CONTENT</div>
      </furo-ui5-section>
    `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-section element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-section");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should set the furo-ui5-section attribute on connect", () => {
    assert.equal(el.hasAttribute("furo-ui5-section"), true);
  });

  it("should expose heading and headingLevel properties from the fixture", () => {
    assert.equal(el.heading, "My Heading");
    assert.equal(el.headingLevel, "H2");
  });

  it("should render the heading text in shadow", () => {
    assert.include(el.shadowRoot!.textContent, "My Heading");
  });

  it("should set aria-label on the inner section to the heading", () => {
    const section = el.shadowRoot!.querySelector("section");
    assert.isNotNull(section);
    assert.equal(section.getAttribute("aria-label"), "My Heading");
  });

  it("should expose default-slot content", () => {
    const slotted = el.querySelector('[data-testid="content"]');
    assert.isNotNull(slotted);
    assert.equal(slotted.textContent, "CONTENT");
  });

  it("should not render a title when heading is empty", async () => {
    const blank = await fixture<FuroUi5Section>(html` <furo-ui5-section></furo-ui5-section> `);
    await delay(16);
    assert.isNull(blank.shadowRoot!.querySelector("furo-ui5-title"));
  });
});

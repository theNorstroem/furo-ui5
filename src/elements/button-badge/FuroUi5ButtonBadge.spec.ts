import "@/Assets";
import "@/elements/button";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5ButtonBadge } from "./FuroUi5ButtonBadge";

import type { FuroUi5Button } from "@/elements/button/FuroUi5Button";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("ButtonBadge Component", async () => {
  let el: FuroUi5ButtonBadge;
  let host: FuroUi5Button;
  let slottedBadge: FuroUi5ButtonBadge;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-button-badge text="44+" design="OverlayText"></furo-ui5-button-badge> `);
    host = await fixture(html`
      <furo-ui5-button design="Emphasized">
        Click me
        <furo-ui5-button-badge slot="badge" text="9+" design="AttentionDot"></furo-ui5-button-badge>
      </furo-ui5-button>
    `);
    slottedBadge = host.querySelector('furo-ui5-button-badge[slot="badge"]')!;
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-button-badge element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-button-badge");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(host);
  });

  it("should expose the text attribute as a property and accept runtime changes", async () => {
    assert.equal(el.text, "44+");
    el.setAttribute("text", "99+");
    await delay(16);
    assert.equal(el.text, "99+");
    el.setAttribute("text", "44+");
    await delay(16);
  });

  it("should round-trip every supported design value", async () => {
    for (const design of ["OverlayText", "AttentionDot", "InlineText"]) {
      el.setAttribute("design", design);
      await delay(16);
      assert.equal(el.design, design, `design "${design}" should round-trip`);
    }
    el.setAttribute("design", "OverlayText");
    await delay(16);
  });

  it("hide() and show() should toggle the hidden attribute and visibility", () => {
    assert.equal(el.checkVisibility(), true, "starts visible");
    el.hide();
    assert.equal(el.hasAttribute("hidden"), true, "has hidden attribute after hide()");
    assert.equal(el.checkVisibility(), false, "not visible after hide()");
    el.show();
    assert.equal(el.hasAttribute("hidden"), false, "no hidden attribute after show()");
    assert.equal(el.checkVisibility(), true, "visible after show()");
  });

  it("should attach to a furo-ui5-button via slot='badge'", () => {
    assert.isNotNull(slottedBadge, "badge resolved by slot selector");
    assert.equal(slottedBadge.getAttribute("slot"), "badge");
    assert.equal(slottedBadge.text, "9+");
    assert.equal(slottedBadge.design, "AttentionDot");
    assert.equal(slottedBadge.parentElement, host);
  });
});

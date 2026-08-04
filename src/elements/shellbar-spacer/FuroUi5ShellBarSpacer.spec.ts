import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5ShellBarSpacer } from "./FuroUi5ShellBarSpacer";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("ShellBarSpacer Component", async () => {
  let el: FuroUi5ShellBarSpacer;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-shellbar-spacer></furo-ui5-shellbar-spacer> `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-shellbar-spacer element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.tagName.toLowerCase(), "furo-ui5-shellbar-spacer");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    // ui5-shellbar-spacer is a layout primitive intended to live inside a ui5-shellbar.
    // When rendered standalone it has no visible/rendered output of its own, so
    // axe cannot evaluate a meaningful surface. We still run the audit to catch
    // regressions in the wrapper itself.
    await assert.isAccessible(el);
  });

  it("should set the furo-ui5-shellbar-spacer marker attribute on connect", () => {
    // UI5Element sets `getPureTag()` as a marker attribute on connect; for this
    // wrapper the pure tag is the overridden `furo-ui5-shellbar-spacer`.
    assert.equal(el.hasAttribute("furo-ui5-shellbar-spacer"), true);
  });

  it("should not attach a shadow root (no template)", () => {
    // ShellBarSpacer has no template — UI5 skips shadow root creation entirely.
    assert.isNull(el.shadowRoot);
  });

  it("should not render any light-dom children", () => {
    // The wrapper is a layout primitive — it must not inject any children of its own.
    assert.equal(el.childNodes.length, 0);
  });

  it("should default the visible property to false", () => {
    assert.equal(el.visible, false);
  });

  it("should reflect the visible property when toggled", async () => {
    el.visible = true;
    await delay(16);
    assert.equal(el.visible, true);
    el.visible = false;
    await delay(16);
    assert.equal(el.visible, false);
  });
});

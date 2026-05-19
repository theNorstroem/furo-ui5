import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5ShellBarItem } from "./FuroUi5ShellBarItem";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("ShellBarItem Component", async () => {
  let el: FuroUi5ShellBarItem;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-shellbar-item icon="bell" text="Notifications" count="3"></furo-ui5-shellbar-item>
    `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-shellbar-item element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.tagName.toLowerCase(), "furo-ui5-shellbar-item");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    // ui5-shellbar-item is a metadata element intended to live inside a ui5-shellbar.
    // When rendered standalone it has no visible/rendered output of its own, so
    // axe cannot evaluate a meaningful surface. We still run the audit to catch
    // regressions in the wrapper itself.
    await assert.isAccessible(el);
  });

  it("should expose icon, text and count from the fixture", () => {
    assert.equal(el.icon, "bell");
    assert.equal(el.text, "Notifications");
    assert.equal(el.count, "3");
  });

  it("should pass through icon attribute changes at runtime", async () => {
    el.setAttribute("icon", "settings");
    await delay(16);
    assert.equal(el.icon, "settings");
    el.setAttribute("icon", "bell");
    await delay(16);
  });

  it("should pass through text attribute changes at runtime", async () => {
    el.setAttribute("text", "Alerts");
    await delay(16);
    assert.equal(el.text, "Alerts");
    el.setAttribute("text", "Notifications");
    await delay(16);
  });

  it("should pass through count attribute changes at runtime", async () => {
    el.setAttribute("count", "12");
    await delay(16);
    assert.equal(el.count, "12");
    el.setAttribute("count", "3");
    await delay(16);
  });
});

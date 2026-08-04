import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5ShellBarSearch } from "./FuroUi5ShellBarSearch";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("ShellBarSearch Component", async () => {
  let el: FuroUi5ShellBarSearch;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-shellbar-search placeholder="Search..." value="initial"></furo-ui5-shellbar-search> `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-shellbar-search element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.tagName.toLowerCase(), "furo-ui5-shellbar-search");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    // ui5-shellbar-search is intended to live inside a ui5-shellbar. When
    // rendered standalone it lacks the surrounding shell-bar context, so
    // axe may report rules that would not apply in real usage. We still run
    // the audit to catch regressions in the wrapper itself.
    await assert.isAccessible(el);
  });

  it("should manually stamp the ui5-shellbar-search marker attribute on connect", () => {
    // The wrapper overrides onEnterDOM and sets this attribute explicitly
    // for compatibility with selectors that target the original UI5 tag.
    assert.equal(el.hasAttribute("ui5-shellbar-search"), true);
  });

  it("should auto-stamp the furo-ui5-shellbar-search marker attribute on connect", () => {
    // UI5Element auto-stamps the pure tag (here "furo-ui5-shellbar-search")
    // as a marker attribute so that scoping-safe attribute selectors work.
    assert.equal(el.hasAttribute("furo-ui5-shellbar-search"), true);
  });

  it("should expose placeholder and value from the fixture", () => {
    assert.equal(el.placeholder, "Search...");
    assert.equal(el.value, "initial");
  });

  it("should pass through placeholder attribute changes at runtime", async () => {
    el.setAttribute("placeholder", "Type to search");
    await delay(16);
    assert.equal(el.placeholder, "Type to search");
    el.setAttribute("placeholder", "Search...");
    await delay(16);
  });

  it("should pass through value attribute changes at runtime", async () => {
    el.setAttribute("value", "changed");
    await delay(16);
    assert.equal(el.value, "changed");
    el.setAttribute("value", "initial");
    await delay(16);
  });

  it("should default autoOpen to false", () => {
    assert.equal(el.autoOpen, false);
  });

  it("should toggle the autoOpen property", async () => {
    el.autoOpen = true;
    await delay(16);
    assert.equal(el.autoOpen, true);
    el.autoOpen = false;
    await delay(16);
    assert.equal(el.autoOpen, false);
  });

  it("should default showClearIcon to false and toggle it", async () => {
    assert.equal(el.showClearIcon, false);
    el.showClearIcon = true;
    await delay(16);
    assert.equal(el.showClearIcon, true);
    el.showClearIcon = false;
    await delay(16);
  });
});

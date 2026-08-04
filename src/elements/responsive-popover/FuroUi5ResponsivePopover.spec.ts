import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5ResponsivePopover } from "./FuroUi5ResponsivePopover";

chai.use(chaiA11yAxe);

describe("ResponsivePopover Component", async () => {
  let el: FuroUi5ResponsivePopover;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-responsive-popover data-testid="test" header-text="rp">Content</furo-ui5-responsive-popover> `);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-responsive-popover element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-responsive-popover");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should not be visible by default", () => {
    assert.equal(el.checkVisibility(), false, "not visible");
    assert.equal(el.open, false, "open property is false");
  });

  it("should expose slotted default content", () => {
    assert.include(el.textContent, "Content");
  });

  it("show() should set open to true and make it visible; close() reverses it", () => {
    el.show();
    assert.equal(el.open, true, "open is true after show()");
    assert.equal(el.checkVisibility(), true, "visible");
    el.close();
    assert.equal(el.open, false, "open is false after close()");
    assert.equal(el.checkVisibility(), false, "not visible");
  });

  it("showAt(opener) should assign the opener and set open synchronously", () => {
    el.showAt(el);
    assert.equal(el.opener, el, "opener reference assigned");
    assert.equal(el.open, true, "open is true synchronously after showAt()");
    assert.equal(el.checkVisibility(), true, "visible synchronously after showAt()");
    el.close();
    assert.equal(el.open, false);
  });

  it("showAt(string) should assign the opener id and set open synchronously", () => {
    el.showAt("some-opener-id");
    assert.equal(el.opener, "some-opener-id");
    assert.equal(el.open, true);
    el.close();
    assert.equal(el.open, false);
  });
});

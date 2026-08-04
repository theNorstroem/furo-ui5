import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5UserMenu } from "./FuroUi5UserMenu";

chai.use(chaiA11yAxe);

describe("UserMenu Component", async () => {
  let el: FuroUi5UserMenu;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-user-menu data-testid="test">some content..</furo-ui5-user-menu> `);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-user-menu element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-user-menu");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose slotted default content", () => {
    assert.include(el.textContent, "some content");
  });

  it("show() should set open to true; close() should reset it", () => {
    el.show();
    assert.equal(el.open, true, "open is true after show()");
    el.close();
    assert.equal(el.open, false, "open is false after close()");
  });

  it("showAt(opener) should assign the opener and set open synchronously", () => {
    el.showAt(el);
    assert.equal(el.opener, el, "opener reference assigned");
    assert.equal(el.open, true, "open is true synchronously after showAt()");
    el.close();
    assert.equal(el.open, false);
  });
});

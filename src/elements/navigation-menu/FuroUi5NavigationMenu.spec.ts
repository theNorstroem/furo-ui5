import "@/Assets";
import "@/elements/navigation-menu-item";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5NavigationMenu } from "./FuroUi5NavigationMenu";

chai.use(chaiA11yAxe);

describe("NavigationMenu Component", async () => {
  let el: FuroUi5NavigationMenu;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-navigation-menu data-testid="test">
        <furo-ui5-navigation-menu-item text="Overview" icon="home"></furo-ui5-navigation-menu-item>
      </furo-ui5-navigation-menu>
    `);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-navigation-menu element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-navigation-menu");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose slotted items", () => {
    assert.equal(el.querySelectorAll("furo-ui5-navigation-menu-item").length, 1);
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

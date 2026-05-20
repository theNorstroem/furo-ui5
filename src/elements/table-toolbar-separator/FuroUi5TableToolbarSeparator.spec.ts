import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5TableToolbarSeparator } from "./FuroUi5TableToolbarSeparator";

chai.use(chaiA11yAxe);

describe("TableToolbarSeparator Component", async () => {
  let el: FuroUi5TableToolbarSeparator;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-table-toolbar-separator data-testid="test"></furo-ui5-table-toolbar-separator> `);
    await el.updateComplete;
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-table-toolbar-separator element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-table-toolbar-separator");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should render nothing into the shadow root", () => {
    // render() returns `nothing` — shadow root should have no element children
    const elementChildren = Array.from(el.shadowRoot!.childNodes).filter((n) => n.nodeType === Node.ELEMENT_NODE);
    assert.equal(elementChildren.length, 0);
  });

  it("should be 1px wide", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.width, "1px");
  });

  it("should have a non-zero height", () => {
    const styles = window.getComputedStyle(el);
    assert.isTrue(parseFloat(styles.height) > 0, "height should resolve to a positive value");
  });
});

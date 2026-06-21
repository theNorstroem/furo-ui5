/**
 * Identity / a11y smoke spec for the extend-only wrapper furo-ui5-list.
 * It adds no data binding, so only the element-identity & a11y smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@ui5/webcomponents/dist/ListItemStandard.js";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5List } from "./FuroUi5List";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5List", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5List;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-list accessible-name="countries" data-testid="test">
          <ui5-li>Austria</ui5-li>
          <ui5-li>Germany</ui5-li>
        </furo-ui5-list>
      `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-list element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-list");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });
});

/**
 * Identity / a11y smoke spec for the extend-only wrapper furo-ui5-tabcontainer.
 * It adds no data binding, so only the element-identity & a11y smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/tab";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Tabcontainer } from "./FuroUi5Tabcontainer";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5Tabcontainer", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Tabcontainer;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-tabcontainer data-testid="test">
          <furo-ui5-tab text="Overview">Overview content</furo-ui5-tab>
          <furo-ui5-tab text="Details">Details content</furo-ui5-tab>
        </furo-ui5-tabcontainer>
      `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-tabcontainer element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-tabcontainer");
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

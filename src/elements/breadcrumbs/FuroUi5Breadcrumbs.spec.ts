/**
 * Identity / a11y smoke spec for the extend-only wrapper furo-ui5-breadcrumbs.
 * It adds no data binding, so only the element-identity & a11y smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/breadcrumbs-item";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Breadcrumbs } from "./FuroUi5Breadcrumbs";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5Breadcrumbs", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Breadcrumbs;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-breadcrumbs data-testid="test">
          <furo-ui5-breadcrumbs-item>Home</furo-ui5-breadcrumbs-item>
          <furo-ui5-breadcrumbs-item>Details</furo-ui5-breadcrumbs-item>
        </furo-ui5-breadcrumbs>
      `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-breadcrumbs element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-breadcrumbs");
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

/**
 * Identity smoke spec for the extend-only wrapper furo-ui5-breadcrumbs-item. It
 * is a child of furo-ui5-breadcrumbs and adds no data binding, so it is exercised
 * inside its parent and only the identity smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/breadcrumbs";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterAll, assert, beforeAll, describe, it } from "vitest";

import type { FuroUi5BreadcrumbsItem } from "./FuroUi5BreadcrumbsItem";

describe("FuroUi5BreadcrumbsItem", () => {
  describe("element identity [TEMPLATE]", () => {
    let el: FuroUi5BreadcrumbsItem | null;

    beforeAll(async () => {
      const parent = await fixture(html`
        <furo-ui5-breadcrumbs>
          <furo-ui5-breadcrumbs-item data-testid="test">Home</furo-ui5-breadcrumbs-item>
        </furo-ui5-breadcrumbs>
      `);
      el = parent.querySelector("furo-ui5-breadcrumbs-item");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-breadcrumbs-item element", () => {
      assert.isOk(el);
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-breadcrumbs-item");
    });
  });
});

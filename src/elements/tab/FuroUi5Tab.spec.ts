/**
 * Identity smoke spec for the extend-only wrapper furo-ui5-tab. It is a child of
 * furo-ui5-tabcontainer and adds no data binding, so it is exercised inside its
 * parent and only the identity smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/tabcontainer";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterAll, assert, beforeAll, describe, it } from "vitest";

import { FuroUi5Tab } from "./FuroUi5Tab";

describe("FuroUi5Tab", () => {
  describe("element identity [TEMPLATE]", () => {
    let el: FuroUi5Tab | null;

    beforeAll(async () => {
      const parent = await fixture(html`
        <furo-ui5-tabcontainer>
          <furo-ui5-tab text="Overview" data-testid="test">content</furo-ui5-tab>
        </furo-ui5-tabcontainer>
      `);
      el = parent.querySelector("furo-ui5-tab");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-tab element", () => {
      assert.isOk(el);
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-tab");
    });

    it("should expose the inherited text property", () => {
      assert.isOk(el);
      assert.equal(el.text, "Overview");
    });
  });
});

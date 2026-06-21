/**
 * Identity / a11y smoke spec for the extend-only wrapper furo-ui5-avatar-group.
 * It adds no data binding, so only the element-identity & a11y smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/avatar";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5AvatarGroup } from "./FuroUi5AvatarGroup";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5AvatarGroup", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5AvatarGroup;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-avatar-group accessible-name="team" data-testid="test">
          <furo-ui5-avatar accessible-name="John Doe" initials="JD"></furo-ui5-avatar>
          <furo-ui5-avatar accessible-name="Max Mustermann" initials="MM"></furo-ui5-avatar>
        </furo-ui5-avatar-group>
      `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-avatar-group element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-avatar-group");
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

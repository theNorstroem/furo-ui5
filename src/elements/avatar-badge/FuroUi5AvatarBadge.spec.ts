/**
 * Identity smoke spec for the extend-only wrapper furo-ui5-avatar-badge. It is
 * slotted into furo-ui5-avatar and adds no data binding, so it is exercised inside
 * its parent and only the identity smoke tests apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import "@/elements/avatar";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterAll, assert, beforeAll, describe, it } from "vitest";

import { FuroUi5AvatarBadge } from "./FuroUi5AvatarBadge";

describe("FuroUi5AvatarBadge", () => {
  describe("element identity [TEMPLATE]", () => {
    let el: FuroUi5AvatarBadge | null;

    beforeAll(async () => {
      const parent = await fixture(html`
        <furo-ui5-avatar accessible-name="John Doe" initials="JD">
          <furo-ui5-avatar-badge slot="badge" data-testid="test" icon="employee"></furo-ui5-avatar-badge>
        </furo-ui5-avatar>
      `);
      el = parent.querySelector("furo-ui5-avatar-badge");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-avatar-badge element", () => {
      assert.isOk(el);
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-avatar-badge");
    });
  });
});

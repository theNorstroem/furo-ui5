// ─────────────────────────────────────────────────────────────────────────────
// Notes on coverage scope
// ─────────────────────────────────────────────────────────────────────────────
// FuroUi5ShellBar is a non-bindable composite wrapper around the UI5 ShellBar.
// Its only Furo-side surface additions are:
//   * a `shadow` host attribute that toggles a `box-shadow` via CSS host
//     selectors (`:host([shadow])`) — observable via getComputedStyle().
//   * profile-avatar slot styling (`::slotted([furo-ui5-avatar][slot="profile"])`)
//     — observable via slotted element computed style.
//   * a `@media print` block that hides toolbar buttons while keeping the
//     profile button visible. This is intentionally NOT covered: vitest's
//     browser runner does not let us emulate `@media print` reliably from a
//     spec (no CDP-level emulation surface here), and toggling the stylesheet
//     manually would just re-assert what the CSS literal already says. The
//     CSS rule is documented in the source.
// All other behaviour (slots, events, props) belongs to the upstream UI5
// ShellBar and is covered by its own test-suite.

import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5ShellBar } from "./FuroUi5ShellBar";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("ShellBar Component", () => {
  let el: FuroUi5ShellBar;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-shellbar primary-title="Furo App" secondary-title="Demo" notifications-count="2" shadow>
        <img slot="logo" data-testid="logo" src="data:image/svg+xml;base64,PHN2Zy8+" alt="logo" />
        <div slot="profile" data-testid="profile" aria-label="profile">PA</div>
      </furo-ui5-shellbar>
    `);
    // Wait for UI5 to attach the shadow root and process slots.
    await delay(60);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-shellbar element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-shellbar");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    // The upstream ui5-shellbar internally renders interactive buttons
    // (notifications, profile, overflow). axe occasionally flags
    // `aria-allowed-attr` / `aria-required-children` on the responsive
    // overflow popover depending on the rendering breakpoint — these are
    // upstream UI5 concerns we cannot fix from the binding wrapper.
    // The wrapper itself does not add any focusable surface, so this audit
    // mainly catches regressions in our slotted content.
    await assert.isAccessible(el, {
      ignoredRules: ["aria-allowed-attr", "aria-required-children", "aria-required-parent"],
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Inherited UI5 surface (props pass through unchanged)
  // ───────────────────────────────────────────────────────────────────────
  describe("inherited UI5 surface", () => {
    it("should expose primaryTitle / secondaryTitle from attributes", () => {
      assert.equal(el.primaryTitle, "Furo App");
      assert.equal(el.secondaryTitle, "Demo");
    });

    it("should expose notificationsCount from the attribute", () => {
      assert.equal(el.notificationsCount, "2");
    });

    it("should pass through primary-title attribute changes at runtime", async () => {
      el.setAttribute("primary-title", "Renamed");
      await delay(16);
      assert.equal(el.primaryTitle, "Renamed");
      el.setAttribute("primary-title", "Furo App");
      await delay(16);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] `shadow` host attribute
  // ───────────────────────────────────────────────────────────────────────
  describe("`shadow` host attribute", () => {
    it("should reflect the `shadow` attribute set in the fixture", () => {
      assert.equal(el.hasAttribute("shadow"), true);
    });

    it("should apply a non-empty box-shadow on the host when [shadow] is set", () => {
      const style = window.getComputedStyle(el);
      // The CSS uses `var(--sapContent_HeaderShadow)`. The exact value depends
      // on the active theme, but it must NOT be `none` once [shadow] is set
      // (because the wrapper's own `:host(:not([hidden]))` rule sets `none`
      // and is then overridden by the `:host([shadow])` rule).
      assert.notEqual(style.boxShadow, "none", "expected a real box-shadow when [shadow] is set");
    });

    it("should drop the shadow when the `shadow` attribute is removed", async () => {
      el.removeAttribute("shadow");
      await delay(16);
      const style = window.getComputedStyle(el);
      assert.equal(style.boxShadow, "none", "expected no box-shadow when [shadow] is absent");
      // restore for any subsequent test relying on the fixture state
      el.setAttribute("shadow", "");
      await delay(16);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Slot rendering
  // ───────────────────────────────────────────────────────────────────────
  describe("slot rendering", () => {
    it("should expose light-DOM children for the `logo` slot", () => {
      const logo = el.querySelector('[slot="logo"][data-testid="logo"]');
      assert.isNotNull(logo);
      assert.equal(logo.getAttribute("slot"), "logo");
    });

    it("should expose light-DOM children for the `profile` slot", () => {
      const profile = el.querySelector('[slot="profile"][data-testid="profile"]');
      assert.isNotNull(profile);
      assert.equal(profile.textContent, "PA");
    });

    it("should style a furo-ui5-avatar in the profile slot to 2rem square", async () => {
      // The wrapper applies `::slotted([furo-ui5-avatar][slot="profile"])`
      // overrides. We can verify the rule reaches a matching slotted node by
      // dropping a stand-in element carrying the `furo-ui5-avatar` attribute
      // into the profile slot and reading its computed size. We intentionally
      // do not depend on the real furo-ui5-avatar element to keep this spec
      // hermetic.
      const probe = document.createElement("div");
      probe.setAttribute("furo-ui5-avatar", "");
      probe.setAttribute("slot", "profile");
      probe.setAttribute("data-testid", "avatar-probe");
      el.append(probe);
      await delay(60);

      const style = window.getComputedStyle(probe);
      // 2rem with the default 16px root font-size resolves to 32px.
      // We accept any non-zero value to stay theme-agnostic — what matters
      // is that the host's `::slotted` rule reached the element at all.
      assert.notEqual(style.width, "", "computed width should be resolved");
      assert.notEqual(style.height, "", "computed height should be resolved");
      assert.equal(style.width, "32px", "::slotted profile avatar should be 2rem wide");
      assert.equal(style.height, "32px", "::slotted profile avatar should be 2rem tall");

      probe.remove();
      await delay(16);
    });
  });
});

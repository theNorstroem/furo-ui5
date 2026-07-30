import "@/Assets";
// binding elements asserted by the BINDING_ELEMENT_MARKERS block at the bottom
import "@/elements/checkbox";
import "@/elements/link";
import "@/elements/number-input";
import "@/elements/password-input";
import "@/elements/radio-button";
import "@/elements/text-input";
// parents used by the integration block below (they are not part of WRAPPERS)
import "@/elements/list";
import "@/elements/li";
import "@/elements/li-custom";
import "@/elements/li-group";
import "@/elements/li-group-header";
import "@/elements/menu-item";
import "@/elements/menu-separator";
import "@/elements/menu-item-group";
import "@/elements/cb-item-custom";
import "@/elements/cb-item-group";
import "@/elements/mcb-item-custom";
import "@/elements/mcb-item-group";
import "@/elements/option-custom";
import "@/elements/suggestion-item";
import "@/elements/suggestion-item-custom";
import "@/elements/suggestion-item-group";
import "@/elements/tokenizer";
import "@/elements/tab-separator";
import "@/elements/user-menu-item";
import "@/elements/user-menu-item-group";
import "@/elements/user-menu-account";
import "@/elements/shellbar-branding";
import "@/elements/navigation-menu";
import "@/elements/navigation-menu-item";
import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-select";
import "@/elements/toolbar-select-option";
import "@/elements/toolbar-separator";
import "@/elements/toolbar-spacer";
import "@/elements/page";
import "@/elements/bar";
import "@/elements/flexible-column-layout";
import "@/elements/navigation-layout";
import "@/elements/dynamic-side-content";
import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@/elements/side-navigation-sub-item";
import "@/elements/side-navigation-group";
import "@/elements/panel";
import "@/elements/card";
import "@/elements/card-header";
import "@/elements/carousel";
import "@/elements/wizard";
import "@/elements/wizard-step";
import "@/elements/split-button";
import "@/elements/illustrated-message";
import "@/elements/hero-banner";
import "@/elements/product-switch";
import "@/elements/product-switch-item";
import "@/elements/timeline";
import "@/elements/timeline-item";
import "@/elements/timeline-group-item";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterEach, assert, describe, it } from "vitest";

import { delay } from "@/util/test-helpers/delay";

/**
 * Smoke coverage for the pass-through UI5 wrappers.
 *
 * These components add no behaviour of their own — the only two things that can
 * silently break are (a) the tag never getting registered and (b) the original-tag
 * marker attribute going missing, which makes UI5 parents ignore the child without
 * any error. Both are asserted here for every wrapper.
 */
const WRAPPERS: { tag: string; marker: string }[] = [
  { tag: "furo-ui5-li", marker: "ui5-li" },
  { tag: "furo-ui5-li-custom", marker: "ui5-li-custom" },
  { tag: "furo-ui5-li-group", marker: "ui5-li-group" },
  { tag: "furo-ui5-li-group-header", marker: "ui5-li-group-header" },
  { tag: "furo-ui5-menu-item", marker: "ui5-menu-item" },
  { tag: "furo-ui5-menu-separator", marker: "ui5-menu-separator" },
  { tag: "furo-ui5-menu-item-group", marker: "ui5-menu-item-group" },
  { tag: "furo-ui5-cb-item-custom", marker: "ui5-cb-item-custom" },
  { tag: "furo-ui5-cb-item-group", marker: "ui5-cb-item-group" },
  { tag: "furo-ui5-mcb-item-custom", marker: "ui5-mcb-item-custom" },
  { tag: "furo-ui5-mcb-item-group", marker: "ui5-mcb-item-group" },
  { tag: "furo-ui5-option-custom", marker: "ui5-option-custom" },
  { tag: "furo-ui5-suggestion-item", marker: "ui5-suggestion-item" },
  { tag: "furo-ui5-suggestion-item-custom", marker: "ui5-suggestion-item-custom" },
  { tag: "furo-ui5-suggestion-item-group", marker: "ui5-suggestion-item-group" },
  { tag: "furo-ui5-tokenizer", marker: "ui5-tokenizer" },
  { tag: "furo-ui5-tab-separator", marker: "ui5-tab-separator" },
  { tag: "furo-ui5-user-menu-item", marker: "ui5-user-menu-item" },
  { tag: "furo-ui5-user-menu-item-group", marker: "ui5-user-menu-item-group" },
  { tag: "furo-ui5-user-menu-account", marker: "ui5-user-menu-account" },
  { tag: "furo-ui5-shellbar-branding", marker: "ui5-shellbar-branding" },
  { tag: "furo-ui5-navigation-menu", marker: "ui5-navigation-menu" },
  { tag: "furo-ui5-navigation-menu-item", marker: "ui5-navigation-menu-item" },
  { tag: "furo-ui5-toolbar", marker: "ui5-toolbar" },
  { tag: "furo-ui5-toolbar-button", marker: "ui5-toolbar-button" },
  { tag: "furo-ui5-toolbar-select", marker: "ui5-toolbar-select" },
  { tag: "furo-ui5-toolbar-select-option", marker: "ui5-toolbar-select-option" },
  { tag: "furo-ui5-toolbar-separator", marker: "ui5-toolbar-separator" },
  { tag: "furo-ui5-toolbar-spacer", marker: "ui5-toolbar-spacer" },
  { tag: "furo-ui5-page", marker: "ui5-page" },
  { tag: "furo-ui5-bar", marker: "ui5-bar" },
  { tag: "furo-ui5-flexible-column-layout", marker: "ui5-flexible-column-layout" },
  { tag: "furo-ui5-navigation-layout", marker: "ui5-navigation-layout" },
  { tag: "furo-ui5-dynamic-side-content", marker: "ui5-dynamic-side-content" },
  { tag: "furo-ui5-side-navigation", marker: "ui5-side-navigation" },
  { tag: "furo-ui5-side-navigation-item", marker: "ui5-side-navigation-item" },
  { tag: "furo-ui5-side-navigation-sub-item", marker: "ui5-side-navigation-sub-item" },
  { tag: "furo-ui5-side-navigation-group", marker: "ui5-side-navigation-group" },
  { tag: "furo-ui5-panel", marker: "ui5-panel" },
  { tag: "furo-ui5-card", marker: "ui5-card" },
  { tag: "furo-ui5-card-header", marker: "ui5-card-header" },
  { tag: "furo-ui5-carousel", marker: "ui5-carousel" },
  { tag: "furo-ui5-wizard", marker: "ui5-wizard" },
  { tag: "furo-ui5-wizard-step", marker: "ui5-wizard-step" },
  { tag: "furo-ui5-split-button", marker: "ui5-split-button" },
  { tag: "furo-ui5-illustrated-message", marker: "ui5-illustrated-message" },
  { tag: "furo-ui5-hero-banner", marker: "ui5-hero-banner" },
  { tag: "furo-ui5-product-switch", marker: "ui5-product-switch" },
  { tag: "furo-ui5-product-switch-item", marker: "ui5-product-switch-item" },
  { tag: "furo-ui5-timeline", marker: "ui5-timeline" },
  { tag: "furo-ui5-timeline-item", marker: "ui5-timeline-item" },
  { tag: "furo-ui5-timeline-group-item", marker: "ui5-timeline-group-item" },
];

describe("pass-through UI5 wrappers", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  WRAPPERS.forEach(({ tag, marker }) => {
    describe(tag, () => {
      it("is registered as a custom element", () => {
        assert.isOk(customElements.get(tag), `${tag} was never defined`);
      });

      it(`carries the "${marker}" compatibility marker so UI5 parents detect it`, async () => {
        // built with createElement rather than a lit template, because the tag name is dynamic
        const el = document.createElement(tag);
        document.body.appendChild(el);
        await delay(16);
        assert.equal(el.tagName.toLowerCase(), tag);
        assert.isTrue(el.hasAttribute(marker), `${tag} is missing the ${marker} marker attribute`);
        el.remove();
      });
    });
  });

  describe("wrapping does not steal the original UI5 tag", () => {
    // The subclass must not mutate the parent's shared metadata object, or the real
    // ui5-* element would end up registered under the furo tag (or not at all).
    WRAPPERS.forEach(({ marker }) => {
      it(`leaves ${marker} registered`, () => {
        const ctor = customElements.get(marker);
        assert.isOk(ctor, `${marker} is no longer registered`);
      });
    });
  });

  describe("children are accepted by their furo parent", () => {
    it("furo-ui5-list picks up furo-ui5-li children", async () => {
      const el = await fixture<HTMLElement & { items: HTMLElement[] }>(
        html`<furo-ui5-list>
          <furo-ui5-li>Zurich</furo-ui5-li>
          <furo-ui5-li>Berlin</furo-ui5-li>
        </furo-ui5-list>`,
      );
      await delay(50);
      assert.lengthOf(el.items, 2);
    });

    it("furo-ui5-toolbar picks up furo-ui5-toolbar-button children", async () => {
      const el = await fixture<HTMLElement & { items: HTMLElement[] }>(
        html`<furo-ui5-toolbar>
          <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
          <furo-ui5-toolbar-button text="Delete"></furo-ui5-toolbar-button>
        </furo-ui5-toolbar>`,
      );
      await delay(50);
      assert.lengthOf(el.items, 3);
    });

    it("furo-ui5-side-navigation picks up furo-ui5-side-navigation-item children", async () => {
      const el = await fixture<HTMLElement & { items: HTMLElement[] }>(
        html`<furo-ui5-side-navigation>
          <furo-ui5-side-navigation-item text="Home"></furo-ui5-side-navigation-item>
          <furo-ui5-side-navigation-item text="Reports"></furo-ui5-side-navigation-item>
        </furo-ui5-side-navigation>`,
      );
      await delay(50);
      assert.lengthOf(el.items, 2);
    });

    it("furo-ui5-timeline picks up furo-ui5-timeline-item children", async () => {
      const el = await fixture<HTMLElement & { items: HTMLElement[] }>(
        html`<furo-ui5-timeline>
          <furo-ui5-timeline-item title-text="Created"></furo-ui5-timeline-item>
        </furo-ui5-timeline>`,
      );
      await delay(50);
      assert.lengthOf(el.items, 1);
    });
  });

  /**
   * These are not pass-through wrappers — they are full binding elements. They are
   * asserted here because they share the same failure mode: UI5 tests for these
   * specific tags with `hasAttribute()`, so without the marker the element is
   * silently ignored by its parent. The other binding elements wrap tags UI5 never
   * checks by attribute and so need no marker.
   */
  describe("binding elements that also need a marker", () => {
    const BINDING_ELEMENT_MARKERS: { tag: string; marker: string }[] = [
      { tag: "furo-ui5-text-input", marker: "ui5-input" },
      { tag: "furo-ui5-number-input", marker: "ui5-input" },
      { tag: "furo-ui5-password-input", marker: "ui5-input" },
      { tag: "furo-ui5-checkbox", marker: "ui5-checkbox" },
      { tag: "furo-ui5-radio-button", marker: "ui5-radio-button" },
      { tag: "furo-ui5-link", marker: "ui5-link" },
    ];

    BINDING_ELEMENT_MARKERS.forEach(({ tag, marker }) => {
      it(`${tag} carries the "${marker}" marker`, async () => {
        const el = document.createElement(tag);
        document.body.appendChild(el);
        await delay(16);
        assert.isTrue(el.hasAttribute(marker), `${tag} is missing the ${marker} marker attribute`);
        el.remove();
      });
    });
  });
});

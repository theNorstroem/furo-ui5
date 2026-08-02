import HeroBanner from "@ui5/webcomponents-fiori/dist/HeroBanner.js";

/**
 * A prominent, full-width banner combining a headline, supporting text and an optional background image.
 *
 * ```html
 * <furo-ui5-hero-banner header-text="Welcome" overline-text="Everything you need, in one place.">
 * </furo-ui5-hero-banner>
 * ```
 *
 * This is a pass-through wrapper around `ui5-hero-banner`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Full-width banner for the top of a landing page.
 * @keywords hero, banner, landing, header, promo, highlight
 * @category Display
 * @usecase Use at the top of a launchpad or landing page to highlight one message.
 * @related furo-ui5-card, furo-ui5-illustrated-message, furo-ui5-title
 * @tagname furo-ui5-hero-banner
 * @public
 */
export class FuroUi5HeroBanner extends HeroBanner {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-hero-banner", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-hero-banner" };
  }
}

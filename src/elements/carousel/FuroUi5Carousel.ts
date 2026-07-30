import Carousel from "@ui5/webcomponents/dist/Carousel.js";

/**
 * Shows its children one page at a time with arrows and page indicators. Best for a small, homogeneous set of items.
 *
 * ```html
 * <furo-ui5-carousel style="height:160px">
 *   <div style="padding:2rem;text-align:center">Page 1</div>
 *   <div style="padding:2rem;text-align:center">Page 2</div>
 *   <div style="padding:2rem;text-align:center">Page 3</div>
 * </furo-ui5-carousel>
 * ```
 *
 * This is a pass-through wrapper around `ui5-carousel`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Horizontally paged container with navigation arrows.
 * @keywords carousel, slider, pages, gallery, swipe, rotate
 * @category Container
 * @usecase Use to page through a small set of equally important items such as images or cards.
 * @related furo-ui5-card, furo-ui5-tabcontainer
 * @tagname furo-ui5-carousel
 * @public
 */
export class FuroUi5Carousel extends Carousel {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-carousel", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-carousel" };
  }
}

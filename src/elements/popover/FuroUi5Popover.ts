import Popover from "@ui5/webcomponents/dist/Popover.js";
/**
 *
 * @summary Non-modal floating container attached to a trigger element.
 * @keywords popover, dropdown, tooltip, floating, overlay, popup
 * @category Container
 * @usecase Use for contextual information or actions that don't require modal blocking.
 * @related furo-ui5-dialog, furo-ui5-responsive-popover, furo-ui5-menu
 * @tagname furo-ui5-popover
 */
export class FuroUi5Popover extends Popover {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-popover" };
  }

  /**
   * Shows the popover at the opener position.
   * Alternatively you can work with the attributes `opener` and `open` to achieve the same.
   * @param opener
   * @public
   */
  showAt(opener: HTMLElement | string) {
    this.opener = opener;

    this.open = true;
  }

  /**
   * Shows the popover at the opener position defined with attribute opener.
   * @public
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the popup.
   * @public
   */
  close(): void {
    this.open = false;
  }
}

FuroUi5Popover.define();

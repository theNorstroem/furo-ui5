import Popover from "@ui5/webcomponents/dist/Popover.js";
/**
 * @tagname furo-ui5-popover
 */
export class FuroUi5Popover extends Popover {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-popover";
    return md;
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

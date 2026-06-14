import ResponsivePopover from "@ui5/webcomponents/dist/ResponsivePopover.js";

/**
 *
 * @summary Popover that adapts between desktop popover and mobile fullscreen dialog.
 * @keywords responsive, popover, dialog, mobile, adaptive, overlay
 * @category Container
 * @usecase Use when you need popover on desktop but fullscreen dialog on mobile.
 * @related furo-ui5-popover, furo-ui5-dialog
 * @tagname furo-ui5-responsive-popover
 */
export class FuroUi5ResponsivePopover extends ResponsivePopover {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-responsive-popover";
    return md;
  }

  /**
   * Shows the popover at the opener position.
   * Alternatively, you can work with the attributes `opener` and `open` to achieve the same.
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

FuroUi5ResponsivePopover.define();

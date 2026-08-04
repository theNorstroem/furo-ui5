import Dialog from "@ui5/webcomponents/dist/Dialog.js";

/**
 * The furo-ui5-dialog is a extended ui5-dialog which can attach itself to a parent dom element.
 *
 * This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-dialog behind the backdrop.
 *
 * Use this component like a regular ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.
 *
 * It supports all features from the [SAP ui5 Dialog element](https://ui5.github.io/webcomponents/components/Dialog/).
 *
 * **important:** Place a furo-ui5-dialog-display in any dom parent of the component where you use furo-ui5-dialog. Your app-shell or body is a good place to do that.
 *
 *```html
 * <furo-ui5-dialog header-text="Dialog title" fn-show="--openDialogClicked" fn-close="--closeDialogClicked">
 *   <p>Content</p>
 *   <div slot="footer"> <button at-click="--closeDialogClicked">close dialog</button></div>
 * </furo-ui5-dialog>
 *
 * <button at-click="--openDialogClicked">Open dialog</button>
 * ```
 *
 * @summary Modal dialog for displaying content requiring user attention or action.
 * @keywords dialog, modal, popup, overlay, confirmation, alert, lightbox
 * @category Container
 * @usecase Use for confirmations, forms, or content requiring user action before continuing.
 * @related furo-ui5-popover, furo-ui5-responsive-popover, furo-ui5-bar
 * @tagname furo-ui5-dialog
 */
export class FuroUi5Dialog extends Dialog {
  /**
   * Shows the popover at the opener position.
   * Alternatively you can work with the attributes `opener` and `open` to achieve the same.
   * @public
   */
  showAt() {
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

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-dialog" };
  }
}

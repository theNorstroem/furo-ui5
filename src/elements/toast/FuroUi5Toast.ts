import Toast from "@ui5/webcomponents/dist/Toast.js";

/**
 * The furo-ui5-toast is a extended ui5-toast which can attach itself to a parent dom element.
 *
 * This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-toast behind the backdrop.
 *
 * Use this component like a regular ui5-toast and do not forget to place the furo-ui5-toast-display in one of the parent elements.
 *
 * It supports all features from the [SAP ui5 Toast element](https://ui5.github.io/webcomponents/components/Toast/).
 *
 * **important:** Place a furo-ui5-toast-display in any dom parent of the component where you use furo-ui5-toast. Your app-shell or body is a good place to do that.
 *
 *```html
 * <furo-ui5-toast  fn-show="--openToastClicked" placement="MiddleCenter">Content</furo-ui5-toast>
 *
 * <button at-click="--openToastClicked">Open toast</button>
 * ```
 *
 * @summary Brief, auto-dismissing notification message.
 * @keywords toast, notification, snackbar, message, alert, feedback, temporary
 * @category Feedback
 * @usecase Use for non-blocking confirmations or status updates that auto-dismiss.
 * @related furo-ui5-message-strip, furo-ui5-busy-indicator
 * @tagname furo-ui5-toast
 */
export class FuroUi5Toast extends Toast {
  /**
   * shows the toast
   *
   */
  public show() {
    this.open = true;
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toast" };
  }
}

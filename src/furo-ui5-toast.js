import * as Toast from '@ui5/webcomponents/dist/Toast.js';

/**
 * The furo-ui5-toast is a extended ui5-toast which can attach itself to a parent dom element.
 *
 * This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-toast behind the backdrop.
 *
 * Use this component like a regular ui5-toast and do not forget to place the furo-ui5-toast-display in one of the parent elements.
 *
 * It supports all features from the [SAP ui5 Toast element](https://sap.github.io/ui5-webcomponents/playground/components/Toast/).
 *
 * **important:** Place a furo-ui5-toast-display in any dom parent of the component where you use furo-ui5-toast. Your app-shell or body is a good place to do that.
 *
 *```html
 * <furo-ui5-toast  fn-show="--openToastClicked" placement="MiddleCenter">
 *   <p>Content</p>
 * </furo-ui5-toast>
 *
 * <button at-click="--openToastClicked">Open toast</button>
 * ```
 *
 * @summary Toast element
 * @element furo-ui5-toast
 */
export class FuroUi5Toast extends Toast.default {
  /**
   * shows the toast
   */
  show() {
    // only register once
    if (!this._furoToastRegistered) {
      const customEvent = new Event('register-furo-ui5-toast', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
      this._furoToastRegistered = true;
    }
    super.show();
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-toast';
    return md;
  }

  /**
   * @private
   */
  static get styles() {
    return super.styles;
  }
}

FuroUi5Toast.define();

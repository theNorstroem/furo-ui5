import * as Dialog from '@ui5/webcomponents/dist/Dialog.js';

/**
 * The furo-ui5-dialog is a extended ui5-dialog which can attach itself to a parent dom element.
 *
 * This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-dialog behind the backdrop.
 *
 * Use this component like a regular ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.
 *
 * It supports all features from the [SAP ui5 Dialog element](https://sap.github.io/ui5-webcomponents/playground/components/Dialog/).
 *
 * **important:** Place a furo-ui5-dialog-display in any dom parent of the component where you use furo-ui5-dialog. Your app-shell or body is a good place to do that.
 *
 *```html
 * <furo-ui5-dialog header-text="Dialog title" ƒ-show="--openDialogClicked" ƒ-close="--closeDialogClicked">
 *   <p>Content</p>
 *   <div slot="footer"> <button @-click="--closeDialogClicked">close dialog</button></div>
 * </furo-ui5-dialog>
 *
 * <button @-click="--openDialogClicked">Open dialog</button>
 * ```
 *
 * @summary Dialog element
 * @element furo-ui5-dialog
 */
export class FuroUi5Dialog extends Dialog.default {
  /**
   * shows the dialog
   */
  show() {
    // only register once
    if (!this._furoDialogRegistered) {
      const customEvent = new Event('register-furo-ui5-dialog', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
      this._furoDialogRegistered = true;
    }
    super.show();
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-dialog';
    return md;
  }

  /**
   * @private
   */
  static get styles() {
    return super.styles;
  }
}

FuroUi5Dialog.define();

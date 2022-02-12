import * as Busy from '@ui5/webcomponents/dist/BusyIndicator.js';

/**
 * The furo-ui5-busy-indicator signals that some operation is going on and that the user must wait.
 *
 * ```html
 * <furo-ui5-busy-indicator></furo-ui5-busy-indicator>
 * ```
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/
 *
 * @summary ui5 busy indicator with methods
 * @element
 */
export class FuroUiBusyIndicator extends Busy.default {
  /**
   * Sets the busy indicator state to active
   */
  activate() {
    this.setAttribute('active', '');
    this._render();
  }

  /**
   * Sets the busy indicator state to inactive
   */
  deactivate() {
    this.removeAttribute('active');
    this._render();
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-busy-indicator';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}
FuroUiBusyIndicator.define();

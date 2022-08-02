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
    return [
      super.styles,
      {
        content:
          ':host(:not([hidden])) {display: block; position:relative}  .ui5-busy-indicator-root {height:100%; display:block; align-items: unset; justify-content:unset; position: unset;} .ui5-busy-indicator-busy-area {background-color: rgb(255 255 255 / 26%);}',
      },
    ];
  }
}
FuroUiBusyIndicator.define();

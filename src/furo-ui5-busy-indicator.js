import * as Busy from '@ui5/webcomponents/dist/BusyIndicator.js';

/**
 * `furo-ui5-busy-indicator`
 * The furo-ui5-busy-indicator signals that some operation is going on and that the user must wait.
 *
 *
 * What is different from ui5-busy-indicator?
 * With flow based programming it's usual to address methods. So we added two convenience functions for
 * - activate => ƒ-activate
 * - deactivate => ƒ-deactivate
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/
 *
 * @summary ui5 busy indicator
 * @customElement
 * @demo demo-furo-ui5-busyindicator Basic usage
 */
export class FuroUiBusyIndicator extends Busy.default {
  /**
   * Sets the busy indicator state to active
   */
  activate() {
    this.setAttribute('active', 'true');
  }

  /**
   * Sets the busy indicator state to inactive
   */
  deactivate() {
    this.removeAttribute('active');
  }
}
window.customElements.define('furo-ui5-busy-indicator', FuroUiBusyIndicator);
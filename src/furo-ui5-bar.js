import * as Bar from '@ui5/webcomponents-fiori/dist/Bar.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and
 * functionality is the basis for page headers and footers.
 * The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
 * It has the capability to center content, such as a title, while having other components on the left and right side.
 *
 * The component exposes a function to bind a FieldNode of type furo.Link to activate/deactivate elements according
 * the HATEOAS relations.
 *
 * ```
 * <furo-ui5-bar ƒ-bind-data="--furoLinkRepeaterNode">
 *   <furo-ui5-button rel="update" slot="endContent">Save</furo-ui5-button>
 *   <furo-ui5-button rel="delete" slot="endContent">Delete</furo-ui5-button>
 *   <furo-ui5-button slot="endContent">Fixed Action</furo-ui5-button>
 * </furo-ui5-bar>
 * ```
 *
 * @slot {HTMLElement [0..n]} default - Defines the content in the middle of the bar
 * @slot {HTMLElement [0..n]} startContent - Defines the content at the start of the bar
 * @slot {HTMLElement [0..n]} endContent - Defines the content at the end of the bar
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/Bar/
 *
 * @summary ui5 bar
 * @customElement
 * @demo demo-furo-ui5-bar Basic usage
 */
export class FuroUi5Bar extends FieldNodeAdapter(Bar.default) {
  /**
   * overwrite onFnaFieldValueChanged
   * @param val
   * @private
   */
  onFnaFieldValueChanged(val) {
    // TODO: call update element method
    this._updateElements(val);
  }

  /**
   * Disables all elements
   */
  disableAll() {
    const elems = this.querySelectorAll('*');
    elems.forEach(item => {
      item.setAttribute('disabled', '');
    });
  }

  /**
   * Enables all elements inside if check is true
   * Can be used to enable after a request
   */
  enableAll() {
    // TODO: call update element method
    const elems = this.querySelectorAll('*');
    elems.forEach(item => {
      item.removeAttribute('disabled');
    });
  }

  /**
   * Enables all elements inside
   * IMPORTANT: all checks are disabled
   */
  enableAllNoChecks() {
    const elems = this.querySelectorAll('*');
    elems.forEach(item => {
      item.removeAttribute('disabled');
    });
  }

  /**
   *
   * @param hateoas
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _updateElements(hateoas) {
    // eslint-disable-next-line no-console
    console.log(hateoas);
  }
}
window.customElements.define('furo-ui5-bar', FuroUi5Bar);

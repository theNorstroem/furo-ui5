import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `dialog-manage-views-deletebutton`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class DialogManageViewsDeletebutton extends FBP(LitElement) {
  bindData(fn) {
    this.row = fn;
    if (this.row.is_standard._value === true) {
      setTimeout(() => {
        this.row.is_standard._value = true;
      }, 500);
    }

    fn.is_standard.addEventListener('field-value-changed', () => {
      if (this.row.is_standard._value === true) {
        this.row.is_favorite._value = true;
        this._FBPTriggerWire('|--notDeletable', null);
      } else if (fn.editable._value) {
        this._FBPTriggerWire('|--deletable', null);
      }
    });

    if (fn.editable._value && !fn.is_standard._value) {
      this._FBPTriggerWire('|--deletable', null);
    }
    if (!fn.editable._value) {
      this._FBPTriggerWire('|--undeletable', null);
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --deleteRowClicked to
     * delete a row
     */
    this._FBPAddWireHook('--deleteRowClicked', () => {
      if (this.row.is_standard._value === true) {
        /**
         * @event standard-deleted
         * Fired when a item which was standard was deleted
         */

        this.dispatchEvent(
          new Event('standard-deleted', { composed: true, bubbles: true })
        );
      }

      this.row.deleteNode();
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-button
        fn-disable="|--notDeletable"
        fn-hide="|--undeletable"
        fn-enable="|--deletable"
        at-click="--deleteRowClicked"
        disabled=""
        design="Transparent"
        icon="delete"
      ></furo-ui5-button>
    `;
  }
}

window.customElements.define(
  'dialog-manage-views-deletebutton',
  DialogManageViewsDeletebutton
);

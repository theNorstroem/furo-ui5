import { LitElement, html, css } from 'lit';
import {FBP} from "@furo/fbp";
import "@furo/ui5/src/furo-ui5-table.js"

/**
 * `{{.Var.DetailElementName}}`
 *
 * todo Add a extended description or delete this line
 *
 * @summary {{.Var.Description}}
 * @customElement {{.Var.DetailElementName}}
 * @appliesMixin FBP
 */
class {{.Var.DetailClassName}} extends FBP(LitElement) {


  /**
   * Bind a {{.Var.Tab}} fieldnode
   * @public
   * @param fieldnode
   */
  bindData(fieldnode) {
    this._FBPTriggerWire('|--bindData', fieldnode);
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady(){
    super._FBPReady();
    // this._FBPTraceWires()
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
    `
  }



  /**
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-section name="{{.Var.Tab}}" heading="{{.Var.Tab}}">
        <furo-ui5-subsection>

          <furo-ui5-table
            mode="SingleSelect"
            show-no-data
            no-data-text="No entries"
            ƒ-bind-data="|--bindData(*.{{.Var.Tab}})"
          >
            <ui5-table-column slot="columns" field="*.id"></ui5-table-column>
            <ui5-table-column slot="columns" field="*.valid_from"></ui5-table-column>
            <ui5-table-column slot="columns" field="*.valid_upto"> </ui5-table-column>
          </furo-ui5-table>
          <pre>Change this file, until it fits your needs</pre>
        </furo-ui5-subsection>
      </furo-ui5-section>
    `;
  }
}

window.customElements.define('{{.Var.DetailElementName}}', {{.Var.DetailClassName}});

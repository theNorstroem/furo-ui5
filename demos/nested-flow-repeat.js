import {LitElement, html, css} from 'lit';
import {FBP} from "@furo/fbp";
import "@furo/data/src/furo-data-flow-repeat.js"
import "../src/furo-ui5-text-input.js"
/**
 * `nested-flow-repeat`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class NestedFlowRepeat extends FBP(LitElement) {



  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --add to
     * add a child
     */
    this._FBPAddWireHook("--add",()=>{
       this.field.children.add()
    });
  }


  /**
  * bindData Children
  * @public
  * @param fieldNode
  */
  bindData(fieldNode) {
    this.field = fieldNode
    // eslint-disable-next-line no-param-reassign
      fieldNode.display_name._meta.readonly = false
    // fieldNode.children.clearListOnNewData = true
      this._FBPTriggerWire('|--bindData', fieldNode);


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
          padding-left: 10px;
          border-left: 1px solid gray;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`

      <furo-ui5-text-input ƒ-bind-data="|--bindData(*.display_name)" ></furo-ui5-text-input>
      <furo-ui5-text-input ƒ-bind-data="|--bindData(*.icon)" ></furo-ui5-text-input>
      <furo-data-flow-repeat identity-path="id" ƒ-bind-data="|--bindData(*.children)">
        <template>
          <nested-flow-repeat ƒ-bind-data="--init(*)"></nested-flow-repeat>
        </template>
      </furo-data-flow-repeat>

      <span @-click="--add">+</span>
    `;
  }
}

window.customElements.define('nested-flow-repeat', NestedFlowRepeat);

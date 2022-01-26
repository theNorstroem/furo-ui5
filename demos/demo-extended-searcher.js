import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `demo-extended-searcher`
 * Desc
 *
 * @summary
 * @customElement
 * @demo demo-demo-extended-searcher Basic Usage
 * @appliesMixin FBP
 */
class DemoExtendedSearcher extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties(){
    return {};
  }

  // language=CSS
  static get styles(){
    // language=CSS
    return css`
      :host {
        display: block;
      }
      :host([hidden]){
        display: none;
      }
    `
  }

  htsIn(hts){
    // dummy
    this._hts = hts;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render(){
    // language=HTML
    return html`
      <p>I am an extended searcher placeholder</p>
    `;
  }

}

window.customElements.define('demo-extended-searcher', DemoExtendedSearcher);

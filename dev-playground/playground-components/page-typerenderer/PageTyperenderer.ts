import {html, css, LitElement} from "lit";
import { property } from "lit/decorators.js";
import "@furo/layout/furo-vertical-flex"
import "@furo/layout/furo-layout-indent"
import "@/web-components/furo-ui5-shellbar"

/**
 * ### Description
 *
 *
 * @author veith
 * @tagname page-type-renderers
 * @public
 */
export class PageTyperenderer extends LitElement {
  /**
   * Property description
   * @public
   */
  @property({ type: String, attribute: "attr-name", reflect: true })
  attrName = "";

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
      height: 100vh;
    }

    :host([hidden]){
      display: none;
    }
    /* do not show components which are not defined */
    *:not(:defined) {
      display: none;
    }
  `;


  /**
   * Template
   * @private
   */
  override render() {
    return html`<furo-vertical-flex>
      <furo-ui5-shellbar primary-title="Typerenderer"></furo-ui5-shellbar>
      <furo-layout-indent>
        <span>hej page-typerenderer by veith</span>
      </furo-layout-indent>
    </furo-vertical-flex>`;
  }


}

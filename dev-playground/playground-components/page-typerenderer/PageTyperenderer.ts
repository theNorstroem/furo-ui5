import {html, css, LitElement} from "lit";

import "@furo/layout/furo-vertical-flex"
import "@furo/layout/furo-layout-indent"
import "@/elements/shellbar"
import "@/elements/number-input"
import "@/elements/slider"
import "@/type-renderers/cell-int64"

import {AllTypesTest} from "@/models/furoui5test/AllTypesTest"
import "@/elements/section";
import "@/elements/subsection";

/**
 * ### Description
 *
 *
 * @author veith
 * @tagname page-type-renderers
 * @public
 */
export class PageTyperenderer extends LitElement {
  data = new AllTypesTest ();

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
      height: 100vh;
    }

    :host([hidden]) {
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
      <furo-ui5-section heading="Numeric">
        <furo-ui5-subsection></furo-ui5-subsection>
        <furo-ui5-number-input .model="${this.data.primitiveInt64}"></furo-ui5-number-input>
        <furo-ui5-slider .model="${this.data.primitiveInt64}"></furo-ui5-slider>
        <cell-int64 .model="${this.data.primitiveInt64}"></cell-int64>
      </furo-ui5-section>
    </furo-vertical-flex>`;
  }
}

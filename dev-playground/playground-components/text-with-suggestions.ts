import {html, css, LitElement} from "lit";
import { property } from "lit/decorators.js";

/**
 * ### Description
 *
 *
 *
 * @author veith
 * @tagname text-with-suggestions
 * @public
 */
export class TextWithSuggestions extends LitElement {
  /**
   * Property description
   * @public
   */
  @property({ type: String, attribute: "attr-name", reflect: true })
  attrName: string = "";

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
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
    return html`<span>hej text-with-suggestions by veith</span>`;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'text-with-suggestions': TextWithSuggestions;
  }
}

window.customElements.define('text-with-suggestions', TextWithSuggestions);

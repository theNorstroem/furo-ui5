import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { nl2br } from "../src/directives/nl2br";

/**
 * ### Helper component for the nl2br test
 *
 * @public
 */
export class NL2BRHelper extends LitElement {
  /**
   * Property description
   * @public
   */
  @property({ type: String, attribute: "text" })
  text: string = "";

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
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
    return html`<span>${nl2br(this.text)}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nl2br-test-helper": NL2BRHelper;
  }
}

window.customElements.define("nl2br-test-helper", NL2BRHelper);

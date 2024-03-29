import { LitElement } from 'lit';

/**
 * The furo-ui5-dialog-display will catch furo-ui5-dialog elements, to display it in the dom of his parent element.
 *
 * The first furo-ui5-dialog-display will catch the `furo-ui5-dialog-register` request from a underlying furo-ui5-dialog.
 *
 * @summary Display element for furo-ui5-dialog
 * @element furo-ui5-dialog-display
 */
export class FuroUi5DialogDisplay extends LitElement {
  connectedCallback() {
    this.parentNode.addEventListener('register-furo-ui5-dialog', e => {
      e.stopPropagation();
      this.parentNode.appendChild(e.detail);
    });
  }
}

window.customElements.define('furo-ui5-dialog-display', FuroUi5DialogDisplay);

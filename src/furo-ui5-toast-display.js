import { LitElement } from 'lit';

/**
 * The furo-ui5-toast-display will catch furo-ui5-toast elements, to display it in the dom of his parent element.
 *
 * The first furo-ui5-toast-display on the event path will catch the `furo-ui5-toast-register` request from a underlying furo-ui5-toast.
 *
 * @summary Display element for furo-ui5-toast
 * @element furo-ui5-toast-display
 */
export class FuroUi5ToastDisplay extends LitElement {
  connectedCallback() {
    this.parentNode.addEventListener('register-furo-ui5-toast', e => {
      e.stopPropagation();
      this.parentNode.appendChild(e.detail);
    });
  }
}

window.customElements.define('furo-ui5-toast-display', FuroUi5ToastDisplay);

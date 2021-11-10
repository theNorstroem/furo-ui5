// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TextInput } from '../furo-ui5-text-input.js';

export class CelleditString extends FuroUi5TextInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('celledit-string', CelleditString);

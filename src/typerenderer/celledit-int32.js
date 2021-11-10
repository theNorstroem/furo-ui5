// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInput } from '../furo-ui5-number-input.js';

export class CelleditInt32 extends FuroUi5NumberInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('celledit-int32', CelleditInt32);

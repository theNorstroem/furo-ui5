// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInput } from '../furo-ui5-number-input.js';

export class CelleditInt32 extends FuroUi5NumberInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }

  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-int32' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditInt32.define();

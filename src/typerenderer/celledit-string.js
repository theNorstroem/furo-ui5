// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TextInput } from '../furo-ui5-text-input.js';

/**
 *
 * @element celledit-string
 */
export class CelleditString extends FuroUi5TextInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-string';
    return md;
  }

  /**
   * @private
   */
  static get styles() {
    return super.styles;
  }
}

CelleditString.define();

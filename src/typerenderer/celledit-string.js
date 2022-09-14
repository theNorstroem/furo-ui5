// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TextInput } from '../furo-ui5-text-input.js';

/**
 *
 *
 * @summary celledit renderer for `string`
 * @element celledit-string
 */
export class CelleditString extends FuroUi5TextInput {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-string' };
  }

  /**
   * @private
   */

  static get styles() {
    return [
      super.styles,
      {
        content: ':host{width:100%}',
      },
    ];
  }
}

CelleditString.define();

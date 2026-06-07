import { FuroUi5TextInput } from '@/elements/text-input/FuroUi5TextInput';

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
  static override get metadata() {
    return { tag: "celledit-string" };
  }

  /**
   * @private
   */

  static override get styles() {
    return [
      super.styles,
      // language=CSS
      `:host{
        width:100%
      }
      `,
    ];
  }
}

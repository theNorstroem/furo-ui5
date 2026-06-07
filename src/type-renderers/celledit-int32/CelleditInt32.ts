import { FuroUi5NumberInput } from '@/elements/number-input/FuroUi5NumberInput';

/**
 *
 *
 * @summary celledit renderer for `int32`
 * @element celledit-int32
 */
export class CelleditInt32 extends FuroUi5NumberInput {

  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-int32" };
  }

  static override get styles() {
    return [
      super.styles,
      // language=CSS
      ` :host(:not([hidden])) {
        width: 100%;
      }
      `,
    ];
  }

}

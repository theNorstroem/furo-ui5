import { FuroUi5SelectEnum } from "@/elements/select-enum/FuroUi5SelectEnum";

/**
 *
 *
 * @summary celledit renderer for `enum`
 * @element celledit-enum
 */
export class CelleditEnum extends FuroUi5SelectEnum {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "celledit-enum" };
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

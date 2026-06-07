import { FuroUi5DatePicker } from "@/elements/date-picker/FuroUi5DatePicker";

/**
 *
 * @summary celledit renderer for `furo.type.Date`
 * @element celledit-furo-type-date
 */
export class CelleditFuroTypeDate extends FuroUi5DatePicker {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-furo-type-date" };
  }

  static override get styles() {
    return [
      super.styles,
      // language=css
      `:host{width:100%}`,
    ];
  }
}

import { FuroUi5DatePicker } from "@/elements/date-picker/FuroUi5DatePicker";

/**
 * `celledit-google-type-date` is a `celledit` context renderer.
 *
 * It uses furo-ui5-date-picker as the renderer
 *
 * @summary celledit renderer for `google.type.Date`
 * @element celledit-google-type-date
 */
export class CelleditGoogleTypeDate extends FuroUi5DatePicker {
  constructor() {
    super();
    this.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
  }

  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-type-date" };
  }

  static override get styles() {
    return [
      super.styles,
      // language=css
      `:host{width:100%}`,
    ];
  }
}

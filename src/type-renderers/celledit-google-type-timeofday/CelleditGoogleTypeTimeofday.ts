import { FuroUi5TimePicker } from "@/elements/time-picker/FuroUi5TimePicker";

/**
 * `celledit-google-type-timeofday` is a `celledit` context renderer.
 *
 * It uses furo-ui5-time-picker as the renderer
 *
 * @summary celledit renderer for `google.type.TimeOfDay`
 * @element celledit-google-type-timeofday
 */
export class CelleditGoogleTypeTimeofday extends FuroUi5TimePicker {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-type-timeofday" };
  }

  static override get styles() {
    return [
      super.styles,
      // language=css
      `:host{width:100%}`,
    ];
  }
}

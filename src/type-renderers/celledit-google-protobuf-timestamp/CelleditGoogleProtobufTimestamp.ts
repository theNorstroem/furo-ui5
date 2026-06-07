import { FuroUi5DateTimePicker } from '@/elements/date-time-picker/FuroUi5DateTimePicker';
/**
 *
 * @summary celledit renderer for `google.protobuf.Timestamp`
 * @element celledit-google-protobuf-timestamp
 */
export class CelleditGoogleProtobufTimestamp extends FuroUi5DateTimePicker {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-protobuf-timestamp" };
  }

  static override get styles() {
    return [
      super.styles,
      // language=css
      `:host{width:100%}`,
    ];
  }
}

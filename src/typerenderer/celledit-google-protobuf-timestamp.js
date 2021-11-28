// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DateTimePicker } from '../furo-ui5-date-time-picker.js';

class CelleditGoogleProtobufTimestamp extends FuroUi5DateTimePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-timestamp' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufTimestamp.define();

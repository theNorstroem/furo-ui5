// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DateTimePicker } from '../furo-ui5-date-time-picker.js';

class CelleditGoogleProtobufTimestamp extends FuroUi5DateTimePicker {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-google-protobuf-timestamp';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufTimestamp.define();

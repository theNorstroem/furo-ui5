// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DateTimePicker } from '@/impl/impl/furo-ui5-date-time-picker';
/**
 *
 * @summary celledit renderer for `google.protobuf.Timestamp`
 * @element celledit-google-protobuf-timestamp
 */
export class CelleditGoogleProtobufTimestamp extends FuroUi5DateTimePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-timestamp' };
  }

  static get styles() {
    return [
      super.styles,
      {
        content: ':host{width:100%}',
      },
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditGoogleProtobufTimestamp": CelleditGoogleProtobufTimestamp;
  }
}

import CelleditGoogleProtobufTimestamp from "@/typerenderer/impl/CelleditGoogleProtobufTimestamp
CelleditGoogleProtobufTimestamp.define()

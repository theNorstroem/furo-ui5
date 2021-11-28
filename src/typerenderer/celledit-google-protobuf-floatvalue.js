import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-floatvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.FloatValue`
 * @element celledit-google-protobuf-floatvalue
 */
class CelleditGoolgeProtobufFloatvalue extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-floatvalue' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoolgeProtobufFloatvalue.define();

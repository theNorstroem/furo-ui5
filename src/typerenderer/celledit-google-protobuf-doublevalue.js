// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-doublevalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Double
 * @element celledit-google-protobuf-doublevalue
 */
class CelleditGoogleProtobufDoublevalue extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-doublevalue' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufDoublevalue.define();

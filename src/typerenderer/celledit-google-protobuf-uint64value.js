import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-uint64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Uint64value`
 * @element celledit-google-protobuf-uint64value
 */
class CelleditGoogleProtobufUint64value extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-uint64value' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufUint64value.define();

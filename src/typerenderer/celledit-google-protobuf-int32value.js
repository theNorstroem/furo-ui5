import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-int32value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Int32value`
 * @element celledit-google-protobuf-int32value
 */
class CelleditGoolgeProtobufIn32value extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-int32value' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoolgeProtobufIn32value.define();

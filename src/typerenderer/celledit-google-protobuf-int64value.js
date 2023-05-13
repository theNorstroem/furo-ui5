import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-int64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Int64Value`
 * @element celledit-google-protobuf-int64value
 */
export class CelleditGoolgeProtobufIn64value extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-int64value' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoolgeProtobufIn64value.define();

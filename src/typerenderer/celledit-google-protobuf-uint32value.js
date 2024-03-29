import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-uint32value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Uint32value`
 * @element celledit-google-protobuf-uint32value
 */
export class CelleditGoolgeProtobufUin32value extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-uint32value' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoolgeProtobufUin32value.define();

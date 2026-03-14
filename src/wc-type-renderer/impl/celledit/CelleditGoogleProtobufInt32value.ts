import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-int32value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Int32value`
 * @element celledit-google-protobuf-int32value
 */
export class CelleditGoolgeProtobufIn32value extends CelleditInt32 {
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

declare global {
  interface HTMLElementTagNameMap {
    "CelleditGoolgeProtobufIn32value": CelleditGoolgeProtobufIn32value;
  }
}

import CelleditGoolgeProtobufIn32value from "@/wc-type-renderer/impl/CelleditGoolgeProtobufIn32value
CelleditGoolgeProtobufIn32value.define()

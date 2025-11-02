import { CelleditBool } from './celledit-bool.js';

/**
 * `celledit-google-protobuf-boolvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary celledit renderer for `google.protobuf.BoolValue`
 * @element celledit-google-protobuf-boolvalue
 */

export class CelleditGoogleProtobufBoolvalue extends CelleditBool {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-boolvalue' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditGoogleProtobufBoolvalue": CelleditGoogleProtobufBoolvalue;
  }
}

import CelleditGoogleProtobufBoolvalue from "@/typerenderer/impl/CelleditGoogleProtobufBoolvalue
CelleditGoogleProtobufBoolvalue.define()

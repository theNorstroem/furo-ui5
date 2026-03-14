import { CelleditString } from './celledit-string.js';

/**
 *
 * @summary celledit renderer for `google.protobuf.StringValue`
 * @element celledit-google-protobuf-stringvalue
 */
export class CelleditGoogleProtobufStringvalue extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-stringvalue' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditGoogleProtobufStringvalue": CelleditGoogleProtobufStringvalue;
  }
}

import CelleditGoogleProtobufStringvalue from "@/wc-type-renderer/impl/CelleditGoogleProtobufStringvalue
CelleditGoogleProtobufStringvalue.define()

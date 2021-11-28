import { CelleditString } from './celledit-string.js';

/**
 *
 * @summary celledit renderer for `google.protobuf.StringValue`
 * @element celledit-google-protobuf-stringvalue
 */
class CelleditGoogleProtobufStringvalue extends CelleditString {
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

CelleditGoogleProtobufStringvalue.define();

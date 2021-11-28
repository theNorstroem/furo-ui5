// eslint-disable-next-line import/named
import { CelleditBool } from './celledit-bool.js';

/**
 * `celledit-google-protobuf-boolvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary celledit renderer for bool
 * @element celledit-google-protobuf-boolvalue
 */

class CelleditGoogleProtobufBoolvalue extends CelleditBool {
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

CelleditGoogleProtobufBoolvalue.define();

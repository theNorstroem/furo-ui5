// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-uint64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Uint64value
 * @element celledit-google-protobuf-uint64value
 */
class CelleditGoogleProtobufUint64value extends CelleditInt32 {}

window.customElements.define(
  'celledit-google-protobuf-uint64value',
  CelleditGoogleProtobufUint64value
);

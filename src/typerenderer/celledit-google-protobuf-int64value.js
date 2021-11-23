// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-google-protobuf-int64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for google.protobuf.Int64
 * @element celledit-google-protobuf-int64value
 */
class CelleditGoolgeProtobufIn64value extends CelleditInt32 {}

window.customElements.define(
  'celledit-google-protobuf-int64value',
  CelleditGoolgeProtobufIn64value
);

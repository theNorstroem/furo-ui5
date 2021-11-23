// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

/**
 * `form-google-protobuf-int32value` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for google.protobuf.Int32value
 * @element form-google-protobuf-int32value
 */
class FormGoolgeProtobufIn32value extends FormInt32 {}

window.customElements.define(
  'form-google-protobuf-int32value',
  FormGoolgeProtobufIn32value
);

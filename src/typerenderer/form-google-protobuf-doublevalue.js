import { FormInt32 } from './form-int32.js';

/**
 * `form-google-protobuf-doublevalue` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `google.protobuf.Double`
 * @element form-google-protobuf-doublevalue
 */
class FormGoogleProtobufDoublevalue extends FormInt32 {}

window.customElements.define(
  'form-google-protobuf-doublevalue',
  FormGoogleProtobufDoublevalue
);

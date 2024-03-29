import { FormBool } from './form-bool.js';

/**
 * `form-google-protobuf-boolvalue` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary form renderer for `google.protobuf.BoolValue`
 * @element form-google-protobuf-boolvalue
 */

export class FormGoogleProtobufBoolvalue extends FormBool {}

window.customElements.define(
  'form-google-protobuf-boolvalue',
  FormGoogleProtobufBoolvalue
);

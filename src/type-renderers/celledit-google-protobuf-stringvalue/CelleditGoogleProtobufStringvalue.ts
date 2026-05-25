import { CelleditString } from "@/type-renderers/celledit-string/CelleditString";

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
    return { tag: "celledit-google-protobuf-stringvalue" };
  }

  static get styles() {
    return super.styles;
  }
}

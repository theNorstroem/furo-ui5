import {html, css, LitElement} from "lit";

import "@furo/layout/furo-vertical-flex"
import "@furo/layout/furo-layout-indent"
import "@/elements/shellbar"
import "@/elements/number-input"
import "@/elements/slider"
import "@/elements/checkbox"
import "@/type-renderers/cell-bool"
import "@/type-renderers/cell-furo-fat-bool";
import "@/type-renderers/cell-google-protobuf-boolvalue";
import "@/type-renderers/cell-int64"
import "@/type-renderers/cell-double"
import "@/type-renderers/cell-float"
import "@/type-renderers/cell-int32"
import "@/type-renderers/cell-uint32"
import "@/type-renderers/cell-uint64"
import "@/type-renderers/cell-furo-fat-int32";
import "@/type-renderers/cell-google-protobuf-int32value";

import {AllTypesTest} from "@/models/furoui5test/AllTypesTest"
import "@/elements/section";
import "@/elements/subsection";

/**
 * ### Description
 *
 *
 * @author veith
 * @tagname page-type-renderers
 * @public
 */
export class PageTyperenderer extends LitElement {
  data = new AllTypesTest ();

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
      height: 100vh;
    }

    :host([hidden]) {
      display: none;
    }
    /* do not show components which are not defined */
    *:not(:defined) {
      display: none;
    }
  `;

  /**
   * Template
   * @private
   */
  override render() {
    return html` <furo-vertical-flex>
      <furo-ui5-shellbar primary-title="Typerenderer"></furo-ui5-shellbar>

      <furo-ui5-section heading="Boolean">
        <furo-ui5-subsection heading="Bool">
          <furo-ui5-checkbox .model="${this.data.primitiveBool}"></furo-ui5-checkbox>
          <cell-bool .model="${this.data.primitiveBool}"></cell-bool>
          <cell-bool .model="${this.data.primitiveBool}"></cell-bool>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Bool">
          <furo-ui5-checkbox .model="${this.data.furoFatBool}"></furo-ui5-checkbox>
          <cell-furo-fat-bool .model="${this.data.furoFatBool}"></cell-furo-fat-bool>
          <cell-furo-fat-bool .model="${this.data.furoFatBool}"></cell-furo-fat-bool>
        </furo-ui5-subsection>
        <furo-ui5-subsection heading="google.Protobuf.Boolvalue">
          <furo-ui5-checkbox .model="${this.data.googleProtobufBoolvalue}"></furo-ui5-checkbox>
          <cell-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></cell-google-protobuf-boolvalue>
          <cell-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></cell-google-protobuf-boolvalue>
        </furo-ui5-subsection>
      </furo-ui5-section>
      <furo-ui5-section heading="Numeric">
        <furo-ui5-subsection heading="Int64">
          <furo-ui5-number-input .model="${this.data.primitiveInt64}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveInt64}"></furo-ui5-slider>
          <cell-int64 .model="${this.data.primitiveInt64}"></cell-int64>
          <cell-int64 .model="${this.data.primitiveInt64}"></cell-int64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Double">
          <furo-ui5-number-input .model="${this.data.primitiveDouble}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveDouble}"></furo-ui5-slider>
          <cell-double .model="${this.data.primitiveDouble}"></cell-double>
          <cell-double .model="${this.data.primitiveDouble}"></cell-double>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Float">
          <furo-ui5-number-input .model="${this.data.primitiveFloat}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveFloat}"></furo-ui5-slider>
          <cell-float .model="${this.data.primitiveFloat}"></cell-float>
          <cell-float .model="${this.data.primitiveFloat}"></cell-float>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint64">
          <furo-ui5-number-input .model="${this.data.primitiveUint64}"></furo-ui5-number-input>
          <cell-uint64 .model="${this.data.primitiveUint64}"></cell-uint64>
          <cell-uint64 .model="${this.data.primitiveUint64}"></cell-uint64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Int32">
          <furo-ui5-number-input .model="${this.data.primitiveInt32}"></furo-ui5-number-input>
          <cell-int32 .model="${this.data.primitiveInt32}"></cell-int32>
          <cell-int32 .model="${this.data.primitiveInt32}"></cell-int32>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint32">
          <furo-ui5-number-input .model="${this.data.primitiveUint32}"></furo-ui5-number-input>
          <cell-uint32 .model="${this.data.primitiveUint32}"></cell-uint32>
          <cell-uint32 .model="${this.data.primitiveUint32}"></cell-uint32>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.int32value">
          <furo-ui5-number-input .model="${this.data.googleProtobufInt32value}"></furo-ui5-number-input>
          <cell-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></cell-google-protobuf-int32value>
          <cell-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></cell-google-protobuf-int32value>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.int32">
          <furo-ui5-number-input .model="${this.data.furoFatInt32}"></furo-ui5-number-input>
          <cell-furo-fat-int32 .model="${this.data.furoFatInt32}"></cell-furo-fat-int32>
          <cell-furo-fat-int32 .model="${this.data.furoFatInt32}"></cell-furo-fat-int32>
        </furo-ui5-subsection>
      </furo-ui5-section>
    </furo-vertical-flex>`;
  }
}

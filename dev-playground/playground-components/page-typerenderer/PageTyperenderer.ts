import {html, css, LitElement} from "lit";

import "@furo/layout/furo-vertical-flex"
import "@furo/layout/furo-layout-indent"
import "@/elements/shellbar"
import "@/elements/number-input"
import "@/elements/slider"
import "@/elements/date-picker"
import "@/elements/date-time-picker"
import "@/elements/time-picker"
import "@/elements/checkbox"
import "@/elements/text-input"
import "@/type-renderers/cell-string"
import "@/type-renderers/cell-furo-fat-string";
import "@/type-renderers/cell-google-protobuf-stringvalue";
import "@/type-renderers/cell-bool"
import "@/type-renderers/cell-furo-fat-bool";
import "@/type-renderers/cell-google-protobuf-boolvalue";
import "@/type-renderers/cell-int64"
import "@/type-renderers/cell-furo-fat-int64";
import "@/type-renderers/cell-google-protobuf-int64value";
import "@/type-renderers/cell-double"
import "@/type-renderers/cell-furo-fat-double";
import "@/type-renderers/cell-google-protobuf-doublevalue";
import "@/type-renderers/cell-float"
import "@/type-renderers/cell-furo-fat-float";
import "@/type-renderers/cell-google-protobuf-floatvalue";
import "@/type-renderers/cell-int32"
import "@/type-renderers/cell-uint32"
import "@/type-renderers/cell-furo-fat-uint32";
import "@/type-renderers/cell-google-protobuf-uint32value";
import "@/type-renderers/cell-uint64"
import "@/type-renderers/cell-furo-fat-uint64";
import "@/type-renderers/cell-google-protobuf-uint64value";
import "@/type-renderers/cell-furo-fat-int32";
import "@/type-renderers/cell-google-protobuf-int32value";
import "@/type-renderers/cell-furo-integerproperty";
import "@/type-renderers/cell-furo-numberproperty";
import "@/type-renderers/cell-furo-stringproperty";
import "@/type-renderers/cell-furo-stringoptionproperty";
import "@/type-renderers/cell-google-type-date";
import "@/type-renderers/cell-furo-type-date";
import "@/type-renderers/cell-google-type-money";
import "@/type-renderers/cell-furo-type-money";
import "@/type-renderers/cell-google-type-timeofday";
import "@/type-renderers/cell-google-protobuf-timestamp";
import "@/type-renderers/display-bool";
import "@/type-renderers/display-double";
import "@/type-renderers/display-float";
import "@/type-renderers/display-furo-fat-bool";
import "@/type-renderers/display-furo-fat-double";
import "@/type-renderers/display-furo-fat-float";
import "@/type-renderers/display-furo-fat-int32";
import "@/type-renderers/display-furo-fat-int64";
import "@/type-renderers/display-furo-fat-string";
import "@/type-renderers/display-furo-fat-uint32";
import "@/type-renderers/display-furo-fat-uint64";
import "@/type-renderers/display-furo-integerproperty";
import "@/type-renderers/display-furo-numberproperty";
import "@/type-renderers/display-furo-stringoptionproperty";
import "@/type-renderers/display-furo-stringproperty";
import "@/type-renderers/display-furo-type-date";
import "@/type-renderers/display-furo-type-money";
import "@/type-renderers/display-google-protobuf-boolvalue";
import "@/type-renderers/display-google-protobuf-doublevalue";
import "@/type-renderers/display-google-protobuf-floatvalue";
import "@/type-renderers/display-google-protobuf-int32value";
import "@/type-renderers/display-google-protobuf-int64value";
import "@/type-renderers/display-google-protobuf-stringvalue";
import "@/type-renderers/display-google-protobuf-timestamp";
import "@/type-renderers/display-google-protobuf-uint32value";
import "@/type-renderers/display-google-protobuf-uint64value";
import "@/type-renderers/display-google-type-date";
import "@/type-renderers/display-google-type-money";
import "@/type-renderers/display-google-type-timeofday";
import "@/type-renderers/display-int32";
import "@/type-renderers/display-int64";
import "@/type-renderers/display-string";
import "@/type-renderers/display-uint32";
import "@/type-renderers/display-uint64";
import {TableCss} from "@/styles/table.css"
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
  static override styles = [TableCss,css`
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
  `];

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
          <table>
            <thead>
              <tr>
                <th>Display</th>
                <th>Cell</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tr>
              <td><display-bool .model="${this.data.primitiveBool}"></display-bool></td>
              <td><cell-bool .model="${this.data.primitiveBool}"></cell-bool></td>
              <td></td>
            </tr>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Bool">
          <furo-ui5-checkbox .model="${this.data.furoFatBool}"></furo-ui5-checkbox>
          <cell-furo-fat-bool .model="${this.data.furoFatBool}"></cell-furo-fat-bool>
          <display-furo-fat-bool .model="${this.data.furoFatBool}"></display-furo-fat-bool>
        </furo-ui5-subsection>
        <furo-ui5-subsection heading="google.Protobuf.Boolvalue">
          <furo-ui5-checkbox .model="${this.data.googleProtobufBoolvalue}"></furo-ui5-checkbox>
          <cell-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></cell-google-protobuf-boolvalue>
          <display-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></display-google-protobuf-boolvalue>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="String">
        <furo-ui5-subsection heading="String">
          <furo-ui5-text-input .model="${this.data.primitiveString}"></furo-ui5-text-input>
          <cell-string .model="${this.data.primitiveString}"></cell-string>
          <display-string .model="${this.data.primitiveString}"></display-string>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.String">
          <furo-ui5-text-input .model="${this.data.furoFatString}"></furo-ui5-text-input>
          <cell-furo-fat-string .model="${this.data.furoFatString}"></cell-furo-fat-string>
          <display-furo-fat-string .model="${this.data.furoFatString}"></display-furo-fat-string>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.StringValue">
          <furo-ui5-text-input .model="${this.data.googleProtobufStringvalue}"></furo-ui5-text-input>
          <cell-google-protobuf-stringvalue .model="${this.data.googleProtobufStringvalue}"></cell-google-protobuf-stringvalue>
          <display-google-protobuf-stringvalue .model="${this.data.googleProtobufStringvalue}"></display-google-protobuf-stringvalue>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="Property">
        <furo-ui5-subsection heading="furo.IntegerProperty">
          <cell-furo-integerproperty .model="${this.data.furoIntegerproperty}"></cell-furo-integerproperty>
          <display-furo-integerproperty .model="${this.data.furoIntegerproperty}"></display-furo-integerproperty>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.NumberProperty">
          <cell-furo-numberproperty .model="${this.data.furoNumberproperty}"></cell-furo-numberproperty>
          <display-furo-numberproperty .model="${this.data.furoNumberproperty}"></display-furo-numberproperty>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.StringProperty">
          <cell-furo-stringproperty .model="${this.data.furoStringproperty}"></cell-furo-stringproperty>
          <display-furo-stringproperty .model="${this.data.furoStringproperty}"></display-furo-stringproperty>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.StringOptionProperty">
          <cell-furo-stringoptionproperty .model="${this.data.furoStringoptionproperty}"></cell-furo-stringoptionproperty>
          <display-furo-stringoptionproperty .model="${this.data.furoStringoptionproperty}"></display-furo-stringoptionproperty>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="Date / Time / Money">
        <furo-ui5-subsection heading="google.type.Date">
          <furo-ui5-date-picker .model="${this.data.googleTypeDate}"></furo-ui5-date-picker>
          <cell-google-type-date .model="${this.data.googleTypeDate}"></cell-google-type-date>
          <display-google-type-date .model="${this.data.googleTypeDate}"></display-google-type-date>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.type.Date">
          <furo-ui5-date-picker .model="${this.data.furoTypeDate}"></furo-ui5-date-picker>
          <cell-furo-type-date .model="${this.data.furoTypeDate}"></cell-furo-type-date>
          <display-furo-type-date .model="${this.data.furoTypeDate}"></display-furo-type-date>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.Timestamp">
          <furo-ui5-date-time-picker .model="${this.data.googleProtobufTimestamp}"></furo-ui5-date-time-picker>
          <cell-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></cell-google-protobuf-timestamp>
          <display-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></display-google-protobuf-timestamp>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.type.TimeOfDay">
          <furo-ui5-time-picker .model="${this.data.googleTypeTimeofday}"></furo-ui5-time-picker>
          <cell-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></cell-google-type-timeofday>
          <display-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></display-google-type-timeofday>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.type.Money">
          <cell-google-type-money .model="${this.data.googleTypeMoney}"></cell-google-type-money>
          <display-google-type-money .model="${this.data.googleTypeMoney}"></display-google-type-money>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.type.Money">
          <cell-furo-type-money .model="${this.data.furoTypeMoney}"></cell-furo-type-money>
          <display-furo-type-money .model="${this.data.furoTypeMoney}"></display-furo-type-money>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="Numeric">
        <furo-ui5-subsection heading="Int64">
          <furo-ui5-number-input .model="${this.data.primitiveInt64}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveInt64}"></furo-ui5-slider>
          <cell-int64 .model="${this.data.primitiveInt64}"></cell-int64>
          <display-int64 .model="${this.data.primitiveInt64}"></display-int64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Int64">
          <furo-ui5-number-input .model="${this.data.furoFatInt64}"></furo-ui5-number-input>
          <cell-furo-fat-int64 .model="${this.data.furoFatInt64}"></cell-furo-fat-int64>
          <display-furo-fat-int64 .model="${this.data.furoFatInt64}"></display-furo-fat-int64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.Int64Value">
          <furo-ui5-number-input .model="${this.data.googleProtobufInt64value}"></furo-ui5-number-input>
          <cell-google-protobuf-int64value .model="${this.data.googleProtobufInt64value}"></cell-google-protobuf-int64value>
          <display-google-protobuf-int64value .model="${this.data.googleProtobufInt64value}"></display-google-protobuf-int64value>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Double">
          <furo-ui5-number-input .model="${this.data.primitiveDouble}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveDouble}"></furo-ui5-slider>
          <cell-double .model="${this.data.primitiveDouble}"></cell-double>
          <display-double .model="${this.data.primitiveDouble}"></display-double>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Double">
          <furo-ui5-number-input .model="${this.data.furoFatDouble}"></furo-ui5-number-input>
          <cell-furo-fat-double .model="${this.data.furoFatDouble}"></cell-furo-fat-double>
          <display-furo-fat-double .model="${this.data.furoFatDouble}"></display-furo-fat-double>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.DoubleValue">
          <furo-ui5-number-input .model="${this.data.googleProtobufDoublevalue}"></furo-ui5-number-input>
          <cell-google-protobuf-doublevalue .model="${this.data.googleProtobufDoublevalue}"></cell-google-protobuf-doublevalue>
          <display-google-protobuf-doublevalue .model="${this.data.googleProtobufDoublevalue}"></display-google-protobuf-doublevalue>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Float">
          <furo-ui5-number-input .model="${this.data.primitiveFloat}"></furo-ui5-number-input>
          <furo-ui5-slider .model="${this.data.primitiveFloat}"></furo-ui5-slider>
          <cell-float .model="${this.data.primitiveFloat}"></cell-float>
          <display-float .model="${this.data.primitiveFloat}"></display-float>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Float">
          <furo-ui5-number-input .model="${this.data.furoFatFloat}"></furo-ui5-number-input>
          <cell-furo-fat-float .model="${this.data.furoFatFloat}"></cell-furo-fat-float>
          <display-furo-fat-float .model="${this.data.furoFatFloat}"></display-furo-fat-float>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.FloatValue">
          <furo-ui5-number-input .model="${this.data.googleProtobufFloatvalue}"></furo-ui5-number-input>
          <cell-google-protobuf-floatvalue .model="${this.data.googleProtobufFloatvalue}"></cell-google-protobuf-floatvalue>
          <display-google-protobuf-floatvalue .model="${this.data.googleProtobufFloatvalue}"></display-google-protobuf-floatvalue>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint64">
          <furo-ui5-number-input .model="${this.data.primitiveUint64}"></furo-ui5-number-input>
          <cell-uint64 .model="${this.data.primitiveUint64}"></cell-uint64>
          <display-uint64 .model="${this.data.primitiveUint64}"></display-uint64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Uint64">
          <furo-ui5-number-input .model="${this.data.furoFatUint64}"></furo-ui5-number-input>
          <cell-furo-fat-uint64 .model="${this.data.furoFatUint64}"></cell-furo-fat-uint64>
          <display-furo-fat-uint64 .model="${this.data.furoFatUint64}"></display-furo-fat-uint64>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.UInt64Value">
          <furo-ui5-number-input .model="${this.data.googleProtobufUint64value}"></furo-ui5-number-input>
          <cell-google-protobuf-uint64value .model="${this.data.googleProtobufUint64value}"></cell-google-protobuf-uint64value>
          <display-google-protobuf-uint64value .model="${this.data.googleProtobufUint64value}"></display-google-protobuf-uint64value>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Int32">
          <furo-ui5-number-input .model="${this.data.primitiveInt32}"></furo-ui5-number-input>
          <cell-int32 .model="${this.data.primitiveInt32}"></cell-int32>
          <display-int32 .model="${this.data.primitiveInt32}"></display-int32>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint32">
          <furo-ui5-number-input .model="${this.data.primitiveUint32}"></furo-ui5-number-input>
          <cell-uint32 .model="${this.data.primitiveUint32}"></cell-uint32>
          <display-uint32 .model="${this.data.primitiveUint32}"></display-uint32>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.Uint32">
          <furo-ui5-number-input .model="${this.data.furoFatUint32}"></furo-ui5-number-input>
          <cell-furo-fat-uint32 .model="${this.data.furoFatUint32}"></cell-furo-fat-uint32>
          <display-furo-fat-uint32 .model="${this.data.furoFatUint32}"></display-furo-fat-uint32>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.UInt32Value">
          <furo-ui5-number-input .model="${this.data.googleProtobufUint32value}"></furo-ui5-number-input>
          <cell-google-protobuf-uint32value .model="${this.data.googleProtobufUint32value}"></cell-google-protobuf-uint32value>
          <display-google-protobuf-uint32value .model="${this.data.googleProtobufUint32value}"></display-google-protobuf-uint32value>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="google.protobuf.int32value">
          <furo-ui5-number-input .model="${this.data.googleProtobufInt32value}"></furo-ui5-number-input>
          <cell-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></cell-google-protobuf-int32value>
          <display-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></display-google-protobuf-int32value>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="furo.fat.int32">
          <furo-ui5-number-input .model="${this.data.furoFatInt32}"></furo-ui5-number-input>
          <cell-furo-fat-int32 .model="${this.data.furoFatInt32}"></cell-furo-fat-int32>
          <display-furo-fat-int32 .model="${this.data.furoFatInt32}"></display-furo-fat-int32>
        </furo-ui5-subsection>
      </furo-ui5-section>
    </furo-vertical-flex>`;
  }
}

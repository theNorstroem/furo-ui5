import {html, css, LitElement} from "lit";
import "@furo/layout/furo-vertical-flex"
import "@furo/layout/furo-layout-indent"
import "@/elements/shellbar"
import "@/elements/number-input"
import "@/elements/label"
import "@/elements/slider"
import "@/elements/date-picker"
import "@/elements/date-time-picker"
import "@/elements/time-picker"
import "@/elements/checkbox"
import "@/elements/text-input"
import "@/type-renderers/cell-string"
import "@/type-renderers/celledit-string"
import "@/type-renderers/celledit-google-type-date"
import "@/type-renderers/celledit-furo-type-date"
import "@/type-renderers/cell-furo-fat-string";
import "@/type-renderers/celledit-furo-fat-string";
import "@/type-renderers/cell-google-protobuf-stringvalue";
import "@/type-renderers/celledit-google-protobuf-stringvalue";
import "@/type-renderers/celledit-bool"
import "@/type-renderers/celledit-furo-fat-bool"
import "@/type-renderers/cell-bool"
import "@/type-renderers/cell-furo-fat-bool";
import "@/type-renderers/cell-google-protobuf-boolvalue";
import "@/type-renderers/celledit-google-protobuf-boolvalue";
import "@/type-renderers/cell-int64"
import "@/type-renderers/celledit-int64"
import "@/type-renderers/cell-furo-fat-int64";
import "@/type-renderers/celledit-furo-fat-int64";
import "@/type-renderers/cell-google-protobuf-int64value";
import "@/type-renderers/celledit-google-protobuf-int64value";
import "@/type-renderers/cell-double"
import "@/type-renderers/celledit-double"
import "@/type-renderers/cell-furo-fat-double";
import "@/type-renderers/celledit-furo-fat-double";
import "@/type-renderers/cell-google-protobuf-doublevalue";
import "@/type-renderers/celledit-google-protobuf-doublevalue";
import "@/type-renderers/cell-float"
import "@/type-renderers/celledit-float"
import "@/type-renderers/cell-furo-fat-float";
import "@/type-renderers/celledit-furo-fat-float";
import "@/type-renderers/celledit-furo-fat-float";
import "@/type-renderers/cell-google-protobuf-floatvalue";
import "@/type-renderers/celledit-google-protobuf-floatvalue";
import "@/type-renderers/cell-int32"
import "@/type-renderers/celledit-int32"
import "@/type-renderers/cell-uint32"
import "@/type-renderers/celledit-uint32"
import "@/type-renderers/cell-furo-fat-uint32";
import "@/type-renderers/celledit-furo-fat-uint32";
import "@/type-renderers/cell-google-protobuf-uint32value";
import "@/type-renderers/celledit-google-protobuf-uint64value";
import "@/type-renderers/celledit-google-protobuf-uint32value";
import "@/type-renderers/cell-uint64"
import "@/type-renderers/celledit-uint64"
import "@/type-renderers/cell-furo-fat-uint64";
import "@/type-renderers/celledit-furo-fat-uint64";
import "@/type-renderers/cell-google-protobuf-uint64value";
import "@/type-renderers/cell-furo-fat-int32";
import "@/type-renderers/celledit-furo-fat-int32";
import "@/type-renderers/cell-google-protobuf-int32value";
import "@/type-renderers/celledit-google-protobuf-int32value";
import "@/type-renderers/cell-google-type-date";
import "@/type-renderers/cell-furo-type-date";
import "@/type-renderers/cell-google-type-money";
import "@/type-renderers/celledit-google-type-money";
import "@/type-renderers/cell-furo-type-money";
import "@/type-renderers/celledit-furo-type-money";
import "@/type-renderers/cell-google-type-timeofday";
import "@/type-renderers/celledit-google-type-timeofday";
import "@/type-renderers/cell-google-protobuf-timestamp";
import "@/type-renderers/celledit-google-protobuf-timestamp";
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
import "@/type-renderers/form-bool"
import "@/type-renderers/form-furo-fat-bool"
import "@/type-renderers/form-google-protobuf-boolvalue"
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

  override connectedCallback() {
    super.connectedCallback();

  }

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

      <furo-ui5-section heading="Type renderer">
        <furo-ui5-subsection heading="Boolean">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tr>
              <td><furo-ui5-label>BOOLEAN</furo-ui5-label></td>
              <td>
                <display-bool .model="${this.data.primitiveBool}"></display-bool>
              </td>
              <td>
                <cell-bool .model="${this.data.primitiveBool}"></cell-bool>
              </td>
              <td>
                <celledit-bool .model="${this.data.primitiveBool}"></celledit-bool>
              </td>
            </tr>
            <tr>
              <td><furo-ui5-label>furo.fat.Bool</furo-ui5-label></td>
              <td>
                <display-furo-fat-bool .model="${this.data.furoFatBool}"></display-furo-fat-bool>
              </td>
              <td>
                <cell-furo-fat-bool .model="${this.data.furoFatBool}"></cell-furo-fat-bool>
              </td>
              <td>
                <celledit-furo-fat-bool .model="${this.data.furoFatBool}"></celledit-furo-fat-bool>
              </td>
            </tr>
            <tr>
              <td><furo-ui5-label>google.Protobuf.Boolvalue</furo-ui5-label></td>
              <td>
                <display-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></display-google-protobuf-boolvalue>
              </td>
              <td>
                <cell-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></cell-google-protobuf-boolvalue>
              </td>
              <td>
                <celledit-google-protobuf-boolvalue .model="${this.data.googleProtobufBoolvalue}"></celledit-google-protobuf-boolvalue>
              </td>
            </tr>
          </table>
          <hr />
          <form-bool label="form bool" .model="${this.data.primitiveBool}"></form-bool>
          <form-furo-fat-bool label="form furo fat bool" .model="${this.data.furoFatBool}"></form-furo-fat-bool>
          <form-google-protobuf-boolvalue label="form google protobuf boolvalue" .model="${this.data.googleProtobufBoolvalue}"></form-google-protobuf-boolvalue>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Strings">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>STRING</furo-ui5-label></td>
                <td>
                  <display-string .model="${this.data.primitiveString}"></display-string>
                </td>
                <td>
                  <cell-string .model="${this.data.primitiveString}"></cell-string>
                </td>
                <td>
                  <celledit-string .model="${this.data.primitiveString}"></celledit-string>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.String</furo-ui5-label></td>
                <td>
                  <display-furo-fat-string .model="${this.data.furoFatString}"></display-furo-fat-string>
                </td>
                <td>
                  <cell-furo-fat-string .model="${this.data.furoFatString}"></cell-furo-fat-string>
                </td>
                <td>
                  <celledit-furo-fat-string .model="${this.data.furoFatString}"></celledit-furo-fat-string>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.StringValue</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-stringvalue .model="${this.data.googleProtobufStringvalue}"></display-google-protobuf-stringvalue>
                </td>
                <td>
                  <cell-google-protobuf-stringvalue .model="${this.data.googleProtobufStringvalue}"></cell-google-protobuf-stringvalue>
                </td>
                <td>
                  <celledit-google-protobuf-stringvalue .model="${this.data.googleProtobufStringvalue}"></celledit-google-protobuf-stringvalue>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Date / Time">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>google.type.Date</furo-ui5-label></td>
                <td>
                  <display-google-type-date .model="${this.data.googleTypeDate}"></display-google-type-date>
                </td>
                <td>
                  <cell-google-type-date .model="${this.data.googleTypeDate}"></cell-google-type-date>
                </td>
                <td>
                  <celledit-google-type-date .model="${this.data.googleTypeDate}"></celledit-google-type-date>
                  <celledit-google-type-date .model="${this.data.googleTypeDate}"></celledit-google-type-date>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.type.Date</furo-ui5-label></td>
                <td>
                  <display-furo-type-date .model="${this.data.furoTypeDate}"></display-furo-type-date>
                </td>
                <td>
                  <cell-furo-type-date .model="${this.data.furoTypeDate}"></cell-furo-type-date>
                </td>
                <td>
                  <celledit-furo-type-date .model="${this.data.furoTypeDate}"></celledit-furo-type-date>
                  <celledit-furo-type-date .model="${this.data.furoTypeDate}"></celledit-furo-type-date>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.Timestamp</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></display-google-protobuf-timestamp>
                </td>
                <td>
                  <cell-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></cell-google-protobuf-timestamp>
                </td>
                <td>
                  <celledit-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></celledit-google-protobuf-timestamp>
                  <celledit-google-protobuf-timestamp .model="${this.data.googleProtobufTimestamp}"></celledit-google-protobuf-timestamp>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.type.TimeOfDay</furo-ui5-label></td>
                <td>
                  <display-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></display-google-type-timeofday>
                </td>
                <td>
                  <cell-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></cell-google-type-timeofday>
                </td>
                <td>
                  <celledit-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></celledit-google-type-timeofday>
                  <celledit-google-type-timeofday .model="${this.data.googleTypeTimeofday}"></celledit-google-type-timeofday>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Money">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>google.type.Money</furo-ui5-label></td>
                <td>
                  <display-google-type-money .model="${this.data.googleTypeMoney}"></display-google-type-money>
                </td>
                <td>
                  <cell-google-type-money .model="${this.data.googleTypeMoney}"></cell-google-type-money>
                </td>
                <td>
                  <celledit-google-type-money .model="${this.data.googleTypeMoney}"></celledit-google-type-money>
                  <celledit-google-type-money .model="${this.data.googleTypeMoney}"></celledit-google-type-money>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.type.Money</furo-ui5-label></td>
                <td>
                  <display-furo-type-money .model="${this.data.furoTypeMoney}"></display-furo-type-money>
                </td>
                <td>
                  <cell-furo-type-money .model="${this.data.furoTypeMoney}"></cell-furo-type-money>
                </td>
                <td>
                  <celledit-furo-type-money .model="${this.data.furoTypeMoney}"></celledit-furo-type-money>
                  <celledit-furo-type-money .model="${this.data.furoTypeMoney}"></celledit-furo-type-money>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="Numeric">
        <furo-ui5-subsection heading="Int64">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Int64</furo-ui5-label></td>
                <td>
                  <display-int64 .model="${this.data.primitiveInt64}"></display-int64>
                </td>
                <td>
                  <cell-int64 .model="${this.data.primitiveInt64}"></cell-int64>
                </td>
                <td>
                  <celledit-int64 .model="${this.data.primitiveInt64}"></celledit-int64>
                  <furo-ui5-slider .model="${this.data.primitiveInt64}"></furo-ui5-slider>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.Int64</furo-ui5-label></td>
                <td>
                  <display-furo-fat-int64 .model="${this.data.furoFatInt64}"></display-furo-fat-int64>
                </td>
                <td>
                  <cell-furo-fat-int64 .model="${this.data.furoFatInt64}"></cell-furo-fat-int64>
                </td>
                <td>
                  <celledit-furo-fat-int64 .model="${this.data.furoFatInt64}"></celledit-furo-fat-int64>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.Int64Value</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-int64value .model="${this.data.googleProtobufInt64value}"></display-google-protobuf-int64value>
                </td>
                <td>
                  <cell-google-protobuf-int64value .model="${this.data.googleProtobufInt64value}"></cell-google-protobuf-int64value>
                </td>
                <td>
                  <celledit-google-protobuf-int64value .model="${this.data.googleProtobufInt64value}"></celledit-google-protobuf-int64value>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Double">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Double</furo-ui5-label></td>
                <td>
                  <display-double .model="${this.data.primitiveDouble}"></display-double>
                </td>
                <td>
                  <cell-double .model="${this.data.primitiveDouble}"></cell-double>
                </td>
                <td>
                  <celledit-double .model="${this.data.primitiveDouble}"></celledit-double>
                  <furo-ui5-slider .model="${this.data.primitiveDouble}"></furo-ui5-slider>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.Double</furo-ui5-label></td>
                <td>
                  <display-furo-fat-double .model="${this.data.furoFatDouble}"></display-furo-fat-double>
                </td>
                <td>
                  <cell-furo-fat-double .model="${this.data.furoFatDouble}"></cell-furo-fat-double>
                </td>
                <td>
                  <celledit-furo-fat-double .model="${this.data.furoFatDouble}"></celledit-furo-fat-double>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.DoubleValue</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-doublevalue .model="${this.data.googleProtobufDoublevalue}"></display-google-protobuf-doublevalue>
                </td>
                <td>
                  <cell-google-protobuf-doublevalue .model="${this.data.googleProtobufDoublevalue}"></cell-google-protobuf-doublevalue>
                </td>
                <td>
                  <celledit-google-protobuf-doublevalue .model="${this.data.googleProtobufDoublevalue}"></celledit-google-protobuf-doublevalue>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Float">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Float</furo-ui5-label></td>
                <td>
                  <display-float .model="${this.data.primitiveFloat}"></display-float>
                </td>
                <td>
                  <cell-float .model="${this.data.primitiveFloat}"></cell-float>
                </td>
                <td>
                  <celledit-float .model="${this.data.primitiveFloat}"></celledit-float>
                  <furo-ui5-slider .model="${this.data.primitiveFloat}"></furo-ui5-slider>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.Float</furo-ui5-label></td>
                <td>
                  <display-furo-fat-float .model="${this.data.furoFatFloat}"></display-furo-fat-float>
                </td>
                <td>
                  <cell-furo-fat-float .model="${this.data.furoFatFloat}"></cell-furo-fat-float>
                </td>
                <td>
                  <celledit-furo-fat-float .model="${this.data.furoFatFloat}"></celledit-furo-fat-float>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.FloatValue</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-floatvalue .model="${this.data.googleProtobufFloatvalue}"></display-google-protobuf-floatvalue>
                </td>
                <td>
                  <cell-google-protobuf-floatvalue .model="${this.data.googleProtobufFloatvalue}"></cell-google-protobuf-floatvalue>
                </td>
                <td>
                  <celledit-google-protobuf-floatvalue .model="${this.data.googleProtobufFloatvalue}"></celledit-google-protobuf-floatvalue>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint64">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Uint64</furo-ui5-label></td>
                <td>
                  <display-uint64 .model="${this.data.primitiveUint64}"></display-uint64>
                </td>
                <td>
                  <cell-uint64 .model="${this.data.primitiveUint64}"></cell-uint64>
                </td>
                <td>
                  <celledit-uint64 .model="${this.data.primitiveUint64}"></celledit-uint64>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.Uint64</furo-ui5-label></td>
                <td>
                  <display-furo-fat-uint64 .model="${this.data.furoFatUint64}"></display-furo-fat-uint64>
                </td>
                <td>
                  <cell-furo-fat-uint64 .model="${this.data.furoFatUint64}"></cell-furo-fat-uint64>
                </td>
                <td>
                  <celledit-furo-fat-uint64 .model="${this.data.furoFatUint64}"></celledit-furo-fat-uint64>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.UInt64Value</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-uint64value .model="${this.data.googleProtobufUint64value}"></display-google-protobuf-uint64value>
                </td>
                <td>
                  <cell-google-protobuf-uint64value .model="${this.data.googleProtobufUint64value}"></cell-google-protobuf-uint64value>
                </td>
                <td>
                  <celledit-google-protobuf-uint64value .model="${this.data.googleProtobufUint64value}"></celledit-google-protobuf-uint64value>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Int32">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Int32</furo-ui5-label></td>
                <td>
                  <display-int32 .model="${this.data.primitiveInt32}"></display-int32>
                </td>
                <td>
                  <cell-int32 .model="${this.data.primitiveInt32}"></cell-int32>
                </td>
                <td>
                  <celledit-int32 .model="${this.data.primitiveInt32}"></celledit-int32>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.int32</furo-ui5-label></td>
                <td>
                  <display-furo-fat-int32 .model="${this.data.furoFatInt32}"></display-furo-fat-int32>
                </td>
                <td>
                  <cell-furo-fat-int32 .model="${this.data.furoFatInt32}"></cell-furo-fat-int32>
                </td>
                <td>
                  <celledit-furo-fat-int32 .model="${this.data.furoFatInt32}"></celledit-furo-fat-int32>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.int32value</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></display-google-protobuf-int32value>
                </td>
                <td>
                  <cell-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></cell-google-protobuf-int32value>
                </td>
                <td>
                  <celledit-google-protobuf-int32value .model="${this.data.googleProtobufInt32value}"></celledit-google-protobuf-int32value>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="Uint32">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Display</th>
                <th>Cell</th>
                <th>CellEdit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><furo-ui5-label>Uint32</furo-ui5-label></td>
                <td>
                  <display-uint32 .model="${this.data.primitiveUint32}"></display-uint32>
                </td>
                <td>
                  <cell-uint32 .model="${this.data.primitiveUint32}"></cell-uint32>
                </td>
                <td>
                  <celledit-uint32 .model="${this.data.primitiveUint32}"></celledit-uint32>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>furo.fat.Uint32</furo-ui5-label></td>
                <td>
                  <display-furo-fat-uint32 .model="${this.data.furoFatUint32}"></display-furo-fat-uint32>
                </td>
                <td>
                  <cell-furo-fat-uint32 .model="${this.data.furoFatUint32}"></cell-furo-fat-uint32>
                </td>
                <td>
                  <celledit-furo-fat-uint32 .model="${this.data.furoFatUint32}"></celledit-furo-fat-uint32>
                </td>
              </tr>
              <tr>
                <td><furo-ui5-label>google.protobuf.UInt32Value</furo-ui5-label></td>
                <td>
                  <display-google-protobuf-uint32value .model="${this.data.googleProtobufUint32value}"></display-google-protobuf-uint32value>
                </td>
                <td>
                  <cell-google-protobuf-uint32value .model="${this.data.googleProtobufUint32value}"></cell-google-protobuf-uint32value>
                </td>
                <td>
                  <celledit-google-protobuf-uint32value .model="${this.data.googleProtobufUint32value}"></celledit-google-protobuf-uint32value>
                </td>
              </tr>
            </tbody>
          </table>
        </furo-ui5-subsection>
      </furo-ui5-section>
    </furo-vertical-flex>`;
  }
}

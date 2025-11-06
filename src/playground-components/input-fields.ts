import "@/furo-ui5-button";
import "@/furo-ui5-toast";
import "@/furo-ui5-icon";
import "@/furo-ui5-show-hide";
import "@/furo-ui5-text-input";
import "@/furo-ui5-textarea";
import "@/furo-ui5-number-input";
import "@/furo-ui5-step";
import "@/furo-ui5-password-input";
import "@/furo-ui5-progress-indicator";
import "@/furo-ui5-slider";
import "@/furo-ui5-checkbox";
import "@/furo-ui5-barcode-scanner-dialog";
import "@/furo-ui5-form-field-segmenter";
import "@/furo-ui5-toggle-button";
import "@/furo-ui5-busy-indicator";
import "@/furo-ui5-label";
import "@/furo-ui5-form-row";
import "@/furo-ui5-rating-indicator";
import "@/furo-ui5-form-layout";
import "@/furo-ui5-radio-button";
import "@/furo-ui5-section";
import "@/furo-ui5-dialog";
import "@/furo-ui5-switch";
import "@/furo-ui5-bool-icon";
import "@/furo-ui5-markdown";
import "@/furo-ui5-subsection";
import "@/furo-ui5-form-group";
import "@furo/layout/dist/furo-responsive-layout.js";

import { LitFBP } from "@furo/fbp/dist/LitFBP";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { Bool as FuroFatBool } from "@/models/furo/fat/Bool";
import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { Wrappers } from "@/models/furoui5test/cube/Wrappers";

/**
 * ### Description
 *
 *
 * @author veith
 * @tagname input-fields
 * @public
 */
export class InputFields extends LitFBP(LitElement) {
  /**
   * Property description
   * @public
   */
  @property({ type: String, attribute: "attr-name", reflect: true })
  attrName: string = "";

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    /* do not show components which are not defined */

    *:not(:defined) {
      display: none;
    }
  `;

  private cube: CubeEntity = new CubeEntity({ displayName: "Hi", cube: { rating: 3.4, length: 122 } });

  private wrappers = new Wrappers();

  private FuroFatBool = new FuroFatBool({
    value: true,
    attributes: { icon: "share", endIcon: "share", design: "Negative", num: '{"a":123}' },
    labels: { disabled: false },
  });

  private validateCube() {
    this.cube.__validate();
  }

  // eslint-disable-next-line class-methods-use-this
  private search(e: CustomEvent<string>) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  constructor() {
    super();

    this.cube.cube.fatString = {
      value: "fat",
      attributes: { "value-state": "Negative", "value-state-message": "This is an Error or Critical", rows: "10" },
      labels: { disabled: false, readonly: false },
    };

    // @ts-expect-error must have
    window.vs = this.cube;

    this.wrappers.boolValue.__addEventListener("field-value-changed", e => {
      this.cube.__readonly = e.detail.value;
    });
  }

  /**
   * Template
   * @private
   */
  override render() {
    return html`
      <furo-ui5-section heading="STRING">
        <furo-ui5-subsection heading="some">
          <furo-ui5-number-input value-state="Positive" .model="${this.cube.cube.length}"></furo-ui5-number-input>

          <furo-ui5-button @click="${this.validateCube}" slot="action" design="Transparent">Validate</furo-ui5-button>
          <furo-ui5-button at-click="--showDialog" slot="action" design="Transparent">Dialog</furo-ui5-button>
          <furo-ui5-checkbox slot="action" fn-check="" text="Override" .model="${this.wrappers.boolValue}"></furo-ui5-checkbox>
          <furo-ui5-switch slot="action" fn-check="" text="Override" .model="${this.wrappers.boolValue}"></furo-ui5-switch>
          <furo-ui5-switch slot="action" disabled design="Graphical" .model="${this.FuroFatBool}"></furo-ui5-switch>
          <furo-ui5-bool-icon slot="action" disabled .model="${this.FuroFatBool}"></furo-ui5-bool-icon>
          <furo-ui5-bool-icon slot="action" .model="${this.FuroFatBool}"></furo-ui5-bool-icon>

          <furo-ui5-switch slot="action" design="Textual" text-off="aus" text-on="ein" .model="${this.FuroFatBool}"> Hip </furo-ui5-switch>
          <furo-horizontal-flex space>
            <furo-ui5-busy-indicator .model="${this.wrappers.boolValue}">
              ----BUSY----
              <div>xx</div>
            </furo-ui5-busy-indicator>

            <furo-ui5-radio-button slot="action" fn-check="" text="Override" .model="${this.wrappers.boolValue}"></furo-ui5-radio-button>

            <furo-ui5-radio-button name="a" value-state="Negative" .model="${this.wrappers.boolValue}"></furo-ui5-radio-button>
            <furo-ui5-radio-button name="a" .model="${this.wrappers.boolPrimitive}"></furo-ui5-radio-button>
          </furo-horizontal-flex>
          <furo-ui5-show-hide .model="${this.wrappers.boolValue}">
            <furo-ui5-text-input value-state="Information" placeholder="Custom" .model="${this.cube.description}">
              <div slot="valueStateMessage">Informationen für dich</div>
            </furo-ui5-text-input>
            <furo-ui5-text-input placeholder="Custom" .model="${this.cube.description}"> </furo-ui5-text-input>
            <furo-ui5-text-input placeholder="" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
          </furo-ui5-show-hide>

          <furo-ui5-show-hide double .model="${this.wrappers.boolValue}">
            <furo-ui5-text-input placeholder="Custom" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
            <furo-ui5-text-input placeholder="ddd" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
          </furo-ui5-show-hide>

          <furo-ui5-show-hide hide-on-false .model="${this.wrappers.boolValue}">
            <furo-ui5-text-input .model="${this.wrappers.stringValue}"></furo-ui5-text-input>
            <furo-ui5-text-input .model="${this.wrappers.stringValue}"></furo-ui5-text-input>
          </furo-ui5-show-hide>
        </furo-ui5-subsection>

        <furo-ui5-subsection heading="form">
          <furo-ui5-form-layout form-title="Form" multi-columns>
            <furo-ui5-form-group label="Group 1">
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="rating">Rating indicator </furo-ui5-label>
                <furo-ui5-rating-indicator
                  value-state="Information"
                  .model="${this.cube.cube.rating}"
                  id="rating"
                  accessible-name=""
                  value="4.3"
                ></furo-ui5-rating-indicator>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="rating">Step Input </furo-ui5-label>
                <furo-ui5-step value-state="Positive" .model="${this.cube.cube.length}"></furo-ui5-step>
              </furo-ui5-form-row>

              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="rating">Rating indicator</furo-ui5-label>
                <furo-ui5-link href="">sfd</furo-ui5-link>
              </furo-ui5-form-row>
              <furo-ui5-number-input .model="${this.cube.cube.length}"></furo-ui5-number-input>
              <furo-ui5-slider show-tooltip editable-tooltip .model="${this.cube.cube.length}"></furo-ui5-slider>
              <furo-ui5-slider show-tooltip show-tickmarks step="25" editable-tooltip .model="${this.cube.cube.length}"></furo-ui5-slider>
              <furo-ui5-number-input value-state="Positive" .model="${this.cube.cube.length}"></furo-ui5-number-input>
              <furo-ui5-slider show-tooltip show-tickmarks step="50" editable-tooltip .model="${this.cube.cube.length}"></furo-ui5-slider>
              <furo-ui5-progress-indicator value-state="Positive" .model="${this.cube.cube.length}"></furo-ui5-progress-indicator>
              <furo-ui5-textarea id="textarea" .model="${this.cube.cube.fatString}" rows="4"></furo-ui5-textarea>
              <furo-ui5-button design="Emphasized" at-click="--scan">Open The Scanner</furo-ui5-button>
              <furo-ui5-barcode-scanner-dialog fn-show="--scan" id="textarea" .model="${this.cube.cube.fatString}" rows="4"></furo-ui5-barcode-scanner-dialog>
            </furo-ui5-form-group>
            <furo-ui5-form-group label="Group 1">
              <furo-ui5-form-row required>
                <furo-ui5-label slot="label" show-colon required>dfs</furo-ui5-label>
                <furo-ui5-text-input placeholder="Custom" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
              </furo-ui5-form-row>
            </furo-ui5-form-group>
            <furo-ui5-form-group label="Group 2">
              <furo-ui5-form-row required>
                <furo-ui5-label slot="label" show-colon required>dfs</furo-ui5-label>
                <furo-ui5-text-input placeholder="Custom" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
              </furo-ui5-form-row>
            </furo-ui5-form-group>
          </furo-ui5-form-layout>
        </furo-ui5-subsection>
      </furo-ui5-section>

      <furo-ui5-section heading="Other section">
        <furo-ui5-subsection>
          <furo-responsive-layout layout="six">
            <furo-ui5-text-input readonly .model="${this.cube.displayName}"></furo-ui5-text-input>
            <furo-ui5-text-input .model="${this.cube.displayName}" placeholder="PL from attr">
              <furo-ui5-icon name="share" slot="icon"></furo-ui5-icon>
            </furo-ui5-text-input>

            <furo-ui5-text-input .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
            <furo-ui5-text-input readonly @search-requeseted="${this.search}" .model="${this.cube.cube.fatString}"></furo-ui5-text-input>
            <furo-ui5-text-input @search-requested="${this.search}" placeholder="search"></furo-ui5-text-input>

            <furo-ui5-checkbox value-state="Negative" .model="${this.wrappers.boolValue}"></furo-ui5-checkbox>
            <furo-ui5-checkbox .model="${this.wrappers.boolValue}"></furo-ui5-checkbox>
          </furo-responsive-layout>

          <hr />
          <furo-ui5-toggle-button .model="${this.wrappers.boolValue}">Hip</furo-ui5-toggle-button>
          <furo-ui5-toggle-button .model="${this.FuroFatBool}">Hip</furo-ui5-toggle-button>

          <furo-ui5-toggle-button design="Emphasized" .model="${this.FuroFatBool}">Hip</furo-ui5-toggle-button>

          <furo-ui5-form-layout form-title="Form Title, Single Group">
            <furo-ui5-button slot="action" design="Transparent">Save</furo-ui5-button>
            <furo-ui5-form-group label="Group label">
              <furo-ui5-form-row>
                <furo-ui5-label show-colon wrapping-type="Normal" slot="label" for="field1">Text input element label should wrap somehow </furo-ui5-label>

                <furo-ui5-form-field-segmenter unit="Kilowatt per hour" pattern="SmallBig">
                  <furo-ui5-text-input id="field1" value="123"></furo-ui5-text-input>
                  <furo-ui5-text-input value="ccd"></furo-ui5-text-input>
                </furo-ui5-form-field-segmenter>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="field2">Input with unit </furo-ui5-label>
                <furo-ui5-form-field-segmenter unit="Metric Tons">
                  <furo-ui5-text-input id="field2" value="some"></furo-ui5-text-input>
                </furo-ui5-form-field-segmenter>
              </furo-ui5-form-row>

              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="txt">Text content</furo-ui5-label>
                <div id="txt" slot="text">Text</div>
              </furo-ui5-form-row>

              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="textarea">Textarea</furo-ui5-label>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="field3">Checkbox</furo-ui5-label>
                <furo-ui5-checkbox text="Text" id="field3" checked=""></furo-ui5-checkbox>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="range">Responsive range </furo-ui5-label>
                <furo-ui5-range-slider
                  id="range"
                  min="0"
                  max="112"
                  step="2"
                  show-tickmarks=""
                  label-interval="14"
                  show-tooltip=""
                  end-value="63"
                  start-value="25"
                ></furo-ui5-range-slider>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" for="rating">Rating indicator </furo-ui5-label>
                <furo-ui5-rating-indicator .model="${this.cube.cube.rating}" id="rating" accessible-name="" value="4.3"></furo-ui5-rating-indicator>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" required="" for="select">Select </furo-ui5-label>
                <furo-ui5-select accessible-name="" accessible-name-ref="" name="" value-state="Positive">
                  <furo-ui5-option icon="iphone">Phone</furo-ui5-option>
                  <furo-ui5-option icon="ipad">Tablet</furo-ui5-option>
                  <furo-ui5-option icon="laptop" selected="">Desktop</furo-ui5-option>
                </furo-ui5-select>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" required="" for="step">Step </furo-ui5-label>
                <furo-ui5-step-input id="step" value-state="Critical">
                  <div slot="valueStateMessage">Localised value state message comes here.</div>
                </furo-ui5-step-input>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" required="" for="step">Progress </furo-ui5-label>
                <furo-ui5-progress-indicator id="step" value-state="Critical" value="23"></furo-ui5-progress-indicator>
              </furo-ui5-form-row>
              <furo-ui5-form-row>
                <furo-ui5-label show-colon slot="label" required="" for="time-picker">time-picker </furo-ui5-label>
                <furo-ui5-time-picker id="time-picker" format-pattern="" placeholder="" value-state="Information"></furo-ui5-time-picker>
              </furo-ui5-form-row>
            </furo-ui5-form-group>
          </furo-ui5-form-layout>
        </furo-ui5-subsection>
      </furo-ui5-section>
      <furo-ui5-dialog fn-show="--showDialog" header-text="Dialog" draggable="true">Dialog</furo-ui5-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "input-fields": InputFields;
  }
}

window.customElements.define("input-fields", InputFields);

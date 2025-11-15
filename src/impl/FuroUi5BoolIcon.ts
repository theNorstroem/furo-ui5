import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";

import { BOOLEAN, BoolValue } from "@furo/open-models";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import type { FuroFatBool } from "@/models";

/**
 * Displays a icon/symbol for a boolean value
 *
 * This component uses the SAP Ui5 icons.
 * https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
 *
 * ```html
 * <furo-ui5-bool-icon fn-bind-data="--dao(FIELDNODE)"></furo-ui5-bool-icon>
 * ```
 *
 * Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are auto imported.
 * If you set other icons, please do not forget to import them.
 *
 * @summary  Displays an icon for a boolean value
 * @tagname furo-ui5-bool-icon
 * @appliesMixin FBP
 */
export class FuroUi5BoolIcon extends LitElement {
  /**
   * Defines the icon for the true state.
   *
   * @type String
   */
  @property({ type: String })
  public symboltrue: string = "navigation-down-arrow";

  /**
   * Defines the icon for the false state.
   *
   * @type String
   */
  @property({ type: String })
  public symbolfalse: string = "navigation-right-arrow";

  /**
   * Set to true or false
   */
  @property({ type: Boolean })
  public value: boolean = false;

  /**
   * Disable the pointer interaction
   */
  @property({ type: Boolean })
  public disabled: boolean = false;

  /**
   * Defines the component semantic design.
   * @private
   */
  @property({ type: String })
  private design: "Contrast" | "Critical" | "Default" | "Information" | "Negative" | "Neutral" | "NonInteractive" | "Positive" = "Default";

  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5BoolIcon>;

  // eslint-disable-next-line no-use-before-define
  private boolReaderWriters: BoolReaderWriters<FuroUi5BoolIcon> | undefined;

  @property({ type: String, attribute: "accesible-name" })
  public accessibleName: string = "Toggle";

  constructor() {
    super();
    this.fatHandler = new FatHandler(this as FuroUi5BoolIcon, ["disabled"]);
    this.fatHandler.readAttributes();
  }

  private _model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  public get model(): BOOLEAN | FuroFatBool | BoolValue {
    return this._model;
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/dist/index.js"
   * @typeref BoolValue - "@furo/open-models/dist/index.js"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  public set model(value: BOOLEAN | FuroFatBool | BoolValue) {
    this.bindData(value);
  }

  /**
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove existing listeners
    // from ui: input, change
    // from model: "this-field-value-changed",listenToStateChanged

    // init model
    this._model = fieldNode;
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5BoolIcon>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", () => {
      this.readFromModel();
    });

    // listen on changes from UI
    this.addEventListener("input", () => {
      this.writeToModel();
    });
    this.addEventListener("change", () => {
      this.writeToModel();
    });

    // initial read
    this.readFromModel();

    // constraints

    // set the text placeholder from model if none was set

    // a11y
    if (this.accessibleName === undefined) {
      this.accessibleName = this._model.__label;
    }
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private writeToModel(): void {
    this.modelReaderWriter!.writeModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.boolReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.boolReaderWriters!.getWriters();
  }

  /**
   * Toggles the icon.
   */
  toggle() {
    if (!this.disabled) {
      this.value = !this.value;
      this.writeToModel();
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: inline-block;
        width: 16px;
        height: 16px;
      }

      :host([hidden]) {
        display: none;
      }

      ui5-icon {
        width: var(--_ui5-tree-toggle-icon-size);
        height: var(--_ui5-tree-toggle-icon-size);

        cursor: pointer;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  override render() {
    // language=HTML
    return html` <ui5-icon
      interactive
      accessible-name="${this.accessibleName}"
      design="${this.design}"
      name="${this.value ? this.symboltrue : this.symbolfalse}"
      @click="${this.toggle}"
    ></ui5-icon>`;
  }
}

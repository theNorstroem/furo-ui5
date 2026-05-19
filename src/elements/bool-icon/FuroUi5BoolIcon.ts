import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";

import { BOOLEAN, type BoolValue, type FieldConstraints } from "@furo/open-models";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
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
  public symboltrue = "navigation-down-arrow";

  /**
   * Defines the icon for the false state.
   *
   * @type String
   */
  @property({ type: String })
  public symbolfalse = "navigation-right-arrow";

  /**
   * Set to true or false
   */
  @property({ type: Boolean })
  public value = false;

  /**
   * Disable the pointer interaction
   */
  @property({ type: Boolean })
  public disabled = false;

  /**
   * When true, the icon renders without the `interactive` attribute and clicks no longer toggle the value.
   * Wired automatically from the bound field's logical readonly state and from `read_only: true` constraints.
   */
  @property({ type: Boolean, reflect: true })
  public readonly = false;

  /**
   * Defines the component semantic design.
   * @private
   */
  @property({ type: String })
  private design: "Contrast" | "Critical" | "Default" | "Information" | "Negative" | "Neutral" | "NonInteractive" | "Positive" = "Default";

  @property({ type: String, attribute: "accesible-name" })
  public accessibleName: string | undefined = "Toggle";

  private fatHandler: FatHandler<FuroUi5BoolIcon>;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private boolReaderWriters: BoolReaderWriters<FuroUi5BoolIcon> | undefined;

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5BoolIcon>(this, ["disabled"]);
    this.fatHandler.readAttributes();
  }

  private _model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  public get model(): BOOLEAN | FuroFatBool | BoolValue {
    return this._model;
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/"
   * @typeref BoolValue - "@furo/open-models/"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  public set model(value: BOOLEAN | FuroFatBool | BoolValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "field-value-changed", listenToStateChanged
     * (no UI listeners — click is bound declaratively in the template)
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("field-value-changed", this.readFromModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5BoolIcon>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(
      this._model,
      this.boolReaderWriters.getWriters(),
      this.boolReaderWriters.getReaders(),
    );

    // listen on state changes on the model
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints?.read_only) {
      this.readonly = true;
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

  /**
   * Toggles the icon. No-op when disabled or readonly.
   */
  toggle: () => void = () => {
    if (this.disabled || this.readonly) return;
    this.value = !this.value;
    this.writeToModel();
  };

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

      ui5-icon[interactive] {
        cursor: pointer;
      }

      ui5-icon {
        width: var(--_ui5-tree-toggle-icon-size);
        height: var(--_ui5-tree-toggle-icon-size);
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
      ?interactive="${!this.readonly && !this.disabled}"
      accessible-name="${this.accessibleName}"
      design="${this.design}"
      name="${this.value ? this.symboltrue : this.symbolfalse}"
      @click="${this.toggle}"
    ></ui5-icon>`;
  }
}

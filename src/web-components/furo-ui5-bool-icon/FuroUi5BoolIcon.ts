import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";

import { fieldBindings, BOOLEAN, type BoolValue } from "@furo/open-models";
import type { BindableComponent } from "@furo/open-models";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
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
export class FuroUi5BoolIcon extends LitElement implements BindableComponent {
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
   * Defines the component semantic design.
   * @private
   */
  @property({ type: String })
  private design: "Contrast" | "Critical" | "Default" | "Information" | "Negative" | "Neutral" | "NonInteractive" | "Positive" = "Default";

  private fatHandler: FatHandler<FuroUi5BoolIcon>;

  private boolReaderWriters: BoolReaderWriters<FuroUi5BoolIcon>;

  @property({ type: String, attribute: "accesible-name" })
  public accessibleName = "Toggle";

  modelReaders: Map<string, () => void>;

  modelWriters: Map<string, () => void>;

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5BoolIcon>(this, ["disabled"]);
    this.fatHandler.readAttributes();
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5BoolIcon>(this, "value", this.model, this.fatHandler);
    this.modelReaders = this.boolReaderWriters?.getReaders();
    this.modelWriters = this.boolReaderWriters?.getWriters();
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/"
   * @typeref BoolValue - "@furo/open-models/"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  @fieldBindings.model()
  public model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  /**
   * Bind data - alternative to setting .model directly
   */
  bindData(model: BOOLEAN | FuroFatBool | BoolValue): void {
    if (model === this.model) {
      return;
    }
    this.model = model;

    // constraints

    // set the text placeholder from model if none was set

    // a11y
    if (this.accessibleName ??= undefined) {
      this.accessibleName = this.model.__label;
    }
  }

  public writeToModel(): void {
    return;
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

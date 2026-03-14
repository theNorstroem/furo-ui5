import Option from "@ui5/webcomponents/dist/Option.js";

import type { OptionLike } from "@/lib/open-models/signatures";

/**
 * The `furo-ui5-option` is meant to be used inside a `furo-ui5-select`. It is also automatically used by the `furo-ui5-select-enum`.
 *
 * You can bind any OptionLike field to it.
 * ```js
 * export interface OptionLike extends FieldNode {
 *   id: STRING;
 *   displayName: STRING;
 *   icon?: STRING;
 *   additionalText?: STRING;
 *   tooltip?: STRING;
 * }
 * ```
 *
 *
 * @csspart native-li - Use this to format the `li` inside the shadow root of the component.
 * @csspart content - Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
 * @csspart title - Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
 * @csspart additional-text - Use this to format the additional-text `span` inside the shadow root of the component.
 * @tagname furo-ui5-option
 */
export class FuroUi5Option extends Option {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-option", "");
    return super.connectedCallback();
  }

  private _model: OptionLike | undefined;

  public get model(): OptionLike | undefined {
    return this._model;
  }

  /**
   * Use this to bind a options field by attribute.
   *
   * @typeref OptionLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(value: OptionLike) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - OptionLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(fieldNode: OptionLike) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */

    this._model?.__removeEventListener("field-value-changed", this.readFromModel.bind(this));

    // connect the model
    this._model = fieldNode;

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // initial read
    this.readFromModel();
  }

  private readFromModel(): void {
    this.value = this._model!.id.toString();
    this.innerText = this._model!.displayName.toString();

    if (this._model!.icon) {
      this.icon = this._model!.icon.toString();
    }

    if (this._model!.tooltip) {
      this.tooltip = this._model!.tooltip.toString();
    }

    if (this._model!.additionalText) {
      this.additionalText = this._model!.additionalText.toString();
    }
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-option";
    return md;
  }
}

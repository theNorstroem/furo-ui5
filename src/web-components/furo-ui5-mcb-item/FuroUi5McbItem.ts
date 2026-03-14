import MultiComboBoxItem from "@ui5/webcomponents/dist/MultiComboBoxItem.js";

import type { MultiComboBoxItemLike } from "@/lib/open-models/signatures";

/**
 * The `furo-ui5-mcb-item` is meant to be used inside a `furo-ui5-multi-combobox`.
 *
 * @csspart native-li - Use this to format the `li` inside the shadow root of the component.
 * @csspart content - Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
 * @csspart title - Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
 * @csspart additional-text - Use this to format the additional-text `span` inside the shadow root of the component.
 * @tagname furo-ui5-mcb-item
 */
export class FuroUi5McbItem extends MultiComboBoxItem {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-mcb-item", "");
    return super.connectedCallback();
  }

  private _model: MultiComboBoxItemLike | undefined;

  public get model(): MultiComboBoxItemLike | undefined {
    return this._model;
  }

  /**
   * Use this to bind a multiComboBoxItems field by attribute.
   *
   * @typeref MultiComboBoxItemLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(value: MultiComboBoxItemLike) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - MultiComboBoxItemLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(fieldNode: MultiComboBoxItemLike) {
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
    this.id = this._model!.id.toString();
    this.text = this._model!.displayName.toString();

    if (this._model!.additionalText) {
      this.additionalText = this._model!.additionalText.toString();
    }
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-mcb-item";
    return md;
  }
}

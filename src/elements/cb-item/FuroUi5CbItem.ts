import ComboBoxItem from "@ui5/webcomponents/dist/ComboBoxItem.js";

import type { MultiComboBoxItemLike } from "@/lib/open-models/signatures";

/**
 * The `furo-ui5-cb-item` is meant to be used inside a `furo-ui5-combobox`.
 *
 * @csspart native-li - Use this to format the `li` inside the shadow root of the component.
 * @csspart content - Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
 * @csspart title - Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
 * @csspart additional-text - Use this to format the additional-text `span` inside the shadow root of the component.
 *
 * @summary Item option for ComboBox selection lists.
 * @keywords combobox-item, option, selection, dropdown
 * @category Form
 * @usecase Use as children of furo-ui5-combobox.
 * @related furo-ui5-combobox, furo-ui5-cb-item-group
 * @tagname furo-ui5-cb-item
 */
export class FuroUi5CbItem extends ComboBoxItem {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-cb-item", "");
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
  public set model(value: MultiComboBoxItemLike | undefined) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - MultiComboBoxItemLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(fieldNode: MultiComboBoxItemLike | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-update",listenToStateChanged
     * - from ui: input, change
     */

    this._model?.__removeEventListener("update", this.readFromModel);

    // connect the model
    this._model = fieldNode;

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    if (!this._model) return;
    this.id = this._model.id.toString();
    this.text = this._model.displayName.toString();

    if (this._model.additionalText) {
      this.additionalText = this._model.additionalText.toString();
    }
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-cb-item";
    return md;
  }
}

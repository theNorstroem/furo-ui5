import SegmentedButtonItem from "@ui5/webcomponents/dist/SegmentedButtonItem.js";

import type { OptionLike } from "@/lib/open-models/signatures";

/**
 *
 * The `furo-ui5-segmented-button-item` is meant to be used inside a `furo-ui5-segmented-button`. It is also
 * automatically used by the `furo-ui5-segmented-button` when you bind an `optionsModel`, an `optionList` or
 * an `ENUM`.
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
 * The bound `id` is written to the `data-id` attribute and is used by the parent `furo-ui5-segmented-button`
 * to map the selection back to the model.
 *
 * @summary Item button for use within SegmentedButton components.
 * @keywords segmented-button-item, item, toggle, selection
 * @category Button
 * @usecase Use as children of furo-ui5-segmented-button.
 * @related furo-ui5-segmented-button
 * @tagname furo-ui5-segmented-button-item
 */
export class FuroUi5SegmentedButtonItem extends SegmentedButtonItem {
  /**
   * Added for compatibility — the parent `ui5-segmented-button` identifies its selectable
   * children by the `ui5-segmented-button-item` marker attribute.
   */
  override connectedCallback() {
    this.setAttribute("ui5-segmented-button-item", "");
    return super.connectedCallback();
  }

  private _model: OptionLike | undefined;

  public get model(): OptionLike | undefined {
    return this._model;
  }

  /**
   * Use this to bind an options field by attribute.
   *
   * @typeref OptionLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(value: OptionLike | undefined) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - OptionLike - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(fieldNode: OptionLike | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from model: "update"
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
    // `text` is the default slot, so the label is set via light DOM text content.
    this.dataset.id = this._model.id.toString();
    this.textContent = this._model.displayName.toString();

    if (this._model.icon) {
      this.icon = this._model.icon.toString();
    }

    if (this._model.tooltip) {
      this.tooltip = this._model.tooltip.toString();
    }
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-segmented-button-item";
    return md;
  }
}

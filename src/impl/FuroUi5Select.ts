import "@ui5/webcomponents/dist/Option.js";

import { type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import Select from "@ui5/webcomponents/dist/Select.js";

import type { FuroUi5Option } from "@/impl/FuroUi5Option";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { IdentifiableList } from "@/lib/open-models/signatures";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
 * the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.
 *
 * ```html
 * <furo-ui5-select
 *    .model="${this.model.stringlike}"
 *    .options="${this.identifiableOptionArray}">
 * </furo-ui5-select>
 * ```
 *
 *
 * @summary data select field
 * @tagname furo-ui5-select
 * @demo demo-furo-ui5-select Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5Select extends Select {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5Select>;

  // eslint-disable-next-line no-use-before-define
  private stringReaderWriters: StringReaderWriters<FuroUi5Select> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler(this as FuroUi5Select, ["tooltip"]);
    this.fatHandler.readAttributes();
  }

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/dist/index.js"
   * @typeref StringValue - "@furo/open-models/dist/index.js"
   * @typeref FuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("field-value-changed", this.readFromModel.bind(this));
    this.removeEventListener("change", this.writeToModel.bind(this));

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Select>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.tooltip = this.tooltip === undefined ? this._model.__placeholder : this.tooltip;

    // a11y
    if (this.accessibleName === undefined) {
      if (this.accessibleName === undefined) {
        this.accessibleName = this._model.__label;
      }
    }
  }

  private _optionsModel: IdentifiableList | undefined;

  public get optionsModel(): IdentifiableList | undefined {
    return this._optionsModel;
  }

  /**
   * Use this to bind a options field by attribute.
   *
   * @typeref STRING - "@furo/open-optionss/dist/index.js"
   * @public
   */
  public set optionsModel(value: IdentifiableList) {
    this.bindOptions(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindOptions(fieldNode: IdentifiableList) {
    if (fieldNode === undefined || fieldNode === this._optionsModel) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */

    this._optionsModel?.__removeEventListener("array-changed", this.readFromModel.bind(this));
    this.removeEventListener("change", this.writeToModel.bind(this));

    // connect the model
    this._optionsModel = fieldNode;

    // listen on changes from the model
    this._optionsModel.__addEventListener("array-changed", this.readFromOptionsModel.bind(this));

    // initial read
    this.readFromOptionsModel();
  }

  private readFromOptionsModel(): void {
    // clear existing options
    this.querySelectorAll("furo-ui5-option").forEach(el => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existingOpt: FuroUi5Option | null = this.querySelector(`furo-ui5-option[value="${option.id.toString()}"]`);
      const opt: FuroUi5Option = existingOpt || document.createElement("furo-ui5-option");
      opt.innerText = option.displayName.toString();
      opt.value = option.id.toString();
      if (option.icon?.toString()) {
        opt.icon = option.icon.toString();
      }

      opt.style.order = i.toString();

      if (option.tooltip?.toString()) {
        opt.tooltip = option.tooltip.toString();
      }
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-option[deleteme]").forEach(el => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-option")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach(el => {
        this.appendChild(el);
      });
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
    }
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private writeToModel(): void {
    this.modelReaderWriter!.writeModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.stringReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.stringReaderWriters!.getWriters();
  }

  /**
   * Clears the value of the input field.
   * @public
   */
  clear() {
    this.value = "";
    this.writeToModel();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-select";
    return md;
  }
}

FuroUi5Select.define();

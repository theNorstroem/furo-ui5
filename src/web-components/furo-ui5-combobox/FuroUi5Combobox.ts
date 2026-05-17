import "@ui5/webcomponents/dist/Option.js";
import "@/web-components/furo-ui5-cb-item";

import { type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import ComboBox from "@ui5/webcomponents/dist/ComboBox.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { OptionLikeList, SelectOption } from "@/lib/open-models/signatures";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";
import type { FuroUi5CbItem } from "@/web-components/furo-ui5-cb-item/FuroUi5CbItem";

/**
 * The furo-ui5-combobox component is used to create a drop-down list for quick data entry, but allows you to enter any string.
 *
 * ### Possible ways to set the option list
 * - Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an option list.
 * - Add the options manually to the html
 * - Use `setOptionList()` or `optionList=` to build up the option list.
 *
 *
 * ### OptionLikeList Signature
 * The optionsModel uses a FieldNode which fulfills the `IdentiableList` interface,
 * this means that you have an ARRAY FieldNode where the items have at least an id:string and a displayName:string field.
 *
 *
 * ### Sample
 * ```html
 * <furo-ui5-combobox
 *    .model="${this.model.stringlike}"
 *    .optionsModel="${this.OptionLikeListKind}">
 * </furo-ui5-combobox>
 * ```
 *
 *
 * @tagname furo-ui5-combobox
 * @demo demo-furo-ui5-combobox Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5Combobox extends ComboBox {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5Combobox>;

  private stringReaderWriters: StringReaderWriters<FuroUi5Combobox> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5Combobox>(this, ["placeholder"]);
    this.fatHandler.readAttributes();
  }

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue | undefined) {
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
    this.removeEventListener("input", this.writeToModel.bind(this));

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Combobox>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(
      this._model,
      this.stringReaderWriters.getWriters(),
      this.stringReaderWriters.getReaders(),
    );

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel.bind(this));
    this.addEventListener("input", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.placeholder ??= this._model.__placeholder;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private _optionsModel: OptionLikeList | undefined;

  public get optionsModel(): OptionLikeList | undefined {
    return this._optionsModel;
  }

  /**
   * Use this to bind a options field by attribute.
   *
   * @typeref OptionLikeList - "@furo/ui5/dist/index.js"
   * @public
   */
  public set optionsModel(value: OptionLikeList) {
    this.bindOptions(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - OptionLikeList - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindOptions(fieldNode: OptionLikeList | undefined) {
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
    this.querySelectorAll("furo-ui5-cb-item").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existingOpt: FuroUi5CbItem | null = this.querySelector(`furo-ui5-cb-item[value="${option.id.toString()}"]`);
      const opt: FuroUi5CbItem = existingOpt || document.createElement("furo-ui5-cb-item");
      opt.model = option;
      opt.style.order = i.toString();
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-cb-item[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-cb-item")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach((el) => {
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

  private _optionList: SelectOption[] | undefined;

  public get optionList(): SelectOption[] | undefined {
    return this._optionList;
  }

  /**
   * Use this to set and render the optionList as an attribute.
   *
   * If you prefer the usage of a method, use `renderOptionList()` instead.
   *
   * @typeref SelectOption - "@furo/ui5/dist/index.js"
   * @public
   */
  public set optionList(value: SelectOption[]) {
    this.renderOptionList(value);
  }

  /**
   * Renders a list of options and stores the list in `optionList`.
   *
   * @paramref optionList - SelectOption - "@furo/open-models/"
   * @param optionList
   * @private
   */
  public renderOptionList(optionList: SelectOption[]) {
    // set marker to clear existing options
    this.querySelectorAll("furo-ui5-cb-item").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    optionList.forEach((option, i) => {
      const existingOpt: FuroUi5CbItem | null = this.querySelector(`furo-ui5-cb-item[value="${option.id}"]`);
      const opt: FuroUi5CbItem = existingOpt || document.createElement("furo-ui5-cb-item");
      opt.text = option.displayName;

      opt.style.order = i.toString();

      if (option.additionalText) {
        opt.additionalText = option.additionalText;
      }
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-cb-item[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort if new list was set
    if (this._optionList) {
      [...this.querySelectorAll("furo-ui5-cb-item")]
        .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
        .forEach((el) => {
          this.appendChild(el);
        });
    }

    this._optionList = optionList;
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private writeToModel(): void {
    this.modelReaderWriter?.writeModel();
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
    md.tag = "furo-ui5-combobox";
    return md;
  }
}

FuroUi5Combobox.define();

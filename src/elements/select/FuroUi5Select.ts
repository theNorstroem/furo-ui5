import "@ui5/webcomponents/dist/Option.js";
import "@/elements/option";

import { type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import Select from "@ui5/webcomponents/dist/Select.js";

import type { FuroUi5Option } from "@/elements/option/FuroUi5Option";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { OptionLikeList, SelectOption } from "@/lib/open-models/signatures";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 *
 * The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
 * the available options by using the ui5-option component.
 *
 * ### Possible ways to set the option list
 * - Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an option list.
 * - Add the options manually to the html
 * - Use `setOptionList()` or `optionList=` to build up the option list.
 *
 *
 * ### Warning
 * - This component updates the model with the first option, if the value was empty, to keep the data in sync with the visual impression.
 * - This component will render an empty value if the value is not in the list of options
 *
 * **Note:** Use either the Select's value or the Options' selected property. Mixed usage could result in unexpected behavior.
 *
 * **Note:** If the given value does not match any existing option, no option will be selected and the Select component will be displayed as empty.
 *
 * ### OptionLikeList Signature
 * The optionsModel uses a FieldNode which fulfills the `IdentiableList` interface,
 * this means that you have an ARRAY FieldNode where the items have at least an id:string and a displayName:string field.
 *
 *
 * ### Sample
 * ```html
 * <furo-ui5-select
 *    .model="${this.model.stringlike}"
 *    .optionsModel="${this.OptionLikeListKind}">
 * </furo-ui5-select>
 * ```
 *
 *
 * @summary data select field
 *
 * @summary Dropdown selection from a predefined list of options.
 * @keywords select, dropdown, picker, options, choice, form, list
 * @category Form
 * @usecase Use when selecting from a fixed list without typing; for searchable lists use combobox.
 * @related furo-ui5-combobox, furo-ui5-option, furo-ui5-radio-button
 * @tagname furo-ui5-select
 * @demo demo-furo-ui5-select Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5Select extends Select {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5Select>;

  private stringReaderWriters: StringReaderWriters<FuroUi5Select> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5Select>(this, ["tooltip"]);
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
     * - from model: "this-update",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Select>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.tooltip ??= this._model.__placeholder;

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
  public set optionsModel(value: OptionLikeList | undefined) {
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
     * - from model: "this-update",listenToStateChanged
     * - from ui: input, change
     */

    this._optionsModel?.__removeEventListener("array-changed", this.readFromOptionsModel);

    // connect the model
    this._optionsModel = fieldNode;

    // listen on changes from the model
    this._optionsModel.__addEventListener("array-changed", this.readFromOptionsModel);

    // initial read
    this.readFromOptionsModel();

    // Auto-select the first option when the bound model has no value.
    // Done synchronously: the option children appended above are already
    // upgraded (furo-ui5-option is registered on module load), and at this
    // point UI5 Select has not yet run a render pass, so this.value still
    // reflects what bindData() seeded from the model. Once we assign
    // this.value below, UI5 Select reconciles the visible selection on its
    // next render via _applySelectionByValue.
    const firstOption = fieldNode.at(0);
    if (this.value === "" && firstOption !== undefined) {
      this.value = firstOption.id.toString();
      this.writeToModel();
    }
  }

  private readFromOptionsModel = (): void => {
    // clear existing options
    this.querySelectorAll("furo-ui5-option").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existingOpt: FuroUi5Option | null = this.querySelector(`furo-ui5-option[value="${option.id.toString()}"]`);
      const opt: FuroUi5Option = existingOpt ?? document.createElement("furo-ui5-option");
      opt.model = option;
      opt.style.order = i.toString();
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-option[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-option")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach((el) => {
        this.appendChild(el);
      });
  };

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
  public set optionList(value: SelectOption[] | undefined) {
    this.renderOptionList(value);
  }

  /**
   * Renders a list of options and stores the list in `optionList`.
   *
   * @paramref optionList - SelectOption - "@furo/open-models/"
   * @param optionList
   * @private
   */
  public renderOptionList(optionList: SelectOption[] | undefined) {
    if (optionList === undefined) {
      return;
    }
    // set marker to clear existing options
    this.querySelectorAll("furo-ui5-option").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    optionList.forEach((option, i) => {
      const existingOpt: FuroUi5Option | null = this.querySelector(`furo-ui5-option[value="${option.id}"]`);
      const opt: FuroUi5Option = existingOpt ?? document.createElement("furo-ui5-option");
      opt.innerText = option.displayName;
      opt.value = option.id;
      if (option.icon) {
        opt.icon = option.icon;
      }

      opt.style.order = i.toString();

      if (option.tooltip) {
        opt.tooltip = option.tooltip;
      }
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
    this.querySelectorAll("furo-ui5-option[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort if new list was set
    if (this._optionList) {
      [...this.querySelectorAll("furo-ui5-option")]
        .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
        .forEach((el) => {
          this.appendChild(el);
        });
    }

    this._optionList = optionList;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

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

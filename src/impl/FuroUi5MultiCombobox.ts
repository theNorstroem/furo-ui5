import "@ui5/webcomponents/dist/Option.js";

import "@/furo-ui5-mcb-item";
import { type FieldConstraints, STRING } from "@furo/open-models";
import MultiComboBox from "@ui5/webcomponents/dist/MultiComboBox.js";

import type { FuroUi5McbItem } from "@/impl/FuroUi5McbItem";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { OptionLikeList, McbItem, IdentifiableList, Identifiable } from "@/lib/open-models/signatures";

import { ARRAY } from "@furo/open-models/dist/index";
import { type FuroFatString, type IFuroFatString } from "@/models";

/**
 * The furo-ui5-multi-combobox component is used to create a drop-down list. The items inside the furo-ui5-multi-combobox define
 * the available options by using the ui5-mcb-item component. Use the function bindOptions to bind a RepeaterNode as a option list.
 *
 * ```html
 * <furo-ui5-multi-combobox
 *    fn-bind-data="--entity(*.data.description)"
 *    fn-bind-options="--collection(*.entities)">
 * </furo-ui5-multi-combobox>
 * ```
 **
 * @summary data select field
 * @tagname furo-ui5-multi-combobox
 */
export class FuroUi5MultiCombobox extends MultiComboBox {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5MultiCombobox>;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler(this as FuroUi5MultiCombobox, ["readonly", "disabled", "hidden", "required"]);
    this.fatHandler.readAttributes();
  }

  private _model: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList = ARRAY.Builder(STRING, []);

  public get model(): ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList {
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
  public set model(value: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindData(fieldNode: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList) {
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
    this.removeEventListener("selection-change", this.writeToModel.bind(this));

    // connect the model
    this._model = fieldNode;
    // init model

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("selection-change", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before

    // a11y
    if (this.accessibleName === undefined) {
      if (this.accessibleName === undefined) {
        this.accessibleName = this._model.__label;
      }
    }
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
  public bindOptions(fieldNode: OptionLikeList) {
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

    // connect the model
    this._optionsModel = fieldNode;

    // listen on changes from the model
    this._optionsModel.__addEventListener("array-changed", this.readFromOptionsModel.bind(this));

    // initial read
    this.readFromOptionsModel();
  }

  private readFromOptionsModel(): void {
    // clear existing options
    this.querySelectorAll("furo-ui5-mcb-item").forEach(el => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existingOpt: FuroUi5McbItem | null = this.querySelector(`furo-ui5-mcb-item[value="${option.id.toString()}"]`);
      const opt: FuroUi5McbItem = existingOpt || (document.createElement("furo-ui5-mcb-item") as FuroUi5McbItem);
      opt.model = option;
      opt.style.order = i.toString();
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-mcb-item[deleteme]").forEach(el => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-mcb-item")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach(el => {
        this.appendChild(el);
      });

    // set selected. Attention! readFromModel does the same
    this.setSelectedItems();
  }

  public setSelectedItems() {
    if (this.model.at(0)) {
      const firstElement = this.model.at(0)!;
      const items: string[] = [];
      if (firstElement.__meta.typeName === "primitives.STRING") {
        // we have a string array
        items.push(...(this._model as ARRAY<STRING, string>).__toLiteral());
      } else if (firstElement.__meta.typeName === "furo.fat.String") {
        // we have a fat string array
        items.push(...(this._model as ARRAY<FuroFatString, IFuroFatString>).value.toString());
      } else {
        // we should have an identifiable
        items.push(...(this._model as IdentifiableList).map(e => e.id.toString()));
      }

      items.forEach(item => {
        const mcb = this.querySelector(`furo-ui5-mcb-item[id="${item}"]`);
        if (mcb) {
          mcb.setAttribute("selected", "");
        }
      });
    } else {
      // Empty model => deselect all items
      this.querySelectorAll(`furo-ui5-mcb-item`).forEach(el => {
        el.removeAttribute("selected");
      });
    }
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

  private _optionList: McbItem[] | undefined;

  public get optionList(): McbItem[] | undefined {
    return this._optionList;
  }

  /**
   * Use this to bind a options field by attribute.
   *
   * @typeref McbItem - "@furo/ui5/dist/index.js"
   * @public
   */
  public set optionList(value: McbItem[]) {
    this.renderOptionList(value);
  }

  /**
   * Renders a list of options.
   *
   * @paramref optionList - McbItem - "@furo/open-models/dist/index.js"
   * @param optionList
   * @private
   */
  public renderOptionList(optionList: McbItem[]) {
    // set marker to clear existing options
    this.querySelectorAll("furo-ui5-mcb-item").forEach(el => {
      el.setAttribute("deleteme", "");
    });

    optionList.forEach((option, i) => {
      const existingOpt: FuroUi5McbItem | null = this.querySelector(`furo-ui5-mcb-item[id="${option.id}"]`);
      const opt: FuroUi5McbItem = existingOpt || (document.createElement("furo-ui5-mcb-item") as FuroUi5McbItem);
      opt.text = option.displayName;
      opt.id = option.id;

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
    this.querySelectorAll("furo-ui5-mcb-item[deleteme]").forEach(el => {
      el.remove();
    });

    // sort if new list was set
    if (this._optionList) {
      [...this.querySelectorAll("furo-ui5-mcb-item")]
        .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
        .forEach(el => {
          this.appendChild(el);
        });
    }

    this._optionList = optionList;
    this.setSelectedItems();
  }

  private readFromModel(): void {
    // this.modelReaderWriter?.readModel();
    this.setSelectedItems();
  }

  private writeToModel(): void {
    this.model.__clear();
    this.selectedValues.forEach(mcb => {
      const selectedItem = this.model.add();
      if (selectedItem.__meta.typeName === "primitives.STRING") {
        (selectedItem as STRING).value = mcb.id;
      } else if (selectedItem.__meta.typeName === "furo.fat.String") {
        (selectedItem as FuroFatString).value.value = mcb.id;
      } else {
        (selectedItem as Identifiable).id.value = mcb.id;
        (selectedItem as Identifiable).displayName.value = mcb.text || "";
      }
    });
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
    md.tag = "furo-ui5-multi-combobox";
    return md;
  }
}

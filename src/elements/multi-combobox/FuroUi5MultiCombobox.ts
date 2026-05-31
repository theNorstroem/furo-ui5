import "@ui5/webcomponents/dist/Option.js";
import "@/elements/mcb-item";

import { type FieldConstraints, STRING } from "@furo/open-models";
import { ARRAY } from "@furo/open-models";
import MultiComboBox from "@ui5/webcomponents/dist/MultiComboBox.js";

import type { FuroUi5McbItem } from "@/elements/mcb-item/FuroUi5McbItem";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { IdentifiableList, McbItem, OptionLikeList } from "@/lib/open-models/signatures";
import { FuroFatString, type IFuroFatString } from "@/models";

type ModelItemType = "STRING" | "FAT_STRING" | "IDENTIFIABLE";

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

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  private _modelItemType: ModelItemType = "STRING";

  private _model: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList = ARRAY.Builder(STRING, []);

  public get model(): ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref ARRAY - "@furo/open-models/"
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @typeref IFuroFatString - "@/models/index.js"
   * @typeref IdentifiableList - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(value: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - ARRAY - "@furo/open-models/"
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @paramref fieldNode - FuroFatString - "@/models/index.js"
   * @paramref fieldNode - IFuroFatString - "@/models/index.js"
   * @paramref fieldNode - FuroFatString - "@/models/index.js"
   * @paramref fieldNode - IdentifiableList - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(fieldNode: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList | undefined) {
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
    this.removeEventListener("selection-change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    this._modelItemType = FuroUi5MultiCombobox._detectModelItemType(fieldNode);

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("selection-change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private static _detectModelItemType(arr: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList): ModelItemType {
    const first = arr.at(0);
    if (first?.__meta.typeName === "primitives.STRING") return "STRING";
    if (first?.__meta.typeName === "furo.fat.String") return "FAT_STRING";
    if (first) return "IDENTIFIABLE";

    // Empty array — peek the array's constructor (set by ARRAY.Builder) so
    // we still pick the correct literal shape on write-back.
    const ctor = (arr as unknown as { __getConstructor?: () => unknown }).__getConstructor?.();
    if (ctor === STRING) return "STRING";
    if (ctor === FuroFatString) return "FAT_STRING";
    return "IDENTIFIABLE";
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
  }

  private readFromOptionsModel = (): void => {
    // clear existing options
    this.querySelectorAll("furo-ui5-mcb-item").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existingOpt: FuroUi5McbItem | null = this.querySelector(`furo-ui5-mcb-item[value="${option.id.toString()}"]`);
      const opt: FuroUi5McbItem = existingOpt ?? document.createElement("furo-ui5-mcb-item");
      opt.model = option;
      opt.style.order = i.toString();
      if (existingOpt === null) {
        this.appendChild(opt);
      } else {
        opt.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-mcb-item[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-mcb-item")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach((el) => {
        this.appendChild(el);
      });

    // set selected. Attention! readFromModel does the same
    this.setSelectedItems();
  };

  public setSelectedItems() {
    // Clear ALL existing UI selections first — this is the only deselect path.
    this.querySelectorAll(`furo-ui5-mcb-item[selected]`).forEach((el) => {
      el.removeAttribute("selected");
    });

    const firstElement = this.model.at(0);
    if (!firstElement) {
      return;
    }

    const items: string[] = [];
    if (firstElement.__meta.typeName === "primitives.STRING") {
      items.push(...(this._model as ARRAY<STRING, string>).__toLiteral());
    } else if (firstElement.__meta.typeName === "furo.fat.String") {
      items.push(...(this._model as ARRAY<FuroFatString, IFuroFatString>).map((i) => i.value.toString()));
    } else {
      items.push(...(this._model as IdentifiableList).map((e) => e.id.toString()));
    }

    items.forEach((id) => {
      const mcb = this.querySelector(`furo-ui5-mcb-item[id="${CSS.escape(id)}"]`);
      if (mcb) {
        mcb.setAttribute("selected", "");
      }
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
  public set optionList(value: McbItem[] | undefined) {
    this.renderOptionList(value);
  }

  /**
   * Renders a list of options.
   *
   * @paramref optionList - McbItem - "@furo/open-models/"
   * @param optionList
   * @private
   */
  public renderOptionList(optionList: McbItem[] | undefined) {
    if (optionList === undefined) {
      return;
    }
    // set marker to clear existing options
    this.querySelectorAll("furo-ui5-mcb-item").forEach((el) => {
      el.setAttribute("deleteme", "");
    });

    optionList.forEach((option, i) => {
      const existingOpt: FuroUi5McbItem | null = this.querySelector(`furo-ui5-mcb-item[id="${CSS.escape(option.id)}"]`);
      const opt: FuroUi5McbItem = existingOpt ?? document.createElement("furo-ui5-mcb-item");
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
    this.querySelectorAll("furo-ui5-mcb-item[deleteme]").forEach((el) => {
      el.remove();
    });

    // sort if new list was set
    if (this._optionList) {
      [...this.querySelectorAll("furo-ui5-mcb-item")]
        .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
        .forEach((el) => {
          this.appendChild(el);
        });
    }

    this._optionList = optionList;
    this.setSelectedItems();
  }

  private readFromModel = (): void => {
    this.setSelectedItems();
  };

  private writeToModel = (event: Event): void => {
    const detail = (event as CustomEvent<{ items: (HTMLElement & { id: string })[] }>).detail as { items?: (HTMLElement & { id: string })[] } | undefined;
    const selectedIds = (detail?.items ?? []).map((it) => it.id);
    this._writeIdsToModel(selectedIds);
  };

  private _writeIdsToModel(ids: string[]) {
    // Prevent feedback loop: detach the model listener around the mutation,
    // then re-attach. The UI is already in the correct selected state, so
    // re-running setSelectedItems() via readFromModel would be redundant.
    this._model.__removeEventListener("update", this.readFromModel);
    this._model.__clear();

    ids.forEach((id) => {
      if (this._modelItemType === "STRING") {
        (this._model as ARRAY<STRING, string>).push(id);
      } else if (this._modelItemType === "FAT_STRING") {
        (this._model as ARRAY<FuroFatString, IFuroFatString>).push({ value: id });
      } else {
        // IDENTIFIABLE: look up the full object in optionsModel so we preserve
        // displayName/additionalText/etc. Falls back to a bare `{ id }` shape
        // if optionsModel isn't bound (degrades gracefully).
        const opt = this._optionsModel?.find((o) => o.id.toString() === id);
        const literal = opt && "__toLiteral" in opt ? (opt as { __toLiteral: () => unknown }).__toLiteral() : { id };
        (this._model as unknown as { push: (literal: unknown) => number }).push(literal);
      }
    });

    this._model.__addEventListener("update", this.readFromModel);
  }

  /**
   * Clears the value of the input field.
   * @public
   */
  clear() {
    this.value = "";
    this._writeIdsToModel([]);
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

import "@ui5/webcomponents/dist/SegmentedButtonItem.js";
import "@/elements/segmented-button-item";

import { ARRAY, ENUM, type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import SegmentedButton from "@ui5/webcomponents/dist/SegmentedButton.js";
import type { ISegmentedButtonItem, SegmentedButtonSelectionChangeEventDetail } from "@ui5/webcomponents/dist/SegmentedButton.js";
import SegmentedButtonSelectionMode from "@ui5/webcomponents/dist/types/SegmentedButtonSelectionMode.js";

import type { FuroUi5SegmentedButtonItem } from "@/elements/segmented-button-item/FuroUi5SegmentedButtonItem";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import type { IdentifiableList, OptionLikeList, SelectOption } from "@/lib/open-models/signatures";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString, type IFuroFatString } from "@/models";

type ModelMode = "ENUM" | "SINGLE_STRING" | "MULTIPLE";
type ModelItemType = "STRING" | "FAT_STRING" | "IDENTIFIABLE";

/**
 *
 * The furo-ui5-segmented-button component shows a group of items. When the user clicks an item it stays
 * pressed. It extends the UI5 SegmentedButton and adds `bindData()` support for several model shapes:
 *
 * - **ENUM** — single selection; the items are generated from the enum descriptor (like `furo-ui5-select-enum`).
 * - **STRING | FuroFatString | StringValue** — single selection (`selectionMode="Single"`, like `furo-ui5-select`).
 * - **ARRAY&lt;STRING&gt; | ARRAY&lt;FuroFatString&gt; | IdentifiableList** — multiple selection
 *   (`selectionMode="Multiple"`, like `furo-ui5-multi-combobox`).
 *
 * It also works without any data binding — just declare `ui5-segmented-button-item` children yourself.
 *
 * ### Possible ways to set the item list (for STRING / ARRAY bindings)
 * - Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an item list.
 * - Add the items manually to the html.
 *
 * The bound value is mapped to the item's `data-id` attribute.
 *
 * ```html
 * <furo-ui5-segmented-button
 *    .model="${this.model.choice}"
 *    .optionsModel="${this.options}">
 * </furo-ui5-segmented-button>
 * ```
 *
 * @summary Group of toggle buttons for single or multiple selection.
 * @keywords segmented, toggle, group, selection, tabs, enum, multiselect
 * @category Button
 * @usecase Use for switching between related views or selecting one/several values in place.
 * @related furo-ui5-segmented-button-item, furo-ui5-select, furo-ui5-select-enum, furo-ui5-multi-combobox
 * @tagname furo-ui5-segmented-button
 */
export class FuroUi5SegmentedButton extends SegmentedButton {
  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5SegmentedButton>;

  private stringReaderWriters: StringReaderWriters<FuroUi5SegmentedButton> | undefined;

  private _mode: ModelMode = "SINGLE_STRING";

  private _modelItemType: ModelItemType = "STRING";

  /**
   * @attribute {boolean} show-unspecified - Allows you to select the `unspecified` option of an enum.
   */
  public showUnspecifiedOption = false;

  constructor() {
    super();
    // The SegmentedButton host has no FAT-mappable attributes of its own; FAT labels
    // (readonly/disabled/hidden/required) are still honored by the FatHandler defaults.
    this.fatHandler = new FatHandler<FuroUi5SegmentedButton>(this, []);
    this.fatHandler.readAttributes();
  }

  private _model: ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList =
    new STRING();

  public get model(): ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref ENUM - "@furo/open-models/"
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref ARRAY - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @typeref IFuroFatString - "@/models/index.js"
   * @typeref IdentifiableList - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(
    value: ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList
  ) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - ENUM - "@furo/open-models/"
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @paramref fieldNode - StringValue - "@furo/open-models/"
   * @paramref fieldNode - ARRAY - "@furo/open-models/"
   * @paramref fieldNode - FuroFatString - "@/models/index.js"
   * @paramref fieldNode - IFuroFatString - "@/models/index.js"
   * @paramref fieldNode - IdentifiableList - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindData(
    fieldNode:
      ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList | undefined
  ) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from model: "update"
     * - from ui: selection-change
     */
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("selection-change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    this._mode = FuroUi5SegmentedButton._detectMode(fieldNode);
    this.modelReaderWriter = undefined;

    if (this._mode === "MULTIPLE") {
      this.selectionMode = SegmentedButtonSelectionMode.Multiple;
      this._modelItemType = FuroUi5SegmentedButton._detectModelItemType(
        fieldNode as ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList
      );
    } else {
      this.selectionMode = SegmentedButtonSelectionMode.Single;
      if (this._mode === "ENUM") {
        this._buildEnumItems(fieldNode as ENUM<unknown>);
        const readers = new Map<string, () => void>();
        readers.set("primitives.ENUM", this.applyEnumValueToSelection);
        const writers = new Map<string, () => void>();
        writers.set("primitives.ENUM", this.captureSelectionIntoEnum);
        this.modelReaderWriter = new ModelReaderWriter(this._model, writers, readers);
      } else {
        // SINGLE_STRING — reuse the generic string readers/writers against the `selectedId` accessor.
        this.stringReaderWriters = new StringReaderWriters<FuroUi5SegmentedButton>(
          this,
          "selectedId",
          this._model as STRING | FuroFatString | StringValue,
          this.fatHandler
        );
        this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());
      }
    }

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("selection-change", this.writeToModel);

    // initial read
    this.readFromModel();

    // a single-selection segmented button always has one item pressed — keep the model in sync
    this._ensureSingleSelection();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  /**
   * In single-selection modes the SegmentedButton always renders exactly one pressed item
   * (UI5 auto-selects the first item when none is selected). When the bound model is empty or
   * holds a value that is not in the item list, we adopt the first item and write it back so the
   * model matches the visual state — mirroring `furo-ui5-select`.
   */
  private _ensureSingleSelection() {
    if (this._mode === "MULTIPLE") return;
    const items = this._items;
    if (items.length === 0) return;
    // a model value that already matches a rendered item keeps the selection as-is
    if (this.selectedId !== "") return;
    const firstId = FuroUi5SegmentedButton._itemId(items[0]);
    if (firstId === "") return;
    this.selectedId = firstId;
    this.modelReaderWriter?.writeModel();
  }

  private static _detectMode(
    node: ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList
  ): ModelMode {
    if (node.__meta.typeName === "primitives.ENUM") return "ENUM";
    if (node instanceof ARRAY) return "MULTIPLE";
    return "SINGLE_STRING";
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

  /**
   * The item elements, read directly from the light DOM. We deliberately do NOT use the
   * inherited `this.items` slot accessor here: UI5 repopulates that slot on a microtask, so it
   * is empty right after `appendChild`, which would make the initial selection unreliable.
   */
  private get _items(): ISegmentedButtonItem[] {
    return [...this.querySelectorAll(":scope > ui5-segmented-button-item, :scope > furo-ui5-segmented-button-item")] as unknown as ISegmentedButtonItem[];
  }

  private static _itemId(item: ISegmentedButtonItem): string {
    const el = item as unknown as HTMLElement;
    // map an item to its id: the `data-id` attribute, falling back to its text label
    // for raw author-declared items that carry no data-id.
    const fromAttr = el.getAttribute("data-id");
    if (fromAttr) return fromAttr;
    const text = el.textContent;
    return text ? text.trim() : "";
  }

  /**
   * The id (`data-id`) of the currently selected item — drives the single-selection bindings.
   * @private
   */
  public get selectedId(): string {
    const selected = this._items.find(item => item.selected);
    return selected ? FuroUi5SegmentedButton._itemId(selected) : "";
  }

  public set selectedId(value: string) {
    this._items.forEach(item => {
      item.selected = FuroUi5SegmentedButton._itemId(item) === value;
    });
  }

  private _buildEnumItems(fieldNode: ENUM<unknown>) {
    // remove existing children
    this.querySelectorAll("furo-ui5-segmented-button-item").forEach(el => {
      el.remove();
    });

    Object.keys(fieldNode.enumArg).forEach((key: string) => {
      // hide UNSPECIFIED option unless show-unspecified is requested.
      if (key.includes("_UNSPECIFIED") && !this.showUnspecifiedOption) {
        return;
      }
      const item = document.createElement("furo-ui5-segmented-button-item");
      item.dataset.id = key;
      item.textContent = fieldNode.msg(key);
      this.appendChild(item);
    });
  }

  private _optionsModel: OptionLikeList | undefined;

  public get optionsModel(): OptionLikeList | undefined {
    return this._optionsModel;
  }

  /**
   * Use this to bind an options field by attribute.
   *
   * @typeref OptionLikeList - "@furo/ui5/dist/index.js"
   * @public
   */
  public set optionsModel(value: OptionLikeList | undefined) {
    this.bindOptions(value);
  }

  /**
   * Connects your options data model to this component.
   *
   * @paramref fieldNode - OptionLikeList - "@furo/ui5/dist/index.js"
   * @public
   */
  public bindOptions(fieldNode: OptionLikeList | undefined) {
    if (fieldNode === undefined || fieldNode === this._optionsModel) {
      return;
    }

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
    this.querySelectorAll("furo-ui5-segmented-button-item").forEach(el => {
      el.setAttribute("deleteme", "");
    });

    this.optionsModel?.forEach((option, i) => {
      const existing: FuroUi5SegmentedButtonItem | null = this.querySelector(`furo-ui5-segmented-button-item[data-id="${CSS.escape(option.id.toString())}"]`);
      const item: FuroUi5SegmentedButtonItem = existing ?? document.createElement("furo-ui5-segmented-button-item");
      item.model = option;
      item.style.order = i.toString();
      if (existing === null) {
        this.appendChild(item);
      } else {
        item.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-segmented-button-item[deleteme]").forEach(el => {
      el.remove();
    });

    // sort
    [...this.querySelectorAll("furo-ui5-segmented-button-item")]
      .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
      .forEach(el => {
        this.appendChild(el);
      });

    // re-apply the selection from the model onto the freshly built items
    this.readFromModel();
    this._ensureSingleSelection();
  };

  private _optionList: SelectOption[] | undefined;

  public get optionList(): SelectOption[] | undefined {
    return this._optionList;
  }

  /**
   * Use this to set and render the optionList as an attribute.
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
   * @paramref optionList - SelectOption - "@furo/ui5/dist/index.js"
   * @param optionList
   * @private
   */
  private renderOptionList(optionList: SelectOption[] | undefined) {
    if (optionList === undefined) {
      return;
    }
    // set marker to clear existing options
    this.querySelectorAll("furo-ui5-segmented-button-item").forEach(el => {
      el.setAttribute("deleteme", "");
    });

    optionList.forEach((option, i) => {
      const existing: FuroUi5SegmentedButtonItem | null = this.querySelector(`furo-ui5-segmented-button-item[data-id="${CSS.escape(option.id)}"]`);
      const item: FuroUi5SegmentedButtonItem = existing ?? document.createElement("furo-ui5-segmented-button-item");
      item.dataset.id = option.id;
      item.textContent = option.displayName;
      if (option.icon) {
        item.icon = option.icon;
      }
      if (option.tooltip) {
        item.tooltip = option.tooltip;
      }
      item.style.order = i.toString();
      if (existing === null) {
        this.appendChild(item);
      } else {
        item.removeAttribute("deleteme");
      }
    });
    // delete
    this.querySelectorAll("furo-ui5-segmented-button-item[deleteme]").forEach(el => {
      el.remove();
    });

    // sort if new list was set
    if (this._optionList) {
      [...this.querySelectorAll("furo-ui5-segmented-button-item")]
        .sort((a, b) => Number((a as HTMLElement).style.order) - Number((b as HTMLElement).style.order))
        .forEach(el => {
          this.appendChild(el);
        });
    }

    this._optionList = optionList;

    // re-apply the selection from the model onto the freshly built items
    this.readFromModel();
    this._ensureSingleSelection();
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // for a11y
      if (fieldConstraints.required) {
        this.setAttribute("required", "");
      }
    }
  }

  private readFromModel = (): void => {
    if (this._mode === "MULTIPLE") {
      this.setSelectedItems();
    } else {
      this.modelReaderWriter?.readModel();
    }
  };

  private writeToModel = (event: Event): void => {
    if (this._mode === "MULTIPLE") {
      this._writeSelectionToArray(event);
    } else {
      this.modelReaderWriter?.writeModel();
    }
  };

  private applyEnumValueToSelection = (): void => {
    const value = (this._model as ENUM<unknown>).value;
    if (typeof value !== "string") return;
    this.selectedId = value;
  };

  private captureSelectionIntoEnum = (): void => {
    (this._model as ENUM<unknown>).value = this.selectedId;
  };

  /**
   * Applies the bound array onto the UI item selection (multiple mode).
   * @private
   */
  private setSelectedItems() {
    // clear ALL existing UI selections first — this is the only deselect path.
    this._items.forEach(item => {
      item.selected = false;
    });

    const arr = this._model as ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList;
    const first = arr.at(0);
    if (!first) {
      return;
    }

    const ids: string[] = [];
    if (first.__meta.typeName === "primitives.STRING") {
      ids.push(...(arr as ARRAY<STRING, string>).__toLiteral());
    } else if (first.__meta.typeName === "furo.fat.String") {
      ids.push(...(arr as ARRAY<FuroFatString, IFuroFatString>).map(i => i.value.toString()));
    } else {
      ids.push(...(arr as IdentifiableList).map(e => e.id.toString()));
    }

    ids.forEach(id => {
      const item = this._items.find(it => FuroUi5SegmentedButton._itemId(it) === id);
      if (item) {
        item.selected = true;
      }
    });
  }

  private _writeSelectionToArray(event: Event): void {
    const detail = (event as CustomEvent<SegmentedButtonSelectionChangeEventDetail>).detail as { selectedItems?: ISegmentedButtonItem[] } | undefined;
    const ids = (detail?.selectedItems ?? []).map(it => FuroUi5SegmentedButton._itemId(it)).filter(id => id !== "");
    this._writeIdsToModel(ids);
  }

  private _writeIdsToModel(ids: string[]) {
    // Prevent feedback loop: detach the model listener around the mutation, then re-attach.
    const arr = this._model as ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList;
    arr.__removeEventListener("update", this.readFromModel);
    arr.__clear();

    ids.forEach(id => {
      if (this._modelItemType === "STRING") {
        (arr as ARRAY<STRING, string>).push(id);
      } else if (this._modelItemType === "FAT_STRING") {
        (arr as ARRAY<FuroFatString, IFuroFatString>).push({ value: id });
      } else {
        // IDENTIFIABLE: look up the full object in optionsModel so we preserve
        // displayName/etc. Falls back to a bare `{ id }` shape if optionsModel isn't bound.
        const opt = this._optionsModel?.find(o => o.id.toString() === id);
        const literal = opt && "__toLiteral" in opt ? (opt as { __toLiteral: () => unknown }).__toLiteral() : { id };
        (arr as unknown as { push: (literal: unknown) => number }).push(literal);
      }
    });

    arr.__addEventListener("update", this.readFromModel);
  }

  /**
   * Clears the selection of the segmented button.
   * @public
   */
  clear() {
    if (this._mode === "MULTIPLE") {
      this._writeIdsToModel([]);
      // `_writeIdsToModel` detaches the model listener around the mutation, so nothing syncs
      // the UI back — drop the item selection explicitly (the single-selection branch below
      // does the same through `selectedId`).
      this.setSelectedItems();
    } else {
      this.selectedId = "";
      this.modelReaderWriter?.writeModel();
    }
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-segmented-button";
    return md;
  }
}

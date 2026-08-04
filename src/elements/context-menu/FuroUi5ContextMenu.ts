import "@ui5/webcomponents/dist/MenuItem.js";
import "@ui5/webcomponents/dist/MenuSeparator.js";

import { ARRAY } from "@furo/open-models";
import Menu, { type MenuItemClickEventDetail } from "@ui5/webcomponents/dist/Menu.js";
import type MenuItem from "@ui5/webcomponents/dist/MenuItem.js";
import type MenuSeparator from "@ui5/webcomponents/dist/MenuSeparator.js";

import type { Menuitem } from "@/models/furoui5/Menuitem";
import type { IMenuitem } from "@/models/furoui5/Menuitem";

export type MenuModel = ARRAY<Menuitem, IMenuitem> | Menuitem;

export interface MenuItemSelectedEventDetail {
  context: unknown;
  menuitem: Menuitem;
}

/**
 * The furo-ui5-context-menu binds a `menu.Menuitem` model (or an ARRAY of them) to
 * a SAP `ui5-menu`. Because `ui5-menu` is itself a self-contained popover, no separate
 * display element is required.
 *
 * The opener is wired up using the standard UI5 convention via the `opener` attribute
 * (element id or `HTMLElement` reference) and `show()` / `trigger()`. Hierarchical
 * sub-menus, keyboard navigation, separators and a11y are inherited from `ui5-menu`.
 *
 *
 * @summary Popup menu with hierarchical menu items for actions or navigation.
 * @keywords menu, context-menu, dropdown, actions, navigation, popup
 * @category Navigation
 * @usecase Use for action menus, context menus, or hierarchical navigation.
 * @related furo-ui5-menu-item, furo-ui5-popover, furo-ui5-split-button
 * @tagname furo-ui5-context-menu
 * @eventref menu-item-selected - MenuItemSelectedEventDetail - "@furo/ui5/dist/index.js"
 * @event {CustomEvent<MenuItemSelectedEventDetail>} menu-item-selected - Fired when a menu item was clicked.
 */
export class FuroUi5ContextMenu extends Menu {
  /**
   * The currently bound source model — an `ARRAY` of root items, or a single `Menuitem`
   * whose `children` are the root items. `undefined` until `bindData()` is called.
   * @private
   */
  private _model: MenuModel | undefined;

  /**
   * Last value passed to `setContext()` / `triggerContext()`. Echoed back as
   * `detail.context` on the next emitted `menu-item-selected` event.
   * @private
   */
  private _context: unknown;

  /**
   * Set when `trigger()` / `triggerContext()` is called before any model is bound.
   * The pending open is replayed inside `bindData()` once a model arrives — preserves
   * the legacy `furo-ui5-context-menu` behavior.
   * @private
   */
  private _queueTrigger = false;

  /**
   * Maps each rendered `<ui5-menu-item>` back to its source `Menuitem` field node, so
   * `handleItemClick` can attach the correct field node to the emitted
   * `menu-item-selected` event. `WeakMap` so removed items can be GC'd.
   * @private
   */
  private readonly itemSources = new WeakMap<MenuItem, Menuitem>();

  constructor() {
    super();
    this.addEventListener("item-click", this.handleItemClick as EventListener);
  }

  public get model(): MenuModel | undefined {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref ARRAY - "@furo/open-models/"
   * @typeref MenuModel - "@furo/ui5/dist/index.js"
   * @public
   */
  public set model(value: MenuModel | undefined) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component. Accepts either an `ARRAY<Menuitem, IMenuitem>`
   * (typical case: the array of root items) or a single `Menuitem` whose `children`
   * will be used as the root items.
   *
   * @paramref fieldNode - ARRAY - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: MenuModel | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      if (this._queueTrigger && this._model !== undefined) {
        this._queueTrigger = false;
        this.trigger();
      }
      return;
    }

    this.detachModelListeners();

    this._model = fieldNode;

    this.attachModelListeners();
    this.renderItems();

    if (this._queueTrigger) {
      this._queueTrigger = false;
      this.trigger();
    }
  }

  /**
   * Sets a context value that is echoed back inside the `menu-item-selected` event.
   * @public
   */
  public setContext(ctx: unknown): void {
    this._context = ctx;
  }

  /**
   * Opens the menu at the configured opener. If `bindData` has not yet been called,
   * the trigger is queued and replayed once a model arrives.
   *
   * @public
   */
  public trigger(): void {
    if (this._model === undefined) {
      this._queueTrigger = true;
      return;
    }
    this.open = true;
  }

  /**
   * Sets the context and opens the menu.
   * @public
   */
  public triggerContext(ctx: unknown): void {
    this.setContext(ctx);
    this.trigger();
  }

  /**
   * Convenience: assigns the opener and opens the menu.
   * @public
   */
  public showAt(opener: HTMLElement | string): void {
    this.opener = opener;
    this.trigger();
  }

  /**
   * Opens the menu (uses the currently configured opener).
   * @public
   */
  public show(): void {
    this.trigger();
  }

  /**
   * Closes the menu.
   * @public
   */
  public close(): void {
    this.open = false;
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.detachModelListeners();
  }

  /**
   * Translates UI5's native `item-click` event into our `menu-item-selected` event by
   * looking the clicked `MenuItem` up in `itemSources`. Items not in the map (e.g.
   * stray children the user appended manually) are ignored. Defined as an arrow so
   * `this` stays bound when used as a DOM event listener.
   * @private
   */
  private handleItemClick = (event: CustomEvent<MenuItemClickEventDetail>): void => {
    const source = this.itemSources.get(event.detail.item);
    if (source === undefined) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<MenuItemSelectedEventDetail>("menu-item-selected", {
        bubbles: true,
        composed: true,
        detail: { context: this._context, menuitem: source },
      })
    );
  };

  /**
   * Listener attached to the bound model's `array-changed` and `update`
   * events; re-renders the menu items on any change to the model tree.
   * @private
   */
  private readonly handleModelChanged = (): void => {
    this.renderItems();
  };

  /**
   * Subscribes `handleModelChanged` to the currently bound `_model`'s `array-changed`
   * and `update` events. No-op when no model is bound.
   * @private
   */
  private attachModelListeners(): void {
    if (this._model === undefined) {
      return;
    }
    this._model.__addEventListener("array-changed", this.handleModelChanged);
    this._model.__addEventListener("update", this.handleModelChanged);
  }

  /**
   * Inverse of `attachModelListeners`; called on rebind and on `disconnectedCallback`
   * to avoid listener leaks on the source model.
   * @private
   */
  private detachModelListeners(): void {
    if (this._model === undefined) {
      return;
    }
    this._model.__removeEventListener("array-changed", this.handleModelChanged);
    this._model.__removeEventListener("update", this.handleModelChanged);
  }

  /**
   * Resolves the bound model to the ARRAY of root items: returns the model itself when
   * it's already an `ARRAY`, otherwise its `children` ARRAY. `undefined` when nothing
   * is bound.
   * @private
   */
  private get rootItems(): ARRAY<Menuitem, IMenuitem> | undefined {
    if (this._model === undefined) {
      return undefined;
    }
    return this._model instanceof ARRAY ? this._model : this._model.children;
  }

  /**
   * Clears any previously rendered `<ui5-menu-item>` / `<ui5-menu-separator>` light-DOM
   * children, then re-creates them from the current `rootItems`. Called from `bindData`
   * and from `handleModelChanged`.
   * @private
   */
  private renderItems(): void {
    this.querySelectorAll("ui5-menu-item, ui5-menu-separator").forEach(el => {
      el.remove();
    });

    const items = this.rootItems;
    if (items === undefined) {
      return;
    }

    items.forEach(node => {
      this.appendChildrenFor(node, this);
    });
  }

  /**
   * Renders a single `Menuitem` plus any of its `children` recursively into `parent`
   * (the menu host at the root, or a `<ui5-menu-item>` to form a submenu). Inserts a
   * leading `<ui5-menu-separator>` when `node.leadingDivider.value` is `true`, and
   * records the `MenuItem → Menuitem` mapping in `itemSources` so `handleItemClick`
   * can resolve the source field node on selection.
   * @private
   */
  private appendChildrenFor(node: Menuitem, parent: HTMLElement): void {
    if (node.leadingDivider.value) {
      parent.appendChild(document.createElement("ui5-menu-separator") as MenuSeparator);
    }

    const item = document.createElement("ui5-menu-item") as MenuItem;
    const text = node.displayName.value;
    const icon = node.icon.value;
    const command = node.command.value;

    item.text = text;
    if (icon !== "") {
      item.icon = icon;
    }
    if (command !== "") {
      item.additionalText = command;
    }
    item.disabled = node.disabled.value;
    if (text !== "") {
      item.tooltip = text;
    }

    this.itemSources.set(item, node);

    node.children.forEach(child => {
      this.appendChildrenFor(child, item);
    });

    parent.appendChild(item);
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-context-menu" };
  }
}

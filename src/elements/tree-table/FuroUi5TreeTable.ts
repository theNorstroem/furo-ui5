import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-right.js";
import "@/elements/busy-indicator";
import "@/elements/icon";
import "@/elements/tree-table/TreeTable.css";

import { css, html, LitElement, type CSSResult, type PropertyValues } from "lit";
import { property } from "lit/decorators.js";

import { TreeTableMode } from "@/elements/tree-table/TreeTableMode";
import DebounceBuilder from "@/util/Debounce";

/**
 * This type contains the details of a selection-change event.
 */
export interface TreeTableSelectionChange {
  old: HTMLTableRowElement[];
  new: HTMLTableRowElement[];
}

/**
 * ### Overview
 * A tree table contains a hierarchical set of data structured in rows and columns and grouped into nodes.
 *
 * Trees are used to display and work with large amounts of hierarchical data. They have a high data density and therefore convey an immediate feeling of complexity. Ideally, you should only show trees with a lot of hierarchical data as a last resort. Try the following instead:
 *
 * Break down the data into manageable chunks and allow the user to navigate or drill down between them.
 * Use charts with drilldown functionality until the amount of data is more manageable.
 *
 *
 * ### Responsiveness
 * A tree table is available for desktops and tablets, but not in smartphone sizes.
 * It supports touch interaction devices, but is not optimized for small screens.
 * For smartphones, you need to take an adaptive approach by offering an additional UI.
 *
 * Possible solutions are as follows:
 *
 * - Use navigation to different pages instead of a tree structure. This works well for structures that are no more than four levels deep.
 * - Remove levels until only one or two remain. Replace a single-level tree by a table, and a two-level tree by a grouped table or a split-screen layout.
 * - Use filtering instead of a tree structure.
 *
 * You can try to create a fallback based on these ideas, but a completely different solution, such as showing charts in a read-only case, might be more appropriate.
 *
 * ### Value State
 * Set the value-state attribute to mark a row with following states: Information, Positive, Negative, Critical.
 *
 * ```html
 *   <tr aria-level="2" value-state="Danger">
 *         <td>New Paperclips</td>
 *         <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
 *         <td >0.01</td>
 *  </tr>
 * ```
 * > Aria level counting is one-based.
 * > Root rows have aria-level="1".
 *
 * ### Expanded nodes
 *
 * If you want that a node is open from the init, add the `[aria-expanded=true]` attribute.
 *
 * ```html
 *  <tr aria-level="1" aria-expanded="true">
 *       <td colspan="3">Paperclips</td>
 *  </tr>
 *  <tr aria-level="2">
 *       <td>New Paperclips</td>
 *       <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
 *       <td >0.01</td>
 *  </tr>
 * ```
 *
 * ### Group headers
 * To get a group header set the attribute `group-header` or the class `group-header` to the row.
 * Add a `td` for the tree and a `td` with `colspan="99"` to keep the line on the right side of the tree.
 *
 * ```html
 *  <tr aria-level="1" aria-expanded="true" group-header="">
 *       <td>Paperclips</td>
 *       <td colspan="2"></td>
 *  </tr>
 *  <tr aria-level="2" >
 *       <td>New Paperclips</td>
 *       <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
 *       <td >0.01</td>
 *  </tr>
 * ```
 *
 * ### Additional sticky features
 *
 * **[sticky-top]**
 *
 * Set the `sticky-top` on the `tr` to get a stickiness at the top.
 *
 * **[sticky-bottom]**
 *
 * Set the `sticky-bottom` on the `tr` to get a stickiness at the bottom.
 *
 * **[sticky-left]**
 *
 * Set the `sticky-left` attribute on every `td` you want to stick on the left side. Do not forget to set this to the `thead>tr` too.
 *
 * **[sticky-right]**
 *
 * Set the `sticky-right` attribute on every `td` you want to stick on the right side. Do not forget to set this to the `thead>tr` too.
 *
 * ### Keyboard navigation
 *
 * The `furo-ui5-tree-table` provides advanced keyboard handling. We follow the rules from
 * [ARIA: treegrid role - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role#keyboard_interactions)
 * and [Treegrid Pattern | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/). Cell navigation is not supported at the moment.
 *
 * The user can use the following keyboard shortcuts in order to navigate through the tree (cell navigation is not yet supported):
 *
 *
 * - [UP/DOWN] - Navigates up and down the tree items that are currently visible.
 * - [RIGHT] - Opens a node when it is not expanded and drills down the tree when the node is already opened.
 * - [SHIFT + RIGHT] - Opens **all sub nodes** of the focused node. The focus stays on the current node. This is an additional key command.
 * - [LEFT] - Collapses an open node and otherwise goes up the tree to the parent node and collapses the tree nodes.
 * - [HOME] - Focuses the first visible row.
 * - [END] - Focuses the last visible row
 *
 * ### Styling
 *
 * The tree table styles the consumer's light-DOM `<table>`, so importing this element adopts a global
 * stylesheet (`TreeTableCSS`) into `document`. If you render a `furo-ui5-tree-table` inside another
 * web-component's shadow DOM, adopt `TreeTableCSS` into that shadow root as well.
 *
 * @summary Hierarchical table with expandable parent-child rows.
 * @keywords tree-table, hierarchical, nested, expandable, parent-child, table
 * @category Table
 * @usecase Use when tabular data has parent-child relationships requiring expansion.
 *
 * @event {CustomEvent<HTMLTableRowElement>} row-click - Fired when the tree table is in SingleSelect and a row is clicked or `Enter` key is pressed.
 * @event {CustomEvent<TreeTableSelectionChange>} selection-change - Fired when a row is selected.
 * @event {CustomEvent<HTMLTableRowElement>} node-focused - Is fired when a node or a child of it receives the focus. The event detail contains the focused row. This event is trailing debounced with 250ms.
 * @event {CustomEvent<HTMLTableRowElement>} node-expanded - Is fired when a node was expanded.
 * @event {CustomEvent<HTMLTableRowElement>} node-collapsed - Is fired when a node was collapsed.
 * @event {CustomEvent<FuroUi5TreeTable>} load-more - Fired when the user scrolls to the table's end. Also fired after 1 second if you start with an empty list or a list which to small to scroll.
 * @slot {HTMLElement[]} default - Add your table with `thead` and `tbody` here.
 * @tagname furo-ui5-tree-table
 */
export class FuroUi5TreeTable extends LitElement {
  /**
   *
   * @private
   */
  private _notifyNodeFocused: (targetTR: HTMLTableRowElement) => void;

  /**
   * stores the last focused row, to avoid duplicate notifications
   * @private
   */
  private _lastFocusedTarget: HTMLTableRowElement | undefined;

  /**
   * List of the selected nodes. In SingleSelect this list contains only 1 entry.
   */
  selectedNodes: HTMLTableRowElement[] = [];

  constructor() {
    super();
    /**
     * Fired when a node is focused
     *
     */
    this._notifyNodeFocused = DebounceBuilder<[HTMLTableRowElement]>((targetTR: HTMLTableRowElement) => {
      if (this._lastFocusedTarget !== targetTR) {
        this.dispatchEvent(
          new CustomEvent("node-focused", {
            composed: true,
            bubbles: true,
            detail: targetTR,
          }),
        );
        this._lastFocusedTarget = targetTR;
      }
    }, 250);
  }

  /**
   * Defines if the table is in busy state.
   *
   * In this state the component's opacity is reduced and busy indicator is displayed at the bottom of the table.
   *
   */
  @property({ type: Boolean, attribute: "busy" })
  public busy = false;

  /**
   * Set this to true, to keep the selection marker on focus out.
   * @attr {boolean} show-selected-row
   */
  @property({ type: Boolean, attribute: "show-selected-row" })
  public showSelectedRow = false;

  /**
   * Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport.
   *
   * Scrolling behavior:
   * If the Web Component is placed in layout containers that have the overflow: hidden or overflow: auto style definition, this can prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.
   *
   * This attribute is not changeable and **must** be set declarative.
   * @attr {boolean} sticky-column-header
   */
  @property({ type: Boolean, attribute: "sticky-column-header" })
  public stickyColumnHeader = false;

  /**
   * Makes the tree sticky to the left.
   *
   * This attribute is not changeable and **must** be set declarative.
   * @attr {boolean} sticky-tree
   */
  @property({ type: Boolean, attribute: "sticky-tree" })
  public stickyTree = false;

  /**
   * Defines the mode of the component.
   *
   *
   *
   * Available Modes are
   * - None (Default)
   * - SingleSelect, enables keyboard and mouse select of a row.
   * - MultiSelect **NOT IMPLEMENTED**
   */
  @property({ type: String, attribute: "mode" })
  mode: TreeTableMode = TreeTableMode.None;

  /**
   * @private
   */
  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this._init();

    // Select the node that will be observed for mutations
    const tbody = this.querySelector("tbody");

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback: MutationCallback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          this._init();
          break;
        }
      }
    };

    // Create an observer instance linked to the callback function and start
    // observing the target node for configured mutations
    if (tbody !== null) {
      const observer = new MutationObserver(callback);
      observer.observe(tbody, config);
    }

    const loadMoreObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.dispatchEvent(
              new CustomEvent("load-more", {
                composed: true,
                bubbles: false,
                detail: this,
              }),
            );
          }
        });
      },
      { threshold: 1 },
    );

    // Delay of 1000 is chosen because you could have a tree which
    setTimeout(() => {
      const observeAnchor = this.shadowRoot?.getElementById("observe");
      if (observeAnchor) {
        loadMoreObserver.observe(observeAnchor);
      }
    }, 1000);
  }

  /**
   * Init
   * @private
   */
  private _init() {
    this.querySelector("table")?.setAttribute("role", "treegrid");

    // parse levels and set icons on nodes and display expanded nodes
    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    let lastParent: HTMLTableRowElement | null = null;
    let lastLevel = 1;

    if (this.stickyTree) {
      const headTreeCells = this.querySelectorAll("thead th:first-child");
      Array.from(headTreeCells).forEach((headTreeCell) => {
        headTreeCell.setAttribute("sticky-left", "");
      });
    }

    // set tab index for keyboard navigation
    if (rows.length > 0) {
      rows[0].setAttribute("tabindex", "0");
    } else {
      return;
    }

    rows.forEach((node, i) => {
      // set aria cell
      node.querySelectorAll("td").forEach((cell) => {
        cell.setAttribute("role", "gridcell");
      });

      const treeCell = node.querySelector("td");
      if (treeCell === null) {
        return;
      }

      if (i > 0) {
        // set tab index for other nodes to -1, so we can focus them but are out of taborder
        node.setAttribute("tabindex", "-1");
        node.removeAttribute("selected");
      }
      // set leave to all nodes and remove it later if they have children
      node.setAttribute("is-leave", "");
      node.setAttribute("role", "row");

      if (this.stickyTree) {
        treeCell.setAttribute("sticky-left", "");
      }

      if (lastParent !== null) {
        lastLevel = this._getLevel(lastParent);
      }

      if (this._getLevel(node) <= lastLevel) {
        lastParent = node;
      }
      const currentNodeLevel = this._getLevel(node);

      if (currentNodeLevel > lastLevel && lastParent !== null) {
        // add icon to last parent if not already set
        const parent = lastParent;
        const parentCell = parent.querySelector("td");
        if (parent.querySelector("[tree-icon]") === null && parentCell !== null) {
          const icon = document.createElement("furo-ui5-icon");
          icon.setAttribute("tree-icon", "");
          //  display arrow down when expanded otherwise arrow right
          icon.setAttribute("name", parent.getAttribute("aria-expanded") === "true" ? "slim-arrow-down" : "slim-arrow-right");
          parentCell.insertBefore(icon, parentCell.childNodes[0]);
        }
        parent.removeAttribute("is-leave");
        lastParent = node;
      }
      if ((node.nextElementSibling !== null && currentNodeLevel >= this._getLevel(node.nextElementSibling as HTMLTableRowElement)) || node.nextElementSibling === null) {
        const nodeIcon = node.querySelector("[tree-icon]");
        if (nodeIcon) {
          nodeIcon.remove();
        }
      }
    });

    rows.forEach((node) => {
      // hide subnodes which are not expanded
      if (node.getAttribute("aria-expanded") === null || node.getAttribute("aria-expanded") === "false") {
        this._collapseNode(node);
      }
    });

    // check bottom stickyness
    const stickyRows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr[sticky-bottom]");
    let zIndex = 90;
    for (let i = stickyRows.length; i > 0; i -= 1) {
      stickyRows[i - 1].style.zIndex = zIndex.toString();
      zIndex += 1;
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.rowClickHandler);
    this.addEventListener("focusin", this.focusInHandler);
    this.addEventListener("keydown", this.keyboardHandler);
    this.setAttribute("furo-ui5-tree-table", "");
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.rowClickHandler);
    this.removeEventListener("focusin", this.focusInHandler);
    this.removeEventListener("keydown", this.keyboardHandler);
  }

  /**
   *
   * @param e
   * @private
   */
  private readonly focusInHandler = (e: FocusEvent) => {
    const targetTR = (e.target as HTMLElement).closest("tr");
    if (targetTR !== null) {
      // set all tabindexes to -1
      this.querySelectorAll("tbody tr").forEach((node) => {
        node.removeAttribute("selected");
        node.setAttribute("tabindex", "-1");
      });

      // set target tabindex to 0
      targetTR.setAttribute("selected", "");
      targetTR.setAttribute("tabindex", "0");
      this._notifyNodeFocused(targetTR);
    }
  };

  /**
   * @private
   * @param e
   */
  private readonly rowClickHandler = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement.getAttribute("tree-icon") === null) {
      // row click handler only react if the icon is not a tree-icon
      const row = targetElement.closest("tr");
      if (row !== null) {
        this._notifyRowClick(row);
      }

      return;
    }
    // only react if the icon is a tree-icon
    e.preventDefault();
    e.stopPropagation();
    if (targetElement.getAttribute("name") !== "slim-arrow-right") {
      this._collapseNode(targetElement);
      this.dispatchEvent(
        new CustomEvent("node-collapsed", {
          composed: true,
          bubbles: true,
          detail: targetElement.closest("tr"),
        }),
      );
    } else {
      this._expandNode(targetElement);
    }
  };

  private _notifyRowClick(targetElement: HTMLTableRowElement) {
    this.dispatchEvent(
      new CustomEvent("row-click", {
        detail: targetElement,
        composed: true,
        bubbles: false,
      }),
    );

    // notify selection-change
    if (this.mode === TreeTableMode.SingleSelect) {
      const changes: TreeTableSelectionChange = {
        old: this.selectedNodes,
        new: [targetElement],
      };
      if (this.selectedNodes[0] !== targetElement) {
        this.selectedNodes = [targetElement];
        this.dispatchEvent(
          new CustomEvent("selection-change", {
            detail: changes,
            composed: true,
            bubbles: false,
          }),
        );
      }
    }
  }

  /**
   *
   * @param target {HTMLElement}
   * @private
   */
  private _expandNode(target: HTMLElement) {
    // if the target was the icon, get the closest `<tr>`
    const targetNode = target.closest("tr");
    if (targetNode === null) {
      return;
    }
    targetNode.setAttribute("aria-expanded", "true");
    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    let level = 0;
    let collapsedLevel = Infinity;
    let lockCollapse = false;

    const icon = targetNode.querySelector("[tree-icon]");
    if (icon !== null) {
      icon.setAttribute("name", "slim-arrow-down");
    }
    for (const node of rows) {
      if (node === targetNode) {
        // set the level if we are on the targetNode
        level = this._getLevel(targetNode);
        continue;
      } else if (level === 0) {
        // skip everything before we reach the targetNode
        continue;
      }
      const nodeLevel = this._getLevel(node);

      if (nodeLevel <= level) {
        // next nodes are on same level like targetNode and is another path, so we can stop here
        break;
      }

      // next nodes are on  another path, so we can clear the lock
      if (nodeLevel === collapsedLevel) {
        lockCollapse = false;
      }

      if (node.getAttribute("is-leave") === null && node !== targetNode && (node.getAttribute("aria-expanded") === null || node.getAttribute("aria-expanded") === "false") && !lockCollapse) {
        collapsedLevel = this._getLevel(node);
        lockCollapse = true;
      }

      // next nodes are already hidden and must not be shown
      if (nodeLevel > collapsedLevel && lockCollapse) {
        continue;
      }

      // nodes to show
      node.removeAttribute("hidden");
      node.removeAttribute("aria-hidden");
    }

    this.dispatchEvent(
      new CustomEvent("node-expanded", {
        composed: true,
        bubbles: true,
        detail: targetNode,
      }),
    );
  }

  /**
   * Expands every node in full depth.
   * @public
   * @return {void}
   */
  expandAllNodes() {
    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    for (const node of rows) {
      const icon = node.querySelector("[tree-icon]");
      if (icon !== null) {
        icon.setAttribute("name", "slim-arrow-down");
      }
      node.removeAttribute("hidden");
      node.removeAttribute("aria-hidden");
    }
    // set aria expanded to true
    const nodes: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr[aria-expanded]");
    nodes.forEach((n) => {
      n.setAttribute("aria-expanded", "true");
    });
  }

  /**
   * Collapses all nodes to level 1.
   * @public
   * @return {void}
   */
  collapseAllNodes() {
    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    for (const node of rows) {
      const icon = node.querySelector("[tree-icon]");
      if (icon !== null) {
        icon.setAttribute("name", "slim-arrow-right");
      }

      if (this._getLevel(node) > 1) {
        node.setAttribute("hidden", "");
        node.setAttribute("aria-hidden", "true");
      } else {
        node.removeAttribute("hidden");
        node.removeAttribute("aria-hidden");
      }
    }
    // set aria expanded to true
    const nodes: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr[aria-expanded]");
    nodes.forEach((n) => {
      n.setAttribute("aria-expanded", "false");
    });
  }

  /**
   *
   * @private
   * @param target
   * @return {void}
   */
  _expandNodeWithAllSubs(target: HTMLElement) {
    // if the target was the icon, get the closest `tr`
    const targetNode = target.closest("tr");
    if (targetNode === null) {
      return;
    }
    targetNode.setAttribute("aria-expanded", "true");
    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    let level = 0;

    for (const node of rows) {
      const icon = node.querySelector("[tree-icon]");
      if (icon !== null) {
        icon.setAttribute("name", "slim-arrow-down");
      }

      if (node === targetNode) {
        level = this._getLevel(targetNode);
        continue;
      } else if (level === 0) {
        continue;
      }
      const nodeLevel = this._getLevel(node);
      if (nodeLevel <= level) {
        // next nodes are on same level like targetNode
        break;
      }
      if (node.matches("[aria-expanded=false]")) {
        node.setAttribute("aria-expanded", "true");
      }
      // nodes to show
      node.removeAttribute("hidden");
      node.removeAttribute("aria-hidden");
    }
  }

  /**
   *
   * @param target
   * @private
   * @return {void}
   */
  private _collapseNode(target: HTMLElement) {
    // if the target was the icon, get the closest `tr`
    const targetNode = target.closest("tr");
    if (targetNode === null) {
      return;
    }

    if (targetNode.getAttribute("is-leave") === null) {
      targetNode.setAttribute("aria-expanded", "false");
    }

    const rows: NodeListOf<HTMLTableRowElement> = this.querySelectorAll("tbody tr");
    let level = 0;
    const icon = targetNode.querySelector("[tree-icon]");
    if (icon !== null) {
      icon.setAttribute("name", "slim-arrow-right");
    }

    for (const node of rows) {
      if (node === targetNode) {
        level = this._getLevel(targetNode);
        continue;
      } else if (level === 0) {
        continue;
      }
      const nodeLevel = this._getLevel(node);
      if (nodeLevel <= level) {
        // next nodes are on same level like targetNode
        break;
      }
      // nodes to hide
      node.setAttribute("hidden", "");
      node.setAttribute("aria-hidden", "true");
    }
  }

  /**
   * Get the level
   * @param targetNode
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  private _getLevel(targetNode: HTMLTableRowElement) {
    return parseInt(targetNode.getAttribute("aria-level") ?? "", 10);
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: block;
      width: 100%;
    }

    furo-ui5-busy-indicator {
      display: block;
    }
  `;

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  override render() {
    // language=HTML
    return html`
      <furo-ui5-busy-indicator ?active="${this.busy}">
        <slot></slot>
      </furo-ui5-busy-indicator>
      <div id="observe"></div>
    `;
  }

  /**
   *
   * @param e
   */
  private readonly keyboardHandler = (e: KeyboardEvent) => {
    const target = e.composedPath()[0] as HTMLElement;
    if (target.tagName !== "TR") {
      return;
    }
    let prevSibling = target.previousElementSibling;
    let nextSibling = target.nextElementSibling;
    const targetLevel = this._getLevel(target as HTMLTableRowElement);

    switch (e.key) {
      case "Enter":
        if (this.mode === TreeTableMode.SingleSelect || this.mode === TreeTableMode.MultiSelect) {
          // target is always a TR
          this._notifyRowClick(target as HTMLTableRowElement);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        while (prevSibling) {
          if (prevSibling.matches(":not([hidden])")) {
            (prevSibling as HTMLElement).scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            (prevSibling as HTMLElement).focus({ preventScroll: true });
            return;
          }
          prevSibling = prevSibling.previousElementSibling;
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        while (nextSibling) {
          if (nextSibling.matches(":not([hidden])")) {
            (nextSibling as HTMLElement).scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            (nextSibling as HTMLElement).focus({ preventScroll: true });
            return;
          }
          nextSibling = nextSibling.nextElementSibling;
        }

        break;
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();
        // close the tree if open else focus parent
        if (target.matches("[aria-expanded=true]")) {
          this._collapseNode(target);
          this.dispatchEvent(
            new CustomEvent("node-collapsed", {
              composed: true,
              bubbles: true,
              detail: target,
            }),
          );
        } else {
          // focus parent
          while (prevSibling) {
            if (this._getLevel(prevSibling as HTMLTableRowElement) < targetLevel) {
              (prevSibling as HTMLElement).focus();
              return;
            }
            prevSibling = prevSibling.previousElementSibling;
          }
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        if (e.shiftKey) {
          this._expandNodeWithAllSubs(target);
        } else if (target.matches("[aria-expanded=false]")) {
          // open the tree if closed otherwise focus the next node
          this._expandNode(target);
        } else {
          // focus next
          while (nextSibling) {
            if (nextSibling.matches(":not([hidden])")) {
              (nextSibling as HTMLElement).focus();
              return;
            }
            nextSibling = nextSibling.nextElementSibling;
          }
        }
        break;
      case "End": {
        // focus the last visible row
        const nodes = this.querySelectorAll("tr:not([hidden])");
        if (nodes.length) {
          (nodes[nodes.length - 1] as HTMLElement).focus();
        }
        break;
      }
      case "Home": {
        // focus the first visible row
        const nodes2 = this.querySelectorAll("tr:not([hidden])");
        if (nodes2.length) {
          (nodes2[1] as HTMLElement).focus();
        }
        break;
      }

      default:
    }
  };
}

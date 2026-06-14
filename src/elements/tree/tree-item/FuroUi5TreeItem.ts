import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/border.js";
import "@/elements/bool-icon";

import type { FieldNode } from "@furo/open-models";
import { css, html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";

import { getParentNode, treeNodeView } from "../tree-view-state";

import type {  NavigationNode } from "@/models/furoui5/NavigationNode";

/**
 * Search request passed down from `furo-ui5-tree` to each visible item. Matching items push
 * their bound `fieldNode` onto `results`.
 */
export interface TreeSearchRequest {
  term: string;
  results: NavigationNode[];
}

/**
 * `furo-ui5-tree-item`
 *
 * # INTERNAL COMPONENT
 * Row of a `furo-ui5-tree`. Renders a single `tree.NavigationNode`, reflects its
 * visible / selected / focused / search-match state, and emits a `tree-select` intent
 * when its label is clicked. Open / close is delegated to the embedded
 * `furo-ui5-bool-icon`, which writes back to the node's `open` field.
 *
 * @cssprop {N/A} [--tree-indentation-1=16px] - tree indention level 1
 * @cssprop {N/A} [--tree-indentation-2=32px] - tree indention level 2
 * @cssprop {N/A} [--tree-indentation-3=48px] - tree indention level 3
 * @cssprop {N/A} [--tree-indentation-4=56px] - tree indention level 4
 * @cssprop {N/A} [--tree-indentation-5=64px] - tree indention level 5
 * @cssprop {N/A} [--tree-indentation-6=72px] - tree indention level 6
 * @cssprop {N/A} [--tree-indentation-7=80px] - tree indention level 7
 * @cssprop {N/A} [--tree-indentation-8=88px] - tree indention level 8
 * @cssprop {N/A} [--tree-indentation-9=92px] - tree indention level 9
 * @cssprop {N/A} [--tree-indentation-10=96px] - tree indention level 10
 * @cssprop {N/A} [--tree-indentation-11=100px] - tree indention level 11
 * @cssprop {N/A} [--tree-indentation-12=104px] - tree indention level 12
 *
 * @summary tree item
 * @element furo-ui5-tree-item
 * @tagname furo-ui5-tree-item
 */
export class FuroUi5TreeItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  public focused = false;

  @property({ type: Boolean, reflect: true })
  public searchmatch = false;

  @property({ type: Boolean, reflect: true })
  public inedit = false;

  @property({ type: Boolean, reflect: true })
  public haserror = false;

  @property({ type: Boolean, reflect: true })
  public selected = false;

  @property({ type: Boolean })
  public noicon = false;

  @property({ type: Boolean, reflect: true, attribute: "is-group-label" })
  public isGroupLabel = false;

  @state()
  private indentation = 0;

  @state()
  private _icon = "border";

  /** Token index used by {@link search}. */
  private _searchTokens = new Set<string>();

  private _fieldNode: NavigationNode | undefined;

  /**
   * The bound navigation node. Setting it binds the item (see {@link bindData}).
   */
  public get fieldNode(): NavigationNode | undefined {
    return this._fieldNode;
  }

  /**
   * Setter for the bound navigation node.
   *
   * @typeref NavigationNode - "@/models/furoui5/NavigationNode"
   */
  public set fieldNode(node: NavigationNode | undefined) {
    if (node !== undefined) {
      this.bindData(node);
    }
  }

  /**
   * Tests this item against a search request and, on a match, pushes its `fieldNode`
   * onto `event.results`.
   */
  public search(event: TreeSearchRequest): void {
    if (this.hidden || this._fieldNode === undefined) {
      return;
    }
    const term = event.term.toLowerCase();
    if (term.length === 0) {
      return;
    }

    const hasResults = term.split(" ").every(token => {
      if (token.length === 0) {
        return true;
      }
      // single letter search matches the first letter of a word
      const t = token.length === 1 ? `${token}.*$` : token;
      return this._searchTokens.has(t);
    });

    if (hasResults) {
      event.results.push(this._fieldNode);
    }
  }

  /**
   * Binds a navigation node to this item.
   */
  public bindData(node: NavigationNode): void {
    if (node === this._fieldNode) {
      return;
    }
    this._fieldNode = node;

    const view = treeNodeView.get(node);
    this.indentation = view?.depth ?? 0;
    this.isGroupLabel = node.isGroupLabel.value;

    if (node.icon.value) {
      this._icon = node.icon.value;
      this.noicon = false;
    } else {
      this._icon = "border";
      this.noicon = true;
    }

    this.haserror = node.hasError.value;
    this.hidden = view ? !view.visible : true;

    if (view?.isRoot) {
      this.hidden = false;
      if (view.rootAsHeader) {
        this.setAttribute("isheader", "");
      } else {
        this.removeAttribute("isheader");
      }
    }

    // visibility cascade: reflect the open / close state of ancestors
    node.__addCustomEventListener("ancestor-invisible", () => {
      this.hidden = true;
    });
    node.__addCustomEventListener("ancestor-visible", () => {
      if (getParentNode(node)?.open.value) {
        this.hidden = false;
      }
    });

    // when this node opens / closes, broadcast visibility to its children
    node.open.__addEventListener("this-field-value-changed", () => {
      const eventName = node.open.value ? "ancestor-visible" : "ancestor-invisible";
      node.children.__broadcastEvent(new CustomEvent(eventName, { detail: node }));
      this.requestUpdate();
    });

    // selection / focus driven by the host tree
    node.__addCustomEventListener("this-node-selected", () => {
      this.selected = true;
      this._scrollIntoView();
    });
    node.__addCustomEventListener("tree-node-unselection-requested", () => {
      this.selected = false;
    });
    node.__addCustomEventListener("this-node-focused", () => {
      this.focused = true;
      this._scrollIntoView();
    });
    node.__addCustomEventListener("tree-node-blur-requested", () => {
      this.focused = false;
    });

    // search match highlighting
    node.__addCustomEventListener("search-didnt-match", () => {
      this.searchmatch = false;
    });
    node.__addCustomEventListener("search-matched", () => {
      this.searchmatch = true;
    });

    // re-render on any value change of the node
    node.__addEventListener("field-value-changed", () => {
      this.haserror = node.hasError.value;
      this.requestUpdate();
    });

    this._updateSearchIndex();
    this.requestUpdate();
  }

  /**
   * (Re)builds the search-token index from the node's string fields.
   * @private
   */
  private _updateSearchIndex(): void {
    // build the index slightly delayed; a human user cannot react earlier
    setTimeout(() => {
      if (this._fieldNode === undefined) {
        return;
      }
      let words: string[] = [];
      (this._fieldNode.__childNodes as FieldNode[]).forEach(field => {
        const v = (field as unknown as { value?: unknown }).value;
        if (typeof v === "string") {
          words = words.concat(v.toLowerCase().split(/\W+/));
        }
      });
      const wordSet = new Set(words);
      const tokens: string[] = [];
      wordSet.forEach(word => {
        // first letter
        tokens.push(`${word.slice(0, 1)}.*$`);
        for (let tokenLength = 2; tokenLength < word.length; tokenLength += 1) {
          const l = word.length - tokenLength + 1;
          for (let i = 0; i < l; i += 1) {
            tokens.push(word.slice(i, i + tokenLength));
          }
        }
      });
      this._searchTokens = new Set(Array.from(wordSet).concat(tokens));
    }, 50);
  }

  /**
   * Bring the focused / selected element into the visible part of the screen.
   * `scrollIntoViewIfNeeded` is a non-standard (Blink) API; we feature-detect it.
   * @private
   */
  private _scrollIntoView(): void {
    const el = this as unknown as { scrollIntoViewIfNeeded?: () => void };
    if (typeof el.scrollIntoViewIfNeeded === "function") {
      // workaround for trees with long render cycles
      setTimeout(() => el.scrollIntoViewIfNeeded?.(), 160);
    }
  }

  /**
   * Toggles open / close on double click.
   * @private
   */
  private readonly _toggle = (): void => {
    if (this._fieldNode !== undefined) {
      this._fieldNode.open.value = !this._fieldNode.open.value;
    }
  };

  /**
   * Emits the `tree-select` intent for the host tree.
   * @private
   */
  private readonly _labelClick = (): void => {
    if (this._fieldNode !== undefined) {
      this.dispatchEvent(new CustomEvent("tree-select", { detail: this._fieldNode, bubbles: true, composed: true }));
    }
  };

  /**
   * Keyboard equivalent of {@link _labelClick}: Enter / Space selects the node.
   * @private
   */
  private readonly _labelKeydown = (e: KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._labelClick();
    }
  };

  static override styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      cursor: pointer;
      font-weight: 400;
      user-select: none;
      position: relative;
      transition: color 0.2s, background-color 0.2s;
    }

    :host([hidden]) {
      display: none;
    }

    :host([inedit]) {
      font-style: italic;
    }

    :host([haserror]),
    :host([selected][haserror]) {
      color: var(--sapNegativeColor, #b00);
    }

    :host([haserror]) ui5-icon {
      animation: error-pulse 5s;
    }

    .row {
      display: flex;
      align-items: center;
    }

    .label {
      flex: 1;
      white-space: nowrap;
      font-size: 16px;
      letter-spacing: 0.15px;
      font-weight: 400;
      display: flex;
      align-items: center;
    }

    .desc {
      font-size: smaller;
      white-space: nowrap;
    }

    :host([selected]) .oc {
      color: var(--sapList_Active_Background);
    }

    :host([searchmatch]) {
      color: var(--sapList_Active_Background);
    }

    ui5-icon[error] {
      fill: var(--sapNegativeColor, #ffebeb);
      animation: error-pulse 5s;
    }

    ui5-icon {
      margin-right: 0.5rem;
    }

    @keyframes error-pulse {
      0% {
        fill: var(--sapNegativeColor, #ffebeb);
      }
      12% {
        fill: var(--sapErrorBackground, #b00);
      }
      24% {
        fill: var(--sapNegativeColor, #ffebeb);
      }
      36% {
        fill: var(--sapErrorBackground, #b00);
      }
      48% {
        fill: var(--sapNegativeColor, #ffebeb);
      }
      94% {
        fill: var(--sapNegativeColor, #ffebeb);
      }
    }

    :host([isheader]) {
      height: 64px;
      margin: 0;
      min-width: 100%;
    }

    :host([isheader]) ui5-icon {
      width: 20px;
    }

    :host([isheader]) furo-ui5-bool-icon {
      display: none;
    }

    :host([isheader]) .desc {
      font-size: 14px;
      letter-spacing: 0.1px;
      color: var(--sapNeutralTextColor, #6a6d70);
      line-height: 30px;
      display: block;
      box-sizing: border-box;
    }

    :host([isheader]) .label {
      font-weight: unset;
      position: relative;
      font-size: 20px;
      height: 32px;
      margin: 0;
      display: block;
      letter-spacing: 0.15px;
    }

    :host([is-group-label]) {
      border-top: 1px solid var(--sapList_GroupHeaderBorderColor, #00d9d9);
      background: var(--sapList_GroupHeaderBackground);
      margin-top: 0.25rem;
      padding-top: 0.25rem;
      border-radius: 0;
    }

    :host([is-group-label]) .label {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
      letter-spacing: 0.1px;
      color: var(--sapList_GroupHeaderTextColor, #32363a);
    }

    .indentation {
      height: 40px;
    }

    .indentation-0 .indentation {
      width: var(--tree-indentation-0, 0);
    }
    .indentation-1 .indentation {
      width: var(--tree-indentation-1, 16px);
    }
    .indentation-2 .indentation {
      width: var(--tree-indentation-2, 32px);
    }
    .indentation-3 .indentation {
      width: var(--tree-indentation-3, 48px);
    }
    .indentation-4 .indentation {
      width: var(--tree-indentation-4, 56px);
    }
    .indentation-5 .indentation {
      width: var(--tree-indentation-5, 64px);
    }
    .indentation-6 .indentation {
      width: var(--tree-indentation-6, 72px);
    }
    .indentation-7 .indentation {
      width: var(--tree-indentation-7, 80px);
    }
    .indentation-8 .indentation {
      width: var(--tree-indentation-8, 88px);
    }
    .indentation-9 .indentation {
      width: var(--tree-indentation-9, 92px);
    }
    .indentation-10 .indentation {
      width: var(--tree-indentation-10, 96px);
    }
    .indentation-11 .indentation {
      width: var(--tree-indentation-11, 100px);
    }
    .indentation-12 .indentation {
      width: var(--tree-indentation-12, 104px);
    }

    furo-ui5-bool-icon {
      --_ui5-tree-toggle-icon-size: 1rem;
      margin-right: 0.5rem;
    }

    span {
      line-height: 38px;
    }
  `;

  override render() {
    const node = this._fieldNode;
    if (node === undefined) {
      return nothing;
    }
    // language=HTML
    return html`
      <div class="row indentation-${this.indentation}" @dblclick="${this._toggle}">
        <div class="indentation" @click="${this._labelClick}" @keydown="${this._labelKeydown}"></div>

        <furo-ui5-bool-icon ?hidden="${node.children.length === 0}" .model="${node.open}"></furo-ui5-bool-icon>

        <div class="label" @click="${this._labelClick}" @keydown="${this._labelKeydown}">
          <ui5-icon ?hidden="${this.noicon}" name="${this._icon}" ?error="${node.hasError.value}"></ui5-icon>
          <span>${node.displayName.value}<span class="desc">${node.secondaryText.value}</span></span>
        </div>
      </div>
    `;
  }
}

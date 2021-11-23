import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-horizontal-flex';
import '../furo-ui5-bool-icon.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/border.js';

import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';

/**
 * `furo-tree-item`
 * todo Describe your element
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
 * @summary todo shortdescription
 * @element
 * @appliesMixin FBP
 */
export class FuroUi5TreeItem extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.hidden = true;
    this.isGroupLabel = false;
    this.indentation = 0;
    this._icon = 'border';
  }

  search(event) {
    if (!this.hidden) {
      const term = event.term.toLowerCase();
      // do not search empty searchTerm
      if (term.length === 0) {
        return;
      }

      const searchTokens = term.split(' ');

      let hasResults = true;
      searchTokens.forEach(token => {
        let t = token;
        if (t.length > 0) {
          if (t.length === 1) {
            // single letter search first letter of word
            t += '.*$';
          }
          hasResults = hasResults && this._searchTokens.has(t);
        }
      });

      if (hasResults) {
        // append fieldnode to result set (used in furo-ui5-tree.js)
        event.results.push(this.fieldNode);
      }
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      hidden: { type: Boolean, reflect: true },
      focused: { type: Boolean, reflect: true },
      searchmatch: { type: Boolean, reflect: true },
      inedit: { type: Boolean, reflect: true },
      haserror: { type: Boolean, reflect: true },
      selected: { type: Boolean, reflect: true },
      noicon: { type: Boolean },
      isGroupLabel: {
        type: Boolean,
        reflect: true,
        attribute: 'is-group-label',
      },
    };
  }

  // re render, build search tokens
  _updateItem() {
    this.requestUpdate();

    // build index later (50ms), a human user can not react earlyer
    setTimeout(() => {
      let tmpArr = [];
      this.fieldNode.__childNodes
        .filter(
          field => typeof field._value === 'string' // maybe change to fields-to-index list
        )
        .forEach(field => {
          tmpArr = tmpArr.concat(field._value.toLowerCase().split(/\W+/));
        });
      const s = new Set(tmpArr);
      // tokenize
      tmpArr = [];
      s.forEach(word => {
        // first letter
        tmpArr.push(`${word.substr(0, 1)}.*$`);
        let l;
        for (let tokenLength = 2; tokenLength < word.length; tokenLength += 1) {
          l = word.length - tokenLength + 1;
          for (let i = 0; i < l; i += 1) {
            tmpArr.push(word.substr(i, tokenLength));
          }
        }
      });
      this._searchTokens = new Set(Array.from(s).concat(tmpArr));
    }, 50);
  }

  bindData(fieldNode) {
    this.fieldNode = fieldNode;
    this.indentation = this.fieldNode.depth;
    this.fieldNode._isHidden = true;

    if (fieldNode.is_group_label) {
      this.isGroupLabel = fieldNode.is_group_label._value;
    }

    if (!fieldNode.icon._value) {
      this._icon = 'border';
      this.noicon = true;
    } else {
      this._icon = fieldNode.icon._value;
    }

    // reflect visible close state to attr
    this.fieldNode.addEventListener('ancestor-invisible', () => {
      this.hidden = true;
      this.fieldNode._isHidden = true;
    });

    // reflect visible close state to attr
    this.fieldNode.addEventListener('ancestor-visible', () => {
      if (this.fieldNode.__parentNode.__parentNode.open._value) {
        this.hidden = false;
        this.fieldNode._isHidden = false;
      }
    });

    // for elements that are already ready
    this._updateItem();

    this.fieldNode.addEventListener('branch-value-changed', e => {
      // for elements that are updated later
      if (e.detail.__parentNode === this.fieldNode) {
        this._updateItem();
      }
    });

    this.fieldNode.addEventListener('modified', () => {
      this.inedit = true;
    });

    this.fieldNode.addEventListener('cleared', () => {
      this.inedit = false;
      this.haserror = false;
    });

    this.fieldNode.addEventListener('has-error', () => {
      this.haserror = true;
    });

    // listen to open close state
    this.fieldNode.open.addEventListener('field-value-changed', e => {
      e.cancelBubble = true;
      if (e.detail._value === false) {
        e.detail.__parentNode.children.broadcastEvent(
          new NodeEvent('ancestor-invisible', e.detail.__parentNode)
        );
      } else {
        e.detail.__parentNode.children.broadcastEvent(
          new NodeEvent('ancestor-visible', e.detail.__parentNode)
        );
      }
    });

    // make level 0  node visible
    if (this.fieldNode._isRoot === true) {
      this.hidden = false;
      this.fieldNode._isHidden = false;
      if (this.fieldNode._rootAsHeader) {
        this.setAttribute('isheader', '');
      }
    }

    this._FBPTriggerWire('--fieldOpen', this.fieldNode.open);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this._FBPAddWireHook('--labelClicked', () => {
      this.fieldNode.selectItem();
    });

    this.fieldNode.addEventListener('tree-node-unselection-requested', () => {
      this.selected = false;
      this.fieldNode._isSelected = false;
    });

    this.fieldNode.addEventListener('tree-node-blur-requested', () => {
      this.focused = false;
    });

    this.__addNodeFocusedListener();

    this.__addNodeSelectedListener();

    this.__addSearchListeners();

    // This item is  in the search results
    this.fieldNode.addEventListener('field-value-changed', () => {
      this.requestUpdate();
    });
  }

  /**
   * add listeners for search matches and non matches
   * @private
   */
  __addSearchListeners() {
    // This item is not or no more in the search results
    this.fieldNode.addEventListener('search-didnt-match', () => {
      this.searchmatch = false;
    });

    // This item is  in the search results
    this.fieldNode.addEventListener('search-matched', () => {
      this.searchmatch = true;
    });
  }

  __addNodeSelectedListener() {
    this.fieldNode.addEventListener('this-node-selected', () => {
      this.selected = true;
      this.fieldNode._isSelected = true;
      if (this.scrollIntoViewIfNeeded) {
        // workaround for trees with long render cycles. But this behaviour feels better then direct scrolling, so why not
        setTimeout(() => {
          this.scrollIntoViewIfNeeded();
        }, 160);
      }
    });
  }

  /**
   * bring the focused element in the visible part of the screen (scroll)
   * @private
   */
  __addNodeFocusedListener() {
    this.fieldNode.addEventListener('this-node-focused', () => {
      this.focused = true;
      // this.scrollIntoViewIfNeeded();
      if (this.scrollIntoViewIfNeeded) {
        // workaround for trees with long render cycles. But this behaviour feels better then direct scrolling, so why not
        setTimeout(() => {
          this.scrollIntoViewIfNeeded();
        }, 160);
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
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

      .label {
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
      furo-horizontal-flex {
        align-items: center;
      }

      furo-ui5-bool-icon {
        margin-right: 0.5rem;
      }
      span {
        line-height: 38px;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex
        class="indentation-${this.indentation}"
        @-dblclick="--dblclicked"
      >
        <div class="indentation" @-click="--labelClicked"></div>

        <furo-ui5-bool-icon
          ?hidden="${!this.fieldNode.children.repeats.length}"
          ƒ-toggle="--dblclicked"
          ƒ-bind-data="--fieldOpen"
        ></furo-ui5-bool-icon>

        <div flex class="label" @-click="--labelClicked">
          <ui5-icon
            ?hidden="${this.noicon}"
            name="${this._icon}"
            ?error="${this.fieldNode.has_error._value}"
          ></ui5-icon>
          <span>
            ${this.fieldNode.display_name}
            <span class="desc">${this.fieldNode.secondary_text}</span></span
          >
        </div>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-tree-item', FuroUi5TreeItem);

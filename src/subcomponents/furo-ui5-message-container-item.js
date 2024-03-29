import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@furo/data/src/furo-type-renderer.js';

/**
 * `furo-ui5-message-container-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5MessageContainerItem extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      hidden: { type: Boolean, reflect: true },
    };
  }

  /**
   * bindData Bind a fielNode
   * @public
   * @param fieldnode
   */
  bindData(fieldnode) {
    this._field = fieldnode;
    this._FBPTriggerWire('|--bindData', fieldnode);
  }

  filter(kind) {
    const type = this._field['@type']._value.replace(/.*\//, '');
    switch (kind) {
      case 'all':
        this.hidden = false;
        break;

      case 'error':
        this.hidden =
          !(
            type === 'furo.ErrorMessage' ||
            type === 'google.rpc.BadRequest' ||
            type === 'google.rpc.LocalizedMessage'
          ) && type !== 'furo.MessageContainerGrouplabel';
        break;

      case 'confirmation':
        this.hidden =
          type !== 'furo.ConfirmationMessage' &&
          type !== 'furo.MessageContainerGrouplabel';
        break;

      case 'warning':
        this.hidden =
          type !== 'furo.WarningMessage' &&
          type !== 'furo.MessageContainerGrouplabel';
        break;

      case 'success':
        this.hidden =
          type !== 'furo.SuccessMessage' &&
          type !== 'furo.MessageContainerGrouplabel';
        break;

      case 'information':
        this.hidden =
          !(type === 'furo.InformationMessage') &&
          type !== 'furo.MessageContainerGrouplabel';
        break;

      default:
        this.hidden = false;
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
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
      }

      :host([hidden]) {
        display: none;
      }

      .Negative {
        color: var(--sapButton_Reject_TextColor);
      }

      .Attention {
        color: var(--sapButton_Attention_BorderColor);
      }

      .Information {
        color: var(--sapButton_Information_BorderColor);
      }

      .Positive {
        color: var(--sapButton_Accept_TextColor);
      }

      furo-horizontal-flex {
        min-height: 43px;
        box-sizing: border-box;
        align-items: center;
        padding: 0.5rem 1rem;
        background: var(--ui5-listitem-background-color);
        border-bottom: var(--ui5-listitem-border-bottom);
        color: var(--sapList_TextColor);

        padding-left: var(--FuroUi5MediaSizeIndentationLeft, 1rem);
        padding-right: var(--FuroUi5MediaSizeIndentationRight, 1rem);
      }

      .groupheader {
        border-bottom: var(--ui5-listitem-border-bottom);
        background: var(--ui5-group-header-listitem-background-color);
        color: var(--sapList_TableGroupHeaderTextColor);
        padding: 1rem 1rem 0.5rem 1rem;
        font-size: var(--sapFontHeader6Size);
        font-weight: 800;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    const type = this._field['@type']._value.replace(/.*\//, '');
    const ret = [];

    switch (type) {
      case 'furo.MessageContainerGrouplabel':
        return html` <div
          class="groupheader"
          set-inner-text="|--bindData(*.title)"
        ></div>`;

      case 'furo.ConfirmationMessage':
        return html` <furo-horizontal-flex space>
          <ui5-icon name="approvals"></ui5-icon>
          <furo-form-layouter flex one>
            <ui5-title
              level="H5"
              set-inner-text="|--bindData(*.description)"
            ></ui5-title>
            <furo-ui5-markdown
              fn-bind-data="|--bindData(*.message)"
            ></furo-ui5-markdown>
            <furo-type-renderer
              context="celledit"
              fn-bind-data="|--bindData(*.user_response)"
            ></furo-type-renderer>
          </furo-form-layouter>
        </furo-horizontal-flex>`;

      case 'furo.ErrorMessage':
        if (this._field.message._value !== '') {
          ret.push(html`<furo-horizontal-flex space>
            <ui5-icon name="error" class="Negative"></ui5-icon>
            <furo-ui5-markdown
              fn-bind-data="|--bindData(*.message)"
            ></furo-ui5-markdown>
          </furo-horizontal-flex>`);
        }
        ret.push(html`
          <furo-data-flow-repeat fn-bind-data="|--bindData(*.fields)">
            <template>
              <furo-horizontal-flex space>
                <ui5-icon name="message-error" class="Negative"></ui5-icon>
                <furo-form-layouter flex one>
                  <ui5-link
                    set-inner-text="--init(*.description)"
                    at-ui5-click="^^field-focus-requested(item), ^^message-item-clicked(item)"
                  ></ui5-link>
                  <ui5-label
                    set-title="--init(*.field)"
                    set-inner-text="--init(*._targetlabel)"
                  ></ui5-label>
                  <furo-ui5-markdown
                    fn-bind-data="--init(*.message)"
                  ></furo-ui5-markdown>
                  <furo-type-renderer
                    context="celledit"
                    fn-bind-data="--init(*.user_response)"
                  ></furo-type-renderer>
                </furo-form-layouter>
              </furo-horizontal-flex>
            </template>
          </furo-data-flow-repeat>
        `);
        return ret;

      case 'furo.SuccessMessage':
        if (this._field.message._value !== '') {
          ret.push(html`<furo-horizontal-flex space>
            <ui5-icon name="sys-enter-2" class="Positive"></ui5-icon>
            <furo-ui5-markdown
              fn-bind-data="|--bindData(*.message)"
            ></furo-ui5-markdown>
          </furo-horizontal-flex>`);
        }
        ret.push(html` <furo-data-flow-repeat
          fn-bind-data="|--bindData(*.fields)"
        >
          <template>
            <furo-horizontal-flex space>
              <ui5-icon name="message-success" class="Positive"></ui5-icon>

              <furo-form-layouter flex one>
                <ui5-link
                  set-inner-text="--init(*.description)"
                  at-ui5-click="^^field-focus-requested(item), ^^message-item-clicked(item)"
                ></ui5-link>
                <ui5-label
                  set-title="--init(*.field)"
                  set-inner-text="--init(*._targetlabel)"
                ></ui5-label>
                <furo-ui5-markdown
                  fn-bind-data="--init(*.message)"
                ></furo-ui5-markdown>
                <furo-type-renderer
                  context="celledit"
                  fn-bind-data="--init(*.user_response)"
                ></furo-type-renderer>
              </furo-form-layouter>
            </furo-horizontal-flex>
          </template>
        </furo-data-flow-repeat>`);
        return ret;

      case 'furo.WarningMessage':
        if (this._field.message._value !== '') {
          ret.push(html`<furo-horizontal-flex space>
            <ui5-icon name="alert" class="Attention"></ui5-icon>
            <furo-ui5-markdown
              fn-bind-data="|--bindData(*.message)"
            ></furo-ui5-markdown>
          </furo-horizontal-flex>`);
        }
        ret.push(html` <furo-data-flow-repeat
          fn-bind-data="|--bindData(*.fields)"
        >
          <template>
            <furo-horizontal-flex space>
              <ui5-icon name="message-warning" class="Attention"></ui5-icon>

              <furo-form-layouter flex one>
                <ui5-link
                  set-inner-text="--init(*.description)"
                  at-ui5-click="^^field-focus-requested(item), ^^message-item-clicked(item)"
                ></ui5-link>
                <ui5-label
                  set-title="--init(*.field)"
                  set-inner-text="--init(*._targetlabel)"
                ></ui5-label>
                <furo-ui5-markdown
                  fn-bind-data="--init(*.message)"
                ></furo-ui5-markdown>
                <furo-type-renderer
                  context="celledit"
                  fn-bind-data="--init(*.user_response)"
                ></furo-type-renderer>
              </furo-form-layouter>
            </furo-horizontal-flex>
          </template>
        </furo-data-flow-repeat>`);
        return ret;

      case 'furo.InformationMessage':
        if (this._field.message._value !== '') {
          ret.push(html`<furo-horizontal-flex space>
            <ui5-icon name="information" class="Information"></ui5-icon>
            <furo-ui5-markdown
              fn-bind-data="|--bindData(*.message)"
            ></furo-ui5-markdown>
          </furo-horizontal-flex>`);
        }
        ret.push(html` <furo-data-flow-repeat
          fn-bind-data="|--bindData(*.fields)"
        >
          <template>
            <furo-horizontal-flex space>
              <ui5-icon
                name="message-information"
                class="Information"
              ></ui5-icon>

              <furo-form-layouter flex one>
                <ui5-link
                  set-inner-text="--init(*.description)"
                  at-ui5-click="^^field-focus-requested(item), ^^message-item-clicked(item)"
                ></ui5-link>
                <ui5-label
                  set-title="--init(*.field)"
                  set-inner-text="--init(*._targetlabel)"
                ></ui5-label>
                <furo-ui5-markdown
                  fn-bind-data="--init(*.message)"
                ></furo-ui5-markdown>
                <furo-type-renderer
                  context="celledit"
                  fn-bind-data="--init(*.user_response)"
                ></furo-type-renderer>
              </furo-form-layouter>
            </furo-horizontal-flex>
          </template>
        </furo-data-flow-repeat>`);
        return ret;

      case 'google.rpc.BadRequest':
        return html` <furo-data-flow-repeat
          fn-bind-data="|--bindData(*.field_violations)"
        >
          <template>
            <furo-horizontal-flex space>
              <ui5-icon name="message-error" class="Negative"></ui5-icon>

              <furo-form-layouter flex one>
                <ui5-link
                  set-inner-text="--init(*.description)"
                  at-ui5-click="^^field-focus-requested(item), ^^message-item-clicked(item)"
                ></ui5-link>
                <ui5-label
                  set-title="--init(*.field)"
                  set-inner-text="--init(*._targetlabel)"
                ></ui5-label>
              </furo-form-layouter>
            </furo-horizontal-flex>
          </template>
        </furo-data-flow-repeat>`;

      case 'google.rpc.LocalizedMessage':
        return html` <furo-horizontal-flex space>
          <ui5-icon name="error" class="Negative"></ui5-icon>

          <furo-ui5-markdown
            fn-bind-data="|--bindData(*.message)"
          ></furo-ui5-markdown>
        </furo-horizontal-flex>`;

      default:
        return html``;
    }
  }
}

window.customElements.define(
  'furo-ui5-message-container-item',
  FuroUi5MessageContainerItem
);

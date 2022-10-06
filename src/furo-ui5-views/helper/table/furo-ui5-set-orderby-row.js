import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `FuroUi5SetOrderbyRow` is a helper component
 *
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5SetOrderbyRow extends FBP(LitElement) {
  injectData(d) {
    this.data = JSON.parse(JSON.stringify(d));
    this.fieldId = this.data.id;
    this.data.options.unshift({
      id: this.data.id,
      display_name: this.data.display_name,
    });

    this._FBPTriggerWire('|--data', this.data);
    this.requestUpdate();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    /**
     * Register hook on wire --ascDescChanged to
     * switch asc desc
     */
    this._FBPAddWireHook('--ascDescChanged', e => {
      this.TableColumnSortRowDO.descending._value =
        e.selectedItem.id === 'desc';
    });

    /**
     * Register hook on wire --dataChanged to
     * update the parent
     */
    this._FBPAddWireHook('--dataChanged', e => {
      /**
       * @event orderby-row-changed
       */
      const customEvent = new Event('orderby-row-changed', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = e._value;
      this.dispatchEvent(customEvent);
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
        min-height: var(--ui5_table_row_height);
        background-color: var(--sapList_Background);
        color: var(--sapList_TextColor);
        border-bottom: 1px solid var(--sapList_BorderColor);
        padding-left: var(--FuroUi5MediaSizeIndentationLeft, 2rem);
        padding-right: var(--FuroUi5MediaSizeIndentationRight, 2rem);
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none;
      }

      :host(:first-of-type) .up {
        display: none;
      }

      :host(:last-of-type) .down {
        display: none;
      }

      :host(:focus-within) ui5-button {
        display: inline-block;
      }

      :host(:hover) ui5-button {
        display: inline-block;
      }

      ui5-button {
        display: none;
      }

      .btns {
        padding: 0;
        min-width: 80px;
        text-align: right;
      }

      furo-horizontal-flex {
        height: var(--ui5_table_row_height);
        align-items: center;
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
    return html`
      <furo-horizontal-flex space>
        <furo-ui5-select
          fn-bind-options="--DO(*.options)"
          fn-bind-data="--DO(*.id)"
        ></furo-ui5-select>
        <ui5-segmented-button at-selection-change="--ascDescChanged">
          <ui5-segmented-button-item
            id="asc"
            icon="sort-ascending"
            ?pressed="${!this.data.descending}"
          ></ui5-segmented-button-item>
          <ui5-segmented-button-item
            id="desc"
            icon="sort-descending"
            ?pressed="${this.data.descending}"
          ></ui5-segmented-button-item>
        </ui5-segmented-button>
        <div flex></div>

        <div class="btns">
          <ui5-button
            class="up"
            design="Transparent"
            icon="navigation-up-arrow"
            at-click="^^move-up(index)"
          ></ui5-button>
          <ui5-button
            class="down"
            design="Transparent"
            icon="navigation-down-arrow"
            at-click="^^move-down(index)"
          ></ui5-button>
        </div>

        <furo-ui5-button
          at-click="^^delete-sort-clicked(index)"
          icon="delete"
          design="Transparent"
        ></furo-ui5-button>
      </furo-horizontal-flex>

      <furo-data-object
        type="furo.view.TableColumnSortRow"
        at-object-ready="--DO,((TableColumnSortRowDO))"
        at-data-changed-after-inject="--dataChanged"
        fn-inject-raw="|--data"
      ></furo-data-object>
    `;
  }
}

window.customElements.define('furo-ui5-set-orderby-row', FuroUi5SetOrderbyRow);

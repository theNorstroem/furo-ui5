import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/ResponsivePopover.js';
import './dialog-manage-views.js';
import '@furo/data/src/furo-data-flow-repeat.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '../furo-ui5-dialog.js';

/**
 * `furo-ui5-views` allows you to manage custom views. This includes filter settings and table orders.
 *
 * Tab orders are not implemented at the moment.
 *
 *
 *
 *
 *
 * @summary Manage views
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5Views extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = 'My Views';
    this.saveAsHeaderText = 'Save View';
    this.checkoxSetDefault = 'Set as Default';
    this.checkoxApplyAutomatically = 'Apply Automatically';
    this.manageButtonText = 'Manage';
    this.saveButtonText = 'Save';
    this.saveAsButtonText = 'Save As';
    this.cancelButtonText = 'Cancel';

    this.manageViewHeaderText = 'Manage Views';
    this.placeholderSearch = 'Search';
    this.colheaderDefault = 'Default';
    this.colheaderApply = 'Apply Automatically';
    this.colheaderCreator = 'Created By';
    this.colheaderView = 'View';
    this.okButtonText = 'Ok';
  }

  /**
   * show opens the view
   * @public
   * @param ref
   */
  showAt(ref) {
    this._FBPTriggerWire('|--show', ref);
  }

  /**
   * set the ref to the filter form
   * @param ref
   */
  setFilterRef(ref) {
    this._filterForm = ref;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * This is the id vor the view, this key is used to store the search filters in the session storage.
       */
      viewId: { type: String, attribute: 'view-id' },
      /**
       * Title of the dialog for "views"
       */
      headerText: { type: String, attribute: 'header-text' },
      /**
       * Title of the "save as" dialog.
       */
      saveAsHeaderText: { type: String, attribute: 'save-as-header-text' },
      /**
       * Checkbox label for set as default on save as dialog.
       */
      checkoxSetDefault: { type: String, attribute: 'checkbox-set-default' },
      /**
       * Checkbox label for apply automatically on save as dialog.
       */
      checkoxApplyAutomatically: {
        type: String,
        attribute: 'checkbox-apply-automatically',
      },
      /**
       * Button label to open the manage view dialog.
       */
      manageButtonText: { type: String, attribute: 'manage-button-text' },
      /**
       * Button label for save.
       */
      saveButtonText: { type: String, attribute: 'save-button-text' },
      /**
       * Button label for save as.
       */
      saveAsButtonText: { type: String, attribute: 'save-as-button-text' },
      /**
       * Button label for cancel action.
       */
      cancelButtonText: { type: String, attribute: 'cancel-button-text' },
      /**
       * Title of the manage-view dialog.
       */
      manageViewHeaderText: {
        type: String,
        attribute: 'manage-view-header-text',
      },
      /**
       * placeholder for search fields.
       */
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
      /**
       * Column header for "default".
       */
      colheaderDefault: { type: String, attribute: 'colheader-default' },
      /**
       * Column header for "apply automatically".
       */
      colheaderApply: { type: String, attribute: 'colheader-apply' },
      /**
       * Column header for "created by".
       */
      colheaderCreator: { type: String, attribute: 'colheader-creator' },
      /**
       * Column header for "view name".
       */
      colheaderView: { type: String, attribute: 'colheader-view' },
      /**
       * Button label for "Ok" action
       */
      okButtonText: { type: String, attribute: 'ok-button-text' },
    };
  }

  /**
   * inject the default settings.
   * @param data
   */
  injectDefault(data) {
    this._data = data;

    // merge with localestorage or other data source data here
    const d = this.loadData();
    // set initial settings item with timeout because set-filter needs the change event
    if (d) {
      try {
        const vd = JSON.parse(d);
        vd.views.forEach(rec => {
          if (!rec.editable) {
            // apply std and fav to this._data
            const i = this._data.views.filter(f => f.id === rec.id);
            if (i.length > 0) {
              i[0].auto_apply = rec.auto_apply;
              i[0].is_standard = rec.is_standard;
              i[0].is_favorite = rec.is_favorite;
            }
          } else {
            this._data.views.push(rec);
          }
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('could not parse data');
      }
    }

    this._FBPTriggerWire('--sd', this._data);

    // read last saved filter
    const init = sessionStorage.getItem(this.viewId);
    setTimeout(() => {
      // set initial settings item with timeout because set-filter needs the change event
      if (init) {
        try {
          this._FBPTriggerWire('|--initialView', JSON.parse(init));
        } catch (e) {
          this._FBPTriggerWire(
            '|--initialView',
            this._data.views.filter(view => view.is_standard)[0]
          );
        }
      } else {
        this._FBPTriggerWire(
          '|--initialView',
          this._data.views.filter(view => view.is_standard)[0]
        );
      }
    }, 1);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //  this._FBPTraceWires()

    // for the dropdown list
    const reftarget = this.shadowRoot.getElementById('list');
    this._FBPTriggerWire('|--reftarget', reftarget);

    /**
     * Register hook on wire --persViewDOInjected to
     * filter the favorites for the dropown
     */
    this._FBPAddWireHook('--persViewDOInjected', fieldnode => {
      const favs = fieldnode._value;
      favs.views = favs.views.filter(e => e.is_favorite);
      this._FBPTriggerWire('|--favoriteViews', favs);
    });

    /**
     * Register hook on wire --settingsChanged to
     * enable the save button
     */
    this._FBPAddWireHook('--settingsChanged', () => {
      if (this.CurrentViewSettings.editable._value === true) {
        // enable save and save as buttons
        this._FBPTriggerWire('|-save', '');
      }
      this._FBPTriggerWire('|-saveAs', '');
    });

    /**
     * Register hook on wire --saveClicked to
     * save the current view settings
     */
    this._FBPAddWireHook('--saveClicked', () => {
      const current = this.CurrentViewSettings._value;
      this._data.views.forEach((e, i) => {
        if (e.id === current.id) {
          this._data.views[i] = current;
        }
      });

      this._FBPTriggerWire('--sd', this._data);

      this.saveData(this._data);
    });

    /**
     * Register hook on wire --saveClicked to
     * save the current view settings
     */
    this._FBPAddWireHook('--saveViewAsValid', () => {
      const current = this.CurrentViewSettings._value;
      current.name = this._saveAsDialog.name._value;
      current.id = Date.now();
      current.is_standard = this._saveAsDialog.is_standard._value;
      current.auto_apply = this._saveAsDialog.auto_apply._value;
      current.editable = true;
      current.created_by = '';
      // remove standard from other items
      if (current.is_standard) {
        this._data.views.forEach(f => {
          // eslint-disable-next-line no-param-reassign
          f.is_standard = false;
        });
      }
      this._data.views.push(current);

      this._FBPTriggerWire('--sd', this._data);
      this.saveData(this._data);
      this._FBPTriggerWire('|--initialView', current);

      // update the favs dropdown
      const favs = this._data;
      favs.views = favs.views.filter(e => e.is_favorite);
      this._FBPTriggerWire('|--favoriteViews', favs);
    });

    /**
     * Register hook on wire --settingsChanged to
     * store the filter data session storage
     */
    this._FBPAddWireHook('--settingsChanged', () => {
      sessionStorage.setItem(
        this.viewId,
        JSON.stringify(this.CurrentViewSettings._value)
      );
    });

    /**
     * Register hook on wire --viewSelected to
     * update the data in the session storrage
     */
    this._FBPAddWireHook('--viewSelected', e => {
      sessionStorage.setItem(this.viewId, JSON.stringify(e.item.node._value));
      // sort and hide the fields

      this._updateFilterForm();
    });

    /**
     * Register hook on wire --settingsInjected to
     * dispatch a raw-filter-data event
     */
    this._FBPAddWireHook('--settingsInjected', e => {
      const value = e.filter_object._value;

      delete value['@type'];
      /**
       * @event raw-filter-data
       * Fired when new filter settings are applied
       * detail payload:
       */
      const customEvent = new Event('raw-filter-data', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = value;
      this.dispatchEvent(customEvent);
      this._updateFilterForm();

      setTimeout(() => {
        if (e.auto_apply._value === true) {
          // trigger a search-triggered
          this.dispatchEvent(
            new Event('search-triggered', { composed: true, bubbles: true })
          );
        }
      }, 1);
    });

    this._FBPAddWireHook('--formUpdateRequested', () => {
      this._updateFilterForm();
    });

    /**
     * Register hook on wire --okOnManageClicked to
     * save the data
     */
    this._FBPAddWireHook('--okOnManageClicked', () => {
      this.saveData(this.managedData._value);
      this._FBPTriggerWire('|--managedDataSaved', null);

      const favs = this.managedData._value;
      favs.views = favs.views.filter(e => e.is_favorite);
      this._FBPTriggerWire('|--favoriteViews', favs);
    });
  }

  _updateFilterForm() {
    let lastE;
    this.CurrentViewSettings.filter_settings._value.forEach(n => {
      if (lastE) {
        lastE.after(this._filterForm.children[n.field_name]);
      }
      lastE = this._filterForm.children[n.field_name];
      if (n.show) {
        this._filterForm.children[n.field_name].removeAttribute('hidden');
      } else {
        this._filterForm.children[n.field_name].setAttribute('hidden', '');
      }
    });
  }

  loadData() {
    return localStorage.getItem(this.viewId);
  }

  saveData(data) {
    localStorage.setItem(this.viewId, JSON.stringify(data));
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

      ui5-responsive-popover {
        --_ui5_popup_content_padding_s: 0;
        --_ui5_popup_content_padding_m_l: 0;
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
      <ui5-responsive-popover
        fn-show-at="|--show"
        fn-close="--saveClicked, --saveAsClicked, --viewSelected, --manageClicked"
        placement-type="Bottom"
        header-text="${this.headerText}"
      >
        <ui5-list id="list" mode="SingleSelect" at-item-click="--viewSelected">
        </ui5-list>

        <furo-data-flow-repeat
          fn-set-insert-ref="|--reftarget"
          fn-bind-data="--favoriteViewsDO(*.views)"
        >
          <template>
            <ui5-li
              set-inner-text="--init(*.name._value)"
              set-node="--init"
            ></ui5-li>
          </template>
        </furo-data-flow-repeat>

        <furo-horizontal-flex
          space
          style="height:48px; align-items: center; min-width: 130px;"
          slot="footer"
        >
          <div flex></div>
          <furo-ui5-button
            hidden
            fn-hide="--viewSelected"
            fn-show="|-save"
            design="Emphasized"
            at-click="--saveClicked"
            >${this.saveButtonText}
          </furo-ui5-button>
          <furo-ui5-button
            hidden
            fn-hide="--viewSelected"
            fn-show="|-saveAs"
            design="Transparent"
            at-click="--saveAsClicked"
            >${this.saveAsButtonText}
          </furo-ui5-button>
          <furo-ui5-button design="Transparent" at-click="--manageClicked"
            >${this.manageButtonText}
          </furo-ui5-button>
        </furo-horizontal-flex>
      </ui5-responsive-popover>

      <furo-ui5-dialog
        style="--_ui5_popup_content_padding_s: 0;--_ui5_popup_content_padding_m_l: 0;"
        header-text="${this.manageViewHeaderText}"
        fn-show="--manageClicked"
        fn-close="|--managedDataSaved, --abortClicked"
        at-ok-clicked="--okOnManageClicked"
        at-abort-clicked="--abortClicked"
      >
        <dialog-manage-views
          cancel-button-text="${this.cancelButtonText}"
          manage-view-header-text="${this.manageViewHeaderText}"
          placeholder-search="${this.placeholderSearch}"
          colheader-default="${this.colheaderDefault}"
          colheader-apply="${this.colheaderApply}"
          colheader-creator="${this.colheaderCreator}"
          colheader-view="${this.colheaderView}"
          ok-button-text="${this.okButtonText}"
          fn-bind-data="--persViewDO"
        ></dialog-manage-views>
      </furo-ui5-dialog>

      <furo-ui5-dialog
        fn-show="--saveAsClicked"
        at-after-open="--saveDialogOpened"
        fn-close="--abortClk, |--initialView"
        header-text="${this.saveAsHeaderText}"
      >
        <furo-form-layouter>
          <ui5-label>${this.colheaderView}</ui5-label>

          <furo-ui5-text-input
            fn-focus="--saveDialogOpened"
            fn-bind-data="--viewNameDO(*.name)"
            placeholder=" "
          ></furo-ui5-text-input>
          <furo-ui5-checkbox-input
            fn-bind-data="--viewNameDO(*.is_standard)"
            text="${this.checkoxSetDefault}"
          ></furo-ui5-checkbox-input>
          <furo-ui5-checkbox-input
            fn-bind-data="--viewNameDO(*.auto_apply)"
            text="${this.checkoxApplyAutomatically}"
          ></furo-ui5-checkbox-input>
        </furo-form-layouter>

        <furo-horizontal-flex space style="align-items: center" slot="footer">
          <div flex></div>
          <furo-ui5-button design="Emphasized" at-click="--saveViewAsClicked"
            >${this.saveButtonText}
          </furo-ui5-button>
          <furo-ui5-button design="Transparent" at-click="--abortClk"
            >${this.cancelButtonText}</furo-ui5-button
          >
        </furo-horizontal-flex>
      </furo-ui5-dialog>

      <!-- all items -->
      <furo-data-object
        type="furo.view.PersonalView"
        at-object-ready="--persViewDO,((managedData))"
        at-data-injected="--persViewDOInjected"
        fn-inject-raw="--sd"
      ></furo-data-object>

      <!-- favorite items -->
      <furo-data-object
        type="furo.view.PersonalView"
        at-object-ready="--favoriteViewsDO"
        fn-inject-raw="|--favoriteViews"
      ></furo-data-object>

      <!-- SaveAsDialog  -->
      <furo-data-object
        type="furo.view.SaveAsDialog"
        fn-validate-all-fields="--saveViewAsClicked"
        at-validation-success="--saveViewAsValid"
        at-object-ready="--viewNameDO, ((_saveAsDialog))"
      ></furo-data-object>

      <!-- current view  -->
      <furo-data-object
        type="furo.view.ViewSettings"
        at-object-ready="^^current-view(*),((CurrentViewSettings))"
        at-data-changed-after-inject="--settingsChanged"
        fn-inject-raw="|--initialView, --viewSelected(*.item.node._value)"
        at-data-injected="--settingsInjected"
        at-field-order-changed="--formUpdateRequested"
        at-table-order-changed="--settingsChanged"
      ></furo-data-object>
    `;
  }
}

window.customElements.define('furo-ui5-views', FuroUi5Views);

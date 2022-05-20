import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// import slideDown from '@ui5/webcomponents-base/dist/animations/slideDown.js';
// import slideUp from '@ui5/webcomponents-base/dist/animations/slideUp.js';

import '@ui5/webcomponents-icons/dist/slim-arrow-up.js';
import '@ui5/webcomponents/dist/Avatar.js';

import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Icon.js';

import '@furo/layout/src/furo-horizontal-flex.js';

/**
 *  A bindable **header** panel.
 *
 *  **Info**: This component is intended to use as a header panel, if you need panels in your view, consider to use
 *  a ui5-panel directly. That is also the reason that the api does not match with ui5-panel.
 *
 *  This component is a container which has a header and a content area and is used for grouping and displaying information.
 *  It can be collapsed to save space on the screen.
 *
 *  ```html
 *   <furo-ui5-header-panel header-text="Header Text" secondary-text="Subtitle Text" icon="task"></furo-ui5-header-panel>
 *  ```
 *
 * @event collapsed Fired when panel is collapsed by user interaction.
 * @event expanded Fired when panel is expanded by user interaction.
 *
 * @slot {HTMLElement [0..n]} action - defines an action, displayed in the right most part of the header panel.
 * @slot {HTMLElement [0..n]} - defines the content of the panel
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * @cssprop {#ffffff} [--furo-ui5-header-panel-icon-color=--ui5-avatar-initials-color] - Color of the icon
 * @cssprop {#354a5f} [--furo-ui5-header-panel-icon-background-color=--ui5-avatar-accent6] - background Color of the icon
 * @cssprop {#0854a0} [--furo-ui5-header-panel-splitter-start-color=--sapHighlightColor] - the gradient-start hex-Color of the splitter
 * @cssprop {rgba(8, 84, 16, 0)} [--furo-ui5-header-panel-splitter-end-rgba-color=rgba(8, 84, 16, 0)] - the gradient-end rgba-Color of the splitter
 *
 * @summary A bindable header panel
 * @element furo-ui5-header-panel
 * @appliesMixin FBP
 */
export class FuroUi5HeaderPanel extends FBP(LitElement) {
  constructor() {
    super();
    this.icon = '';
    this.iconSize = 'S';
    this.headerText = '';
    this.secondaryText = '';
    this.collapsed = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Header Text
       */
      headerText: { type: String, attribute: 'header-text' },

      /**
       * sub title
       */
      secondaryText: { type: String, attribute: 'secondary-text' },

      /**
       * icon
       */
      icon: { type: String, attribute: 'icon' },

      /**
       * size of the icon. Available options are: XS S M L XL. Default is S.
       */
      iconSize: { type: String, attribute: 'icon-size' },

      collapsed: { type: Boolean, reflect: true },
    };
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * Supported types: scalar types
   * @param {FieldNode} fieldNode
   */
  bindHeaderText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.headerText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.headerText = fieldNode._value;
    });
  }

  /**
   * Bind any **scalar** field to set the secondaryText of the panel.
   * @param {FieldNode} fieldNode
   */
  bindSecondaryText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.secondaryText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.secondaryText = fieldNode._value;
    });
  }

  /**
   * bind a furo.navigation.Navigationnode field
   * @param {FieldNode} fieldNode
   */
  bindNavNode(fieldNode) {
    if (fieldNode === undefined || fieldNode.display_name === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this._field = fieldNode;
    this._field.addEventListener('field-value-changed', () => {
      this._setNavNodeSignatureValues(fieldNode);
    });

    this._setNavNodeSignatureValues(fieldNode);
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * Do not forget to import the icon you will use in your component.
   * @param {FieldNode} fieldNode
   */
  bindIcon(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.icon = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.icon = fieldNode._value;
    });
  }

  /**
   * toggles the collapse state
   */
  toggleCollapse() {
    this._FBPTriggerWire('--collapserClicked', null);
  }

  /**
   * update attributes according to the value of furo.navigation.Navigationnode signature
   * @private
   */
  _setNavNodeSignatureValues(fieldNode) {
    this.headerText = fieldNode.display_name._value;
    if (fieldNode.secondary_text !== undefined) {
      this.secondaryText = fieldNode.secondary_text._value;
    } else if (fieldNode.description !== undefined) {
      this.secondaryText = fieldNode.description._value;
    }

    if (fieldNode.icon !== undefined) {
      this.icon = fieldNode.icon._value;
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this._FBPAddWireHook('--collapserClicked', () => {
      // toggle the panel

      this.collapsed = !this.collapsed;

      setTimeout(() => {
        if (this.collapsed) {
          this.dispatchEvent(
            new Event('collapsed', { composed: true, bubbles: true })
          );
        } else {
          this.dispatchEvent(
            new Event('expanded', { composed: true, bubbles: true })
          );
        }
      }, 16);
    });
  }

  /**
   * Sets data-size attribute
   * @param attrValue
   * @private
   */
  _setSizeAttribute(attrValue) {
    const panel = this.shadowRoot.querySelector('ui5-panel');
    panel.setAttribute('data-size', attrValue);
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
        padding: var(--FuroUi5MediaSizeIndentation, 0.625rem 2rem 0 2rem);
        background: var(--sapGroup_ContentBackground, white);
        border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none;
      }

      .collapser-button {
        transition: all ease-in-out 0.25s;
      }

      :host([collapsed]) .collapser-button {
        transition: all ease-in-out 0.25s;
        transform: rotate(180deg);
      }

      :host([collapsed]) .wrapper {
        display: none;
      }

      .content {
        display: inline-block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        padding: var(--FuroUi5MediaSizeIndentation, 0.625rem 2rem 0 2rem);
        padding-left: 0;
        padding-right: 0;
      }

      :host([fixed]) {
        padding-bottom: var(--FuroUi5MediaSizeIndentationBottom, 0.25rem);
      }

      ui5-avatar {
        color: var(
          --furo-ui5-header-panel-icon-color,
          var(--ui5-avatar-initials-color, #fffff)
        );
        background-color: var(
          --furo-ui5-header-panel-icon-background-color,
          var(--ui5-avatar-accent6, #354a5f)
        );
        margin-right: 0.5rem;
      }

      :host([fixed]) .splitter_bar {
        display: none;
      }

      .splitter_bar {
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        background: var(--sapGroup_ContentBackground, white);
      }

      .collapser-button {
        width: 1rem;
        height: 1rem;
        min-width: 1rem;
        will-change: transform;
        overflow: visible;
        cursor: pointer;
        color: var(--sapButton_TextColor);
      }

      .splitter {
        width: 6rem;
        height: 1.1rem;
        background-size: 100% 0.0625rem;
        background-repeat: no-repeat;
        background-position: center;
      }

      .splitter.after {
        background-image: linear-gradient(
          to right,
          var(
            --furo-ui5-header-panel-splitter-start-color,
            var(--sapButton_Lite_Hover_BorderColor, #0854a0)
          ),
          var(
            --furo-ui5-header-panel-splitter-end-rgba-color,
            rgba(8, 84, 160, 0)
          )
        );
      }

      .splitter.before {
        background-image: linear-gradient(
          to left,
          var(
            --furo-ui5-header-panel-splitter-start-color,
            var(--sapButton_Lite_Hover_BorderColor, #0854a0)
          ),
          var(
            --furo-ui5-header-panel-splitter-end-rgba-color,
            rgba(8, 84, 160, 0)
          )
        );
      }

      .splitter_bar:hover > ui5-icon {
        border-radius: var(--sapButton_BorderCornerRadius);
        border: 1px solid var(--sapButton_Lite_Hover_BorderColor, #0854a0);
        box-sizing: border-box;
      }

      .splitter_bar:hover > .splitter {
        width: 8rem;
      }

      furo-horizontal-flex {
        align-items: end;
      }

      :host(:not([secondary-text])) ui5-label {
        display: none;
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
      <furo-horizontal-flex space class="header">
        <ui5-title>${this.headerText}</ui5-title>
        <div flex></div>
        <slot name="action"></slot>
      </furo-horizontal-flex>
      <ui5-label>${this.secondaryText}</ui5-label>
      <div class="wrapper">
        ${this.icon
          ? html`
              <ui5-avatar
                class="icon"
                icon="${this.icon}"
                size="${this.iconSize}"
                shape="Square"
              ></ui5-avatar>
            `
          : html``}
        <div class="content">
          <slot></slot>
        </div>
      </div>

      <div class="splitter_bar">
        <div class="splitter before"></div>
        <ui5-icon
          @-click="--collapserClicked"
          class="collapser-button"
          name="slim-arrow-up"
          interactive=""
        ></ui5-icon>
        <div class="splitter after"></div>
      </div>
    `;
  }
}

window.customElements.define('furo-ui5-header-panel', FuroUi5HeaderPanel);

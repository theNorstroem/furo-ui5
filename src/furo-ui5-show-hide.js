import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `furo-ui5-show-hide`
 * Animated content hider
 *
 * @summary Animated content hider
 * @customElement furo-ui5-show-hide
 * @appliesMixin FBP
 */
class FuroUi5ShowHide extends FBP(LitElement) {
  constructor() {
    super();
    this.hideOnFalse = false;
    this._clientHeight = 0;
    this._hidden = false;
  }

  /**
   * inverses the bool based on hideOnFalse
   * @param bool
   * @return {boolean|*}
   * @private
   */
  _checkInversedState(bool) {
    return this.hideOnFalse ? !bool : bool;
  }

  /**
   * Hides the content.
   *
   * @public
   * @method
   * @returns {void}
   */
  hide() {
    this.isHidden = true;
  }

  /**
   * Shows the content.
   *
   * @public
   * @method
   * @returns {void}
   */
  show() {
    this.isHidden = false;
  }

  /**
   * Toggle the current visibility state..
   *
   * @public
   * @method
   * @returns {void}
   */
  toggle() {
    if (this.getAttribute('hidden') !== '') {
      this.isHidden = true;
      return true;
    }
    this.isHidden = false;
    return false;
  }

  /**
   * Set is-hiddden to start in a closed state. The name is used by intention, to avoid css trouble with
   * a global <code>[hidden]{display:none}</code>.
   *
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  get isHidden() {
    return this._hidden;
  }

  set isHidden(hide) {
    const oldval = this._hidden || false;

    if (this.shadowRoot && this.shadowRoot.getElementById('measure')) {
      this._clientHeight =
        // @ts-ignore
        this.shadowRoot.getElementById('measure').clientHeight;
    }
    this.setAttribute('animating', '');
    if (hide && this._clientHeight > 0) {
      this.style.setProperty('height', `${this._clientHeight}px`);
      clearTimeout(this._timeout);
      // @ts-ignore
      this._timeout = setTimeout(() => {
        this.style.setProperty('height', '');
      }, 16);
    } else {
      this.style.setProperty('height', `${this._clientHeight}px`);
      clearTimeout(this._timeout);
      // @ts-ignore
      this._timeout = setTimeout(() => {
        this.style.setProperty('height', '');
        this.removeAttribute('animating');
      }, 800);
    }
    if (oldval !== hide) {
      setTimeout(() => {
        this._hidden = hide;
      }, 1);
    }
    if (oldval !== hide) {
      this._notify('toggled', hide);
    }
    if (hide) {
      this._notify('hid', hide);
    } else {
      this._notify('showed', hide);
    }
    if (hide) {
      this.setAttribute('is-hidden', '');
    } else {
      this.removeAttribute('is-hidden');
    }
  }

  /**
   *
   * @param eventname
   * @private
   */
  _notify(eventname, state) {
    const customEvent = new CustomEvent(eventname, {
      composed: true,
      bubbles: true,
      detail: state,
    });
    this.dispatchEvent(customEvent);
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div id="measure" class="translate">
        <slot></slot>
      </div>
    `;
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
        transition: all ease-in-out 0.6s;
      }

      :host([is-hidden]),
      :host([animating]) {
        overflow: hidden;
      }

      .translate {
        transition: all ease-in-out 0.75s;
      }

      :host([is-hidden]) .translate {
        transform: translateY(-100%);
        transition: all ease-in-out 0.6s;
      }

      :host([is-hidden]) {
        display: none;
      }

      :host([is-hidden]) {
        display: block;
        height: 0;
        transition: all ease-in-out 0.75s;
      }
    `;
  }
}

window.customElements.define('furo-ui5-show-hide', FuroUi5ShowHide);

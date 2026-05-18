// import AnimationMode from "@ui5/webcomponents-base/dist/types/AnimationMode.js";
import { BOOLEAN, BoolValue, type FieldConstraints } from "@furo/open-models";
import { getAnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";
import { css, html, LitElement } from "lit";
import { property, query } from "lit/decorators.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatBool } from "@/models";

/**
 * @class
 *
 * ### Overview
 * `furo-ui5-show-hide` is useful to show and hide content.
 *
 * ### Usage
 * If you do not need the animation, consider to solve your problem with a div and css which listens to an attribute hidden
 * and sets the display to `none`.
 *
 * ### ES6 Module Import
 *
 * `import "@furo/layout/furo-ui5-show-hide.js";`
 *
 * @event {CustomEvent<Boolean>} toggled - Toggled will be fired after the animation is completed.
 * @event {CustomEvent<Boolean>} hid - hid will be fired after the animation is completed.
 * @event {CustomEvent<Boolean>} showed - showed will be fired when the content is visible.
 *
 *
 * @author FURO
 * @extends LitElement
 * @tagname furo-ui5-show-hide
 * @public
 */
export class FuroUi5ShowHide extends LitElement {
  @query("#measure") private measureEl?: HTMLElement;

  private modelReaderWriter: ModelReaderWriter | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  readonly = false;

  @property({ type: Boolean, attribute: "hide-on-false" })
  public hideOnFalse = false;

  private _timeout: ReturnType<typeof setTimeout> | undefined;

  private _clientHeight = 0;

  private _hidden = false;

  private boolReaderWriters: BoolReaderWriters<FuroUi5ShowHide> | undefined;

  private _model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  public get model(): BOOLEAN | FuroFatBool | BoolValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref BOOLEAN - "@furo/open-models/"
   * @typeref BoolValue - "@furo/open-models/"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  public set model(value: BOOLEAN | FuroFatBool | BoolValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("this-field-value-changed", this.readFromModel);

    // connect the model
    // init model
    this._model = fieldNode;
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5ShowHide>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(
      this._model,
      this.boolReaderWriters.getWriters(),
      this.boolReaderWriters.getReaders(),
    );

    // listen on state changes on the model
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("this-field-value-changed", this.readFromModel);

    // listen on changes from UI
    // no ui listeners

    // initial read
    setTimeout(() => {
      this.readFromModel();
    }, 32);

    // constraints
    this.handleConstraints(this._model.__getConstraints());
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  /**
   * inverses the bool based on hideOnFalse
   * @param bool
   * @return {boolean|*}
   * @private
   */
  _checkInversedState(bool: boolean): boolean {
    return this.hideOnFalse ? !bool : bool;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.setAttribute("furo-ui5-show-hide", "");

    if (this.hideOnFalse) {
      this.setAttribute("is-hidden", "");
      this.setAttribute("tabindex", "-1");
      this.setAttribute("aria-hidden", "true");
    }
  }

  /**
   * Indicates whether the transition between the expanded and the collapsed state of the component is animated.
   * By default, the animation is enabled.
   * @public
   * @attr {boolean} no-animation
   */
  @property({ type: Boolean, attribute: "no-animation" })
  NoAnimation = false;

  /**
   * Hides the content.
   *
   * @public
   * @method
   * @returns {void}
   */
  hide() {
    this.value = true;
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-hidden", "true");
  }

  /**
   * Shows the content.
   *
   * @public
   * @method
   * @returns {void}
   */
  show() {
    this.value = false;
    this.removeAttribute("tabindex");
    this.removeAttribute("aria-hidden");
  }

  /**
   * Toggle the current visibility state..
   *
   * @public
   * @method
   * @returns {void}
   */
  toggle() {
    if (this.value) {
      this.show();
      return true;
    }
    this.hide();
    return false;
  }

  /**
   * Set is-hiddden to start in a closed state. The name is used by intention, to avoid css trouble with
   * a global `[hidden]{display:none}`.
   *
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  get value(): boolean {
    return this._hidden;
  }

  set value(v) {
    const hide = this._checkInversedState(v);
    const animation = getAnimationMode();
    const oldval = this._hidden || false;

    if (animation === "none" || this.NoAnimation) {
      this.measureEl?.classList.remove("translate");

      if (oldval !== hide) {
        setTimeout(() => {
          this._hidden = hide;
        }, 1);
      }

      if (oldval !== hide) {
        this._notify("toggled", hide);
      }

      if (hide) {
        this._notify("hid", hide);
      } else {
        this._notify("showed", hide);
      }

      if (hide) {
        this.setAttribute("is-hidden", "");
      } else {
        this.removeAttribute("is-hidden");
      }
      return;
    }
    if (this.measureEl) {
      this._clientHeight = this.measureEl.clientHeight;
    }

    this.setAttribute("animating", "");
    if (hide && this._clientHeight > 0) {
      this.style.setProperty("height", `${this._clientHeight.toString()}px`);
      clearTimeout(this._timeout);

      this._timeout = setTimeout(() => {
        this.style.setProperty("height", "");
      }, 16);
    } else {
      this.style.setProperty("height", `${this._clientHeight.toString()}px`);
      clearTimeout(this._timeout);

      this._timeout = setTimeout(() => {
        this.style.setProperty("height", "");
        this.removeAttribute("animating");
      }, 800);
    }

    if (oldval !== hide) {
      setTimeout(() => {
        this._hidden = hide;
      }, 1);
    }

    if (oldval !== hide) {
      this._notify("toggled", hide);
    }

    if (hide) {
      this._notify("hid", hide);
    } else {
      this._notify("showed", hide);
    }

    if (hide) {
      this.setAttribute("aria-hidden", "true");
      this.setAttribute("is-hidden", "");
    } else {
      this.removeAttribute("is-hidden");
      this.removeAttribute("aria-hidden");
    }
  }

  /**
   *
   * @param eventname
   * @private
   */
  _notify(eventname: string, state: boolean) {
    const customEvent = new CustomEvent(eventname, {
      composed: true,
      bubbles: true,
      detail: state,
    });

    this.dispatchEvent(customEvent);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  // language=CSS
  static override styles = css`
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

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  override render() {
    // language=HTML
    return html`
      <div id="measure" class="translate">
        <slot></slot>
      </div>
    `;
  }
}

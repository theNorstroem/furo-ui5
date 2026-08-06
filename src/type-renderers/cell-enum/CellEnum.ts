import { ENUM } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

/**
 * `cell-enum`
 * The cell-enum component displays a FieldNode of type `enum` in read only mode.
 *
 * Every enum resolves to this one renderer: `ENUM.__meta.typeName` is the constant
 * `primitives.ENUM` and the proto enum's own name is not available at runtime. The label
 * comes from the field node's `msg()` (the open-models label formatter), the same source
 * `furo-ui5-select-enum` uses for its option texts.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `enum`
 * @element cell-enum
 */
export class CellEnum extends LitElement {
  @state()
  private displayValue = "";

  private _model: ENUM<unknown> = new ENUM<unknown>(undefined, {}, undefined);

  get model(): ENUM<unknown> {
    return this._model;
  }

  set model(value: ENUM<unknown>) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: inline;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        opacity: var(--_ui5_input_disabled_opacity, 0.4);
      }

      :host([data-size*="size-l"]),
      :host([data-size*="size-xl"]) {
        padding-top: 0.5rem;
      }

      :host([value-state="Positive"]),
      :host([value-state="Success"]) {
        color: var(--sapPositiveColor, #107e3e);
      }

      :host([value-state="Informative"]),
      :host([value-state="Information"]) {
        color: var(--sapInformativeColor, #0a6ed1);
      }

      :host([value-state="Negative"]),
      :host([value-state="Error"]) {
        color: var(--sapNegativeColor, #b00);
      }

      :host([value-state="Critical"]),
      :host([value-state="Warning"]) {
        color: var(--sapCrticalColor, #e9730c);
      }
    `;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._model.__removeEventListener("update", this._readValue);
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: ENUM<unknown> | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // swap listeners from the old field node to the new one
    this._model.__removeEventListener("update", this._readValue);
    this._model = fieldNode;
    this._model.__addEventListener("update", this._readValue);

    // initial read
    this._readValue();
  }

  /**
   * @private
   */
  private _readValue = (): void => {
    const value = this._model.value;
    // `*_UNSPECIFIED` is the proto zero value — render nothing, the same convention
    // furo-ui5-select-enum uses to hide that option.
    this.displayValue = typeof value === "string" && !value.includes("_UNSPECIFIED") ? this._model.msg(value) : "";
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    return html` ${this.displayValue} `;
  }
}

import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { Money } from "@/models/furo/type/Money";

import "@/elements/form-row";
import "@/elements/label";
import "@/elements/money-input";

/**
 * `form-furo-type-money`
 * The form-furo-type-money component displays a FieldNode of type `furo.type.Money` in form mode.
 *
 * @author veith
 * @tagname form-furo-type-money
 * @public
 */
export class FormFuroTypeMoney extends LitElement {
  private _model: Money = new Money();

  get model(): Money {
    return this._model;
  }

  set model(value: Money) {
    this.bindData(value);
  }

  private LABEL = "";

  /**
   * Override the label from the model
   */
  @property({ type: String })
  label: string | undefined;

  /**
   * Disable the component
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Binds a fieldNode to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: Money | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // swap listeners from the old field node to the new one
    this._model = fieldNode;

    // initial "read"
    this.LABEL = this._model.__label;
    this.requestUpdate();
  }

  /**
   * Styles
   * @private
   */
  static override styles = css`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }
    /* do not show components which are not defined */
    *:not(:defined) {
      display: none;
    }
  `;

  /**
   * Template
   * @private
   */
  override render() {
    return html`<furo-ui5-form-row>
      <furo-ui5-label for="input-field" slot="label" show-colon ?required="${this._model.__meta.required}">${this.label ?? this.LABEL}</furo-ui5-label>
      <furo-ui5-money-input .model="${this.model}" id="input-field" ?disabled="${this.disabled}" accessible-name="${this.label ?? this.LABEL}"></furo-ui5-money-input>
    </furo-ui5-form-row>`;
  }
}

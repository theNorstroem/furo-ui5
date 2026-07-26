import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { TimeOfDay } from "@/models/google/type/TimeOfDay";

import "@/elements/form-row";
import "@/elements/label";
import "@/elements/time-picker";

/**
 * `form-google-type-timeofday`
 * The form-google-type-timeofday component displays a FieldNode of type `google.type.TimeOfDay` in form mode.
 *
 * @author veith
 * @tagname form-google-type-timeofday
 * @public
 */
export class FormGoogleTypeTimeofday extends LitElement {
  private _model: TimeOfDay = new TimeOfDay();

  get model(): TimeOfDay {
    return this._model;
  }

  set model(value: TimeOfDay) {
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
  bindData(fieldNode: TimeOfDay | undefined): void {
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
      <furo-ui5-time-picker
        .model="${this.model}"
        id="input-field"
        ?disabled="${this.disabled}"
        accessible-name="${this.label ?? this.LABEL}"
      ></furo-ui5-time-picker>
    </furo-ui5-form-row>`;
  }
}

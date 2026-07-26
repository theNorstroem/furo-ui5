import { UInt32Value } from "@furo/open-models";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "@/elements/form-row";
import "@/elements/label";
import "@/elements/number-input";

/**
 * `form-google-protobuf-uint32value`
 * The form-google-protobuf-uint32value component displays a FieldNode of type `google.protobuf.UInt32Value` in form mode.
 *
 * @author veith
 * @tagname form-google-protobuf-uint32value
 * @public
 */
export class FormGoogleProtobufUint32value extends LitElement {
  private _model: UInt32Value = new UInt32Value();

  get model(): UInt32Value {
    return this._model;
  }

  set model(value: UInt32Value) {
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
  bindData(fieldNode: UInt32Value | undefined): void {
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
      <furo-ui5-number-input .model="${this.model}" id="input-field" ?disabled="${this.disabled}" accessible-name="${this.label ?? this.LABEL}"></furo-ui5-number-input>
    </furo-ui5-form-row>`;
  }
}

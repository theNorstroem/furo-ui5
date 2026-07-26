import { BOOLEAN } from "@furo/open-models";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "@/elements/form-row";
import "@/elements/label";
import "@/elements/checkbox";

/**
 * `form-bool`
 * The form-bool component displays a FieldNode of type `bool` in form mode.
 *
 * @author veith
 * @tagname form-bool
 * @public
 */
export class FormBool extends LitElement {
  private _model: BOOLEAN = new BOOLEAN();

  get model(): BOOLEAN {
    return this._model;
  }

  set model(value: BOOLEAN) {
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
   * Binds a field node to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: BOOLEAN | undefined): void {
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
      <furo-ui5-checkbox .model="${this.model}" id="input-field" ?disabled="${this.disabled}" accessible-name="${this.label ?? this.LABEL}"></furo-ui5-checkbox>
    </furo-ui5-form-row>`;
  }
}

import { ENUM } from "@furo/open-models";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "@/elements/form-row";
import "@/elements/label";
import "@/elements/select-enum";

/**
 * `form-enum`
 * The form-enum component displays a FieldNode of type `enum` in form mode.
 *
 * @author veith
 * @tagname form-enum
 * @public
 */
export class FormEnum extends LitElement {
  private _model: ENUM<unknown> = new ENUM<unknown>(undefined, {}, undefined);

  get model(): ENUM<unknown> {
    return this._model;
  }

  set model(value: ENUM<unknown>) {
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
   * Allows you to select the `unspecified` option.
   *
   * furo-ui5-select-enum gates the option purely through the host attribute, so this has to be
   * forwarded as an attribute binding.
   */
  @property({ type: Boolean, attribute: "show-unspecified" })
  showUnspecified = false;

  /**
   * Binds a fieldNode to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: ENUM<unknown> | undefined): void {
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
      <furo-ui5-select-enum
        .model="${this.model}"
        id="input-field"
        ?disabled="${this.disabled}"
        ?show-unspecified="${this.showUnspecified}"
        accessible-name="${this.label ?? this.LABEL}"
      ></furo-ui5-select-enum>
    </furo-ui5-form-row>`;
  }
}

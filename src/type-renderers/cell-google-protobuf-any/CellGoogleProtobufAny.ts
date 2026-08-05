import { ANY, type FieldNode } from "@furo/open-models";
import { LitElement, html, css, nothing } from "lit";
import { state } from "lit/decorators.js";

import "@/elements/typerenderer";

/**
 * `cell-google-protobuf-any`
 * The cell-google-protobuf-any component displays a FieldNode of type `google.protobuf.Any`
 * in read only mode.
 *
 * An `ANY` is an envelope: the concrete type only becomes known once data arrives and its
 * `@type` has been resolved against the model registry. This renderer therefore renders nothing
 * itself — it waits for the payload and hands it to `furo-ui5-typerenderer`, which resolves the
 * renderer for the payload's real type in the `cell` context.
 *
 * Because of that an Any field needs **two** imports — this renderer, and whatever the payload
 * turns out to be:
 *
 * ```js
 * import "@furo/ui5/type-renderers/cell-google-protobuf-any";
 * import "@furo/ui5/type-renderers/cell-furo-type-date"; // whatever arrives inside
 * ```
 *
 * If the payload's renderer was never imported, the inner typerenderer reports it the usual way
 * (a `renderer-missing` attribute and event); nothing is rendered and the layout stays intact.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Any`
 * @element cell-google-protobuf-any
 */
export class CellGoogleProtobufAny extends LitElement {
  @state()
  private payload: FieldNode | undefined = undefined;

  private _model: ANY = new ANY();

  get model(): ANY {
    return this._model;
  }

  set model(value: ANY) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: contents;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._model.__removeEventListener("update", this._readPayload);
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: ANY | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // swap listeners from the old field node to the new one
    this._model.__removeEventListener("update", this._readPayload);
    this._model = fieldNode;
    this._model.__addEventListener("update", this._readPayload);

    // initial read
    this._readPayload();
  }

  /**
   * `ANY.value` is the unpacked payload node and carries the real `__meta.typeName`. The ANY node
   * itself always reports `google.protobuf.Any`, so binding that to the typerenderer would only
   * resolve back to this renderer.
   *
   * @private
   */
  private _readPayload = (): void => {
    this.payload = this._model.value;
  };

  /**
   * render function
   * @private
   */
  override render() {
    if (this.payload === undefined) {
      return nothing;
    }

    // language=HTML
    return html` <furo-ui5-typerenderer context="cell" .model="${this.payload}"></furo-ui5-typerenderer> `;
  }
}

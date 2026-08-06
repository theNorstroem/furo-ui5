import { css, html, LitElement } from "lit";

import "@furo/layout/furo-vertical-flex";
import "@/elements/shellbar";
import "@/elements/section";
import "@/elements/subsection";
import "@/elements/label";
import "@/elements/typerenderer";

// the typerenderer imports no renderer itself — this is the consumer's job
import "@/type-renderers/cell-enum";
import "@/type-renderers/celledit-enum";
import "@/type-renderers/display-enum";
import "@/type-renderers/form-enum";

import { CubeDefinition } from "@/models/furoui5test/cube/CubeDefinition";
import { Materials } from "@/models/furoui5test/cube/Materials";
import { TableCss } from "@/styles/table.css";

const CONTEXTS = ["display", "cell", "celledit", "form"] as const;

/**
 * Sandbox for the four `enum` type renderers.
 *
 * Every proto enum is type-erased at runtime — `ENUM.__meta.typeName` is the constant
 * `primitives.ENUM` — so the typerenderer resolves *every* enum field to the same four tags
 * `display-enum` / `cell-enum` / `celledit-enum` / `form-enum`. The renderers build themselves
 * from the field node's own `enumArg` and `msg()`.
 *
 * @tagname page-enum-typerenderer
 */
export class PageEnumTyperenderer extends LitElement {
  cube = new CubeDefinition({ material: Materials.MATERIALS_GLASS });

  static override styles = [
    TableCss,
    css`
      :host {
        display: block;
        height: 100vh;
        overflow: auto;
      }

      *:not(:defined) {
        display: none;
      }

      td {
        vertical-align: top;
      }

      furo-ui5-typerenderer[renderer-missing] {
        outline: 1px dashed var(--sapNegativeColor, #b00);
      }

      .hint {
        color: var(--sapContent_LabelColor, #6a6d70);
        font-size: 0.875rem;
        margin: 0 0 0.5rem;
      }

      .value {
        font-family: monospace;
      }
    `,
  ];

  override connectedCallback(): void {
    super.connectedCallback();
    // keep the readout below in sync with whatever the celledit/form renderers write back
    this.cube.material.__addEventListener("update", this._onModelUpdate);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.cube.material.__removeEventListener("update", this._onModelUpdate);
  }

  private _onModelUpdate = (): void => {
    this.requestUpdate();
  };

  private _set(value: Materials): void {
    this.cube.material.value = value;
  }

  private _row(label: string) {
    return html`
      <tr>
        <td><furo-ui5-label>${label}</furo-ui5-label></td>
        ${CONTEXTS.map(
          context => html`
            <td>
              <furo-ui5-typerenderer context="${context}" .model="${this.cube.material}"></furo-ui5-typerenderer>
            </td>
          `
        )}
      </tr>
    `;
  }

  override render() {
    return html`
      <furo-vertical-flex>
        <furo-ui5-shellbar primary-title="enum type renderers"></furo-ui5-shellbar>

        <furo-ui5-section heading="CubeDefinition.material — ENUM&lt;Materials&gt;">
          <furo-ui5-subsection heading="Dispatched through furo-ui5-typerenderer">
            <p class="hint">
              Every cell below is the same <code>&lt;furo-ui5-typerenderer&gt;</code>, only the <code>context</code> attribute differs. A dashed outline would
              mean the renderer was not registered — none should appear here.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>display</th>
                  <th>cell</th>
                  <th>celledit</th>
                  <th>form</th>
                </tr>
              </thead>
              <tbody>
                ${this._row("primitives.ENUM")}
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="Drive the model">
            <p class="hint">
              <code>display-enum</code> and <code>cell-enum</code> render <code>msg(value)</code>, and render <strong>nothing</strong> for the
              <code>*_UNSPECIFIED</code> zero value — the same convention <code>furo-ui5-select-enum</code> uses to hide that option.
            </p>
            <button @click="${() => { this._set(Materials.MATERIALS_UNSPECIFIED); }}">UNSPECIFIED</button>
            <button @click="${() => { this._set(Materials.MATERIALS_WOOD); }}">WOOD</button>
            <button @click="${() => { this._set(Materials.MATERIALS_METALS); }}">METALS</button>
            <button @click="${() => { this._set(Materials.MATERIALS_PAPER); }}">PAPER</button>
            <p class="value">model.value = ${String(this.cube.material.value)}</p>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="The renderers used directly">
            <p class="hint">The renderers are ordinary elements — bind them with <code>.model</code> without going through the typerenderer.</p>
            <table>
              <tbody>
                <tr>
                  <td><furo-ui5-label>display-enum</furo-ui5-label></td>
                  <td><display-enum .model="${this.cube.material}"></display-enum></td>
                </tr>
                <tr>
                  <td><furo-ui5-label>cell-enum</furo-ui5-label></td>
                  <td><cell-enum .model="${this.cube.material}"></cell-enum></td>
                </tr>
                <tr>
                  <td><furo-ui5-label>celledit-enum</furo-ui5-label></td>
                  <td><celledit-enum .model="${this.cube.material}"></celledit-enum></td>
                </tr>
                <tr>
                  <td><furo-ui5-label>form-enum</furo-ui5-label></td>
                  <td><form-enum .model="${this.cube.material}"></form-enum></td>
                </tr>
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="show-unspecified">
            <p class="hint">
              The <code>*_UNSPECIFIED</code> option is hidden in the dropdown unless <code>show-unspecified</code> is set. <code>form-enum</code> forwards the
              attribute to its inner <code>furo-ui5-select-enum</code>.
            </p>
            <table>
              <tbody>
                <tr>
                  <td><furo-ui5-label>default</furo-ui5-label></td>
                  <td><form-enum label="Material" .model="${this.cube.material}"></form-enum></td>
                </tr>
                <tr>
                  <td><furo-ui5-label>show-unspecified</furo-ui5-label></td>
                  <td><form-enum show-unspecified label="Material" .model="${this.cube.material}"></form-enum></td>
                </tr>
              </tbody>
            </table>
          </furo-ui5-subsection>
        </furo-ui5-section>
      </furo-vertical-flex>
    `;
  }
}

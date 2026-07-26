import { css, html, LitElement } from "lit";

import "@furo/layout/furo-vertical-flex";
import "@/elements/shellbar";
import "@/elements/section";
import "@/elements/subsection";
import "@/elements/label";
import "@/elements/typerenderer";

// the typerenderer imports no renderer itself — this is the consumer's job
import "@/type-renderers/cell-bool";
import "@/type-renderers/cell-furo-fat-string";
import "@/type-renderers/cell-furo-type-date";
import "@/type-renderers/cell-google-protobuf-timestamp";
import "@/type-renderers/cell-google-type-money";
import "@/type-renderers/cell-int64";
import "@/type-renderers/cell-string";
import "@/type-renderers/celledit-bool";
import "@/type-renderers/celledit-furo-fat-string";
import "@/type-renderers/celledit-furo-type-date";
import "@/type-renderers/celledit-google-protobuf-timestamp";
import "@/type-renderers/celledit-google-type-money";
import "@/type-renderers/celledit-int64";
import "@/type-renderers/celledit-string";
import "@/type-renderers/display-bool";
import "@/type-renderers/display-furo-fat-string";
import "@/type-renderers/display-furo-type-date";
import "@/type-renderers/display-google-protobuf-timestamp";
import "@/type-renderers/display-google-type-money";
import "@/type-renderers/display-int64";
import "@/type-renderers/display-string";
import "@/type-renderers/form-bool";
import "@/type-renderers/form-furo-fat-string";
import "@/type-renderers/form-furo-type-date";
import "@/type-renderers/form-google-protobuf-timestamp";
import "@/type-renderers/form-google-type-money";
import "@/type-renderers/form-int64";
import "@/type-renderers/form-string";

import { FuroUi5Typerenderer } from "@/elements/typerenderer/FuroUi5Typerenderer";
import { FuroFatString } from "@/models";
import { AllTypesTest } from "@/models/furoui5test/AllTypesTest";
import { CubeDefinition } from "@/models/furoui5test/cube/CubeDefinition";
import { TableCss } from "@/styles/table.css";

import type { FieldNode } from "@furo/open-models";

/**
 * A hand written renderer, used below to demonstrate `rendererOverrides` and a custom context.
 */
class DemoLoudString extends HTMLElement {
  private _model: FieldNode | undefined = undefined;

  public bindData(node: FieldNode | undefined): void {
    this._model = node;
    this.textContent = `🔊 ${String(node ?? "")}`;
    node?.__addEventListener("update", () => {
      this.textContent = `🔊 ${String(this._model ?? "")}`;
    });
  }

  public get model(): FieldNode | undefined {
    return this._model;
  }

  public set model(value: FieldNode | undefined) {
    this.bindData(value);
  }
}

if (!customElements.get("demo-loud-string")) {
  customElements.define("demo-loud-string", DemoLoudString);
  // a renderer for a completely custom context — <furo-ui5-typerenderer context="loud">
  customElements.define("loud-string", class extends DemoLoudString {});
}

const CONTEXTS = ["display", "cell", "celledit", "form"] as const;

/**
 * Sandbox for `furo-ui5-typerenderer`: every row binds the same field node through the
 * typerenderer in all four shipped contexts, plus sections for repeated fields, map fields,
 * renderer overrides and the missing-renderer error path.
 *
 * @tagname page-typerenderer-dispatch
 */
export class PageTyperendererDispatch extends LitElement {
  data = new AllTypesTest({
    primitiveString: "Hello Furo",
    primitiveBool: true,
    primitiveInt64: 4711,
    furoFatString: { value: "fat hello" },
    googleProtobufTimestamp: "2026-07-26T10:15:00Z",
    googleTypeMoney: { currencyCode: "CHF", units: "42", nanos: 500000000 },
    furoTypeDate: { day: 26, month: 7, year: 2026 },
  });

  // a repeated field with a real parent, so the item type resolves even when empty
  cube = new CubeDefinition({ multipleOptions: ["alpha", "beta", "gamma"] });

  // a map field: MAP<string, STRING, string>
  fat = new FuroFatString({ value: "x", attributes: { de: "Hallo", en: "Hello", fr: "Bonjour" }, labels: {} });

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
    `,
  ];

  private _addItem(): void {
    this.cube.multipleOptions.push(`item-${String(this.cube.multipleOptions.length)}`);
  }

  private _removeItem(): void {
    if (this.cube.multipleOptions.length > 0) {
      this.cube.multipleOptions.delete(0);
    }
  }

  private _row(label: string, node: FieldNode) {
    return html`
      <tr>
        <td><furo-ui5-label>${label}</furo-ui5-label></td>
        ${CONTEXTS.map(
          context => html`
            <td>
              <furo-ui5-typerenderer context="${context}" .model="${node}"></furo-ui5-typerenderer>
            </td>
          `
        )}
      </tr>
    `;
  }

  override render() {
    return html`
      <furo-vertical-flex>
        <furo-ui5-shellbar primary-title="furo-ui5-typerenderer"></furo-ui5-shellbar>

        <furo-ui5-section heading="One element, any type, any context">
          <furo-ui5-subsection heading="Scalars and well known types">
            <p class="hint">Every cell below is the same <code>&lt;furo-ui5-typerenderer&gt;</code>, only the <code>context</code> attribute differs.</p>
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
                ${this._row("primitives.STRING", this.data.primitiveString)} ${this._row("primitives.BOOLEAN", this.data.primitiveBool)}
                ${this._row("primitives.INT64", this.data.primitiveInt64)} ${this._row("furo.fat.String", this.data.furoFatString)}
                ${this._row("google.protobuf.Timestamp", this.data.googleProtobufTimestamp)} ${this._row("google.type.Money", this.data.googleTypeMoney)}
                ${this._row("furo.type.Date", this.data.furoTypeDate)}
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="Repeated field — ARRAY&lt;STRING, string&gt;">
            <p class="hint">
              No <code>display-string-array</code> renderer exists, so the typerenderer falls back to one <code>display-string</code> per item and follows
              additions/removals.
            </p>
            <button @click="${this._addItem}">push item</button>
            <button @click="${this._removeItem}">delete first</button>
            <table>
              <tbody>
                ${this._row("multiple_options", this.cube.multipleOptions)}
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="Map field — MAP&lt;string, STRING, string&gt;">
            <p class="hint">
              No <code>display-string-map</code> renderer exists either, so each entry is rendered with <code>display-string</code> carrying a
              <code>map-key</code> attribute.
            </p>
            <table>
              <tbody>
                ${this._row("attributes", this.fat.attributes)}
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="Overrides and custom contexts">
            <table>
              <tbody>
                <tr>
                  <td><furo-ui5-label>rendererOverrides</furo-ui5-label></td>
                  <td>
                    <furo-ui5-typerenderer
                      .rendererOverrides="${{ "display-string": "demo-loud-string" }}"
                      .model="${this.data.primitiveString}"
                    ></furo-ui5-typerenderer>
                  </td>
                </tr>
                <tr>
                  <td><furo-ui5-label>context="loud"</furo-ui5-label></td>
                  <td>
                    <furo-ui5-typerenderer context="loud" .model="${this.data.primitiveString}"></furo-ui5-typerenderer>
                  </td>
                </tr>
                <tr>
                  <td><furo-ui5-label>defaultOverrides (app wide)</furo-ui5-label></td>
                  <td>
                    <furo-ui5-typerenderer context="global" .model="${this.data.primitiveString}"></furo-ui5-typerenderer>
                  </td>
                </tr>
              </tbody>
            </table>
          </furo-ui5-subsection>

          <furo-ui5-subsection heading="Missing renderer">
            <p class="hint">
              Nothing is registered for <code>nosuch-string</code>. After 300 ms the element logs an error, gets a <code>renderer-missing</code> attribute
              (dashed outline below) and fires a <code>renderer-missing</code> event. The layout stays intact.
            </p>
            <furo-ui5-typerenderer context="nosuch" .model="${this.data.primitiveString}"></furo-ui5-typerenderer>
          </furo-ui5-subsection>
        </furo-ui5-section>
      </furo-vertical-flex>
    `;
  }
}

// app wide override, normally done once at bootstrap
FuroUi5Typerenderer.defaultOverrides = { "global-string": "demo-loud-string" };

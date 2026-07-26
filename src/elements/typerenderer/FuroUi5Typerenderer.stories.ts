import "@/Assets";
import "@/elements/typerenderer";
import "@/elements/label";

// The typerenderer imports no renderer of its own — registering them is the consumer's job.
// This is the set the stories below need.
import "@/type-renderers/cell-bool";
import "@/type-renderers/cell-furo-fat-string";
import "@/type-renderers/cell-google-protobuf-timestamp";
import "@/type-renderers/cell-int64";
import "@/type-renderers/cell-string";
import "@/type-renderers/celledit-bool";
import "@/type-renderers/celledit-furo-fat-string";
import "@/type-renderers/celledit-google-protobuf-timestamp";
import "@/type-renderers/celledit-int64";
import "@/type-renderers/celledit-string";
import "@/type-renderers/display-bool";
import "@/type-renderers/display-furo-fat-string";
import "@/type-renderers/display-google-protobuf-timestamp";
import "@/type-renderers/display-int64";
import "@/type-renderers/display-string";
import "@/type-renderers/form-bool";
import "@/type-renderers/form-furo-fat-string";
import "@/type-renderers/form-google-protobuf-timestamp";
import "@/type-renderers/form-int64";
import "@/type-renderers/form-string";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import type { FieldNode } from "@furo/open-models";

import { FuroUi5Typerenderer } from "./FuroUi5Typerenderer";

import { FuroFatString } from "@/models";
import { AllTypesTest } from "@/models/furoui5test/AllTypesTest";
import { CubeDefinition } from "@/models/furoui5test/cube/CubeDefinition";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-typerenderer";

// there is no SAP counterpart for this one — it is a furo concept
const componentInfo = {};

const { events, args, argTypes } = getStorybookHelpers(component);
// `defaultOverrides` is a static field, not an instance property, so it must not become a control
ArgsTransormAll(argTypes, args, ["defaultOverrides"]);
ArgsSetEnum(argTypes, "context", ["display", "cell", "celledit", "form"]);

const CONTEXTS = ["display", "cell", "celledit", "form"] as const;

// ── models ────────────────────────────────────────────────────────────────
const data = new AllTypesTest({
  primitiveString: "Hello Furo",
  primitiveBool: true,
  primitiveInt64: "4711",
  furoFatString: { value: "fat hello" },
  googleProtobufTimestamp: "2026-07-26T10:15:00Z",
});

// a repeated field on a real parent, so the item type resolves even while the array is empty
const cube = new CubeDefinition({ multipleOptions: ["alpha", "beta", "gamma"] });

// a map field: MAP<string, STRING, string>
const fat = new FuroFatString({ value: "x", attributes: { de: "Hallo", en: "Hello", fr: "Bonjour" }, labels: {} });

const ROWS: { label: string; node: FieldNode }[] = [
  { label: "primitives.STRING", node: data.primitiveString },
  { label: "primitives.BOOLEAN", node: data.primitiveBool },
  { label: "primitives.INT64", node: data.primitiveInt64 },
  { label: "furo.fat.String", node: data.furoFatString },
  { label: "google.protobuf.Timestamp", node: data.googleProtobufTimestamp },
];

// ── a hand written renderer, for the override stories ─────────────────────
class StoryLoudString extends HTMLElement {
  private _model: FieldNode | undefined = undefined;

  public bindData(node: FieldNode | undefined): void {
    this._model = node;
    this.textContent = `🔊 ${String(node ?? "")}`;
  }

  public get model(): FieldNode | undefined {
    return this._model;
  }

  public set model(value: FieldNode | undefined) {
    this.bindData(value);
  }
}

// guarded, because storybook re-evaluates this module on hot reload
if (!customElements.get("story-loud-string")) {
  customElements.define("story-loud-string", StoryLoudString);
  // a renderer for a completely custom context: <furo-ui5-typerenderer context="loud">
  customElements.define("loud-string", class extends StoryLoudString {});
}

// App wide override. Scoped to a context nothing else uses, so it cannot leak into another story.
FuroUi5Typerenderer.defaultOverrides = { "appwide-string": "story-loud-string" };

const meta: Meta = {
  title: "display/Typerenderer",
  component,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
    },
  },
};
export default meta;

/**
 * Bind any field node and the matching renderer is resolved from `context` + the node's
 * `__meta.typeName`. Switch the `context` control to see the same field rendered read only,
 * as a table cell, as an editable cell or as a form row.
 */
export const Default: StoryObj = {
  args: {
    context: "display",
  },
  render: renderArgs => html`
    <furo-ui5-typerenderer context="${renderArgs.context}" .model="${data.primitiveString}"></furo-ui5-typerenderer>
  `,
};

/**
 * The same five field nodes rendered in all four shipped contexts. Every cell is the same
 * `<furo-ui5-typerenderer>` element — only the `context` attribute differs.
 */
export const AllContexts: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => html`
    <table>
      <thead>
        <tr>
          <th scope="col">Field type</th>
          ${CONTEXTS.map(context => html`<th scope="col">${context}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${ROWS.map(
          row => html`
            <tr>
              <th scope="row"><furo-ui5-label>${row.label}</furo-ui5-label></th>
              ${CONTEXTS.map(
                context => html`
                  <td>
                    <furo-ui5-typerenderer context="${context}" .model="${row.node}"></furo-ui5-typerenderer>
                  </td>
                `
              )}
            </tr>
          `
        )}
      </tbody>
    </table>
  `,
};

/**
 * For an `ARRAY<T, I>` the item type decides the tag and `-array` is appended. No
 * `display-string-array` renderer exists here, so the typerenderer falls back to one
 * `display-string` per item and follows additions and removals of the array.
 */
export const RepeatedField: StoryObj = {
  args: {
    context: "display",
  },
  render: renderArgs => html`
    <button @click="${() => cube.multipleOptions.push(`item-${String(cube.multipleOptions.length)}`)}">push item</button>
    <button @click="${() => cube.multipleOptions.length > 0 && cube.multipleOptions.delete(0)}">delete first</button>
    <hr />
    <furo-ui5-typerenderer context="${renderArgs.context}" .model="${cube.multipleOptions}"></furo-ui5-typerenderer>
  `,
};

/**
 * A `MAP<K, T, I>` works the same way with a `-map` suffix on the **value** type. Without a
 * `display-string-map` renderer each entry is rendered with `display-string`, carrying its map
 * key in a `map-key` attribute so a renderer can display it.
 */
export const MapField: StoryObj = {
  args: {
    context: "display",
  },
  render: renderArgs => html`
    <furo-ui5-typerenderer context="${renderArgs.context}" .model="${fat.attributes}"></furo-ui5-typerenderer>
  `,
};

/**
 * Three ways to reach a renderer that is not the conventional one. The override key is always
 * the tag the convention *would* have produced, so `display-string` is what you override — never
 * the replacement tag.
 */
export const RendererOverrides: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => html`
    <table>
      <tbody>
        <tr>
          <th scope="row"><furo-ui5-label>convention</furo-ui5-label></th>
          <td><furo-ui5-typerenderer .model="${data.primitiveString}"></furo-ui5-typerenderer></td>
        </tr>
        <tr>
          <th scope="row"><furo-ui5-label>.rendererOverrides</furo-ui5-label></th>
          <td>
            <furo-ui5-typerenderer
              .rendererOverrides="${{ "display-string": "story-loud-string" }}"
              .model="${data.primitiveString}"
            ></furo-ui5-typerenderer>
          </td>
        </tr>
        <tr>
          <th scope="row"><furo-ui5-label>defaultOverrides (app wide)</furo-ui5-label></th>
          <td><furo-ui5-typerenderer context="appwide" .model="${data.primitiveString}"></furo-ui5-typerenderer></td>
        </tr>
        <tr>
          <th scope="row"><furo-ui5-label>context="loud"</furo-ui5-label></th>
          <td><furo-ui5-typerenderer context="loud" .model="${data.primitiveString}"></furo-ui5-typerenderer></td>
        </tr>
      </tbody>
    </table>
  `,
};

/**
 * Nothing is registered for `nosuch-string`. After `renderer-timeout` ms the element logs an
 * error, gets a `renderer-missing` attribute listing the tags it tried, and fires a
 * `renderer-missing` event (see the Actions panel). Nothing is rendered, so the surrounding
 * layout stays intact.
 */
export const MissingRenderer: StoryObj = {
  args: {
    context: "nosuch",
    rendererTimeout: 300,
  },
  render: renderArgs => html`
    <p>Renderer for the resolved tag is not imported:</p>
    <furo-ui5-typerenderer
      context="${renderArgs.context}"
      renderer-timeout="${renderArgs.rendererTimeout}"
      .model="${data.primitiveString}"
    ></furo-ui5-typerenderer>
  `,
};

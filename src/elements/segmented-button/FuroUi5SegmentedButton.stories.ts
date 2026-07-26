import "@/elements/segmented-button";
import "@/elements/segmented-button-item";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/title";
import "@/elements/text-input";
import "@/elements/pretty-json";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import { ARRAY } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import type { SelectOption } from "@/lib/open-models/signatures";
import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-segmented-button";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

cube.cube.multipleOptions = ["2"];

const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
  {
    id: "1",
    displayName: "First",
  },
  {
    id: "2",
    displayName: "Second",
    icon: "product",
  },
  {
    id: "3",
    displayName: "Third",
  },
]);

const optionList: SelectOption[] = [
  {
    id: "1",
    displayName: "A from List",
    tooltip: "First Item",
  },
  {
    id: "2",
    displayName: "Second from list",
    icon: "product",
  },
  {
    id: "3",
    displayName: "Third from list",
  },
];

const addOption = () => {
  options.add({ id: "4", displayName: "Dynamic" }, true);
};
const modifyOption = () => {
  const opt = options.at(0);
  if (opt) {
    opt.displayName = "First (edited)";
  }
};

const meta: Meta = {
  title: "input/Button/SegmentedButton",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
  argTypes,

  parameters: {
    parameters: {
      actions: {
        handles: events,
      },
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "2.0.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/SegmentedButton/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/segmented-button/",
      }),
    },
    a11y: {
      options: {
        rules: {
          "color-contrast": { enabled: false },
        },
      },
    },
  },
};
export default meta;

/**
 * Single selection bound to a `STRING` field. The buttons are supplied by an `optionsModel`.
 */
export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Segmented Button — single (STRING)">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${addOption}" design="Transparent">Add Option</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${modifyOption}" design="Transparent">Modify Option</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="single">Choice</furo-ui5-label>
        <furo-ui5-segmented-button
          id="single"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          .model="${cube.cube.singleOption}"
          .optionsModel="${options}"
        >
          ${unsafeHTML(renderArgs.defaultSlot)}
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="single-id">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input id="single-id" .model="${cube.cube.singleOption}"></furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <furo-ui5-title>Options</furo-ui5-title>
    <furo-ui5-pretty-json .model="${options}"></furo-ui5-pretty-json>
  `,
};

/**
 * Single selection bound to an `ENUM` field. The buttons are generated from the enum descriptor.
 */
export const EnumBinding: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Segmented Button — ENUM">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Material</furo-ui5-label>
        <furo-ui5-segmented-button
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?show-unspecified="${renderArgs.showUnspecified}"
          .model="${cube.cube.material}"
        >
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

/**
 * Multiple selection bound to an `ARRAY` field (`selectionMode="Multiple"` is set automatically).
 */
export const MultipleSelection: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Segmented Button — multiple (ARRAY)">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${addOption}" design="Transparent">Add Option</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="multi">Choices</furo-ui5-label>
        <furo-ui5-segmented-button
          id="multi"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          .model="${cube.cube.multipleOptions}"
          .optionsModel="${options}"
        >
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <furo-ui5-title>Selected</furo-ui5-title>
    <furo-ui5-pretty-json .model="${cube.cube.multipleOptions}"></furo-ui5-pretty-json>
  `,
};

/**
 * Single selection where the buttons are produced from a plain `SelectOption[]` via `optionList`.
 */
export const WorkingWithOptionList: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Segmented Button — optionList">
      <p>Buttons added with <code>SelectOption[]</code>.</p>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="ol">Choice</furo-ui5-label>
        <furo-ui5-segmented-button
          id="ol"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          .model="${cube.cube.singleOption}"
          .optionList="${optionList}"
        >
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="ol-id">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input id="ol-id" .model="${cube.cube.singleOption}"></furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <pre>

const optionList: SelectOption[] = [
  {
    id: "1",
    displayName: "A from List",
    tooltip: "First Item",
  },
  {
    id: "2",
    displayName: "Second from list",
    icon: "product",
  },
  {
    id: "3",
    displayName: "Third from list",
  },
];
    </pre
    >
  `,
};

/**
 * The component also works without any model binding — declare the items yourself.
 * Set an `accessible-name` when there is no model to derive a label from.
 */
export const WithoutModelBinding: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Segmented Button — no binding">
      <ul>
        <li>You can use the segmented button without binding a "model".</li>
        <li>Declare <code>ui5-segmented-button-item</code> children yourself.</li>
        <li>Do not forget to set the <b>accessible name</b> when you work without a model binding.</li>
      </ul>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="plain">Map mode</furo-ui5-label>
        <furo-ui5-segmented-button id="plain" accessible-name="Map mode">
          <ui5-segmented-button-item data-id="map" selected>Map</ui5-segmented-button-item>
          <ui5-segmented-button-item data-id="satellite">Satellite</ui5-segmented-button-item>
          <ui5-segmented-button-item data-id="hybrid">Hybrid</ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

import "src/web-components/furo-ui5-multi-combobox";
import "src/web-components/furo-ui5-form-layout";
import "src/web-components/furo-ui5-form-row";
import "src/web-components/furo-ui5-button";
import "src/web-components/furo-ui5-label";
import "src/web-components/furo-ui5-markdown";
import "src/web-components/furo-ui5-title";
import "src/web-components/furo-ui5-text-input";
import "src/web-components/furo-ui5-pretty-json";

import { ARRAY } from "@furo/open-models/dist/index";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import type { McbItem } from "src/lib/open-models/signatures";
import { CubeEntity } from "src/models/furoui5test/cube/CubeEntity";
import { CubeOptions, type ICubeOptions } from "src/models/furoui5test/cube/CubeOptions";
import { ArgsSetEnum, ArgsTransormAll } from "stories/ArgTypesTransormer";
import DocumentationTemplate from "stories/DocumentationTemplate";
import ComboBoxFilter from "src/types/ComboBoxFilter";
import ValueState from "src/types/ValueState";

const component = "furo-ui5-multi-combobox";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));
ArgsSetEnum(argTypes, "filter", Object.values(ComboBoxFilter));

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
]);

const optionList: McbItem[] = [
  {
    id: "1",
    displayName: "A from List",
    additionalText: "First Item",
  },
  {
    id: "2",
    displayName: "Second from list",
  },
  {
    id: "3",
    displayName: "Third from list",
    additionalText: "With additions",
  },
];

const addOption = () => {
  options.add({ id: "3", displayName: "Dynamic" }, true);
};
const modifyOption = () => {
  const opt = options.at(0);
  if (opt) {
    opt.icon = "share";
  }
};

const meta: Meta = {
  title: "input/Select/Multi Combobox",
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
        since: "1.0.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/MultiComboBox/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/multi-combo-box-web-component/",
      }),
    },
    a11y: {
      // https://storybook.js.org/docs/writing-tests/accessibility-testing
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {
        rules: {
          "color-contrast": { enabled: false }, // due to the color gradient in the input background
        },
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${addOption}" design="Transparent">Add Option</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${modifyOption}" design="Transparent">Modify Option</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-multi-combobox
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.multipleOptions}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-multi-combobox>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-multi-combobox
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .optionsModel="${options}"
          .model="${cube.cube.multipleOptions}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-multi-combobox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <furo-ui5-title>Selection</furo-ui5-title>
    <furo-ui5-pretty-json .model="${cube.cube.multipleOptions}"></furo-ui5-pretty-json>
    <furo-ui5-title>Options</furo-ui5-title>
    <furo-ui5-pretty-json .model="${options}"></furo-ui5-pretty-json>
  `,
  args: {},
};

export const Optionlist: StoryObj = {
  args: {},

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${addOption}" design="Transparent">Add Option</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${modifyOption}" design="Transparent">Modify Option</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-multi-combobox
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.multipleOptions}"
          .optionList="${optionList}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-multi-combobox>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-multi-combobox
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .optionList="${optionList}"
          .model="${cube.cube.multipleOptions}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-multi-combobox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <furo-ui5-title>Selection</furo-ui5-title>
    <furo-ui5-pretty-json .model="${cube.cube.multipleOptions}"></furo-ui5-pretty-json>
    <furo-ui5-title>Option List</furo-ui5-title>
    <furo-ui5-pretty-json .json="${optionList}"></furo-ui5-pretty-json>
  `,
};

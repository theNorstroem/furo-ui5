import "@/elements/select";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/markdown";
import "@/elements/title";
import "@/elements/text-input";
import "@/elements/pretty-json";
import "@ui5/webcomponents-icons/AllIcons";

import { ARRAY } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import type { SelectOption } from "@/lib/open-models/signatures";
import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-select";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

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

const optionList: SelectOption[] = [
  {
    id: "1",
    displayName: "A from List",
    additionalText: "First Item",
  },
  {
    id: "2",
    displayName: "Second from list",
    icon: "product",
    tooltip: "Second Item",
  },
  {
    id: "3",
    displayName: "Third from list",
    icon: "product",
    tooltip: "Second Item",
    additionalText: "With additions",
  },
];

const setValueOutOfRange = () => {
  cube.cube.singleOption = "36";
};

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
  title: "input/Select/Select",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Select/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/select/",
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
        <furo-ui5-select
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input .model="${cube.cube.singleOption}"> </furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <br />
    <furo-ui5-title>Options</furo-ui5-title>
    <furo-ui5-pretty-json .model="${options}"></furo-ui5-pretty-json>
  `,
  args: {},
};

export const WithoutModelBinding: StoryObj = {
  args: {
    value: "2",
  },

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      <ul>
        <li>You can use the select without binding a "model" to the select.</li>
        <li>At least you have the select options, but have to handle the value handling by yourself.</li>
        <li>Do not forget to set the <b>accessible name</b>, if you work without a model binding.</li>
      </ul>

      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${addOption}" design="Transparent">Add Option</furo-ui5-button>
      <furo-ui5-button slot="action" @click="${modifyOption}" design="Transparent">Modify Option</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input .model="${cube.cube.singleOption}"></furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const ValueNotInOptions: StoryObj = {
  args: {},

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      <p>When the value is not in the list of options, a blank select is displayed</p>
      <furo-ui5-button slot="action" @click="${setValueOutOfRange}" design="Transparent">Set Value out of range</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionsModel="${options}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input .model="${cube.cube.singleOption}"> </furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <br />
    <furo-ui5-title>Options</furo-ui5-title>
    <furo-ui5-pretty-json .model="${options}"></furo-ui5-pretty-json>
  `,
};

export const ManuallyAddedOptions: StoryObj = {
  args: {
    defaultSlot:
      '<furo-ui5-option value="1" desktop="">Manually added</furo-ui5-option>\n<furo-ui5-option value="2" icon="product">Second added manually</furo-ui5-option>',
  },

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      <p>You can add options manually too. When you do that, do not mix with <code>optionsModel</code></p>
      <furo-ui5-button slot="action" @click="${setValueOutOfRange}" design="Transparent">Set Value out of range</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input .model="${cube.cube.singleOption}"> </furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const WorkingWithOptionlist: StoryObj = {
  args: {},

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Select">
      <p>Options added with <code>SelectOption[]</code></p>
      <furo-ui5-button slot="action" @click="${setValueOutOfRange}" design="Transparent">Set Value out of range</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionList="${optionList}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select
          id="other"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          .model="${cube.cube.singleOption}"
          .optionList="${optionList}"
          value-state="${ifDefined(renderArgs.valueState)}"
          value="${ifDefined(renderArgs.value)}"
        >
          ${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select>
      </furo-ui5-form-row>
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Selected Option ID</furo-ui5-label>
        <furo-ui5-text-input .model="${cube.cube.singleOption}"> </furo-ui5-text-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

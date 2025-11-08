import "@/Assets";
import "@/furo-ui5-number-input";
import "@/furo-ui5-form-row";
import "@/furo-ui5-label";
import "@/furo-ui5-icon";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";

import DocumentationTemplate from "../DocumentationTemplate";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories/ArgTypesTransormer";
import ValueState from "@/types/ValueState";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
const component = "furo-ui5-number-input";

const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/button/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Input/",
};

const { events, args, argTypes, template } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["type"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

const meta: Meta = {
  title: "input/NumberInput",
  component,
  tags: ["autodocs"],
  args,
  argTypes,
  render: args => template(args),
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

export const Default: StoryObj = {
  args: {
    ...args,
  },
  render: argTypes => html`<furo-ui5-number-input accessible-name="" ?disabled="${argTypes.disabled}"></furo-ui5-number-input>`,
};

export const WithFrom: StoryObj = {
  args: {
    disabled: false,
    modelValue: 21,
    open: "",
    readonly: "",
    required: "",
    value: "",
    noTypeahead: "",
    showClearIcon: "",
    showSuggestions: "",
    valueState: "None",
    defaultSlot: "",
    iconSlot: '<furo-ui5-icon name="delete" slot="icon"> </furo-ui5-icon>',
    valuestatemessageSlot: "",
    rootPart: "",
    inputPart: "",
    clearIconPart: "",
  },

  render: argTypes => html`
    <furo-ui5-form-row>
      <furo-ui5-label required show-colon for="num" slot="label">Label</furo-ui5-label>
      <furo-ui5-number-input value="1234" accessible-name="" id="num" ?disabled="${argTypes.disabled}">
        ${unsafeHTML(argTypes.iconSlot)}
      </furo-ui5-number-input>
    </furo-ui5-form-row>
  `,
};

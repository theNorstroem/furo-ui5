import "@/Assets";
import "@/elements/radio-button";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-radio-button";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/RadioButton",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({
        component,
        originalComponent: "https://ui5.github.io/webcomponents/components/RadioButton/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/radio-button/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    text: "Option A",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="RadioButton Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="rb">Selection</furo-ui5-label>
        <furo-ui5-radio-button
          id="rb"
          name="groupA"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?checked="${renderArgs.checked}"
          ?disabled="${renderArgs.disabled}"
          ?readonly="${renderArgs.readonly}"
          ?required="${renderArgs.required}"
          text="${ifDefined(renderArgs.text)}"
          wrapping-type="${ifDefined(renderArgs.wrappingType)}"
          value-state="${ifDefined(renderArgs.valueState)}"
          .model="${cube.cube.boo}"
        >
          ${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-radio-button>
        <furo-ui5-radio-button name="groupA" text="Option B"></furo-ui5-radio-button>
        <furo-ui5-radio-button name="groupA" text="Option C"></furo-ui5-radio-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const States: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-radio-button name="states" text="Default"></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Checked" checked></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Disabled" disabled></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Disabled checked" disabled checked></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Readonly" readonly></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Required" required></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Warning" value-state="${ValueState.Critical}"></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Error" value-state="${ValueState.Negative}"></furo-ui5-radio-button>
    <furo-ui5-radio-button name="states" text="Success" value-state="${ValueState.Positive}"></furo-ui5-radio-button>
  `,
};

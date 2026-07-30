import "@/Assets";
import "@/elements/step-input";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/pretty-json";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-step-input";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/StepInput",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  argTypes,

  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/StepInput/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/step-input/",
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

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Step Input Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="stp">Rating</furo-ui5-label>
        <furo-ui5-step-input
          id="stp"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          min="0"
          max="5"
          step="1"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          value-state="${ifDefined(renderArgs.valueState)}"
          .model="${cube.cube.rating}"
        ></furo-ui5-step-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const MinMaxStep: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-step-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      min="0"
      max="5"
      step="1"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      value-state="${ifDefined(renderArgs.valueState)}"
      .model="${cube.cube.rating}"
    ></furo-ui5-step-input>
  `,
};

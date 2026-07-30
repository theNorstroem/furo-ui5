import "@/elements/time-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

import { TimeOfDay } from "@/models/google/type/TimeOfDay";

const component = "furo-ui5-time-picker";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["formatPattern"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// a google.type.TimeOfDay field
const timeOfDay = new TimeOfDay({ hours: 11, minutes: 42, seconds: 35 });
const validate = () => {
  timeOfDay.__validate();
};

// a STRING model carrying a time string
const stringTime = new STRING("08:15:30");

const meta: Meta = {
  title: "input/TimePicker",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/TimePicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/time-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Time Picker Element">
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="tp">Time (google.type.TimeOfDay)</furo-ui5-label>
        <furo-ui5-time-picker
          id="tp"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${timeOfDay}"
          value-state="${ifDefined(renderArgs.valueState)}"
        ></furo-ui5-time-picker>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="tp-str">Time (string)</furo-ui5-label>
        <furo-ui5-time-picker id="tp-str" accessible-name="time string" .model="${stringTime}"></furo-ui5-time-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-ui5-time-picker
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${timeOfDay}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-time-picker>
  `,
};

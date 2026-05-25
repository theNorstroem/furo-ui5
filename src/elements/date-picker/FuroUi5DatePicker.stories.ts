import "@/elements/date-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { Wrappers } from "@/models/furoui5test/cube/Wrappers";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-date-picker";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["formatPattern"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model — a google.type.Date field
const wrappers = new Wrappers();
const validate = () => {
  wrappers.__validate();
};

// a STRING model carrying min/max date constraints (the constraints arrive as
// extra ISO-date keys that the element maps onto minDate / maxDate)
const constrainedDate = new STRING("2010-06-15");
(constrainedDate as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
  min: "2000-01-01",
  max: "2020-12-31",
});

const meta: Meta = {
  title: "input/DatePicker",
  component,
  subcomponents: {},
  tags: ["autodocs"],
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/DatePicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/date-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Date Picker Element">
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="dp">Date (google.type.Date)</furo-ui5-label>
        <furo-ui5-date-picker
          id="dp"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${wrappers.date}"
          value-state="${ifDefined(renderArgs.valueState)}"
        ></furo-ui5-date-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-ui5-date-picker
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${wrappers.date}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-date-picker>
  `,
};

export const WithMinMaxConstraints: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Date Picker with min/max constraints">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="dp-constrained">Selectable 2000-01-01 … 2020-12-31</furo-ui5-label>
        <furo-ui5-date-picker id="dp-constrained" accessible-name="constrained date" .model="${constrainedDate}"></furo-ui5-date-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

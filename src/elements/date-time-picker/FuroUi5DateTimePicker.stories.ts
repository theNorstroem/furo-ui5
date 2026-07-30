import "@/elements/date-time-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import { STRING, Timestamp } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { CalendarWeekNumbering } from "@/types";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-date-time-picker";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["formatPattern"]);
ArgsSetEnum(argTypes, "calendarWeekNumbering", Object.values(CalendarWeekNumbering));
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// a google.protobuf.Timestamp field carrying an RFC 3339 value
const timestamp = new Timestamp("2017-01-15T01:30:15.000Z");
const validate = () => {
  timestamp.__validate();
};

// a STRING model carrying min/max date constraints (the constraints arrive as
// extra ISO-date keys that the element maps onto minDate / maxDate)
const constrainedDateTime = new STRING("2010-06-15T12:00:00.000Z");
(constrainedDateTime as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
  min: "2000-01-01",
  max: "2020-12-31",
});

const meta: Meta = {
  title: "input/DateTimePicker",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/DateTimePicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/date-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Date Time Picker Element">
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="dtp">Timestamp (google.protobuf.Timestamp)</furo-ui5-label>
        <furo-ui5-date-time-picker
          id="dtp"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${timestamp}"
          value-state="${ifDefined(renderArgs.valueState)}"
        ></furo-ui5-date-time-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-ui5-date-time-picker
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${timestamp}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-date-time-picker>
  `,
};

export const WithMinMaxConstraints: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Date Time Picker with min/max constraints">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="dtp-constrained">Selectable 2000-01-01 … 2020-12-31</furo-ui5-label>
        <furo-ui5-date-time-picker id="dtp-constrained" accessible-name="constrained date time" .model="${constrainedDateTime}"></furo-ui5-date-time-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

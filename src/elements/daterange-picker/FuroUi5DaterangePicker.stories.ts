import "@/elements/daterange-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { CalendarWeekNumbering, ValueState } from "@/types";

const component = "furo-ui5-daterange-picker";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "calendarWeekNumbering", Object.values(CalendarWeekNumbering));
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

const range = new STRING();

const meta: Meta = {
  title: "form/DaterangePicker",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/DateRangePicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/date-range-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Date Range Picker">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Reporting period</furo-ui5-label>
        <furo-ui5-daterange-picker
          accessible-description="${ifDefined(renderArgs.accessibleDescription)}"
          accessible-description-ref="${ifDefined(renderArgs.accessibleDescriptionRef)}"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
          calendar-week-numbering="${ifDefined(renderArgs.calendarWeekNumbering)}"
          delimiter="${ifDefined(renderArgs.delimiter)}"
          ?disabled="${renderArgs.disabled}"
          display-format="${ifDefined(renderArgs.displayFormat)}"
          format-pattern="${ifDefined(renderArgs.formatPattern)}"
          ?hide-week-numbers="${renderArgs.hideWeekNumbers}"
          max-date="${ifDefined(renderArgs.maxDate)}"
          min-date="${ifDefined(renderArgs.minDate)}"
          name="${ifDefined(renderArgs.name)}"
          ?open="${renderArgs.open}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          primary-calendar-type="${ifDefined(renderArgs.primaryCalendarType)}"
          ?readonly="${renderArgs.readonly}"
          ?required="${renderArgs.required}"
          secondary-calendar-type="${ifDefined(renderArgs.secondaryCalendarType)}"
          ?show-clear-icon="${renderArgs.showClearIcon}"
          ?show-two-months="${renderArgs.showTwoMonths}"
          value="${ifDefined(renderArgs.value)}"
          value-format="${ifDefined(renderArgs.valueFormat)}"
          value-state="${ifDefined(renderArgs.valueState)}"
          .model="${range}"
        ></furo-ui5-daterange-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

import "@/elements/daterange-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-daterange-picker";
const { events, argTypes } = getStorybookHelpers(component);

const range = new STRING();

const meta: Meta = {
  title: "form/DaterangePicker",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/DateRangePicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/date-range-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Date Range Picker">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Reporting period</furo-ui5-label>
        <furo-ui5-daterange-picker .model="${range}"></furo-ui5-daterange-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

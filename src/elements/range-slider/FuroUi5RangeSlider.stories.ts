import "@/elements/range-slider";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { FLOAT } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-range-slider";
const { events, argTypes } = getStorybookHelpers(component);

// the two ends of the range bind to two separate numeric fields
const lower = new FLOAT(250);
const upper = new FLOAT(750);

const meta: Meta = {
  title: "form/RangeSlider",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/RangeSlider/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/slider/",
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
  render: () => html`
    <furo-ui5-form-layout form-title="Range Slider">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Price range</furo-ui5-label>
        <furo-ui5-range-slider min="0" max="1000" step="50" .model="${lower}" .modelTo="${upper}"></furo-ui5-range-slider>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

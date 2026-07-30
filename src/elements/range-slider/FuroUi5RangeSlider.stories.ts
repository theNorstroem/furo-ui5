import "@/elements/range-slider";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { FLOAT } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-range-slider";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

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
    actions: {
      handles: events,
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
  args: {
    max: "1000",
    min: "0",
    step: "50",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Range Slider">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Price range</furo-ui5-label>
        <furo-ui5-range-slider
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?editable-tooltip="${renderArgs.editableTooltip}"
          label-interval="${ifDefined(renderArgs.labelInterval)}"
          max="${ifDefined(renderArgs.max)}"
          min="${ifDefined(renderArgs.min)}"
          name="${ifDefined(renderArgs.name)}"
          ?show-tickmarks="${renderArgs.showTickmarks}"
          ?show-tooltip="${renderArgs.showTooltip}"
          step="${ifDefined(renderArgs.step)}"
          tickmarks="${ifDefined(renderArgs.tickmarks)}"
          .model="${lower}"
          .modelTo="${upper}"
        ></furo-ui5-range-slider>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

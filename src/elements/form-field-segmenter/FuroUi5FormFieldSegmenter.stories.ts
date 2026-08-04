import "@/Assets";
import "@/elements/form-field-segmenter";
import "@/elements/label";
import "@/elements/text-input";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import FormFieldSegmentationPatterns from "@/types/FormFieldSegmentationPatterns";

const component = "furo-ui5-form-field-segmenter";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "pattern", Object.values(FormFieldSegmentationPatterns));

const meta: Meta = {
  title: "form/FormFieldSegmenter",
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
        since: "2.0.0",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/form/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    pattern: "BigSmall",
    unit: "kg",
  },
  render: renderArgs => html`
    <div style="max-width: 30rem;">
      <furo-ui5-label for="weight">Weight</furo-ui5-label>
      <furo-ui5-form-field-segmenter pattern="${ifDefined(renderArgs.pattern)}" unit="${ifDefined(renderArgs.unit)}">
        <furo-ui5-text-input id="weight" value="75"></furo-ui5-text-input>
      </furo-ui5-form-field-segmenter>

      <furo-ui5-label for="amount">Amount</furo-ui5-label>
      <furo-ui5-form-field-segmenter pattern="SmallBig">
        <furo-ui5-text-input value="42"></furo-ui5-text-input>
        <furo-ui5-text-input id="amount" value="Euro"></furo-ui5-text-input>
      </furo-ui5-form-field-segmenter>
    </div>
  `,
};

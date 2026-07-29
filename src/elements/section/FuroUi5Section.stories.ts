import "@/Assets";
import "@/elements/section";
import "@/elements/button";
import "@/elements/subsection";
import "@/elements/text-input";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-section";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/Section",
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
        since: "2.0.0",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-148/page-types/floorplans/object-page#sections",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    heading: "General Information",
    headingLevel: "H3",
  },
  render: renderArgs => html`
    <furo-ui5-section heading="${ifDefined(renderArgs.heading)}" heading-level="${ifDefined(renderArgs.headingLevel)}">
      <furo-ui5-subsection heading="Contact">
        <furo-ui5-text-input value="Jane Doe"></furo-ui5-text-input>
      </furo-ui5-subsection>
      <furo-ui5-subsection heading="Address">
        <furo-ui5-text-input value="221B Baker Street"></furo-ui5-text-input>
      </furo-ui5-subsection>
    </furo-ui5-section>
  `,
};

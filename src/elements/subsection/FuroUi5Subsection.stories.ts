import "@/Assets";
import "@/elements/subsection";
import "@/elements/button";
import "@/elements/text-input";
import "@/elements/title";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-subsection";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/Subsection",
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
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-148/page-types/floorplans/object-page#subsections",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    heading: "Contact Details",
    headingLevel: "H4",
  },
  render: renderArgs => html`
    <furo-ui5-subsection heading="${ifDefined(renderArgs.heading)}" heading-level="${ifDefined(renderArgs.headingLevel)}">
      <furo-ui5-button slot="action" icon="edit" design="Transparent">Edit</furo-ui5-button>
      <furo-ui5-text-input value="jane.doe@example.com"></furo-ui5-text-input>
    </furo-ui5-subsection>
  `,
};

export const WithActions: StoryObj = {
  args: {
    heading: "Order Items",
    headingLevel: "H4",
    showMoreText: "show details",
    showLessText: "hide details",
  },
  render: renderArgs => html`
    <furo-ui5-subsection
      heading="${ifDefined(renderArgs.heading)}"
      heading-level="${ifDefined(renderArgs.headingLevel)}"
      show-more-text="${ifDefined(renderArgs.showMoreText)}"
      show-less-text="${ifDefined(renderArgs.showLessText)}"
    >
      <furo-ui5-title slot="headlineStart" level="H6">12 items</furo-ui5-title>
      <furo-ui5-button slot="headlineEnd" icon="add" design="Transparent">Add</furo-ui5-button>
      <furo-ui5-button slot="action" icon="edit" design="Transparent">Edit</furo-ui5-button>
      <furo-ui5-text-input value="Primary content goes here"></furo-ui5-text-input>
      <div slot="more">Additional details revealed when expanded.</div>
    </furo-ui5-subsection>
  `,
};

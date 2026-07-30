import "@/Assets";
import "@/elements/table-toolbar-separator";
import "@/elements/button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-table-toolbar-separator";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/TableToolbarSeparator",
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
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.25rem;">
      <furo-ui5-button icon="add" design="Transparent">Add</furo-ui5-button>
      <furo-ui5-button icon="edit" design="Transparent">Edit</furo-ui5-button>
      <furo-ui5-table-toolbar-separator></furo-ui5-table-toolbar-separator>
      <furo-ui5-button icon="sort" design="Transparent">Sort</furo-ui5-button>
      <furo-ui5-button icon="filter" design="Transparent">Filter</furo-ui5-button>
      <furo-ui5-table-toolbar-separator></furo-ui5-table-toolbar-separator>
      <furo-ui5-button icon="excel-attachment" design="Transparent">Export</furo-ui5-button>
    </div>
  `,
};

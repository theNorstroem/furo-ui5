import "@/elements/toolbar";
import "@/elements/toolbar-select";
import "@/elements/toolbar-select-option";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-toolbar-select";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Toolbar/ToolbarSelect",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/ToolbarSelect/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-toolbar>
          <furo-ui5-toolbar-select>
            <furo-ui5-toolbar-select-option selected>All</furo-ui5-toolbar-select-option>
            <furo-ui5-toolbar-select-option>Open</furo-ui5-toolbar-select-option>
            <furo-ui5-toolbar-select-option>Closed</furo-ui5-toolbar-select-option>
          </furo-ui5-toolbar-select>
        </furo-ui5-toolbar>
  `,
};

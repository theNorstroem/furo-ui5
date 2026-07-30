import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-separator";
import "@/elements/toolbar-spacer";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-toolbar";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Toolbar/Toolbar",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Toolbar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-toolbar>
          <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-button text="Edit"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
          <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
          <furo-ui5-toolbar-button icon="sort" tooltip="Sort"></furo-ui5-toolbar-button>
        </furo-ui5-toolbar>
  `,
};

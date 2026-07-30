import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-spacer";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-toolbar-spacer";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Toolbar/ToolbarSpacer",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ToolbarSpacer/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-toolbar>
          <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
          <furo-ui5-toolbar-button icon="settings" tooltip="Settings"></furo-ui5-toolbar-button>
        </furo-ui5-toolbar>
  `,
};

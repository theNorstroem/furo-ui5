import "@/elements/tabcontainer";
import "@/elements/tab";
import "@/elements/tab-separator";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-tab-separator";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "container/TabContainer/TabSeparator",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/TabSeparator/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-tabcontainer>
          <furo-ui5-tab text="Overview" selected>Overview content</furo-ui5-tab>
          <furo-ui5-tab-separator></furo-ui5-tab-separator>
          <furo-ui5-tab text="Settings">Settings content</furo-ui5-tab>
        </furo-ui5-tabcontainer>
  `,
};

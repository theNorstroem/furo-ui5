import "@/elements/shellbar";
import "@/elements/shellbar-item";
import "@/elements/shellbar-spacer";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-shellbar-spacer";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/ShellBarSpacer",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ShellBarSpacer/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/shell-bar/",
      }),
    },
  },
};
export default meta;

// The spacer pushes the items after it to the trailing edge of the shellbar.
export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-shellbar primary-title="ShellBarSpacer">
      <furo-ui5-shellbar-item icon="home" text="Home"></furo-ui5-shellbar-item>
      <furo-ui5-shellbar-spacer></furo-ui5-shellbar-spacer>
      <furo-ui5-shellbar-item icon="settings" text="Settings"></furo-ui5-shellbar-item>
    </furo-ui5-shellbar>
  `,
};

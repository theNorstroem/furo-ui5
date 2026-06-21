import "@/elements/shellbar";
import "@/elements/shellbar-item";
import "@ui5/webcomponents-icons/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-shellbar-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/ShellBarItem",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ShellBarItem/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/shell-bar/",
      }),
    },
  },
};
export default meta;

// shellbar-item only renders inside a shellbar, so the story wraps it in one.
export const Default: StoryObj = {
  args: {
    icon: "bell",
    text: "Notifications",
    count: "3",
  },
  render: renderArgs => html`
    <furo-ui5-shellbar primary-title="ShellBarItem">
      <furo-ui5-shellbar-item
        icon="${ifDefined(renderArgs.icon)}"
        text="${ifDefined(renderArgs.text)}"
        count="${ifDefined(renderArgs.count)}"
      ></furo-ui5-shellbar-item>
    </furo-ui5-shellbar>
  `,
};

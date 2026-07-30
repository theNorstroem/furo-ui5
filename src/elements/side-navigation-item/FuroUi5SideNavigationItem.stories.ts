import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-side-navigation-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/SideNavigation/SideNavigationItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/SideNavigationItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-side-navigation style="height:200px">
          <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
          <furo-ui5-side-navigation-item text="Settings" icon="action-settings"></furo-ui5-side-navigation-item>
        </furo-ui5-side-navigation>
  `,
};

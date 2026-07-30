import "@/elements/navigation-menu";
import "@/elements/navigation-menu-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-navigation-menu";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/NavigationMenu",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/NavigationMenu/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-navigation-menu open opener="nav-anchor">
          <furo-ui5-navigation-menu-item text="Overview" icon="home"></furo-ui5-navigation-menu-item>
          <furo-ui5-navigation-menu-item text="Reports" icon="bar-chart"></furo-ui5-navigation-menu-item>
        </furo-ui5-navigation-menu>
        <div id="nav-anchor">Menu anchor</div>
  `,
};

import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@/elements/side-navigation-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-side-navigation-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/SideNavigation/SideNavigationGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/SideNavigationGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-side-navigation style="height:240px">
          <furo-ui5-side-navigation-group text="Analytics" expanded>
            <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
            <furo-ui5-side-navigation-item text="Forecast" icon="line-chart"></furo-ui5-side-navigation-item>
          </furo-ui5-side-navigation-group>
        </furo-ui5-side-navigation>
  `,
};

import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@/elements/side-navigation-sub-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-side-navigation-sub-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/SideNavigation/SideNavigationSubItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/SideNavigationSubItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-side-navigation style="height:220px">
          <furo-ui5-side-navigation-item text="Reports" icon="bar-chart" expanded>
            <furo-ui5-side-navigation-sub-item text="Monthly"></furo-ui5-side-navigation-sub-item>
            <furo-ui5-side-navigation-sub-item text="Yearly"></furo-ui5-side-navigation-sub-item>
          </furo-ui5-side-navigation-item>
        </furo-ui5-side-navigation>
  `,
};

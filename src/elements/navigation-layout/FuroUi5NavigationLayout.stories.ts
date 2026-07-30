import "@/elements/navigation-layout";
import "@/elements/shellbar";
import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-navigation-layout";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/NavigationLayout",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/NavigationLayout/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-navigation-layout style="height:320px">
          <furo-ui5-shellbar slot="header" primary-title="My App"></furo-ui5-shellbar>
          <furo-ui5-side-navigation slot="sideContent">
            <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
            <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
          </furo-ui5-side-navigation>
          <div style="padding:1rem">Page content</div>
        </furo-ui5-navigation-layout>
  `,
};

import "@/elements/tabcontainer";
import "@/elements/tab";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { BackgroundDesign, OverflowMode, TabLayout } from "@/types";

const component = "furo-ui5-tabcontainer";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "contentBackgroundDesign", Object.values(BackgroundDesign));
ArgsSetEnum(argTypes, "headerBackgroundDesign", Object.values(BackgroundDesign));
ArgsSetEnum(argTypes, "overflowMode", Object.values(OverflowMode));
ArgsSetEnum(argTypes, "tabLayout", Object.values(TabLayout));

const meta: Meta = {
  title: "container/TabContainer",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/TabContainer/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tab-bar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-tabcontainer
      ?collapsed="${renderArgs.collapsed}"
      content-background-design="${ifDefined(renderArgs.contentBackgroundDesign)}"
      header-background-design="${ifDefined(renderArgs.headerBackgroundDesign)}"
      ?no-auto-selection="${renderArgs.noAutoSelection}"
      overflow-mode="${ifDefined(renderArgs.overflowMode)}"
      tab-layout="${ifDefined(renderArgs.tabLayout)}"
    >
      <furo-ui5-tab text="Overview">Overview content</furo-ui5-tab>
      <furo-ui5-tab text="Details">Details content</furo-ui5-tab>
      <furo-ui5-tab text="Settings">Settings content</furo-ui5-tab>
    </furo-ui5-tabcontainer>
  `,
};

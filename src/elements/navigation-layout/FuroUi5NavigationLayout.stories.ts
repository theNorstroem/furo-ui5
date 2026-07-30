import "@/elements/navigation-layout";
import "@/elements/shellbar";
import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { NavigationLayoutMode } from "@/types";

const component = "furo-ui5-navigation-layout";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "mode", Object.values(NavigationLayoutMode));

const meta: Meta = {
  title: "layout/NavigationLayout",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/NavigationLayout/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-navigation-layout mode="${ifDefined(renderArgs.mode)}" style="height:320px">
      <furo-ui5-shellbar slot="header" primary-title="My App"></furo-ui5-shellbar>
      <furo-ui5-side-navigation slot="sideContent">
        <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
        <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
      </furo-ui5-side-navigation>
      <div style="padding:1rem">Page content</div>
    </furo-ui5-navigation-layout>
  `,
};

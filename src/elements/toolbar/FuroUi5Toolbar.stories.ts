import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-separator";
import "@/elements/toolbar-spacer";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ToolbarAlign, ToolbarDesign } from "@/types";

const component = "furo-ui5-toolbar";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "alignContent", Object.values(ToolbarAlign));
ArgsSetEnum(argTypes, "design", Object.values(ToolbarDesign));

const meta: Meta = {
  title: "layout/Toolbar/Toolbar",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Toolbar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-toolbar
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      align-content="${ifDefined(renderArgs.alignContent)}"
      design="${ifDefined(renderArgs.design)}"
      overflow-button-accessible-name="${ifDefined(renderArgs.overflowButtonAccessibleName)}"
    >
      <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
      <furo-ui5-toolbar-button text="Edit"></furo-ui5-toolbar-button>
      <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
      <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
      <furo-ui5-toolbar-button icon="sort" tooltip="Sort"></furo-ui5-toolbar-button>
    </furo-ui5-toolbar>
  `,
};

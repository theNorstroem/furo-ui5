import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-spacer";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ToolbarItemOverflowBehavior } from "@/types";

const component = "furo-ui5-toolbar-spacer";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "overflowPriority", Object.values(ToolbarItemOverflowBehavior));

const meta: Meta = {
  title: "layout/Toolbar/ToolbarSpacer",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ToolbarSpacer/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-toolbar>
      <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
      <furo-ui5-toolbar-spacer
        overflow-priority="${ifDefined(renderArgs.overflowPriority)}"
        ?prevent-overflow-closing="${renderArgs.preventOverflowClosing}"
        width="${ifDefined(renderArgs.width)}"
      ></furo-ui5-toolbar-spacer>
      <furo-ui5-toolbar-button icon="settings" tooltip="Settings"></furo-ui5-toolbar-button>
    </furo-ui5-toolbar>
  `,
};

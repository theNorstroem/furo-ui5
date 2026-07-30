import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ButtonDesign, ToolbarItemOverflowBehavior } from "@/types";

const component = "furo-ui5-toolbar-button";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));
ArgsSetEnum(argTypes, "overflowPriority", Object.values(ToolbarItemOverflowBehavior));

const meta: Meta = {
  title: "layout/Toolbar/ToolbarButton",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ToolbarButton/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    design: "Emphasized",
    text: "Create",
  },
  render: renderArgs => html`
    <furo-ui5-toolbar>
      <furo-ui5-toolbar-button
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
        design="${ifDefined(renderArgs.design)}"
        ?disabled="${renderArgs.disabled}"
        end-icon="${ifDefined(renderArgs.endIcon)}"
        icon="${ifDefined(renderArgs.icon)}"
        overflow-priority="${ifDefined(renderArgs.overflowPriority)}"
        ?prevent-overflow-closing="${renderArgs.preventOverflowClosing}"
        ?show-overflow-text="${renderArgs.showOverflowText}"
        text="${ifDefined(renderArgs.text)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        width="${ifDefined(renderArgs.width)}"
      ></furo-ui5-toolbar-button>
      <furo-ui5-toolbar-button text="Delete" design="Negative" icon="delete"></furo-ui5-toolbar-button>
    </furo-ui5-toolbar>
  `,
};

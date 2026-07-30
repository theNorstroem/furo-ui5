import "@/elements/context-menu";
import "@/elements/menu-item";
import "@/elements/menu-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-menu-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/ContextMenu/MenuItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MenuItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-context-menu open opener="anchor">
          <furo-ui5-menu-item-group item-selection-mode="Single">
            <furo-ui5-menu-item text="List view"></furo-ui5-menu-item>
            <furo-ui5-menu-item text="Grid view"></furo-ui5-menu-item>
          </furo-ui5-menu-item-group>
        </furo-ui5-context-menu>
        <div id="anchor">Right-click target</div>
  `,
};

import "@/elements/context-menu";
import "@/elements/menu-item";
import "@/elements/menu-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { MenuItemGroupCheckMode } from "@/types";

const component = "furo-ui5-menu-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "checkMode", Object.values(MenuItemGroupCheckMode));

const meta: Meta = {
  title: "navigation/ContextMenu/MenuItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MenuItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-context-menu open opener="anchor">
      <furo-ui5-menu-item-group check-mode="${ifDefined(renderArgs.checkMode)}">
        <furo-ui5-menu-item text="List view"></furo-ui5-menu-item>
        <furo-ui5-menu-item text="Grid view"></furo-ui5-menu-item>
      </furo-ui5-menu-item-group>
    </furo-ui5-context-menu>
    <div id="anchor">Right-click target</div>
  `,
};

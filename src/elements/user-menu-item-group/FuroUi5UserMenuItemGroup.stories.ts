import "@/elements/user-menu";
import "@/elements/user-menu-item";
import "@/elements/user-menu-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { MenuItemGroupCheckMode } from "@/types";

const component = "furo-ui5-user-menu-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "checkMode", Object.values(MenuItemGroupCheckMode));

const meta: Meta = {
  title: "layout/Shellbar/UserMenuItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-user-menu open>
      <furo-ui5-user-menu-item-group check-mode="${ifDefined(renderArgs.checkMode)}" header-text="Preferences">
        <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
        <furo-ui5-user-menu-item text="Theme" icon="palette"></furo-ui5-user-menu-item>
      </furo-ui5-user-menu-item-group>
    </furo-ui5-user-menu>
  `,
};

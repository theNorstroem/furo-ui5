import "@/elements/user-menu";
import "@/elements/user-menu-item";
import "@/elements/user-menu-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-user-menu-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/UserMenuItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-user-menu open>
          <furo-ui5-user-menu-item-group header-text="Preferences">
            <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
            <furo-ui5-user-menu-item text="Theme" icon="palette"></furo-ui5-user-menu-item>
          </furo-ui5-user-menu-item-group>
        </furo-ui5-user-menu>
  `,
};

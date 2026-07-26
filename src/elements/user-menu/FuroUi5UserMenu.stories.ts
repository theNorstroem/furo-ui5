import "@/elements/user-menu";
import "@/elements/button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";
import "@ui5/webcomponents-fiori/dist/UserMenuAccount.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-user-menu";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/UserMenu",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenu/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/shell-bar/",
      }),
    },
  },
};
export default meta;

// UserMenu is a popup anchored to an opener; rendered open here so it is visible.
export const Default: StoryObj = {
  args: {
    open: true,
    showManageAccount: true,
    showOtherAccounts: true,
  },
  render: renderArgs => html`
    <furo-ui5-button id="user-menu-opener">Open user menu</furo-ui5-button>
    <furo-ui5-user-menu
      opener="user-menu-opener"
      ?open="${renderArgs.open}"
      ?show-manage-account="${renderArgs.showManageAccount}"
      ?show-other-accounts="${renderArgs.showOtherAccounts}"
      ?show-edit-accounts="${renderArgs.showEditAccounts}"
    >
      <ui5-user-menu-account slot="accounts" selected avatar-initials="JD" title-text="Jane Doe" subtitle-text="jane.doe@example.com"></ui5-user-menu-account>
      <ui5-user-menu-account slot="accounts" avatar-initials="AB" title-text="Alex Brown" subtitle-text="alex.brown@example.com"></ui5-user-menu-account>
      <ui5-user-menu-item icon="action-settings" text="Settings"></ui5-user-menu-item>
      <ui5-user-menu-item icon="opportunity" text="Privacy Policy"></ui5-user-menu-item>
    </furo-ui5-user-menu>
  `,
};

import "@/elements/user-menu";
import "@/elements/button";
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
  title: "layout/Shellbar/UserMenu/UserMenuItemGroup",
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

const openMenu = (e: Event): void => {
  const popover = document.getElementById("user-menu") as (HTMLElement & { showAt: (o: HTMLElement) => void }) | null;
  popover?.showAt(e.target as HTMLElement);
};

export const Default: StoryObj = {
  args: {
    checkMode: "Single",
  },
  render: renderArgs => html`
    <furo-ui5-button id="user-menu-opener" @click="${openMenu}">Open user menu</furo-ui5-button>
    <furo-ui5-user-menu
      id="user-menu"
      opener="user-menu-opener"
      ?show-manage-account="${renderArgs.showManageAccount}"
      ?show-other-accounts="${renderArgs.showOtherAccounts}"
      ?show-edit-accounts="${renderArgs.showEditAccounts}"
    >
      <furo-ui5-user-menu-account
        slot="accounts"
        selected
        avatar-initials="JD"
        title-text="Jane Doe"
        subtitle-text="jane.doe@example.com"
      ></furo-ui5-user-menu-account>
      <furo-ui5-user-menu-account
        slot="accounts"
        avatar-initials="AB"
        title-text="Alex Brown"
        subtitle-text="alex.brown@example.com"
      ></furo-ui5-user-menu-account>
      <furo-ui5-user-menu-item icon="action-settings" text="Settings">
        <furo-ui5-user-menu-item-group check-mode="${ifDefined(renderArgs.checkMode)}">
          <furo-ui5-user-menu-item text="German" icon="action-settings"></furo-ui5-user-menu-item>
          <furo-ui5-user-menu-item text="English" icon="palette" checked></furo-ui5-user-menu-item>
        </furo-ui5-user-menu-item-group>
      </furo-ui5-user-menu-item>
      <furo-ui5-user-menu-item icon="opportunity" text="Privacy Policy"></furo-ui5-user-menu-item>
    </furo-ui5-user-menu>
  `,
};

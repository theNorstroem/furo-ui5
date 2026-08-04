import "@/elements/user-menu";
import "@/elements/button";
import "@/elements/user-menu-account";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { AvatarColorScheme } from "@/types";

const component = "furo-ui5-user-menu-account";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "avatarColorScheme", Object.values(AvatarColorScheme));

const meta: Meta = {
  title: "layout/Shellbar/UserMenu/UserMenuAccount",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenuAccount/",
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
    avatarSrc: "https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png",
    subtitleText: "jane.doe@example.com",
    titleText: "Jane Doe",
  },
  render: renderArgs => html`
    <furo-ui5-button id="user-menu-opener" @click="${openMenu}">Open user menu</furo-ui5-button>
    <furo-ui5-user-menu id="user-menu">
      <furo-ui5-user-menu-account
        additional-info="${ifDefined(renderArgs.additionalInfo)}"
        avatar-color-scheme="${ifDefined(renderArgs.avatarColorScheme)}"
        avatar-initials="${ifDefined(renderArgs.avatarInitials)}"
        avatar-src="${ifDefined(renderArgs.avatarSrc)}"
        description="${ifDefined(renderArgs.description)}"
        ?loading="${renderArgs.loading}"
        subtitle-text="${ifDefined(renderArgs.subtitleText)}"
        title-text="${ifDefined(renderArgs.titleText)}"
        slot="accounts"
        selected
      ></furo-ui5-user-menu-account>
    </furo-ui5-user-menu>
  `,
};

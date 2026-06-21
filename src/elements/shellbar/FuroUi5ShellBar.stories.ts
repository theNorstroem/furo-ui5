import "@/elements/shellbar";
import "@/elements/shellbar-item";
import "@/elements/shellbar-search";
import "@/elements/shellbar-spacer";
import "@/elements/user-menu";
import "@/elements/button";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-icons/AllIcons";
import "@ui5/webcomponents-fiori/dist/SearchItem.js";
import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";
import "@ui5/webcomponents-fiori/dist/UserMenuAccount.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-shellbar";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// inline logo so the story has no external asset dependency
const logo =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjMDg1Y2FmIi8+PHRleHQgeD0iMTYiIHk9IjIxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RjwvdGV4dD48L3N2Zz4=";

const meta: Meta = {
  title: "layout/Shellbar/ShellBar",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ShellBar/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/shell-bar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    primaryTitle: "Furo App",
    secondaryTitle: "Demo",
    notificationsCount: "2",
    showNotifications: true,
    showProductSwitch: true,
    showSearchField: true,
    shadow: true,
  },
  render: renderArgs => html`
    <furo-ui5-shellbar
      primary-title="${ifDefined(renderArgs.primaryTitle)}"
      secondary-title="${ifDefined(renderArgs.secondaryTitle)}"
      notifications-count="${ifDefined(renderArgs.notificationsCount)}"
      ?show-notifications="${renderArgs.showNotifications}"
      ?show-product-switch="${renderArgs.showProductSwitch}"
      ?show-search-field="${renderArgs.showSearchField}"
      ?shadow="${renderArgs.shadow}"
      @profile-click="${(e: Event) => {
        const menu = document.getElementById("app-user-menu") as (HTMLElement & { showAt: (o: HTMLElement) => void }) | null;
        menu?.showAt(e.target as HTMLElement);
      }}"
    >
      <img slot="logo" src="${logo}" alt="Furo logo" />

      <furo-ui5-shellbar-search slot="searchField" placeholder="Search...">
        <ui5-search-item text="Dashboard"></ui5-search-item>
        <ui5-search-item text="Reports"></ui5-search-item>
        <ui5-search-item text="Settings"></ui5-search-item>
      </furo-ui5-shellbar-search>

      <furo-ui5-shellbar-item icon="add" text="Add"></furo-ui5-shellbar-item>
      <furo-ui5-shellbar-item icon="settings" text="Settings"></furo-ui5-shellbar-item>

      <ui5-avatar slot="profile" initials="JD" color-scheme="Accent6"></ui5-avatar>
    </furo-ui5-shellbar>

    <furo-ui5-user-menu id="app-user-menu" show-manage-account show-other-accounts>
      <ui5-user-menu-account slot="accounts" selected avatar-initials="JD" title-text="Jane Doe" subtitle-text="jane.doe@example.com"></ui5-user-menu-account>
      <ui5-user-menu-item icon="action-settings" text="Settings"></ui5-user-menu-item>
      <ui5-user-menu-item icon="opportunity" text="Privacy Policy"></ui5-user-menu-item>
    </furo-ui5-user-menu>
  `,
};

export const Composition: StoryObj = {
  name: "Items, Search & Spacer",
  args: {
    primaryTitle: "Composition",
    showSearchField: true,
  },
  render: renderArgs => html`
    <furo-ui5-shellbar primary-title="${ifDefined(renderArgs.primaryTitle)}" ?show-search-field="${renderArgs.showSearchField}">
      <furo-ui5-shellbar-search slot="searchField" placeholder="Find anything..." show-clear-icon>
        <ui5-search-item text="Recent: Q3 numbers"></ui5-search-item>
      </furo-ui5-shellbar-search>

      <furo-ui5-shellbar-item icon="home" text="Home"></furo-ui5-shellbar-item>
      <furo-ui5-shellbar-spacer></furo-ui5-shellbar-spacer>
      <furo-ui5-shellbar-item icon="warning" text="Alerts" count="3"></furo-ui5-shellbar-item>
      <furo-ui5-shellbar-item icon="settings" text="Settings"></furo-ui5-shellbar-item>
    </furo-ui5-shellbar>
  `,
};

export const Minimal: StoryObj = {
  args: {
    primaryTitle: "Minimal",
  },
  render: renderArgs => html`
    <furo-ui5-shellbar primary-title="${ifDefined(renderArgs.primaryTitle)}">
      <furo-ui5-shellbar-item icon="settings" text="Settings"></furo-ui5-shellbar-item>
    </furo-ui5-shellbar>
  `,
};

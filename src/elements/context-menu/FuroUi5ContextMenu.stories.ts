import "@/elements/button";
import "@/elements/context-menu";
import "@/elements/pretty-json";
import "@/elements/title";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import { ARRAY } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import type { MenuItemSelectedEventDetail } from "@/elements/context-menu/FuroUi5ContextMenu";
import { type IMenuitem, Menuitem } from "@/models/furoui5/Menuitem";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { PopoverHorizontalAlign, PopoverPlacement } from "@/types";

const component = "furo-ui5-context-menu";
const { events, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, {}, []);
ArgsSetEnum(argTypes, "horizontalAlign", Object.values(PopoverHorizontalAlign));
ArgsSetEnum(argTypes, "placement", Object.values(PopoverPlacement));

const flatMenu: ARRAY<Menuitem, IMenuitem> = ARRAY.Builder(Menuitem, [
  { id: "new", displayName: "New", icon: "create", command: "Ctrl+N" },
  { id: "open", displayName: "Open…", icon: "open-folder", command: "Ctrl+O" },
  { id: "save", displayName: "Save", icon: "save", command: "Ctrl+S" },
  { id: "duplicate", displayName: "Duplicate", icon: "duplicate", leadingDivider: true },
  { id: "delete", displayName: "Delete…", icon: "delete", command: "Del", disabled: true },
]);

const nestedMenu: ARRAY<Menuitem, IMenuitem> = ARRAY.Builder(Menuitem, [
  { id: "edit", displayName: "Edit", icon: "edit" },
  {
    id: "share",
    displayName: "Share",
    icon: "share",
    children: [
      { id: "share-link", displayName: "Copy link", icon: "chain-link" },
      { id: "share-email", displayName: "Send by mail", icon: "email" },
      {
        id: "share-team",
        displayName: "Team",
        children: [
          { id: "team-marketing", displayName: "Marketing" },
          { id: "team-engineering", displayName: "Engineering" },
          { id: "team-design", displayName: "Design" },
        ],
      },
    ],
  },
  {
    id: "export",
    displayName: "Export",
    icon: "download",
    leadingDivider: true,
    children: [
      { id: "export-pdf", displayName: "PDF" },
      { id: "export-csv", displayName: "CSV" },
    ],
  },
  { id: "delete", displayName: "Delete…", icon: "delete", command: "Del", disabled: true },
]);

const contextMenu: ARRAY<Menuitem, IMenuitem> = ARRAY.Builder(Menuitem, [
  { id: "rename", displayName: "Rename", icon: "edit" },
  { id: "archive", displayName: "Archive", icon: "inbox" },
  { id: "delete", displayName: "Delete…", icon: "delete", leadingDivider: true },
]);

const meta: Meta = {
  title: "layout/ContextMenu",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  argTypes,
  parameters: {
    actions: { handles: events },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "2.0.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Menu/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/menu/",
      }),
    },
  },
};
export default meta;

const renderSelection = (id: string) => (e: Event) => {
  const detail = (e as CustomEvent<MenuItemSelectedEventDetail>).detail;
  const target = document.getElementById(id);
  if (target === null) {
    return;
  }
  target.textContent = JSON.stringify(
    {
      context: detail.context,
      id: detail.menuitem.id.value,
      displayName: detail.menuitem.displayName.value,
    },
    null,
    2
  );
};

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-button
      id="cm-default-opener"
      @click="${() => {
        const el = document.getElementById("cm-default-menu") as HTMLElement & {
          opener: HTMLElement | string;
          trigger: () => void;
        };
        el.opener = "cm-default-opener";
        el.trigger();
      }}"
      >Open menu</furo-ui5-button
    >

    <furo-ui5-context-menu
      header-text="${ifDefined(renderArgs.headerText)}"
      horizontal-align="${ifDefined(renderArgs.horizontalAlign)}"
      ?loading="${renderArgs.loading}"
      loading-delay="${ifDefined(renderArgs.loadingDelay)}"
      ?open="${renderArgs.open}"
      opener="${ifDefined(renderArgs.opener)}"
      placement="${ifDefined(renderArgs.placement)}"
      id="cm-default-menu"
      .model="${flatMenu}"
      @menu-item-selected="${renderSelection("cm-default-log")}"
    ></furo-ui5-context-menu>

    <furo-ui5-title>Last selection</furo-ui5-title>
    <pre id="cm-default-log">(nothing selected)</pre>
  `,
};

export const Hierarchical: StoryObj = {
  render: () => html`
    <p>Use Arrow Right (or hover) to expand the nested submenus.</p>
    <furo-ui5-button
      id="cm-hier-opener"
      design="Emphasized"
      @click="${() => {
        const el = document.getElementById("cm-hier-menu") as HTMLElement & {
          opener: HTMLElement | string;
          trigger: () => void;
        };
        el.opener = "cm-hier-opener";
        el.trigger();
      }}"
      >Open nested menu</furo-ui5-button
    >

    <furo-ui5-context-menu id="cm-hier-menu" .model="${nestedMenu}" @menu-item-selected="${renderSelection("cm-hier-log")}"></furo-ui5-context-menu>

    <furo-ui5-title>Last selection</furo-ui5-title>
    <pre id="cm-hier-log">(nothing selected)</pre>
  `,
};

export const WithContext: StoryObj = {
  render: () => html`
    <p>Each row triggers the same menu with a different context. The selected event echoes back which row triggered it.</p>
    ${["alpha", "beta", "gamma"].map(
      row => html`
        <div style="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;">
          <span style="min-width:6rem;">Row ${row}</span>
          <furo-ui5-button
            id="cm-ctx-${row}"
            @click="${() => {
              const el = document.getElementById("cm-ctx-menu") as HTMLElement & {
                opener: HTMLElement | string;
                triggerContext: (ctx: unknown) => void;
              };
              el.opener = `cm-ctx-${row}`;
              el.triggerContext({ row });
            }}"
            >Open</furo-ui5-button
          >
        </div>
      `
    )}

    <furo-ui5-context-menu id="cm-ctx-menu" .model="${contextMenu}" @menu-item-selected="${renderSelection("cm-ctx-log")}"></furo-ui5-context-menu>

    <furo-ui5-title>Last selection</furo-ui5-title>
    <pre id="cm-ctx-log">(nothing selected)</pre>
  `,
};

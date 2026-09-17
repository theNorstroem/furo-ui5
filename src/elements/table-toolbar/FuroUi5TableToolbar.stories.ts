import "@/Assets";
import "@/elements/table-toolbar";
import "@/elements/table-toolbar-separator";
import "@/elements/title";
import "@/elements/text-input";
import "@/elements/icon";
import "@/elements/button";
import "@/elements/toolbar";
import "@/elements/toolbar-button";
import "@/elements/toolbar-separator";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@/stories-shared/view-resizer";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-table-toolbar";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/TableToolbar",
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
        since: "2.0.0",
      }),
    },
  },
};
export default meta;

/**
 * A title in the default slot, a search field in the `middle` slot and a `furo-ui5-toolbar` in the
 * `action` slot. Using a toolbar for the actions gives you the overflow menu on small screens for free.
 */
export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-table-toolbar>
      <furo-ui5-title level="H3">Positions (23)</furo-ui5-title>

      <furo-ui5-text-input slot="middle" placeholder="ISIN, Valor, Ticker, Name">
        <furo-ui5-icon slot="icon" name="search"></furo-ui5-icon>
      </furo-ui5-text-input>

      <furo-ui5-toolbar slot="action" design="Transparent">
        <furo-ui5-toolbar-button text="Add Position" icon="add" design="Transparent"></furo-ui5-toolbar-button>
        <furo-ui5-toolbar-button
          accessible-name="Collapse"
          icon="collapse-all"
          design="Transparent"
          tooltip="Collapse all nodes"
        ></furo-ui5-toolbar-button>
        <furo-ui5-toolbar-button
          accessible-name="Expand"
          icon="expand-all"
          design="Transparent"
          tooltip="Expand nodes"
        ></furo-ui5-toolbar-button>
        <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
        <furo-ui5-toolbar-button accessible-name="Indent" icon="indent" design="Transparent"></furo-ui5-toolbar-button>
        <furo-ui5-toolbar-button
          accessible-name="Settings"
          icon="action-settings"
          design="Transparent"
        ></furo-ui5-toolbar-button>
      </furo-ui5-toolbar>
    </furo-ui5-table-toolbar>
  `,
};

/**
 * With nothing in the `middle` and `action` slots, both areas are removed from the layout and the title
 * sits on its own. Inspect the host: neither `has-middle` nor `has-action` is set.
 */
export const TitleOnly: StoryObj = {
  render: () => html`
    <furo-ui5-table-toolbar>
      <furo-ui5-title level="H3">Positions (23)</furo-ui5-title>
    </furo-ui5-table-toolbar>
  `,
};

/**
 * Without a middle area the start column hugs its content and the action area takes the free space, so
 * the actions stay flush right.
 */
export const WithoutMiddle: StoryObj = {
  render: () => html`
    <furo-ui5-table-toolbar>
      <furo-ui5-title level="H3">Positions (23)</furo-ui5-title>

      <furo-ui5-toolbar slot="action" design="Transparent">
        <furo-ui5-toolbar-button text="Create" icon="add" design="Transparent"></furo-ui5-toolbar-button>
        <furo-ui5-toolbar-button text="Edit" icon="edit" design="Transparent"></furo-ui5-toolbar-button>
      </furo-ui5-toolbar>
    </furo-ui5-table-toolbar>
  `,
};

/**
 * Plain buttons instead of a toolbar, with `furo-ui5-table-toolbar-separator` between the action groups:
 * business actions, then view settings, then generic actions. Use this when you do not need the overflow
 * behaviour of `furo-ui5-toolbar`.
 */
export const WithSeparators: StoryObj = {
  render: () => html`
    <furo-ui5-table-toolbar>
      <furo-ui5-title level="H3">Positions (23)</furo-ui5-title>

      <furo-ui5-button slot="action" icon="add" design="Transparent">Add</furo-ui5-button>
      <furo-ui5-button slot="action" icon="edit" design="Transparent">Edit</furo-ui5-button>
      <furo-ui5-table-toolbar-separator slot="action"></furo-ui5-table-toolbar-separator>
      <furo-ui5-button slot="action" icon="sort" design="Transparent">Sort</furo-ui5-button>
      <furo-ui5-button slot="action" icon="filter" design="Transparent">Filter</furo-ui5-button>
      <furo-ui5-table-toolbar-separator slot="action"></furo-ui5-table-toolbar-separator>
      <furo-ui5-button slot="action" icon="excel-attachment" design="Transparent">Export</furo-ui5-button>
    </furo-ui5-table-toolbar>
  `,
};

/**
 * The toolbar reacts to its own width, not the viewport width (`container-type: inline-size`). Drag the
 * handle in the bottom right corner through 540px and 375px to see the three layout regimes; the readout
 * in the bottom left corner tells you where you are.
 *
 * `<view-resizer>` is a repo-private story helper from `@/stories-shared/view-resizer`, registered for
 * every story in `.storybook/preview.ts`, so any story can use it.
 */
export const Resizable: StoryObj = {
  render: () => html`
    <view-resizer show-width>
      <furo-ui5-table-toolbar>
        <furo-ui5-title level="H3">Positions (23)</furo-ui5-title>

        <furo-ui5-text-input slot="middle" placeholder="Search"></furo-ui5-text-input>

        <furo-ui5-toolbar slot="action" design="Transparent">
          <furo-ui5-toolbar-button text="Create" icon="add" design="Transparent"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-button accessible-name="Sort" icon="sort" design="Transparent"></furo-ui5-toolbar-button>
          <furo-ui5-toolbar-button accessible-name="Settings" icon="action-settings" design="Transparent"></furo-ui5-toolbar-button>
        </furo-ui5-toolbar>
      </furo-ui5-table-toolbar>
    </view-resizer>
  `,
};

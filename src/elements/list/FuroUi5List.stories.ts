import "@/Assets";
import "@/elements/list";
import "@/elements/li";
import "@/elements/li-custom";
import "@/elements/li-group";
import "@/elements/li-group-header";
import "@/elements/avatar";
import "@/elements/icon";
import "@/elements/title";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ListAccessibleRole, ListGrowingMode, ListSelectionMode, ListSeparator } from "@/types";

const component = "furo-ui5-list";
const componentInfo = {
  since: "0.8.0",
  originalComponent: "https://ui5.github.io/webcomponents/components/List/",
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/list/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
// `listItems` is the slot-derived item collection, not a settable property.
ArgsTransormAll(argTypes, args, ["listItems"]);

// Turn the four enum-typed properties into select controls. These names must be the
// camelCase form, because ArgsTransormAll has already renamed the dashed attributes.
ArgsSetEnum(argTypes, "accessibleRole", Object.values(ListAccessibleRole));
ArgsSetEnum(argTypes, "growing", Object.values(ListGrowingMode));
ArgsSetEnum(argTypes, "selectionMode", Object.values(ListSelectionMode));
ArgsSetEnum(argTypes, "separators", Object.values(ListSeparator));

const meta: Meta = {
  title: "display/List",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  argTypes,

  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
    },
  },
};
export default meta;

/**
 * Every documented property is bound to a control — change any of them in the
 * **Controls** panel and the list below reacts.
 *
 * The items come from the `defaultSlot` arg, so you can edit the markup directly.
 */
export const Default: StoryObj = {
  args: {
    headerText: "Countries",
    footerText: "3 of 3 shown",
    selectionMode: "None",
    separators: "All",
    growing: "None",
    accessibleRole: "List",
    defaultSlot: `
      <furo-ui5-li icon="world" description="Vienna">Austria</furo-ui5-li>
      <furo-ui5-li icon="world" description="Berlin">Germany</furo-ui5-li>
      <furo-ui5-li icon="world" description="Bern">Switzerland</furo-ui5-li>`,
  },
  render: renderArgs => html`
    <furo-ui5-list
      ?indent="${renderArgs.indent}"
      ?loading="${renderArgs.loading}"
      ?sticky-header="${renderArgs.stickyHeader}"
      accessible-role="${ifDefined(renderArgs.accessibleRole)}"
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      accessible-description="${ifDefined(renderArgs.accessibleDescription)}"
      accessible-description-ref="${ifDefined(renderArgs.accessibleDescriptionRef)}"
      header-text="${ifDefined(renderArgs.headerText)}"
      footer-text="${ifDefined(renderArgs.footerText)}"
      no-data-text="${ifDefined(renderArgs.noDataText)}"
      growing="${ifDefined(renderArgs.growing)}"
      growing-button-text="${ifDefined(renderArgs.growingButtonText)}"
      loading-delay="${ifDefined(renderArgs.loadingDelay)}"
      selection-mode="${ifDefined(renderArgs.selectionMode)}"
      separators="${ifDefined(renderArgs.separators)}"
    >
      ${unsafeHTML(renderArgs.defaultSlot)}
    </furo-ui5-list>
  `,
};

/**
 * `selection-mode` drives how items are picked. `Delete` renders a per-item delete
 * button and fires `item-delete` instead of selecting.
 *
 * Watch the **Actions** panel for `selection-change` and `item-delete`.
 */
export const SelectionModes: StoryObj = {
  args: {},
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <furo-ui5-list header-text="Single" selection-mode="Single" style="min-width:14rem">
        <furo-ui5-li selected>Austria</furo-ui5-li>
        <furo-ui5-li>Germany</furo-ui5-li>
        <furo-ui5-li>Switzerland</furo-ui5-li>
      </furo-ui5-list>

      <furo-ui5-list header-text="Multiple" selection-mode="Multiple" style="min-width:14rem">
        <furo-ui5-li selected>Austria</furo-ui5-li>
        <furo-ui5-li selected>Germany</furo-ui5-li>
        <furo-ui5-li>Switzerland</furo-ui5-li>
      </furo-ui5-list>

      <furo-ui5-list header-text="Delete" selection-mode="Delete" style="min-width:14rem">
        <furo-ui5-li>Austria</furo-ui5-li>
        <furo-ui5-li>Germany</furo-ui5-li>
        <furo-ui5-li>Switzerland</furo-ui5-li>
      </furo-ui5-list>
    </div>
  `,
};

/**
 * Two ways to group items:
 *
 * - `furo-ui5-li-group` wraps its items and renders its own header;
 * - `furo-ui5-li-group-header` is a standalone heading placed between items.
 */
export const Grouped: StoryObj = {
  args: {},
  render: () => html`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <furo-ui5-list header-text="With li-group" style="min-width:16rem">
        <furo-ui5-li-group header-text="Europe">
          <furo-ui5-li>Austria</furo-ui5-li>
          <furo-ui5-li>Switzerland</furo-ui5-li>
        </furo-ui5-li-group>
        <furo-ui5-li-group header-text="Asia">
          <furo-ui5-li>Japan</furo-ui5-li>
        </furo-ui5-li-group>
      </furo-ui5-list>

      <furo-ui5-list header-text="With li-group-header" style="min-width:16rem">
        <furo-ui5-li-group-header>Europe</furo-ui5-li-group-header>
        <furo-ui5-li>Austria</furo-ui5-li>
        <furo-ui5-li>Switzerland</furo-ui5-li>
        <furo-ui5-li-group-header>Asia</furo-ui5-li-group-header>
        <furo-ui5-li>Japan</furo-ui5-li>
      </furo-ui5-list>
    </div>
  `,
};

/**
 * `growing="Button"` appends a "More" button; `growing="Scroll"` loads on scroll.
 * Either way the list fires `load-more`, which is where you would append the next page.
 *
 * `loading` plus `loading-delay` show the busy indicator while that page is in flight.
 */
export const Growing: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-list
      header-text="Growing by button"
      growing="Button"
      growing-button-text="Load more countries"
      style="max-width:20rem"
      @load-more="${() => {
        // eslint-disable-next-line no-console
        console.log("[list] load-more — append the next page here");
      }}"
    >
      <furo-ui5-li>Austria</furo-ui5-li>
      <furo-ui5-li>Germany</furo-ui5-li>
      <furo-ui5-li>Switzerland</furo-ui5-li>
    </furo-ui5-list>
  `,
};

/**
 * The `header` slot replaces `header-text` when you need more than a plain string —
 * note that setting both is not supported, the slot wins.
 *
 * `sticky-header` keeps it pinned while the list scrolls, and `furo-ui5-li-custom`
 * lets a row hold arbitrary markup.
 */
export const HeaderAndFooter: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-list sticky-header footer-text="3 of 128 shown" style="max-width:22rem;height:14rem;overflow:auto">
      <div slot="header" style="display:flex;align-items:center;gap:.5rem;padding:.5rem">
        <furo-ui5-icon name="world"></furo-ui5-icon>
        <furo-ui5-title level="H5">Countries</furo-ui5-title>
      </div>

      <furo-ui5-li-custom>
        <div style="display:flex;align-items:center;gap:.75rem;padding:.5rem">
          <furo-ui5-avatar size="XS" initials="AT"></furo-ui5-avatar>
          <div>
            <div><strong>Austria</strong></div>
            <small>Vienna &middot; 9.1 M</small>
          </div>
        </div>
      </furo-ui5-li-custom>

      <furo-ui5-li description="Berlin">Germany</furo-ui5-li>
      <furo-ui5-li description="Bern">Switzerland</furo-ui5-li>
    </furo-ui5-list>
  `,
};

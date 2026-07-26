import "@/Assets";
import "@/elements/header-panel";
import "@/elements/button";
import "@/elements/text-input";
import "@ui5/webcomponents/dist/Tag.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-header-panel";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/HeaderPanel",
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
        since: "2.0.0",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/dynamic-page-layout/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Sales Order 4711",
    secondaryText: "Acme Corporation",
    shadow: true,
    isFavorite: true,
  },
  render: renderArgs => html`
    <furo-ui5-header-panel
      header-text="${ifDefined(renderArgs.headerText)}"
      secondary-text="${ifDefined(renderArgs.secondaryText)}"
      ?shadow="${renderArgs.shadow}"
      ?is-favorite="${renderArgs.isFavorite}"
      ?fixed="${renderArgs.fixed}"
      ?collapsed="${renderArgs.collapsed}"
    >
      <furo-ui5-button slot="action" design="Emphasized">Edit</furo-ui5-button>
      <furo-ui5-button slot="action">Delete</furo-ui5-button>

      <ui5-tag slot="kpi" design="Set2" color-scheme="7">Open</ui5-tag>
      <ui5-tag slot="kpi" design="Set2" color-scheme="6">Priority High</ui5-tag>

      <ui5-tag slot="badges" design="Positive">In Stock</ui5-tag>
      <ui5-tag slot="badges" design="Information">Express Shipping</ui5-tag>

      <div slot="summary">Total: 1,250.00 EUR · 12 items · delivery by 2026-07-01</div>

      <div>
        <p>Detailed contextual information about the object is shown here when the panel is expanded.</p>
        <furo-ui5-text-input value="Reference: PO-2026-0042"></furo-ui5-text-input>
      </div>
    </furo-ui5-header-panel>
  `,
};

import "@/elements/panel";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { PanelAccessibleRole, TitleLevel } from "@/types";

const component = "furo-ui5-panel";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "accessibleRole", Object.values(PanelAccessibleRole));
ArgsSetEnum(argTypes, "headerLevel", Object.values(TitleLevel));

const meta: Meta = {
  title: "container/Panel",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Panel/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Details",
  },
  render: renderArgs => html`
    <furo-ui5-panel
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-role="${ifDefined(renderArgs.accessibleRole)}"
      ?collapsed="${renderArgs.collapsed}"
      ?fixed="${renderArgs.fixed}"
      header-level="${ifDefined(renderArgs.headerLevel)}"
      header-text="${ifDefined(renderArgs.headerText)}"
      ?no-animation="${renderArgs.noAnimation}"
      ?sticky-header="${renderArgs.stickyHeader}"
    >
      <div style="padding:.5rem">Collapsible content.</div>
    </furo-ui5-panel>
  `,
};

import "@/elements/navigation-menu";
import "@/elements/navigation-menu-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { Highlight, ListItemType } from "@/types";

const component = "furo-ui5-navigation-menu-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "highlight", Object.values(Highlight));
ArgsSetEnum(argTypes, "type", Object.values(ListItemType));

const meta: Meta = {
  title: "navigation/NavigationMenuItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/NavigationMenuItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "bar-chart",
    text: "Reports",
  },
  render: renderArgs => html`
    <furo-ui5-navigation-menu open opener="nav-anchor">
      <furo-ui5-navigation-menu-item
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        accessible-role="${ifDefined(renderArgs.accessibleRole)}"
        additional-text="${ifDefined(renderArgs.additionalText)}"
        ?checked="${renderArgs.checked}"
        ?disabled="${renderArgs.disabled}"
        highlight="${ifDefined(renderArgs.highlight)}"
        href="${ifDefined(renderArgs.href)}"
        icon="${ifDefined(renderArgs.icon)}"
        ?loading="${renderArgs.loading}"
        loading-delay="${ifDefined(renderArgs.loadingDelay)}"
        ?navigated="${renderArgs.navigated}"
        ?selected="${renderArgs.selected}"
        target="${ifDefined(renderArgs.target)}"
        text="${ifDefined(renderArgs.text)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        type="${ifDefined(renderArgs.type)}"
      >
        <furo-ui5-navigation-menu-item text="Monthly"></furo-ui5-navigation-menu-item>
        <furo-ui5-navigation-menu-item text="Yearly"></furo-ui5-navigation-menu-item>
      </furo-ui5-navigation-menu-item>
    </furo-ui5-navigation-menu>
    <div id="nav-anchor">Menu anchor</div>
  `,
};

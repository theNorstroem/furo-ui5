import "@/elements/side-navigation";
import "@/elements/side-navigation-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { SideNavigationItemDesign } from "@/types";

const component = "furo-ui5-side-navigation-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(SideNavigationItemDesign));

const meta: Meta = {
  title: "navigation/SideNavigation/SideNavigationItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/SideNavigationItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "home",
    text: "Home",
  },
  render: renderArgs => html`
    <furo-ui5-side-navigation style="height:200px">
      <furo-ui5-side-navigation-item
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        design="${ifDefined(renderArgs.design)}"
        ?disabled="${renderArgs.disabled}"
        ?expanded="${renderArgs.expanded}"
        href="${ifDefined(renderArgs.href)}"
        icon="${ifDefined(renderArgs.icon)}"
        target="${ifDefined(renderArgs.target)}"
        text="${ifDefined(renderArgs.text)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        ?unselectable="${renderArgs.unselectable}"
        selected
      ></furo-ui5-side-navigation-item>
      <furo-ui5-side-navigation-item text="Settings" icon="action-settings"></furo-ui5-side-navigation-item>
    </furo-ui5-side-navigation>
  `,
};

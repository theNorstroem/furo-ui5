import "@/elements/navigation-menu";
import "@/elements/navigation-menu-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { PopoverHorizontalAlign, PopoverPlacement } from "@/types";

const component = "furo-ui5-navigation-menu";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "horizontalAlign", Object.values(PopoverHorizontalAlign));
ArgsSetEnum(argTypes, "placement", Object.values(PopoverPlacement));

const meta: Meta = {
  title: "navigation/NavigationMenu",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/NavigationMenu/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    opener: "nav-anchor",
  },
  render: renderArgs => html`
    <furo-ui5-navigation-menu
      header-text="${ifDefined(renderArgs.headerText)}"
      horizontal-align="${ifDefined(renderArgs.horizontalAlign)}"
      ?loading="${renderArgs.loading}"
      loading-delay="${ifDefined(renderArgs.loadingDelay)}"
      opener="${ifDefined(renderArgs.opener)}"
      placement="${ifDefined(renderArgs.placement)}"
      open
    >
      <furo-ui5-navigation-menu-item text="Overview" icon="home"></furo-ui5-navigation-menu-item>
      <furo-ui5-navigation-menu-item text="Reports" icon="bar-chart"></furo-ui5-navigation-menu-item>
    </furo-ui5-navigation-menu>
    <div id="nav-anchor">Menu anchor</div>
  `,
};

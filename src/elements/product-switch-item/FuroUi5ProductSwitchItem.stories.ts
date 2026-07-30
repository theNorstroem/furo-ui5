import "@/elements/product-switch";
import "@/elements/product-switch-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-product-switch-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/ProductSwitch/ProductSwitchItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ProductSwitchItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "bar-chart",
    subtitleText: "Reports and forecasts",
    titleText: "Analytics",
  },
  render: renderArgs => html`
    <furo-ui5-product-switch>
      <furo-ui5-product-switch-item
        icon="${ifDefined(renderArgs.icon)}"
        subtitle-text="${ifDefined(renderArgs.subtitleText)}"
        target="${ifDefined(renderArgs.target)}"
        target-src="${ifDefined(renderArgs.targetSrc)}"
        title-text="${ifDefined(renderArgs.titleText)}"
      ></furo-ui5-product-switch-item>
    </furo-ui5-product-switch>
  `,
};

import "@/elements/product-switch";
import "@/elements/product-switch-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-product-switch";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/ProductSwitch/ProductSwitch",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ProductSwitch/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-product-switch>
          <furo-ui5-product-switch-item title-text="Home" subtitle-text="Overview" icon="home"></furo-ui5-product-switch-item>
          <furo-ui5-product-switch-item title-text="Analytics" subtitle-text="Reports" icon="bar-chart"></furo-ui5-product-switch-item>
        </furo-ui5-product-switch>
  `,
};

import "@/elements/breadcrumbs";
import "@/elements/breadcrumbs-item";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-breadcrumbs";
const { events, argTypes } = getStorybookHelpers(component);

const meta: Meta = {
  title: "navigation/Breadcrumbs",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Breadcrumbs/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/breadcrumb/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-breadcrumbs>
      <furo-ui5-breadcrumbs-item>Home</furo-ui5-breadcrumbs-item>
      <furo-ui5-breadcrumbs-item>Products</furo-ui5-breadcrumbs-item>
      <furo-ui5-breadcrumbs-item>Details</furo-ui5-breadcrumbs-item>
    </furo-ui5-breadcrumbs>
  `,
};

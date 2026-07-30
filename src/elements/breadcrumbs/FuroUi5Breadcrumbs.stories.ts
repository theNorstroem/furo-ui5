import "@/elements/breadcrumbs";
import "@/elements/breadcrumbs-item";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { BreadcrumbsDesign, BreadcrumbsSeparator } from "@/types";

const component = "furo-ui5-breadcrumbs";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(BreadcrumbsDesign));
ArgsSetEnum(argTypes, "separators", Object.values(BreadcrumbsSeparator));

const meta: Meta = {
  title: "navigation/Breadcrumbs",
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
  render: renderArgs => html`
    <furo-ui5-breadcrumbs
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      design="${ifDefined(renderArgs.design)}"
      separators="${ifDefined(renderArgs.separators)}"
    >
      <furo-ui5-breadcrumbs-item>Home</furo-ui5-breadcrumbs-item>
      <furo-ui5-breadcrumbs-item>Products</furo-ui5-breadcrumbs-item>
      <furo-ui5-breadcrumbs-item>Details</furo-ui5-breadcrumbs-item>
    </furo-ui5-breadcrumbs>
  `,
};

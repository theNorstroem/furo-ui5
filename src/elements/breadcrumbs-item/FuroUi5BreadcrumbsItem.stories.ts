import "@/elements/breadcrumbs";
import "@/elements/breadcrumbs-item";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-breadcrumbs-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "navigation/BreadcrumbsItem",
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
    <furo-ui5-breadcrumbs>
      <furo-ui5-breadcrumbs-item
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        href="${ifDefined(renderArgs.href)}"
        target="${ifDefined(renderArgs.target)}"
        >Single item in context</furo-ui5-breadcrumbs-item
      >
    </furo-ui5-breadcrumbs>
  `,
};

import "@/elements/list";

import "@ui5/webcomponents/dist/ListItemStandard.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-list";
const { events, argTypes } = getStorybookHelpers(component);

const meta: Meta = {
  title: "display/List",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/List/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/list/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-list header-text="Countries">
      <ui5-li>Austria</ui5-li>
      <ui5-li>Germany</ui5-li>
      <ui5-li>Switzerland</ui5-li>
    </furo-ui5-list>
  `,
};

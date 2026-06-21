import "@/elements/tabcontainer";
import "@/elements/tab";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-tab";
const { events, argTypes } = getStorybookHelpers(component);

const meta: Meta = {
  title: "container/Tab",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/TabContainer/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tab-bar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-tabcontainer>
      <furo-ui5-tab text="A single tab in context">Tab content</furo-ui5-tab>
    </furo-ui5-tabcontainer>
  `,
};

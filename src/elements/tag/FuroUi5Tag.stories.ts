import "@/elements/tag";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-tag";
const { events, argTypes } = getStorybookHelpers(component);

const status = new STRING("Approved");

const meta: Meta = {
  title: "display/Tag",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Tag/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tag/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-tag design="Positive" .model="${status}"></furo-ui5-tag> `,
};

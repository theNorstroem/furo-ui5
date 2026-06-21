import "@/elements/message-strip";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-message-strip";
const { events, argTypes } = getStorybookHelpers(component);

const message = new STRING("Your changes have been saved.");

const meta: Meta = {
  title: "display/MessageStrip",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MessageStrip/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/message-strip/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-message-strip design="Positive" .model="${message}"></furo-ui5-message-strip> `,
};

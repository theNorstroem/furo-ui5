import "@/elements/text";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-text";
const { events, argTypes } = getStorybookHelpers(component);

const text = new STRING("The quick brown fox jumps over the lazy dog.");

const meta: Meta = {
  title: "display/Text",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Text/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/text/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-text .model="${text}"></furo-ui5-text> `,
};

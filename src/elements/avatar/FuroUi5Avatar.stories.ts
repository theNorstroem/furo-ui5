import "@/elements/avatar";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-avatar";
const { events, argTypes } = getStorybookHelpers(component);

const initials = new STRING("JD");

const meta: Meta = {
  title: "display/Avatar",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/main/Avatar/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/avatar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-avatar accessible-name="John Doe" .model="${initials}"></furo-ui5-avatar> `,
};

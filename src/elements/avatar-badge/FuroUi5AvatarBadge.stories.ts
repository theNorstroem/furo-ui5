import "@/elements/avatar-badge";
import "@/elements/avatar";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-avatar-badge";
const { events, argTypes } = getStorybookHelpers(component);

const meta: Meta = {
  title: "display/AvatarBadge",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Avatar/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/avatar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-avatar accessible-name="John Doe" initials="JD">
      <furo-ui5-avatar-badge slot="badge" icon="employee"></furo-ui5-avatar-badge>
    </furo-ui5-avatar>
  `,
};

import "@/elements/avatar-badge";
import "@/elements/avatar";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ValueState } from "@/types";

const component = "furo-ui5-avatar-badge";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "state", Object.values(ValueState));

const meta: Meta = {
  title: "display/AvatarBadge",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/main/Avatar/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/avatar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "employee",
  },
  render: renderArgs => html`
    <furo-ui5-avatar accessible-name="John Doe" initials="JD">
      <furo-ui5-avatar-badge
        icon="${ifDefined(renderArgs.icon)}"
        state="${ifDefined(renderArgs.state)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        slot="badge"
      ></furo-ui5-avatar-badge>
    </furo-ui5-avatar>
  `,
};

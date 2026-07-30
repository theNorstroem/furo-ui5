import "@/elements/avatar-group";
import "@/elements/avatar";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { AvatarGroupType } from "@/types";

const component = "furo-ui5-avatar-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "type", Object.values(AvatarGroupType));

const meta: Meta = {
  title: "display/AvatarGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/AvatarGroup/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/avatar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    type: "Group",
  },
  render: renderArgs => html`
    <furo-ui5-avatar-group
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      type="${ifDefined(renderArgs.type)}"
    >
      <furo-ui5-avatar accessible-name="John Doe" initials="JD"></furo-ui5-avatar>
      <furo-ui5-avatar accessible-name="Max Mustermann" initials="MM"></furo-ui5-avatar>
      <furo-ui5-avatar accessible-name="Erika Berg" initials="EB"></furo-ui5-avatar>
    </furo-ui5-avatar-group>
  `,
};

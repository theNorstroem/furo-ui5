import "@/elements/avatar";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { AvatarColorScheme, AvatarMode, AvatarShape, AvatarSize } from "@/types";

const component = "furo-ui5-avatar";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "colorScheme", Object.values(AvatarColorScheme));
ArgsSetEnum(argTypes, "mode", Object.values(AvatarMode));
ArgsSetEnum(argTypes, "shape", Object.values(AvatarShape));
ArgsSetEnum(argTypes, "size", Object.values(AvatarSize));

const initials = new STRING("JD");

const meta: Meta = {
  title: "display/Avatar",
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
    accessibleName: "John Doe",
  },
  render: renderArgs => html`
    <furo-ui5-avatar
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      color-scheme="${ifDefined(renderArgs.colorScheme)}"
      ?disabled="${renderArgs.disabled}"
      fallback-icon="${ifDefined(renderArgs.fallbackIcon)}"
      icon="${ifDefined(renderArgs.icon)}"
      initials="${ifDefined(renderArgs.initials)}"
      ?interactive="${renderArgs.interactive}"
      mode="${ifDefined(renderArgs.mode)}"
      shape="${ifDefined(renderArgs.shape)}"
      size="${ifDefined(renderArgs.size)}"
      .model="${initials}"
    ></furo-ui5-avatar>
  `,
};

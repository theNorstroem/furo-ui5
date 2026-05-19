import "@/elements/switch";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import SwitchDesign from "@ui5/webcomponents/types/SwitchDesign.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-switch";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(SwitchDesign));

const meta: Meta = {
  title: "input/Switch",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Switch/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/switch/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: { accessibleName: "demo" },
  render: renderArgs => html` <furo-ui5-switch accessible-name="${renderArgs.accessibleName}"> </furo-ui5-switch>`,
};

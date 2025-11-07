import "@/furo-ui5-switch";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import DocumentationTemplate from "../DocumentationTemplate.tsx";
import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories/ArgTypesTransormer.ts";
import SwitchDesign from "@ui5/webcomponents/types/SwitchDesign";
const component = "furo-ui5-switch";

const componentInfo = {
  since: "2.0.0",
  guideline: "https://experience.sap.com/fiori-design-web/button/",
};

const { events, args, argTypes, template } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(SwitchDesign));

const meta: Meta = {
  title: "input/Switch",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  args,
  argTypes,
  render: args => template(args),
  parameters: {
    actions: {
      handles: events,
    },

    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args,
  render: argTypes => html` <furo-ui5-switch> </furo-ui5-switch>`,
};

import "@/Assets";
import "@/furo-ui5-button";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import ButtonDesign from "@ui5/webcomponents/dist/types/ButtonDesign.js";
import DocumentationTemplate from "../DocumentationTemplate.tsx";
import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories/ArgTypesTransormer.ts";
const component = "furo-ui5-button";
const componentInfo = {
  guideline: "https://experience.sap.com/fiori-design-web/button/",
};

const { events, args, argTypes, template } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));

const meta: Meta = {
  title: "input/Button",
  component,
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
  args:{
    ...args,
      design: "Default",
      loadingDelay: 1000
  },
  render: argTypes =>
    html`<furo-ui5-button
      ?disabled="${argTypes.disabled}"
      ?loading="${argTypes.loading}"
      end-icon="${ifDefined(argTypes.endIcon)}"
      design="${argTypes.design}"
      icon="${ifDefined(argTypes.icon)}"
      >dfg</furo-ui5-button
    >`,
};


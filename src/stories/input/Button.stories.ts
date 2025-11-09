import "@/Assets";
import "@/furo-ui5-button";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ButtonDesign from "@ui5/webcomponents/dist/types/ButtonDesign.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories/ArgTypesTransormer";
import DocumentationTemplate from "@/stories/DocumentationTemplate";

const component = "furo-ui5-button";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/button/",
  originalComponent: "https://ui5.github.io/webcomponents/components/main/Button/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));

const meta: Meta = {
  title: "input/Button",
  component,
  tags: ["autodocs"],
  args,
  argTypes,
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
  args: {
    ...args,
    design: "Default",
    loadingDelay: 1000,
  },
  render: renderArgs =>
    html`<furo-ui5-button
      ?disabled="${renderArgs.disabled}"
      ?loading="${renderArgs.loading}"
      end-icon="${ifDefined(renderArgs.endIcon)}"
      design="${renderArgs.design}"
      icon="${ifDefined(renderArgs.icon)}"
      >dfg</furo-ui5-button
    >`,
};

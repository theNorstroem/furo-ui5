import "@/elements/split-button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ButtonDesign } from "@/types";

const component = "furo-ui5-split-button";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));

const meta: Meta = {
  title: "input/Button/SplitButton",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/SplitButton/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    design: "Emphasized",
  },
  render: renderArgs => html`
    <furo-ui5-split-button
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?active-arrow-button="${renderArgs.activeArrowButton}"
      design="${ifDefined(renderArgs.design)}"
      ?disabled="${renderArgs.disabled}"
      icon="${ifDefined(renderArgs.icon)}"
      >Save</furo-ui5-split-button
    >
  `,
};

import "@/elements/bar";
import "@/elements/button";
import "@/elements/title";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import {BarDesign} from "@/types";
import { ArgsSetEnum, ArgsTransormAll, ArgsTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-bar";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(BarDesign))

const meta: Meta = {
  title: "layout/Bar",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Bar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-bar design="${renderArgs.design}">
      <furo-ui5-button slot="startContent" icon="nav-back" design="Transparent"></furo-ui5-button>
      <furo-ui5-title level="H5">Order 4711</furo-ui5-title>
      <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
    </furo-ui5-bar>
  `,
};

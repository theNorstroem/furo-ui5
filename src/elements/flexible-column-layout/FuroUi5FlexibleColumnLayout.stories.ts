import "@/elements/flexible-column-layout";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-flexible-column-layout";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/FlexibleColumnLayout",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/FlexibleColumnLayout/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-flexible-column-layout layout="TwoColumnsMidExpanded" style="height:300px">
          <div slot="startColumn" style="padding:1rem">Master</div>
          <div slot="midColumn" style="padding:1rem">Detail</div>
        </furo-ui5-flexible-column-layout>
  `,
};

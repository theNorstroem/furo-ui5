import "@/Assets";
import "@/elements/pretty-json";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-pretty-json";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "display/PrettyJson",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "2.0.0",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Pretty Json Element">
      ${cube}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Whole entity</furo-ui5-label>
        <furo-ui5-pretty-json .model="${cube}"></furo-ui5-pretty-json>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const SingleField: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Pretty Json single field">
      ${cube.cube.multipleOptions}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">multipleOptions</furo-ui5-label>
        <furo-ui5-pretty-json .model="${cube.cube.multipleOptions}"></furo-ui5-pretty-json>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

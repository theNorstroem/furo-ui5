import "@/Assets";
import "@/elements/bool-icon";
import "@/elements/checkbox";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-bool-icon";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "display/BoolIcon",
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
        since: "2.0.0",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/foundation/icons/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Bool Icon Element">
      ${cube.cube.boo}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="ico">State</furo-ui5-label>
        <furo-ui5-bool-icon
          id="ico"
          accesible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?readonly="${renderArgs.readonly}"
          symboltrue="${ifDefined(renderArgs.symboltrue)}"
          symbolfalse="${ifDefined(renderArgs.symbolfalse)}"
          .model="${cube.cube.boo}"
        ></furo-ui5-bool-icon>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="chk">Toggle value</furo-ui5-label>
        <furo-ui5-checkbox id="chk" text="boolean value" .model="${cube.cube.boo}"></furo-ui5-checkbox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const CustomIcons: StoryObj = {
  args: {
    symboltrue: "accept",
    symbolfalse: "decline",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Bool Icon with custom icons">
      ${cube.cube.boo}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="ico2">State</furo-ui5-label>
        <furo-ui5-bool-icon
          id="ico2"
          symboltrue="${ifDefined(renderArgs.symboltrue)}"
          symbolfalse="${ifDefined(renderArgs.symbolfalse)}"
          .model="${cube.cube.boo}"
        ></furo-ui5-bool-icon>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="chk2">Toggle value</furo-ui5-label>
        <furo-ui5-checkbox id="chk2" text="boolean value" .model="${cube.cube.boo}"></furo-ui5-checkbox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

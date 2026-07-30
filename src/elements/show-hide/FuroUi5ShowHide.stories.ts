import "@/Assets";
import "@/elements/show-hide";
import "@/elements/checkbox";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-show-hide";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "layout/ShowHide",
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
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Show Hide Element">
      ${cube.cube.boo}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="chk">Toggle visibility</furo-ui5-label>
        <furo-ui5-checkbox id="chk" text="visible" .model="${cube.cube.boo}"></furo-ui5-checkbox>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Content</furo-ui5-label>
        <furo-ui5-show-hide ?hide-on-false="${renderArgs.hideOnFalse}" ?no-animation="${renderArgs.noAnimation}" .model="${cube.cube.boo}">
          <div style="padding:1rem;background-color:var(--sapInfobar_Background, #e5f0fa)">This content is toggled by the bound boolean field.</div>
        </furo-ui5-show-hide>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

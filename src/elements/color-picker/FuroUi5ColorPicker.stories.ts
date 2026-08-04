import "@/elements/color-picker";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-color-picker";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const color = new STRING("#3f51b5");

const meta: Meta = {
  title: "input/ColorPicker",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/ColorPicker/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/color-picker/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Color Picker">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Pick a color</furo-ui5-label>
        <furo-ui5-color-picker
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
          name="${ifDefined(renderArgs.name)}"
          ?simplified="${renderArgs.simplified}"
          value="${ifDefined(renderArgs.value)}"
          .model="${color}"
        ></furo-ui5-color-picker>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-color-picker .model="${color}"></furo-ui5-color-picker> `,
};

import "@/Assets";
import "@/elements/slider";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/pretty-json";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-slider";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/Slider",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Slider/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/slider/",
      }),
    },
    a11y: {
      options: {
        rules: {
          "color-contrast": { enabled: false },
        },
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Slider Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sld">Length</furo-ui5-label>
        <furo-ui5-slider
          id="sld"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          min="100"
          max="1000"
          step="50"
          .model="${cube.cube.length}"
        ></furo-ui5-slider>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="state">Current value</furo-ui5-label>
        <furo-ui5-pretty-json id="state" .model="${cube.cube.length}"></furo-ui5-pretty-json>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Tickmarks: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-slider
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      min="100"
      max="1000"
      step="50"
      label-interval="2"
      ?show-tickmarks="${true}"
      ?show-tooltip="${true}"
      .model="${cube.cube.length}"
    ></furo-ui5-slider>
  `,
};

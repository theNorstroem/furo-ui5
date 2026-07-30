import "@/Assets";
import "@/elements/rating-indicator";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/pretty-json";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import RatingIndicatorSize from "@ui5/webcomponents/dist/types/RatingIndicatorSize.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-rating-indicator";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "size", Object.values(RatingIndicatorSize));
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/RatingIndicator",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/RatingIndicator/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/rating-indicator/",
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
    <furo-ui5-form-layout form-title="Rating Indicator Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="rat">Rating</furo-ui5-label>
        <furo-ui5-rating-indicator
          id="rat"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?readonly="${renderArgs.readonly}"
          max="5"
          size="${ifDefined(renderArgs.size)}"
          value-state="${ifDefined(renderArgs.valueState)}"
          .model="${cube.cube.rating}"
        ></furo-ui5-rating-indicator>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="state">Current value</furo-ui5-label>
        <furo-ui5-pretty-json id="state" .model="${cube.cube.rating}"></furo-ui5-pretty-json>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Readonly: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-rating-indicator
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?readonly="${true}"
      max="5"
      size="${ifDefined(renderArgs.size)}"
      value-state="${ifDefined(renderArgs.valueState)}"
      .model="${cube.cube.rating}"
    ></furo-ui5-rating-indicator>
  `,
};

import "@/furo-ui5-option";
import "@/furo-ui5-form-layout";
import "@/furo-ui5-form-row";
import "@/furo-ui5-button";
import "@/furo-ui5-label";

import "@ui5/webcomponents-icons/dist/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories/ArgTypesTransormer";
import DocumentationTemplate from "@/stories/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-option";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "input/Option",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Option/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/select-web-component/",
      }),
    },
    a11y: {
      // https://storybook.js.org/docs/writing-tests/accessibility-testing
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {
        rules: {
          "color-contrast": { enabled: false }, // due to the color gradient in the input background
        },
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    defaultSlot: "Option 1",
    icon: "product",
    additionalText: "additional text",
    tooltip: "Tooltip Text",
    value: "id_1234",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Single Option">
      <p>Use it inside a <code>furo-ui5-select</code></p>
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Option</furo-ui5-label>
        <furo-ui5-option
          id="enum"
          ?selected="${renderArgs.selected}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          icon="${ifDefined(renderArgs.icon)}"
          value="${ifDefined(renderArgs.value)}"
          additional-text="${ifDefined(renderArgs.additionalText)}"
          .model="${cube.cube.material}"
          >${unsafeHTML(renderArgs.defaultSlot)}
        </furo-ui5-option>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

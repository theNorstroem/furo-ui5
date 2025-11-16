import "@/furo-ui5-select-enum";
import "@/furo-ui5-form-layout";
import "@/furo-ui5-form-row";
import "@/furo-ui5-button";
import "@/furo-ui5-label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories/ArgTypesTransormer";
import DocumentationTemplate from "@/stories/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-select-enum";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/SelectEnum",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Select/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/select/",
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
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Text Input Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select-enum
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-unspecified="${renderArgs.showUnspecified}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          value="${ifDefined(renderArgs.value)}"
          .model="${cube.cube.material}"
          value-state="${ifDefined(renderArgs.valueState)}"
          >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select-enum>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select-enum
          id="sec"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-unspecified="${renderArgs.showUnspecified}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          value="${ifDefined(renderArgs.value)}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${cube.cube.material}"
          value-state="${ifDefined(renderArgs.valueState)}"
          >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select-enum>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const ShowUnspecified: StoryObj = {
  args: {
    showUnspecified: true,
  },

  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Text Input Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="enum">Description</furo-ui5-label>
        <furo-ui5-select-enum
          id="enum"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-unspecified="${renderArgs.showUnspecified}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          value="${ifDefined(renderArgs.value)}"
          .model="${cube.cube.material}"
          value-state="${ifDefined(renderArgs.valueState)}"
          >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select-enum>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-select-enum
          id="sec"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-unspecified="${renderArgs.showUnspecified}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          value="${ifDefined(renderArgs.value)}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${cube.cube.material}"
          value-state="${ifDefined(renderArgs.valueState)}"
          >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-select-enum>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

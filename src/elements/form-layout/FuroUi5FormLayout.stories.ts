import "@/elements/text-input";
import "@/elements/form-layout";
import "@/elements/form-group";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-form-layout";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["type", "maxlength", "minlength"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "layout/form/FormLayout",
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
        since: "0.8.0",

        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/form/",
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
    formTitle: "Form Title",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="${renderArgs.formTitle}">
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>
      <furo-ui5-form-group label="Group Title">
        <furo-ui5-form-row>
          <furo-ui5-label slot="label" for="txt">Description</furo-ui5-label>
          <furo-ui5-text-input
            id="txt"
            accessible-name="${ifDefined(renderArgs.accessibleName)}"
            ?disabled="${renderArgs.disabled}"
            ?show-clear-icon="${renderArgs.showClearIcon}"
            ?show-suggestions="${renderArgs.showSuggestion}"
            ?required="${renderArgs.required}"
            ?readonly="${renderArgs.readonly}"
            value="${ifDefined(renderArgs.value)}"
            placeholder="${ifDefined(renderArgs.placeholder)}"
            .model="${cube.description}"
            value-state="${ifDefined(renderArgs.valueState)}"
            >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
          </furo-ui5-text-input>
        </furo-ui5-form-row>

        <furo-ui5-form-row>
          <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
          <furo-ui5-text-input
            id="sec"
            accessible-name="${ifDefined(renderArgs.accessibleName)}"
            ?disabled="${renderArgs.disabled}"
            ?show-clear-icon="${renderArgs.showClearIcon}"
            ?show-suggestions="${renderArgs.showSuggestion}"
            ?required="${renderArgs.required}"
            ?readonly="${renderArgs.readonly}"
            value="${ifDefined(renderArgs.value)}"
            placeholder="${ifDefined(renderArgs.placeholder)}"
            .model="${cube.description}"
            value-state="${ifDefined(renderArgs.valueState)}"
            >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
          </furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>

      <furo-ui5-form-group label="Group Title">
        <furo-ui5-form-row>
          <furo-ui5-label slot="label" for="txt">Description</furo-ui5-label>
          <furo-ui5-text-input
            id="txt"
            accessible-name="${ifDefined(renderArgs.accessibleName)}"
            ?disabled="${renderArgs.disabled}"
            ?show-clear-icon="${renderArgs.showClearIcon}"
            ?show-suggestions="${renderArgs.showSuggestion}"
            ?required="${renderArgs.required}"
            ?readonly="${renderArgs.readonly}"
            value="${ifDefined(renderArgs.value)}"
            placeholder="${ifDefined(renderArgs.placeholder)}"
            .model="${cube.description}"
            value-state="${ifDefined(renderArgs.valueState)}"
            >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
          </furo-ui5-text-input>
        </furo-ui5-form-row>

        <furo-ui5-form-row>
          <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
          <furo-ui5-text-input
            id="sec"
            accessible-name="${ifDefined(renderArgs.accessibleName)}"
            ?disabled="${renderArgs.disabled}"
            ?show-clear-icon="${renderArgs.showClearIcon}"
            ?show-suggestions="${renderArgs.showSuggestion}"
            ?required="${renderArgs.required}"
            ?readonly="${renderArgs.readonly}"
            value="${ifDefined(renderArgs.value)}"
            placeholder="${ifDefined(renderArgs.placeholder)}"
            .model="${cube.description}"
            value-state="${ifDefined(renderArgs.valueState)}"
            >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
          </furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>
    </furo-ui5-form-layout>
  `,
};

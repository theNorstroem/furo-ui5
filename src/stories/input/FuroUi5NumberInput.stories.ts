import "@/Assets";
import "@/furo-ui5-number-input";
import "@/furo-ui5-form-row";
import "@/furo-ui5-label";
import "@/furo-ui5-icon";

import { INT32 } from "@furo/open-models/dist";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories/ArgTypesTransormer";
import DocumentationTemplate from "@/stories/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-number-input";

const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/button/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Input/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["type", "maxlength", "minlength"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// models
const intVal: INT32 = new INT32();

const meta: Meta = {
  title: "input/NumberInput",
  component,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },

    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
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
    ...args,
  },
  render: renderArgs =>
    html` <furo-ui5-number-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?show-clear-icon="${renderArgs.showClearIcon}"
      ?show-suggestions="${renderArgs.showSuggestion}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      value="${ifDefined(renderArgs.value)}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${intVal}"
      value-state="${ifDefined(renderArgs.valueState)}"
      >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
    </furo-ui5-number-input>`,
};

export const WithFrom: StoryObj = {
  args: {
    accessibleName: "Demo",
    disabled: false,
    modelValue: 21,
    open: "",
    readonly: "",
    required: "",
    noTypeahead: "",
    showClearIcon: "",
    showSuggestions: "",
    valueState: "None",
    defaultSlot: "",
    iconSlot: '<furo-ui5-icon name="delete" slot="icon"> </furo-ui5-icon>',
    rootPart: "",
    inputPart: "",
    clearIconPart: "",
  },

  render: renderArgs => html`
    <furo-ui5-form-row>
      <furo-ui5-label required show-colon for="num" slot="label">Label</furo-ui5-label>
      <furo-ui5-number-input
        accessible-name="${renderArgs.accessibleName}"
        ?disabled="${renderArgs.disabled}"
        ?show-clear-icon="${renderArgs.showClearIcon}"
        ?show-suggestions="${renderArgs.showSuggestion}"
        ?required="${renderArgs.required}"
        value="${ifDefined(renderArgs.value)}"
        placeholder="${renderArgs.placeholder}"
        value-state="${renderArgs.valueState}"
        .model="${intVal}"
        >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
      </furo-ui5-number-input>
    </furo-ui5-form-row>
  `,
};

export const InvalidState: StoryObj = {
  args: {
    disabled: false,
    modelValue: 21,
    open: "",
    readonly: "",
    required: "",
    value: "6",
    accessibleName: "Demo",
    noTypeahead: "",
    showClearIcon: true,
    showSuggestions: "",
    defaultSlot: "",
    iconSlot: '<furo-ui5-icon name="delete" slot="icon"> </furo-ui5-icon>',
    valuestatemessageSlot: "",
    rootPart: "",
    inputPart: "",
    clearIconPart: "",
  },

  render: renderArgs => html`
    <furo-ui5-form-row>
      <furo-ui5-label required show-colon for="num" slot="label">Label</furo-ui5-label>
      <furo-ui5-number-input
        accessible-name="${renderArgs.accessibleName}"
        ?disabled="${renderArgs.disabled}"
        ?show-clear-icon="${renderArgs.showClearIcon}"
        ?show-suggestions="${renderArgs.showSuggestion}"
        ?required="${renderArgs.required}"
        .model="${intVal}"
        placeholder="${renderArgs.placeholder}"
        value-state="${renderArgs.valueState}"
      >
        ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
      </furo-ui5-number-input>

      <furo-ui5-label required show-colon for="num" slot="label">Label</furo-ui5-label>
      <furo-ui5-number-input
        accessible-name="${renderArgs.accessibleName}"
        ?disabled="${renderArgs.disabled}"
        ?show-clear-icon="${renderArgs.showClearIcon}"
        ?show-suggestions="${renderArgs.showSuggestion}"
        ?required="${renderArgs.required}"
        .model="${intVal}"
        placeholder="${renderArgs.placeholder}"
        value-state="${renderArgs.valueState}"
      >
        ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
      </furo-ui5-number-input>
    </furo-ui5-form-row>
  `,
};

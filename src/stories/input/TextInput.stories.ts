import "@/furo-ui5-text-input";

import { STRING } from "@furo/open-models/dist";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories/ArgTypesTransormer";
import DocumentationTemplate from "@/stories/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-text-input";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["type", "maxlength", "minlength"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const model = new STRING();

const meta: Meta = {
  title: "input/TextInput",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  args,
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Switch/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-139/ui-elements/switch/",
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
    ...args,
  },
  render: renderArgs =>
    html` <furo-ui5-text-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?show-clear-icon="${renderArgs.showClearIcon}"
      ?show-suggestions="${renderArgs.showSuggestion}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      value="${ifDefined(renderArgs.value)}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${model}"
      value-state="${ifDefined(renderArgs.valueState)}"
      >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
    </furo-ui5-text-input>`,
};

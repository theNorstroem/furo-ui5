import "src/web-components/furo-ui5-password-input";
import "src/web-components/furo-ui5-form-layout";
import "src/web-components/furo-ui5-form-row";
import "src/web-components/furo-ui5-button";
import "src/web-components/furo-ui5-icon";
import "src/web-components/furo-ui5-label";
import "@ui5/webcomponents-icons/dist/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import type { FuroUi5Icon } from "src/web-components/furo-ui5-icon/FuroUi5Icon";
import type { FuroUi5PasswordInput } from "src/web-components/furo-ui5-password-input/FuroUi5PasswordInput";
import { CubeEntity } from "src/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "stories/ArgTypesTransormer";
import DocumentationTemplate from "stories/DocumentationTemplate";
import ValueState from "src/types/ValueState";

const component = "furo-ui5-password-input";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["type", "noTypeahead", "showSuggestions"]);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/PasswordInput",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Switch/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/switch/",
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

const toggleVisibilityInline = (e: MouseEvent) => {
  const pwd = (e.target as FuroUi5Icon).parentElement as FuroUi5PasswordInput;
  if ((e.target as FuroUi5Icon).name === "hide") {
    (e.target as FuroUi5Icon).name = "show";
  } else {
    (e.target as FuroUi5Icon).name = "hide";
  }

  pwd.togglePasswordVisibility();
};

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Text Input Element">
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      ${cube.description}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="pwd">Description</furo-ui5-label>
        <furo-ui5-password-input
          id="pwd"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-clear-icon="${renderArgs.showClearIcon}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          maxlength="${ifDefined(renderArgs.maxlength)}"
          value="${ifDefined(renderArgs.value)}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${cube.description}"
          value-state="${ifDefined(renderArgs.valueState)}"
        >
          <furo-ui5-icon slot="icon" @click="${toggleVisibilityInline}" name="show"></furo-ui5-icon>
          ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-password-input>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sec">Description</furo-ui5-label>
        <furo-ui5-password-input
          id="sec"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?show-clear-icon="${renderArgs.showClearIcon}"
          maxlength="${ifDefined(renderArgs.maxlength)}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          value="${ifDefined(renderArgs.value)}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${cube.description}"
          value-state="${ifDefined(renderArgs.valueState)}"
          >${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
        </furo-ui5-password-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-ui5-password-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?show-clear-icon="${renderArgs.showClearIcon}"
      maxlength="${ifDefined(renderArgs.maxlength)}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      value="${ifDefined(renderArgs.value)}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      value-state="${ifDefined(renderArgs.valueState)}"
    >
      ${unsafeHTML(renderArgs.iconSlot)}${unsafeHTML(renderArgs.defaultSlot)}${unsafeHTML(renderArgs.valueStateMessageSlot)}
    </furo-ui5-password-input>
  `,
};

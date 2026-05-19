import "@/elements/option";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@ui5/webcomponents-icons/dist/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-option";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model

const option: CubeOptions = new CubeOptions({
  id: "1",
  displayName: "A from List",
  icon: "email",
});

const meta: Meta = {
  title: "input/Select/Option",
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
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/select-web-component/",
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
    value: "3",
    defaultSlot: "Option 1",
    icon: "email",
    selected: false,
    tooltip: "Tooltip",
    additionalText: "Additional Text",
  },
  render: renderArgs => html`
    <furo-ui5-option
      icon="${ifDefined(renderArgs.icon)}"
      ?selected="${renderArgs.selected}"
      additional-text="${ifDefined(renderArgs.additionalText)}"
      tooltip="${ifDefined(renderArgs.tooltip)}"
      value="${ifDefined(renderArgs.value)}"
    >
      ${unsafeHTML(renderArgs.defaultSlot)}
    </furo-ui5-option>
  `,
};

export const Selected: StoryObj = {
  args: {
    value: "3",
    defaultSlot: "Option 1",
    icon: "email",
    selected: true,
    tooltip: "Tooltip",
    additionalText: "Additional Text",
  },

  render: renderArgs => html`
    <furo-ui5-option
      icon="${ifDefined(renderArgs.icon)}"
      ?selected="${renderArgs.selected}"
      additional-text="${ifDefined(renderArgs.additionalText)}"
      tooltip="${ifDefined(renderArgs.tooltip)}"
      value="${ifDefined(renderArgs.value)}"
    >
      ${unsafeHTML(renderArgs.defaultSlot)}
    </furo-ui5-option>
  `,
};

export const WithDataBinding: StoryObj = {
  args: {},

  render: _ => html` <furo-ui5-option .model="${option}"> </furo-ui5-option> `,
};

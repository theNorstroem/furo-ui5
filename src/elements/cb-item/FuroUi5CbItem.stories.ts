import "@/elements/combobox";
import "@/elements/cb-item";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";
import "@ui5/webcomponents-icons/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-cb-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// a single item model for the data-binding example
const cbItem = new CubeOptions({
  id: "1",
  displayName: "Bound from model",
  icon: "product",
});

const meta: Meta = {
  title: "input/Select/ComboBox/ComboBox Item",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ComboBoxItem/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/combo-box-web-component/",
      }),
    },
    a11y: {
      options: {
        rules: {
          "color-contrast": { enabled: false }, // due to the color gradient in the input background
        },
      },
    },
  },
};
export default meta;

/**
 * `furo-ui5-cb-item` is only meaningful inside a `furo-ui5-combobox`. Open the dropdown to see the
 * item rendered. Use the controls to change `text`, `additional-text` and `icon`.
 */
export const Default: StoryObj = {
  args: {
    text: "Controllable item",
    additionalText: "Additional Text",
    icon: "product",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="ComboBox Item">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="cb">Open to see the item</furo-ui5-label>
        <furo-ui5-combobox id="cb" placeholder="Open the dropdown">
          <furo-ui5-cb-item
            text="${ifDefined(renderArgs.text)}"
            additional-text="${ifDefined(renderArgs.additionalText)}"
            icon="${ifDefined(renderArgs.icon)}"
          ></furo-ui5-cb-item>
          <furo-ui5-cb-item text="Static sibling"></furo-ui5-cb-item>
        </furo-ui5-combobox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

/**
 * The item can derive its `text` / `additional-text` from a bound `MultiComboBoxItemLike` model
 * via `bindData` / the `model` setter.
 */
export const WithDataBinding: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="ComboBox Item — data binding">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="cb-bound">Open to see the item</furo-ui5-label>
        <furo-ui5-combobox id="cb-bound" placeholder="Open the dropdown">
          <furo-ui5-cb-item .model="${cbItem}"></furo-ui5-cb-item>
        </furo-ui5-combobox>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

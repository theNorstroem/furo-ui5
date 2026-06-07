import "@/Assets";
import "@/elements/money-input";
import "@/elements/form-row";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { Money as GoogleMoney } from "@/models/google/type/Money";

const component = "furo-ui5-money-input";

const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/input/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Input/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, ["amountValue"]);

// models
const money: GoogleMoney = new GoogleMoney({ units: "42", nanos: 500000000, currencyCode: "EUR" });

const meta: Meta = {
  title: "input/MoneyInput",
  component,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
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
  args: {
    accessibleName: "Amount",
    currencies: "CHF,EUR,USD",
  },
  render: (renderArgs) =>
    html` <furo-ui5-money-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      currencies="${ifDefined(renderArgs.currencies)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${money}"
    ></furo-ui5-money-input>
    <hr>
    <furo-ui5-money-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      currencies="${ifDefined(renderArgs.currencies)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${money}"
    ></furo-ui5-money-input>`,
};

export const WithLabel: StoryObj = {
  args: {
    accessibleName: "Amount",
    currencies: "CHF,EUR,USD",
  },
  render: (renderArgs) => html`
    <furo-ui5-form-row>
      <furo-ui5-label required show-colon for="money" slot="label">Price</furo-ui5-label>
      <furo-ui5-money-input
        id="money"
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        currencies="${ifDefined(renderArgs.currencies)}"
        ?disabled="${renderArgs.disabled}"
        ?required="${renderArgs.required}"
        ?readonly="${renderArgs.readonly}"
        .model="${money}"
      ></furo-ui5-money-input>
    </furo-ui5-form-row>
  `,
};

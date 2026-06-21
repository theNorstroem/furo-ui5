import "@/elements/progress-indicator";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { FLOAT, INT32 } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-progress-indicator";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// models — the UI5 `value` is a percentage (0–100), so bind values in that range.
const lowFloat = new FLOAT(25);
const midInt = new INT32(60);
const fullInt = new INT32(100);

// value-state models — `valueState` is the one model-driven UI surface this
// display-only element exposes (wired via FieldNodeValueState).
const negativeModel = new INT32(35);
negativeModel.__setValueState(ValueState.Negative, ["Below target"]);

const criticalModel = new INT32(70);
criticalModel.__setValueState(ValueState.Critical, ["Approaching limit"]);

const positiveModel = new INT32(100);
positiveModel.__setValueState(ValueState.Positive, ["Complete"]);

const meta: Meta = {
  title: "display/ProgressIndicator",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ProgressIndicator/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/progress-indicator/",
      }),
    },
  },
};
export default meta;

// Every attribute is bound through `ifDefined`, so when a control is left
// untouched the bound `model` drives the bar (value + value-state); as soon as
// the user sets a control it overrides the model-driven presentation.
export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Progress Indicator">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">FLOAT (25%)</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${lowFloat}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">INT32 (60%)</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${midInt}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">INT32 (100%)</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${fullInt}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const ValueStates: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Value States">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Negative</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${negativeModel}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Critical</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${criticalModel}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Positive</furo-ui5-label>
        <furo-ui5-progress-indicator
          .model="${positiveModel}"
          value="${ifDefined(renderArgs.value as number | undefined)}"
          value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
          display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
          ?hide-value="${renderArgs.hideValue}"
          accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
        ></furo-ui5-progress-indicator>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-progress-indicator
      .model="${midInt}"
      value="${ifDefined(renderArgs.value as number | undefined)}"
      value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
      display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
      ?hide-value="${renderArgs.hideValue}"
      accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
    ></furo-ui5-progress-indicator>
  `,
};

// Interactive story: the controls panel drives the inherited UI5 surface,
// including the `valueState` select wired up via ArgsSetEnum above.
export const Playground: StoryObj = {
  args: {
    value: 60,
    valueState: ValueState.Positive,
    displayValue: "",
    hideValue: false,
    accessibleName: "Progress",
  },
  render: renderArgs => html`
    <furo-ui5-progress-indicator
      value="${ifDefined(renderArgs.value as number | undefined)}"
      value-state="${ifDefined(renderArgs.valueState as string | undefined)}"
      display-value="${ifDefined(renderArgs.displayValue as string | undefined)}"
      ?hide-value="${renderArgs.hideValue}"
      accessible-name="${ifDefined(renderArgs.accessibleName as string | undefined)}"
    ></furo-ui5-progress-indicator>
  `,
};

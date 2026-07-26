import "@/elements/multi-input";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";
import "@/elements/pretty-json";

import { ARRAY, STRING, StringValue } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { FuroFatString, type IFuroFatString } from "@/models";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-multi-input";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

// set up the models — standalone repeated-string arrays, one per accepted element type
const tags = ARRAY.Builder(STRING, ["alpha", "beta"]);
const fatTags = ARRAY.Builder(FuroFatString, [{ value: "draft" }, { value: "urgent" }] as IFuroFatString[]);
const svTags = ARRAY.Builder(StringValue, ["one", "two"]);

const addTag = () => {
  // demonstrates model → token render: pushing to the array re-renders the tokens
  tags.push(`tag-${tags.length.toString()}`);
};

const meta: Meta = {
  title: "input/MultiInput",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MultiInput/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/multi-input/",
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
    <furo-ui5-form-layout form-title="Multi Input Element">
      <furo-ui5-button slot="action" @click="${addTag}" design="Transparent">Add tag</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="tags">Tags</furo-ui5-label>
        <furo-ui5-multi-input
          id="tags"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          ?show-value-help-icon="${renderArgs.showValueHelpIcon}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${tags}"
          value-state="${ifDefined(renderArgs.valueState)}"
        ></furo-ui5-multi-input>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="tags2">Tags</furo-ui5-label>
        <furo-ui5-multi-input
          id="tags2"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?disabled="${renderArgs.disabled}"
          ?required="${renderArgs.required}"
          ?readonly="${renderArgs.readonly}"
          ?show-value-help-icon="${renderArgs.showValueHelpIcon}"
          placeholder="${ifDefined(renderArgs.placeholder)}"
          .model="${tags}"
          value-state="${ifDefined(renderArgs.valueState)}"
        ></furo-ui5-multi-input>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>

    <br />
    <furo-ui5-pretty-json .model="${tags}"></furo-ui5-pretty-json>
  `,
};

export const Minimal: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-ui5-multi-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      ?show-value-help-icon="${renderArgs.showValueHelpIcon}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${tags}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-multi-input>

    <br />
    <furo-ui5-pretty-json .model="${tags}"></furo-ui5-pretty-json>
  `,
};

export const FatStrings: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-multi-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      ?show-value-help-icon="${renderArgs.showValueHelpIcon}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${fatTags}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-multi-input>

    <br />
    <furo-ui5-pretty-json .model="${fatTags}"></furo-ui5-pretty-json>
  `,
};

export const StringValues: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-multi-input
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      ?disabled="${renderArgs.disabled}"
      ?required="${renderArgs.required}"
      ?readonly="${renderArgs.readonly}"
      ?show-value-help-icon="${renderArgs.showValueHelpIcon}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      .model="${svTags}"
      value-state="${ifDefined(renderArgs.valueState)}"
    ></furo-ui5-multi-input>
  `,
};

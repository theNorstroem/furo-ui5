import "@/elements/wizard";
import "@/elements/wizard-step";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { WizardContentLayout } from "@/types";

const component = "furo-ui5-wizard";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "contentLayout", Object.values(WizardContentLayout));

const meta: Meta = {
  title: "container/Wizard/Wizard",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/Wizard/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-wizard content-layout="${ifDefined(renderArgs.contentLayout)}" style="height:280px">
      <furo-ui5-wizard-step title-text="Product" selected>
        <div style="padding:1rem">Pick a product.</div>
      </furo-ui5-wizard-step>
      <furo-ui5-wizard-step title-text="Payment" disabled>
        <div style="padding:1rem">Enter payment details.</div>
      </furo-ui5-wizard-step>
    </furo-ui5-wizard>
  `,
};

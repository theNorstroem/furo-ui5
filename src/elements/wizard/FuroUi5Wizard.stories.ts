import "@/elements/wizard";
import "@/elements/wizard-step";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-wizard";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "container/Wizard/Wizard",
  component,
  subcomponents: {},
  tags: ["autodocs"],
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/Wizard/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-wizard style="height:280px">
          <furo-ui5-wizard-step title-text="Product" selected>
            <div style="padding:1rem">Pick a product.</div>
          </furo-ui5-wizard-step>
          <furo-ui5-wizard-step title-text="Payment" disabled>
            <div style="padding:1rem">Enter payment details.</div>
          </furo-ui5-wizard-step>
        </furo-ui5-wizard>
  `,
};

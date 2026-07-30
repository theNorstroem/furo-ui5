import "@/elements/wizard";
import "@/elements/wizard-step";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-wizard-step";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "container/Wizard/WizardStep",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/WizardStep/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "product",
    titleText: "Product",
  },
  render: renderArgs => html`
    <furo-ui5-wizard style="height:280px">
      <furo-ui5-wizard-step
        ?branching="${renderArgs.branching}"
        ?disabled="${renderArgs.disabled}"
        icon="${ifDefined(renderArgs.icon)}"
        subtitle-text="${ifDefined(renderArgs.subtitleText)}"
        title-text="${ifDefined(renderArgs.titleText)}"
        selected
      >
        <div style="padding:1rem">Step content.</div>
      </furo-ui5-wizard-step>
      <furo-ui5-wizard-step title-text="Review" icon="accept" disabled>
        <div style="padding:1rem">Review content.</div>
      </furo-ui5-wizard-step>
    </furo-ui5-wizard>
  `,
};

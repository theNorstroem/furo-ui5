import "@/elements/multi-combobox";
import "@/elements/mcb-item-custom";
import "@/elements/icon";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-mcb-item-custom";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/MultiCombobox/McbItemCustom",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MultiComboBoxItemCustom/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    text: "Zurich",
  },
  render: renderArgs => html`
    <furo-ui5-multi-combobox placeholder="Pick cities">
      <furo-ui5-mcb-item-custom text="${ifDefined(renderArgs.text)}" value="${ifDefined(renderArgs.value)}">
        <div style="display:flex;gap:.5rem;align-items:center"><furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich</span></div>
      </furo-ui5-mcb-item-custom>
    </furo-ui5-multi-combobox>
  `,
};

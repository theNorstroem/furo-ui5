import "@/elements/combobox";
import "@/elements/cb-item";
import "@/elements/cb-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-cb-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/Combobox/CbItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ComboBoxItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-combobox placeholder="Pick a city">
          <furo-ui5-cb-item-group header-text="Europe">
            <furo-ui5-cb-item text="Zurich"></furo-ui5-cb-item>
            <furo-ui5-cb-item text="Berlin"></furo-ui5-cb-item>
          </furo-ui5-cb-item-group>
        </furo-ui5-combobox>
  `,
};

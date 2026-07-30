import "@/elements/multi-combobox";
import "@/elements/mcb-item";
import "@/elements/mcb-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { WrappingType } from "@/types";

const component = "furo-ui5-mcb-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const meta: Meta = {
  title: "input/MultiCombobox/McbItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MultiComboBoxItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Europe",
  },
  render: renderArgs => html`
    <furo-ui5-multi-combobox placeholder="Pick cities">
      <furo-ui5-mcb-item-group
        header-accessible-name="${ifDefined(renderArgs.headerAccessibleName)}"
        header-text="${ifDefined(renderArgs.headerText)}"
        wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      >
        <furo-ui5-mcb-item text="Zurich"></furo-ui5-mcb-item>
        <furo-ui5-mcb-item text="Berlin"></furo-ui5-mcb-item>
      </furo-ui5-mcb-item-group>
    </furo-ui5-multi-combobox>
  `,
};

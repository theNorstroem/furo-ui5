import "@/elements/list";
import "@/elements/li";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { Highlight, ListItemType, ValueState, WrappingType } from "@/types";

const component = "furo-ui5-li";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "additionalTextState", Object.values(ValueState));
ArgsSetEnum(argTypes, "highlight", Object.values(Highlight));
ArgsSetEnum(argTypes, "type", Object.values(ListItemType));
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const meta: Meta = {
  title: "display/List/Li",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ListItemStandard/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-li
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-role="${ifDefined(renderArgs.accessibleRole)}"
      additional-text="${ifDefined(renderArgs.additionalText)}"
      additional-text-state="${ifDefined(renderArgs.additionalTextState)}"
      description="${ifDefined(renderArgs.description)}"
      highlight="${ifDefined(renderArgs.highlight)}"
      icon="${ifDefined(renderArgs.icon)}"
      ?icon-end="${renderArgs.iconEnd}"
      ?movable="${renderArgs.movable}"
      ?navigated="${renderArgs.navigated}"
      ?selected="${renderArgs.selected}"
      text="${ifDefined(renderArgs.text)}"
      tooltip="${ifDefined(renderArgs.tooltip)}"
      type="${ifDefined(renderArgs.type)}"
      wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      st header-text="Team"
    >
          <furo-ui5-li icon="employee" description="Developer">Jane Doe</furo-ui5-li>
          <furo-ui5-li icon="employee" description="Designer">Sam Lee</furo-ui5-li>
        </furo-ui5-list>
  `,
};

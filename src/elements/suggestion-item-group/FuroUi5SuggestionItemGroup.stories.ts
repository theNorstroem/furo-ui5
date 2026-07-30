import "@/elements/text-input";
import "@/elements/suggestion-item";
import "@/elements/suggestion-item-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-suggestion-item-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/TextInput/SuggestionItemGroup",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/SuggestionItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
          <furo-ui5-suggestion-item-group header-text="Switzerland">
            <furo-ui5-suggestion-item text="Zurich"></furo-ui5-suggestion-item>
            <furo-ui5-suggestion-item text="Zug"></furo-ui5-suggestion-item>
          </furo-ui5-suggestion-item-group>
        </furo-ui5-text-input>
  `,
};

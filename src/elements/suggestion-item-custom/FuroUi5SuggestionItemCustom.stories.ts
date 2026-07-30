import "@/elements/text-input";
import "@/elements/suggestion-item-custom";
import "@/elements/icon";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-suggestion-item-custom";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/TextInput/SuggestionItemCustom",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/SuggestionItemCustom/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
          <furo-ui5-suggestion-item-custom text="Zurich">
            <div style="display:flex;gap:.5rem;align-items:center">
              <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich, CH</span>
            </div>
          </furo-ui5-suggestion-item-custom>
        </furo-ui5-text-input>
  `,
};

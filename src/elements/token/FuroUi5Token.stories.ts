import "@/elements/tokenizer";
import "@/elements/token";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-token";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/MultiInput/Token",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Token/",
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
    <furo-ui5-tokenizer style="width:20rem">
      <furo-ui5-token ?selected="${renderArgs.selected}" text="${ifDefined(renderArgs.text)}"></furo-ui5-token>
      <furo-ui5-token text="Berlin"></furo-ui5-token>
    </furo-ui5-tokenizer>
  `,
};

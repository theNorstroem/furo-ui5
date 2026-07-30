import "@/elements/select";
import "@/elements/option-custom";
import "@/elements/icon";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-option-custom";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "input/Select/OptionCustom",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/OptionCustom/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-select>
          <furo-ui5-option-custom>
            <div style="display:flex;gap:.5rem;align-items:center">
              <furo-ui5-icon name="accept"></furo-ui5-icon><span>Approved</span>
            </div>
          </furo-ui5-option-custom>
          <furo-ui5-option-custom>
            <div style="display:flex;gap:.5rem;align-items:center">
              <furo-ui5-icon name="decline"></furo-ui5-icon><span>Rejected</span>
            </div>
          </furo-ui5-option-custom>
        </furo-ui5-select>
  `,
};

import "@/elements/card";
import "@/elements/card-header";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-card-header";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "container/Card/CardHeader",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/CardHeader/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-card style="width:20rem">
          <furo-ui5-card-header
            slot="header"
            title-text="Revenue"
            subtitle-text="Q3 2026"
            status="3 of 5"
            interactive
          ></furo-ui5-card-header>
          <div style="padding:1rem">EUR 1.2 M</div>
        </furo-ui5-card>
  `,
};

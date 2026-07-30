import "@/elements/timeline";
import "@/elements/timeline-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-timeline";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "display/Timeline/Timeline",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/Timeline/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-timeline>
          <furo-ui5-timeline-item title-text="Created" subtitle-text="10:24" icon="add">Order created.</furo-ui5-timeline-item>
          <furo-ui5-timeline-item title-text="Shipped" subtitle-text="14:02" icon="shipping-status">Left the warehouse.</furo-ui5-timeline-item>
        </furo-ui5-timeline>
  `,
};

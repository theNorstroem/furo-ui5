import "@/elements/timeline";
import "@/elements/timeline-item";
import "@/elements/timeline-group-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-timeline-group-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "display/Timeline/TimelineGroupItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/TimelineGroupItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-timeline>
      <furo-ui5-timeline-group-item ?collapsed="${renderArgs.collapsed}" group-name="${ifDefined(renderArgs.groupName)}" item-name="Yesterday">
        <furo-ui5-timeline-item title-text="Created" icon="add">Order created.</furo-ui5-timeline-item>
        <furo-ui5-timeline-item title-text="Paid" icon="money-bills">Payment received.</furo-ui5-timeline-item>
      </furo-ui5-timeline-group-item>
    </furo-ui5-timeline>
  `,
};

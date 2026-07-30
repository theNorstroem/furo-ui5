import "@/elements/timeline";
import "@/elements/timeline-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ValueState } from "@/types";

const component = "furo-ui5-timeline-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "state", Object.values(ValueState));

const meta: Meta = {
  title: "display/Timeline/TimelineItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/TimelineItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "accept",
    name: "Jane Doe",
    subtitleText: "2 days ago",
    titleText: "Approved",
  },
  render: renderArgs => html`
    <furo-ui5-timeline>
      <furo-ui5-timeline-item
        icon="${ifDefined(renderArgs.icon)}"
        icon-tooltip="${ifDefined(renderArgs.iconTooltip)}"
        name="${ifDefined(renderArgs.name)}"
        ?name-clickable="${renderArgs.nameClickable}"
        state="${ifDefined(renderArgs.state)}"
        subtitle-text="${ifDefined(renderArgs.subtitleText)}"
        title-text="${ifDefined(renderArgs.titleText)}"
      >
        Budget approved without changes.
      </furo-ui5-timeline-item>
    </furo-ui5-timeline>
  `,
};

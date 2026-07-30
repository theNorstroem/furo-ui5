import "@/elements/timeline";
import "@/elements/timeline-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { TimelineGrowingMode, TimelineLayout } from "@/types";

const component = "furo-ui5-timeline";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "growing", Object.values(TimelineGrowingMode));
ArgsSetEnum(argTypes, "layout", Object.values(TimelineLayout));

const meta: Meta = {
  title: "display/Timeline/Timeline",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/Timeline/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-timeline
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      growing="${ifDefined(renderArgs.growing)}"
      layout="${ifDefined(renderArgs.layout)}"
      ?loading="${renderArgs.loading}"
      loading-delay="${ifDefined(renderArgs.loadingDelay)}"
      ?sticky-header="${renderArgs.stickyHeader}"
    >
      <furo-ui5-timeline-item title-text="Created" subtitle-text="10:24" icon="add">Order created.</furo-ui5-timeline-item>
      <furo-ui5-timeline-item title-text="Shipped" subtitle-text="14:02" icon="shipping-status">Left the warehouse.</furo-ui5-timeline-item>
    </furo-ui5-timeline>
  `,
};

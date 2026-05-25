import "@/elements/relative-time-badge";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { Timestamp } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-relative-time-badge";
const { events, argTypes } = getStorybookHelpers(component);

const DAY_MS = 24 * 60 * 60 * 1000;
// a future timestamp (rendered with the positive color scheme)
const futureTimestamp = new Timestamp(new Date(Date.now() + 5 * DAY_MS).toISOString());
// a past timestamp (rendered with the negative color scheme)
const pastTimestamp = new Timestamp(new Date(Date.now() - 5 * DAY_MS).toISOString());

const meta: Meta = {
  title: "display/RelativeTimeBadge",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Tag/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/object-status/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Relative Time Badge">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">In 5 days (future)</furo-ui5-label>
        <furo-ui5-relative-time-badge .model="${futureTimestamp}"></furo-ui5-relative-time-badge>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">5 days ago (past)</furo-ui5-label>
        <furo-ui5-relative-time-badge .model="${pastTimestamp}"></furo-ui5-relative-time-badge>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-relative-time-badge .model="${futureTimestamp}"></furo-ui5-relative-time-badge> `,
};

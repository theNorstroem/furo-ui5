import "@/elements/relative-time-display";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { Timestamp } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { TextEmptyIndicatorMode } from "@/types";

const component = "furo-ui5-relative-time-display";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "emptyIndicatorMode", Object.values(TextEmptyIndicatorMode));

const DAY_MS = 24 * 60 * 60 * 1000;
// a future timestamp
const futureTimestamp = new Timestamp(new Date(Date.now() + 5 * DAY_MS).toISOString());
// a past timestamp
const pastTimestamp = new Timestamp(new Date(Date.now() - 5 * DAY_MS).toISOString());

const meta: Meta = {
  title: "display/RelativeTimeDisplay",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/Text/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/text/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Relative Time Display">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">In 5 days (future)</furo-ui5-label>
        <furo-ui5-relative-time-display
          empty-indicator-mode="${ifDefined(renderArgs.emptyIndicatorMode)}"
          max-lines="${ifDefined(renderArgs.maxLines)}"
          .model="${futureTimestamp}"
        ></furo-ui5-relative-time-display>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">5 days ago (past)</furo-ui5-label>
        <furo-ui5-relative-time-display .model="${pastTimestamp}"></furo-ui5-relative-time-display>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Minimal: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-relative-time-display .model="${futureTimestamp}"></furo-ui5-relative-time-display> `,
};

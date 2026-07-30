import "@/elements/message-strip";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { MessageStripDesign } from "@/types";

const component = "furo-ui5-message-strip";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(MessageStripDesign));

const message = new STRING("Your changes have been saved.");

const meta: Meta = {
  title: "display/MessageStrip",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/MessageStrip/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/message-strip/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    design: "Positive",
  },
  render: renderArgs => html`
    <furo-ui5-message-strip
      color-scheme="${ifDefined(renderArgs.colorScheme)}"
      design="${ifDefined(renderArgs.design)}"
      ?hide-close-button="${renderArgs.hideCloseButton}"
      ?hide-icon="${renderArgs.hideIcon}"
      .model="${message}"
    ></furo-ui5-message-strip>
  `,
};

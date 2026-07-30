import "@/elements/expandable-text";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ExpandableTextOverflowMode, TextEmptyIndicatorMode } from "@/types";

const component = "furo-ui5-expandable-text";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "emptyIndicatorMode", Object.values(TextEmptyIndicatorMode));
ArgsSetEnum(argTypes, "overflowMode", Object.values(ExpandableTextOverflowMode));

const longText = new STRING(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);

const meta: Meta = {
  title: "display/ExpandableText",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ExpandableText/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/expandable-text/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    maxCharacters: "100",
  },
  render: renderArgs => html`
    <furo-ui5-expandable-text
      empty-indicator-mode="${ifDefined(renderArgs.emptyIndicatorMode)}"
      max-characters="${ifDefined(renderArgs.maxCharacters)}"
      overflow-mode="${ifDefined(renderArgs.overflowMode)}"
      text="${ifDefined(renderArgs.text)}"
      .model="${longText}"
    ></furo-ui5-expandable-text>
  `,
};

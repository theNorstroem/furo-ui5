import "@/elements/tag";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { TagDesign, TagSize, WrappingType } from "@/types";

const component = "furo-ui5-tag";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(TagDesign));
ArgsSetEnum(argTypes, "size", Object.values(TagSize));
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const status = new STRING("Approved");

const meta: Meta = {
  title: "display/Tag",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Tag/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tag/",
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
    <furo-ui5-tag
      color-scheme="${ifDefined(renderArgs.colorScheme)}"
      design="${ifDefined(renderArgs.design)}"
      ?hide-state-icon="${renderArgs.hideStateIcon}"
      ?interactive="${renderArgs.interactive}"
      size="${ifDefined(renderArgs.size)}"
      wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      .model="${status}"
    ></furo-ui5-tag>
  `,
};

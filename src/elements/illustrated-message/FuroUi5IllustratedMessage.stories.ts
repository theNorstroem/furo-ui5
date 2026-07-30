import "@/elements/illustrated-message";
import "@/elements/button";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { IllustrationMessageDesign } from "@/types";

const component = "furo-ui5-illustrated-message";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(IllustrationMessageDesign));

const meta: Meta = {
  title: "display/IllustratedMessage",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/IllustratedMessage/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    name: "NoData",
  },
  render: renderArgs => html`
    <furo-ui5-illustrated-message
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      ?decorative="${renderArgs.decorative}"
      design="${ifDefined(renderArgs.design)}"
      name="${ifDefined(renderArgs.name)}"
      subtitle-text="${ifDefined(renderArgs.subtitleText)}"
      title-text="${ifDefined(renderArgs.titleText)}"
    >
      <furo-ui5-button slot="actions" design="Emphasized">Create entry</furo-ui5-button>
    </furo-ui5-illustrated-message>
  `,
};

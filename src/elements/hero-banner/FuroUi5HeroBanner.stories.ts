import "@/elements/hero-banner";
import "@/elements/title";
import "@/elements/text";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { HeroBannerActionsPlacement, HeroBannerColumnsRatio, HeroBannerHeaderBlockPlacement } from "@/types";

const component = "furo-ui5-hero-banner";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "actionsPlacement", Object.values(HeroBannerActionsPlacement));
ArgsSetEnum(argTypes, "columnsRatio", Object.values(HeroBannerColumnsRatio));
ArgsSetEnum(argTypes, "headerBlockPlacement", Object.values(HeroBannerHeaderBlockPlacement));

const meta: Meta = {
  title: "display/HeroBanner",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/HeroBanner/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Welcome",
    overlineText: "Everything you need, in one place.",
  },
  render: renderArgs => html`
    <furo-ui5-hero-banner
      actions-placement="${ifDefined(renderArgs.actionsPlacement)}"
      columns-ratio="${ifDefined(renderArgs.columnsRatio)}"
      header-block-placement="${ifDefined(renderArgs.headerBlockPlacement)}"
      header-text="${ifDefined(renderArgs.headerText)}"
      overline-text="${ifDefined(renderArgs.overlineText)}"
    >
    </furo-ui5-hero-banner>
  `,
};

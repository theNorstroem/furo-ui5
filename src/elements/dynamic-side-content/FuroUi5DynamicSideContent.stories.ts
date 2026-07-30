import "@/elements/dynamic-side-content";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { SideContentFallDown, SideContentPosition, SideContentVisibility } from "@/types";

const component = "furo-ui5-dynamic-side-content";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "sideContentFallDown", Object.values(SideContentFallDown));
ArgsSetEnum(argTypes, "sideContentPosition", Object.values(SideContentPosition));
ArgsSetEnum(argTypes, "sideContentVisibility", Object.values(SideContentVisibility));

const meta: Meta = {
  title: "layout/DynamicSideContent",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/DynamicSideContent/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-dynamic-side-content
      ?equal-split="${renderArgs.equalSplit}"
      ?hide-main-content="${renderArgs.hideMainContent}"
      ?hide-side-content="${renderArgs.hideSideContent}"
      side-content-fall-down="${ifDefined(renderArgs.sideContentFallDown)}"
      side-content-position="${ifDefined(renderArgs.sideContentPosition)}"
      side-content-visibility="${ifDefined(renderArgs.sideContentVisibility)}"
    >
      <div style="padding:1rem">Main content</div>
      <div slot="sideContent" style="padding:1rem">Side content</div>
    </furo-ui5-dynamic-side-content>
  `,
};

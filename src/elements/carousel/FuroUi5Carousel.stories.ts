import "@/elements/carousel";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { BackgroundDesign, BorderDesign, CarouselArrowsPlacement, CarouselPageIndicatorType } from "@/types";

const component = "furo-ui5-carousel";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "arrowsPlacement", Object.values(CarouselArrowsPlacement));
ArgsSetEnum(argTypes, "backgroundDesign", Object.values(BackgroundDesign));
ArgsSetEnum(argTypes, "pageIndicatorBackgroundDesign", Object.values(BackgroundDesign));
ArgsSetEnum(argTypes, "pageIndicatorBorderDesign", Object.values(BorderDesign));
ArgsSetEnum(argTypes, "pageIndicatorType", Object.values(CarouselPageIndicatorType));

const meta: Meta = {
  title: "container/Carousel",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/Carousel/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-carousel
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      arrows-placement="${ifDefined(renderArgs.arrowsPlacement)}"
      background-design="${ifDefined(renderArgs.backgroundDesign)}"
      ?cyclic="${renderArgs.cyclic}"
      ?hide-navigation-arrows="${renderArgs.hideNavigationArrows}"
      ?hide-page-indicator="${renderArgs.hidePageIndicator}"
      items-per-page="${ifDefined(renderArgs.itemsPerPage)}"
      page-indicator-background-design="${ifDefined(renderArgs.pageIndicatorBackgroundDesign)}"
      page-indicator-border-design="${ifDefined(renderArgs.pageIndicatorBorderDesign)}"
      page-indicator-type="${ifDefined(renderArgs.pageIndicatorType)}"
      style="height:160px"
    >
      <div style="padding:2rem;text-align:center">Page 1</div>
      <div style="padding:2rem;text-align:center">Page 2</div>
      <div style="padding:2rem;text-align:center">Page 3</div>
    </furo-ui5-carousel>
  `,
};

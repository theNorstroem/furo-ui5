import "@/Assets";
import "@/elements/responsive-popover";
import "@/elements/button";
import "@/elements/label";
import "@/elements/title";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import PopoverHorizontalAlign from "@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js";
import PopoverPlacement from "@ui5/webcomponents/dist/types/PopoverPlacement.js";
import PopoverVerticalAlign from "@ui5/webcomponents/dist/types/PopoverVerticalAlign.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-responsive-popover";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/popover/",
  originalComponent: "https://ui5.github.io/webcomponents/components/ResponsivePopover/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "placement", Object.values(PopoverPlacement));
ArgsSetEnum(argTypes, "horizontalAlign", Object.values(PopoverHorizontalAlign));
ArgsSetEnum(argTypes, "verticalAlign", Object.values(PopoverVerticalAlign));

const openPopover = (e: Event): void => {
  const popover = document.getElementById("story-responsive-popover") as (HTMLElement & { showAt: (o: HTMLElement) => void }) | null;
  popover?.showAt(e.target as HTMLElement);
};

const meta: Meta = {
  title: "modal/ResponsivePopover",
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
      page: DocumentationTemplate({ ...componentInfo, component, since: "2.0.0" }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Details",
    placement: "Bottom",
    modal: false,
  },
  render: renderArgs => html`
    <furo-ui5-button design="Emphasized" @click="${openPopover}">Open responsive popover</furo-ui5-button>

    <furo-ui5-responsive-popover
      id="story-responsive-popover"
      header-text="${ifDefined(renderArgs.headerText)}"
      placement="${ifDefined(renderArgs.placement)}"
      horizontal-align="${ifDefined(renderArgs.horizontalAlign)}"
      vertical-align="${ifDefined(renderArgs.verticalAlign)}"
      ?modal="${renderArgs.modal}"
    >
      <div slot="header" style="padding: 0.5rem;">
        <furo-ui5-title level="H6">Quick info</furo-ui5-title>
      </div>

      <div style="padding: 0.5rem; max-width: 18rem;">
        <furo-ui5-label>On desktop this renders as a popover, on mobile it becomes a fullscreen dialog.</furo-ui5-label>
      </div>
    </furo-ui5-responsive-popover>
  `,
};

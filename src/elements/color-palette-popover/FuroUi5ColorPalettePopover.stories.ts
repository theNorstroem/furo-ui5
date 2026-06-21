import "@/elements/color-palette-popover";
import "@/elements/button";

import { ARRAY, STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-color-palette-popover";
const { events, argTypes } = getStorybookHelpers(component);

const selected = new STRING("#0000ff");
const colors = ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]);

const openPopover = (): void => {
  const popover = document.querySelector("furo-ui5-color-palette-popover");
  if (popover) {
    popover.opener = "open-palette-btn";
    popover.open = true;
  }
};

const meta: Meta = {
  title: "form/ColorPalettePopover",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ColorPalettePopover/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/color-palette/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-button id="open-palette-btn" @click="${openPopover}">Pick a color</furo-ui5-button>
    <furo-ui5-color-palette-popover show-more-colors .model="${selected}" .colorsModel="${colors}"></furo-ui5-color-palette-popover>
  `,
};

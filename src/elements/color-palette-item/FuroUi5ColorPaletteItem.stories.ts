import "@/elements/color-palette";
import "@/elements/color-palette-item";

import { STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-color-palette-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const red = new STRING("#ff0000");
const green = new STRING("#00ff00");

const meta: Meta = {
  title: "input/ColorPalette/ColorPaletteItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ColorPalette/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/color-palette/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <furo-ui5-color-palette accessible-name="palette">
      <furo-ui5-color-palette-item
        ?selected="${renderArgs.selected}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        value="${ifDefined(renderArgs.value)}"
        .model="${red}"
      ></furo-ui5-color-palette-item>
      <furo-ui5-color-palette-item .model="${green}"></furo-ui5-color-palette-item>
    </furo-ui5-color-palette>
  `,
};

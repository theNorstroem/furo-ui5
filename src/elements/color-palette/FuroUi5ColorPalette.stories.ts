import "@/elements/color-palette";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import { ARRAY, STRING } from "@furo/open-models";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-color-palette";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const selected = new STRING("#00ff00");
const colors = ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]);

const meta: Meta = {
  title: "form/ColorPalette",
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
    <furo-ui5-form-layout form-title="Color Palette">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Pick a color</furo-ui5-label>
        <furo-ui5-color-palette
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
          .model="${selected}"
          .colorsModel="${colors}"
        ></furo-ui5-color-palette>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

import "@/Assets";
import "@/elements/busy-indicator";
import "@/elements/checkbox";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import BusyIndicatorSize from "@ui5/webcomponents/dist/types/BusyIndicatorSize.js";
import BusyIndicatorTextPlacement from "@ui5/webcomponents/dist/types/BusyIndicatorTextPlacement.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-busy-indicator";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "size", Object.values(BusyIndicatorSize));
ArgsSetEnum(argTypes, "textPlacement", Object.values(BusyIndicatorTextPlacement));

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "display/BusyIndicator",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "2.0.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/BusyIndicator/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/busy-indicator/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    text: "Loading...",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Busy Indicator Element">
      ${cube.cube.boo}

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="chk">Active</furo-ui5-label>
        <furo-ui5-checkbox id="chk" text="busy" .model="${cube.cube.boo}"></furo-ui5-checkbox>
      </furo-ui5-form-row>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label">Content</furo-ui5-label>
        <furo-ui5-busy-indicator
          delay="${ifDefined(renderArgs.delay)}"
          size="${ifDefined(renderArgs.size)}"
          text="${ifDefined(renderArgs.text)}"
          text-placement="${ifDefined(renderArgs.textPlacement)}"
          .model="${cube.cube.boo}"
        >
          <div style="padding:1rem">Some content that is overlaid while busy.</div>
        </furo-ui5-busy-indicator>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Sizes: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-busy-indicator active size="${BusyIndicatorSize.S}">
      <div style="padding:1rem">Size S</div>
    </furo-ui5-busy-indicator>
    <furo-ui5-busy-indicator active size="${BusyIndicatorSize.M}">
      <div style="padding:1rem">Size M</div>
    </furo-ui5-busy-indicator>
    <furo-ui5-busy-indicator active size="${BusyIndicatorSize.L}">
      <div style="padding:1rem">Size L</div>
    </furo-ui5-busy-indicator>
  `,
};

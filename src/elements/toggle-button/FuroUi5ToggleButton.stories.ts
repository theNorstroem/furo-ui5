import "@/Assets";
import "@/elements/toggle-button";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/button";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ButtonDesign from "@ui5/webcomponents/dist/types/ButtonDesign.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ButtonAccessibleRole, ButtonType } from "@/types";

const component = "furo-ui5-toggle-button";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "accessibleRole", Object.values(ButtonAccessibleRole));
ArgsSetEnum(argTypes, "type", Object.values(ButtonType));
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));

// set up the model
const cube = new CubeEntity();
const validate = () => {
  cube.__validate();
};

const meta: Meta = {
  title: "input/Button/ToggleButton",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/ToggleButton/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/toggle-button/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    design: "Default",
    defaultSlot: "Toggle me",
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="ToggleButton Element">
      ${cube.description}
      <furo-ui5-button slot="action" @click="${validate}" design="Transparent">Validate</furo-ui5-button>

      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="tb">Pressed state</furo-ui5-label>
        <furo-ui5-toggle-button
          id="tb"
          accessible-name="${ifDefined(renderArgs.accessibleName)}"
          ?pressed="${renderArgs.pressed}"
          ?disabled="${renderArgs.disabled}"
          icon="${ifDefined(renderArgs.icon)}"
          end-icon="${ifDefined(renderArgs.endIcon)}"
          tooltip="${ifDefined(renderArgs.tooltip)}"
          design="${ifDefined(renderArgs.design)}"
          .model="${cube.cube.boo}"
          >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-toggle-button
        >
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

export const Designs: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-toggle-button design="${ButtonDesign.Default}">Default</furo-ui5-toggle-button>
    <furo-ui5-toggle-button design="${ButtonDesign.Emphasized}">Emphasized</furo-ui5-toggle-button>
    <furo-ui5-toggle-button design="${ButtonDesign.Positive}">Positive</furo-ui5-toggle-button>
    <furo-ui5-toggle-button design="${ButtonDesign.Negative}">Negative</furo-ui5-toggle-button>
    <furo-ui5-toggle-button design="${ButtonDesign.Attention}">Attention</furo-ui5-toggle-button>
    <furo-ui5-toggle-button design="${ButtonDesign.Transparent}">Transparent</furo-ui5-toggle-button>
    <furo-ui5-toggle-button icon="favorite" pressed>Icon pressed</furo-ui5-toggle-button>
    <furo-ui5-toggle-button icon="settings"></furo-ui5-toggle-button>
    <furo-ui5-toggle-button disabled>Disabled</furo-ui5-toggle-button>
  `,
};

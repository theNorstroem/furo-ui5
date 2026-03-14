import "src/Assets";
import "src/web-components/furo-ui5-button";
import "src/web-components/furo-ui5-button-badge";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ButtonBadgeDesign from "@ui5/webcomponents/dist/types/ButtonBadgeDesign.js";
import ButtonType from "@ui5/webcomponents/dist/types/ButtonType.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "stories/ArgTypesTransormer";
import DocumentationTemplate from "stories/DocumentationTemplate";

const component = "furo-ui5-button-badge";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/button/",
  originalComponent: "https://ui5.github.io/webcomponents/components/ButtonBadge/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(ButtonBadgeDesign));
ArgsSetEnum(argTypes, "type", Object.values(ButtonType));

const meta: Meta = {
  title: "input/Button/Badge",
  component,
  tags: ["autodocs"],
  // args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },

    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    design: "OverlayText",
    defaultSlot: "Click me",
    text: "44+",
  },

  render: renderArgs =>
    html`<furo-ui5-button design="Emphasized"
        >${unsafeHTML(renderArgs.defaultSlot)}
        <furo-ui5-button-badge
          slot="badge"
          design="${ifDefined(renderArgs.design)}"
          text="${ifDefined(renderArgs.text)}"
        ></furo-ui5-button-badge></furo-ui5-button
      >${renderArgs.loadingDelay}`,
};

import "@/Assets";
import "@/elements/button";
import "@/elements/button-badge";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import {ButtonDesign} from "@/types";
import {ButtonType} from "@/types";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-button";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/button/",
  originalComponent: "https://ui5.github.io/webcomponents/components/main/Button/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(ButtonDesign));
ArgsSetEnum(argTypes, "type", Object.values(ButtonType));

const meta: Meta = {
  title: "input/Button/Button",
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
    design: "Emphasized",
    defaultSlot: "Click me",
  },
  render: renderArgs =>
    html`<furo-ui5-button
        ?disabled="${renderArgs.disabled}"
        ?loading="${renderArgs.loading}"
        ?submits="${renderArgs.submits}"
        end-icon="${ifDefined(renderArgs.endIcon)}"
        loading-delay="${ifDefined(renderArgs.loadingDelay)}"
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        type="${ifDefined(renderArgs.type)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        design="${ifDefined(renderArgs.design)}"
        icon="${ifDefined(renderArgs.icon)}"
        >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-button
      >${renderArgs.loadingDelay}`,
};

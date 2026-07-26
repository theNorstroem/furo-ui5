import "@/Assets";
import "@/elements/icon";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import IconDesign from "@ui5/webcomponents/dist/types/IconDesign.js";
import IconMode from "@ui5/webcomponents/dist/types/IconMode.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-icon";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/foundation/icons/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Icon/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(IconDesign));
ArgsSetEnum(argTypes, "mode", Object.values(IconMode));

const meta: Meta = {
  title: "display/Icon",
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
    name: "employee",
    accessibleName: "Employee",
  },

  render: renderArgs =>
    html`<furo-ui5-icon
      ?showTooltip="${renderArgs.showTooltip}"
      name="${ifDefined(renderArgs.name)}"
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      design="${ifDefined(renderArgs.design)}"
      mode="${ifDefined(renderArgs.mode)}"
    ></furo-ui5-icon>`,
};

export const Designs: StoryObj = {
  render: () =>
    html`<div style="display: flex; gap: 1rem; align-items: center;">
      ${Object.values(IconDesign).map(
        design => html`<furo-ui5-icon name="employee" accessible-name="${design}" design="${ifDefined(design)}"></furo-ui5-icon>`
      )}
    </div>`,
};

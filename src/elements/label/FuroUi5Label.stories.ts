import "@/Assets";
import "@/elements/label";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-label";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/label/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Label/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const meta: Meta = {
  title: "display/Label",
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
    defaultSlot: "First name",
  },

  render: renderArgs =>
    html`<furo-ui5-label
      ?required="${renderArgs.required}"
      ?showColon="${renderArgs.showColon}"
      for="${ifDefined(renderArgs.for)}"
      wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-label
    >`,
};

export const RequiredAndColon: StoryObj = {
  args: {
    defaultSlot: "First name",
    required: true,
    showColon: true,
  },

  render: renderArgs =>
    html`<furo-ui5-label
      ?required="${renderArgs.required}"
      ?showColon="${renderArgs.showColon}"
      for="${ifDefined(renderArgs.for)}"
      wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-label
    >`,
};

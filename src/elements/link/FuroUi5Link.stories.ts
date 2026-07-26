import "@/Assets";
import "@/elements/link";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import LinkDesign from "@ui5/webcomponents/dist/types/LinkDesign.js";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-link";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/link/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Link/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "design", Object.values(LinkDesign));
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const meta: Meta = {
  title: "display/Link",
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
    defaultSlot: "Open SAP",
    href: "https://www.sap.com",
    target: "_blank",
  },

  render: renderArgs =>
    html`<furo-ui5-link
      ?disabled="${renderArgs.disabled}"
      href="${ifDefined(renderArgs.href)}"
      target="${ifDefined(renderArgs.target)}"
      design="${ifDefined(renderArgs.design)}"
      wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-link
    >`,
};

export const Designs: StoryObj = {
  render: () =>
    html`<div style="display: flex; gap: 1.5rem; align-items: center;">
      ${Object.values(LinkDesign).map(design => html`<furo-ui5-link design="${ifDefined(design)}">${design} link</furo-ui5-link>`)}
    </div>`,
};

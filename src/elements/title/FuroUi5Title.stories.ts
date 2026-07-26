import "@/Assets";
import "@/elements/title";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import TitleLevel from "@ui5/webcomponents/dist/types/TitleLevel.js";
import WrappingType from "@ui5/webcomponents/dist/types/WrappingType.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-title";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/title/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Title/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "level", Object.values(TitleLevel));
ArgsSetEnum(argTypes, "wrappingType", Object.values(WrappingType));

const meta: Meta = {
  title: "display/Title",
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
    defaultSlot: "Page title",
  },

  render: renderArgs =>
    html`<furo-ui5-title level="${ifDefined(renderArgs.level)}" wrapping-type="${ifDefined(renderArgs.wrappingType)}"
      >${unsafeHTML(renderArgs.defaultSlot)}</furo-ui5-title
    >`,
};

export const Levels: StoryObj = {
  render: () =>
    html`<div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${Object.values(TitleLevel).map(level => html`<furo-ui5-title level="${ifDefined(level)}">${level} title</furo-ui5-title>`)}
    </div>`,
};

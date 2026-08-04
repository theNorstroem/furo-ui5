import "@/elements/tabcontainer";
import "@/elements/tab";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { SemanticColor } from "@/types";

const component = "furo-ui5-tab";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "design", Object.values(SemanticColor));

const meta: Meta = {
  title: "container/TabContainer/Tab",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/TabContainer/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tab-bar/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    text: "Tab",
  },
  render: renderArgs => html`
    <furo-ui5-tabcontainer>
      <furo-ui5-tab
        additional-text="${ifDefined(renderArgs.additionalText)}"
        design="${ifDefined(renderArgs.design)}"
        ?disabled="${renderArgs.disabled}"
        icon="${ifDefined(renderArgs.icon)}"
        ?movable="${renderArgs.movable}"
        ?selected="${renderArgs.selected}"
        text="${ifDefined(renderArgs.text)}"
      >
        Play around with the controls for the tab
      </furo-ui5-tab>
    </furo-ui5-tabcontainer>
  `,
};

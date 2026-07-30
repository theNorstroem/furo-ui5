import "@/elements/list";
import "@/elements/li-custom";
import "@/elements/icon";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { Highlight, ListItemType } from "@/types";

const component = "furo-ui5-li-custom";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "highlight", Object.values(Highlight));
ArgsSetEnum(argTypes, "type", Object.values(ListItemType));

const meta: Meta = {
  title: "display/List/LiCustom",
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
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/ListItemCustom/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: renderArgs => html`
    <furo-ui5-list header-text="Custom rows">
      <furo-ui5-li-custom
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        accessible-role="${ifDefined(renderArgs.accessibleRole)}"
        highlight="${ifDefined(renderArgs.highlight)}"
        ?movable="${renderArgs.movable}"
        ?navigated="${renderArgs.navigated}"
        ?selected="${renderArgs.selected}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        type="${ifDefined(renderArgs.type)}"
      >
        <div style="display:flex;gap:.5rem;align-items:center;padding:.5rem">
          <furo-ui5-icon name="paper-plane"></furo-ui5-icon>
          <strong>Anything you like</strong>
        </div>
      </furo-ui5-li-custom>
    </furo-ui5-list>
  `,
};

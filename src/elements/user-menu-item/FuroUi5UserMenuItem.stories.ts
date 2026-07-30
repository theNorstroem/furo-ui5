import "@/elements/user-menu";
import "@/elements/user-menu-item";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { Highlight, ListItemType } from "@/types";

const component = "furo-ui5-user-menu-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "highlight", Object.values(Highlight));
ArgsSetEnum(argTypes, "type", Object.values(ListItemType));

const meta: Meta = {
  title: "layout/Shellbar/UserMenuItem",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenuItem/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    icon: "action-settings",
    text: "Settings",
  },
  render: renderArgs => html`
    <furo-ui5-user-menu open>
      <furo-ui5-user-menu-item
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        accessible-role="${ifDefined(renderArgs.accessibleRole)}"
        additional-text="${ifDefined(renderArgs.additionalText)}"
        ?checked="${renderArgs.checked}"
        ?disabled="${renderArgs.disabled}"
        highlight="${ifDefined(renderArgs.highlight)}"
        icon="${ifDefined(renderArgs.icon)}"
        ?loading="${renderArgs.loading}"
        loading-delay="${ifDefined(renderArgs.loadingDelay)}"
        ?navigated="${renderArgs.navigated}"
        ?selected="${renderArgs.selected}"
        ?show-selection="${renderArgs.showSelection}"
        text="${ifDefined(renderArgs.text)}"
        tooltip="${ifDefined(renderArgs.tooltip)}"
        type="${ifDefined(renderArgs.type)}"
      ></furo-ui5-user-menu-item>
      <furo-ui5-user-menu-item text="Privacy" icon="locked"></furo-ui5-user-menu-item>
    </furo-ui5-user-menu>
  `,
};

import "@/elements/list";
import "@/elements/li";
import "@/elements/li-group";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-li-group";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "display/List/LiGroup",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  argTypes,

  parameters: {
    parameters: {
      actions: {
        handles: events,
      },
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "0.9.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/ListItemGroup/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-list header-text="Grouped">
          <furo-ui5-li-group header-text="Europe">
            <furo-ui5-li>Zurich</furo-ui5-li>
            <furo-ui5-li>Berlin</furo-ui5-li>
          </furo-ui5-li-group>
          <furo-ui5-li-group header-text="Asia">
            <furo-ui5-li>Tokyo</furo-ui5-li>
          </furo-ui5-li-group>
        </furo-ui5-list>
  `,
};

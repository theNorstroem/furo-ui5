import "@/elements/user-menu";
import "@/elements/user-menu-account";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-user-menu-account";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/UserMenuAccount",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/UserMenuAccount/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-user-menu open>
          <furo-ui5-user-menu-account
            slot="accounts"
            avatar-src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png"
            title-text="Jane Doe"
            subtitle-text="jane.doe@example.com"
            selected
          ></furo-ui5-user-menu-account>
        </furo-ui5-user-menu>
  `,
};

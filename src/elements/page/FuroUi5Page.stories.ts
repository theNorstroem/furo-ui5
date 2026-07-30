import "@/elements/page";
import "@/elements/bar";
import "@/elements/button";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-page";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Page",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/Page/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => html`
    <furo-ui5-page style="height:300px" show-footer>
          <furo-ui5-bar slot="header" design="Header"><b slot="startContent">Title</b></furo-ui5-bar>
          <div style="padding:1rem">Scrollable page content.</div>
          <furo-ui5-bar slot="footer" design="FloatingFooter">
            <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
          </furo-ui5-bar>
        </furo-ui5-page>
  `,
};

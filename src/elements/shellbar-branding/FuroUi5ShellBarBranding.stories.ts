import "@/elements/shellbar";
import "@/elements/shellbar-branding";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-shellbar-branding";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/ShellBarBranding",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ShellBarBranding/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    href: "#",
  },
  render: renderArgs => html`
    <furo-ui5-shellbar>
      <furo-ui5-shellbar-branding
        accessible-name="${ifDefined(renderArgs.accessibleName)}"
        href="${ifDefined(renderArgs.href)}"
        target="${ifDefined(renderArgs.target)}"
        slot="branding"
      >
        <img slot="logo" src="https://sdk.openui5.org/resources/sap/ui/documentation/sdk/images/logo_ui5.png" alt="UI5" />
        My Product
      </furo-ui5-shellbar-branding>
    </furo-ui5-shellbar>
  `,
};

import "@/Assets";
import "@/elements/z-grid";
import "@/elements/button";
import "@/elements/label";
import "@/elements/text-input";
import "@/elements/title";
import "@ui5/webcomponents-icons/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-z-grid";

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const meta: Meta = {
  title: "layout/ZGrid",
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
        since: "2.0.0",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/form/",
      }),
    },
  },
};
export default meta;

const box = (label: string) =>
  html`<div style="border: 1px solid var(--sapList_BorderColor, #d9d9d9); border-radius: 0.5rem; padding: 1rem; background: var(--sapTile_Background, #fff); box-sizing: border-box;">${label}</div>`;

export const Default: StoryObj = {
  args: {
    padding: true,
  },
  render: renderArgs => html`
    <div style="height: 24rem;">
      <furo-ui5-z-grid ?padding="${renderArgs.padding}">
        <div hspan="2" vspan="1">${box("Cell A · hspan 2")}</div>
        <div hspan="4" vspan="2">${box("Cell B · hspan 4 / vspan 2")}</div>
        <div hspan="3" vspan="1">${box("Cell C · hspan 3")}</div>
        <div hspan="3" vspan="1">${box("Cell D · hspan 3")}</div>
        <div full vspan="1">${box("Cell E · full width")}</div>
      </furo-ui5-z-grid>
    </div>
  `,
};

export const Populated: StoryObj = {
  args: {
    padding: true,
  },
  render: renderArgs => html`
    <div style="height: 28rem;">
      <furo-ui5-z-grid ?padding="${renderArgs.padding}">
        <div full vspan="1">
          <furo-ui5-title level="H4">Customer details</furo-ui5-title>
        </div>
        <div hspan="3" vspan="1">
          <furo-ui5-label for="first">First name</furo-ui5-label>
          <furo-ui5-text-input id="first" value="Jane"></furo-ui5-text-input>
        </div>
        <div hspan="3" vspan="1">
          <furo-ui5-label for="last">Last name</furo-ui5-label>
          <furo-ui5-text-input id="last" value="Doe"></furo-ui5-text-input>
        </div>
        <div hspan="3" vspan="1">
          <furo-ui5-label for="email">Email</furo-ui5-label>
          <furo-ui5-text-input id="email" value="jane.doe@example.com"></furo-ui5-text-input>
        </div>
        <div hspan="3" vspan="1">
          <furo-ui5-label for="phone">Phone</furo-ui5-label>
          <furo-ui5-text-input id="phone" value="+1 555 0100"></furo-ui5-text-input>
        </div>
      </furo-ui5-z-grid>
    </div>
  `,
};

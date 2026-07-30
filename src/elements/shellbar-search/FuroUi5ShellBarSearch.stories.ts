import "@/elements/shellbar";
import "@/elements/shellbar-search";
import "@ui5/webcomponents-fiori/dist/SearchItem.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-shellbar-search";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

const meta: Meta = {
  title: "layout/Shellbar/ShellBarSearch",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/ShellBarSearch/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/ui-elements/shell-bar/",
      }),
    },
  },
};
export default meta;

// shellbar-search lives in the shellbar searchField slot.
export const Default: StoryObj = {
  args: {
    placeholder: "Search...",
    value: "",
    showClearIcon: true,
  },
  render: renderArgs => html`
    <furo-ui5-shellbar primary-title="ShellBarSearch" show-search-field>
      <furo-ui5-shellbar-search
        slot="searchField"
        placeholder="${ifDefined(renderArgs.placeholder)}"
        value="${ifDefined(renderArgs.value)}"
        ?show-clear-icon="${renderArgs.showClearIcon}"
        ?open="${renderArgs.open}"
      >
        <ui5-search-item text="Dashboard"></ui5-search-item>
        <ui5-search-item text="Reports"></ui5-search-item>
        <ui5-search-item text="Settings"></ui5-search-item>
      </furo-ui5-shellbar-search>
    </furo-ui5-shellbar>
  `,
};

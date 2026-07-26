import "@/Assets";
import "@/elements/tree-table";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { TreeTableMode } from "@/elements/tree-table/TreeTableMode";
import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-tree-table";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tree-table/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Table/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "mode", Object.values(TreeTableMode));

const meta: Meta = {
  title: "display/TreeTable",
  component,
  tags: ["autodocs"],
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

/**
 * A hierarchical light-DOM `<table>`. Rows declare their depth with `aria-level`
 * (one-based) and open parents with `aria-expanded="true"`.
 */
const sampleTable = html`
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr aria-level="1" aria-expanded="true">
        <td>Paperclips</td>
        <td>Office supplies</td>
        <td>12.50</td>
      </tr>
      <tr aria-level="2" aria-expanded="true">
        <td>New Paperclips</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
        <td>0.01</td>
      </tr>
      <tr aria-level="3" value-state="Positive">
        <td>Small</td>
        <td>26mm</td>
        <td>0.01</td>
      </tr>
      <tr aria-level="3" value-state="Negative">
        <td>Large</td>
        <td>50mm</td>
        <td>0.02</td>
      </tr>
      <tr aria-level="2">
        <td>Used Paperclips</td>
        <td>Slightly bent</td>
        <td>0.00</td>
      </tr>
      <tr aria-level="1">
        <td>Staplers</td>
        <td>Heavy duty</td>
        <td>9.99</td>
      </tr>
    </tbody>
  </table>
`;

export const Default: StoryObj = {
  args: {
    mode: TreeTableMode.SingleSelect,
  },
  render: renderArgs =>
    html`<furo-ui5-tree-table
      mode="${renderArgs.mode ?? TreeTableMode.None}"
      ?busy="${renderArgs.busy}"
      ?sticky-column-header="${renderArgs.stickyColumnHeader}"
      ?sticky-tree="${renderArgs.stickyTree}"
      ?show-selected-row="${renderArgs.showSelectedRow}"
    >
      ${sampleTable}
    </furo-ui5-tree-table>`,
};

/**
 * `busy` reduces opacity and shows the busy indicator while data is loading.
 */
export const Busy: StoryObj = {
  args: {
    busy: true,
  },
  render: Default.render,
};

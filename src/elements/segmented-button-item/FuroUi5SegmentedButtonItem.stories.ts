import "@/elements/segmented-button";
import "@/elements/segmented-button-item";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { CubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-segmented-button-item";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// a single item model for the data-binding example
const sbItem = new CubeOptions({
  id: "map",
  displayName: "Bound from model",
  icon: "map",
  tooltip: "via .model",
});

const meta: Meta = {
  title: "input/Button/SegmentedButton/SegmentedButton Item",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
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
        originalComponent: "https://ui5.github.io/webcomponents/components/SegmentedButtonItem/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/segmented-button/",
      }),
    },
    a11y: {
      options: {
        rules: {
          "color-contrast": { enabled: false },
        },
      },
    },
  },
};
export default meta;

/**
 * `furo-ui5-segmented-button-item` is used as a child of `furo-ui5-segmented-button`. Use the
 * controls to change the slotted text, `icon`, `tooltip` and `selected` state of the first item.
 * The parent maps selection back to the model via the item's `data-id`.
 */
export const Default: StoryObj = {
  args: {
    defaultSlot: "Map",
    icon: "map",
    tooltip: "Show map view",
    selected: true,
  },
  render: renderArgs => html`
    <furo-ui5-form-layout form-title="Segmented Button Item">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sb">Map mode</furo-ui5-label>
        <furo-ui5-segmented-button id="sb" accessible-name="Map mode">
          <furo-ui5-segmented-button-item
            data-id="map"
            icon="${ifDefined(renderArgs.icon)}"
            tooltip="${ifDefined(renderArgs.tooltip)}"
            ?selected="${renderArgs.selected}"
          >
            ${unsafeHTML(renderArgs.defaultSlot)}
          </furo-ui5-segmented-button-item>
          <furo-ui5-segmented-button-item data-id="satellite">Satellite</furo-ui5-segmented-button-item>
          <furo-ui5-segmented-button-item data-id="hybrid">Hybrid</furo-ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

/**
 * The item can derive its text / `icon` / `tooltip` and `data-id` from a bound `OptionLike` model
 * via `bindData` / the `model` setter.
 */
export const WithDataBinding: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-form-layout form-title="Segmented Button Item — data binding">
      <furo-ui5-form-row>
        <furo-ui5-label slot="label" for="sb-bound">Map mode</furo-ui5-label>
        <furo-ui5-segmented-button id="sb-bound" accessible-name="Map mode">
          <furo-ui5-segmented-button-item .model="${sbItem}"></furo-ui5-segmented-button-item>
          <furo-ui5-segmented-button-item data-id="satellite">Satellite</furo-ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      </furo-ui5-form-row>
    </furo-ui5-form-layout>
  `,
};

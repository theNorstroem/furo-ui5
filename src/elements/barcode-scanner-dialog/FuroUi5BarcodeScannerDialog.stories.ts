import "@/Assets";
import "@/elements/barcode-scanner-dialog";
import "@/elements/button";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/label";
import "@/elements/pretty-json";
import "@/elements/text-input";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ref } from "lit/directives/ref.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

import type { FuroUi5BarcodeScannerDialog } from "./FuroUi5BarcodeScannerDialog";

const component = "furo-ui5-barcode-scanner-dialog";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity();

const meta: Meta = {
  title: "input/BarcodeScannerDialog",
  component,
  subcomponents: {},
  tags: ["autodocs"],
  // args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({
        component,
        since: "2.0.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/fiori/BarcodeScannerDialog/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: renderArgs => {
    let dialogEl: FuroUi5BarcodeScannerDialog | undefined;

    const grabDialog = (el?: Element): void => {
      if (el !== undefined) {
        dialogEl = el as FuroUi5BarcodeScannerDialog;
      }
    };

    const openScanner = (): void => {
      dialogEl?.show();
    };

    return html`
      <furo-ui5-form-layout form-title="Barcode Scanner Dialog Element">
        ${cube.cube.str}

        <furo-ui5-form-row>
          <furo-ui5-label slot="label">Scan</furo-ui5-label>
          <furo-ui5-button design="Emphasized" @click="${openScanner}">Open Scanner</furo-ui5-button>
        </furo-ui5-form-row>

        <furo-ui5-form-row>
          <furo-ui5-label slot="label" for="scanned">Scanned value</furo-ui5-label>
          <furo-ui5-text-input id="scanned" readonly .model="${cube.cube.str}"></furo-ui5-text-input>
        </furo-ui5-form-row>

        <furo-ui5-form-row>
          <furo-ui5-label slot="label">Model</furo-ui5-label>
          <furo-ui5-pretty-json .model="${cube.cube.str}"></furo-ui5-pretty-json>
        </furo-ui5-form-row>

        <furo-ui5-barcode-scanner-dialog ?open="${renderArgs.open}" ${ref(grabDialog)} .model="${cube.cube.str}"></furo-ui5-barcode-scanner-dialog>
      </furo-ui5-form-layout>
    `;
  },
};

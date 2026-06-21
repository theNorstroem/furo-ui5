import "@/Assets";
import "@/elements/dialog";
import "@/elements/button";
import "@/elements/text-input";
import "@/elements/title";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import ValueState from "@/types/ValueState";

const component = "furo-ui5-dialog";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/dialog/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Dialog/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "state", Object.values(ValueState));

const openDialog = (): void => {
  const dialog = document.getElementById("story-dialog") as (HTMLElement & { open: boolean }) | null;
  if (dialog) {
    dialog.open = true;
  }
};

const closeDialog = (): void => {
  const dialog = document.getElementById("story-dialog") as (HTMLElement & { open: boolean }) | null;
  if (dialog) {
    dialog.open = false;
  }
};

const meta: Meta = {
  title: "modal/Dialog",
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
      page: DocumentationTemplate({ ...componentInfo, component, since: "2.0.0" }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    headerText: "Confirm action",
    stretch: false,
    draggable: true,
    resizable: false,
  },
  render: renderArgs => html`
    <furo-ui5-button design="Emphasized" @click="${openDialog}">Open dialog</furo-ui5-button>

    <furo-ui5-dialog
      id="story-dialog"
      header-text="${ifDefined(renderArgs.headerText)}"
      state="${ifDefined(renderArgs.state)}"
      ?stretch="${renderArgs.stretch}"
      ?draggable="${renderArgs.draggable}"
      ?resizable="${renderArgs.resizable}"
    >
      <div style="padding: 0.5rem 0;">
        <furo-ui5-title level="H5">Please provide your details</furo-ui5-title>
        <furo-ui5-text-input placeholder="Your name" style="width: 100%; margin-top: 0.5rem;"></furo-ui5-text-input>
      </div>

      <div slot="footer" style="display: flex; justify-content: flex-end; gap: 0.5rem; width: 100%; padding: 0.5rem;">
        <furo-ui5-button design="Transparent" @click="${closeDialog}">Cancel</furo-ui5-button>
        <furo-ui5-button design="Emphasized" @click="${closeDialog}">OK</furo-ui5-button>
      </div>
    </furo-ui5-dialog>
  `,
};

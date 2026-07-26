import "@/Assets";
import "@/elements/sign-pad";
import "@/elements/button";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-sign-pad";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/",
  originalComponent: "https://github.com/szimek/signature_pad",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

const padFor = (e: Event): (HTMLElement & { clear: () => void; enable: () => void; disable: () => void }) | null => {
  const btn = e.target as HTMLElement;
  return btn.closest(".sign-pad-demo")?.querySelector("furo-ui5-sign-pad") as
    (HTMLElement & { clear: () => void; enable: () => void; disable: () => void }) | null;
};

const meta: Meta = {
  title: "input/SignPad",
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
    disabled: false,
  },
  render: renderArgs => html`
    <div class="sign-pad-demo" style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
      <furo-ui5-sign-pad
        ?disabled="${renderArgs.disabled}"
        style="border: 1px solid var(--sapField_BorderColor, #89919a);"
        @sign-updated="${(e: CustomEvent<string>) => {
          const preview = (e.target as HTMLElement).closest(".sign-pad-demo")?.querySelector("img");
          if (preview) preview.src = e.detail;
        }}"
      ></furo-ui5-sign-pad>

      <div style="display: flex; gap: 0.5rem;">
        <furo-ui5-button design="Transparent" @click="${(e: Event) => padFor(e)?.clear()}">Clear</furo-ui5-button>
        <furo-ui5-button design="Transparent" @click="${(e: Event) => padFor(e)?.disable()}">Disable</furo-ui5-button>
        <furo-ui5-button design="Transparent" @click="${(e: Event) => padFor(e)?.enable()}">Enable</furo-ui5-button>
      </div>

      <span>Captured image (updates after each stroke):</span>
      <img alt="captured signature" style="border: 1px dashed #ccc; width: 300px; height: 184px;" />
    </div>
  `,
};

export const Disabled: StoryObj = {
  args: {},
  render: () => html` <furo-ui5-sign-pad disabled style="border: 1px solid var(--sapField_BorderColor, #89919a);"></furo-ui5-sign-pad> `,
};

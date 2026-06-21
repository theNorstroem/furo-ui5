import "@/Assets";
import "@/elements/toast";
import "@/elements/button";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import ToastPlacement from "@ui5/webcomponents/dist/types/ToastPlacement.js";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-toast";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/message-toast/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Toast/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);
ArgsSetEnum(argTypes, "placement", Object.values(ToastPlacement));

const showToast = (): void => {
  const toast = document.getElementById("story-toast") as (HTMLElement & { show: () => void }) | null;
  toast?.show();
};

const meta: Meta = {
  title: "modal/Toast",
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
    placement: "BottomCenter",
    duration: 3000,
    message: "Your changes have been saved.",
  },
  render: renderArgs => html`
    <furo-ui5-button design="Emphasized" @click="${showToast}">Show toast</furo-ui5-button>

    <furo-ui5-toast
      id="story-toast"
      placement="${ifDefined(renderArgs.placement)}"
      duration="${ifDefined(renderArgs.duration)}"
    >${renderArgs.message}
    </furo-ui5-toast>
  `,
};

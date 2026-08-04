import "@/elements/file-uploader";
import "@/elements/button";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { ArgsSetEnum, ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";
import { ValueState } from "@/types";

const component = "furo-ui5-file-uploader";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);
ArgsSetEnum(argTypes, "valueState", Object.values(ValueState));

const meta: Meta = {
  title: "input/FileUploader",
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
        originalComponent: "https://ui5.github.io/webcomponents/components/FileUploader/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/upload-collection/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    placeholder: "Choose a file...",
  },
  render: renderArgs => html`
    <furo-ui5-file-uploader
      accept="${ifDefined(renderArgs.accept)}"
      accessible-description="${ifDefined(renderArgs.accessibleDescription)}"
      accessible-description-ref="${ifDefined(renderArgs.accessibleDescriptionRef)}"
      accessible-name="${ifDefined(renderArgs.accessibleName)}"
      accessible-name-ref="${ifDefined(renderArgs.accessibleNameRef)}"
      ?disabled="${renderArgs.disabled}"
      ?hide-input="${renderArgs.hideInput}"
      max-file-size="${ifDefined(renderArgs.maxFileSize)}"
      ?multiple="${renderArgs.multiple}"
      name="${ifDefined(renderArgs.name)}"
      placeholder="${ifDefined(renderArgs.placeholder)}"
      ?required="${renderArgs.required}"
      value="${ifDefined(renderArgs.value)}"
      value-state="${ifDefined(renderArgs.valueState)}"
    >
      <furo-ui5-button>Upload</furo-ui5-button>
    </furo-ui5-file-uploader>
  `,
};

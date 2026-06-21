import "@/elements/file-uploader";
import "@/elements/button";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-file-uploader";
const { events, argTypes } = getStorybookHelpers(component);

const meta: Meta = {
  title: "form/FileUploader",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/FileUploader/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/upload-collection/",
      }),
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {},
  render: () => html`
    <furo-ui5-file-uploader placeholder="Choose a file...">
      <furo-ui5-button>Upload</furo-ui5-button>
    </furo-ui5-file-uploader>
  `,
};

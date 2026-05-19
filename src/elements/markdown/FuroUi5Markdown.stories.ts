import "@/elements/textarea";
import "@/elements/form-layout";
import "@/elements/form-row";
import "@/elements/icon";
import "@/elements/button";
import "@/elements/label";
import "@/elements/markdown";
import "@furo/layout/furo-horizontal-flex";
import "@ui5/webcomponents-icons/dist/AllIcons";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { CubeEntity } from "@/models/furoui5test/cube/CubeEntity";
import { ArgsTransormAll } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

const component = "furo-ui5-markdown";
const { events, args, argTypes } = getStorybookHelpers(component);
ArgsTransormAll(argTypes, args, []);

// set up the model
const cube = new CubeEntity({ description: '**bold**\n- a\n- b\n\n ![alt text](/assets/favicon.svg "Title")' });

const meta: Meta = {
  title: "display/Markdown",
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
        since: "0.8.0",
        originalComponent: "https://ui5.github.io/webcomponents/components/TextArea/",
        guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/text-area-web-component/",
      }),
    },
    a11y: {
      // https://storybook.js.org/docs/writing-tests/accessibility-testing
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {
        rules: {
          "color-contrast": { enabled: false }, // due to the color gradient in the input background
        },
      },
    },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    ...args,
  },
  render: renderArgs => html`
    <furo-horizontal-flex space>
      <furo-ui5-textarea flex growing .model="${cube.description}" growing-max-rows="15" rows="5"> </furo-ui5-textarea>
      <furo-ui5-markdown flex markdown="${ifDefined(renderArgs.markdown)}" .model="${cube.description}"> </furo-ui5-markdown>
    </furo-horizontal-flex>
  `,
};

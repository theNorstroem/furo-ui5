import  { type Preview, setCustomElementsManifest } from '@storybook/web-components-vite'
import customElements from "../dist/custom-elements-internal.json";
import { setStorybookHelpersConfig, type Options } from "@wc-toolkit/storybook-helpers";

const options: Options = {renderDefaultValues: true };

setStorybookHelpersConfig(options);

setCustomElementsManifest(customElements);


const preview: Preview = {
  parameters: {
    //👇 Enables auto-generated documentation for all stories
    tags: ['autodocs'],
    parameters: {

      controls: {
        expanded: true,
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
    },

  },
};

export default preview;

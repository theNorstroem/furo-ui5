import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from "remark-gfm";
import { mergeConfig } from "vite";


const config: StorybookConfig = {
  // @ts-expect-error configtype is needed
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      build: {
        target: "esnext",
      },
    });
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: true,
      },
    },
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  }
};
export default config;

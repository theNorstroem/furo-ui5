import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [{ from: "../src/stories/assets", to: "assets" }],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
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
    options: {},
  },
  features: {
    backgrounds: false,
  },
  docs: {},
};
export default config;

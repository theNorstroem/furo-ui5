import { spawn } from "node:child_process";
import path from "node:path";

import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from "remark-gfm";

/**
 * Dev-only Vite plugin: when a source file that feeds the deep CEM analysis
 * changes, re-run `npm run analyze:deep` (which regenerates the root
 * `custom-elements.json` that `preview.ts` imports) and then reload so the docs
 * pick up the fresh manifest.
 *
 * Mirrors the globs of `scripts/deep-cem.config.mjs` (`src/elements/**\/*.ts`
 * and `src/types/*.ts`, excluding spec/stories). Runs are debounced and
 * serialized because `analyze:deep` builds a full TS program and is expensive.
 */
function furoCemDeepWatch() {
  const root = process.cwd(); // `storybook dev` runs from the repo root
  let timer: ReturnType<typeof setTimeout> | undefined;
  let running = false;
  let pending = false;

  const isRelevant = (file: string): boolean => {
    const rel = path.relative(root, file).replace(/\\/g, "/");
    if (!rel.endsWith(".ts")) return false;
    if (rel.endsWith(".spec.ts") || rel.endsWith(".stories.ts")) return false;
    return /^src\/elements\/.+\.ts$/.test(rel) || /^src\/types\/[^/]+\.ts$/.test(rel);
  };

  return {
    name: "furo-cem-deep-watch",
    apply: "serve" as const,
    configureServer(server: import("vite").ViteDevServer) {
      const run = (): void => {
        if (running) {
          pending = true;
          return;
        }
        running = true;
        server.config.logger.info("[cem] analyze:deep …");
        const child = spawn("npm", ["run", "analyze:deep"], { cwd: root, stdio: "inherit" });
        child.on("close", (code) => {
          running = false;
          if (code === 0) {
            server.config.logger.info("[cem] manifest updated — reloading");
            server.ws.send({ type: "full-reload" });
          } else {
            server.config.logger.error(`[cem] analyze:deep failed (exit ${code}) — manifest unchanged`);
          }
          if (pending) {
            pending = false;
            schedule();
          }
        });
      };
      const schedule = (): void => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(run, 400);
      };
      const onChange = (file: string): void => {
        if (isRelevant(file)) schedule();
      };
      server.watcher.on("change", onChange);
      server.watcher.on("add", onChange);
      server.watcher.on("unlink", onChange);
    },
  };
}

const config: StorybookConfig = {
  stories: ["../src/stories-shared/**/*.mdx", "../src/elements/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [{ from: "../src/stories-shared/assets", to: "assets" }],
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
  async viteFinal(viteConfig) {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), furoCemDeepWatch()];
    return viteConfig;
  },
};
export default config;

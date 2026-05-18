import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:7070/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "api-base-url": "/api",
        },
      },
    },
  },
  test: {
    testTimeout: 5000,
    include: ["test/**/*.spec.ts"],
    // Lit recommends using browser environment for testing
    // https://lit.dev/docs/tools/testing/#testing-in-the-browser
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          slowMo: 100,
          args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
        },
      }),
      headless: true,
      instances: [{ browser: "chromium" }],
      viewport: {
        width: 1280,
        height: 720,
      },
      screenshotFailures: true,
    },
    reporters: ["verbose", "junit"],
    outputFile: {
      junit: "test-results/junit.xml",
    },
    coverage: {
      include: ["src/elements/**/*.{ts,tsx}"],
      enabled: false,
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
      provider: "istanbul",
      reporter: ["text", "json-summary", "lcov", "html"],
      reportOnFailure: false,
    },
    onConsoleLog(log: string, type: "stderr" | "stdout"): boolean | void {
      if (type === "stderr" && log.includes("in dev mode")) {
        return false;
      }
    },
  },
});

import "@/Assets";
import "@/elements/tree";
import "@ui5/webcomponents-icons/dist/folder.js";
import "@ui5/webcomponents-icons/dist/document.js";

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";
import { ref } from "lit/directives/ref.js";

import { RootNode } from "@/models/furoui5/RootNode";
import { ArgsTransormer, ArgTypesTransormer } from "@/stories-shared/ArgTypesTransormer";
import DocumentationTemplate from "@/stories-shared/DocumentationTemplate";

import type { FuroUi5Tree } from "./FuroUi5Tree";

const component = "furo-ui5-tree";
const componentInfo = {
  guideline: "https://www.sap.com/design-system/fiori-design-web/v1-142/ui-elements/tree/",
  originalComponent: "https://ui5.github.io/webcomponents/components/Tree/",
};

const { events, args, argTypes } = getStorybookHelpers(component);
ArgTypesTransormer(argTypes);
ArgsTransormer(args);

// set up a sample navigation tree model
const tree = new RootNode({
  id: "demo-tree",
  displayName: "Project",
  description: "A sample project structure",
  root: {
    id: "root",
    displayName: "Project",
    secondaryText: "sample structure",
    icon: "folder",
    open: true,
    children: [
      {
        id: "src",
        displayName: "src",
        icon: "folder",
        open: true,
        children: [
          { id: "app", displayName: "app.ts", icon: "document" },
          {
            id: "utils",
            displayName: "utils",
            icon: "folder",
            children: [
              { id: "math", displayName: "math.ts", icon: "document" },
              { id: "str", displayName: "string.ts", icon: "document" },
            ],
          },
        ],
      },
      {
        id: "docs",
        displayName: "docs",
        icon: "folder",
        secondaryText: "markdown",
        children: [{ id: "readme", displayName: "README.md", icon: "document" }],
      },
      { id: "pkg", displayName: "package.json", icon: "document", secondaryText: "has issues", hasError: true },
    ],
  },
});

const bindTree = (el?: Element): void => {
  if (el !== undefined) {
    (el as FuroUi5Tree).bindData(tree);
  }
};

const meta: Meta = {
  title: "display/Tree",
  component,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
    docs: {
      page: DocumentationTemplate({ ...componentInfo, component }),
    },
  },
};
export default meta;

/**
 * A recursive navigation tree bound to a `tree.Tree` model via `bindData`. Single-click a
 * row to select it, click the arrow or double-click a row to expand / collapse.
 */
export const Default: StoryObj = {
  args: {},
  render: renderArgs => html`
    <div style="height: 420px; border: 1px solid var(--sapList_BorderColor, #e5e5e5);">
      <furo-ui5-tree
        ?hide-root-node="${renderArgs.hideRootNode}"
        ?root-as-header="${renderArgs.rootAsHeader}"
        expand-depth="${renderArgs.expandDepth ?? 2}"
        ${ref(bindTree)}
      ></furo-ui5-tree>
    </div>
  `,
};

/**
 * The root node is rendered as a header section instead of a tree row (`root-as-header`).
 */
export const RootAsHeader: StoryObj = {
  args: {
    rootAsHeader: true,
  },
  render: Default.render,
};

/**
 * The root node is hidden, so its children become the top-level rows (`hide-root-node`).
 */
export const HiddenRoot: StoryObj = {
  args: {
    hideRootNode: true,
  },
  render: Default.render,
};

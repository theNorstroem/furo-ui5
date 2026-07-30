# Page Templates

## Page{Name}.ts (Thin Orchestrator)

The main page file should be minimal - it orchestrates child components but contains no complex rendering logic itself.

```typescript
import "@furo/route/dist/furo-pages";
import "@furo/ui5/tab";
import "@furo/ui5/tabcontainer";
import "@furo/layout/furo-vertical-flex";

// Import page-specific components
import "./components/header";
import "./tabs/overview";
import "./tabs/details";

import type { FuroPage, LocationObject } from "@furo/route";
import { TabController } from "@furo/route/dist/TabController";
import { css, html, LitElement } from "lit";

/**
 * ### Page{Name}
 * Brief description of the page.
 *
 * @author you
 * @tagname page-{name}
 * @public
 */
export class Page{Name} extends LitElement implements FuroPage {
private tabs = new TabController(this, {
    urlParam: "tab",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
    ],
    defaultTab: "overview",
    tabContainerSelector: "#Tabs",
  });

  onPageActivated(location: LocationObject): void {
    this.tabs.syncFromUrl(location);
    // Load data if needed
  }

  onPageUpdated(location: LocationObject): void {
    this.tabs.syncFromUrl(location);
  }

  onPageDeactivated(): void {
    // Cleanup if needed
  }

protected override async scheduleUpdate(): Promise<void> {
    await Promise.all([
      customElements.whenDefined("furo-ui5-tabcontainer"),
      customElements.whenDefined("header-{name}"),
    ]);
    await super.scheduleUpdate();
  }

  render() {
    // Notice: NO complex rendering logic here - just composition
    return html`
      <furo-vertical-flex style="height: 100%;">
        <header-{name}></header-{name}>

        <furo-ui5-tabcontainer id="Tabs" @tab-select="${this.tabs.handleTabSelect}" collapsed fixed tab-layout="Inline">
          <furo-ui5-tab id="overview" text="Overview"></furo-ui5-tab>
          <furo-ui5-tab id="details" text="Details"></furo-ui5-tab>
        </furo-ui5-tabcontainer>

        <furo-pages flex scroll page="${this.tabs.current}" default="${this.tabs.defaultTab}">
          <tab-overview id="overview"></tab-overview>
          <tab-details id="details"></tab-details>
        </furo-pages>
      </furo-vertical-flex>
    `;
  }

static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    *:not(:defined) {
      display: none;
    }

    .content-area {
      padding: var(--MediaSizeIndentation);
      background: var(--sapBackgroundColor);
    }
  `;
}
```

## components/header/Header{Name}.ts

```typescript
import "@furo/ui5/avatar";
import "@furo/ui5/button";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@furo/layout/furo-horizontal-flex";
import "@furo/layout/furo-responsive-layout";
import "@furo/ui5/tag";

import { css, html, LitElement } from "lit";

/**
 * ### Header{Name}
 * Header component for the {Name} page.
 *
 * @author you
 * @tagname header-{name}
 * @public
 */
export class Header{Name} extends LitElement {
  render() {
    return html`
      <ui5-dynamic-page-header
        header-text="Page Title"
        secondary-text="Subtitle or description"
        icon-shape="Circle"
        shadow
      >
        <furo-ui5-avatar slot="object-icon" initials="XX" color-scheme="Accent6"></furo-ui5-avatar>

        <furo-horizontal-flex slot="kpi" space="0.5rem">
          <furo-ui5-tag design="Positive" hide-state-icon>Status</furo-ui5-tag>
        </furo-horizontal-flex>

        <furo-horizontal-flex slot="action" style="justify-content: flex-end; gap: 0.5rem;">
          <furo-ui5-button design="Transparent" icon="edit">Edit</furo-ui5-button>
        </furo-horizontal-flex>

        <furo-responsive-layout layout="four">
          <!-- Facet content -->
        </furo-responsive-layout>
      </ui5-dynamic-page-header>
    `;
  }

static styles = css`
    :host {
      display: block;
    }
  `;
}
```

## components/header/index.ts

```typescript
import { Header{Name} } from "./Header{Name}";

window.customElements.define("header-{name}", Header{Name});

declare global {
  interface HTMLElementTagNameMap {
    "header-{name}": Header{Name};
}
}

export { Header{Name} };
```

## tabs/overview/TabOverview.ts

```typescript
import "@ui5/webcomponents/dist/Card.js";
import "@ui5/webcomponents/dist/CardHeader.js";
import "@furo/layout/furo-responsive-layout";
import "@furo/ui5/section";
import "@furo/ui5/subsection";

import { css, html, LitElement } from "lit";

/**
 * ### TabOverview
 * Overview tab content for the {Name} page.
 *
 * @author you
 * @tagname tab-overview
 * @public
 */
export class TabOverview extends LitElement {
  render() {
    return html`
      <furo-ui5-section>
        <furo-ui5-subsection>
          <furo-responsive-layout layout="two" style="gap: 1rem;">
            <ui5-card>
              <ui5-card-header slot="header" title-text="Card Title"></ui5-card-header>
              <!-- Card content -->
            </ui5-card>
          </furo-responsive-layout>
        </furo-ui5-subsection>
      </furo-ui5-section>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
```

## tabs/overview/index.ts

```typescript
import { TabOverview } from "./TabOverview";

window.customElements.define("tab-overview", TabOverview);

declare global {
  interface HTMLElementTagNameMap {
    "tab-overview": TabOverview;
  }
}

export { TabOverview };
```

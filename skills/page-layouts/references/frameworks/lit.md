# Lit Framework Reference

Syntax patterns for using `furo-ui5-*` web components in Lit/LitElement applications.

## Component Definition

```typescript
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";

export class MyPage extends LitElement {
  @state() private currentTab: string = "overview";

  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    *:not(:defined) {
      display: none;
    }
  `;

  render() {
    return html`
      <!-- Template here -->
    `;
  }
}

window.customElements.define("my-page", MyPage);
```

## Importing Components

```typescript
import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@furo/ui5/button";
```

## Event Binding

```html
<!-- Lit syntax: @event-name -->
<furo-ui5-list @item-click="${this.onItemClick}">...</furo-ui5-list>
<furo-ui5-tabcontainer @tab-select="${this.onTabSelect}">...</furo-ui5-tabcontainer>
<furo-ui5-button @click="${this.onSave}">Save</furo-ui5-button>
<ui5-side-navigation @selection-change="${this.onNavChange}">...</ui5-side-navigation>
```

With inline handler:
```html
<furo-ui5-list @item-click="${(e) => this.selectedItem = e.detail.item.id}">
```

## Boolean Attributes

```html
<!-- Lit syntax: ?attr="${expr}" -->
<furo-ui5-busy-indicator ?active="${this.busy}">...</furo-ui5-busy-indicator>
<furo-ui5-button ?hidden="${this.isFirstStep}">Previous</furo-ui5-button>
<furo-ui5-button ?disabled="${!this.canProceed}">Next</furo-ui5-button>
<ui5-side-navigation-item ?selected="${this.selectedNav === 'home'}">...</ui5-side-navigation-item>
```

## Property Binding

```html
<!-- Lit syntax: .prop="${expr}" for object/array properties -->
<my-component .data="${this.data}"></my-component>

<!-- String attribute interpolation (most furo-ui5-* attributes) -->
<ui5-flexible-column-layout layout="${this.layout}">...</ui5-flexible-column-layout>
<furo-pages page="${this.currentTab}">...</furo-pages>
<ui5-dynamic-page-header header-text="${this.pageTitle}">...</ui5-dynamic-page-header>
```

## Conditional Rendering

```html
<!-- Ternary expression -->
${this.selectedItem ? html`
  <div>Detail for ${this.selectedItem}</div>
` : html`
  <div>Select an item</div>
`}

<!-- Boolean guard -->
${this.showFooter ? html`
  <ui5-bar design="Footer">...</ui5-bar>
` : ''}
```

## List Rendering

Extract list rendering to a method to avoid `lit/no-template-map` rule violations:

```typescript
import { TemplateResult } from "lit";
import { repeat } from "lit/directives/repeat.js";

// Extract to method (recommended pattern)
private renderItems(): TemplateResult[] {
  return this.items.map(item => html`
    <ui5-li text="${item.name}" description="${item.desc}"></ui5-li>
  `);
}

render() {
  return html`
    <furo-ui5-list>${this.renderItems()}</furo-ui5-list>
  `;
}
```

Using `repeat` directive for keyed lists (better for reordering):

```typescript
import { repeat } from "lit/directives/repeat.js";

render() {
  return html`
    <furo-ui5-list>
      ${repeat(this.items, item => item.id, item => html`
        <ui5-li id="${item.id}" text="${item.name}"></ui5-li>
      `)}
    </furo-ui5-list>
  `;
}
```

## State Management

```typescript
import { state } from "lit/decorators.js";
import { property } from "lit/decorators.js";

export class MyPage extends LitElement {
  // Internal reactive state (triggers re-render)
  @state() private busy: boolean = false;
  @state() private selectedItem: string | null = null;

  // Public property (can be set from outside)
  @property({ type: String }) layout: string = "OneColumn";
}
```

## Refs (accessing component instances)

```typescript
import { createRef, ref, type Ref } from "lit/directives/ref.js";
import type Wizard from "@ui5/webcomponents-fiori/dist/Wizard.js";

export class MyPage extends LitElement {
  private wizardRef: Ref<Wizard> = createRef();

  private goToNext() {
    this.wizardRef.value?.next();
  }

  render() {
    return html`<ui5-wizard ${ref(this.wizardRef)}>...</ui5-wizard>`;
  }
}
```

## Styles

```typescript
static styles = css`
  :host {
    display: block;
    height: 100%;
  }

  *:not(:defined) {
    display: none;
  }

  .content {
    padding: var(--MediaSizeIndentation);
  }
`;
```

## FuroPage Lifecycle

```typescript
import { FuroPage, LocationObject } from "@furo/route";

export default class MyPage extends LitElement implements FuroPage {
  onPageActivated(location: LocationObject) {
    // Page entered - load data, read URL params
  }

  onPageUpdated(location: LocationObject) {
    // URL changed while page is active
  }

  onPageDeactivated() {
    // Page left - cleanup
  }
}
```

## Minimal Full Page Example

```typescript
import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@ui5/webcomponents/dist/Bar.js";
import "@furo/ui5/button";
import "@furo/ui5/busy-indicator";

import { FuroPage, LocationObject } from "@furo/route";
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";

export default class MyPage extends LitElement implements FuroPage {
  @state() private busy: boolean = false;

  onPageActivated(_location: LocationObject) {}
  onPageDeactivated() {}

  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    *:not(:defined) {
      display: none;
    }
  `;

  render() {
    return html`
      <furo-ui5-busy-indicator ?active="${this.busy}">
        <furo-vertical-flex style="height: 100%">
          <ui5-dynamic-page-header header-text="Page Title" collapsed>
          </ui5-dynamic-page-header>

          <div flex scroll style="padding: var(--MediaSizeIndentation);">
            <!-- Content here -->
          </div>

          <ui5-bar design="Footer">
            <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
            <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
          </ui5-bar>
        </furo-vertical-flex>
      </furo-ui5-busy-indicator>
    `;
  }
}

window.customElements.define("my-page", MyPage);
```

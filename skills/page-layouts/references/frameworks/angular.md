# Angular Framework Reference

Syntax patterns for using `furo-ui5-*` web components in Angular applications.

## Setup

Enable custom elements in your module or standalone component:

```typescript
// In NgModule
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

// Or in standalone component
@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageComponent {}
```

## Importing Components

Import side-effect modules in your component file or a shared setup file:

```typescript
import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@furo/ui5/button";
```

## Event Binding

```html
<!-- Angular syntax: (event-name) -->
<furo-ui5-list (item-click)="onItemClick($event)">...</furo-ui5-list>
<furo-ui5-tabcontainer (tab-select)="onTabSelect($event)">...</furo-ui5-tabcontainer>
<furo-ui5-button (click)="onSave()">Save</furo-ui5-button>
<ui5-side-navigation (selection-change)="onNavChange($event)">...</ui5-side-navigation>
```

Access event detail:
```typescript
onItemClick(event: CustomEvent) {
  const itemId = event.detail.item.id;
}
```

## Boolean Attributes

```html
<!-- Angular syntax: [attr.name] with conditional -->
<furo-ui5-busy-indicator [attr.active]="busy ? '' : null">...</furo-ui5-busy-indicator>
<furo-ui5-button [attr.hidden]="isFirstStep ? '' : null">Previous</furo-ui5-button>
<furo-ui5-button [attr.disabled]="!canProceed ? '' : null">Next</furo-ui5-button>
<ui5-side-navigation-item [attr.selected]="selectedNav === 'home' ? '' : null">...</ui5-side-navigation-item>
```

## Property Binding

```html
<!-- Angular syntax: [prop] for properties, attr.name for attributes -->
<ui5-flexible-column-layout [attr.layout]="layout">...</ui5-flexible-column-layout>
<furo-pages [attr.page]="currentTab">...</furo-pages>
<ui5-dynamic-page-header [attr.header-text]="pageTitle">...</ui5-dynamic-page-header>

<!-- For complex object properties, use property binding -->
<my-component [data]="data"></my-component>
```

## Conditional Rendering

```html
<!-- @if (Angular 17+) -->
@if (selectedItem) {
  <div>Detail for {{ selectedItem }}</div>
} @else {
  <div>Select an item</div>
}

<!-- *ngIf (older syntax) -->
<div *ngIf="selectedItem; else noSelection">
  Detail for {{ selectedItem }}
</div>
<ng-template #noSelection>
  <div>Select an item</div>
</ng-template>
```

## List Rendering

```html
<!-- @for (Angular 17+) -->
@for (item of items; track item.id) {
  <ui5-li [attr.text]="item.name" [attr.description]="item.desc"></ui5-li>
}

<!-- *ngFor (older syntax) -->
<ui5-li *ngFor="let item of items"
  [attr.text]="item.name"
  [attr.description]="item.desc">
</ui5-li>
```

## State Management

```typescript
@Component({ ... })
export class MyPageComponent {
  busy = false;
  selectedItem: string | null = null;
  layout = "OneColumn";
  currentTab = "overview";
}
```

## Accessing Component Instances

```typescript
import { ViewChild, ElementRef } from "@angular/core";

export class MyPageComponent {
  @ViewChild("wizard") wizardRef!: ElementRef;

  goToNext() {
    this.wizardRef.nativeElement.next();
  }
}
```

```html
<ui5-wizard #wizard>...</ui5-wizard>
```

## Styles

```typescript
@Component({
  styles: [`
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
  `],
})
```

## Minimal Full Page Example

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@ui5/webcomponents/dist/Bar.js";
import "@furo/ui5/button";
import "@furo/ui5/busy-indicator";

@Component({
  selector: "app-my-page",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [`
    :host {
      display: block;
      height: 100%;
    }

    *:not(:defined) {
      display: none;
    }
  `],
  template: `
    <furo-ui5-busy-indicator [attr.active]="busy ? '' : null">
      <furo-vertical-flex style="height: 100%">
        <ui5-dynamic-page-header header-text="Page Title" collapsed>
        </ui5-dynamic-page-header>

        <div flex scroll style="padding: var(--MediaSizeIndentation);">
          <!-- Content here -->
        </div>

        <ui5-bar design="Footer">
          <furo-ui5-button slot="endContent" (click)="onCancel()">Cancel</furo-ui5-button>
          <furo-ui5-button slot="endContent" design="Emphasized" (click)="onSave()">Save</furo-ui5-button>
        </ui5-bar>
      </furo-vertical-flex>
    </furo-ui5-busy-indicator>
  `,
})
export class MyPageComponent {
  busy = false;

  onCancel() { /* handle cancel */ }
  onSave() { /* handle save */ }
}
```

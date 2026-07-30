# Key Patterns

## Ref Pattern for Component References

Use Lit's own `ref` directive — there is no Furo-specific ref utility.

```typescript
import { createRef, ref, type Ref } from "lit/directives/ref.js";
import type { FuroUi5Toast } from "@furo/ui5/toast";

private toastRef: Ref<FuroUi5Toast> = createRef();

render() {
  return html`<furo-ui5-toast ${ref(this.toastRef)}></furo-ui5-toast>`;
}

// Available once the element has rendered (note: `.value`, not `.current`)
this.toastRef.value?.showMessage("Hello");

// Or wait for the custom element to be registered first
await customElements.whenDefined("furo-ui5-toast");
this.toastRef.value?.showMessage("Hello");
```

## Model Binding with @furo/open-models

```typescript
set entity(value: MyEntity) {
  if (this._entity === value) return;
  this._entity?.__removeEventListener("update", this.handleUpdate);
  this._entity = value;
  this._entity.__addEventListener("update", this.handleUpdate);
}

handleUpdate = () => { this.requestUpdate(); }
```

## scheduleUpdate for Component Dependencies

```typescript
protected override async scheduleUpdate(): Promise<void> {
  await Promise.all([
    customElements.whenDefined("furo-ui5-tabcontainer"),
    customElements.whenDefined("ui5-dynamic-page-header"),
  ]);
  await super.scheduleUpdate();
}
```

## FuroPage Lifecycle

Pages using `@furo/route` implement the `FuroPage` interface:

```typescript
import { FuroPage, LocationObject } from "@furo/route";
import { LitElement } from "lit";

export class MyPage extends LitElement implements FuroPage {
  /**
   * Called when page becomes active (navigated to).
   * Use for: loading data, initializing state, syncing from URL.
   */
  onPageActivated(location: LocationObject) {
    const id = location.query.id as string;
    this.loadData(id);
  }

  /**
   * Called when URL changes while page is still active.
   * Use for: reacting to query param changes, tab switches.
   */
  onPageUpdated(location: LocationObject) {
    // Re-sync state from URL
  }

  /**
   * Called when navigating away from page.
   * Use for: cleanup, abort pending requests, save draft state.
   */
  onPageDeactivated() {
    this.abortPendingRequests();
  }

  /**
   * Optional. Called when query params change while page is active.
   * More specific than onPageUpdated — only fires for query changes.
   * Use for: reloading entity data when ID changes in query param.
   */
  onPageQueryChanged?(location: LocationObject) {
    const newId = location.query.entity_id as string;
    if (newId && newId !== currentService.entityId) {
      currentService.load(newId);
    }
    if (!newId) {
      this.display = "404";
    }
  }

  /**
   * Optional. Called when hash params change while page is active.
   * Use for: reacting to anchor/section navigation within the page.
   */
  onPageHashChanged?(location: LocationObject) {
    const section = location.hash.section as string;
    if (section) {
      this.scrollToSection(section);
    }
  }
}
```

**LocationObject properties:**
- `path` - Full URL path string
- `pathSegments` - Path split into array
- `query` - Query parameters as object (`?id=123` → `{ id: "123" }`)
- `queryString` - Raw query string
- `hash` - Hash parameters as object
- `hashString` - Raw hash string
- `host` - Current host

## i18n Pattern

```typescript
import { msg } from "@/config/i18n/localize";
import { MY_KEY } from "@/config/i18n/i18n-defaults";

private MY_LABEL = msg(MY_KEY);

render() {
  return html`<span>${this.MY_LABEL}</span>`;
}
```

## Resizable Panels with furo-resizer

```typescript
import "@furo/layout/furo-resizer";

render() {
  return html`
    <furo-horizontal-flex>
      <furo-resizer righthandle remember="panel-id" minwidth="200" maxwidth="500" style="width: 300px;">
        <!-- Left panel content -->
      </furo-resizer>
      <div flex><!-- Right panel content --></div>
    </furo-horizontal-flex>
  `;
}
```

## Import Pattern

Always import components from their dist path:
```typescript
import "@furo/ui5/button";
import "@furo/ui5/text-input";
import "@furo/ui5/form-layout";
```

For type definitions, import from main package:
```typescript
import { TabContainerTabSelectEventDetail, SideNavigationSelectionChangeEventDetail } from "@furo/ui5";
```

For both component and types in same file:
```typescript
import "@furo/ui5/tabcontainer";
import FuroUi5Tabcontainer from "@furo/ui5/tabcontainer";
```

# React Framework Reference

Syntax patterns for using `furo-ui5-*` web components in React applications.

## Setup

React (19+) has improved support for custom elements. For React 18 and below, you may need ref-based event listeners or a wrapper library.

## Importing Components

Import side-effect modules at the top of your component file:

```tsx
import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@furo/ui5/button";
```

## Event Binding

### React 19+ (native custom element events)

```tsx
<furo-ui5-list onitem-click={handleItemClick}>...</furo-ui5-list>
<furo-ui5-tabcontainer ontab-select={handleTabSelect}>...</furo-ui5-tabcontainer>
<furo-ui5-button onClick={handleSave}>Save</furo-ui5-button>
<ui5-side-navigation onselection-change={handleNavChange}>...</ui5-side-navigation>
```

### React 18 and below (ref + addEventListener)

```tsx
import { useRef, useEffect } from "react";

function MyPage() {
  const listRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setSelectedItem(detail.item.id);
    };
    el.addEventListener("item-click", handler);
    return () => el.removeEventListener("item-click", handler);
  }, []);

  return <furo-ui5-list ref={listRef}>...</furo-ui5-list>;
}
```

## Boolean Attributes

React passes boolean attributes as properties. For web components, set the attribute explicitly:

```tsx
// React 19+ handles this better, but for safety:
<furo-ui5-busy-indicator active={busy || undefined}>...</furo-ui5-busy-indicator>
<furo-ui5-button hidden={isFirstStep || undefined}>Previous</furo-ui5-button>
<furo-ui5-button disabled={!canProceed || undefined}>Next</furo-ui5-button>
<ui5-side-navigation-item selected={selectedNav === "home" || undefined}>
  ...
</ui5-side-navigation-item>
```

## Property/Attribute Binding

```tsx
// String attributes work directly
<ui5-flexible-column-layout layout={layout}>...</ui5-flexible-column-layout>
<furo-pages page={currentTab}>...</furo-pages>
<ui5-dynamic-page-header header-text={pageTitle}>...</ui5-dynamic-page-header>

// For object properties, use ref
const compRef = useRef<HTMLElement>(null);
useEffect(() => {
  if (compRef.current) {
    (compRef.current as any).data = complexData;
  }
}, [complexData]);
```

## Conditional Rendering

```tsx
{selectedItem ? (
  <div>Detail for {selectedItem}</div>
) : (
  <div>Select an item</div>
)}

{showFooter && (
  <ui5-bar design="Footer">...</ui5-bar>
)}
```

## List Rendering

```tsx
{items.map(item => (
  <ui5-li key={item.id} text={item.name} description={item.desc}></ui5-li>
))}
```

## State Management

```tsx
import { useState } from "react";

function MyPage() {
  const [busy, setBusy] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [layout, setLayout] = useState("OneColumn");
}
```

## Accessing Component Instances

```tsx
import { useRef } from "react";

function MyPage() {
  const wizardRef = useRef<HTMLElement>(null);

  const goToNext = () => {
    (wizardRef.current as any)?.next();
  };

  return <ui5-wizard ref={wizardRef}>...</ui5-wizard>;
}
```

## Styles

```tsx
// CSS modules or inline styles
import styles from "./MyPage.module.css";

// Or styled-components, etc.

// Ensure the host element fills height via the wrapper:
<div style={{ display: "block", height: "100%" }}>
  {/* page content */}
</div>
```

Global CSS to hide undefined components:
```css
/* In your global stylesheet */
*:not(:defined) {
  display: none;
}
```

## TypeScript Declarations

To avoid TypeScript errors with custom element tags in JSX:

```typescript
// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "furo-vertical-flex": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, any>;
    "ui5-dynamic-page-header": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, any>;
    // Add other components as needed
  }
}
```

Or use the generated intrinsic element types from `@furo/ui5` if available.

## Minimal Full Page Example

```tsx
import { useState } from "react";

import "@furo/layout/furo-vertical-flex";
import "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";
import "@ui5/webcomponents/dist/Bar.js";
import "@furo/ui5/button";
import "@furo/ui5/busy-indicator";

function MyPage() {
  const [busy, setBusy] = useState(false);

  return (
    <div style={{ display: "block", height: "100%" }}>
      <furo-ui5-busy-indicator active={busy || undefined}>
        <furo-vertical-flex style={{ height: "100%" }}>
          <ui5-dynamic-page-header header-text="Page Title" collapsed>
          </ui5-dynamic-page-header>

          <div flex scroll style={{ padding: "var(--MediaSizeIndentation)" }}>
            {/* Content here */}
          </div>

          <ui5-bar design="Footer">
            <furo-ui5-button slot="endContent" onClick={() => { /* cancel */ }}>
              Cancel
            </furo-ui5-button>
            <furo-ui5-button slot="endContent" design="Emphasized" onClick={() => { /* save */ }}>
              Save
            </furo-ui5-button>
          </ui5-bar>
        </furo-vertical-flex>
      </furo-ui5-busy-indicator>
    </div>
  );
}

export default MyPage;
```

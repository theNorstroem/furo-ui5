# Build & Performance Issues

## TypeScript Errors
**Problem**: Type errors with component event details.

**Solution**: Furo elements inherit their events from the UI5 element they wrap, so most event
detail types come from `@ui5/webcomponents` (or `-fiori`) rather than from `@furo/ui5`:

```typescript
import type { TabContainerTabSelectEventDetail } from "@ui5/webcomponents/dist/TabContainer.js";
import type { SideNavigationSelectionChangeEventDetail } from "@ui5/webcomponents-fiori/dist/SideNavigation.js";
```

`@furo/ui5` re-exports only a handful of the most-used ones (see `src/index.ts`). A component's
own class and any types it adds come from its subpath:

```typescript
import type { FuroUi5TextInput } from "@furo/ui5/text-input";
```

Always use `import type` for types. A plain `import { type X }` leaves the import statement in
the emitted JS, which loads the module at runtime for nothing.

## Slow Rendering with Large Lists
**Problem**: UI freezes with many items.

**Solutions**:

1. **Use virtualization** (if available): Suggest @lit-labs/virtualizer.

2. **Paginate data**: Only render a subset of items at a time (e.g., 50 per page) and provide next/previous navigation.

3. **Debounce search/filter**: When filtering based on user input, delay the filter operation by ~300ms so it doesn't run on every keystroke.

## Memory Leaks
**Problem**: Event listeners not cleaned up.

**Solution**: Remove any manually added event listeners when the component is disconnected. For example, if you add a `resize` listener on `window` during `connectedCallback`, remove it in `disconnectedCallback`. Use arrow functions or bound methods to preserve the correct `this` context.

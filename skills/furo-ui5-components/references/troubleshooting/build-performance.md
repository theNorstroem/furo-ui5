# Build & Performance Issues

## TypeScript Errors
**Problem**: Type errors with component event details.

**Solution**: Import types from main package.
```typescript
import {
  TabContainerTabSelectEventDetail,
  SideNavigationSelectionChangeEventDetail
} from "@furo/ui5";
```

## Slow Rendering with Large Lists
**Problem**: UI freezes with many items.

**Solutions**:

1. **Use virtualization** (if available): Suggest @lit-labs/virtualizer.

2. **Paginate data**: Only render a subset of items at a time (e.g., 50 per page) and provide next/previous navigation.

3. **Debounce search/filter**: When filtering based on user input, delay the filter operation by ~300ms so it doesn't run on every keystroke.

## Memory Leaks
**Problem**: Event listeners not cleaned up.

**Solution**: Remove any manually added event listeners when the component is disconnected. For example, if you add a `resize` listener on `window` during `connectedCallback`, remove it in `disconnectedCallback`. Use arrow functions or bound methods to preserve the correct `this` context.

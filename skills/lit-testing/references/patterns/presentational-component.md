# Pattern A: Presentational Component

For components that receive props/attributes and render UI. No external data dependencies.

## Examples
- `object-not-found` — displays a 404 message with configurable object name
- Any component whose rendering depends only on its properties

## Template

```typescript
import { describe, expect, it } from 'vitest';

import '@furo/ui5/Assets';
import '@components/my-component';
import type { MyComponent } from '@components/my-component';
import { renderComponent, updateAndWait } from '@/test-helpers/lit-helpers';

describe('my-component', () => {
  it('should render with defaults', async () => {
    const { el, locator } = await renderComponent<MyComponent>(
      'my-component',
      '<my-component></my-component>',
    );

    // Query shadow DOM for expected elements
    const inner = el.shadowRoot?.querySelector('some-inner-element');
    expect(inner).not.toBeNull();

    // Visual regression screenshot
    await locator.screenshot({ path: 'test-results/my-component-default.png' });
  });

  it('should reflect property changes', async () => {
    const { el } = await renderComponent<MyComponent>(
      'my-component',
      '<my-component></my-component>',
    );

    el.myProp = 'new value';
    await updateAndWait(el);

    const inner = el.shadowRoot?.querySelector('some-inner-element');
    expect(inner!.getAttribute('some-attr')).toBe('new value');
  });
});
```

## What to test
- Default rendering (no props set)
- Each property/attribute that affects rendering
- Attribute reflection (if `reflect: true`)
- Visual regression via `locator.screenshot()`

## What NOT to test
- Internal Lit lifecycle details
- CSS specifics (use visual screenshots instead)
- Third-party component internals

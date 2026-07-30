# Pattern C: Page Component

For `FuroPage`-based components that orchestrate sub-components and manage display states.

## Examples
- `page-cube-object` — switches between cube view and 404 display
- Any component extending `FuroPage` with `FuroPages` display state switching

## Template

```typescript
import { describe, expect, it } from 'vitest';

import '@furo/ui5/Assets';
import '@components/pages/my-page';
import type { MyPage } from '@components/pages/my-page';
import { renderComponent } from '@/test-helpers/lit-helpers';

describe('my-page', () => {
  it('should render the page shell', async () => {
    const { el } = await renderComponent<MyPage>(
      'my-page',
      '<my-page></my-page>',
    );

    // Verify page structure exists
    const pages = el.shadowRoot?.querySelector('furo-pages');
    expect(pages).not.toBeNull();
  });

  it('should have expected display states', async () => {
    const { el } = await renderComponent<MyPage>(
      'my-page',
      '<my-page></my-page>',
    );

    // Verify child views are declared
    const mainView = el.shadowRoot?.querySelector('[name="main"]');
    const notFound = el.shadowRoot?.querySelector('[name="404"]');
    expect(mainView).not.toBeNull();
    expect(notFound).not.toBeNull();
  });
});
```

## What to test
- Page shell renders (tab container, furo-pages, header)
- Expected display states are declared
- Basic page structure

## What NOT to test here
- Sub-component behavior (test with Pattern A or B independently)
- Navigation/routing logic (belongs in integration tests)
- Full user flows (belongs in Playwright integration tests)

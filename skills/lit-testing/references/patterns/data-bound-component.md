# Pattern B: Data-Bound Component

For components that consume a shared/singleton model (e.g., via `@furo/open-models` decorators).

## Examples
- `tab-cube-editor` — renders based on a shared Cube model
- Any component using `@consume` or model singletons

## Template

```typescript
import { beforeEach, describe, expect, it } from 'vitest';

import '@furo/ui5/Assets';
import '@components/my-data-component';
import type { MyDataComponent } from '@components/my-data-component';
import { MyModel } from '@/path/to/model';
import { renderComponent, updateAndWait } from '@/test-helpers/lit-helpers';

describe('my-data-component', () => {
  beforeEach(() => {
    // Reset singleton model to a known state before each test
    MyModel.model.fromLiteral({
      name: 'Test Item',
      status: 'active',
    });
  });

  it('should render model data', async () => {
    const { el } = await renderComponent<MyDataComponent>(
      'my-data-component',
      '<my-data-component></my-data-component>',
    );

    const title = el.shadowRoot?.querySelector('[data-testid="title"]');
    expect(title?.textContent).toContain('Test Item');
  });

  it('should update when model changes', async () => {
    const { el } = await renderComponent<MyDataComponent>(
      'my-data-component',
      '<my-data-component></my-data-component>',
    );

    MyModel.model.name.value = 'Updated Item';
    await updateAndWait(el);

    const title = el.shadowRoot?.querySelector('[data-testid="title"]');
    expect(title?.textContent).toContain('Updated Item');
  });
});
```

## Key rules
- Always reset model state in `beforeEach` to avoid test pollution
- Do NOT mock HTTP calls — set model state directly with `fromLiteral()`
- Test that rendering reflects model state
- Test that model changes trigger re-renders

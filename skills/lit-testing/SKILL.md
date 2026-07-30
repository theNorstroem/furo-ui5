---
name: lit-testing
description: Write unit tests for Lit web components. Use when creating or modifying component tests.
---

# Testing Skill

## Setup
- Config: `vitest.config.ts` (dedicated, separate from dev server config)
- Tests are **colocated** with source: `ComponentName.spec.ts` next to `ComponentName.ts`
- Run: `npm run test:unit` (once) or `npm run test:unit:watch` (UI mode)

## Rules
1. One spec file per component, colocated next to the source file
2. Always use `renderComponent()` from `@/test-helpers/lit-helpers`
3. Import the component's `index.ts` to register the custom element
4. Import `@furo/ui5/Assets` for design system assets
5. Use `el.shadowRoot?.querySelector()` for shadow DOM queries
6. Use `locator` (from `renderComponent`) for screenshots and accessible queries
7. Reset shared model state in `beforeEach` when testing data-bound components
8. No HTTP mocking in component tests — test rendering states only
9. Use `updateAndWait(el)` after programmatic property changes

## Test Helper API

```typescript
import { renderComponent, updateAndWait } from '@/test-helpers/lit-helpers';

// Render and get element + locator
const { el, locator } = await renderComponent<MyComponent>(
  'my-component',
  '<my-component prop="value"></my-component>',
  { viewport: { width: 400, height: 400 } } // optional
);

// After changing properties
el.someProp = 'new value';
await updateAndWait(el);
```

## Patterns

Choose the pattern that matches your component type:

- **[Presentational Component](references/patterns/presentational-component.md)** — Props, rendering, visual regression (e.g., `object-not-found`)
- **[Data-Bound Component](references/patterns/data-bound-component.md)** — Singleton model with decorators (e.g., `tab-cube-editor`)
- **[Page Component](references/patterns/page-component.md)** — FuroPage display states (e.g., `page-cube-object`)

## Example

See `src/components/object-not-found/ObjectNotFound.spec.ts` for a complete presentational component test.

## Integration Tests (separate runner)

Integration tests live in `test/integration-tests/*.spec.ts` and use **Playwright Test** (`@playwright/test`), not Vitest. They are a completely different test runner with different APIs.

- Run: `npm run test:integration` or `npm run test:integration:ui`
- They test complete pages, use Playwright-specific fixtures (`page`, `AxeBuilder`), and require a running application
- Do NOT write integration tests using Vitest — use `@playwright/test` for those
- `npm run test` runs both unit and integration tests sequentially
- Every page test **must** include an accessibility check using `AxeBuilder` from `@axe-core/playwright`

### Page Test Template

Every integration test for a page must include an a11y scan:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Page Name', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/page-path');
    await page.waitForTimeout(2000);
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

# Lint Errors

## Reserved Property Names
**Problem**: Using property names that conflict with native HTML attributes.
```typescript
// ERROR: 'role' conflicts with native HTML attribute
@property() role: string = "";
@property() title: string = "";
```

**Solution**: Use prefixed or alternative names.
```typescript
@property({ attribute: "job-role" }) jobRole: string = "";
@property({ attribute: "item-title" }) itemTitle: string = "";
```

## Array.map() in Templates
**Problem**: Using `.map()` directly in Lit templates triggers lint errors.
```typescript
render() {
  return html`
    <furo-ui5-list>
      ${this.items.map(item => html`<ui5-li>${item.name}</ui5-li>`)}  // ERROR
    </furo-ui5-list>
  `;
}
```

**Solution**: Extract to a separate render method.
```typescript
private renderItems(): TemplateResult[] {
  return this.items.map(item => html`<ui5-li>${item.name}</ui5-li>`);
}

render() {
  return html`
    <furo-ui5-list>
      ${this.renderItems()}
    </furo-ui5-list>
  `;
}
```

## Import Order Errors
**Problem**: ESLint complains about import order.

**Solution**: Run the linter with auto-fix.
```bash
npx eslint --fix src/path/to/file.ts
```

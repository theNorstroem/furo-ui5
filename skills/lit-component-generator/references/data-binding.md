# Data Binding Issues

## Model Updates Not Reflected
**Problem**: Changes to entity model don't trigger re-render.

**Solution**: Subscribe to model update events.
```typescript
private _entity: MyEntity | null = null;

set entity(value: MyEntity | null) {
  if (this._entity === value) return;

  // Unsubscribe from old entity
  this._entity?.__removeEventListener("update", this.handleUpdate);

  this._entity = value;

  // Subscribe to new entity
  this._entity?.__addEventListener("update", this.handleUpdate);
  this.requestUpdate();
}

get entity(): MyEntity | null {
  return this._entity;
}

private handleUpdate = () => {
  this.requestUpdate();
};

disconnectedCallback() {
  super.disconnectedCallback();
  this._entity?.__removeEventListener("update", this.handleUpdate);
}
```

## Form Field Not Updating Model
**Problem**: Input changes don't update the model.

**Solution**: Use proper event binding with field path.
```typescript
// For @furo/open-models fields
<furo-ui5-text-input
  label="Name"
  .value="${this.entity?.name._value ?? ''}"
  @change="${(e: Event) => {
    if (this.entity) {
      this.entity.name._value = (e.target as HTMLInputElement).value;
    }
  }}">
</furo-ui5-text-input>
```

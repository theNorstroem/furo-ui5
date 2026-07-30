---
name: open-models
description: Bind Lit components to @furo/open-models. Use for DataStores, service events, model field binding.
---

# Open Models

Decorators and patterns for binding Lit components to `@furo/open-models` services and FieldNode models.

## When to Use

Use this skill when:
- Creating a new DataStore (see `references/creating-a-datastore.md`)
- Binding component properties to service events (busy state, errors, responses)
- Binding component properties to model field values
- Reacting to model or service events with methods
- Handling initial render with singleton models

## Service Bindings

Service bindings connect your component to events from an entity service (API loading states, errors, responses).

### Setup

Before using service bindings in components, you need a **DataStore** with a `Decorators.ts` file that exports pre-configured bindings. This setup:
- Provides type-safe event names (autocomplete, compile-time checks)
- Centralizes the service/model references
- Enables the `@cubeService` and `@cubeModel` decorator syntax

See `references/creating-a-datastore.md` for the full DataStore setup guide.

### bindToEvent - Bind property to service event

Automatically updates a `@state()` property when a service event fires.

```typescript
import { cubeService } from "./DataStores/Decorators";

class MyComponent extends LitElement {
  @cubeService.bindToEvent("busy-changed")
  @state()
  private busy: boolean = false;

  render() {
    return html`
      <furo-ui5-busy-indicator ?busy="${this.busy}">
        <!-- content -->
      </furo-ui5-busy-indicator>
    `;
  }
}
```

**How it works:**
- Listens to the specified event on the service
- Extracts value from `event.detail` (key inferred from event name: `"busy-changed"` → `detail.busy`)
- Updates the property, triggering a Lit re-render

### onEvent - Bind method to service event

Calls a method when a service event fires, with `event.detail` as argument.

```typescript
class MyComponent extends LitElement {
  @cubeService.onEvent("data-loaded")
  private onDataLoaded() {
    this.showSuccessToast();
  }

  @cubeService.onEvent("error-5xx")
  private onServerError(detail: { serverResponse: Response }) {
    this.showErrorDialog();
  }

  @cubeService.onEvent("request-aborted")
  private onAborted(detail: { reason: string }) {
    console.log("Request aborted:", detail.reason);
  }
}
```

## Model Bindings

Model bindings connect your component to a FieldNode model's data and events.

### bind - Bind property to model field

Syncs a `@state()` property with a model field value. Handles initial value and updates.

```typescript
class MyComponent extends LitElement {
  // Bind to nested field
  @cubeModel.bind("cube.length")
  @state()
  private cubeLength: number = 0;

  // Bind to model validity
  @cubeModel.bind("__isValid", "validity-changed")
  @state()
  private isValid: boolean = true;

  // Bind to display name
  @cubeModel.bind("displayName", "this-field-value-changed")
  @state()
  private displayName: string = "";

  render() {
    return html`
      <span>Length: ${this.cubeLength}</span>
      <span>Name: ${this.displayName}</span>
      <button ?disabled="${!this.isValid}">Save</button>
    `;
  }
}
```

**Parameters:**
- `path` - Path to field (e.g., `"cube.length"`, `"__isValid"`, `"displayName"`)
- `eventType` - Event to listen for (defaults to `"this-field-value-changed"`)

### onEvent - Bind method to root model event

```typescript
class MyComponent extends LitElement {
  @cubeModel.onEvent("field-value-changed")
  private onAnyFieldChanged() {
    console.log("Something changed!");
  }

  @cubeModel.onEvent("validity-changed")
  private onValidityChanged() {
    console.log("Model validity changed!");
  }
}
```

### onFieldEvent - Bind method to specific field event

```typescript
class MyComponent extends LitElement {
  @cubeModel.onFieldEvent("cube.length", "this-field-value-changed")
  private onLengthChanged() {
    this.recalculateVolume();
  }

  @cubeModel.onFieldEvent("cube.material", "this-field-value-changed")
  private onMaterialChanged() {
    this.updatePreview();
  }
}
```

## Initial Render with Singleton Models

**Problem:** When using singleton models (like `CubeEntityModel.model`), the model exists before your component. Direct property access won't trigger initial render:

```typescript
// WRONG: Won't show initial value
private cubeEntity = CubeEntityModel.model;
render() {
  return html`<span>${this.cubeEntity.displayName}</span>`; // Empty on first render!
}
```

### Solution 1: Use `@cubeModel.bind()` (Recommended)

```typescript
@cubeModel.bind("displayName", "this-field-value-changed")
@state()
private displayName: string = "";

render() {
  return html`<span>${this.displayName}</span>`; // Works!
}
```

### Solution 2: Use `@cubeService.onEvent()` with requestUpdate()

```typescript
private cubeEntity = CubeEntityModel.model;

@cubeService.onEvent("data-loaded")
private onDataLoaded() {
  this.requestUpdate(); // Force re-render
}

render() {
  return html`<span>${this.cubeEntity.displayName}</span>`;
}
```

### Which to Choose?

| Scenario | Solution |
|----------|----------|
| Single field binding | `@cubeModel.bind()` |
| Multiple fields, each reactive | `@cubeModel.bind()` for each |
| Multiple fields, simpler setup | `@cubeService.onEvent("data-loaded")` + `requestUpdate()` |
| Need side effects on load | `@cubeService.onEvent("data-loaded")` |
| Components expecting FieldNode via `.model` | Direct reference (see below) |

## Direct FieldNode References for Component Bindings

Many Furo UI5 webcomponents (like `<furo-ui5-form-row>`, `<furo-ui5-form-row>`, `<form-enum>`) expect a **FieldNode** object via their `.model` property, not a scalar value. These components handle their own reactivity internally.

### The Pattern

Instead of using `@cubeModel.bind()` for each field, directly reference a parent FieldNode:

```typescript
import { CubeEntityModel } from "@/pages/page-cube-object/data";

class CubeEditorTab extends LitElement {
  // Reference to FieldNode, not scalar value
  cube = CubeEntityModel.model.cube;

  render() {
    return html`
      <!-- Components expect FieldNode objects -->
      <form-enum .model="${this.cube.material}"></form-enum>
      <furo-ui5-form-row .model="${this.cube.length}"></furo-ui5-form-row>
      <furo-ui5-form-row .model="${this.cube.breadth}"></furo-ui5-form-row>
      <furo-ui5-form-row .model="${this.cube.height}"></furo-ui5-form-row>
    `;
  }
}
```

### Why This Works

- **FieldNode objects are reactive**: Fields like `cube.length` are FieldNode instances that emit events
- **Components manage subscriptions**: Furo UI5 form components bind to FieldNode events internally
- **No decorator overhead**: Components handle reactivity, no `@cubeModel.bind()` needed
- **Simpler code**: One property (`cube = CubeEntityModel.model.cube`) gives access to all fields

### When to Use Direct References vs Decorators

| Scenario | Approach |
|----------|----------|
| Components with `.model` expecting FieldNode | Direct: `this.cube.length` |
| Display scalar values (`<span>${value}</span>`) | `@cubeModel.bind()` |
| Trigger side effects on changes | `@cubeModel.onFieldEvent()` |
| Reactive `@state()` for conditional rendering | `@cubeModel.bind()` |

### Combining Approaches

```typescript
class CubeEditorTab extends LitElement {
  // Direct reference for FieldNode-aware components
  cube = CubeEntityModel.model.cube;

  // Decorator for non-FieldNode-aware component (color picker)
  @state()
  private color: string = "rgba(254,162,72,1)";

  @cubeModel.onFieldEvent("cube.colour", "update")
  private _onColourUpdate() {
    this.color = this.cube.colour.toString();
  }

  render() {
    return html`
      <!-- FieldNode-aware: direct reference -->
      <furo-ui5-form-row .model="${this.cube.length}"></furo-ui5-form-row>

      <!-- Non-FieldNode-aware: @state property -->
      <furo-ui5-color-picker color="${this.color}"></furo-ui5-color-picker>
    `;
  }
}
```

## Service Events Reference

### Request Lifecycle

| Event | Detail | Description |
|-------|--------|-------------|
| `busy-changed` | `{ busy: boolean }` | Loading state changed |
| `request-started` | `{ request: unknown }` | Request initiated |
| `request-finished` | `{ request: unknown }` | Request completed |
| `request-aborted` | `{ reason: string }` | Request aborted |

### Success Events

| Event | Detail | Description |
|-------|--------|-------------|
| `response-received` | `{ response, serverResponse }` | Successful response |
| `raw-response` | `{ serverResponse }` | Raw response before parsing |

### Error Events

| Event | Detail | Description |
|-------|--------|-------------|
| `response-error` | `{ parsedResponse, serverResponse }` | Error with parsed body |
| `error-404` | `{ serverResponse }` | Not found |
| `error-5xx` | `{ serverResponse }` | Server error |
| `fatal-error` | `{ error }` | Unhandled error |

## Model Events Reference

| Event | Description |
|-------|-------------|
| `this-field-value-changed` | This specific field changed |
| `field-value-changed` | Any field in model changed |
| `validity-changed` | Model validity changed |
| `update` | Model was updated |
| `this-state-changed` | State changed on this field |
| `array-changed` | Array field modified |
| `map-changed` | Map field modified |
| `model-injected` | Model data injected |

## Reusable Bindable Components (fieldBindings)

For creating reusable components in `src/components/` that accept FieldNode models via `.model` property and support multiple model types. See [fieldBindings Reference](references/field-bindings.md) for the full pattern, decorators, and type support guide.

## Full Documentation

See `src/x/furo/open-models/readme.md` for complete documentation.

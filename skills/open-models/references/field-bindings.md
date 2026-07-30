# Reusable Bindable Components (fieldBindings)

For creating **reusable components** in `src/components/` that accept FieldNode models via `.model` property and support multiple model types (e.g., `primitives.STRING`, `furo.fat.String`).

## When to Use

Use `fieldBindings` when:
- Creating a reusable component that accepts a `.model` property
- The component needs to support multiple FieldNode types
- You want explicit control over how each type is read/written

## The Pattern

```typescript
import type { STRING } from "@furo/open-models/dist";
import type { BindableComponent } from "@furo/open-models/dist/decorators/FieldBindings";
import { fieldBindings } from "@furo/open-models/dist/decorators/FieldBindings";
import type { XString } from "@[something]/[package]/path/to/furo/fat/String";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

type StringModel = STRING | XString;

export class MyInput extends LitElement implements BindableComponent {
  @fieldBindings.model()
  model: StringModel | undefined;

  // Provided by decorator
  declare writeToModel: () => void;

  // Read from model → component (key = __meta.typeName)
  modelReaders = new Map<string, () => void>([
    ["primitives.STRING", () => {
      this.value = (this.model as STRING).value ?? "";
    }],
    ["furo.fat.String", () => {
      this.value = (this.model as XString).value.value ?? "";
    }],
  ]);

  // Write from component → model (key = __meta.typeName)
  modelWriters = new Map<string, () => void>([
    ["primitives.STRING", () => {
      (this.model as STRING).value = this.value;
    }],
    ["furo.fat.String", () => {
      (this.model as XString).value.value = this.value;
    }],
  ]);

  @state()
  value: string = "";

  // Optional: react to model state changes
  @fieldBindings.onEvent("this-state-changed")
  private _onStateChanged() {
    // handle readonly, validity, etc.
  }

  private _onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.writeToModel(); // Uses pre-resolved writer
  }
}
```

## How It Works

1. **Model set** → `@fieldBindings.model()` looks up `modelReaders.get(typeName)` and `modelWriters.get(typeName)`, binds them to `this`
2. **Model value changes** → Decorator calls the resolved reader automatically
3. **User input** → Component calls `this.writeToModel()` which executes the pre-resolved writer
4. **Model changes** → Old model is unbound, new model is bound, reader is called

## Available Decorators

| Decorator | Purpose |
|-----------|---------|
| `@fieldBindings.model()` | Handles bind/unbind, resolves reader/writer, provides `writeToModel()` |
| `@fieldBindings.onEvent(eventType)` | Calls method when model emits specified event |

## Adding New Type Support

To support a new type, add entries to both maps:

```typescript
modelReaders = new Map([
  ["primitives.STRING", () => { ... }],
  ["furo.fat.String", () => { ... }],
  ["google.protobuf.StringValue", () => { ... }], // New!
]);

modelWriters = new Map([
  ["primitives.STRING", () => { ... }],
  ["furo.fat.String", () => { ... }],
  ["google.protobuf.StringValue", () => { ... }], // New!
]);
```

## modelBindings vs fieldBindings

| Aspect | `modelBindings` | `fieldBindings` |
|--------|-----------------|-----------------|
| **Use case** | Page-specific components | Reusable components |
| **Model known at** | Class definition time (singleton) | Runtime (via `.model` property) |
| **Location** | `src/pages/page-xxx/` | `src/components/` |
| **Type handling** | Single type per binding | Multiple types via maps |
| **Import** | `./data/Decorators.ts` | `@furo/open-models/dist/decorators/FieldBindings` |

---
name: test-element
description: Write or extend a vitest browser spec for a furo-ui5 binding element (any element under `src/elements/` that extends a UI5 component and exposes `bindData(fieldNode)`). Use when the user asks to "add tests / write a spec / test the bindData / test the model binding / test value-state / test FAT attributes" for a furo-ui5 element, or asks to apply the test template to a new element.
---

# Writing tests for a furo-ui5 binding element

Every furo-ui5 element follows the same shape — it extends a UI5 component and adds `bindData(fieldNode)` on top of `@furo/open-models`. The canonical, hand-written reference spec is `src/elements/text-input/FuroUi5TextInput.spec.ts`. **Read it before writing a new spec.** Most of its describe blocks are tagged `[TEMPLATE]` and are designed to be copied verbatim into another element's spec with only the tag name, model type(s), and FAT-attribute list changed.

## When to use this skill

- "Write a spec for `furo-ui5-<x>`."
- "Add tests for `FuroUi5<X>`."
- "Apply the test template to `<element>`."
- "Test the bindData / value-state / readonly / FAT attributes on `<element>`."

## Procedure

1. **Read the reference spec** — `src/elements/text-input/FuroUi5TextInput.spec.ts`. The describe blocks tagged `[TEMPLATE]` are the portable pattern; the `[element-specific]` blocks (`search-requested` debounce, `clear()`, `closePopover()`) are not.

2. **Inspect the target element** at `src/elements/<name>/FuroUi5<Name>.ts` and extract:
   - The custom tag name (from `static override get metadata` → `md.tag`).
   - The supported model types — look at the `bindData` parameter type and the reader/writer map class used (e.g. `StringReaderWriters`, `NumericReaderWriters`, `BoolReaderWriters`). The reader/writer class's keys in `src/lib/open-models/<X>ReaderWriters.ts` are the supported `__meta.typeName` values.
   - The list of FAT attributes passed to `new FatHandler(this, [...])` in the constructor.
   - Element-specific public methods or events (e.g. `clear()`, `closePopover()`, custom dispatched events) — these go in `[element-specific]` blocks.

3. **Copy the spec structure** from `FuroUi5TextInput.spec.ts` into `src/elements/<name>/FuroUi5<Name>.spec.ts`. Swap:
   - The tag in every `html\`<furo-ui5-…></furo-ui5-…>\`` template.
   - The imported class name and the `FuroUi5TextInput` type.
   - The model-type imports (e.g. `STRING, StringValue` for string-typed elements, `BOOLEAN, BoolValue` for boolean-typed elements) and the corresponding `createFatString` / `createFatBool` helper. If only `createFatString` exists today, add a sibling helper next to it under `src/util/test-helpers/`.
   - The FAT-attribute mapping tests in the `FAT attribute mapping [TEMPLATE]` block — keep only the attributes that the element actually maps (the list passed to `FatHandler`).
   - The element-specific tests — delete the `search-requested` / `clear()` / `closePopover()` blocks and write new ones for the target element's own public surface.

4. **Keep the smoke tests verbatim** — the user has flagged the "should be a furo-ui5-<x> element" identity check and the `a11y` test as important. Always include them at the top of the spec.

5. **Run the spec and lint**:
   - `npx vitest run src/elements/<name>/FuroUi5<Name>.spec.ts`
   - `npx eslint src/elements/<name>/FuroUi5<Name>.spec.ts`
   - Both must pass before declaring the work done.

## What each [TEMPLATE] block tests

| Block | Covers |
|---|---|
| `element identity & a11y` | tag-name check, basic `isOk`, `chai-a11y-axe` `assert.isAccessible`. Always keep. |
| `default model state` | element constructs with a non-undefined default model of the right primitive type; `bindData(undefined)` is a no-op. |
| `model → UI value sync` | bind a model, mutate `model.value`, assert element value reflects it — once per supported model type (primitive, FAT wrapper, google.protobuf wrapper). |
| `UI → model value sync` | bind a model, simulate user input via `setInputValue(el, "x")`, assert `model.value === "x"` — once per supported type. Also tests bare `input` and bare `change` events separately. |
| `model-driven state` | `parent-readonly-set/unset` events on the model → `el.readonly`; FAT labels (`readonly`, `required`, `disabled`) on bind; `model.__setValueState(state, [msg])` → `el.valueState` + value-state-message div in light DOM; `__getConstraints()` returning `{ required, read_only, max_length }` applied on bind. |
| `FAT attribute mapping` | each FAT attribute the element maps → corresponding property; pre-set HTML attribute wins over FAT (this is what `FatHandler.readAttributes()` guarantees); pre-set `accessible-name` wins over `model.__label`, fallback to `__label` when not pre-set. |
| `rebinding cleanliness` | after `bindData(B)`, mutating A no longer touches the element; UI writes go to B only; `bindData(sameModel)` is a no-op. |
| `lifecycle` | after `el.remove()`, listeners added in `connectedCallback` (e.g. a debounced search listener) no longer fire. Only relevant if the element registers listeners in its lifecycle hooks. |

## Reusable test helpers (already in the repo)

Always import these from `@/util/test-helpers/` rather than re-implementing inline:

- `delay(ms)` — `src/util/test-helpers/delay.ts`. Use for the debounce wait (`await delay(600)` for a 500ms debounce).
- `createFatString({ value, attributes, labels })` — `src/util/test-helpers/createFatString.ts`. Use to construct a `FuroFatString` with FAT attributes/labels for tests. **Add a sibling helper (`createFatBool`, `createFatInt32`, etc.) when testing a non-string element** — keep the same shape (`{ value, attributes, labels }`).
- `setInputValue(el, "value")` — `src/util/test-helpers/setInputValue.ts`. Sets `el.value` and dispatches `input` + `change`. Works for any element that listens to those events. For elements that listen to different events (e.g. a checkbox that emits `change` only), write a sibling helper next to it.

## Driving model state from a test

| Goal | How |
|---|---|
| Change the model's value | `model.value = "x"` (works for `STRING`, `FuroFatString`, `StringValue`, and primitive equivalents — the setter dispatches `field-value-changed`, which the bound element listens for). |
| Set readonly from the parent | `model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }))`. Unset with `parent-readonly-unset`. |
| Set a value state + message | `model.__setValueState(ValueState.Negative, ["the message"])` — dispatches `state-changed`, which `FieldNodeValueState` handles to set `el.valueState` and append the `div[slot="valueStateMessage"].vse`. |
| Drive constraint-handling | Monkey-patch `__getConstraints` on the model **before** `bindData`: `(model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ required: true, read_only: true, max_length: 10 });`. Then `bindData(model)`. |
| Apply FAT labels/attributes on bind | Construct the model with them: `createFatString({ labels: { readonly: true }, attributes: { placeholder: "p" } })`, then `bindData(model)`. |
| Simulate user input | `setInputValue(el, "typed")`. |

## Spec-file boilerplate (skeleton to copy)

Use this file header verbatim, swapping `text-input` / `FuroUi5TextInput` / model imports for the target element:

```ts
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, StringValue, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5<Name> } from "./FuroUi5<Name>";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);
```

Each `describe` block creates its own fixture in `beforeEach` so tests are independent. The element-identity/a11y block uses a single `beforeAll` (matches the convention in the other specs).

## Lint & type notes

- The spec must use **typed variable annotations** (`const el: FuroUi5<Name> = await fixture(...)` or `let el: FuroUi5<Name>;`) — bare `const el = await fixture(...)` infers as `Element` and breaks `bindData` calls. Do **not** use `as FuroUi5<Name>` casts on the fixture result; eslint's `no-unnecessary-type-assertion` will flag them.
- `vitest`'s `assert.isOk(x)` narrows the type — after it, you can use `x.foo` without `?.` or `!`.
- Files under `src/util/test-helpers/**/*.ts` and `src/**/*.spec.ts` have a relaxed lint override (see `eslint.config.mjs`), so floating promises and non-null assertions are allowed.

## Verification

- `npx vitest run src/elements/<name>/FuroUi5<Name>.spec.ts` — all tests pass.
- `npx eslint src/elements/<name>/FuroUi5<Name>.spec.ts <any-new-helpers>` — clean.
- `npx vitest run` — the full suite still passes (regression check, especially if a shared test helper was added).

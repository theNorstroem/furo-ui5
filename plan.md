# Audit: `bindData()` compliance across `src/elements`

## Context

`@furo/ui5` wraps UI5 web components with a `bindData(fieldNode)` interface on top of `@furo/open-models`. The reference implementation lives in `src/elements/text-input/FuroUi5TextInput.ts` (lines 101‑149). This report audits every other bindable element against the 11 criteria specified by the user, citing line numbers for every gap. No code changes are proposed here — this is a read-only diagnostic.

## The 11 criteria (gold standard, derived from `FuroUi5TextInput.bindData`)

| # | Criterion | Reference (TextInput) |
|---|-----------|-----------------------|
| 1 | Remove existing listeners (readonly watcher, model `field-value-changed`, UI `input`/`change`) | 112‑115 |
| 2 | Connect the model (`this._model = fieldNode`) | 118 |
| 3 | Init typed readers/writers via `ModelReaderWriter` + a typed RW pair | 120‑125 |
| 4 | Listen to model `field-value-changed` → `readFromModel` | 132 |
| 5 | `readonlyState.listenToStateChanged(fieldNode)` (if applicable) | 129 |
| 6 | `valueStateManager.listenToStateChanges(fieldNode)` (if applicable) | 128 |
| 7 | Listen on UI events (`input`, `change`) → `writeToModel` | 135‑136 |
| 8 | Initial `readFromModel()` after binding | 139 |
| 9 | Handle constraints (`this._model.__getConstraints()`) | 142 |
| 10 | Placeholder fallback: `this.placeholder = this.placeholder ?? undefined ? this._model.__placeholder : this.placeholder` | 145 |
| 11 | Accessible name fallback: `this.accessibleName ??= this._model.__label` | 148 |

Event-name convention: the reference uses `"field-value-changed"`. Anything that listens to `"this-field-value-changed"` is using a non-standard event and likely won't receive updates from the rest of the system.

---

## Compliance matrix

Legend: ✅ present · ❌ missing · — N/A (irrelevant for that component shape)

| Component | 1 rm | 2 model | 3 RW | 4 model→UI | 5 readonly | 6 valueState | 7 UI→model | 8 init read | 9 constraints | 10 placeholder | 11 a11y |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **text-input** (reference) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **password-input** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **textarea** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **number-input** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **step-input** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **combobox** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **select** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **multi-combobox** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **slider** | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ | ✅ | — | ✅ |
| **checkbox** | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ (uses `text`) | ✅ |
| **switch** | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **radio-button** | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **toggle-button** | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **select-enum** | ❌ | ✅ | ❌ | ✅ | partial | partial | ✅ | ✅ | ✅ | ✅ | ✅ |
| **rating-indicator** | ✅ | ✅ | ❌ inline | ✅ | ✅ | — | ✅ | ✅ | ✅ | — | ✅ |
| **show-hide** | partial | ✅ | ✅ | ⚠ wrong evt | ✅ | — | — | ✅ (setTimeout) | ✅ | — | — |
| **progress-indicator** | ❌ | ✅ | ✅ | ✅ | ❌ | — | — | ✅ | ✅ | — | ✅ |
| **bool-icon** | ❌ | ✅ | ❌ | ❌ | ❌ | — | — | ❌ | — | — | ✅ |
| **busy-indicator** | ❌ | ✅ | partial | ✅ | ❌ | — | — | ✅ | — | ✅ | — |
| **barcode-scanner-dialog** | ❌ | ✅ | ❌ | ❌ | — | — | ✅ | ❌ | — | — | — |
| **markdown** | partial | ✅ | ❌ | partial | ❌ | ❌ | — | ✅ | ❌ | ❌ | ❌ |
| **pretty-json** | ❌ | ✅ | ❌ | partial | ❌ | ❌ | — | ✅ | ❌ | ❌ | ❌ |
| **cb-item / mcb-item / option** (helpers) | ❌ | ✅ | ❌ | ✅ | — | — | — | ✅ | — | — | ❌ |
| **subsection** | — | — | — | — | — | — | — | — | — | — | — (no `bindData`) |

---

## Findings by group

### Group A — fully compliant (9)
`text-input`, `password-input`, `textarea`, `number-input`, `step-input`, `combobox`, `select`, `multi-combobox`, `slider`.

These match the reference pattern. `slider` legitimately has no `valueState`/`placeholder` on the underlying UI5 control — those criteria are N/A, not missing.

### Group B — bool family: same two gaps in all four (checkbox / switch / radio-button / toggle-button)
- **Criterion 1 (remove existing listeners):** Each file has a comment stating the intent (e.g. `FuroUi5Checkbox.ts:75‑77`) but **no actual cleanup code**. Re-binding will double-subscribe.
- **Criterion 5 (readonlyState):** Neither `this.readonlyState.detach()` nor `this.readonlyState.listenToStateChanged(fieldNode)` is called, even though `ReadonlyState` is wired up elsewhere in these components. Field readonly flags from the model won't propagate.

Specific lines:
- `src/elements/checkbox/FuroUi5Checkbox.ts:75‑77` (missing #1), no `readonlyState` call anywhere in `bindData` (missing #5).
- `src/elements/switch/FuroUi5Switch.ts:69‑71`, same pattern.
- `src/elements/radio-button/FuroUi5RadioButton.ts` `bindData` ~84‑128, same pattern.
- `src/elements/toggle-button/FuroUi5ToggleButton.ts` `bindData` ~75‑117, same pattern.

The fix in each is to mirror the text-input prologue (3 lines) and add the two readonly calls.

### Group C — non-standard or incomplete RW wiring
- **`select-enum`** (`src/elements/select-enum/FuroUi5SelectEnum.ts:47‑105`): does not use `ModelReaderWriter` at all — it reads/writes the enum value through ad‑hoc code on the model. Listener cleanup also missing.
- **`rating-indicator`** (`src/elements/rating-indicator/FuroUi5RatingIndicator.ts:184‑247`, RW maps at ~272‑350): builds custom reader/writer maps inline instead of using `NumericReaderWriters`. The result behaves but bypasses the typed helper, so any future fix to `NumericReaderWriters` (e.g. FAT-attribute mapping changes) won't apply here.

### Group D — `show-hide` event-name mismatch
`src/elements/show-hide/FuroUi5ShowHide.ts:92, 108` uses `"this-field-value-changed"`. The rest of the codebase emits/listens for `"field-value-changed"` (see `text-input:113, 132`). This means model changes likely never reach `show-hide` after the initial `setTimeout`-based read at line 114‑116. Two options apply: rename the event to the standard, or document why this control is intentionally different.

### Group E — display-only / read-only components
Several components are pure display surfaces and don't need UI→model wiring (criterion 7), constraints, or placeholder/a11y in the same way:
- `progress-indicator`, `bool-icon`, `busy-indicator`, `markdown`, `pretty-json`, `barcode-scanner-dialog`.

What they **should still do** (and several don't) is criteria **1, 3, 4, 8**: clean up old listeners on re-bind, use the typed RW helpers, listen to `field-value-changed`, and perform an initial read. The most deficient are `markdown` and `pretty-json` (direct value assignment, no RW abstraction, no cleanup, no constraints/a11y).

### Group F — list-item helpers
`cb-item`, `mcb-item`, `option` are option-children of comboboxes/selects. Their `bindData` is intentionally minimal (no value state, no UI write-back, no readonly cascade). They are acceptable as-is, **except** that none set `accessibleName` from `__label`, which would improve a11y inside the parent control.

### Group G — no `bindData`
`subsection` is structural and has no model binding. Excluded from the audit.

---

## Summary of recommended follow-ups (not executed in this plan)

In priority order:

1. **Bool family (checkbox, switch, radio-button, toggle-button)** — add the listener-cleanup prologue and the two `readonlyState` calls. Smallest fix, biggest correctness gain (re-bind safety + readonly propagation).
2. **`show-hide` event name** — decide whether to rename `"this-field-value-changed"` → `"field-value-changed"` (likely yes) or document the divergence. Currently this component is silently disconnected from model updates after the first read.
3. **`select-enum`** — port to `ModelReaderWriter` so it shares the typed RW path.
4. **`rating-indicator`** — replace the inline reader/writer maps with `NumericReaderWriters`.
5. **Display-only components (`markdown`, `pretty-json`, `bool-icon`)** — at minimum add listener cleanup and an initial-read-after-rebind path; consider whether they should be routed through a typed RW.
6. **List-item helpers** — set `accessibleName ??= this._model.__label` for a11y.

## Verification

This is a static analysis. To validate any subsequent fix:
- Run the corresponding spec under `src/elements/<name>/FuroUi5<Name>.spec.ts` (vitest in Chromium — `npx vitest run src/elements/<name>/FuroUi5<Name>.spec.ts`).
- Add a test that calls `bindData(a)` then `bindData(b)` and asserts only one `field-value-changed` listener fires per model write — this is the regression the bool-family fix prevents.
- For `show-hide`, write a spec that mutates the bound bool field and asserts the component re-renders without the `setTimeout` workaround.

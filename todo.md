Summary of recommended follow-ups (not executed in this plan)

In priority order:

1. Bool family (checkbox, switch, radio-button, toggle-button) — add the listener-cleanup prologue and the two readonlyState calls. Smallest fix, biggest correctness gain (re-bind safety + readonly
   propagation).
2. show-hide event name — decide whether to rename "this-field-value-changed" → "field-value-changed" (likely yes) or document the divergence. Currently this component is silently disconnected from model
   updates after the first read.
3. select-enum — port to ModelReaderWriter so it shares the typed RW path.
4. rating-indicator — replace the inline reader/writer maps with NumericReaderWriters.
5. Display-only components (markdown, pretty-json, bool-icon) — at minimum add listener cleanup and an initial-read-after-rebind path; consider whether they should be routed through a typed RW.
6. List-item helpers — set accessibleName ??= this._model.__label for a11y.

---
title: furo-ui5-typerenderer
tags: [typerenderer, dynamic, renderer, any, generic, display, cell, celledit, form]
category: TypeRenderers
use-when: Use when the type of a field is not known at authoring time.
---

# furo-ui5-typerenderer

> Renders any field node with the type renderer matching its type and the requested context.

**Class:** `FuroUi5Typerenderer`
**Import:** `import "@furo/ui5/typerenderer"`
**Import type:** `import type { FuroUi5Typerenderer } from "@furo/ui5/typerenderer"`
**Extends:** `LitElement`
**Category:** TypeRenderers

**Related:** [`furo-ui5-form-row`](furo-ui5-form-row.md)

## Overview

The `furo-ui5-typerenderer` takes **any** field node and renders the type renderer that matches
the node's `__meta.typeName` in the requested `context`. Use it wherever the concrete type is
not known at authoring time — generic tables, generated forms, `google.protobuf.Any` payloads.

## Naming convention

A renderer tag is `-`:

```text
display  +  google.protobuf.Timestamp  ->  display-google-protobuf-timestamp
cell     +  primitives.INT64           ->  cell-int64
```

The type slug is the fully qualified proto type name, lowercased, with `.` and `_` replaced by
`-`. Open-models primitives (`primitives.STRING`, `primitives.INT64`, …) lose their
`primitives.` prefix, and `primitives.BOOLEAN` maps to `bool` to match the shipped renderers.

| field type              | context   | resolved tag                        |
| ----------------------- | --------- | ----------------------------------- |
| `primitives.STRING`     | `display` | `display-string`                    |
| `primitives.BOOLEAN`    | `cell`    | `cell-bool`                         |
| `furo.fat.String`       | `celledit`| `celledit-furo-fat-string`          |
| `google.protobuf.Timestamp` | `form`| `form-google-protobuf-timestamp`    |

## Contexts

`@furo/ui5` ships renderers for **display**, **cell**, **celledit** and **form**. Any other
string works too — `context="tile"` resolves `tile-string`, `tile-furo-fat-string`, … — you just
have to provide those renderers yourself. The default context is **display**.

## Importing the renderers is up to you

This element never imports a renderer. It only resolves a tag name and binds the node to it, so
your bundle stays free of the ~120 renderers you do not use. Import what you need:

```js
import "@furo/ui5/type-renderers/display-string";
import "@furo/ui5/type-renderers/display-furo-fat-string";
```

If the resolved tag is not registered within `renderer-timeout` ms (300 by default), the element
logs an error, sets a `renderer-missing` attribute listing the tags it tried, and fires a
`renderer-missing` event. Nothing is rendered — the surrounding layout stays intact.

## Basic usage

```html
<furo-ui5-typerenderer .model="${this.person.displayName}"></furo-ui5-typerenderer>
<furo-ui5-typerenderer context="cell" .model="${this.person.age}"></furo-ui5-typerenderer>
```

As with every bindable element in this package, `bindData()` is equivalent to setting `model`:

```js
document.querySelector("furo-ui5-typerenderer").bindData(person.displayName);
```

## Repeated fields

For an `ARRAY` the item type decides the tag and `-array` is appended. If that renderer
does not exist, the plain item renderer is repeated once per item:

```text
ARRAY<STRING, string>, context="display"
1. display-string-array   -> bound to the whole ARRAY node
2. display-string         -> one element per item, bound to the item node
3. neither                -> renderer-missing
```

```html
<furo-ui5-typerenderer .model="${this.person.emails}"></furo-ui5-typerenderer>
```

## Map fields

A `MAP` works the same way with a `-map` suffix on the **value** type. In the fallback
the map key is put on each rendered element as a `map-key` attribute, so a renderer can display
it:

```text
MAP<string, STRING, string>, context="display"
1. display-string-map -> bound to the whole MAP node
2. display-string     -> <display-string map-key="de">, <display-string map-key="en">, …
3. neither            -> renderer-missing
```

## Overriding renderers

`rendererOverrides` replaces individual renderers for one instance. The key is always the tag
the convention would have produced:

```html
<furo-ui5-typerenderer .model="${this.person.tags}" .rendererOverrides="${this.myRenderers}"></furo-ui5-typerenderer>
```

```js
this.myRenderers = { "display-string": "my-string-display-renderer", "display-string-array": "some-other-component" };
```

For app wide overrides set `defaultOverrides` once at bootstrap. Instance overrides win over
the app wide ones, which win over the convention:

```js
import { FuroUi5Typerenderer } from "@furo/ui5/typerenderer";
FuroUi5Typerenderer.defaultOverrides = { "display-string": "my-string-display-renderer", "cell-google-protobuf-timestamp": "my-relative-time-cell" };
```

## Layout

The renderer is created in the **light DOM** and the typerenderer itself is `display: contents`.
The renderer therefore participates in the surrounding grid, flex or table layout exactly as if
you had written it there yourself, and your application CSS still reaches it. The flip side is
that the typerenderer has no box of its own — padding, border or width on
`furo-ui5-typerenderer` have no effect; style the renderer instead.

Every attribute you put on the typerenderer, except its own (`context`, `renderer-timeout`,
`renderer-missing`) and `class` / `style` / `id` / `slot` / `hidden`, is copied onto the rendered
renderer:

```html
<furo-ui5-typerenderer context="cell" value-state="Error" .model="${this.person.age}">
</furo-ui5-typerenderer>
<!-- renders: <cell-int64 value-state="Error"></cell-int64> -->
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `context` | `string` | "display" | The render context. `display`, `cell`, `celledit` and `form` are shipped with this package, any other string resolves renderers you provide yourself. |
| `renderer-timeout` | `number` | 300 | How long to wait for an unregistered renderer to show up, in milliseconds. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `model` | `FieldNode \| undefined` | Use this to bind a model field by attribute. |
| `rendererOverrides` | `Record<string, string> \| undefined` | Renderer overrides for this instance, keyed by the tag the naming convention produces, e.g. `{ "display-string": "my-string-display-renderer" }`. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `renderer-missing` | `CustomEvent<{ tags: string[]; context: string; typeName: string }>` | Fired when no renderer was registered for the bound node within `renderer-timeout`. |

## Methods

### `bindData(fieldNode: FieldNode | undefined): void`

Connects your data model to this component. Accepts a field node of any type, including
repeated (`ARRAY`) and map (`MAP`) fields.

### `focus(options?: FocusOptions): void`

Forwards the focus to the rendered renderer.

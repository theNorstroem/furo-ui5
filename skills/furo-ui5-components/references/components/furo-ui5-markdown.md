---
title: furo-ui5-markdown
tags: [markdown, md, render, formatted-text, html, display]
category: Display
use-when: Use to display rich text authored in markdown from a data field.
---

# furo-ui5-markdown

> Renders bound markdown text as formatted HTML.

**Class:** `FuroUi5Markdown`
**Import:** `import "@furo/ui5/markdown"`
**Category:** Display

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md)

## Overview

`furo-ui5-markdown`

 Renders given md data directly to html.

 #### Stream rendering
 The stream rendering mode renders the pure markdown while the stream is running and makes a final render with all added plugins.
 This save a lot of resources by not rendering incomplete mermaid, svg or any other custom renderers.

 ##### In combination with field nodes
 - To notify the stream started, send a `FieldNode` event `stream-begins`.
 - To notify the stream has ended send a `FieldNode` event `stream-ends`.

 ##### When using the properties directly (html with js)
 - Enable the streaming mode with setting the attribute `streaming` to true.
 - To notify the stream has ended set the attribute `streaming` to false and the final markdown to the property `markdown`

#### Adding custom renderers

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `markdown` | `string` | - | The markdown string to render |

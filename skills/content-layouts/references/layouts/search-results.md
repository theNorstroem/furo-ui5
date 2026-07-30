---
title: Search Results Layout
tags: [search, results, facets, filters, search-results, find]
use-when: user asks for search results page, faceted search, or search with filters
---

# Search Results Layout

Search interface with faceted filters and result display.

## Use Cases
- Product catalog search
- Document search
- Employee directory
- Knowledge base
- Media library

## Preview

### Faceted Search
```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🔍 [wireless headphones                              ] [Search]         │
│ About 1,234 results (0.42 seconds)                                      │
├─────────────────┬───────────────────────────────────────────────────────┤
│ Filters         │ Results                                    [Grid][List]│
├─────────────────┼───────────────────────────────────────────────────────┤
│ Category        │ ┌─────────────────────────────────────────────────┐   │
│ □ Electronics   │ │ 📦 Sony WH-1000XM5                              │   │
│ ☑ Audio (234)   │ │ ★★★★★ (2,341 reviews)                          │   │
│ □ Accessories   │ │ Premium wireless noise-canceling headphones     │   │
│                 │ │ $349.99                              [Add to Cart]│   │
│ Price           │ └─────────────────────────────────────────────────┘   │
│ ○ Under $50     │                                                       │
│ ○ $50 - $100    │ ┌─────────────────────────────────────────────────┐   │
│ ● $100 - $500   │ │ 📦 Bose QuietComfort Ultra                      │   │
│ ○ Over $500     │ │ ★★★★☆ (1,892 reviews)                          │   │
│                 │ │ Wireless noise cancelling headphones            │   │
│ Brand           │ │ $429.99                              [Add to Cart]│   │
│ ☑ Sony (45)     │ └─────────────────────────────────────────────────┘   │
│ ☑ Bose (38)     │                                                       │
│ □ Apple (29)    │ ┌─────────────────────────────────────────────────┐   │
│ □ Samsung (22)  │ │ 📦 Apple AirPods Max                            │   │
│                 │ │ ★★★★☆ (3,456 reviews)                          │   │
│ [Clear All]     │ │ High-fidelity audio with spatial sound          │   │
│                 │ │ $549.99                              [Add to Cart]│   │
│                 │ └─────────────────────────────────────────────────┘   │
│                 │                                                       │
│                 │ [◀ 1] [2] [3] [4] [5] ... [50 ▶]                      │
└─────────────────┴───────────────────────────────────────────────────────┘
```

### Grid View Results
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────┐  ┌───────────────┐  ┌───────────────┐                 │
│ │   [Image]     │  │   [Image]     │  │   [Image]     │                 │
│ │               │  │               │  │               │                 │
│ │ Product Name  │  │ Product Name  │  │ Product Name  │                 │
│ │ ★★★★☆ (123)   │  │ ★★★★★ (456)   │  │ ★★★☆☆ (78)    │                 │
│ │ $99.99        │  │ $149.99       │  │ $79.99        │                 │
│ └───────────────┘  └───────────────┘  └───────────────┘                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### Active Filters Display
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Active Filters:                                                         │
│ [Category: Audio ×] [Price: $100-$500 ×] [Brand: Sony ×] [Brand: Bose ×]│
│                                                         [Clear All]     │
└─────────────────────────────────────────────────────────────────────────┘
```

### No Results State
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    🔍 No results found                                  │
│                                                                         │
│           We couldn't find anything for "xyzabc123"                     │
│                                                                         │
│           Suggestions:                                                  │
│           • Check your spelling                                         │
│           • Try more general keywords                                   │
│           • Remove some filters                                         │
│                                                                         │
│                        [Clear Filters]                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `ui5-side-navigation` - import `@ui5/webcomponents-fiori/dist/SideNavigation.js`
- `furo-ui5-list` - [Component docs](../furo-ui5-components/components/furo-ui5-list.md)
- `ui5-card` - import `@ui5/webcomponents/dist/Card.js`
- `furo-ui5-text-input` - [Component docs](../furo-ui5-components/components/furo-ui5-text-input.md)
- `furo-ui5-checkbox` - [Component docs](../furo-ui5-components/components/furo-ui5-checkbox.md)

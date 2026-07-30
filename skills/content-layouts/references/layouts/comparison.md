---
title: Comparison Layout
tags: [comparison, side-by-side, compare, diff, versions, options]
use-when: user asks for comparison view, side-by-side comparison, product comparison, or version diff
---

# Comparison Layout

Side-by-side comparison view for comparing items, versions, or options.

## Use Cases
- Product comparison
- Version diff / changelog
- Plan/pricing comparison
- Before/after view
- A/B test results

## Preview

### Two-Column Comparison
```
┌─────────────────────────────────────────────────────────────────┐
│ Compare Products                          [+ Add] [Clear All]   │
├───────────────────────────┬─────────────────────────────────────┤
│       Product A           │         Product B                   │
│       ★★★★☆ (4.2)         │         ★★★★★ (4.8)           ✓     │
├───────────────────────────┼─────────────────────────────────────┤
│ Price                     │                                     │
│ $299.00                   │ $249.00                        ✓    │
├───────────────────────────┼─────────────────────────────────────┤
│ Storage                   │                                     │
│ 128 GB                    │ 256 GB                         ✓    │
├───────────────────────────┼─────────────────────────────────────┤
│ Battery                   │                                     │
│ 4000 mAh             ✓    │ 3500 mAh                            │
├───────────────────────────┼─────────────────────────────────────┤
│ Features                  │                                     │
│ ✓ Wireless Charging       │ ✓ Wireless Charging                 │
│ ✓ Water Resistant         │ ✗ Water Resistant                   │
│ ✗ 5G Support              │ ✓ 5G Support                        │
├───────────────────────────┼─────────────────────────────────────┤
│      [View Details]       │       [View Details]                │
│      [Add to Cart]        │       [Add to Cart]                 │
└───────────────────────────┴─────────────────────────────────────┘
```

### Three-Column Comparison (Pricing)
```
┌─────────────────────────────────────────────────────────────────┐
│     Basic          │      Pro           │      Enterprise      │
│     $9/mo          │      $29/mo        │      Contact Us      │
├────────────────────┼────────────────────┼──────────────────────┤
│ 5 Users            │ 25 Users           │ Unlimited            │
│ 10 GB Storage      │ 100 GB Storage     │ Unlimited            │
│ Email Support      │ Priority Support   │ Dedicated Support    │
│ ✗ API Access       │ ✓ API Access       │ ✓ API Access         │
│ ✗ Custom Branding  │ ✗ Custom Branding  │ ✓ Custom Branding    │
├────────────────────┼────────────────────┼──────────────────────┤
│    [Get Started]   │    [Get Started]   │    [Contact Sales]   │
└────────────────────┴────────────────────┴──────────────────────┘
```

### Diff View (Version Comparison)
```
┌─────────────────────────────────────────────────────────────────┐
│ Version 1.0        │ Changes │        Version 2.0              │
├────────────────────┼─────────┼──────────────────────────────────┤
│ Name: John Doe     │    =    │ Name: John Doe                  │
│ Email: john@old.com│    ≠    │ Email: john@new.com        [!]  │
│ Status: Active     │    =    │ Status: Active                  │
│ -                  │    +    │ Phone: +1-555-1234         [+]  │
│ Role: User         │    ≠    │ Role: Admin                [!]  │
└────────────────────┴─────────┴──────────────────────────────────┘
```

## Variations

### Horizontal Scroll (Many Items)
```
┌──────────┬──────────┬──────────┬──────────┬─────
│ Item A   │ Item B   │ Item C   │ Item D   │ ...
│          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴─────
                                          scroll →
```

### Stacked Mobile View
```
┌─────────────────────┐
│ Product A           │
│ $299 | ★★★★☆        │
│ [Compare ✓]         │
├─────────────────────┤
│ Product B           │
│ $249 | ★★★★★        │
│ [Compare ✓]         │
└─────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-responsive-layout` - import `@furo/layout/furo-responsive-layout`
- `ui5-table` - import `@ui5/webcomponents/dist/Table.js`
- `ui5-card` - import `@ui5/webcomponents/dist/Card.js`

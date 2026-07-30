---
title: Timeline/Feed Layout
tags: [timeline, feed, activity, history, changelog, events, chronological]
use-when: user asks for activity feed, changelog, audit log, news feed, notification history, or order tracking
---

# Timeline/Feed Layout

An activity feed or timeline view showing chronological events or changes.

## Use Cases
- Activity history
- Changelog / audit log
- News feed
- Notification history
- Order status tracking

## Preview
```
┌─────────────────────────────────────────────────────────────────┐
│ Activity Feed                                    [Filter ▼]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ●─── Today ─────────────────────────────────────────────────    │
│ │                                                               │
│ │  ┌─────────────────────────────────────────────────────┐     │
│ │  │ 📦 Order #1234 shipped                    2:30 PM   │     │
│ │  │ Package left warehouse in New York                  │     │
│ │  └─────────────────────────────────────────────────────┘     │
│ │                                                               │
│ │  ┌─────────────────────────────────────────────────────┐     │
│ │  │ 💳 Payment received                       10:15 AM  │     │
│ │  │ $500.00 via Credit Card                             │     │
│ │  └─────────────────────────────────────────────────────┘     │
│ │                                                               │
│ ●─── Yesterday ─────────────────────────────────────────────    │
│ │                                                               │
│ │  ┌─────────────────────────────────────────────────────┐     │
│ │  │ 📝 Order created                          4:45 PM   │     │
│ │  │ Created by John Doe                                 │     │
│ │  └─────────────────────────────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Variations

### Grouped by Date
```
●─── Today ───────────────
│  • Event 1
│  • Event 2
●─── Yesterday ───────────
│  • Event 3
```

### With Status Line
```
●──●──●──○──○
Ordered → Paid → Shipped → Delivered → Completed
```

### Compact Feed
```
• User created order #123          2 hours ago
• Payment received                 3 hours ago
• Order shipped                    1 day ago
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `ui5-timeline` - import `@ui5/webcomponents-fiori/dist/Timeline.js`
- `ui5-timeline-item` - import `@ui5/webcomponents-fiori/dist/TimelineItem.js`
- `ui5-timeline-group-item` - import `@ui5/webcomponents-fiori/dist/TimelineGroupItem.js`

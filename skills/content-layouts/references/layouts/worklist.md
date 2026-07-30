---
title: Worklist Layout
tags: [worklist, tasks, work-items, quick-actions, processing, queue]
use-when: user asks for worklist content, task list with actions, or work item processing
---

# Worklist Layout

Task-oriented list with quick actions for processing workflow items.

## Use Cases
- Approval workflows
- Task queues
- Inbox management
- Support ticket queues
- Review processes

## Preview

### Standard Worklist
```
┌─────────────────────────────────────────────────────────────────────────┐
│ My Tasks                                              [Filter ▼] [⟳]    │
│ 12 items requiring attention                                            │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🔴 High Priority                                                     │ │
│ │ Purchase Order #4521 - Approval Required                            │ │
│ │ Requested by: John Doe  │  Amount: $15,000  │  Due: Today           │ │
│ │                                        [Reject] [Approve]           │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🟡 Medium Priority                                                   │ │
│ │ Leave Request - Jane Smith                                          │ │
│ │ Type: Vacation  │  Dates: Mar 15-20  │  Due: Mar 10                 │ │
│ │                                        [Reject] [Approve]           │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🟢 Low Priority                                                      │ │
│ │ Document Review - Q4 Report                                         │ │
│ │ Submitted by: Finance Team  │  Pages: 45  │  Due: Mar 15            │ │
│ │                                          [Review] [Delegate]        │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Compact Worklist
```
┌─────────────────────────────────────────────────────────────────────────┐
│ □ │ 🔴 │ PO #4521 Approval      │ John Doe  │ $15,000 │ Today  │[✓][✗] │
│ □ │ 🟡 │ Leave Request          │ Jane Smith│ 5 days  │ Mar 10 │[✓][✗] │
│ □ │ 🟢 │ Document Review        │ Finance   │ 45 pgs  │ Mar 15 │[→]    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Grouped by Category
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ▼ Approvals (5)                                                         │
│   • PO #4521 - $15,000 - Due Today                          [✓] [✗]    │
│   • PO #4522 - $8,200 - Due Tomorrow                        [✓] [✗]    │
│                                                                         │
│ ▼ Reviews (3)                                                           │
│   • Q4 Report - Finance Team                                [Review]   │
│   • Contract Draft - Legal                                  [Review]   │
│                                                                         │
│ ▶ Notifications (4)                                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-ui5-list` - [Component docs](../furo-ui5-components/components/furo-ui5-list.md)
- `ui5-li` - import `@ui5/webcomponents/dist/ListItemStandard.js`
- `furo-ui5-button` - [Component docs](../furo-ui5-components/components/furo-ui5-button.md)
- `ui5-card` - import `@ui5/webcomponents/dist/Card.js`

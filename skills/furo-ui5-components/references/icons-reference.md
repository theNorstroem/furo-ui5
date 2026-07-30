# Icons Reference

Furo UI5 ships the three SAP icon collections. There is no Furo-specific icon set — every
icon name below comes from SAP.

| Collection | Prefix | Icons | Package |
|------------|--------|-------|---------|
| SAP icons (default) | *(none)* | 705 | `@ui5/webcomponents-icons` |
| SAP TNT | `tnt/` | 186 | `@ui5/webcomponents-icons-tnt` |
| SAP Business Suite | `business-suite/` | 389 | `@ui5/webcomponents-icons-business-suite` |

## Usage

### In Components
```html
<!-- SAP icons (default collection, no prefix) -->
<furo-ui5-button icon="add">Add Item</furo-ui5-button>
<furo-ui5-button end-icon="slim-arrow-down">Options</furo-ui5-button>
<furo-ui5-icon name="home"></furo-ui5-icon>
<ui5-side-navigation-item icon="home" text="Home"></ui5-side-navigation-item>
<furo-ui5-tab icon="settings" text="Settings"></furo-ui5-tab>

<!-- TNT and Business Suite collections need their prefix -->
<furo-ui5-icon name="tnt/robot"></furo-ui5-icon>
<furo-ui5-button icon="tnt/technicalsystem">Systems</furo-ui5-button>
<furo-ui5-icon name="business-suite/1x2-grid-layout"></furo-ui5-icon>
```

### Import
```typescript
// A whole collection:
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons-tnt/dist/AllIcons.js";
import "@ui5/webcomponents-icons-business-suite/dist/AllIcons.js";

// Or a single icon, to keep the bundle small:
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons-tnt/dist/robot.js";
```

> Verify an icon exists before using it — `ls node_modules/@ui5/webcomponents-icons/dist/<name>.js`
> (or the `-tnt` / `-business-suite` package). An unknown name renders nothing.

## Icons for common app concerns

There is no Furo-specific icon set. Use these SAP names for the cases an app-specific
collection would otherwise cover — all verified present in the installed packages.

| Icon | Name | Usage |
|------|------|-------|
| 🤖 | `tnt/robot` | Automation, bots, agents |
| ⚙ | `tnt/technicalsystem` | Systems, infrastructure |
| 📦 | `tnt/application` | Applications, modules |
| ☑ | `tnt/task` | Tasks, work items |
| 🧪 | `lab` | Testing, QA, experiments |
| 🖥 | `sys-monitor` | Monitoring, diagnostics |
| ▶ | `process` | Workflows, pipelines |
| ⚠ | `quality-issue` | Validation problems |
| ◀ | `close-command-field` | Collapse a side panel |
| ▶ | `open-command-field` | Expand a side panel |

### Usage
```html
<!-- Automation -->
<furo-ui5-button icon="tnt/robot">Run Automation</furo-ui5-button>

<!-- Testing -->
<furo-ui5-button icon="lab">Run Tests</furo-ui5-button>

<!-- Panel controls -->
<furo-ui5-button icon="close-command-field" design="Transparent" accessible-name="Close panel"></furo-ui5-button>
<furo-ui5-button icon="open-command-field" design="Transparent" accessible-name="Open panel"></furo-ui5-button>
```

---

## SAP UI5 Icons

## Most Common Icons

### Navigation & Actions
| Icon | Name | Usage |
|------|------|-------|
| 🏠 | `home` | Home page, dashboard |
| ← | `nav-back` | Back navigation |
| → | `arrow-right` | Forward, next |
| ↑ | `arrow-top` | Up, scroll to top |
| ↓ | `arrow-bottom` | Down |
| ▼ | `slim-arrow-down` | Dropdown indicator |
| ▲ | `slim-arrow-up` | Collapse indicator |
| ◀ | `slim-arrow-left` | Left navigation |
| ▶ | `slim-arrow-right` | Right navigation |
| ⚙ | `settings` | Settings, preferences |
| ≡ | `menu` | Menu, hamburger |
| ⋮ | `overflow` | More options |

### CRUD Operations
| Icon | Name | Usage |
|------|------|-------|
| + | `add` | Add, create new |
| ✎ | `edit` | Edit item |
| 🗑 | `delete` | Delete, remove |
| 💾 | `save` | Save changes |
| ✓ | `accept` | Accept, confirm |
| ✗ | `decline` | Decline, reject |
| ↻ | `refresh` | Refresh data |
| ⟳ | `synchronize` | Sync |
| ↩ | `undo` | Undo action |
| ↪ | `redo` | Redo action |
| 📋 | `copy` | Copy |
| 📋 | `paste` | Paste |

### Status & Feedback
| Icon | Name | Usage |
|------|------|-------|
| ✓ | `complete` | Completed |
| ℹ | `information` | Information |
| ⚠ | `warning` | Warning |
| ✗ | `error` | Error |
| ❓ | `question-mark` | Help |
| 💡 | `hint` | Hint, tip |
| 🔔 | `bell` | Notifications |
| ⏳ | `pending` | Pending |
| 🔄 | `in-progress` | In progress |

### Objects & Entities
| Icon | Name | Usage |
|------|------|-------|
| 👤 | `employee` | Employee, user |
| 👥 | `group` | Group, team |
| 🏢 | `building` | Company |
| 👤 | `customer` | Customer |
| 📦 | `product` | Product |
| 📄 | `document` | Document |
| 📁 | `folder` | Folder |
| 📅 | `calendar` | Calendar, date |
| 📧 | `email` | Email |
| 📞 | `phone` | Phone |
| 💳 | `credit-card` | Payment |
| 🛒 | `cart` | Shopping cart |

### Views & Display
| Icon | Name | Usage |
|------|------|-------|
| 📊 | `bar-chart` | Bar chart |
| 📈 | `line-chart` | Line chart |
| 🥧 | `pie-chart` | Pie chart |
| 📋 | `list` | List view |
| ▦ | `grid` | Grid view |
| 📋 | `table-view` | Table view |
| 🔍 | `search` | Search |
| 🔎 | `zoom-in` | Zoom in |
| 🔍 | `zoom-out` | Zoom out |
| ⛶ | `full-screen` | Full screen |
| ⛶ | `exit-full-screen` | Exit full screen |
| 👁 | `show` | Show, visible |
| 👁 | `hide` | Hide |

### Communication
| Icon | Name | Usage |
|------|------|-------|
| 💬 | `comment` | Comment |
| 💬 | `discussion` | Discussion |
| ↗ | `share` | Share |
| 📎 | `attachment` | Attachment |
| 🔗 | `chain-link` | Link |
| 📤 | `upload` | Upload |
| 📥 | `download` | Download |

### Sorting & Filtering
| Icon | Name | Usage |
|------|------|-------|
| ▼ | `sort` | Sort |
| ↑ | `sort-ascending` | Sort ascending |
| ↓ | `sort-descending` | Sort descending |
| 🔍 | `filter` | Filter |
| ✗ | `clear-filter` | Clear filter |
| + | `add-filter` | Add filter |

### Layout & Organization
| Icon | Name | Usage |
|------|------|-------|
| ▶ | `expand` | Expand |
| ▼ | `collapse` | Collapse |
| ▷ | `expand-all` | Expand all |
| ▽ | `collapse-all` | Collapse all |
| ▦ | `detail-view` | Detail view |
| ◫ | `split` | Split view |

## Complete Icon List

### A
`accelerated`, `accept`, `accidental-leave`, `account`, `accounting-document-verification`, `action`, `action-settings`, `activate`, `activities`, `activity-2`, `activity-assigned-to-goal`, `activity-individual`, `activity-items`, `add`, `add-activity`, `add-activity-2`, `add-calendar`, `add-contact`, `add-coursebook`, `add-document`, `add-employee`, `add-equipment`, `add-favorite`, `add-filter`, `add-folder`, `add-photo`, `add-process`, `add-product`, `address-book`, `addresses`, `ai`, `alert`, `along-stacked-chart`, `alphabetical-order`, `appear-offline`, `appointment`, `appointment-2`, `approvals`, `area-chart`, `arobase`, `arrow-bottom`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-top`, `attachment`, `attachment-audio`, `attachment-e-pub`, `attachment-html`, `attachment-photo`, `attachment-text-file`, `attachment-video`, `attachment-zip-file`, `away`

### B
`back-to-top`, `background`, `badge`, `bar-chart`, `bar-code`, `basket`, `batch-payments`, `bbyd-active-sales`, `bbyd-dashboard`, `bed`, `begin`, `bell`, `bell-2`, `biometric-face`, `biometric-thumb`, `blank-tag`, `blank-tag-2`, `blur`, `bo-strategy-management`, `bold-text`, `bookmark`, `bookmark-2`, `border`, `broken-link`, `browse-folder`, `bubble-chart`, `building`, `bullet-text`, `burglary`, `bus-public-transport`, `business-by-design`, `business-card`, `business-objects-experience`, `business-objects-explorer`, `business-objects-mobile`, `business-one`, `busy`

### C
`calendar`, `call`, `camera`, `cancel`, `cancel-maintenance`, `cancel-share`, `capital-projects`, `car-rental`, `card`, `cargo-train`, `cart`, `cart-2`, `cart-3`, `cart-4`, `cart-5`, `cart-approval`, `cart-full`, `cause`, `chain-link`, `chalkboard`, `chart-axis`, `chart-table-view`, `check-availability`, `checklist`, `checklist-2`, `checklist-item`, `checklist-item-2`, `chevron-phase`, `chevron-phase-2`, `choropleth-chart`, `circle-task`, `circle-task-2`, `citizen-connect`, `clear-all`, `clear-filter`, `clinical-order`, `clinical-task-tracker`, `close-command-field`, `cloud`, `cloud-check`, `co`, `collaborate`, `collapse`, `collapse-all`, `collapse-group`, `collision`, `color-fill`, `column-chart-dual-axis`, `combine`, `command-line-interfaces`, `comment`, `commission-check`, `company-view`, `compare`, `compare-2`, `competitor`, `complete`, `connected`, `contacts`, `copy`, `course-book`, `course-program`, `create`, `create-entry-time`, `create-form`, `create-leave-request`, `create-session`, `credit-card`, `crm-sales`, `crm-service-manager`, `crop`, `crossed-line-chart`, `currency`, `curriculum`, `cursor-arrow`, `customer`, `customer-and-contacts`, `customer-and-supplier`, `customer-briefing`, `customer-financial-fact-sheet`, `customer-history`, `customer-order-entry`, `customer-view`, `customize`

### D
`da`, `da-2`, `dark-mode`, `date-time`, `decision`, `decline`, `decrease-line-height`, `delete`, `desktop-mobile`, `detail-less`, `detail-more`, `detail-view`, `developer-settings`, `dimension`, `direction-arrows`, `disconnected`, `discussion`, `discussion-2`, `dishwasher`, `display`, `display-more`, `doc-attachment`, `doctor`, `document`, `document-text`, `documents`, `donut-chart`, `down`, `download`, `download-from-cloud`, `draw-rectangle`, `drill-down`, `drill-up`, `drop-down-list`, `dropdown`, `duplicate`

### E
`e-care`, `e-learning`, `eam-work-order`, `edit`, `edit-outside`, `education`, `electrocardiogram`, `electronic-medical-record`, `email`, `email-read`, `employee`, `employee-approvals`, `employee-lookup`, `employee-pane`, `employee-rejections`, `enablement`, `end-user-experience-monitoring`, `endoscopy`, `energy-saving-lightbulb`, `enter-more`, `eraser`, `error`, `example`, `excel-attachment`, `exit-full-screen`, `expand`, `expand-all`, `expand-group`, `expense-report`, `explorer`

### F
`factory`, `fallback`, `family-care`, `family-protection`, `favorite`, `favorite-list`, `fax-machine`, `feed`, `feedback`, `feeder-arrow`, `female`, `filter`, `filter-analytics`, `filter-facets`, `filter-fields`, `flag`, `flag-2`, `flight`, `fob-watch`, `folder`, `folder-2`, `folder-blank`, `folder-full`, `form`, `forward`, `fridge`, `full-screen`, `full-stacked-chart`, `full-stacked-column-chart`, `functional-location`, `future`, `fx`

### G
`gantt-bars`, `gender-male-and-female`, `general-leave-request`, `generate-shortcut`, `geographic-bubble-chart`, `globe`, `goal`, `goalseek`, `grid`, `group`, `group-2`

### H
`header`, `heading1`, `heading2`, `heading3`, `headset`, `heart`, `heart-2`, `heating-cooling`, `heatmap-chart`, `hello-world`, `hide`, `high-priority`, `hint`, `history`, `home`, `home-share`, `horizontal-bar-chart`, `horizontal-bar-chart-2`, `horizontal-bullet-chart`, `horizontal-combination-chart`, `horizontal-grip`, `horizontal-stacked-chart`, `horizontal-waterfall-chart`, `hr-approval`

### I
`idea-wall`, `image-viewer`, `in-progress`, `in-progress-2`, `inbox`, `incident`, `incoming-call`, `increase-line-height`, `indent`, `information`, `initiative`, `inspect`, `inspect-down`, `inspection`, `instance`, `insurance-car`, `insurance-house`, `insurance-life`, `internet-browser`, `inventory`, `ipad`, `ipad-2`, `iphone`, `iphone-2`, `it-host`, `it-instance`, `it-system`, `italic-text`

### J-K
`jam`, `journey-arrive`, `journey-change`, `journey-depart`, `kpi-corporate-performance`, `kpi-managing-my-area`

### L
`lab`, `laptop`, `lateness`, `lead`, `lead-outdated`, `leads`, `learning-assistant`, `legend`, `less`, `letter`, `light-mode`, `lightbulb`, `line-chart`, `line-chart-dual-axis`, `line-chart-time-axis`, `line-charts`, `list`, `loan`, `locate-me`, `locate-me-2`, `locked`, `log`

### M
`machine`, `male`, `manager`, `manager-insight`, `map`, `map-2`, `map-3`, `map-fill`, `marketing-campaign`, `master-task-triangle`, `master-task-triangle-2`, `meal`, `measure`, `measurement-document`, `measuring-point`, `media-forward`, `media-pause`, `media-play`, `media-reverse`, `media-rewind`, `meeting-room`, `megamenu`, `menu`, `menu2`, `message-error`, `message-information`, `message-popup`, `message-success`, `message-warning`, `microphone`, `mileage`, `minimize`, `mirrored-task-circle`, `mirrored-task-circle-2`, `money-bills`, `monitor-payments`, `move`, `mri-scan`, `multi-select`, `multiple-bar-chart`, `multiple-line-chart`, `multiple-pie-chart`, `multiple-radar-chart`, `multiselect-all`, `multiselect-none`, `my-sales-order`, `my-view`

### N
`nav-back`, `navigation-down-arrow`, `navigation-left-arrow`, `navigation-right-arrow`, `navigation-up-arrow`, `negative`, `newspaper`, `non-binary`, `not-editable`, `notes`, `notification`, `notification-2`, `number-sign`, `numbered-text`, `nurse`, `nutrition-activity`

### O
`official-service`, `offsite-work`, `open-command-field`, `open-folder`, `opportunities`, `opportunity`, `order-status`, `org-chart`, `outbox`, `outdent`, `outgoing-call`, `overflow`, `overlay`, `overview-chart`

### P
`paging`, `paid-leave`, `paint-bucket`, `palette`, `paper-plane`, `passenger-train`, `past`, `paste`, `pause`, `payment-approval`, `pdf-attachment`, `pdf-reader`, `pending`, `people-connected`, `per-diem`, `performance`, `permission`, `person-placeholder`, `personnel-view`, `pharmacy`, `phone`, `photo-voltaic`, `physical-activity`, `picture`, `pie-chart`, `pipeline-analysis`, `pixelate`, `play`, `pool`, `popup-window`, `positive`, `post`, `ppt-attachment`, `present`, `primary-key`, `print`, `private`, `process`, `product`, `program-triangles`, `program-triangles-2`, `project-definition-triangle`, `project-definition-triangle-2`, `projector`, `provision`, `pull-down`, `pushpin-off`, `pushpin-on`, `puzzle`

### Q-R
`qr-code`, `quality-issue`, `question-mark`, `radar-chart`, `receipt`, `record`, `redo`, `refresh`, `repost`, `request`, `reset`, `resize`, `resize-corner`, `resize-horizontal`, `resize-vertical`, `response`, `responsive`, `restart`, `retail-store`, `retail-store-manager`, `rhombus-milestone`, `rhombus-milestone-2`, `role`, `rotate`

### S
`s4hana`, `sales-document`, `sales-notification`, `sales-order`, `sales-order-item`, `sales-quote`, `sap-box`, `sap-logo-shape`, `sap-ui5`, `save`, `scatter-chart`, `scissors`, `screen-split-one`, `screen-split-three`, `screen-split-two`, `search`, `select-appointments`, `settings`, `share`, `share-2`, `shelf`, `shield`, `shipping-status`, `shortcut`, `show`, `show-edit`, `signature`, `simple-payment`, `simulate`, `slim-arrow-down`, `slim-arrow-left`, `slim-arrow-right`, `slim-arrow-up`, `soccer`, `sonography`, `sort`, `sort-ascending`, `sort-descending`, `sorting-ranking`, `sound`, `sound-loud`, `sound-off`, `source-code`, `space-navigation`, `split`, `status-completed`, `status-critical`, `status-error`, `status-in-process`, `status-inactive`, `status-negative`, `status-positive`, `step`, `stethoscope`, `stop`, `strikethrough`, `study-leave`, `subway-train`, `suitcase`, `sum`, `supplier`, `survey`, `switch-classes`, `switch-views`, `synchronize`, `syntax`, `syringe`, `sys-add`, `sys-back`, `sys-back-2`, `sys-cancel`, `sys-cancel-2`, `sys-enter`, `sys-enter-2`, `sys-find`, `sys-find-next`, `sys-first-page`, `sys-help`, `sys-help-2`, `sys-last-page`, `sys-minus`, `sys-monitor`, `sys-next-page`, `sys-prev-page`, `system-exit`, `system-exit-2`

### T
`table-chart`, `table-column`, `table-row`, `table-view`, `tag`, `tag-cloud-chart`, `tags`, `target-group`, `task`, `taxi`, `technical-object`, `temperature`, `text`, `text-align-center`, `text-align-justified`, `text-align-left`, `text-align-right`, `text-color`, `text-formatting`, `theater`, `thing-type`, `thumb-down`, `thumb-up`, `time-account`, `time-entry-request`, `time-off`, `time-overtime`, `timesheet`, `to-be-reviewed`, `toaster-down`, `toaster-top`, `toaster-up`, `tools-opportunity`, `touch`, `translate`, `travel-expense`, `travel-expense-report`, `travel-itinerary`, `travel-request`, `tree`, `trend-down`, `trend-up`, `tri-state`, `trip-report`, `two-keys`

### U
`ui-notifications`, `umbrella`, `underline-text`, `undo`, `unfavorite`, `unlocked`, `unpaid-leave`, `unsynchronize`, `unwired`, `up`, `upload`, `upload-to-cloud`, `upstacked-chart`, `user-edit`, `user-settings`

### V
`validate`, `value-help`, `vds-file`, `vehicle-repair`, `verified`, `vertical-bar-chart`, `vertical-bar-chart-2`, `vertical-bullet-chart`, `vertical-grip`, `vertical-stacked-chart`, `vertical-waterfall-chart`, `video`, `visits`

### W
`waiver`, `walk-me`, `wallet`, `warning`, `warning2`, `washing-machine`, `weather-proofing`, `web-cam`, `widgets`, `windows-doors`, `work-history`, `workflow-tasks`, `world`, `wounds-doc`, `wrench`, `write-new`, `write-new-document`

### X-Z
`x-ray`, `zoom-in`, `zoom-out`

## Icon Previews

To see all icons visually, check the SAP UI5 Icon Explorer:
- [SAP UI5 Icons (v5)](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)

## Business Suite Icons

Additional business icons are available in `@ui5/webcomponents-icons-business-suite`:
```typescript
import "@ui5/webcomponents-icons-business-suite/dist/1x2-grid-layout.js";
```

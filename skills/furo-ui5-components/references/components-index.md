# Furo UI5 Components Reference

Auto-generated from `@furo/ui5/custom-elements.json`

> **For AI assistants:** Each component entry includes keywords in parentheses and use-case descriptions to help match user requests.

## Components

### Layout

- [`furo-ui5-show-hide`](components/furo-ui5-show-hide.md) *(show, hide, visibility, conditional, toggle)* — Use for toggling content visibility.

### PageStructure

- [`furo-ui5-shellbar`](components/furo-ui5-shellbar.md) *(shellbar, header, app-bar, navigation, branding, toolbar)* — Use as the main application header for branding and global navigation.
- [`furo-ui5-shellbar-item`](components/furo-ui5-shellbar-item.md) *(shellbar-item, action, header, button, icon)* — Use as children of furo-ui5-shellbar for custom header actions.
- [`furo-ui5-shellbar-search`](components/furo-ui5-shellbar-search.md) *(search, shellbar, header, find, lookup, global-search)* — Use within furo-ui5-shellbar for application-wide search.
- [`furo-ui5-shellbar-spacer`](components/furo-ui5-shellbar-spacer.md) *(spacer, shellbar, flex, gap, separator)* — Use to create flexible space between ShellBar items.
- [`furo-ui5-user-menu`](components/furo-ui5-user-menu.md) *(user-menu, account, profile, settings, logout)* — Use for user account actions like profile, settings, and logout.

### Navigation

- [`furo-ui5-breadcrumbs`](components/furo-ui5-breadcrumbs.md) *(breadcrumbs, navigation, trail, path)* — Use to show a navigation trail; provide breadcrumb items as children.
- [`furo-ui5-breadcrumbs-item`](components/furo-ui5-breadcrumbs-item.md) *(breadcrumb, item, navigation, link)* — Use as a child of furo-ui5-breadcrumbs to represent one trail entry.
- [`furo-ui5-context-menu`](components/furo-ui5-context-menu.md) *(menu, context-menu, dropdown, actions, navigation, popup)* — Use for action menus, context menus, or hierarchical navigation.
- [`furo-ui5-link`](components/furo-ui5-link.md) *(link, anchor, hyperlink, navigation, url, href)* — Use for text-based navigation or triggering actions.

### Form

- [`furo-ui5-barcode-scanner-dialog`](components/furo-ui5-barcode-scanner-dialog.md) *(barcode, scanner, camera, qr-code, dialog, scan)* — Use for mobile barcode/QR code scanning functionality.
- [`furo-ui5-cb-item`](components/furo-ui5-cb-item.md) *(combobox-item, option, selection, dropdown)* — Use as children of furo-ui5-combobox.
- [`furo-ui5-checkbox`](components/furo-ui5-checkbox.md) *(checkbox, check, toggle, boolean, selection, tick, form)* — Use for independent on/off choices or multiple selections from a group.
- [`furo-ui5-color-palette`](components/furo-ui5-color-palette.md) *(color, palette, swatch, picker, value)* — Use to let users pick a color from a predefined set stored as a string.
- [`furo-ui5-color-palette-item`](components/furo-ui5-color-palette-item.md) *(color, palette, item, swatch)* — Use as a child of furo-ui5-color-palette / furo-ui5-color-palette-popover.
- [`furo-ui5-color-palette-popover`](components/furo-ui5-color-palette-popover.md) *(color, palette, popover, swatch, picker, value)* — Use to let users pick a color from a predefined set shown in a popover.
- [`furo-ui5-color-picker`](components/furo-ui5-color-picker.md) *(color, picker, hex, rgb, swatch, value)* — Use to let users pick a color value stored as a string.
- [`furo-ui5-combobox`](components/furo-ui5-combobox.md) *(combobox, autocomplete, dropdown, search, filter, typeahead, select)* — Use when users benefit from searching/filtering a large list of options.
- [`furo-ui5-date-picker`](components/furo-ui5-date-picker.md) *(date, picker, calendar, input, selection, form)* — Use for selecting a single date value.
- [`furo-ui5-date-time-picker`](components/furo-ui5-date-time-picker.md) *(datetime, date, time, picker, calendar, combined)* — Use when both date and time need to be selected together.
- [`furo-ui5-daterange-picker`](components/furo-ui5-daterange-picker.md) *(daterange, range, date, picker, calendar, from, to)* — Use to let users select a start and end date as a single range.
- [`furo-ui5-file-uploader`](components/furo-ui5-file-uploader.md) *(file, upload, uploader, attachment, input)* — Use to let users pick one or more files; handle the `change` event yourself.
- [`furo-ui5-mcb-item`](components/furo-ui5-mcb-item.md) *(multi-combobox-item, option, selection, token)* — Use as children of furo-ui5-multi-combobox.
- [`furo-ui5-money-input`](components/furo-ui5-money-input.md) *(money, currency, amount, price, input, decimal, form)* — Use for entering a monetary value together with its currency.
- [`furo-ui5-multi-combobox`](components/furo-ui5-multi-combobox.md) *(multi-combobox, multiple, selection, tokens, tags, filter, multiselect)* — Use for selecting multiple items from a searchable list displayed as tokens.
- [`furo-ui5-multi-input`](components/furo-ui5-multi-input.md) *(multi-input, tokens, tags, multiple, values, input, form)* — Use when users need to enter multiple freeform values displayed as tokens.
- [`furo-ui5-number-input`](components/furo-ui5-number-input.md) *(number, numeric, input, integer, float, decimal, form)* — Use for entering numeric values such as quantities or measurements.
- [`furo-ui5-option`](components/furo-ui5-option.md) *(option, item, select, dropdown, choice)* — Use as children of furo-ui5-select.
- [`furo-ui5-password-input`](components/furo-ui5-password-input.md) *(password, masked, secret, input, credentials, form)* — Use for entering passwords or other sensitive masked values.
- [`furo-ui5-radio-button`](components/furo-ui5-radio-button.md) *(radio, button, selection, exclusive, choice, form, option)* — Use for selecting exactly one option from a small set of mutually exclusive choices.
- [`furo-ui5-range-slider`](components/furo-ui5-range-slider.md) *(slider, range, numeric, lower, upper, bound)* — Use for selecting a numeric range between two values.
- [`furo-ui5-rating-indicator`](components/furo-ui5-rating-indicator.md) *(rating, stars, feedback, score, review, indicator)* — Use for collecting user ratings or displaying scores.
- [`furo-ui5-select`](components/furo-ui5-select.md) *(select, dropdown, picker, options, choice, form, list)* — Use when selecting from a fixed list without typing; for searchable lists use combobox.
- [`furo-ui5-select-enum`](components/furo-ui5-select-enum.md) *(select, enum, dropdown, options, choice, form, list)* — Use to select a single value from an enum-typed field.
- [`furo-ui5-sign-pad`](components/furo-ui5-sign-pad.md) *(signature, sign, draw, canvas, pad, input)* — Use to capture a handwritten signature or freehand drawing.
- [`furo-ui5-slider`](components/furo-ui5-slider.md) *(slider, range, numeric, input, value, draggable)* — Use for selecting a single numeric value from a continuous range.
- [`furo-ui5-step-input`](components/furo-ui5-step-input.md) *(step-input, spinner, numeric, increment, decrement, number)* — Use for precise numeric input with step controls.
- [`furo-ui5-switch`](components/furo-ui5-switch.md) *(switch, toggle, on-off, boolean, slider, form)* — Use when the state change should take effect immediately without form submission.
- [`furo-ui5-text-input`](components/furo-ui5-text-input.md) *(input, text, field, form, textbox, entry, value)* — Use for single-line text entry like names, emails, or short values.
- [`furo-ui5-textarea`](components/furo-ui5-textarea.md) *(textarea, multiline, text, input, form, description, notes)* — Use when users need to enter multiple lines of text like descriptions or comments.
- [`furo-ui5-time-picker`](components/furo-ui5-time-picker.md) *(time, picker, hours, minutes, clock, input)* — Use for selecting time values without date.

### FormLayout

- [`furo-ui5-form-field-segmenter`](components/furo-ui5-form-field-segmenter.md) *(segmenter, split, field, unit, compound, paired)* — Use for compound fields like amount-currency or value-unit pairs.
- [`furo-ui5-form-group`](components/furo-ui5-form-group.md) *(form-group, section, fieldset, grouping, fields)* — Use to group related form fields under a common heading.
- [`furo-ui5-form-layout`](components/furo-ui5-form-layout.md) *(form, layout, responsive, groups, columns, structure)* — Use as the main container for forms with one or more form groups.
- [`furo-ui5-form-row`](components/furo-ui5-form-row.md) *(form-row, field, label, input, row)* — Use for each label-field pair in a form.

### Table

- [`furo-ui5-table-toolbar-separator`](components/furo-ui5-table-toolbar-separator.md) *(table-toolbar-separator, divider)* — Use to separate groups of actions in table toolbar.
- [`furo-ui5-tree-table`](components/furo-ui5-tree-table.md) *(tree-table, hierarchical, nested, expandable, parent-child, table)* — Use when tabular data has parent-child relationships requiring expansion.

### List

- [`furo-ui5-tree`](components/furo-ui5-tree.md) *(tree, hierarchy, nodes, expandable, collapsible, nested)* — Use for displaying hierarchical data structures with expand/collapse.
- [`furo-ui5-tree-item`](components/furo-ui5-tree-item.md) *(tree-item, node, leaf, branch, hierarchy, expandable, indentation)* — Use as the child of furo-ui5-tree to render one node of a hierarchy.

### Container

- [`furo-ui5-dialog`](components/furo-ui5-dialog.md) *(dialog, modal, popup, overlay, confirmation, alert, lightbox)* — Use for confirmations, forms, or content requiring user action before continuing.
- [`furo-ui5-header-panel`](components/furo-ui5-header-panel.md) *(header, panel, collapsible, group, container, expand)* — Use to group related content under a collapsible header.
- [`furo-ui5-popover`](components/furo-ui5-popover.md) *(popover, dropdown, tooltip, floating, overlay, popup)* — Use for contextual information or actions that don't require modal blocking.
- [`furo-ui5-responsive-popover`](components/furo-ui5-responsive-popover.md) *(responsive, popover, dialog, mobile, adaptive, overlay)* — Use when you need popover on desktop but fullscreen dialog on mobile.
- [`furo-ui5-section`](components/furo-ui5-section.md) *(section, page, object-page, content, area)* — Use within object pages to define major content sections.
- [`furo-ui5-subsection`](components/furo-ui5-subsection.md) *(sub-section, nested, section, content, object-page)* — Use to organize content within furo-ui5-section.
- [`furo-ui5-tab`](components/furo-ui5-tab.md) *(tab, item, navigation, section)* — Use as a child of furo-ui5-tabcontainer to represent one tab.
- [`furo-ui5-tabcontainer`](components/furo-ui5-tabcontainer.md) *(tabs, tabcontainer, navigation, sections)* — Use to organize content into tabs; provide tabs as children.

### Display

- [`furo-ui5-avatar`](components/furo-ui5-avatar.md) *(avatar, initials, person, display, string)* — Use to render a person's initials from a bound string value.
- [`furo-ui5-avatar-badge`](components/furo-ui5-avatar-badge.md) *(avatar, badge, status, overlay)* — Use as the badge slot of furo-ui5-avatar to show a status indicator.
- [`furo-ui5-avatar-group`](components/furo-ui5-avatar-group.md) *(avatar, group, people, stack)* — Use to display a group of avatars; provide avatars as children.
- [`furo-ui5-bool-icon`](components/furo-ui5-bool-icon.md) *(bool, boolean, icon, display, indicator, true-false)* — Use to visualize a boolean field as an icon (e.g. yes/no, on/off).
- [`furo-ui5-expandable-text`](components/furo-ui5-expandable-text.md) *(expandable, text, display, show-more, string)* — Use to render a long bound string with a show-more / show-less toggle.
- [`furo-ui5-icon`](components/furo-ui5-icon.md) *(icon, glyph, symbol, image, sap-icons)* — Use to display icons alongside text or as standalone indicators.
- [`furo-ui5-label`](components/furo-ui5-label.md) *(label, form, text, field, caption, description)* — Use to label form fields or display short descriptive text.
- [`furo-ui5-list`](components/furo-ui5-list.md) *(list, items, collection, vertical)* — Use as a styled list container; provide list items as children.
- [`furo-ui5-markdown`](components/furo-ui5-markdown.md) *(markdown, md, render, formatted-text, html, display)* — Use to display rich text authored in markdown from a data field.
- [`furo-ui5-message-strip`](components/furo-ui5-message-strip.md) *(message, strip, banner, notification, display, string)* — Use to render a bound string value as an inline status / info message.
- [`furo-ui5-pretty-json`](components/furo-ui5-pretty-json.md) *(json, pretty-print, debug, display, format, code)* — Use to render JSON data in a readable, indented form.
- [`furo-ui5-relative-time-badge`](components/furo-ui5-relative-time-badge.md) *(relative-time, time, badge, ago, timestamp, display)* — Use to show a timestamp as a human-friendly relative time badge.
- [`furo-ui5-relative-time-display`](components/furo-ui5-relative-time-display.md) *(relative-time, time, ago, timestamp, display, text)* — Use to show a timestamp as human-friendly relative time text.
- [`furo-ui5-tag`](components/furo-ui5-tag.md) *(tag, badge, status, label, display, string)* — Use to render a bound string value as a styled status tag.
- [`furo-ui5-text`](components/furo-ui5-text.md) *(text, display, label, string, value)* — Use to render a bound string value as read-only text.
- [`furo-ui5-title`](components/furo-ui5-title.md) *(title, heading, h1, h2, header, typography, section)* — Use for page titles, section headers, and semantic headings.

### Feedback

- [`furo-ui5-busy-indicator`](components/furo-ui5-busy-indicator.md) *(busy, loading, spinner, progress, wait, indicator)* — Use to indicate loading or processing state.
- [`furo-ui5-progress-indicator`](components/furo-ui5-progress-indicator.md) *(progress, bar, percentage, loading, completion, indicator)* — Use to show determinate progress of an operation.
- [`furo-ui5-toast`](components/furo-ui5-toast.md) *(toast, notification, snackbar, message, alert, feedback, temporary)* — Use for non-blocking confirmations or status updates that auto-dismiss.

### TypeRenderers

- [`furo-ui5-typerenderer`](components/furo-ui5-typerenderer.md) *(typerenderer, dynamic, renderer, any, generic, display, cell, celledit, form)* — Use when the type of a field is not known at authoring time.

### Button

- [`furo-ui5-button`](components/furo-ui5-button.md) *(button, action, click, submit, primary, trigger, call-to-action)* — Use for primary and secondary actions in forms, toolbars, and dialogs.
- [`furo-ui5-button-badge`](components/furo-ui5-button-badge.md) *(badge, button, counter, notification, indicator)* — Use to add a count or status indicator to buttons.
- [`furo-ui5-segmented-button`](components/furo-ui5-segmented-button.md) *(segmented, toggle, group, selection, tabs, enum, multiselect)* — Use for switching between related views or selecting one/several values in place.
- [`furo-ui5-segmented-button-item`](components/furo-ui5-segmented-button-item.md) *(segmented-button-item, item, toggle, selection)* — Use as children of furo-ui5-segmented-button.
- [`furo-ui5-toggle-button`](components/furo-ui5-toggle-button.md) *(toggle, switch, on-off, pressed, state, button)* — Use when action has two states (active/inactive) that persist after click.

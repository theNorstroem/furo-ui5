# Style Variables Reference

CSS custom properties (variables) available for styling furo-ui5 components and layouts.

> ⚠️ **Important**: Always prefer using style variables instead of hardcoding colors, sizes, and other magic numbers. This ensures consistency across the application and makes theme changes automatic.

## Responsive Spacing Variables

These variables automatically adjust based on screen size (responsive breakpoints):

### MediaSizeIndentation
Responsive padding for page content sections.

| Variable | Description | Phone (<600px) | Tablet (≥600px) | Desktop (≥1024px) | Large (≥1440px) |
|----------|-------------|----------------|-----------------|-------------------|-----------------|
| `--MediaSizeIndentation` | Full padding (top right bottom left) | `0.625rem 1rem 0.25rem 1rem` | `0.625rem 2rem 0.25rem 2rem` | `1rem 2rem 0.5rem 2rem` | `2rem 3rem 1rem 3rem` |
| `--MediaSizeIndentationTop` | Top padding | `0.625rem` | `0.625rem` | `1rem` | `2rem` |
| `--MediaSizeIndentationEnd` | Right padding | `1rem` | `2rem` | `2rem` | `3rem` |
| `--MediaSizeIndentationBottom` | Bottom padding | `0.25rem` | `0.25rem` | `0.5rem` | `0.75rem` |
| `--MediaSizeIndentationStart` | Left padding | `1rem` | `2rem` | `2rem` | `3rem` |

### Layout Gaps
| Variable | Description | Phone | Tablet/Desktop | Large |
|----------|-------------|-------|----------------|-------|
| `--furo-ui5-responsive-layout-row-gap` | Row gap in responsive layouts | `0.625rem` | `1rem` | `1rem` |
| `--furo-ui5-responsive-layout-column-gap` | Column gap in responsive layouts | `0.625rem` | `1rem` | `1rem` |
| `--furo-ui5-horizontal-flex-space` | Space between flex items | `0.25rem` | `0.4rem` | `0.5rem` |
| `--FuroUi5GridGapSize` | Grid gap size | `1rem` | `1rem` | `1rem` |

### Usage Example
```css
.my-section {
  padding: var(--MediaSizeIndentation);
}

.my-grid {
  gap: var(--FuroUi5GridGapSize);
}
```

## Base Size Variables

| Variable | Cozy | Compact | Description |
|----------|------|---------|-------------|
| `--sapElement_Height` | `2.75rem` | `1.625rem` | Standard element height |
| `--sapElement_LineHeight` | `3rem` | `2rem` | Standard line height |
| `--FuroUi5Base_min_width` | `2.5rem` | `2rem` | Minimum width for interactive elements |
| `--FuroUi5Icon_font_size` | `1.375rem` | `1rem` | Icon font size |
| `--FuroUi5Base_padding` | `0.5625rem` | `0.4375rem` | Base padding |

### Table Sizes
| Variable | Cozy | Compact |
|----------|------|---------|
| `--ui5_table_header_row_height` | `2.75rem` | `2rem` |
| `--ui5_table_row_height` | `2.75rem` | `2rem` |
| `--ui5_table_group_row_height` | `2rem` | - |

## Color Variables

### Brand Colors
| Variable | Description |
|----------|-------------|
| `--sapBrandColor` | Primary brand color |
| `--sapHighlightColor` | Highlight/accent color |
| `--sapSelectedColor` | Selected item color |
| `--sapActiveColor` | Active state color |
| `--sapHoverColor` | Hover state color |

### Text Colors
| Variable | Description |
|----------|-------------|
| `--sapTextColor` | Default text color |
| `--sapTitleColor` | Title/heading color |
| `--sapLinkColor` | Link text color |
| `--sapContent_LabelColor` | Label text color |
| `--sapContent_MarkerTextColor` | Marker/secondary text color |
| `--sapContent_ContrastTextColor` | Text on colored backgrounds |
| `--sapContent_DisabledTextColor` | Disabled text color |

### Background Colors
| Variable | Description |
|----------|-------------|
| `--sapBackgroundColor` | Page background |
| `--sapBackgroundColorDefault` | Default/neutral background |
| `--sapPageHeader_Background` | Page header background |
| `--sapPageFooter_Background` | Page footer background |
| `--sapGroup_ContentBackground` | Group/section content background |
| `--sapGroup_TitleBackground` | Group/section title background |
| `--sapToolbar_Background` | Toolbar background |

### List & Table Colors
| Variable | Description |
|----------|-------------|
| `--sapList_Background` | List/table background |
| `--sapList_Hover_Background` | Row hover background |
| `--sapList_Active_Background` | Row active/pressed background |
| `--sapList_SelectionBackgroundColor` | Selected row background |
| `--sapList_TextColor` | List text color |
| `--sapList_HeaderTextColor` | Table header text color |
| `--sapList_BorderColor` | List/table border color |
| `--sapList_FooterBackground` | Table footer background |
| `--sapList_FooterTextColor` | Table footer text color |

### Semantic Colors
| Variable | Description |
|----------|-------------|
| `--sapPositiveColor` | Success/positive (green) |
| `--sapNegativeColor` | Error/negative (red) |
| `--sapCriticalColor` | Warning/critical (orange) |
| `--sapInformativeColor` | Information (blue) |
| `--sapNeutralColor` | Neutral (gray) |

### Shell Colors
| Variable | Description |
|----------|-------------|
| `--sapShell_Background` | Shell/app background |
| `--sapShell_TextColor` | Shell text color |
| `--sapShell_BorderColor` | Shell border color |
| `--sapShell_NegativeColor` | Shell error color |
| `--sapShell_CriticalColor` | Shell warning color |
| `--sapShell_PositiveColor` | Shell success color |
| `--sapShell_InformativeColor` | Shell info color |
| `--sapShell_NeutralColor` | Shell neutral color |

## Button Variables

| Variable | Description |
|----------|-------------|
| `--sapButton_Background` | Default button background |
| `--sapButton_BorderColor` | Button border color |
| `--sapButton_TextColor` | Button text color |
| `--sapButton_Hover_Background` | Hover state |
| `--sapButton_Active_Background` | Active/pressed state |
| `--sapButton_Emphasized_Background` | Primary/emphasized button |
| `--sapButton_Emphasized_TextColor` | Emphasized button text |

### Semantic Button Colors
| State | Background | Border | Text |
|-------|------------|--------|------|
| Accept | `--sapButton_Accept_Background` | `--sapButton_Accept_BorderColor` | `--sapButton_Accept_TextColor` |
| Reject | `--sapButton_Reject_Background` | `--sapButton_Reject_BorderColor` | `--sapButton_Reject_TextColor` |
| Negative | `--sapButton_Negative_Background` | `--sapButton_Negative_BorderColor` | `--sapButton_Negative_TextColor` |
| Critical | `--sapButton_Critical_Background` | `--sapButton_Critical_BorderColor` | `--sapButton_Critical_TextColor` |
| Success | `--sapButton_Success_Background` | `--sapButton_Success_BorderColor` | `--sapButton_Success_TextColor` |

## Field/Input Variables

| Variable | Description |
|----------|-------------|
| `--sapField_Background` | Input field background |
| `--sapField_BorderColor` | Input border color |
| `--sapField_TextColor` | Input text color |
| `--sapField_PlaceholderTextColor` | Placeholder text color |
| `--sapField_Hover_Background` | Hover state |
| `--sapField_Focus_Background` | Focus state |
| `--sapField_ReadOnly_Background` | Read-only field |
| `--sapField_RequiredColor` | Required field indicator |

### Field States
| State | Background | Border |
|-------|------------|--------|
| Invalid | `--sapField_InvalidBackground` | `--sapField_InvalidColor` |
| Warning | `--sapField_WarningBackground` | `--sapField_WarningColor` |
| Success | `--sapField_SuccessBackground` | `--sapField_SuccessColor` |
| Information | `--sapField_InformationBackground` | `--sapField_InformationColor` |

## Typography Variables

| Variable | Description |
|----------|-------------|
| `--sapFontFamily` | Default font family |
| `--sapFontSize` | Default font size |
| `--sapFontSizeSmall` | Small font size (`0.75rem`) |
| `--sapFontMediumSize` | Medium font size |
| `--sapFontLargeSize` | Large font size |
| `--sapFontHeader1Size` | H1 font size |
| `--sapFontHeader2Size` | H2 font size |
| `--sapFontHeader3Size` | H3 font size |
| `--sapFontHeader4Size` | H4 font size |
| `--sapFontHeader5Size` | H5 font size |
| `--sapFontHeader6Size` | H6 font size |
| `--sapContent_LineHeight` | Default line height (`1.5`) |

## Shadow Variables

| Variable | Description |
|----------|-------------|
| `--sapContent_Shadow0` | Subtle shadow (cards) |
| `--sapContent_Shadow1` | Light shadow |
| `--sapContent_Shadow2` | Medium shadow (popovers) |
| `--sapContent_Shadow3` | Heavy shadow (dialogs) |
| `--sapContent_HeaderShadow` | Header shadow |

## Border & Corner Variables

| Variable | Description |
|----------|-------------|
| `--sapElement_BorderCornerRadius` | Default border radius |
| `--sapField_BorderCornerRadius` | Input field border radius |
| `--sapButton_BorderCornerRadius` | Button border radius |
| `--sapTile_BorderCornerRadius` | Tile/card border radius (`0.5rem`) |

## Chart Colors

For data visualization, use the chart sequence colors:

| Variable | Description |
|----------|-------------|
| `--sapChart_Sequence_1` | Chart color 1 |
| `--sapChart_Sequence_2` | Chart color 2 |
| `--sapChart_Sequence_3` | Chart color 3 |
| `--sapChart_Sequence_4` | Chart color 4 |
| `--sapChart_Sequence_5` | Chart color 5 |
| `--sapChart_Sequence_6` | Chart color 6 |
| `--sapChart_Sequence_7` | Chart color 7 |
| `--sapChart_Sequence_8` | Chart color 8 |
| `--sapChart_Sequence_9` | Chart color 9 |
| `--sapChart_Sequence_10` | Chart color 10 |
| `--sapChart_Sequence_Neutral` | Neutral chart color |

## Tab Colors

| Variable | Description |
|----------|-------------|
| `--sapTab_Background` | Tab background |
| `--sapTab_TextColor` | Tab text color |
| `--sapTab_Selected_Background` | Selected tab background |
| `--sapTab_Selected_TextColor` | Selected tab text |
| `--sapTab_IconColor` | Tab icon color |
| `--sapTab_ForegroundColor` | Tab foreground/indicator |

## Usage Best Practices

### ✅ Do
```css
.my-component {
  /* Use theme variables */
  color: var(--sapTextColor);
  background: var(--sapBackgroundColor);
  padding: var(--MediaSizeIndentation);
  border-radius: var(--sapElement_BorderCornerRadius);
  font-size: var(--sapFontSize);
  gap: var(--FuroUi5GridGapSize);
}

.error-message {
  color: var(--sapNegativeColor);
}

.success-badge {
  background: var(--sapPositiveColor);
}
```

### ❌ Don't
```css
.my-component {
  /* Avoid hardcoding values */
  color: #333333;           /* Use --sapTextColor */
  background: #ffffff;      /* Use --sapBackgroundColor or another background color */
  padding: 16px 24px;       /* Use --MediaSizeIndentation */
  border-radius: 8px;       /* Use --sapElement_BorderCornerRadius */
  font-size: 14px;          /* Use --sapFontSize */
  gap: 16px;                /* Use --FuroUi5GridGapSize */
}

.error-message {
  color: red;               /* Use --sapNegativeColor */
}
```

## Import

The style variables are automatically available when using furo-ui5 components. If you need to apply them in standalone components:

```typescript
import MediaSizeIndentation from "@furo/ui5/Assets";

// In your component
static styles = [
  // Your component styles - variables will be inherited from :root
  css`
    :host {
      padding: var(--MediaSizeIndentation);
    }
  `
];
```

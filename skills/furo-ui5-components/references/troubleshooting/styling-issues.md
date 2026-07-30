# Styling Issues

## Hardcoded Colors Not Matching Theme
❌ **Problem**: Custom colors don't match the theme.
```css
.error { color: red; }
.panel { background: #f5f5f5; }
```

✅ **Solution**: Use CSS custom properties.
```css
.error { color: var(--sapNegativeColor); }
.panel { background: var(--sapBackgroundColor); }
```

## Inconsistent Spacing
❌ **Problem**: Hardcoded padding/margin values.
```css
.container { padding: 16px 24px; }
```

✅ **Solution**: Use responsive spacing variables.
```css
.container { padding: var(--MediaSizeIndentation); }
```

## Component Height Issues
❌ **Problem**: Page doesn't fill available height.

✅ **Solution**: Ensure height chain from `:host` to content.
```css
:host {
  display: block;
  height: 100%;
}
```
```html
<furo-vertical-flex style="height: 100%">
  <header>Fixed</header>
  <main flex scroll>Fills remaining space</main>
  <footer>Fixed</footer>
</furo-vertical-flex>
```

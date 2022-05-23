---
booksearchexclude: false
bookToc: false
bookHidden: true
---

You can bind the options, or enter the options in the html

<furo-ui5-combobox placeholder="Enter value">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

<furo-ui5-combobox value-state="Success" value="Item 1">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

<furo-ui5-combobox value-state="Warning" value="Item 2">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

```html

<furo-ui5-combobox 
  placeholder="Enter value" 
  fn-bind-data="--entity(*.data.description)">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

<furo-ui5-combobox 
  value-state="Success"
  fn-bind-data="--entity(*.data.item1)">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

<furo-ui5-combobox 
  value-state="Warning"
  value="Item 2" 
  fn-bind-data="--entity(*.data.item2)">
	<ui5-cb-item text="Item 1"></ui5-cb-item>
	<ui5-cb-item text="Item 2"></ui5-cb-item>
	<ui5-cb-item text="Item 3"></ui5-cb-item>
</furo-ui5-combobox>

```

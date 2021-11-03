---
title: furo-ui5-data-checkbox-input
description: data checkbox input field
weight: 50
---

# furo-ui5-data-checkbox-input
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-data-checkbox-input.js';`<small>
<br>exports *FuroUi5DataCheckboxInput* js
<br>exports `<furo-ui5-data-checkbox-input>` custom-element-definition
<br>extends *src/furo-ui5-data-checkbox-input.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-data-checkbox-input-head.md" %}}

**data checkbox input field**

The 'furo-ui5-data-checkbox-input' component allows the user to switch true and false for Bool with data binding.

It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).

You can bind `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue` type.

 CHANGELOG.md README.md assets coverage custom-elements-manifest.config.mjs custom-elements.json demos hugo move node_modules package-lock.json package.json scripts src test tmp web-dev-server.config.mjs web-test-runner.config.mjs ```html
 <furo-ui5-data-checkbox-input
 ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 ></furo-ui5-data-checkbox-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta 	| fat 	| html 	|
|------	|-----	|------	|
| 1 	| 10 	| 100 	|


## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled

## supported meta and constraints
- **readonly: true** , set the element to readonly

The constraint **required** will mark the element as required

```

{{% api "_furo-ui5-data-checkbox-input-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-data-checkbox-input-properties.md" %}}




















## Methods
{{% api "_furo-ui5-data-checkbox-input-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.

<br><br>




















{{% api "_furo-ui5-data-checkbox-input-footer.md" %}}
{{% api "_furo-ui5-data-checkbox-input-scripts.md" %}}
---
title: furo-ui5-propertylist-display
description: 
weight: 50
---

# furo-ui5-propertylist-display
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-propertylist-display.js';`<small>
<br>exports *FuroUi5PropertylistDisplay* js
<br>exports `<furo-ui5-propertylist-display>` custom-element-definition
<br>superclass *LitElement*</small>

{{% api "_furo-ui5-propertylist-display-head.md" %}}

****

`furo-ui5-propertylist-display` allows the user to show repeated properties (furo.Property) in a readonly mode.
For all other types you can use furo-ui5-typerenderer-labeled.

The type information of the property is used for the display of the individual attributes.
E.g.
```
[
 {
   "code": "c0a7f550-0fbe-4046-8fa9-60c86327b6b1",
   "data": {
      "@type": "type.googleapis.com/furo.StringProperty",
     "data": "01032020"
   },
   "flags": [],
   "display_name": "Vertragsbeginn",
   "id": "246d79a0-0a15-43c5-b18f-ac8a4a449df1",
   "meta": {}
 }
]
```

You can bind the furo.Property type (single and repeated).

```html
 <furo-ui5-propertylist-display
    ƒ-bind-data="--daoCountry(*.data.additional_data)"
 ></furo-ui5-propertylist-display>
```

{{% api "_furo-ui5-propertylist-display-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-propertylist-display-properties.md" %}}




## Methods
{{% api "_furo-ui5-propertylist-display-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `boolean`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a RepeaterNode of type furo.Property.

- <small>fieldNode </small>
<br><br>




{{% api "_furo-ui5-propertylist-display-footer.md" %}}
{{% api "_furo-ui5-propertylist-display-scripts.md" %}}

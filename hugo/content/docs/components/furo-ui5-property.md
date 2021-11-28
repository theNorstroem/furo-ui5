---
title: furo-ui5-property
description: ????? bind types of type any
weight: 50
---

# furo-ui5-property
**@furo/components** <small>v1.0.0-rc.8</small>
<br>`import '@furo/components/src/furo-ui5-property.js';`<small>
<br>exports *FuroUi5Property* js
<br>exports `<furo-ui5-property>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** ????? bind types of type any

## Description

`furo-ui5-property`
 Field for type **furo.Property**. This can be used to display "dynamic" fields aka properties.

 `furo-ui5-property` works with repeated types and non repeating property types.

 ```html
 <furo-ui5-property ƒ-bind-data="--entity(*.single_type_property)"></furo-ui5-property>
 ```

 **Example data for the data-object looks like this**

 ```json
 "single_type_property": {
   "data": {
     "@type": "google.type.Date",
     "day": 8,
     "month":  11,
     "year": 2022
   },
   "display_name": "a date",
   "id": "date",
   "code": "date",
   "meta": {
     "fields": {
       "data": {
         "meta": {
           "label": "Additional fields",
           "hint": "this is data"
         },
         "constraints": {
           "min": {
             "value": "2019-09-09",
             "message": "to small"
           }
         }
       }
     }
   }
 }
 ```

{{% api "_furo-ui5-property-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-property-properties.md" %}}





### **context**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">context</span>
<small>`string` default: **&#39;form&#39;**</small>

Set the context, for the renderers.
<br><br>

## Methods
{{% api "_furo-ui5-property-methods.md" %}}


### **bindData**
<small>**bindData**(*propertyField* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>



- <small>propertyField </small>
<br><br>






{{% api "_furo-ui5-property-footer.md" %}}
{{% api "_furo-ui5-property-scripts.md" %}}

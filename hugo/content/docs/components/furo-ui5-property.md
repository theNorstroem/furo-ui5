---
title: furo-ui5-property
description: display and bind types of type any
weight: 50
---

# furo-ui5-property
**@furo/components** <small>v1.0.0-rc.5</small>
<br>`import '@furo/components/src/furo-ui5-property.js';`<small>
<br>exports *FuroUi5Property* js
<br>exports `<furo-ui5-property>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-property-head.md" %}}

**display and bind types of type any**

`furo-ui5-property`
 Field for type furo.Property. This can be used to display "dynamic" fields aka properties.
 It works with repeated types and non repeating property types.

 ```html
 <furo-ui5-property ƒ-bind-data="--entity(*.single_type_property)"></furo-ui5-property>
 ```

 ## Example data for the data-object looks like this

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
## Example StringOptions Field

```json
{
  "data": {
       "@type": "furo.StringOptionProperty",
       "id": "bb",
       "display_name": "Display"
     },
     "display_name": "Display",
     "id": "opt",
     "code": "option",
     "meta": {
       "fields": {
         "data": {
           "meta": {
             "label": "Please select",
             "hint": "datehint is data",
             "repeated": false,
             "options": [
               {
                 "id": "aa",
                 "display_name": "The display a"
               },
               {
                 "id": "bb",
                 "display_name": "The display b"
               }
             ]
           }
         }
       }
     }
   }

```

 The current type mappings are:

- "google.type.Date": "furo-ui5-date-input"
- "furo.StringProperty": "furo-ui5-text-input"
- "furo.IntegerProperty": "furo-ui5-number-input"
- "furo.NumberProperty": "furo-ui5-number-input"
- "furo.StringOptionProperty": "furo-ui5-collection-dropdown"

{{% api "_furo-ui5-property-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-property-properties.md" %}}





### **context**
default: **&#39;form&#39;**</small>


<br><br>

## Methods
{{% api "_furo-ui5-property-methods.md" %}}


### **bindData**
<small>**bindData**(*propertyField* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>



- <small>propertyField </small>
<br><br>

### **_createPropComponent**
<small>**_createPropComponent**(*propertyField* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--create-prop-component</span>



- <small>propertyField </small>
<br><br>





{{% api "_furo-ui5-property-footer.md" %}}
{{% api "_furo-ui5-property-scripts.md" %}}

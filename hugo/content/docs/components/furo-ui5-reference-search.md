---
title: furo-ui5-reference-search
description: furo ui5 data reference search
weight: 50
---

# furo-ui5-reference-search
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/furo-ui5-reference-search.js';`<small>
<br>exports *FuroUi5ReferenceSearch* js
<br>exports `<furo-ui5-reference-search>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** furo ui5 data reference search

## Description

The furo-ui5-reference-search is a search input field with the capability to open and extended search component.

Bound data must fullfill the furo.Reference signature. The service, deeplink,... is taken from the spec of your field.
Do not forget to specify.

 *default usage*
```html
  <furo-ui5-reference-search
  fn-bind-data="--data(*.is_person)"
  ></furo-ui5-reference-search>
```

 *usage with an extended searcher*
```html
  <furo-ui5-reference-search
  extended-searcher="country-filter"
  fn-bind-data="--data(*.is_person)"
  ></furo-ui5-reference-search>
```

 *usage example for a non default response*
```html
  <furo-ui5-reference-search
  extended-searcher="contact-filter"
  search-response-path="xx_entities"
  value-field-path="data.xx_id"
  display-field-path="data.xx_display_name"
  fn-bind-data="--data(*.is_person)"
  ></furo-ui5-reference-search-labeled>
```

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **max:"number"** set the maximum number of characters available in the input field.

The constraint **required** will mark the element as required

If your type has a *reference* type signature ('id','display_name', 'link'), the service, and initial deep link is extracted from
the link part of your type.

If you bind a scalar field, the value which is set in 'valueFieldPath' will be set.

When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

## Specs
Define a proper default value on the reference type.

```yaml
link:
type: furo.Link
description: HTS for the initial search (the default works on root resources only)
__proto:
   number: 3
__ui: null
meta:
  default: |
    {
         "rel": "list",
         "href": "/contacts",
         "method": "GET",
         "type": "contact.Contact",
         "service": "contact.Contacts"
     }
  placeholder: ""
  hint: ""
  label: contact.Reference.link.label
  options:
    flags: []
    list: []
  readonly: false
  repeated: false
  typespecific: null

```
### API of an extended searcher
### Searcher Methods
The only method you have to implement is **htsIn**. The reference-search will pass its own hts to the extended
searcher. A call on qpIn on the searcher will also pass the resulting hts to the extended searcher.

### Extended Searcher Events
Fire a **record-selected** to set the item on the reference-search.
Fire a **escape-filter-panel** to close the extended search.

{{% api "_furo-ui5-reference-search-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-reference-search-properties.md" %}}








### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
<small>`string` default: **&#39;&#39;**</small>

setter for the service
<br><br>





















### **searchResponsePath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">search-response-path</span>
<small>`string` default: **&#39;entities&#39;**</small>

Path to the node in the response value which contains the array with the selection items.
By default this goes to *entitites*
<br><br>

### **valueFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-field-path</span>
<small>`string` default: **&#39;data.id&#39;**</small>

Path to response value item which is used for the id.
By default this goes to *data.id*
<br><br>

### **displayFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">display-field-path</span>
<small>`string` default: **&#39;data.display_name&#39;**</small>

Path to selection value node which is used for the display.
By default this goes to *data.display_name*
<br><br>

### **extendedValueFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-value-field-path</span>
<small>`string` default: **&#39;data.id&#39;**</small>

Path to response value item of the extended search which is used for the id.
By default this goes to *data.id*.
Only needed when your extended searcher does not have the id, display_name signature in the response.
<br><br>

### **extendedDisplayFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-display-field-path</span>
<small>`string` default: **&#39;data.display_name&#39;**</small>

Path to response value item of the exteded search which is used for the display.
By default this goes to *data.display_name*.
Only needed when your extended searcher does not have the id, display_name signature in the response.
<br><br>

### **maxItemsToDisplay**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">max-items-to-display</span>
<small>`number` default: **8**</small>

The maximal number of items to display.

This value will be set as page-size query-param for the backend.

If the response contains hts information with rel *next* a "load more" button will be displayed at the end
of the list.
<br><br>

### **value**
default: **{ id: &#39;&#39;, display_name: &#39;&#39; }**</small>


<br><br>

### **minTermLength**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">min-term-length</span>
<small>`number` default: **2**</small>

The minimal length of search term to trigger a search.
<br><br>

### **debounceTimeout**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">debounce-timeout</span>
<small>`number` default: **250**</small>

wait for this time between keystrokes to trigger a search to the service
<br><br>

### **placeholder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder</span>
<small>`string` default: **&#39;&#39;**</small>

Overrides the hint text from the **specs**.

Use with caution, normally the specs defines this value.
<br><br>

### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

Overrides the label text from the **specs**.

Use with caution, normally the specs defines this value.
<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-data-text</span>
<small>`string` default: **&#39;no result found&#39;**</small>

hint text when result not found by search
<br><br>



### **disableSearchList**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disable-search-list</span>
<small>`boolean` default: **false**</small>

A Boolean attribute which, if present, means this field can not be searched.

This is very useful when you want enforce the usage of the extended search
<br><br>

### **icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon</span>
<small>`string` default: **&#39;search&#39;**</small>

Use this attribute to set a custom icon for your searcher
<br><br>


### **valueState**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-state</span>
<small>`string` default: **&#39;None&#39;**</small>

Value State of the input field
<br><br>




### **method**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">method</span>
<small>`String` </small>

Set the method. This is only needed when your service is not named "List".
This is not the http method.
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span> <small>**reflects**</small>
<small>`Boolean` </small>

Overrides the required value from the **specs**.

Use with caution, normally the specs defines this value.
<br><br>

### **searchOnEnterOnly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">search-on-enter-only</span>
<small>`Boolean` </small>

Enable this, to avoid the automatic triggering of "search".

The user have to press enter to trigger the search. Min-term-length is respected.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
<small>`Boolean` </small>

Overrides the readonly value from the **specs**.

Use with caution, normally the specs defines this value.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
<small>`Boolean` </small>

Disable
<br><br>

### **busy**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">busy</span>
<small>`Boolean` </small>

This is used to activate the loading indicator.
<br><br>

### **extendedSearcher**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-searcher</span>
<small>`String` </small>

Define the extended searcher. Do not forget to import the searcher you want to use.
<br><br>
## Events
{{% api "_furo-ui5-reference-search-events.md" %}}

### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-item-selected</span>
→ <small>``Object` the complete item`</small>

 Fired when a item was selected from the list.
<br><br>
### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-change</span>
→ <small>``text``</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **input**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-input</span>
→ <small>``</small>

 Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
<br><br>

## Methods
{{% api "_furo-ui5-reference-search-methods.md" %}}





### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a FieldNode to the component.

Supported types: can be a scalar type or any complex type with 'id','display_name' signature or use
the furo.Reference type.

- <small>fieldNode </small>
<br><br>





### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus</span>

focuses the input field

<br><br>

### **triggerSearch**
<small>**triggerSearch**(*term* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-search</span>

triggerSearch search for a term

- <small>term </small>
<br><br>







### **onFnaFieldStateChanged**
<small>**onFnaFieldStateChanged**(*state* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-on-fna-field-state-changed</span>

set the value state

- <small>state </small>
<br><br>





### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-read-attributes</span>

Reads the attributes which are set on the component dom.

Following attributes can be set:
- `value-state`
- `value-state-message`
- `icon`
- `placeholder`
- `label`
- `required`
- `readonly`
- `disabled`

Use this after manual or scripted update of the attributes.

<br><br>

### **htsIn**
<small>**htsIn**(*hts* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-hts-in</span>

htsIn sets the HTS for the collection-agent.

This is only needed if you want to have fine grained control over the hts

- <small>hts </small>
<br><br>

### **qpIn**
<small>**qpIn**(*qp* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-qp-in</span>

qpIn Use this to set query params manualy

- <small>qp </small>
<br><br>

### **setFilter**
<small>**setFilter**(*filter* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-filter</span>

Sets the filter.
Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side
or do btoa(JSON.stringify(FILTER))

- <small>filter </small>
<br><br>

### **clearResultList**
<small>**clearResultList**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear-result-list</span>

clears the result set

<br><br>































## Styling
{{% api "_furo-ui5-reference-search-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-reference-search-list-background` | background color of the result list <hr> <small>default: `--surface`</small> <small>fallback: `#ffffff`</small>

{{% api "_furo-ui5-reference-search-footer.md" %}}
{{% api "_furo-ui5-reference-search-scripts.md" %}}

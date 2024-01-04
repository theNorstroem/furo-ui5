---
title: furo-ui5-views
description: Manage views
weight: 50
---

# furo-ui5-views
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/furo-ui5-views/furo-ui5-views.js';`<small>
<br>exports *FuroUi5Views* js
<br>exports `<furo-ui5-views>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Manage views

## Description

`furo-ui5-views` allows you to manage custom views. This includes filter settings and table orders.

Tab orders are not implemented at the moment.

The user settings are stored in the `local storage`, session data in the `session storage`. Feel free to extend the `furo-ui5-views`
component to store the settings anywhere else by overriding the `saveData` method.

`furo-ui5-views` manages the view data


```html
<furo-ui5-views
        view-id="vid.list-report"
        fn-inject-default="|--defaultData"
        fn-set-filter-ref="|--formRef"
        at-current-view="--CurrentViewSettingDO"
        at-raw-filter-data="--filterData"
        fn-show-at="--showViewDialogClicked"
></furo-ui5-views>

<furo-ui5-views-filter-settings
        fn-show="--setFilterClicked"
        fn-bind-settings="--CurrentViewSettingDO"
        fn-bind-filter="--filterDO"
></furo-ui5-views-filter-settings>

 <furo-ui5-views-table-settings
        row-type="project.Project"
        fn-show="--ShowTableSettingsClicked"
        fn-bind-settings="--CurrentViewSettingDO"
        at-fields-changed="--reqFieldsChanged"
        at-order-by-changed="--fieldSortChanged"
        at-order-changed="--columnOrderChanged"
        required-fields="id"
        sortable
      ></furo-ui5-views-table-settings>

       <furo-ui5-filtered-table
            fn-bind-data="--collectionDao(*.entities)"
            fn-set-columns="--columnOrderChanged"
            mode="SingleSelect"
          >
          ...
       </furo-ui5-filtered-table>
```
Inject the default

## Specs

You have to import the furo-ui5-specs or add the following muspec to your spec project.

*.furo*
```yaml
dependencies:
- "https://github.com/theNorstroem/furo-ui5-specs.git v1.0.0"
```

*µSpecs*
```yaml
- type: 'furo.view.PersonalView #'
  fields:
    id: 'string:1 #'
    views: '[] furo.view.ViewSettings:2'

- type: 'furo.view.ViewSettings #'
  fields:
    id: 'string:1 #id'
    name: 'string:2 #Textual identifier'
    is_favorite: 'bool:3'
    is_standard: 'bool:4'
    auto_apply: 'bool:5'
    created_by: 'string:6'
    editable: 'bool:7 #'
    filter_settings: '[] furo.view.FilterItem:8'
    filter_object: 'google.protobuf.Any:9 #Contains the filter Object'
    table_settings: '[] furo.view.TableColumn:10'
    order_by: 'string:11 # sort order, comma separated list of field names'
    group_by: 'string:11 # group by'


- type: 'furo.view.FilterItem #Filter object'
  fields:
    field_name: 'string:1'
    show: 'bool:2 #show hide'

- type: 'furo.view.TableColumnSortRow #TableColumn '
  fields:
    id: 'string:1'
    display_name: 'string:2 #'
    descending: 'bool:3 #'
    options: '[] furo.Optionitem:4'

- type: 'furo.view.TableColumn #TableColumn '
  fields:
    field_name: 'string:1'
    show: 'bool:2 #show hide'
    sortable: 'bool:3 # set this to true if the field is sortable'
    groupable: 'bool:4 # set this to true if the field is groupable'
    label: 'string:5 # set this to true if the field is groupable'

- type: 'furo.view.SaveAsDialog #Filter object'
  fields:
    name: '* string:1'
    is_favorite: 'bool:3'
    is_standard: 'bool:4'
    auto_apply: 'bool:5'
```

Describe the filterable fields and sortable table columns.

*sample data*
```js
export const Settings = {
  "views": [
    {
      "id": "default",
      "name": "Standard",
      "is_favorite": true,
      "is_standard": true,
      "auto_apply": true,
      "created_by": "Furo",
      "editable": false,
      "filter_settings": [


        {
          "field_name": "description",
          "show": true
        },
        {
          "field_name": "start",
          "show": true
        },
        {
          "field_name": "end",
          "show": true
        },
        {
          "field_name": "members",
          "show": true
        }
      ],
      "filter_object": {
        "description": null,
        "start": null,
        "end": null,
        "members": null
      },
      "table_settings": [
        {
          "field_name": "id",
          "show": false,
          "sortable" : true
        },
        {
          "field_name": "display_name",
          "show": true,
          "sortable" : true
        },
        {
          "field_name": "description",
          "show": true,
          "sortable" : true
        },
        {
          "field_name": "start",
          "show": false
        },
        {
          "field_name": "end",
          "show": false
        },
        {
          "field_name": "members",
          "show": true,
          "sortable" : true
        }
      ],
      "order_by": "",
      "group_by": ""
    }
  ]
}

```

{{% api "_furo-ui5-views-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-views-properties.md" %}}










### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
<small>`string` default: **&#39;My Views&#39;**</small>

Title of the dialog for "views"
<br><br>

### **saveAsHeaderText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">save-as-header-text</span>
<small>`string` default: **&#39;Save View&#39;**</small>

Title of the "save as" dialog.
<br><br>

### **checkoxSetDefault**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">checkbox-set-default</span>
<small>`string` default: **&#39;Set as Default&#39;**</small>

Checkbox label for set as default on save as dialog.
<br><br>

### **checkoxApplyAutomatically**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">checkbox-apply-automatically</span>
<small>`string` default: **&#39;Apply Automatically&#39;**</small>

Checkbox label for apply automatically on save as dialog.
<br><br>

### **manageButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">manage-button-text</span>
<small>`string` default: **&#39;Manage&#39;**</small>

Button label to open the manage view dialog.
<br><br>

### **saveButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">save-button-text</span>
<small>`string` default: **&#39;Save&#39;**</small>

Button label for save.
<br><br>

### **saveAsButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">save-as-button-text</span>
<small>`string` default: **&#39;Save As&#39;**</small>

Button label for save as.
<br><br>

### **cancelButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">cancel-button-text</span>
<small>`string` default: **&#39;Cancel&#39;**</small>

Button label for cancel action.
<br><br>

### **manageViewHeaderText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">manage-view-header-text</span>
<small>`string` default: **&#39;Manage Views&#39;**</small>

Title of the manage-view dialog.
<br><br>

### **placeholderSearch**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder-search</span>
<small>`string` default: **&#39;Search&#39;**</small>

placeholder for search fields.
<br><br>

### **colheaderDefault**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-default</span>
<small>`string` default: **&#39;Default&#39;**</small>

Column header for "default".
<br><br>

### **colheaderApply**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-apply</span>
<small>`string` default: **&#39;Apply Automatically&#39;**</small>

Column header for "apply automatically".
<br><br>

### **colheaderCreator**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-creator</span>
<small>`string` default: **&#39;Created By&#39;**</small>

Column header for "created by".
<br><br>

### **colheaderView**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-view</span>
<small>`string` default: **&#39;View&#39;**</small>

Column header for "view name".
<br><br>

### **okButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">ok-button-text</span>
<small>`string` default: **&#39;Ok&#39;**</small>

Button label for "Ok" action
<br><br>

### **viewId**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">view-id</span>
<small>`string` </small>

This is the id vor the view, this key is used to store the search filters in the session storage.
<br><br>
## Events
{{% api "_furo-ui5-views-events.md" %}}

### **search-triggered**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-search-triggered</span>
→ <small>`Event`</small>


<br><br>

## Methods
{{% api "_furo-ui5-views-methods.md" %}}


### **showAt**
<small>**showAt**(*ref* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show-at</span>

show opens the view

- <small>ref </small>
<br><br>

### **setFilterRef**
<small>**setFilterRef**(*ref* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-filter-ref</span>

set the ref to the filter form

- <small>ref </small>
<br><br>

### **injectDefault**
<small>**injectDefault**(*data* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject-default</span>

Inject the default settings. This is a set of predefined filters and columns.

- <small>data </small>
<br><br>



### **loadData**
<small>**loadData**() ⟹ `string`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-load-data</span>

Loads the stored data. Extend and override, if you need another storage mechanism.
The data is stored in local storage under the defined view-id.

<br><br>

### **saveData**
<small>**saveData**(*data* `` ) ⟹ `string`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-save-data</span>

Stores the settings. Extend and override, if you need another storage mechanism.
The data is stored in local storage under the defined view-id.

- <small>data </small>
<br><br>




















{{% api "_furo-ui5-views-footer.md" %}}
{{% api "_furo-ui5-views-scripts.md" %}}

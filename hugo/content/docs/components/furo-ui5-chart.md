---
title: furo-ui5-chart
description: connect data to a chart
weight: 50
---

# furo-ui5-chart
**@furo/ui5** <small>v1.16.2</small>
<br>`import '@furo/ui5/src/furo-ui5-chart.js';`<small>
<br>exports *FuroUi5Chart* js
<br>exports `<furo-ui5-chart>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** connect data to a chart

## Description

furo-ui5-chart connects data objects (repeaterNodes) with the charting lib.

 Use multiple binders if you need more then one series per chart.

 ```html
 <furo-ui5-chart-display chart-type="bar">
    <furo-ui5-chart
        fn-bind-data="--projectDAO(*.entities)"
        data-field="data.cost_limit.units"
        category-field="data.description"
    ></furo-ui5-chart>
 </furo-ui5-chart-display>
 ```

{{% api "_furo-ui5-chart-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-chart-properties.md" %}}



### **axisLabelOpposite**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label-opposite</span>
<small>`Boolean` </small>

Put the axis label on the opposite site (usually right)
<br><br>

### **axisLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label</span>
<small>`String` </small>

Text for the y axis
<br><br>

### **axisLabelColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label-color</span>
<small>`String` </small>

Custom color for the y axis description text
<br><br>

### **axisBorder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-border</span>
<small>`Boolean` </small>

Show a border on the right side of the y axis descriptions and labels.
<br><br>

### **axisBorderColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-border-color</span>
<small>`String` </small>

Custom color for the border.
<br><br>

### **axisTicks**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-ticks</span>
<small>`Boolean` </small>

Show tick marks on the y axis.
<br><br>

### **axisTooltip**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-tooltip</span>
<small>`Boolean` </small>

Show a tooltip with the current value while hovering.
<br><br>

### **axisTicksColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-ticks-color</span>
<small>`String` </small>

Custom color for the ticks
<br><br>

### **seriesName**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">series-name</span>
<small>`String` </small>

Series with same name will get the same y-axis
<br><br>

### **legendLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-label</span>
<small>`String` </small>

Label the Series for the legend. This text is also shown on the tooltips. This is useful when you have more then one data series.
<br><br>







### **strokeWidth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-stroke-width</span>
<small>`number` default: **1**</small>

Define the thickness of the lines in px.
<br><br>

### **markerSize**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-marker-size</span>
<small>`number` default: **0**</small>

Set the size of the markers (hover state) in px.
<br><br>

### **strokeCurve**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-curve</span>
<small>`string` default: **&#39;straight&#39;**</small>

Define the curve style for line and area charts.

 Possible values: `smooth`, `straight`,  `stepline`
<br><br>


### **dataField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">data-field</span>
<small>`String` </small>

Define the data field or fields here. For most charts this is **the y axis**.

Some charts requires more then one data field (i.e. bubbles want at least 3 fields `data-field="data.start.day, data.end.day, data.start.day"` ).
<br><br>

### **categoryField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">category-field</span>
<small>`String` </small>

Define the category field here (only 1 field). You can think of this as it is the x axis for your chart.
<br><br>

### **chartType**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-type</span>
<small>`String` </small>

**Use this for mixed charts scenarios only**, prefer to define the chart-type on the chart-display.
Specify the default type on the display and set the custom type on this binder.
<br><br>

### **chartColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-color</span>
<small>`String` </small>

If you need to give an explicit color for the series you can use this attribute.
<br><br>

### **xaxis**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">xaxis</span>
<small>`String` </small>


<br><br>
## Events
{{% api "_furo-ui5-chart-events.md" %}}

### **data-point-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-data-point-clicked</span>
→ <small>`Fieldnode`</small>

 Fired when a marker for this data source was clicked
<br><br>
### **data-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-data-updated</span>
→ <small>`data-series`</small>

 Fired when datasource has updated data
<br><br>

## Methods
{{% api "_furo-ui5-chart-methods.md" %}}












### **bindData**
<small>**bindData**(*data* `RepeaterNode` ) ⟹ `void`</small>

<small>`RepeaterNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a RepeaterNode to the component.

Supported types: repeated types

- <small>data </small>
<br><br>


















{{% api "_furo-ui5-chart-footer.md" %}}
{{% api "_furo-ui5-chart-scripts.md" %}}

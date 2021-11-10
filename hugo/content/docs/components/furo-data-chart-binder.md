---
title: furo-data-chart-binder
description: connect data to a chart
weight: 50
---

# furo-data-chart-binder
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-data-chart-binder.js';`<small>
<br>exports `<furo-data-chart-binder>` custom-element-definition
<br>superclass *LitElement*</small>

{{% api "_furo-data-chart-binder-head.md" %}}

**connect data to a chart**

`furo-data-chart-binder`
 Connects data objects (repeaterNodes) with the charting lib.

 Use multiple binders if you need more then one series per chart.

 ```html
 <furo-chart-display chart-type="bar">
    <furo-data-chart-binder
        ƒ-bind-data="--projectDAO(*.entities)"
        data-field="data.cost_limit.units"
        category-field="data.description"
    ></furo-data-chart-binder>
 </furo-chart-display>
 ```

{{% api "_furo-data-chart-binder-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-chart-binder-properties.md" %}}



### **axisLabelOpposite**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label-opposite</span>
</small>

Put the axis label on the opposite site (usually right)
<br><br>

### **axisLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label</span>
</small>

Text for the y axis
<br><br>

### **axisLabelColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-label-color</span>
</small>

Custom color for the y axis description text
<br><br>

### **axisBorder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-border</span>
</small>

Show a border on the right side of the y axis descriptions and labels.
<br><br>

### **axisBorderColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-border-color</span>
</small>

Custom color for the border.
<br><br>

### **axisTicks**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-ticks</span>
</small>

Show tick marks on the y axis.
<br><br>

### **axisTooltip**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-tooltip</span>
</small>

Show a tooltip with the current value while hovering.
<br><br>

### **axisTicksColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">axis-ticks-color</span>
</small>

Custom color for the ticks
<br><br>

### **seriesName**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">series-name</span>
</small>

Series with same name will get the same y-axis
<br><br>

### **legendLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-label</span>
</small>

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

 Possible values: 'smooth', 'straight',  'stepline'
<br><br>

### **options**
default: **{
      seriesName: undefined,
      legendLabel: undefined, // custom field
      opposite: false,
      axisTicks: {
        show: false,
        borderType: &#39;solid&#39;,
        color: &#39;#666666&#39;,
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      axisBorder: {
        show: false,
        color: &#39;#666666&#39;,
        stroke: 1,
      },
      labels: {
        show: false,
        style: {
          colors: &#39;#666666&#39;,
        },
      },
      title: {
        style: {
          color: &#39;#666666&#39;,
        },
      },
      tooltip: {
        enabled: false,
        offsetX: 0,
      },
    }**</small>


<br><br>

### **dataField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">data-field</span>
</small>

Define the data field or fields here. For most charts this is **the y axis**.

Some charts requires more then one data field (i.e. bubbles want at least 3 fields `data-field="data.start.day, data.end.day, data.start.day"` ).
<br><br>

### **categoryField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">category-field</span>
</small>

Define the category field here (only 1 field). You can think of this as it is the x axis for your chart.
<br><br>

### **chartType**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-type</span>
</small>

**Use this for mixed charts scenarios only**, prefer to define the chart-type on the chart-display.
Specify the default type on the display and set the custom type on this binder.
<br><br>

### **chartColor**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-color</span>
</small>

If you need to give an explicit color for the series you can use this attribute.
<br><br>

### **xaxis**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">xaxis</span>
</small>


<br><br>
## Events
{{% api "_furo-data-chart-binder-events.md" %}}

### **data-point-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-point-clicked</span>
→ <small>`Fieldnode`</small>

 Fired when a marker for this data source was clicked
<br><br>
### **data-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-updated</span>
→ <small>`data-series`</small>

 Fired when datasource has updated data
<br><br>

## Methods
{{% api "_furo-data-chart-binder-methods.md" %}}












### **bindData**
<small>**bindData**(*data* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>



- <small>data </small>
<br><br>

### **_dataPointSelection**
<small>**_dataPointSelection**(*e* `` *context* `` *config* `` ) ⟹ `void`</small>

<small>`` `` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--data-point-selection</span>



- <small>e </small>
- <small>context </small>
- <small>config </small>
<br><br>


### **_initEmptySeries**
<small>**_initEmptySeries**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--init-empty-series</span>



<br><br>

### **_pathGet**
<small>**_pathGet**(*root* `Object` *path* `string | !Array&lt;string|number&gt;` ) ⟹ `*`</small>

<small>`Object` `string | !Array&lt;string|number&gt;` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--path-get</span>

Reads a value from a path.  If any sub-property in the path is `undefined`,
this method returns `undefined` (will never throw.

- <small>root Object from which to dereference path from</small>
- <small>path Path to read</small>
<br><br>

### **_split**
<small>**_split**(*path* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--split</span>



- <small>path </small>
<br><br>













{{% api "_furo-data-chart-binder-footer.md" %}}
{{% api "_furo-data-chart-binder-scripts.md" %}}

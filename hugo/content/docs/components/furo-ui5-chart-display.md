---
title: furo-ui5-chart-display
description: Display charts with data objects
weight: 50
---

# furo-ui5-chart-display
**@furo/ui5** <small>v1.4.3</small>
<br>`import '@furo/ui5/src/furo-ui5-chart-display.js';`<small>
<br>exports `<furo-ui5-chart-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Display charts with data objects

## Description

The furo-ui5-chart-display is the render component
to display charts with apex the apex charts lib (https://github.com/apexcharts/apexcharts.js).

 Use `furo-ui5-chart` to connect your data.

 ```html
 <furo-ui5-chart-display chart-type="bar">
    <furo-ui5-chart
        ƒ-bind-data="--projectDAO(*.entities)"
        data-field="data.cost_limit.units"
        category-field="data.description"
    ></furo-ui5-chart>
 </furo-ui5-chart-display>
 ```

{{% api "_furo-ui5-chart-display-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-chart-display-properties.md" %}}



### **sparkline**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">sparkline</span>
</small>

Hides all elements of the chart other than the primary graphic.
Use this to visualize data in very small areas.
<br><br>

### **xaxisTitle**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">xaxis-title</span>
</small>

Give the x-axis a title which will be displayed below the axis labels by default.
<br><br>

### **xaxisDatetime**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">xaxis-datetime</span>
</small>

Set this to true if you have datetime, google.type.date or timestamp data on the x-axis
<br><br>

### **zebra**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">zebra</span>
</small>

set zebra color like zebra="#f3f4f5, #fff" to get stripes
<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-data-text</span>
</small>

Set the text to display, if no data is given.

If this option is not set, the default is **No data.**
<br><br>

### **legend**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend</span>
</small>

Enables the legend on bottom left with offset 0:0
<br><br>

### **dataLabels**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">data-labels</span>
</small>

Enable labels with data on every item.
<br><br>

### **tooltip**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tooltip</span>
</small>

show a tooltip on mouseover
<br><br>

### **legendAlign**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-align</span>
</small>

Aligns the legend to `left` `center` `right`

default is **left**
<br><br>

### **legendPosition**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-position</span>
</small>

Set the position of the legend to `top`, `right`, `bottom`, `left`

Default is **bottom**
<br><br>

### **legendOffsetX**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-offset-x</span>
</small>

Moves the legend in the **x** direction for n pixels from `legend-position`
<br><br>

### **legendOffsetY**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">legend-offset-y</span>
</small>

Moves the legend in the **y** direction for n pixels from `legend-position`
<br><br>

### **toolbar**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">toolbar</span>
</small>

Enables the toolbar
<br><br>

### **toolbarDownload**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">toolbar-download</span>
</small>

Enables the download option in the toolbar (svg,csv,png)
<br><br>

### **plotHorizontal**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">plot-horizontal</span>
</small>

Enable this to draw the bars horizontally
<br><br>

### **grid**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">grid</span>
</small>

Draw the horizontal grid lines
<br><br>

### **chartType**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">chart-type</span>
</small>


line, area, bar are mixable

radar, scatter, heatmap

pie donut polarArea radialBar can only consume 1 data series
<br><br>

### **stacked**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">stacked</span>
</small>

WORK IN PROGRESS
Stacked bar charts are not mixable
<br><br>

### **titleText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">title-text</span>
</small>

Set the title.
<br><br>

### **titleAlign**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">title-align</span>
</small>

Aligns the title. Possible values are 'left', 'center', 'right'

Default is **left**
<br><br>

### **titleOffsetX**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">title-offset-x</span>
</small>

Moves the title for n pixels on the x-axis from the alignment direction
<br><br>

### **titleOffsetY**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">title-offset-y</span>
</small>

Moves the title for n pixels on the y-axis from the alignment direction
<br><br>

### **fixedHeight**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">fixed-height</span>
</small>

Set a fixed height for the plot. Default is auto, this can be useful if you need to control the heights
<br><br>





### **apexOptions**
default: **{
      series: [],
      yaxis: [],
      // belize qualitative color palette
      // node_modules/@ui5/webcomponents-theming/dist/themes/sap_fiori_3/css_variables.css
      colors: [
        &#39;var(--sapChart_OrderedColor_1 , #5899da)&#39;,
        &#39;var(--sapChart_OrderedColor_2 , #e8743b)&#39;,
        &#39;var(--sapChart_OrderedColor_3 , #19a979)&#39;,
        &#39;var(--sapChart_OrderedColor_4 , #ed4a7b)&#39;,
        &#39;var(--sapChart_OrderedColor_5 , #945ecf)&#39;,
        &#39;var(--sapChart_OrderedColor_6 , #13a4b4)&#39;,
        &#39;var(--sapChart_OrderedColor_7 , #525df4)&#39;,
        &#39;var(--sapChart_OrderedColor_8 , #bf399e)&#39;,
        &#39;var(--sapChart_OrderedColor_9 , #6c8893)&#39;,
        &#39;var(--sapChart_OrderedColor_10 ,: #ee6868)&#39;,
        &#39;var(--sapChart_OrderedColor_11 ,: #2f6497)&#39;,
      ],
      noData: {
        text: &#39;No data.&#39;,
        align: &#39;center&#39;,
        verticalAlign: &#39;middle&#39;,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: &#39;14px&#39;,
          fontFamily: undefined,
        },
      },
      chart: {
        // height: 550,
        fontFamily: &#39;var(--sapFontFamily, Helvetica, Arial, sans-serif)&#39;,
        type: &#39;line&#39;,
        stacked: false,
        events: {},
        toolbar: {
          show: false, // disable by default
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        sparkline: {
          enabled: false,
        },
      },
      grid: {
        show: false, // https://apexcharts.com/docs/options/grid/
        // zebra
        // row: {
        //  colors: [&#34;#f3f4f5&#34;, &#34;#fff&#34;],
        // }
      },
      dataLabels: {
        enabled: false,
      },

      title: {
        // text: &#39;XYZ - Analysis&#39;,
        align: &#39;left&#39;,
        // offsetX: 70,
      },
      stroke: {},

      tooltip: {
        enabled: false,
        fixed: {
          enabled: false,
          position: &#39;topLeft&#39;, // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 160,
        },
      },
      legend: {
        show: false,
        position: &#39;bottom&#39;,
        horizontalAlign: &#39;left&#39;,
        offsetX: 0,
        offsetY: 0,
        formatter: (seriesName, opts) =&gt; {
          if (
            opts.w.config.yaxis[opts.seriesIndex] &amp;&amp;
            opts.w.config.yaxis[opts.seriesIndex].legendLabel
          ) {
            return [opts.w.config.yaxis[opts.seriesIndex].legendLabel];
          }
          return [seriesName];
        },
      },
      plotOptions: {},
      xaxis: {
        // type: &#34;datetime&#34;,

        // tickAmount: 6,
        title: {
          text: undefined,
        },
      },
    }**</small>


<br><br>
## Events
{{% api "_furo-ui5-chart-display-events.md" %}}

### **data-point-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-point-clicked</span>
→ <small>`Fieldnode`</small>

 Fired when a marker for this data source was clicked. Note: the event is fired from the furo-ui5-chart
<br><br>

## Methods
{{% api "_furo-ui5-chart-display-methods.md" %}}

































{{% api "_furo-ui5-chart-display-footer.md" %}}
{{% api "_furo-ui5-chart-display-scripts.md" %}}

---
title: MediaSize
description: 
weight: 100
---

# MediaSize

**@furo/components** <small>v1.0.0-rc.12</small>
<br>`import '@furo/components/src/src/lib/MediaSize.js';`<small>
<br>exports *MediaSize* js</small>


****

# MediaSize resolver

Returns the **media size** from S to XXL according to the screen width.

Use this to set style vars according to the current media size.


## Usage

Apply the media-size attribute to your main-stage or component.

```js
window.addEventListener('resize',   MediaSize.DebounceBuilder(() => {
      this.setAttribute("media-size", MediaSize.GetMediaSize())
    }, MediaSize.HANDLE_RESIZE_DEBOUNCE_RATE)
);
// initial size
this.setAttribute("media-size", MediaSize.GetMediaSize())

```

Set media-size related values for your variables.
```css
 :host([media-size='XXL']) {
         --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem;
         --FuroUi5MediaSizeIndentationTop: 2rem;
         --FuroUi5MediaSizeIndentationRight: 3rem;
         --FuroUi5MediaSizeIndentationBottom: 1;
         --FuroUi5MediaSizeIndentationLeft: 3rem;
       }

:host([media-size='XL']) {
         --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem;
         --FuroUi5MediaSizeIndentationTop: 2rem;
         --FuroUi5MediaSizeIndentationRight: 3rem;
         --FuroUi5MediaSizeIndentationBottom: 1;
         --FuroUi5MediaSizeIndentationLeft: 3rem;
       }

:host([media-size='L']) {
         --FuroUi5MediaSizeIndentation: 1rem 2rem 0 2rem;
         --FuroUi5MediaSizeIndentationTop: 1rem;
         --FuroUi5MediaSizeIndentationRight: 2rem;
         --FuroUi5MediaSizeIndentationBottom: 0;
         --FuroUi5MediaSizeIndentationLeft: 2rem;
       }

:host([media-size='M']) {
         --FuroUi5MediaSizeIndentation: 0.625rem 2rem 0 2rem;
         --FuroUi5MediaSizeIndentationTop: 0.625rem;
         --FuroUi5MediaSizeIndentationRight: 2rem;
         --FuroUi5MediaSizeIndentationBottom: 0;
         --FuroUi5MediaSizeIndentationLeft: 2rem;
       }

:host([media-size='S']) {
         --FuroUi5MediaSizeIndentation: 0.625rem 1rem 0 1rem;
         --FuroUi5MediaSizeIndentationTop: 0.625rem;
         --FuroUi5MediaSizeIndentationRight: 1rem;
         --FuroUi5MediaSizeIndentationBottom: 0;
         --FuroUi5MediaSizeIndentationLeft: 1rem;
     }
```

## Attributes and Properties
{{% api "_-properties.md" %}}



### **HANDLE_RESIZE_DEBOUNCE_RATE**
</small>

Default debounce rate for resize updates.
<br><br>


### **BREAKPOINTS**
</small>


<br><br>

### **BREAKPOINTS_MAP**
</small>


<br><br>




## Methods
{{% api "_-methods.md" %}}



### **GetMediaSize**
<small>**GetMediaSize**() ⟹ `String`</small>

Returns the media size.

Sizes:
S,M,L,XL,XXl

<br><br>



### **DebounceBuilder**
<small>**DebounceBuilder**(*func* `` *delay* `` ) ⟹ `(function(...[*]): void)|*`</small>

Generates a debounced function.

- <small>func </small>
- <small>delay </small>
<br><br>

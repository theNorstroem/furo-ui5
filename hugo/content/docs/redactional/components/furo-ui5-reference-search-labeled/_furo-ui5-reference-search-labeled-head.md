---
booksearchexclude: false
bookToc: false
bookHidden: true
---

### Examples

#### Minimal example

<script type="module" src="/init.js"></script>

<furo-demo-snippet>
<template>
<furo-form-layouter four="">
<furo-ui5-reference-search-labeled fn-bind-data="--entityReady(*.owner)">
</furo-ui5-reference-search-labeled>
<furo-ui5-reference-search-labeled fn-bind-data="--entityReady(*.owner)">
</furo-ui5-reference-search-labeled>
</furo-form-layouter>
<furo-data-object type="task.Task" @-object-ready="--entityReady">
</furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four="">
  <furo-ui5-reference-search-labeled 
    fn-bind-data="--entityReady(*.owner)">
  </furo-ui5-reference-search-labeled>
</furo-form-layouter>
```

#### Example with extended searcher
To add the extended searcher, just set the name of the extended searcher component on the field `extended-searcher`.

The min-term-length in this demo is set to 1 character.

<furo-demo-snippet>
<template>
<furo-form-layouter four="">
      <furo-ui5-reference-search-labeled fn-bind-data="--entityReady(*.owner)" extended-searcher="demo-extended-searcher" min-term-length="1">
      </furo-ui5-reference-search-labeled>
      <furo-ui5-reference-search-labeled fn-bind-data="--entityReady(*.owner)" extended-searcher="demo-extended-searcher" min-term-length="1">
      </furo-ui5-reference-search-labeled>
</furo-form-layouter>
            <furo-data-object type="task.Task" @-object-ready="--entityReady">
            </furo-data-object>
</template>
</furo-demo-snippet>


```html
<furo-ui5-reference-search-labeled 
  fn-bind-data="--entityReady(*.owner)" 
  extended-searcher="demo-extended-searcher" 
  min-term-length="1">
</furo-ui5-reference-search-labeled>
```

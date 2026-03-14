"use strict";(function(){const t={cache:!0};t.doc={id:"id",field:["title","content"],store:["title","href","section"]};const e=FlexSearch.create("balance",t);window.bookSearchIndex=e,e.add({id:0,href:"/docs/typerenderer/cell/",title:"cell",section:"Typerenderer",content:` cell # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-float.js'; exports CellFloat js exports &lt;cell-float&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for float
Description # cell-float The cell-float component displays a FieldNode of type float in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _displayValue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:1,href:"/docs/typerenderer/cell-bool/",title:"cell-bool",section:"Typerenderer",content:` cell-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-bool.js'; exports CellBool js exports &lt;cell-bool&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for bool
Description # cell-bool The cell-bool component displays a FieldNode of type bool in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode of type bool, furo.fat.Bool, google.wrapper.BoolValue `}),e.add({id:2,href:"/docs/typerenderer/cell-double/",title:"cell-double",section:"Typerenderer",content:` cell-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-double.js'; exports CellDouble js exports &lt;cell-double&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for double
Description # cell-double The cell-double component displays a FieldNode of type double in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:3,href:"/docs/typerenderer/cell-furo-bigdecimal/",title:"cell-furo-bigdecimal",section:"Typerenderer",content:` cell-furo-bigdecimal # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-bigdecimal.js'; exports CellFuroBigdecimal js exports &lt;cell-furo-bigdecimal&gt; custom-element-definition extends /src/typerenderer/cell-float.js superclass CellFloat
Summary: cell display renderer for type furo.BigDecimal
Description # The cell-furo-bigdecimal component displays a FieldNode of type furo.BigDecimal in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Attributes and Properties # _displayValue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:4,href:"/docs/typerenderer/cell-furo-fat-bool/",title:"cell-furo-fat-bool",section:"Typerenderer",content:` cell-furo-fat-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-bool.js'; exports CellFuroFatBool js exports &lt;cell-furo-fat-bool&gt; custom-element-definition extends /src/typerenderer/cell-bool.js superclass CellBool
Summary: cell display renderer for furo.fat.Bool
Description # cell-furo-fat-bool The cell-furo-fat-bool component displays a FieldNode of type furo.fat.bool in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode of type bool, furo.fat.Bool, google.wrapper.BoolValue `}),e.add({id:5,href:"/docs/typerenderer/cell-furo-fat-double/",title:"cell-furo-fat-double",section:"Typerenderer",content:` cell-furo-fat-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-double.js'; exports CellFuroFatDouble js exports &lt;cell-furo-fat-double&gt; custom-element-definition extends /src/typerenderer/cell-double.js superclass CellDouble
Summary: cell display renderer for furo.fat.Double
Description # cell-furo-fat-double The cell-furo-fat-double component displays a FieldNode of type furo.fat.Double in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:6,href:"/docs/typerenderer/cell-furo-fat-float/",title:"cell-furo-fat-float",section:"Typerenderer",content:` cell-furo-fat-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-float.js'; exports CellFuroFatFloat js exports &lt;cell-furo-fat-float&gt; custom-element-definition extends /src/typerenderer/cell-float.js superclass CellFloat
Summary: cell display renderer for furo.fat.Float
Description # cell-furo-fat-float The cell-furo-fat-float component displays a FieldNode of type furo.fat.Float in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _displayValue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:7,href:"/docs/typerenderer/cell-furo-fat-int32/",title:"cell-furo-fat-int32",section:"Typerenderer",content:` cell-furo-fat-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-int32.js'; exports CellFuroFatInt32 js exports &lt;cell-furo-fat-int32&gt; custom-element-definition extends /src/typerenderer/cell-int32.js superclass CellInt32
Summary: cell display renderer for furo.fat.Int32
Description # cell-int32 The cell-int32 component displays a FieldNode of type furo.fat.Int32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:8,href:"/docs/typerenderer/cell-furo-fat-int64/",title:"cell-furo-fat-int64",section:"Typerenderer",content:` cell-furo-fat-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-int64.js'; exports CellFuroFatInt64 js exports &lt;cell-furo-fat-int64&gt; custom-element-definition extends /src/typerenderer/cell-furo-fat-int32.js superclass CellFuroFatInt32
Summary: cell display renderer for furo.fat.Int64
Description # cell-furo-fat-int64 The cell-furo-fat-int64 component displays a FieldNode of type furo.fat.int64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:9,href:"/docs/typerenderer/cell-furo-fat-string/",title:"cell-furo-fat-string",section:"Typerenderer",content:` cell-furo-fat-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-string.js'; exports CellFuroFatString js exports &lt;cell-furo-fat-string&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for furo.fat.String
Description # cell-furo-fat-string The cell-furo-fat-string component displays a FieldNode of type furo.fat.String in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _updateMeta # _updateMeta() ⟹ void
* → fn&ndash;update-meta
`}),e.add({id:10,href:"/docs/typerenderer/cell-furo-fat-uint32/",title:"cell-furo-fat-uint32",section:"Typerenderer",content:` cell-furo-fat-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-uint32.js'; exports CellFuroFatUint32 js exports &lt;cell-furo-fat-uint32&gt; custom-element-definition extends /src/typerenderer/cell-furo-fat-int32.js superclass CellFuroFatInt32
Summary: cell display renderer for furo.fat.Uint32
Description # cell-furo-fat-uint32 The cell-furo-fat-uint32 component displays a FieldNode of type furo.fat.Uint32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:11,href:"/docs/typerenderer/cell-furo-fat-uint64/",title:"cell-furo-fat-uint64",section:"Typerenderer",content:` cell-furo-fat-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-fat-uint64.js'; exports CellFuroFatUint64 js exports &lt;cell-furo-fat-uint64&gt; custom-element-definition extends /src/typerenderer/cell-furo-fat-int64.js superclass CellFuroFatInt64
Summary: cell display renderer for furo.fat.Uint64
Description # cell-furo-fat-uint64 The cell-furo-fat-uint64 component displays a FieldNode of type furo.fat.uint64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:12,href:"/docs/typerenderer/cell-furo-integerproperty/",title:"cell-furo-integerproperty",section:"Typerenderer",content:` cell-furo-integerproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-integerproperty.js'; exports CellFuroIntegerproperty js exports &lt;cell-furo-integerproperty&gt; custom-element-definition extends /src/typerenderer/cell-int32.js superclass CellInt32
Summary: cell display renderer for furo.Integerproperty
Description # cell-furo-integerproperty The cell-furo-integerproperty component displays a FieldNode of type furo.Integerproperty in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:13,href:"/docs/typerenderer/cell-furo-link/",title:"cell-furo-link",section:"Typerenderer",content:` cell-furo-link # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-link.js'; exports CellFuroLink js exports &lt;cell-furo-link&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for furo.Link
Description # cell-furo-link The cell-furo-link component displays a FieldNode of type furo.Link in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:14,href:"/docs/typerenderer/cell-furo-numberproperty/",title:"cell-furo-numberproperty",section:"Typerenderer",content:` cell-furo-numberproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-numberproperty.js'; exports CellFuroNumberproperty js exports &lt;cell-furo-numberproperty&gt; custom-element-definition extends /src/typerenderer/cell-furo-integerproperty.js superclass CellFuroIntegerproperty
Summary: cell display renderer for furo.Numberproperty
Description # cell-furo-numberproperty The cell-furo-numberrproperty component displays a FieldNode of type furo.Numberproperty in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:15,href:"/docs/typerenderer/cell-furo-property/",title:"cell-furo-property",section:"Typerenderer",content:` cell-furo-property # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-property.js'; exports CellFuroProperty js exports &lt;cell-furo-property&gt; custom-element-definition superclass LitElement mixes FBP
Summary: cell display renderer for furo.Property
Description # cell-furo-property The cell-furo-property component displays a FieldNode of type furo.Property in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # noDataText # noDataText string default: ''
Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the cell-furo-property is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:16,href:"/docs/typerenderer/cell-furo-property-repeated/",title:"cell-furo-property-repeated",section:"Typerenderer",content:` cell-furo-property-repeated # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-property-repeated.js'; exports CellFuroPropertyRepeated js exports &lt;cell-furo-property-repeated&gt; custom-element-definition superclass LitElement mixes FBP
Summary: cell display renderer for [] furo.Property
Description # cell-furo-property-repeats The cell-furo-property-repeats component displays a FieldNode of type furo.Property in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # elementList # default: []
_typeResolved # default: false
noDataText # noDataText String Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the cell-furo-property-repeats is a simple proxy element to show the initial state if no data is available.
fieldNode _updateFieldList # _updateFieldList() ⟹ void
* → fn&ndash;update-field-list
`}),e.add({id:17,href:"/docs/typerenderer/cell-furo-reference/",title:"cell-furo-reference",section:"Typerenderer",content:` cell-furo-reference # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-reference.js'; exports CellFuroReference js exports &lt;cell-furo-reference&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for furo.Reference
Description # cell-furo-reference The cell-furo-reference component displays a FieldNode of type furo.Reference in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:18,href:"/docs/typerenderer/cell-furo-stringoptionproperty/",title:"cell-furo-stringoptionproperty",section:"Typerenderer",content:` cell-furo-stringoptionproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-stringoptionproperty.js'; exports CellFuroStringoptionproperty js exports &lt;cell-furo-stringoptionproperty&gt; custom-element-definition extends /src/typerenderer/cell-furo-stringproperty.js superclass CellFuroStringproperty
Summary: cell display renderer for furo.Stringoptionproperty
Description # cell-furo-stringoptionproperty The cell-furo-numberrproperty component displays a FieldNode of type furo.Stringoptionproperty in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:19,href:"/docs/typerenderer/cell-furo-stringproperty/",title:"cell-furo-stringproperty",section:"Typerenderer",content:` cell-furo-stringproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-stringproperty.js'; exports CellFuroStringproperty js exports &lt;cell-furo-stringproperty&gt; custom-element-definition extends /src/typerenderer/cell-string.js superclass CellString
Summary: cell display renderer for furo.Stringproperty
Description # cell-furo-stringproperty The cell-furo-stringproperty component displays a FieldNode of type furo.Stringproperty in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:20,href:"/docs/typerenderer/cell-furo-type-date/",title:"cell-furo-type-date",section:"Typerenderer",content:` cell-furo-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-type-date.js'; exports CellFuroTypeDate js exports &lt;cell-furo-type-date&gt; custom-element-definition extends /src/typerenderer/cell-google-type-date.js superclass CellGoogleTypeDate
Summary: cell display renderer for furo.type.Date
Description # cell-furo-type-date The cell-furo-type-date component displays a FieldNode of type furo.type.Date in read only mode.
if the field display_name is set, the component will use that value for the display.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:21,href:"/docs/typerenderer/cell-furo-type-money/",title:"cell-furo-type-money",section:"Typerenderer",content:` cell-furo-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-furo-type-money.js'; exports CellFuroTypeMoney js exports &lt;cell-furo-type-money&gt; custom-element-definition extends /src/typerenderer/cell-google-type-money.js superclass CellGoogleTypeMoney
Summary: cell display renderer for furo.type.Money
Description # cell-furo-type-money The cell-furo-type-money component displays a FieldNode of type furo.type.Money in read only mode.
if the field display_name is set, the component will use that value for the display.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:22,href:"/docs/typerenderer/cell-google-protobuf-/",title:"cell-google-protobuf-",section:"Typerenderer",content:` cell-google-protobuf- # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-floatvalue.js'; exports CellGoolgeProtobufFloatvalue js exports &lt;cell-google-protobuf-floatvalue&gt; custom-element-definition extends /src/typerenderer/cell-float.js superclass CellFloat
Summary: cell display renderer for google.protobuf.
Description # cell-google-protobuf-floatvalue The cell-google-protobuf-floatvalue component displays a FieldNode of type google.protobuf.FloatValue in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _displayValue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:23,href:"/docs/typerenderer/cell-google-protobuf-any/",title:"cell-google-protobuf-any",section:"Typerenderer",content:` cell-google-protobuf-any # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-any.js'; exports CellGoolgeProtobufAny js exports &lt;cell-google-protobuf-any&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.protobuf.Any
Description # cell-google-protobuf-any The cell-google-protobuf-any component is a wrapper displays of type google.protobuf.Any in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the cell-google-protobuf-any is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:24,href:"/docs/typerenderer/cell-google-protobuf-boolvalue/",title:"cell-google-protobuf-boolvalue",section:"Typerenderer",content:` cell-google-protobuf-boolvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-boolvalue.js'; exports CellGoolgeProtobufBoolvalue js exports &lt;cell-google-protobuf-boolvalue&gt; custom-element-definition extends /src/typerenderer/cell-bool.js superclass CellBool
Summary: cell display renderer for google.protobuf.BoolValue
Description # cell-google-protobuf-boolvalue The cell-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.BoolValue in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode of type bool, furo.fat.Bool, google.wrapper.BoolValue `}),e.add({id:25,href:"/docs/typerenderer/cell-google-protobuf-doublevalue/",title:"cell-google-protobuf-doublevalue",section:"Typerenderer",content:` cell-google-protobuf-doublevalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-doublevalue.js'; exports CellGoogleProtobufDoublevalue js exports &lt;cell-google-protobuf-doublevalue&gt; custom-element-definition extends /src/typerenderer/cell-double.js superclass CellDouble
Summary: cell display renderer for google.protobuf.DoubleValue
Description # cell-double The cell-double component displays a FieldNode of type google.protobuf.DoubleValue in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:26,href:"/docs/typerenderer/cell-google-protobuf-int32value/",title:"cell-google-protobuf-int32value",section:"Typerenderer",content:` cell-google-protobuf-int32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-int32value.js'; exports CellGoolgeProtobufIn32value js exports &lt;cell-google-protobuf-int32value&gt; custom-element-definition extends /src/typerenderer/cell-int32.js superclass CellInt32
Summary: cell display renderer for google.protobuf.Int32Value
Description # cell-google-protobuf-boolvalue The cell-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Int32Value in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:27,href:"/docs/typerenderer/cell-google-protobuf-int64value/",title:"cell-google-protobuf-int64value",section:"Typerenderer",content:` cell-google-protobuf-int64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-int64value.js'; exports CellGoolgeProtobufIn64value js exports &lt;cell-google-protobuf-int64value&gt; custom-element-definition extends /src/typerenderer/cell-int64.js superclass CellInt64
Summary: cell display renderer for google.protobuf.Int64Value
Description # cell-google-protobuf-boolvalue The cell-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Int64Value in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:28,href:"/docs/typerenderer/cell-google-protobuf-stringvalue/",title:"cell-google-protobuf-stringvalue",section:"Typerenderer",content:` cell-google-protobuf-stringvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-stringvalue.js'; exports CellGoogleProtobufStringvalue js exports &lt;cell-google-protobuf-stringvalue&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.protobuf.StringValue
Description # cell-google-protobuf-stringvalue The cell-google-protobuf-stringvalue component displays a FieldNode of type google.protobuf.StringValue in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:29,href:"/docs/typerenderer/cell-google-protobuf-timestamp/",title:"cell-google-protobuf-timestamp",section:"Typerenderer",content:` cell-google-protobuf-timestamp # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-timestamp.js'; exports CellGoogleProtobufTimestamp js exports &lt;cell-google-protobuf-timestamp&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.protobuf.Timestamp
Description # cell-google-protobuf-timestamp The cell-google-protobuf-timestamp component displays a FieldNode of type google.prtobuf.Timestamp in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:30,href:"/docs/typerenderer/cell-google-protobuf-uint32value/",title:"cell-google-protobuf-uint32value",section:"Typerenderer",content:` cell-google-protobuf-uint32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-uint32value.js'; exports CellGoolgeProtobufUin32value js exports &lt;cell-google-protobuf-uint32value&gt; custom-element-definition extends /src/typerenderer/cell-uint32.js superclass CellUint32
Summary: cell display renderer for google.protobuf.Uint32Value
Description # cell-google-protobuf-boolvalue The cell-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Uint32Value in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:31,href:"/docs/typerenderer/cell-google-protobuf-uint64value/",title:"cell-google-protobuf-uint64value",section:"Typerenderer",content:` cell-google-protobuf-uint64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-protobuf-uint64value.js'; exports CellGoolgeProtobufUin64value js exports &lt;cell-google-protobuf-uint64value&gt; custom-element-definition extends /src/typerenderer/cell-uint64.js superclass CellUint64
Summary: cell display renderer for google.protobuf.Uint64Value
Description # cell-google-protobuf-boolvalue The cell-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Uint64Value in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:32,href:"/docs/typerenderer/cell-google-type-color/",title:"cell-google-type-color",section:"Typerenderer",content:` cell-google-type-color # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-type-color.js'; exports CellGoolgeTypeColor js exports &lt;cell-google-type-color&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.type.Color
Description # cell-google-type-color The cell-google-type-color component displays a FieldNode of type google.type.Color in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _red # default: ''
_green # default: ''
_blue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:33,href:"/docs/typerenderer/cell-google-type-date/",title:"cell-google-type-date",section:"Typerenderer",content:` cell-google-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-type-date.js'; exports CellGoogleTypeDate js exports &lt;cell-google-type-date&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.type.Date
Description # cell-google-type-date The cell-google-type-date component displays a FieldNode of type google.type.Date in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:34,href:"/docs/typerenderer/cell-google-type-money/",title:"cell-google-type-money",section:"Typerenderer",content:` cell-google-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-type-money.js'; exports CellGoogleTypeMoney js exports &lt;cell-google-type-money&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.type.Money
Description # cell-google-type-money The cell-google-type-money component displays a FieldNode of type google.type.Money in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:35,href:"/docs/typerenderer/cell-google-type-timeofday/",title:"cell-google-type-timeofday",section:"Typerenderer",content:` cell-google-type-timeofday # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-google-type-timeofday.js'; exports CellGoogleTypeTimeofday js exports &lt;cell-google-type-timeofday&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for google.type.TimeOfDay
Description # cell-google-type-timeofday The cell-google-type-timeofday component displays a FieldNode of type google.type.TimeOfDay in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:36,href:"/docs/typerenderer/cell-int32/",title:"cell-int32",section:"Typerenderer",content:` cell-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-int32.js'; exports CellInt32 js exports &lt;cell-int32&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for int32
Description # cell-int32 The cell-int32 component displays a FieldNode of type int32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:37,href:"/docs/typerenderer/cell-int64/",title:"cell-int64",section:"Typerenderer",content:` cell-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-int64.js'; exports CellInt64 js exports &lt;cell-int64&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for int64
Description # cell-int64 The cell-int64 component displays a FieldNode of type int64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:38,href:"/docs/typerenderer/cell-string/",title:"cell-string",section:"Typerenderer",content:` cell-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-string.js'; exports CellString js exports &lt;cell-string&gt; custom-element-definition superclass LitElement
Summary: cell display renderer for string
Description # cell-string The cell-string component displays a FieldNode of type string in read only mode.
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:39,href:"/docs/typerenderer/cell-uint32/",title:"cell-uint32",section:"Typerenderer",content:` cell-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-uint32.js'; exports CellUint32 js exports &lt;cell-uint32&gt; custom-element-definition extends /src/typerenderer/cell-int32.js superclass CellInt32
Summary: cell display renderer for uint32
Description # cell-uint32 The cell-uint32 component displays a FieldNode of type uint32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:40,href:"/docs/typerenderer/cell-uint64/",title:"cell-uint64",section:"Typerenderer",content:` cell-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/cell-uint64.js'; exports CellUint64 js exports &lt;cell-uint64&gt; custom-element-definition extends /src/typerenderer/cell-int64.js superclass CellInt64
Summary: cell display renderer for uint64
Description # cell-uint64 The cell-uint64 component displays a FieldNode of type uint64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every cell-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:41,href:"/docs/typerenderer/celledit-bool/",title:"celledit-bool",section:"Typerenderer",content:` celledit-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-bool.js'; exports CelleditBool js extends /src/furo-ui5-checkbox-input.js superclass FuroUi5CheckboxInput
Summary: celledit renderer for bool
Description # celledit-bool is a celledit context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:42,href:"/docs/typerenderer/celledit-double/",title:"celledit-double",section:"Typerenderer",content:` celledit-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-double.js'; exports CelleditDouble js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for double
Description # celledit-double is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:43,href:"/docs/typerenderer/celledit-float/",title:"celledit-float",section:"Typerenderer",content:` celledit-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-float.js'; exports CelleditFloat js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for float
Description # celledit-float is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:44,href:"/docs/typerenderer/celledit-furo-bigdecimal/",title:"celledit-furo-bigdecimal",section:"Typerenderer",content:` celledit-furo-bigdecimal # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-bigdecimal.js'; exports CelleditFuroBigdecimal js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for type furo.BigDecimal
Description # Attributes and Properties # Methods # `}),e.add({id:45,href:"/docs/typerenderer/celledit-furo-fat-bool/",title:"celledit-furo-fat-bool",section:"Typerenderer",content:` celledit-furo-fat-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-bool.js'; exports CelleditFuroFatBool js extends /src/typerenderer/celledit-bool.js superclass CelleditBool
Summary: celledit renderer for bool
Description # celledit-furo-fat-bool is a celledit context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:46,href:"/docs/typerenderer/celledit-furo-fat-double/",title:"celledit-furo-fat-double",section:"Typerenderer",content:` celledit-furo-fat-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-double.js'; exports CelleditFuroFatDouble js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Double
Description # celledit-furo-fat-double is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:47,href:"/docs/typerenderer/celledit-furo-fat-float/",title:"celledit-furo-fat-float",section:"Typerenderer",content:` celledit-furo-fat-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-float.js'; exports CelleditFuroFatFloat js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Float
Description # celledit-furo-fat-float is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:48,href:"/docs/typerenderer/celledit-furo-fat-int32/",title:"celledit-furo-fat-int32",section:"Typerenderer",content:` celledit-furo-fat-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-int32.js'; exports CelleditFuroFatInt32 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Int32
Description # celledit-furo-fat-int32 is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:49,href:"/docs/typerenderer/celledit-furo-fat-int64/",title:"celledit-furo-fat-int64",section:"Typerenderer",content:` celledit-furo-fat-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-int64.js'; exports CelleditFuroFatInt64 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Int64
Description # celledit-furo-fat-int64 is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:50,href:"/docs/typerenderer/celledit-furo-fat-string/",title:"celledit-furo-fat-string",section:"Typerenderer",content:` celledit-furo-fat-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-string.js'; exports CelleditFuroFatString js extends /src/typerenderer/celledit-string.js superclass CelleditString
Summary: celledit renderer for furo.fat.String
Description # celledit-furo-fat-string is a celledit context renderer.
It uses furo-ui5-text-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:51,href:"/docs/typerenderer/celledit-furo-fat-uint32/",title:"celledit-furo-fat-uint32",section:"Typerenderer",content:` celledit-furo-fat-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-uint32.js'; exports CelleditFuroFatUint32 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Uint32
Description # celledit-furo-fat-uint32 is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:52,href:"/docs/typerenderer/celledit-furo-fat-uint64/",title:"celledit-furo-fat-uint64",section:"Typerenderer",content:` celledit-furo-fat-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-fat-uint64.js'; exports CelleditFuroFatUint64 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.fat.Uint64
Description # celledit-furo-fat-uint64 is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:53,href:"/docs/typerenderer/celledit-furo-integerproperty/",title:"celledit-furo-integerproperty",section:"Typerenderer",content:` celledit-furo-integerproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-integerproperty.js'; exports CelleditFuroIntegerproperty js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.Integerproperty
Description # celledit-furo-integerproperty is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:54,href:"/docs/typerenderer/celledit-furo-inumberproperty/",title:"celledit-furo-inumberproperty",section:"Typerenderer",content:` celledit-furo-inumberproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-numberproperty.js'; exports CelleditFuroNumberproperty js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for furo.INumberproperty
Description # celledit-furo-numberproperty is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:55,href:"/docs/typerenderer/celledit-furo-link/",title:"celledit-furo-link",section:"Typerenderer",content:` celledit-furo-link # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-link.js'; exports CelleditFuroLink js exports &lt;celledit-furo-link&gt; custom-element-definition superclass LitElement
Summary: celledit renderer for furo.Link
Description # celledit-furo-link The celledit-furo-link component displays a FieldNode of type furo.Link in read only mode.
Every celledit-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:56,href:"/docs/typerenderer/celledit-furo-property/",title:"celledit-furo-property",section:"Typerenderer",content:` celledit-furo-property # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-property.js'; exports CelleditFuroProperty js exports &lt;celledit-furo-property&gt; custom-element-definition superclass LitElement mixes FBP
Summary: celledit renderer for furo.Property
Description # celledit-furo-property The celledit-furo-property component displays a FieldNode of type furo.Property in read only mode.
Every celledit-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # noDataText # noDataText string default: ''
Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the celledit-furo-property is a simple proxy element to show the initial state if no data is available.
fieldNode _warning # _warning() ⟹ void
* → fn&ndash;warning
`}),e.add({id:57,href:"/docs/typerenderer/celledit-furo-property-repeated/",title:"celledit-furo-property-repeated",section:"Typerenderer",content:` celledit-furo-property-repeated # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-property-repeated.js'; exports CelleditFuroPropertyRepeated js exports &lt;celledit-furo-property-repeated&gt; custom-element-definition superclass LitElement mixes FBP
Summary: celledit renderer for [] furo.Property
Description # celledit-furo-property-repeats The celledit-furo-property-repeats component displays a FieldNode of type furo.Property in read only mode.
Every celledit-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # elementList # default: []
_typeResolved # default: false
noDataText # noDataText String Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the celledit-furo-property-repeats is a simple proxy element to show the initial state if no data is available.
fieldNode _updateFieldList # _updateFieldList() ⟹ void
* → fn&ndash;update-field-list
`}),e.add({id:58,href:"/docs/typerenderer/celledit-furo-reference/",title:"celledit-furo-reference",section:"Typerenderer",content:` celledit-furo-reference # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-reference.js'; exports CelleditFuroReference js exports &lt;celledit-furo-reference&gt; custom-element-definition extends /src/furo-ui5-reference-search.js superclass FuroUi5ReferenceSearch
Summary: celledit renderer for furo.Reference
Description # Attributes and Properties # Methods # `}),e.add({id:59,href:"/docs/typerenderer/celledit-furo-stringoptionproperty/",title:"celledit-furo-stringoptionproperty",section:"Typerenderer",content:` celledit-furo-stringoptionproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-stringoptionproperty.js'; exports CelleditFuroStringoptionproperty js extends /src/furo-ui5-select.js superclass FuroUi5Select
Summary: celledit renderer for furo.Stringoptionproperty
Description # Attributes and Properties # Methods # `}),e.add({id:60,href:"/docs/typerenderer/celledit-furo-stringproperty/",title:"celledit-furo-stringproperty",section:"Typerenderer",content:` celledit-furo-stringproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-stringproperty.js'; exports CelleditFuroStringproperty js extends /src/typerenderer/celledit-string.js superclass CelleditString
Summary: celledit renderer for furo.Stringproperty
Description # Attributes and Properties # Methods # `}),e.add({id:61,href:"/docs/typerenderer/celledit-furo-type-date/",title:"celledit-furo-type-date",section:"Typerenderer",content:` celledit-furo-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-type-date.js'; exports CelleditFuroTypeDate js extends /src/furo-ui5-date-picker.js superclass FuroUi5DatePicker
Summary: celledit renderer for furo.type.Date
Description # Attributes and Properties # Methods # `}),e.add({id:62,href:"/docs/typerenderer/celledit-furo-type-money/",title:"celledit-furo-type-money",section:"Typerenderer",content:` celledit-furo-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-furo-type-money.js'; exports CelleditFuroTypeMoney js exports &lt;celledit-furo-type-money&gt; custom-element-definition extends /src/furo-ui5-money-input.js superclass FuroUi5MoneyInput
Summary: celledit renderer for furo.type.Money
Description # Attributes and Properties # Methods # `}),e.add({id:63,href:"/docs/typerenderer/celledit-google-protobuf-any/",title:"celledit-google-protobuf-any",section:"Typerenderer",content:` celledit-google-protobuf-any # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-any.js'; exports CelleditGoolgeProtobufAny js exports &lt;celledit-google-protobuf-any&gt; custom-element-definition superclass LitElement
Summary: celledit renderer for google.protobuf.Any
Description # celledit-google-protobuf-any The celledit-google-protobuf-any component is a wrapper displays of type google.protobuf.Any in read only mode.
Every celledit-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the celledit-google-protobuf-any is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:64,href:"/docs/typerenderer/celledit-google-protobuf-boolvalue/",title:"celledit-google-protobuf-boolvalue",section:"Typerenderer",content:` celledit-google-protobuf-boolvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-boolvalue.js'; exports CelleditGoogleProtobufBoolvalue js extends /src/typerenderer/celledit-bool.js superclass CelleditBool
Summary: celledit renderer for google.protobuf.BoolValue
Description # celledit-google-protobuf-boolvalue is a celledit context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:65,href:"/docs/typerenderer/celledit-google-protobuf-doublevalue/",title:"celledit-google-protobuf-doublevalue",section:"Typerenderer",content:` celledit-google-protobuf-doublevalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-doublevalue.js'; exports CelleditGoogleProtobufDoublevalue js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.Double
Description # celledit-google-protobuf-doublevalue is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:66,href:"/docs/typerenderer/celledit-google-protobuf-floatvalue/",title:"celledit-google-protobuf-floatvalue",section:"Typerenderer",content:` celledit-google-protobuf-floatvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-floatvalue.js'; exports CelleditGoolgeProtobufFloatvalue js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.FloatValue
Description # celledit-google-protobuf-floatvalue is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:67,href:"/docs/typerenderer/celledit-google-protobuf-int32value/",title:"celledit-google-protobuf-int32value",section:"Typerenderer",content:` celledit-google-protobuf-int32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-int32value.js'; exports CelleditGoolgeProtobufIn32value js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.Int32value
Description # celledit-google-protobuf-int32value is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:68,href:"/docs/typerenderer/celledit-google-protobuf-int64value/",title:"celledit-google-protobuf-int64value",section:"Typerenderer",content:` celledit-google-protobuf-int64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-int64value.js'; exports CelleditGoolgeProtobufIn64value js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.Int64Value
Description # celledit-google-protobuf-int64value is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:69,href:"/docs/typerenderer/celledit-google-protobuf-stringvalue/",title:"celledit-google-protobuf-stringvalue",section:"Typerenderer",content:` celledit-google-protobuf-stringvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-stringvalue.js'; exports CelleditGoogleProtobufStringvalue js extends /src/typerenderer/celledit-string.js superclass CelleditString
Summary: celledit renderer for google.protobuf.StringValue
Description # Attributes and Properties # Methods # `}),e.add({id:70,href:"/docs/typerenderer/celledit-google-protobuf-timestamp/",title:"celledit-google-protobuf-timestamp",section:"Typerenderer",content:` celledit-google-protobuf-timestamp # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-timestamp.js'; exports CelleditGoogleProtobufTimestamp js extends /src/furo-ui5-date-time-picker.js superclass FuroUi5DateTimePicker
Summary: celledit renderer for google.protobuf.Timestamp
Description # Attributes and Properties # Methods # `}),e.add({id:71,href:"/docs/typerenderer/celledit-google-protobuf-uint32value/",title:"celledit-google-protobuf-uint32value",section:"Typerenderer",content:` celledit-google-protobuf-uint32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-uint32value.js'; exports CelleditGoolgeProtobufUin32value js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.Uint32value
Description # celledit-google-protobuf-uint32value is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:72,href:"/docs/typerenderer/celledit-google-protobuf-uint64value/",title:"celledit-google-protobuf-uint64value",section:"Typerenderer",content:` celledit-google-protobuf-uint64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-protobuf-uint64value.js'; exports CelleditGoogleProtobufUint64value js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for google.protobuf.Uint64value
Description # celledit-google-protobuf-uint64value is a celledit context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:73,href:"/docs/typerenderer/celledit-google-type-date/",title:"celledit-google-type-date",section:"Typerenderer",content:` celledit-google-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-type-date.js'; exports CelleditGoogleTypeDate js extends /src/furo-ui5-date-picker.js superclass FuroUi5DatePicker
Summary: celledit renderer for google.type.Date
Description # celledit-google-type-date is a celledit context renderer.
It uses furo-ui5-date-picker as the renderer
Attributes and Properties # Methods # `}),e.add({id:74,href:"/docs/typerenderer/celledit-google-type-money/",title:"celledit-google-type-money",section:"Typerenderer",content:` celledit-google-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-type-money.js'; exports CelleditGoogleTypeMoney js exports &lt;celledit-google-type-money&gt; custom-element-definition extends /src/furo-ui5-money-input.js superclass FuroUi5MoneyInput
Summary: celledit renderer for google.type.Money
Description # celledit-google-type-money is a celledit context renderer.
It uses furo-ui5-money-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:75,href:"/docs/typerenderer/celledit-google-type-timeofday/",title:"celledit-google-type-timeofday",section:"Typerenderer",content:` celledit-google-type-timeofday # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-google-type-timeofday.js'; exports CelleditGoogleTypeTimeofday js extends /src/furo-ui5-time-picker.js superclass FuroUi5TimePicker
Summary: celledit renderer for google.type.TimeOfDay
Description # celledit-google-type-timeofday is a celledit context renderer.
It uses furo-ui5-time-picker as the renderer
Attributes and Properties # Methods # `}),e.add({id:76,href:"/docs/typerenderer/celledit-int32/",title:"celledit-int32",section:"Typerenderer",content:` celledit-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-int32.js'; exports CelleditInt32 js extends /src/furo-ui5-number-input.js superclass FuroUi5NumberInput
Summary: celledit renderer for int32
Description # Attributes and Properties # Methods # `}),e.add({id:77,href:"/docs/typerenderer/celledit-int64/",title:"celledit-int64",section:"Typerenderer",content:` celledit-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-int64.js'; exports CelleditInt64 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for int64
Description # Attributes and Properties # Methods # `}),e.add({id:78,href:"/docs/typerenderer/celledit-string/",title:"celledit-string",section:"Typerenderer",content:` celledit-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-string.js'; exports CelleditString js extends /src/furo-ui5-text-input.js superclass FuroUi5TextInput
Summary: celledit renderer for string
Description # Attributes and Properties # Methods # `}),e.add({id:79,href:"/docs/typerenderer/celledit-uint32/",title:"celledit-uint32",section:"Typerenderer",content:` celledit-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-uint32.js'; exports CelleditUint32 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for uint32
Description # Attributes and Properties # Methods # `}),e.add({id:80,href:"/docs/typerenderer/celledit-uint64/",title:"celledit-uint64",section:"Typerenderer",content:` celledit-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/celledit-uint64.js'; exports CelleditUint64 js extends /src/typerenderer/celledit-int32.js superclass CelleditInt32
Summary: celledit renderer for uint64
Description # Attributes and Properties # Methods # `}),e.add({id:81,href:"/docs/typerenderer/display-bool/",title:"display-bool",section:"Typerenderer",content:` display-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-bool.js'; exports DisplayBool js exports &lt;display-bool&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter
Summary: display renderer for bool
Description # display-bool The display-bool component displays a FieldNode of type bool in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:82,href:"/docs/typerenderer/display-double/",title:"display-double",section:"Typerenderer",content:" display-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-double.js'; exports DisplayDouble js exports &lt;display-double&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter\nSummary: display renderer for double\nDescription # display-double The display-double component displays a FieldNode of type double in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue "}),e.add({id:83,href:"/docs/typerenderer/display-float/",title:"display-float",section:"Typerenderer",content:" display-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-float.js'; exports DisplayFloat js exports &lt;display-float&gt; custom-element-definition extends /src/typerenderer/display-double.js superclass DisplayDouble\nSummary: display renderer for float\nDescription # display-float The display-float component displays a FieldNode of type float in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue "}),e.add({id:84,href:"/docs/typerenderer/display-furo-/",title:"display-furo-",section:"Typerenderer",content:" display-furo- # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-integerproperty.js'; exports DisplayFuroIntegerproperty js exports &lt;display-furo-integerproperty&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32\nSummary: display renderer for furo.\nDescription # display-furo-integerproperty The display-furo-integerproperty component displays a FieldNode of type furo.Integerproperty in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue "}),e.add({id:85,href:"/docs/typerenderer/display-furo-bigdecimal/",title:"display-furo-bigdecimal",section:"Typerenderer",content:` display-furo-bigdecimal # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-bigdecimal.js'; exports DisplayFuroBigdecimal js exports &lt;display-furo-bigdecimal&gt; custom-element-definition superclass LitElement
Summary: display renderer for furo.BigDecimal
Description # display-furo-bigdecimal The display-furo-bigdecimal component displays a FieldNode of type furo.BigDecimal in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Attributes and Properties # currency # currency string Set currency formating _options # default: {}
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:86,href:"/docs/typerenderer/display-furo-fat-bool/",title:"display-furo-fat-bool",section:"Typerenderer",content:` display-furo-fat-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-bool.js'; exports DisplayFuroFatBool js exports &lt;display-furo-fat-bool&gt; custom-element-definition extends /src/typerenderer/display-bool.js superclass DisplayBool
Summary: display renderer for furo.fat.Bool
Description # display-furo-fat-bool The display-furo-fat-bool component displays a FieldNode of type furo.fat.bool in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:87,href:"/docs/typerenderer/display-furo-fat-double/",title:"display-furo-fat-double",section:"Typerenderer",content:" display-furo-fat-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-double.js'; exports DisplayFuroFatDouble js exports &lt;display-furo-fat-double&gt; custom-element-definition extends /src/typerenderer/display-double.js superclass DisplayDouble\nSummary: display renderer for furo.fat.Double\nDescription # display-furo-fat-double The display-furo-fat-double component displays a FieldNode of type furo.fat.Double in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue "}),e.add({id:88,href:"/docs/typerenderer/display-furo-fat-float/",title:"display-furo-fat-float",section:"Typerenderer",content:" display-furo-fat-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-float.js'; exports DisplayFuroFatFloat js exports &lt;display-furo-fat-float&gt; custom-element-definition extends /src/typerenderer/display-float.js superclass DisplayFloat\nSummary: display renderer for furo.fat.Float\nDescription # display-furo-fat-float The display-furo-fat-float component displays a FieldNode of type furo.fat.Float in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue "}),e.add({id:89,href:"/docs/typerenderer/display-furo-fat-int32/",title:"display-furo-fat-int32",section:"Typerenderer",content:` display-furo-fat-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-int32.js'; exports DisplayFuroFatInt32 js exports &lt;display-furo-fat-int32&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32
Summary: display renderer for furo.fat.Int32
Description # display-int32 The display-int32 component displays a FieldNode of type furo.fat.Int32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:90,href:"/docs/typerenderer/display-furo-fat-int64/",title:"display-furo-fat-int64",section:"Typerenderer",content:` display-furo-fat-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-int64.js'; exports DisplayFuroFatInt64 js exports &lt;display-furo-fat-int64&gt; custom-element-definition extends /src/typerenderer/display-furo-fat-int32.js superclass DisplayFuroFatInt32
Summary: display renderer for furo.fat.Int64
Description # display-furo-fat-int64 The display-furo-fat-int64 component displays a FieldNode of type furo.fat.int64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:91,href:"/docs/typerenderer/display-furo-fat-string/",title:"display-furo-fat-string",section:"Typerenderer",content:` display-furo-fat-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-string.js'; exports DisplayFuroFatString js exports &lt;display-furo-fat-string&gt; custom-element-definition superclass LitElement
Summary: display renderer for furo.fat.String
Description # display-furo-fat-string The display-furo-fat-string component displays a FieldNode of type furo.fat.String in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _updateMeta # _updateMeta() ⟹ void
* → fn&ndash;update-meta
_formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:92,href:"/docs/typerenderer/display-furo-fat-Uint32/",title:"display-furo-fat-Uint32",section:"Typerenderer",content:` display-furo-fat-Uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-uint32.js'; exports DisplayFuroFatUint32 js exports &lt;display-furo-fat-uint32&gt; custom-element-definition extends /src/typerenderer/display-furo-fat-int32.js superclass DisplayFuroFatInt32
Summary: display renderer for furo.fat.Uint32
Description # display-furo-fat-uint32 The display-furo-fat-uint32 component displays a FieldNode of type furo.fat.Uint32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:93,href:"/docs/typerenderer/display-furo-fat-uint64/",title:"display-furo-fat-uint64",section:"Typerenderer",content:` display-furo-fat-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-fat-uint64.js'; exports DisplayFuroFatUint64 js exports &lt;display-furo-fat-uint64&gt; custom-element-definition extends /src/typerenderer/display-furo-fat-int64.js superclass DisplayFuroFatInt64
Summary: display renderer for furo.fat.Uint64
Description # display-furo-fat-uint64 The display-furo-fat-uint64 component displays a FieldNode of type furo.fat.uint64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:94,href:"/docs/typerenderer/display-furo-link/",title:"display-furo-link",section:"Typerenderer",content:` display-furo-link # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-link.js'; exports DisplayFuroLink js exports &lt;display-furo-link&gt; custom-element-definition superclass LitElement
Summary: display renderer for furo.Link
Description # display-furo-link The display-furo-link component displays a FieldNode of type furo.Link in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:95,href:"/docs/typerenderer/display-furo-numberproperty/",title:"display-furo-numberproperty",section:"Typerenderer",content:" display-furo-numberproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-numberproperty.js'; exports DisplayFuroNumberproperty js exports &lt;display-furo-numberproperty&gt; custom-element-definition extends /src/typerenderer/display-furo-integerproperty.js superclass DisplayFuroIntegerproperty\nSummary: display renderer for furo.Numberproperty\nDescription # display-furo-numberproperty The display-furo-numberrproperty component displays a FieldNode of type furo.Numberproperty in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue "}),e.add({id:96,href:"/docs/typerenderer/display-furo-property/",title:"display-furo-property",section:"Typerenderer",content:` display-furo-property # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-property.js'; exports DisplayFuroProperty js exports &lt;display-furo-property&gt; custom-element-definition superclass LitElement mixes FBP
Summary: display renderer for furo.Property
Description # display-furo-property The display-furo-property component displays a FieldNode of type furo.Property in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # noDataText # noDataText string default: ''
Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the display-furo-property is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:97,href:"/docs/typerenderer/display-furo-property-labeled/",title:"display-furo-property-labeled",section:"Typerenderer",content:` display-furo-property-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-property-repeats-labeled.js'; exports DisplayFuroPropertyRepeatsLabeled js exports &lt;display-furo-property-repeats-labeled&gt; custom-element-definition extends /src/typerenderer/display-furo-property-repeated.js superclass DisplayFuroPropertyRepeated
Summary: display renderer for [] furo.Property with labels
Description # display-furo-property-repeats-labeled The display-furo-property-repeats-labeled component displays a RepeaterNode of type furo.Property in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # elementList # default: []
_typeResolved # default: false
noDataText # noDataText String Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the display-furo-property-repeats is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:98,href:"/docs/typerenderer/display-furo-property-repeated/",title:"display-furo-property-repeated",section:"Typerenderer",content:` display-furo-property-repeated # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-property-repeated.js'; exports DisplayFuroPropertyRepeated js exports &lt;display-furo-property-repeated&gt; custom-element-definition superclass LitElement mixes FBP
Summary: display renderer for [] furo.Property
Description # display-furo-property-repeats The display-furo-property-repeats component displays a FieldNode of type furo.Property in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # elementList # default: []
_typeResolved # default: false
noDataText # noDataText String Defines the empty state display With a furo.Property type, the effective type is only known when the data is transmitted. Default: &rsquo;' Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the display-furo-property-repeats is a simple proxy element to show the initial state if no data is available.
fieldNode _updateFieldList # _updateFieldList() ⟹ void
* → fn&ndash;update-field-list
`}),e.add({id:99,href:"/docs/typerenderer/display-furo-reference/",title:"display-furo-reference",section:"Typerenderer",content:` display-furo-reference # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-reference.js'; exports DisplayFuroReference js exports &lt;display-furo-reference&gt; custom-element-definition superclass LitElement mixes FBP
Summary: display renderer for furo.Reference
Description # display-furo-reference The display-furo-reference component displays a FieldNode of type furo.Reference in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Events # selected # at-selected → \`\`
when item was clicked or selected, because click from ui5 does not bubble Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:100,href:"/docs/typerenderer/display-furo-stringoptionproperty/",title:"display-furo-stringoptionproperty",section:"Typerenderer",content:` display-furo-stringoptionproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-stringoptionproperty.js'; exports DisplayFuroStringoptionproperty js exports &lt;display-furo-stringoptionproperty&gt; custom-element-definition extends /src/typerenderer/display-furo-stringproperty.js superclass DisplayFuroStringproperty
Summary: display renderer for furo.Stringoptionproperty
Description # display-furo-stringoptionproperty The display-furo-numberrproperty component displays a FieldNode of type furo.Stringoptionproperty in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _text # _text string default: ''
Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:101,href:"/docs/typerenderer/display-furo-stringproperty/",title:"display-furo-stringproperty",section:"Typerenderer",content:` display-furo-stringproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-stringproperty.js'; exports DisplayFuroStringproperty js exports &lt;display-furo-stringproperty&gt; custom-element-definition extends /src/typerenderer/display-string.js superclass DisplayString
Summary: display renderer for furo.Stringproperty
Description # display-furo-stringproperty The display-furo-stringproperty component displays a FieldNode of type furo.Stringproperty in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _text # _text string default: ''
Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:102,href:"/docs/typerenderer/display-furo-type-date/",title:"display-furo-type-date",section:"Typerenderer",content:` display-furo-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-type-date.js'; exports DisplayFuroTypeDate js exports &lt;display-furo-type-date&gt; custom-element-definition extends /src/typerenderer/display-google-type-date.js superclass DisplayGoogleTypeDate
Summary: display renderer for furo.type.Date
Description # display-furo-type-date The display-furo-type-date component displays a FieldNode of type furo.type.Date in read only mode.
if the field display_name is set, the component will use that value for the display.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:103,href:"/docs/typerenderer/display-furo-type-money/",title:"display-furo-type-money",section:"Typerenderer",content:` display-furo-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-furo-type-money.js'; exports DisplayFuroTypeMoney js exports &lt;display-furo-type-money&gt; custom-element-definition extends /src/typerenderer/display-google-type-money.js superclass DisplayGoogleTypeMoney
Summary: display renderer for furo.type.Money
Description # display-furo-type-money The display-furo-type-money component displays a FieldNode of type furo.type.Money in read only mode.
if the field display_name is set, the component will use that value for the display.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:104,href:"/docs/typerenderer/display-google-protobuf-/",title:"display-google-protobuf-",section:"Typerenderer",content:` display-google-protobuf- # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-any.js'; exports DisplayGoolgeProtobufAny js exports &lt;display-google-protobuf-any&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.protobuf.
Description # display-google-protobuf-any The display-google-protobuf-any component is a wrapper displays of type google.protobuf.Any in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _typeResolved # default: false
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component the display-google-protobuf-any is a simple proxy element to show the initial state if no data is available.
fieldNode `}),e.add({id:105,href:"/docs/typerenderer/display-google-protobuf-boolvalue/",title:"display-google-protobuf-boolvalue",section:"Typerenderer",content:` display-google-protobuf-boolvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-boolvalue.js'; exports DisplayGoolgeProtobufBoolvalue js exports &lt;display-google-protobuf-boolvalue&gt; custom-element-definition extends /src/typerenderer/display-bool.js superclass DisplayBool
Summary: display renderer for google.protobuf.BoolValue
Description # display-google-protobuf-boolvalue The display-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.BoolValue in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:106,href:"/docs/typerenderer/display-google-protobuf-doublevalue/",title:"display-google-protobuf-doublevalue",section:"Typerenderer",content:" display-google-protobuf-doublevalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-doublevalue.js'; exports DisplayGoogleProtobufDoublevalue js exports &lt;display-google-protobuf-doublevalue&gt; custom-element-definition extends /src/typerenderer/display-double.js superclass DisplayDouble\nSummary: display renderer for google.protobuf.DoubleValue\nDescription # display-double The display-double component displays a FieldNode of type google.protobuf.DoubleValue in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue "}),e.add({id:107,href:"/docs/typerenderer/display-google-protobuf-floatvalue/",title:"display-google-protobuf-floatvalue",section:"Typerenderer",content:" display-google-protobuf-floatvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-floatvalue.js'; exports DisplayGoolgeProtobufFloatvalue js exports &lt;display-google-protobuf-floatvalue&gt; custom-element-definition extends /src/typerenderer/display-float.js superclass DisplayFloat\nSummary: display renderer for google.protobuf.FloatValue\nDescription # display-google-protobuf-floatvalue The display-google-protobuf-floatvalue component displays a FieldNode of type google.protobuf.FloatValue in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue "}),e.add({id:108,href:"/docs/typerenderer/display-google-protobuf-int32Value/",title:"display-google-protobuf-int32Value",section:"Typerenderer",content:" display-google-protobuf-int32Value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-int32value.js'; exports DisplayGoolgeProtobufIn32value js exports &lt;display-google-protobuf-int32value&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32\nSummary: display renderer for google.protobuf.Int32Value\nDescription # display-google-protobuf-boolvalue The display-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Int32Value in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber "}),e.add({id:109,href:"/docs/typerenderer/display-google-protobuf-int64Value/",title:"display-google-protobuf-int64Value",section:"Typerenderer",content:" display-google-protobuf-int64Value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-int64value.js'; exports DisplayGoolgeProtobufIn64value js exports &lt;display-google-protobuf-int64value&gt; custom-element-definition extends /src/typerenderer/display-int64.js superclass DisplayInt64\nSummary: display renderer for google.protobuf.Int64Value\nDescription # display-google-protobuf-boolvalue The display-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Int64Value in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber "}),e.add({id:110,href:"/docs/typerenderer/display-google-protobuf-stringvalue/",title:"display-google-protobuf-stringvalue",section:"Typerenderer",content:` display-google-protobuf-stringvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-stringvalue.js'; exports DisplayGoogleProtobufStringvalue js exports &lt;display-google-protobuf-stringvalue&gt; custom-element-definition extends /src/typerenderer/display-string.js superclass DisplayString
Summary: display renderer for google.protobuf.StringValue
Description # display-google-protobuf-stringvalue The display-google-protobuf-stringvalue component displays a FieldNode of type google.protobuf.StringValue in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _text # _text string default: ''
Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:111,href:"/docs/typerenderer/display-google-protobuf-timestamp/",title:"display-google-protobuf-timestamp",section:"Typerenderer",content:` display-google-protobuf-timestamp # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-timestamp.js'; exports DisplayGoogleProtobufTimestamp js exports &lt;display-google-protobuf-timestamp&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.protobuf.Timestamp
Description # display-google-protobuf-timestamp The display-google-protobuf-timestamp component displays a FieldNode of type google.prtobuf.Timestamp in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:112,href:"/docs/typerenderer/display-google-protobuf-uint32value/",title:"display-google-protobuf-uint32value",section:"Typerenderer",content:" display-google-protobuf-uint32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-uint32value.js'; exports DisplayGoolgeProtobufUin32value js exports &lt;display-google-protobuf-uint32value&gt; custom-element-definition extends /src/typerenderer/display-uint32.js superclass DisplayUint32\nSummary: display renderer for google.protobuf.Uint32Value\nDescription # display-google-protobuf-boolvalue The display-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Uint32Value in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber "}),e.add({id:113,href:"/docs/typerenderer/display-google-protobuf-uint64value/",title:"display-google-protobuf-uint64value",section:"Typerenderer",content:" display-google-protobuf-uint64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-protobuf-uint64value.js'; exports DisplayGoolgeProtobufUin64value js exports &lt;display-google-protobuf-uint64value&gt; custom-element-definition extends /src/typerenderer/display-uint64.js superclass DisplayUint64\nSummary: display renderer for google.protobuf.Uint64Value\nDescription # display-google-protobuf-boolvalue The display-google-protobuf-boolvalue component displays a FieldNode of type google.protobuf.Uint64Value in read only mode.\nEvery display-xxx component should implement the following API:\nfunction: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(number `` ) ⟹ void\n`` → fn&ndash;format-display\nnumber "}),e.add({id:114,href:"/docs/typerenderer/display-google-type-color/",title:"display-google-type-color",section:"Typerenderer",content:` display-google-type-color # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-type-color.js'; exports DisplayGoolgeTypeColor js exports &lt;display-google-type-color&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.type.Color
Description # display-google-type-color The display-google-type-color component displays a FieldNode of type google.type.Color in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _red # default: ''
_green # default: ''
_blue # default: ''
Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode `}),e.add({id:115,href:"/docs/typerenderer/display-google-type-date/",title:"display-google-type-date",section:"Typerenderer",content:` display-google-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-type-date.js'; exports DisplayGoogleTypeDate js exports &lt;display-google-type-date&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.type.Date
Description # display-google-type-date The display-google-type-date component displays a FieldNode of type google.type.Date in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:116,href:"/docs/typerenderer/display-google-type-datetime/",title:"display-google-type-datetime",section:"Typerenderer",content:" display-google-type-datetime # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-type-datetime.js'; exports DisplayGoogleTypeDatetime js exports &lt;display-google-type-datetime&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter\nSummary:\nDescription # display-google-type-datetime Component description here!\nAttributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value `` ) ⟹ void\n`` → fn-on-fna-field-value-changed\nvalue _formatDisplay # _formatDisplay(fieldValue `` ) ⟹ void\n`` → fn&ndash;format-display\nfieldValue "}),e.add({id:117,href:"/docs/typerenderer/display-google-type-money/",title:"display-google-type-money",section:"Typerenderer",content:` display-google-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-type-money.js'; exports DisplayGoogleTypeMoney js exports &lt;display-google-type-money&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.type.Money
Description # display-google-type-money The display-google-type-money component displays a FieldNode of type google.type.Money in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:118,href:"/docs/typerenderer/display-google-type-timeofday/",title:"display-google-type-timeofday",section:"Typerenderer",content:` display-google-type-timeofday # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-google-type-timeofday.js'; exports DisplayGoogleTypeTimeofday js exports &lt;display-google-type-timeofday&gt; custom-element-definition superclass LitElement
Summary: display renderer for google.type.TimeOfDay
Description # display-google-type-timeofday The display-google-type-timeofday component displays a FieldNode of type google.type.TimeOfDay in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a field node to the component
fieldNode _formatDisplay # _formatDisplay() ⟹ void
* → fn&ndash;format-display
`}),e.add({id:119,href:"/docs/typerenderer/display-int32/",title:"display-int32",section:"Typerenderer",content:` display-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-int32.js'; exports DisplayInt32 js exports &lt;display-int32&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter
Summary: display renderer for int32
Description # display-int32 The display-int32 component displays a FieldNode of type int32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number `}),e.add({id:120,href:"/docs/typerenderer/display-int64/",title:"display-int64",section:"Typerenderer",content:` display-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-int64.js'; exports DisplayInt64 js exports &lt;display-int64&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32
Summary: display renderer for int64
Description # display-int64 The display-int64 component displays a FieldNode of type int64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number `}),e.add({id:121,href:"/docs/typerenderer/display-string/",title:"display-string",section:"Typerenderer",content:` display-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-string.js'; exports DisplayString js exports &lt;display-string&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter
Summary: display renderer for string
Description # display-string The display-string component displays a FieldNode of type string in read only mode.
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # _text # _text string default: ''
Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value `}),e.add({id:122,href:"/docs/typerenderer/display-uint32/",title:"display-uint32",section:"Typerenderer",content:` display-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-uint32.js'; exports DisplayUint32 js exports &lt;display-uint32&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32
Summary: display renderer for uint32
Description # display-uint32 The display-uint32 component displays a FieldNode of type uint32 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number `}),e.add({id:123,href:"/docs/typerenderer/display-uint64/",title:"display-uint64",section:"Typerenderer",content:` display-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/display-uint64.js'; exports DisplayUint64 js exports &lt;display-uint64&gt; custom-element-definition extends /src/typerenderer/display-int32.js superclass DisplayInt32
Summary: display renderer for uint64
Description # display-uint64 The display-uint64 component displays a FieldNode of type uint64 in read only mode.
The component uses locale from the environment to display the date value accordingly. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
Every display-xxx component should implement the following API:
function: bindData(fieldNode){&hellip;} Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value _formatDisplay # _formatDisplay(number \`\` ) ⟹ void
\`\` → fn&ndash;format-display
number `}),e.add({id:124,href:"/docs/typerenderer/form-bool/",title:"form-bool",section:"Typerenderer",content:` form-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-bool.js'; exports FormBool js exports &lt;form-bool&gt; custom-element-definition extends /src/furo-ui5-checkbox-input-labeled.js superclass FuroUi5CheckboxInputLabeled
Summary: form renderer for bool
Description # form-bool is a form context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:125,href:"/docs/typerenderer/form-double/",title:"form-double",section:"Typerenderer",content:` form-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-double.js'; exports FormDouble js exports &lt;form-double&gt; custom-element-definition extends /src/furo-ui5-number-input-labeled.js superclass FuroUi5NumberInputLabeled
Summary: form renderer for double
Description # Attributes and Properties # Methods # `}),e.add({id:126,href:"/docs/typerenderer/form-float/",title:"form-float",section:"Typerenderer",content:` form-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-float.js'; exports FormFloat js exports &lt;form-float&gt; custom-element-definition extends /src/furo-ui5-number-input-labeled.js superclass FuroUi5NumberInputLabeled
Summary: form renderer for float
Description # Attributes and Properties # Methods # `}),e.add({id:127,href:"/docs/typerenderer/form-furo-bigdecimal/",title:"form-furo-bigdecimal",section:"Typerenderer",content:` form-furo-bigdecimal # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-bigdecimal.js'; exports FormFuroBigdecimal js exports &lt;form-furo-bigdecimal&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for type furo.BigDecimal
Description # Attributes and Properties # Methods # `}),e.add({id:128,href:"/docs/typerenderer/form-furo-fat-bool/",title:"form-furo-fat-bool",section:"Typerenderer",content:` form-furo-fat-bool # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-bool.js'; exports FormFuroFatBool js exports &lt;form-furo-fat-bool&gt; custom-element-definition extends /src/typerenderer/form-bool.js superclass FormBool
Summary: form renderer for furo.fat.Bool
Description # form-furo-fat-bool is a form context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:129,href:"/docs/typerenderer/form-furo-fat-double/",title:"form-furo-fat-double",section:"Typerenderer",content:` form-furo-fat-double # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-double.js'; exports FormFuroFatDouble js exports &lt;form-furo-fat-double&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Double
Description # form-furo-fat-double is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:130,href:"/docs/typerenderer/form-furo-fat-float/",title:"form-furo-fat-float",section:"Typerenderer",content:` form-furo-fat-float # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-float.js'; exports FormFuroFatFloat js exports &lt;form-furo-fat-float&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Float
Description # form-furo-fat-float is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:131,href:"/docs/typerenderer/form-furo-fat-int32/",title:"form-furo-fat-int32",section:"Typerenderer",content:` form-furo-fat-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-int32.js'; exports FormFuroFatInt32 js exports &lt;form-furo-fat-int32&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Int32
Description # form-furo-fat-int32 is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:132,href:"/docs/typerenderer/form-furo-fat-int64/",title:"form-furo-fat-int64",section:"Typerenderer",content:` form-furo-fat-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-int64.js'; exports FormFuroFatInt64 js exports &lt;form-furo-fat-int64&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Int64
Description # form-furo-fat-int64 is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:133,href:"/docs/typerenderer/form-furo-fat-string/",title:"form-furo-fat-string",section:"Typerenderer",content:" form-furo-fat-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-string.js'; exports FormFuroFatString js exports &lt;form-furo-fat-string&gt; custom-element-definition extends /src/furo-ui5-text-input-labeled.js superclass FuroUi5TextInputLabeled\nSummary: form renderer for furo.fat.String\nDescription # Attributes and Properties # Methods # bindData # bindData(fieldNode `` ) ⟹ void\n`` → fn-bind-data\nfieldNode "}),e.add({id:134,href:"/docs/typerenderer/form-furo-fat-uint32/",title:"form-furo-fat-uint32",section:"Typerenderer",content:` form-furo-fat-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-uint32.js'; exports FormFuroFatUint32 js exports &lt;form-furo-fat-uint32&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Uint32
Description # form-furo-fat-uint32 is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:135,href:"/docs/typerenderer/form-furo-fat-uint64/",title:"form-furo-fat-uint64",section:"Typerenderer",content:` form-furo-fat-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-fat-uint64.js'; exports FormFuroFatUint64 js exports &lt;form-furo-fat-uint64&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.fat.Uint64
Description # form-furo-fat-uint64 is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:136,href:"/docs/typerenderer/form-furo-integerproperty/",title:"form-furo-integerproperty",section:"Typerenderer",content:` form-furo-integerproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-numberproperty.js'; exports FormFuroNumberproperty js exports &lt;form-furo-numberproperty&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for furo.Integerproperty
Description # form-furo-integerproperty is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # bindData # bindData(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-data
fieldNode `}),e.add({id:137,href:"/docs/typerenderer/form-furo-reference/",title:"form-furo-reference",section:"Typerenderer",content:` form-furo-reference # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-reference.js'; exports FormFuroReference js exports &lt;form-furo-reference&gt; custom-element-definition extends /src/furo-ui5-reference-search-labeled.js superclass FuroUi5ReferenceSearchLabeled
Summary: form renderer for furo.Reference
Description # Attributes and Properties # Methods # `}),e.add({id:138,href:"/docs/typerenderer/form-furo-stringoptionproperty/",title:"form-furo-stringoptionproperty",section:"Typerenderer",content:" form-furo-stringoptionproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-stringoptionproperty.js'; exports FormFuroStringoptionproperty js exports &lt;form-furo-stringoptionproperty&gt; custom-element-definition extends /src/furo-ui5-select-labeled.js superclass FuroUi5SelectLabeled\nSummary: form renderer for furo.Stringoptionproperty\nDescription # Attributes and Properties # Methods # bindData # bindData(fieldNode `` ) ⟹ void\n`` → fn-bind-data\nfieldNode "}),e.add({id:139,href:"/docs/typerenderer/form-furo-stringproperty/",title:"form-furo-stringproperty",section:"Typerenderer",content:" form-furo-stringproperty # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-stringproperty.js'; exports FormFuroStringproperty js exports &lt;form-furo-stringproperty&gt; custom-element-definition extends /src/furo-ui5-text-input-labeled.js superclass FuroUi5TextInputLabeled\nSummary: form renderer for furo.Stringproperty\nDescription # Attributes and Properties # Methods # bindData # bindData(fieldNode `` ) ⟹ void\n`` → fn-bind-data\nfieldNode "}),e.add({id:140,href:"/docs/typerenderer/form-furo-type-date/",title:"form-furo-type-date",section:"Typerenderer",content:` form-furo-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-type-date.js'; exports FormFuroTypeDate js exports &lt;form-furo-type-date&gt; custom-element-definition extends /src/furo-ui5-date-picker-labeled.js superclass FuroUi5DatePickerLabeled
Summary: form renderer for furo.type.Date
Description # Attributes and Properties # Methods # `}),e.add({id:141,href:"/docs/typerenderer/form-furo-type-money/",title:"form-furo-type-money",section:"Typerenderer",content:` form-furo-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-furo-type-money.js'; exports FormFuroTypeMoney js exports &lt;form-furo-type-money&gt; custom-element-definition extends /src/furo-ui5-money-input-labeled.js superclass FuroUi5MoneyInputLabeled
Summary: form renderer for furo.type.Money
Description # Attributes and Properties # Methods # `}),e.add({id:142,href:"/docs/typerenderer/form-google-protobuf-boolvalue/",title:"form-google-protobuf-boolvalue",section:"Typerenderer",content:` form-google-protobuf-boolvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-boolvalue.js'; exports FormGoogleProtobufBoolvalue js exports &lt;form-google-protobuf-boolvalue&gt; custom-element-definition extends /src/typerenderer/form-bool.js superclass FormBool
Summary: form renderer for google.protobuf.BoolValue
Description # form-google-protobuf-boolvalue is a form context renderer.
It uses furo-ui5-checkbox-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:143,href:"/docs/typerenderer/form-google-protobuf-doublevalue/",title:"form-google-protobuf-doublevalue",section:"Typerenderer",content:` form-google-protobuf-doublevalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-doublevalue.js'; exports FormGoogleProtobufDoublevalue js exports &lt;form-google-protobuf-doublevalue&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for google.protobuf.Double
Description # form-google-protobuf-doublevalue is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:144,href:"/docs/typerenderer/form-google-protobuf-floatvalue/",title:"form-google-protobuf-floatvalue",section:"Typerenderer",content:` form-google-protobuf-floatvalue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-floatvalue.js'; exports FormGoolgeProtobufFloatvalue js exports &lt;form-google-protobuf-floatvalue&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for google.protobuf.FloatValue
Description # form-google-protobuf-floatvalue is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:145,href:"/docs/typerenderer/form-google-protobuf-int32value/",title:"form-google-protobuf-int32value",section:"Typerenderer",content:` form-google-protobuf-int32value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-int32value.js'; exports FormGoolgeProtobufIn32value js exports &lt;form-google-protobuf-int32value&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for google.protobuf.Int32Value
Description # form-google-protobuf-int32value is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:146,href:"/docs/typerenderer/form-google-protobuf-int64value/",title:"form-google-protobuf-int64value",section:"Typerenderer",content:` form-google-protobuf-int64value # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-int64value.js'; exports FormGoolgeProtobufIn64value js exports &lt;form-google-protobuf-int64value&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for google.protobuf.Int64Value
Description # form-google-protobuf-int64value is a form context renderer.
It uses furo-ui5-number-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:147,href:"/docs/typerenderer/form-google-protobuf-stringValue/",title:"form-google-protobuf-stringValue",section:"Typerenderer",content:" form-google-protobuf-stringValue # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-stringvalue.js'; exports FormGoogleProtobufStringvalue js exports &lt;form-google-protobuf-stringvalue&gt; custom-element-definition extends /src/furo-ui5-text-input-labeled.js superclass FuroUi5TextInputLabeled\nSummary: form renderer for google.protobuf.StringValue\nDescription # Attributes and Properties # Methods # bindData # bindData(fieldNode `` ) ⟹ void\n`` → fn-bind-data\nfieldNode "}),e.add({id:148,href:"/docs/typerenderer/form-google-protobuf-timestamp/",title:"form-google-protobuf-timestamp",section:"Typerenderer",content:` form-google-protobuf-timestamp # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-protobuf-timestamp.js'; exports FormGoogleProtobufTimestamp js exports &lt;form-google-protobuf-timestamp&gt; custom-element-definition extends /src/furo-ui5-date-time-picker-labeled.js superclass FuroUi5DateTimePickerLabeled
Summary: form renderer for google.protobuf.Timestamp
Description # Attributes and Properties # Methods # `}),e.add({id:149,href:"/docs/typerenderer/form-google-type-date/",title:"form-google-type-date",section:"Typerenderer",content:` form-google-type-date # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-type-date.js'; exports FormGoogleTypeDate js exports &lt;form-google-type-date&gt; custom-element-definition extends /src/furo-ui5-date-picker-labeled.js superclass FuroUi5DatePickerLabeled
Summary: form renderer for google.type.Date
Description # form-google-type-date is a form context renderer.
It uses furo-ui5-date-picker as the renderer
Attributes and Properties # Methods # `}),e.add({id:150,href:"/docs/typerenderer/form-google-type-money/",title:"form-google-type-money",section:"Typerenderer",content:` form-google-type-money # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-type-money.js'; exports FormGoogleTypeMoney js exports &lt;form-google-type-money&gt; custom-element-definition extends /src/furo-ui5-money-input-labeled.js superclass FuroUi5MoneyInputLabeled
Summary: form renderer for google.type.Money
Description # form-google-type-money is a form context renderer.
It uses furo-ui5-money-input as the renderer
Attributes and Properties # Methods # `}),e.add({id:151,href:"/docs/typerenderer/form-google-type-timeofday/",title:"form-google-type-timeofday",section:"Typerenderer",content:` form-google-type-timeofday # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-google-type-timeofday.js'; exports FormGoogleTypeTimeofday js exports &lt;form-google-type-timeofday&gt; custom-element-definition extends /src/furo-ui5-time-picker-labeled.js superclass FuroUi5TimePickerLabeled
Summary: form renderer for google.type.TimeOfDay
Description # form-google-type-timeofday is a form context renderer.
It uses furo-ui5-time-picker as the renderer
Attributes and Properties # Methods # `}),e.add({id:152,href:"/docs/typerenderer/form-int32/",title:"form-int32",section:"Typerenderer",content:` form-int32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-int32.js'; exports FormInt32 js exports &lt;form-int32&gt; custom-element-definition extends /src/furo-ui5-number-input-labeled.js superclass FuroUi5NumberInputLabeled
Summary: form renderer for int32
Description # Attributes and Properties # Methods # `}),e.add({id:153,href:"/docs/typerenderer/form-int64/",title:"form-int64",section:"Typerenderer",content:` form-int64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-int64.js'; exports FormInt64 js exports &lt;form-int64&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for int64
Description # Attributes and Properties # Methods # `}),e.add({id:154,href:"/docs/typerenderer/form-string/",title:"form-string",section:"Typerenderer",content:` form-string # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-string.js'; exports FormString js exports &lt;form-string&gt; custom-element-definition extends /src/furo-ui5-text-input-labeled.js superclass FuroUi5TextInputLabeled
Summary: form renderer for string
Description # Attributes and Properties # Methods # `}),e.add({id:155,href:"/docs/typerenderer/form-uint32/",title:"form-uint32",section:"Typerenderer",content:` form-uint32 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-uint32.js'; exports FormUint32 js exports &lt;form-uint32&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for uint32
Description # Attributes and Properties # Methods # `}),e.add({id:156,href:"/docs/typerenderer/form-uint64/",title:"form-uint64",section:"Typerenderer",content:` form-uint64 # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/form-uint64.js'; exports FormUint64 js exports &lt;form-uint64&gt; custom-element-definition extends /src/typerenderer/form-int32.js superclass FormInt32
Summary: form renderer for uint64
Description # Attributes and Properties # Methods # `}),e.add({id:157,href:"/docs/components/furo-ui5-barcode-scanner-dialog/",title:"furo-ui5-barcode-scanner-dialog",section:"Components",content:` furo-ui5-barcode-scanner-dialog # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-barcode-scanner-dialog.js'; exports FuroUi5BarcodeScannerDialog js extends src/furo-ui5-barcode-scanner-dialog.js mixes FieldNodeAdapter
Summary: data barcode scanner dialog
Description # The &lsquo;furo-ui5-barcode-scanner-dialog&rsquo; component provides barcode scanning functionality for all devices that support the MediaDevices.getUserMedia() native API. Opening the dialog launches the device camera and scans for known barcode formats. Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the zxing-js/library documentation. https://github.com/zxing-js/library
It supports all features from the SAP ui5 Barcode Scanner Dialog element.
You can bind any string type, like furo.fat.String type or the google.protobuf.StringValue type.
1 2 3 &lt;furo-ui5-button at-click=--openClicked&gt;Open Scanner&lt;/furo-ui5-button&gt; &lt;furo-ui5-barcode-scanner-dialog fn-show=&#34;--openClicked&#34; fn-bind-data=&#34;--dao(*.field)&#34;&gt;&lt;/furo-ui5-barcode-scanner-dialog&gt; Methods # bindData(fieldNode) Bind an entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # Open 1 2 &lt;ui5-button @-click=&#34;--openClicked&#34; design=&#34;Default&#34;&gt;Open&lt;/ui5-button&gt; &lt;furo-ui5-barcode-scanner-dialog fn-show=&#34;--openClicked&#34;&gt;&lt;/furo-ui5-barcode-scanner-dialog&gt; Attributes and Properties # Events # scan-success # at-scan-success → String
Fires when the scan is completed successfuuly. scan-error # at-scan-error → String
Fires when the scan fails with error. furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # `}),e.add({id:158,href:"/docs/components/furo-ui5-bool-icon/",title:"furo-ui5-bool-icon",section:"Components",content:` furo-ui5-bool-icon # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-bool-icon.js'; exports FuroDataBoolIcon js exports &lt;furo-ui5-bool-icon&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Displays a icon for a boolean value
Description # Displays a icon/symbol for a boolean value
This component uses the SAP Ui5 icons. https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
1 &lt;furo-ui5-bool-icon fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-bool-icon&gt; Only @ui5/webcomponents-icons/dist/navigation-down-arrow.js and @ui5/webcomponents-icons/dist/navigation-right-arrow.js are imported. If you set other icons, please do not forget to import them.
Example # Attributes and Properties # symboltrue # symboltrue string default: 'navigation-down-arrow'
Defines the icon for the true state. symbolfalse # symbolfalse string default: 'navigation-right-arrow'
Defines the icon for the false state. field # default: {}
Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode
Supported types: bool
fieldNode toggle # toggle() ⟹ void
* → fn-toggle
Toggles the icon.
`}),e.add({id:159,href:"/docs/components/furo-ui5-busy-indicator/",title:"furo-ui5-busy-indicator",section:"Components",content:` furo-ui5-busy-indicator # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-busy-indicator.js'; exports FuroUiBusyIndicator js extends src/furo-ui5-busy-indicator.js
Summary: ui5 busy indicator with methods
Description # The furo-ui5-busy-indicator signals that some operation is going on and that the user must wait.
1 &lt;furo-ui5-busy-indicator&gt;&lt;/furo-ui5-busy-indicator&gt; https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/
Example # activate deactivate Attributes and Properties # Methods # activate # activate() ⟹ void
* → fn-activate
Sets the busy indicator state to active
deactivate # deactivate() ⟹ void
* → fn-deactivate
Sets the busy indicator state to inactive
`}),e.add({id:160,href:"/docs/components/furo-ui5-button/",title:"furo-ui5-button",section:"Components",content:` furo-ui5-button # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-button.js'; exports FuroUi5Button js extends src/furo-ui5-button.js
Summary: ui5 button with methods
Description # The furo-ui5-button component represents a simple push button. It enables users to trigger actions by clicking or tapping the furo-ui5-button, or by pressing certain keyboard keys, such as Enter. Usage For the furo-ui5-button UI, you can define text, icon, or both. You can also specify whether the text or the icon is displayed first.
1 &lt;furo-ui5-button&gt;Register&lt;/furo-ui5-button&gt; You can choose from a set of predefined types that offer different styling to correspond to the triggered action.
You can set the furo-ui5-button as enabled or disabled. An enabled ui5-button can be pressed by clicking or tapping it. The button changes its style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled furo-ui5-button appears inactive and cannot be pressed.
What is different from ui5-button? With flow based programming it&rsquo;s usual to address functions. So we added two convenience functions for
disabling =&gt; fn-disable enabling =&gt; fn-enable https://sap.github.io/ui5-webcomponents/playground/components/Button/
Example # Hide Show Disable Enable Button Attributes and Properties # Methods # disable # disable() ⟹ void
* → fn-disable
Sets the button state to disabled
enable # enable() ⟹ void
* → fn-enable
Sets the button state to enabled
show # show() ⟹ void
* → fn-show
shows the button, when it was hidden before
hide # hide() ⟹ void
* → fn-hide
hides the button
`}),e.add({id:161,href:"/docs/components/furo-ui5-card/",title:"furo-ui5-card",section:"Components",content:` furo-ui5-card # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-card.js'; exports FuroUi5Card js exports &lt;furo-ui5-card&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Ui5 card with data bindings
Description # The furo-ui5-card is a bindable card that represents information in the form of a tile with separate header and content areas.
1 2 3 4 5 6 7 8 &lt;furo-ui5-card heading=&#34;Title&#34; subheading=&#34;Secondary text&#34; icon=&#34;card&#34; &gt; &lt;div slot=&#34;action&#34;&gt;&lt;furo-ui5-button&gt;Action&lt;/furo-ui5-button&gt;&lt;/div&gt; &lt;div slot=&#34;content&#34;&gt;content goes here&lt;/div&gt; &lt;/furo-ui5-card&gt; How To Use Semantic Colors # You can use semantic colors to visualize the status or state. Set the attribute design=&quot;&quot; with the following values:
Positive (&ndash;sapPositiveColor) Negative (&ndash;sapNegativeColor) Critical (&ndash;sapCriticalColor) Neutral (&ndash;sapCriticalColor) 1 2 3 4 5 6 &lt;furo-ui5-card design=&#34;Positive&#34; icon=&#34;card&#34; &gt; &lt;div slot=&#34;content&#34;&gt;content goes here&lt;/div&gt; &lt;/furo-ui5-card&gt; Example # Action content goes here 1 2 3 4 &lt;furo-ui5-card design=&#34;Positive&#34; icon=&#34;globe&#34; heading=&#34;Title&#34; subheading=&#34;Secondary text&#34; icon=&#34;card&#34;&gt; &lt;div slot=&#34;action&#34;&gt;&lt;furo-ui5-button&gt;Action&lt;/furo-ui5-button&gt;&lt;/div&gt; &lt;div slot=&#34;content&#34;&gt;content goes here&lt;/div&gt; &lt;/furo-ui5-card&gt; Attributes and Properties # icon # icon reflects string default: ''
Defines the visual representation in the header of the card. Supports images and icons. https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html heading # heading string default: ''
Defines the title displayed in the ui5-card header. subheading # subheading string default: ''
Defines the subheading displayed in the ui5-card header. status # status string default: ''
Defines the status text displayed in the card header (upper right).
By enabling the status, actions are not visible. headerInteractive # header-interactive reflects boolean default: false
Defines if the ui5-card header would be interactive, e.g gets hover effect, gets focused and header-click event is fired, when it is pressed. noContentPadding # no-content-padding reflects boolean default: false
Shows the content slot area with no padding Events # header-clicked # at-header-clicked → \`\`
Fired when the card head is clicked. The header-interactive attribute must be set. header-click # at-header-click → \`\`
Fired when interactive header was clicked. Methods # bindHeading # bindHeading(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-heading
Binds any scalar field to set the title of the panel.
Supported types: scalar types e.g. string
fieldNode string bindIcon # bindIcon(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-icon
Binds a FieldNode to set the icon of the panel.
Do not forget to import the icon you will use in your component.
Supported types: string
fieldNode string bindSubheading # bindSubheading(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-subheading
Binds any scalar field to set the subtitle of the panel.
Supported types: scalar types e.g. string
fieldNode string bindNavNode # bindNavNode(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-nav-node
Binds a FieldNode with the following signature:
display_name (string)
secondary_text (string)
icon (string)
fieldNode string Slots # action # Type: HTMLElement [0..n]
defines an action, displayed in the right most part of the header. Note: If status is set, the status text will be displayed, you can either have action, or status. content # Type: HTMLElement [0..n]
defines the content of the card `}),e.add({id:162,href:"/docs/components/furo-ui5-chart/",title:"furo-ui5-chart",section:"Components",content:` furo-ui5-chart # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-chart.js'; exports FuroUi5Chart js exports &lt;furo-ui5-chart&gt; custom-element-definition superclass LitElement
Summary: connect data to a chart
Description # furo-ui5-chart connects data objects (repeaterNodes) with the charting lib.
Use multiple binders if you need more then one series per chart.
1 2 3 4 5 6 7 &lt;furo-ui5-chart-display chart-type=&#34;bar&#34;&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.cost_limit.units&#34; category-field=&#34;data.description&#34; &gt;&lt;/furo-ui5-chart&gt; &lt;/furo-ui5-chart-display&gt; Simple line chart # load data change data 1 2 3 4 5 6 7 8 9 10 11 12 13 14 &lt;furo-ui5-chart-display flex scroll chart-type=&#34;line&#34; no-data-text=&#34;Press load data&#34; fixed-height=&#34;250&#34; tooltip grid legend&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.cost_limit.units&#34; category-field=&#34;data.description&#34; &gt;&lt;/furo-ui5-chart&gt; &lt;/furo-ui5-chart-display&gt; Bubble charts # load data change data 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 &lt;furo-ui5-chart-display chart-type=&#34;bubble&#34; data-labels=&#34;&#34; tooltip=&#34;&#34; legend=&#34;&#34; fixed-height=&#34;300&#34;&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.start.day, data.end.day, data.start.day&#34; category-field=&#34;data.description&#34; axis-label=&#34;End&#34; legend-label=&#34;Group A&#34;&gt;&lt;/furo-ui5-chart&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.end.day,data.start.day, data.start.day&#34; category-field=&#34;data.description&#34; legend-label=&#34;Group B&#34;&gt;&lt;/furo-ui5-chart&gt; &lt;/furo-ui5-chart-display&gt; Sparkline # load data change data 1 2 3 4 5 6 &lt;furo-ui5-chart-display chart-type=&#34;radar&#34; sparkline=&#34;&#34; fixed-height=&#34;145&#34;&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.cost_limit.units&#34; category-field=&#34;data.description&#34;&gt;&lt;/furo-ui5-chart&gt; &lt;/furo-ui5-chart-display&gt; Attributes and Properties # axisLabelOpposite # axis-label-opposite Boolean Put the axis label on the opposite site (usually right) axisLabel # axis-label String Text for the y axis axisLabelColor # axis-label-color String Custom color for the y axis description text axisBorder # axis-border Boolean Show a border on the right side of the y axis descriptions and labels. axisBorderColor # axis-border-color String Custom color for the border. axisTicks # axis-ticks Boolean Show tick marks on the y axis. axisTooltip # axis-tooltip Boolean Show a tooltip with the current value while hovering. axisTicksColor # axis-ticks-color String Custom color for the ticks seriesName # series-name String Series with same name will get the same y-axis legendLabel # legend-label String Label the Series for the legend. This text is also shown on the tooltips. This is useful when you have more then one data series. strokeWidth # chart-stroke-width number default: 1
Define the thickness of the lines in px. markerSize # chart-marker-size number default: 0
Set the size of the markers (hover state) in px. strokeCurve # chart-curve string default: 'straight'
Define the curve style for line and area charts.
Possible values: smooth, straight, stepline dataField # data-field String Define the data field or fields here. For most charts this is the y axis.
Some charts requires more then one data field (i.e. bubbles want at least 3 fields data-field=&quot;data.start.day, data.end.day, data.start.day&quot; ). categoryField # category-field String Define the category field here (only 1 field). You can think of this as it is the x axis for your chart. chartType # chart-type String Use this for mixed charts scenarios only, prefer to define the chart-type on the chart-display. Specify the default type on the display and set the custom type on this binder. chartColor # chart-color String If you need to give an explicit color for the series you can use this attribute. xaxis # xaxis String Events # data-point-clicked # at-data-point-clicked → Fieldnode
Fired when a marker for this data source was clicked data-updated # at-data-updated → data-series
Fired when datasource has updated data Methods # bindData # bindData(data RepeaterNode ) ⟹ void
RepeaterNode → fn-bind-data
Binds a RepeaterNode to the component.
Supported types: repeated types
data `}),e.add({id:163,href:"/docs/components/furo-ui5-chart-display/",title:"furo-ui5-chart-display",section:"Components",content:` furo-ui5-chart-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-chart-display.js'; exports FuroUi5ChartDisplay js exports &lt;furo-ui5-chart-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Display charts with data objects
Description # The furo-ui5-chart-display is the render component to display charts with apex the apex charts lib ( https://github.com/apexcharts/apexcharts.js).
Use furo-ui5-chart to connect your data.
1 2 3 4 5 6 7 &lt;furo-ui5-chart-display chart-type=&#34;bar&#34;&gt; &lt;furo-ui5-chart fn-bind-data=&#34;--projectDAO(*.entities)&#34; data-field=&#34;data.cost_limit.units&#34; category-field=&#34;data.description&#34; &gt;&lt;/furo-ui5-chart&gt; &lt;/furo-ui5-chart-display&gt; Example mixed charts # load data change data Attributes and Properties # sparkline # sparkline Boolean Hides all elements of the chart other than the primary graphic. Use this to visualize data in very small areas. xaxisTitle # xaxis-title String Give the x-axis a title which will be displayed below the axis labels by default. xaxisDatetime # xaxis-datetime Boolean Set this to true if you have datetime, google.type.date or timestamp data on the x-axis zebra # zebra String set zebra color like zebra=&quot;#f3f4f5, #fff&quot; to get stripes noDataText # no-data-text String Set the text to display, if no data is given.
If this option is not set, the default is No data. legend # legend Boolean Enables the legend on bottom left with offset 0:0 dataLabels # data-labels Boolean Enable labels with data on every item. tooltip # tooltip Boolean show a tooltip on mouseover legendAlign # legend-align String Aligns the legend to left center right
default is left legendPosition # legend-position String Set the position of the legend to top, right, bottom, left
Default is bottom legendOffsetX # legend-offset-x Number Moves the legend in the x direction for n pixels from legend-position legendOffsetY # legend-offset-y Number Moves the legend in the y direction for n pixels from legend-position toolbar # toolbar Boolean Enables the toolbar toolbarDownload # toolbar-download Boolean Enables the download option in the toolbar (svg,csv,png) plotHorizontal # plot-horizontal boolean Enable this to draw the bars horizontally grid # grid Boolean Draw the horizontal grid lines chartType # chart-type String line, area, bar are mixable
radar, scatter, heatmap
pie donut polarArea radialBar can only consume 1 data series stacked # stacked Boolean WORK IN PROGRESS Stacked bar charts are not mixable titleText # title-text String Set the title. titleAlign # title-align String Aligns the title. Possible values are &rsquo;left&rsquo;, &lsquo;center&rsquo;, &lsquo;right&rsquo;
Default is left titleOffsetX # title-offset-x Number Moves the title for n pixels on the x-axis from the alignment direction titleOffsetY # title-offset-y Number Moves the title for n pixels on the y-axis from the alignment direction fixedHeight # fixed-height Number Set a fixed height for the plot. Default is auto, this can be useful if you need to control the heights apexOptions # default: **{ series: [], yaxis: [], // belize qualitative color palette // node_modules/@ui5/webcomponents-theming/dist/themes/sap_fiori_3/css_variables.css colors: [ 'var(&ndash;sapChart_OrderedColor_1 , #5899da)', 'var(&ndash;sapChart_OrderedColor_2 , #e8743b)', 'var(&ndash;sapChart_OrderedColor_3 , #19a979)', 'var(&ndash;sapChart_OrderedColor_4 , #ed4a7b)', 'var(&ndash;sapChart_OrderedColor_5 , #945ecf)', 'var(&ndash;sapChart_OrderedColor_6 , #13a4b4)', 'var(&ndash;sapChart_OrderedColor_7 , #525df4)', 'var(&ndash;sapChart_OrderedColor_8 , #bf399e)', 'var(&ndash;sapChart_OrderedColor_9 , #6c8893)', 'var(&ndash;sapChart_OrderedColor_10 ,: #ee6868)', 'var(&ndash;sapChart_OrderedColor_11 ,: #2f6497)', ], noData: { text: 'No data.', align: 'center', verticalAlign: 'middle', offsetX: 0, offsetY: 0, style: { color: undefined, fontSize: '14px', fontFamily: undefined, }, }, chart: { // height: 550, fontFamily: 'var(&ndash;sapFontFamily, Helvetica, Arial, sans-serif)', foreColor: 'var(&ndash;sapTextColor)', type: 'line', stacked: false, background: 'unset', events: {}, toolbar: { show: false, // disable by default tools: { download: false, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true, }, }, sparkline: { enabled: false, }, }, grid: { show: false, // https://apexcharts.com/docs/options/grid/ // zebra // row: { // colors: [&quot;#f3f4f5&quot;, &quot;#fff&quot;], // } }, dataLabels: { enabled: false, },
title: { // text: &amp;#39;XYZ - Analysis&amp;#39;, align: &amp;#39;left&amp;#39;, // offsetX: 70, }, stroke: {}, tooltip: { enabled: false, fixed: { enabled: false, position: &amp;#39;topLeft&amp;#39;, // topRight, topLeft, bottomRight, bottomLeft offsetY: 30, offsetX: 160, }, }, legend: { show: false, position: &amp;#39;bottom&amp;#39;, horizontalAlign: &amp;#39;left&amp;#39;, offsetX: 0, offsetY: 0, formatter: (seriesName, opts) =&amp;gt; { if ( opts.w.config.yaxis[opts.seriesIndex] &amp;amp;&amp;amp; opts.w.config.yaxis[opts.seriesIndex].legendLabel ) { return [opts.w.config.yaxis[opts.seriesIndex].legendLabel]; } return [seriesName]; }, }, plotOptions: {}, xaxis: { // type: &amp;#34;datetime&amp;#34;, // tickAmount: 6, title: { text: undefined, }, }, }**&lt;/small&gt; Events # data-point-clicked # at-data-point-clicked → Fieldnode
Fired when a marker for this data source was clicked. Note: the event is fired from the furo-ui5-chart Methods # `}),e.add({id:164,href:"/docs/components/furo-ui5-checkbox-input/",title:"furo-ui5-checkbox-input",section:"Components",content:` furo-ui5-checkbox-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-checkbox-input.js'; exports FuroUi5CheckboxInput js extends src/furo-ui5-checkbox-input.js mixes FieldNodeAdapter
Summary: data checkbox input field
Description # The &lsquo;furo-ui5-checkbox-input&rsquo; component allows the user to switch true and false for type Bool with data binding.
It supports all features from the SAP ui5 checkbox element.
Bindable FieldNodes: bool type, furo.fat.Bool type or the google.wrapper.BoolValue type.
1 2 3 &lt;furo-ui5-checkbox-input fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-checkbox-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled supported meta and constraints # readonly: true , set the element to readonly The constraint required will mark the element as required.
Example # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-checkbox-input fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-checkbox-input&gt; &lt;furo-ui5-checkbox-input value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-checkbox-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # Events # change # at-change → Boolean
Fired when the checkbox checked state changes. furo-value-changed # at-furo-value-changed → Boolean
Fires the field value when it changes. Methods # check # check() ⟹ void
* → fn-check
Checks the checkbox and updates the value
uncheck # uncheck() ⟹ void
* → fn-uncheck
Unhecks the checkbox and updates the value
bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: bool, google.protobuf.BoolValue, furo.fat.Bool
fieldNode of type: bool, google.protobuf.BoolValue, furo.fat.Bool readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:165,href:"/docs/components/furo-ui5-checkbox-input-labeled/",title:"furo-ui5-checkbox-input-labeled",section:"Components",content:` furo-ui5-checkbox-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-checkbox-input-labeled.js'; exports FuroUi5CheckboxInputLabeled js exports &lt;furo-ui5-checkbox-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-checkbox-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-checkbox-input-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-checkbox-labeled&gt; Example # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-checkbox-input-labeled fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-checkbox-input-labeled&gt; &lt;furo-ui5-checkbox-input-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-checkbox-input-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-checkbox-input full # full boolean This is only used to forward the state to the form-field-container placeholder # placeholder String the placeholder is the additional information beside the label. it will be showed on the right side of the checkbox. required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: bool, google.protobuf.BoolValue, furo.fat.Bool
fieldNode Supported types: bool, google.protobuf.BoolValue, furo.fat.Bool `}),e.add({id:166,href:"/docs/components/furo-ui5-combobox/",title:"furo-ui5-combobox",section:"Components",content:` furo-ui5-combobox # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-combobox.js'; exports FuroUi5Combobox js mixes FieldNodeAdapter
Summary: data combobox field
Description # The furo-ui5-combobox component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select an option from a predefined list. Use the function bindOptions to bind a RepeaterNode as an option list.
1 2 3 4 &lt;furo-ui5-combobox fn-bind-data=&#34;--entity(*.data.description)&#34; fn-bind-options=&#34;--collection(*.entities)&#34;&gt; &lt;/furo-ui5-combobox&gt; You can bind the options, or enter the options in the html
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 &lt;furo-ui5-combobox placeholder=&#34;Enter value&#34; fn-bind-data=&#34;--entity(*.data.description)&#34;&gt; &lt;ui5-cb-item text=&#34;Item 1&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 2&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 3&#34;&gt;&lt;/ui5-cb-item&gt; &lt;/furo-ui5-combobox&gt; &lt;furo-ui5-combobox value-state=&#34;Success&#34; fn-bind-data=&#34;--entity(*.data.item1)&#34;&gt; &lt;ui5-cb-item text=&#34;Item 1&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 2&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 3&#34;&gt;&lt;/ui5-cb-item&gt; &lt;/furo-ui5-combobox&gt; &lt;furo-ui5-combobox value-state=&#34;Warning&#34; value=&#34;Item 2&#34; fn-bind-data=&#34;--entity(*.data.item2)&#34;&gt; &lt;ui5-cb-item text=&#34;Item 1&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 2&#34;&gt;&lt;/ui5-cb-item&gt; &lt;ui5-cb-item text=&#34;Item 3&#34;&gt;&lt;/ui5-cb-item&gt; &lt;/furo-ui5-combobox&gt; Attributes and Properties # activeFieldBinding # default: false
Flag to indicate if a field is attached Default: false displayFieldPath # default: 'display_name'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items. Point-separated path to the field E.g. data.partner.display_name default: display_name This attribute is related to the option list descFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional description of the option items. Point-separated path to the field E.g. data.partner.id default: id This attribute is related to the option list wait # default: 250
Debounce time in milliseconds Default value: 250 Events # search-requested # at-search-requested → value
Fired when typing in input (debounced, default 250ms) options-updated # at-options-updated → optionNodeList
Fired after the option list was rebuilt. selection-change # at-selection-change → selectedOption
Fired when selection is changed by user interaction furo-value-changed # at-furo-value-changed → selectedOption
Fired after the field value was changed. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, required,readonly,disabled, value-field-path, display-field-path Use this after manual or scripted update of the attributes.
bindData # bindData(fieldNode FieldNode ) ⟹ boolean
FieldNode → fn-bind-data
Overridden bindData of FieldNodeAdapter
fieldNode bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Here a RepeaterNode can be connected to the component as an option list.
repeaterNode onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:167,href:"/docs/components/furo-ui5-combobox-labeled/",title:"furo-ui5-combobox-labeled",section:"Components",content:` furo-ui5-combobox-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-combobox-labeled.js'; exports FuroUi5ComboboxLabeled js exports &lt;furo-ui5-combobox-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled combobox
Description # furo-ui5-combobox-labeled The furo-ui5-combobox-labeled is a composition to easily use a complete data combobox with label according to the design specification of SAP Fiori Design System.
Example # Markup # 1 2 3 4 5 6 &lt;furo-ui5-combobox-labeled placeholder=&#34;Enter value&#34; fn-bind-data=&#34;--dao(*.type_with_options)&#34;&gt;&lt;/furo-ui5-combobox-labeled&gt; &lt;furo-data-object type=&#34;experiment.Experiment&#34; @-object-ready=&#34;--dao&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # label # label string default: ''
the label for the data-number-input descFieldPath # desc-field-path string default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional description of the option items. Point-separated path to the field E.g. data.partner.id default: id This attribute is related to the option list displayFieldPath # display-field-path string default: 'display_name'
Defines the field path that is used from the injected RepeaterNode to display the option items. Point-separated path to the field E.g. data.partner.display_name full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Binds a repeaterNode to the furo-ui5-combobox component
repeaterNode Slots # valueStateMessage # Type: HTMLElement
defines the value state message that will be displayed as pop up under the input element. `}),e.add({id:168,href:"/docs/components/furo-ui5-context-menu/",title:"furo-ui5-context-menu",section:"Components",content:` furo-ui5-context-menu # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-context-menu.js'; exports FuroUi5ContextMenu js exports &lt;furo-ui5-context-menu&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Context menu
Description # furo-ui5-context-menu is a context menu or menu element.
A furo-ui5-context-menu-display element must be inserted in one of the parent elements of the element where you use the furo-ui5-context-menu. The app-shell or even body is a good place for that.
furo-ui5-context-menu uses diplay:inline, do not forget to change it to display:block if you place it around a block level element.
1 2 3 &lt;furo-ui5-context-menu fn-trigger=&#34;--menuClkd&#34; fn-bind-data=&#34;--menuObject&#34; at-menu-item-selected=&#34;--menuItem&#34;&gt; &lt;ui5-icon name=&#34;menu&#34; at-click=&#34;--menuClkd&#34;&gt;&lt;/ui5-icon&gt; &lt;/furo-ui5-context-menu&gt; Data signature # 1 2 3 4 5 6 7 8 - type: &#39;menu.Menuitem #Item signature for a context menu&#39; fields: icon: &#39;string:1 #Leading icon of the menu&#39; display_name: &#39;string:2 #String representation of the menu item. Menu item text&#39; disabled: &#39;bool:3 #Display actions as disabled when they can only be used sometimes and under certain conditions.&#39; command: &#39;string:4 #Keyboard command hint&#39; leading_divider: &#39;bool:5 #Item has a leading divider line&#39; children: &#39;[] menu.Menuitem:6 #Children of this item&#39; Minimal data signature # 1 2 3 4 - type: &#39;menu.Menuitem #Item signature for a context menu&#39; fields: id: &#39;string:1 #Id of the menu item&#39; display_name: &#39;string:2 #String representation of the menu item. Menu item text&#39; Example # Note The demo is a little bit broken, because of the scrolling position of the documentation system. Scroll up to see the menu after you opened it.
open menu 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 &lt;body&gt; &lt;!-- The display must be placed in a parent element --&gt; &lt;furo-ui5-context-menu-display&gt;&lt;/furo-ui5-context-menu-display&gt; &lt;main&gt; &lt;div&gt; &lt;article&gt; &lt;furo-ui5-context-menu fn-trigger=&#34;--menuClkd&#34; fn-bind-data=&#34;--menuDO&#34; @-menu-item-selected=&#34;--menuItemSelected&#34; &gt;&lt;ui5-icon name=&#34;meal&#34; @-click=&#34;--menuClkd&#34;&gt;open menu&lt;/ui5-icon&gt; &lt;/furo-ui5-context-menu&gt; &lt;/article&gt; &lt;/div&gt; &lt;/main&gt; Attributes and Properties # Events # menu-item-selected # at-menu-item-selected → {context, menuitem}
Fired when a menu item is selected. Methods # bindData # bindData(menu \`\` ** Fieldnode ) ⟹ void
\`\` Fieldnode → fn-bind-data
Bind your menu object.
menu || RepeaterNode} menu with menu.Menuitem signature setContext # setContext(ctx * ) ⟹ void
* → fn-set-context
Sets the context. Use this if you want to set a Object as context
ctx Can be anything, will be returned at the menu-item-selected method trigger # trigger(byKeyboard \`\` ) ⟹ void
\`\` → fn-trigger
Triggers the context menu. Set by keyboard to true to focus the first element for keyboard navigation
byKeyboard triggerContext # triggerContext(context Object byKeyboard \`\` ) ⟹ void
Object \`\` → fn-trigger-context
triggers the menu with context
context byKeyboard Slots # default # Type: HTMLElement
default slot to add an individual context menu opener component (e.g. furo-icon-button). `}),e.add({id:169,href:"/docs/components/furo-ui5-context-menu-display/",title:"furo-ui5-context-menu-display",section:"Components",content:` furo-ui5-context-menu-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-context-menu-display.js'; exports FuroUi5ContextMenuDisplay js exports &lt;furo-ui5-context-menu-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: context menu
Description # The furo-ui5-context-menu-display is the display element for furo-ui5-context-menu and submenus. Place this component as high as needed in your dom.
You should not interact with this component directly. Use furo-ui5-context-menu to show a context menu.
There is nothing more to do. The menu creates a transparent &ldquo;backdrop&rdquo; with absolute positions 0 0 0 0
1 &lt;furo-ui5-context-menu-display&gt;&lt;/furo-ui5-context-menu-display&gt; Attributes and Properties # borderDistance # default: 48
Distance for the sub menus in pixel. This value is used to calculate if the menu or sub menu should apear on the left or on the right. Methods # hideMenu # hideMenu() ⟹ void
* → fn-hide-menu
Hides the menu witout selecting anything.
If you click somewhere on the background, the menu will also disappear.
`}),e.add({id:170,href:"/docs/components/furo-ui5-context-menu-item/",title:"furo-ui5-context-menu-item",section:"Components",content:` furo-ui5-context-menu-item # @furo/ui5 v1.18.0 import '@furo/ui5/src/subcomponents/furo-ui5-context-menu-item.js'; exports FuroUi5ContextMenuItem js exports &lt;furo-ui5-context-menu-item&gt; custom-element-definition superclass LitElement mixes FBP
Summary: context menu item
Description # furo-ui5-context-menu-item is a helper component for furo-ui5-context-menu.
It is not intended for direct usage
Attributes and Properties # icon # default: 'border'
focused # focused reflects Boolean focused state disabled # disabled reflects Boolean disabled state Events # mousefocus # at-mousefocus → index
Fired when hovered with mouse opensub-requested # at-opensub-requested → menu: this.menuitem, initiator: this
Fired when submenu should be opened item-selected # at-item-selected → item
Fired when item was selected Methods # bindData # bindData(menuNode \`\` ) ⟹ void
\`\` → fn-bind-data
Bind a single menu node with a menu.Menuitem signature.
menuNode index # index(i \`\` ) ⟹ void
\`\` → fn-index
store the index for mouseover focus
i setFocused # setFocused() ⟹ void
* → fn-set-focused
mark item as focused
unsetFocused # unsetFocused() ⟹ void
* → fn-unset-focused
mark item as unfocused
`}),e.add({id:171,href:"/docs/components/furo-ui5-context-submenu/",title:"furo-ui5-context-submenu",section:"Components",content:` furo-ui5-context-submenu # @furo/ui5 v1.18.0 import '@furo/ui5/src/subcomponents/furo-ui5-context-submenu.js'; exports FuroUi5ContextSubmenu js exports &lt;furo-ui5-context-submenu&gt; custom-element-definition superclass LitElement mixes FBP
Summary: helper
Description # furo-ui5-context-submenu is a helper component for furo-ui5-context-menu.
Use furo-ui5-context-menu to show a context menu.
Attributes and Properties # borderDistance # default: 48
depth # depth Number Depth of the submenu Methods # init # init(e *display* byKeyboard \`\` ) ⟹ void
\`\` → fn-init
e display byKeyboard hideMenu # hideMenu() ⟹ void
* → fn-hide-menu
triggerNavigation # triggerNavigation(key \`\` ) ⟹ void
\`\` → fn-trigger-navigation
Interface for the furo navigation pad
key `}),e.add({id:172,href:"/docs/components/furo-ui5-date-picker/",title:"furo-ui5-date-picker",section:"Components",content:` furo-ui5-date-picker # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-date-picker.js'; exports FuroUi5DatePicker js mixes FieldNodeAdapter
Summary: bindable datepicker field
Description # The furo-ui5-date-picker component allows the user to bind an date object like google.type.Date or a date string with ISO 8061 format like &ldquo;2020-12-31&rdquo; to the ui5 datepicker and edit it.
It supports all features from the SAP ui5 DatePicker element.
You can define the formatPattern (e.g. &lsquo;dd.MM.yyyy&rsquo; ) to show the date according to format pattern.
You can bind a string, furo.type.Date or google.type.Date.
1 2 3 &lt;furo-ui5-date-picker fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt; &lt;/furo-ui5-date-picker&gt; The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property). To visualize semantic states, such as &ldquo;error&rdquo; or &ldquo;warning&rdquo;, the valueState property is provided. When the user makes changes to the date, the change event is fired, which enables you to react on any date change.
supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element min:&ldquo;1999-12-31&rdquo; set the minDate for the element (use iso date in the constraint) max:&ldquo;1999-12-31&rdquo; set the maxDate for the element (use iso date in the constraint) pattern:&ldquo;1999-12-31&rdquo; set the pattern for the element The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 &lt;furo-ui5-date-picker fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker&gt; &lt;furo-ui5-date-picker value-state=&#34;Information&#34; fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # formatPattern # default: ''
The format pattern for the date. Events # furo-value-changed # at-furo-value-changed → Date
Fired when the input operation has finished by pressing Enter or on focusout. change # at-change → Date
-Fired when the input operation has finished by pressing Enter or on focusout. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: string, furo.type.Date, google.type.Date
fieldNode of type: string, furo.type.Date, google.type.Date readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. Attributes that can be se are value-state, placeholder, required,readonly,disabled max-date, min-date, format-pattern, Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:173,href:"/docs/components/furo-ui5-date-picker-labeled/",title:"furo-ui5-date-picker-labeled",section:"Components",content:` furo-ui5-date-picker-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-date-picker-labeled.js'; exports FuroUi5DatePickerLabeled js exports &lt;furo-ui5-date-picker-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-date-picker-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-date-picker-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-date-picker-labeled&gt; Inside a furo-form-layouter set to four # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-date-picker-labeled fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker-labeled&gt; &lt;furo-ui5-date-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker-labeled&gt; &lt;/furo-form-layouter&gt; Inside a furo-form-layouter set to two # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter two&gt; &lt;furo-ui5-date-picker-labeled fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker-labeled&gt; &lt;furo-ui5-date-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.furo_data_date_input_google)&#34; &gt;&lt;/furo-ui5-date-picker-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-date-picker full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled reflects Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes in ISO 8601 format. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode `}),e.add({id:174,href:"/docs/components/furo-ui5-date-time-picker/",title:"furo-ui5-date-time-picker",section:"Components",content:` furo-ui5-date-time-picker # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-date-time-picker.js'; exports FuroUi5DateTimePicker js mixes FieldNodeAdapter
Summary: furo data datetime picker field
Description # The furo-ui5-date-time-picker component allows the user to bind a date string with IOS 8061 standard in RFC 3339 format likes &ldquo;2017-01-15T01:30:15.01Z&rdquo; to the ui5 date time picker and edit it.
you can define the formatPattern (e.g. &lsquo;dd.MM.yyyy hh:mm aa&rsquo; ) to show the date according to format pattern. but the data in the payload will still be in format RFC 3339 (2017-01-15T01:30:15.01Z)
The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property). To visualize semantic states, such as &ldquo;error&rdquo; or &ldquo;warning&rdquo;, the valueState property is provided. When the user makes changes to the datetime, the change event is fired, which enables you to react on any date change.
You can bind a string, google.protobuf.Timestamp, int32, int64.
int32, int64 will be handled as unix timestamps (seconds since epoc) and can not be empty.
1 2 3 &lt;furo-ui5-date-time-picker fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt; &lt;/furo-ui5-date-time-picker&gt; The field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property). To visualize semantic states, such as &ldquo;error&rdquo; or &ldquo;warning&rdquo;, the valueState property is provided. When the user makes changes to the date, the change event is fired, which enables you to react on any date change.
supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element min:&ldquo;1999-12-31&rdquo; set the minDate for the element (use iso date in the constraint) max:&ldquo;1999-12-31&rdquo; set the maxDate for the element (use iso date in the constraint) pattern:&ldquo;1999-12-31&rdquo; set the pattern for the element The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 9 &lt;furo-form-layouter four&gt; &lt;furo-ui5-date-time-picker fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker&gt; &lt;furo-ui5-date-time-picker value-state=&#34;Information&#34; fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # formatPattern # default: ''
_previousValueState # default: { state: 'None', message: '' }
_attributesFromFNA # default: { readonly: undefined, placeholder: undefined, min: undefined, max: undefined, pattern: undefined, }
_constraintsFromFNA # default: { required: undefined, }
_privilegedAttributes # default: { readonly: null, placeholder: null, required: null, disabled: null, maxDate: null, minDate: null, formatPattern: null, }
Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes in ISO 8601 format. change # at-change → \`\`
Fired when the input operation has finished by pressing Enter or on focusout. Methods # _updateFNA # _updateFNA(v \`\` ) ⟹ void
\`\` → fn&ndash;update-fna
v onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
value bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: string, google.protobuf.Timestamp, int32, int64
fieldNode of type: string, google.protobuf.Timestamp, int32, int64 readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state onFnaFieldNodeBecameInvalid # onFnaFieldNodeBecameInvalid(validity \`\` ) ⟹ void
\`\` → fn-on-fna-field-node-became-invalid
overwrite onFnaFieldNodeBecameInvalid function
validity `}),e.add({id:175,href:"/docs/components/furo-ui5-date-time-picker-labeled/",title:"furo-ui5-date-time-picker-labeled",section:"Components",content:` furo-ui5-date-time-picker-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-date-time-picker-labeled.js'; exports FuroUi5DateTimePickerLabeled js exports &lt;furo-ui5-date-time-picker-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-date-time-picker-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-date-time-picker-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-date-time-picker-labeled&gt; Inside a furo-form-layouter set to four # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-date-time-picker-labeled fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker-labeled&gt; &lt;furo-ui5-date-time-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker-labeled&gt; &lt;/furo-form-layouter&gt; Inside a furo-form-layouter set to two # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter two&gt; &lt;furo-ui5-date-time-picker-labeled fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker-labeled&gt; &lt;furo-ui5-date-time-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.google_timestamp)&#34; &gt;&lt;/furo-ui5-date-time-picker-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-date-picker full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. formatPattern # format-pattern string Determines the format, displayed in the input field. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes in ISO 8601 format. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: string, google.protobuf.Timestamp, int32, int64
fieldNode of type : string, google.protobuf.Timestamp, int32, int64 `}),e.add({id:176,href:"/docs/components/furo-ui5-dialog/",title:"furo-ui5-dialog",section:"Components",content:` furo-ui5-dialog # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-dialog.js'; exports FuroUi5Dialog js extends src/furo-ui5-dialog.js
Summary: Dialog element
Description # The furo-ui5-dialog is a extended ui5-dialog which can attach itself to a parent dom element.
This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-dialog behind the backdrop.
Use this component like a regular ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.
It supports all features from the SAP ui5 Dialog element.
important: Place a furo-ui5-dialog-display in any dom parent of the component where you use furo-ui5-dialog. Your app-shell or body is a good place to do that.
1 2 3 4 5 6 &lt;furo-ui5-dialog header-text=&#34;Dialog title&#34; fn-show=&#34;--openDialogClicked&#34; fn-close=&#34;--closeDialogClicked&#34;&gt; &lt;p&gt;Content&lt;/p&gt; &lt;div slot=&#34;footer&#34;&gt; &lt;button at-click=&#34;--closeDialogClicked&#34;&gt;close dialog&lt;/button&gt;&lt;/div&gt; &lt;/furo-ui5-dialog&gt; &lt;button at-click=&#34;--openDialogClicked&#34;&gt;Open dialog&lt;/button&gt; Sample # Content
close dialog open dialog 1 2 3 4 5 6 7 8 9 10 11 &lt;furo-ui5-dialog header-text=&#34;Dialog title&#34; fn-show=&#34;--openDialogClicked&#34; fn-close=&#34;--closeDialogClicked&#34;&gt; &lt;p&gt;Content&lt;/p&gt; &lt;div slot=&#34;footer&#34;&gt; &lt;button @-click=&#34;--closeDialogClicked&#34;&gt;close dialog&lt;/button&gt; &lt;/div&gt; &lt;/furo-ui5-dialog&gt; &lt;button @-click=&#34;--openDialogClicked&#34;&gt;open dialog&lt;/button&gt; Note: furo-ui5-dialog-display is placed in body
Attributes and Properties # Methods # show # show() ⟹ void
* → fn-show
shows the dialog
`}),e.add({id:177,href:"/docs/components/furo-ui5-dialog-display/",title:"furo-ui5-dialog-display",section:"Components",content:` furo-ui5-dialog-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-dialog-display.js'; exports FuroUi5DialogDisplay js exports &lt;furo-ui5-dialog-display&gt; custom-element-definition superclass LitElement
Summary: Display element for furo-ui5-dialog
Description # The furo-ui5-dialog-display will catch furo-ui5-dialog elements, to display it in the dom of his parent element.
The first furo-ui5-dialog-display will catch the furo-ui5-dialog-register request from a underlying furo-ui5-dialog.
Attributes and Properties # Methods # `}),e.add({id:178,href:"/docs/components/furo-ui5-dynamic-header/",title:"furo-ui5-dynamic-header",section:"Components",content:` furo-ui5-dynamic-header # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-dynamic-header.js'; exports &lt;furo-ui5-dynamic-header&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Dynamic Header
Description # furo-ui5-dynamic-header Header component with action slot
Attributes and Properties # headerTextLevel # header-text-level string default: 'H2'
Defines the headerTextLevel of the component. iconSize # icon-size string default: 'S'
Defines the icon-size of the icon / image.
S, M, L, XL iconShape # icon-shape string default: 'Square'
Defines the icon-shape of the icon / image. Square | Circle headerText # header-text string Defines the headerText of the component. isFavorite # is-favorite boolean Shows the fovorite icon when set. shadow # shadow boolean Draw a shadow, this is useful when you do not have a tab-container after your dynamic-header showDropdown # show-dropdown boolean Show the dropdown button icon after the header text. objectIcon # object-icon string Set this value to display an object icon. bigAction # big-action boolean Set this attribute to get a bigger action slot. collapsed # collapsed reflects boolean Set the collapsed attribute to start in a collapsed state. Header which are pinned by the user in collapsed or expanded state, will override this attribute. isPinned # is-pinned boolean Set the is-pinned attribute to disable collapse and exand before unpin. Events # pinned # at-pinned → CustomEvent
unpinned # at-unpinned → CustomEvent
variant-icon-clicked # at-variant-icon-clicked → \`\`
Fired when the variant icon (enable with show-dropdown) was clicked. collapsed # at-collapsed → \`\`
Fired when the panel is collapsed. expanded # at-expanded → \`\`
Fired when the panel is expanded. Methods # collapse # collapse() ⟹ void
* → fn-collapse
Collapses the header content. This method will do nothing, if the header is &ldquo;pinned&rdquo;.
expand # expand() ⟹ void
* → fn-expand
Expands the header content. This method will do nothing, if the header is &ldquo;pinned&rdquo;.
bindHeaderText # bindHeaderText(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-header-text
Bind any scalar field to set the title of the panel. Supported types: scalar types
fieldNode bindSecondaryText # bindSecondaryText(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-secondary-text
Bind any scalar field to set the secondaryText of the panel.
fieldNode _toggle # _toggle() ⟹ void
* → fn&ndash;toggle
_toggleOnKeyup # _toggleOnKeyup() ⟹ void
* → fn&ndash;toggle-on-keyup
_FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:179,href:"/docs/components/furo-ui5-filtered-table/",title:"furo-ui5-filtered-table",section:"Components",content:` furo-ui5-filtered-table # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-views/furo-ui5-filtered-table.js'; exports FuroUi5FilteredTable js exports &lt;furo-ui5-filtered-table&gt; custom-element-definition extends /src/furo-ui5-table.js superclass FuroUi5Table
Summary: table with flexible columns
Description # furo-ui5-filtered-table is a table which work with furo-ui5-views. It accepts field orders and a set of visible fields.
It works like a furo-ui5-table but has the ability to reorder the columns. The only action you have to take is to set the id attribute on the ui5-table-column. The id must match to the field_name attribute on the table_settings.
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 &lt;furo-ui5-filtered-table* fn-bind-data=&#34;--collectionDao(*.entities)&#34; fn-set-columns=&#34;|--setColumns&#34; &gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.id&#34; id=&#34;id&#34; min-width=&#34;650&#34; demand-popin popin-text=&#34;id&#34; &gt;&lt;span&gt;id&lt;/span&gt;&lt;/ui5-table-column &gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.display_name&#34; id=&#34;display_name&#34; min-width=&#34;400&#34; demand-popin popin-text=&#34;display_name&#34; &gt;&lt;span&gt;display_name&lt;/span&gt;&lt;/ui5-table-column &gt; Example # Attributes and Properties # mode # mode string default: 'None'
Defines the mode of the component.
Available options are:
MultiSelect SingleSelect None noDataText # no-data-text String Defines the text that will be displayed when there is no data. string identityPath # identity-path * string} stickyColumnHeader # sticky-column-header Boolean Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport. busy # busy Boolean Busy state Events # data-loaded # at-data-loaded → HTMLElement
Fired when the data is loaded into data table. The event detail contains the data table self. arrow-down-on-last-row # at-arrow-down-on-last-row → entity
Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row tablerow-selected # at-tablerow-selected → entity
Fired when the row is selected. The event detail is the original entity of the row. arrow-up-on-first-row # at-arrow-up-on-first-row → entity
Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row rows-selected # at-rows-selected → Array with the selected items
Fired when the row selection in MultiSelect mode was changed Methods # setOrderBy # setOrderBy(sort \`\` ) ⟹ void
\`\` → fn-set-order-by
This is only used to set the order icons on the table headers. You have to use a furo-ui5-views-column-header in the header slot for this.
1 2 3 4 5 6 7 &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.nr&#34; id=&#34;nr&#34; popin-text=&#34;\${i18n.t(&#39;activity_nr&#39;)}&#34; &gt;&lt;furo-ui5-views-column-header&gt;&lt;span&gt;\${i18n.t(&#39;activity_nr&#39;)}&lt;/span&gt;&lt;/furo-ui5-views-column-header&gt; &lt;/ui5-table-column&gt; The value comes from the event order-by-changed, which is emited by the component furo-ui5-views-table-settings.
sort setColumns # setColumns(sortedlist \`\` ) ⟹ void
\`\` → fn-set-columns
setColumns sets the column order and the visible columns
sortedlist bindData # bindData(data \`\` ) ⟹ void
\`\` → fn-bind-data
Bind a repeated data node.
data focus # focus() ⟹ void
* → fn-focus
Focuses the header of the table
focusLast # focusLast() ⟹ void
* → fn-focus-last
Focuses the last row.
focusFirst # focusFirst() ⟹ void
* → fn-focus-first
Focuses the first row.
setBusy # setBusy() ⟹ void
* → fn-set-busy
setBusy Sets the busy state
unsetBusy # unsetBusy() ⟹ void
* → fn-unset-busy
unsetBusy Unsets the busy state
`}),e.add({id:180,href:"/docs/components/furo-ui5-flexible-grid/",title:"furo-ui5-flexible-grid",section:"Components",content:` furo-ui5-flexible-grid # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-flexible-grid.js'; exports FuroUi5FlexibleGrid js exports &lt;furo-ui5-flexible-grid&gt; custom-element-definition superclass LitElement mixes FBP
Summary: a grid splitter
Description # The furo-ui5-flexible-grid will split your screen contents horizontally (in cols) and put them vertically (left at top) when the available space is to small.
1 2 3 4 5 6 7 8 9 10 &lt;!-- a simple layout manager with two columns --&gt; &lt;furo-ui5-flexible-grid&gt; &lt;div hspan=&#34;2&#34; full-on-size-medium full-on-size-small class=&#34;left&#34;&gt; &lt;slot name=&#34;left&#34;&gt;&lt;/slot&gt; &lt;/div&gt; &lt;!-- this will start at pos 3 and goes to the end of the screen --&gt; &lt;furo-z-grid hstart=&#34;3&#34; fill&gt; &lt;slot&gt;&lt;/slot&gt; &lt;/furo-z-grid&gt; &lt;/furo-ui5-flexible-grid&gt; Setting column width # To set the width of a column use the hspan attribute.
Fill column to the end of the screen # To make a column that uses the available space you have to set a starting point. This can be done with hstart=&quot;3&quot; (begin on cell 3) and the attribute fill (fill to the right)
full-on-[size] # To set full width on a specific current size, use full-on-size-small , full-on-size-medium , full-on-size-large ,full-on-size-xlarge.
When the available space has the given size, the default hspan are overridden and the full width is used.
hstart # Set the starting point of a filling row with hstart=&quot;3&quot;.
Available values are hstart=&quot;2&quot;,&hellip;,hstart=&quot;9&quot;
hspan # Set the horizontal space (the width) with the hspan attribute.
Available ranges are from 1 to 9.
hspan=&quot;1&quot;, hspan=&quot;2&quot;,&hellip;,hspan=&quot;9&quot;
Named lines and columns # last-col refers to the last column. There is no line name available
Sample split z-grids in 2 sections # Switch the demo to fullscreen and resize your screen to see the effect.
2x1 2x1 4x1 1x2 1x1 2x2 2x1 full width, no height given 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 &lt;style&gt; /* needed because the contents get positioned vertically on small screens*/ .left[size=&#39;size-s&#39;] { height: 22rem; } .left[size=&#39;size-m&#39;] { height: 16rem; } &lt;/style&gt; &lt;furo-ui5-flexible-grid&gt; &lt;furo-ui5-z-grid class=&#34;left&#34; hspan=&#34;3&#34; full-on-size-medium=&#34;&#34; full-on-size-small=&#34;&#34;&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;2&#34; style=&#34;background: lightblue;&#34;&gt;2x1&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;2&#34; style=&#34;background: lightblue;&#34;&gt;2x1&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;4&#34; style=&#34;background: rebeccapurple;&#34;&gt;4x1&lt;/div&gt; &lt;/furo-ui5-z-grid&gt; &lt;furo-ui5-z-grid hstart=&#34;4&#34; fill=&#34;&#34;&gt; &lt;div vspan=&#34;2&#34; hspan=&#34;1&#34; style=&#34;background: whitesmoke;&#34;&gt;1x2&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;1&#34; style=&#34;background: pink;&#34;&gt;1x1&lt;/div&gt; &lt;div vspan=&#34;2&#34; hspan=&#34;2&#34; style=&#34;background: papayawhip;&#34;&gt;2x2&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;2&#34; style=&#34;background: lightblue;&#34;&gt;2x1&lt;/div&gt; &lt;div hspan=&#34;full&#34; style=&#34;background: papayawhip;&#34;&gt; full width, no height given &lt;/div&gt; &lt;/furo-ui5-z-grid&gt; &lt;/furo-ui5-flexible-grid&gt; Attributes and Properties # sizeSmall # size-small Number Breakpoint size for small Methods # Slots # left # Type: \`\`
{HTMLElement} - slot to add a component on the left hand side. default # Type: HTMLElement [0..n]
default slot to add content. `}),e.add({id:181,href:"/docs/components/furo-ui5-form-field-container/",title:"furo-ui5-form-field-container",section:"Components",content:` furo-ui5-form-field-container # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-form-field-container.js'; exports FuroUi5FormFieldContainer js exports &lt;furo-ui5-form-field-container&gt; custom-element-definition superclass LitElement mixes FBP
Summary: responsive labels for your input elements
Description # The furo-ui5-form-field-container gives the user a layout to manage input field and labels according to the design specification of SAP Fiori.
Example
1 2 3 4 5 6 7 &lt;furo-ui5-form-field-container&gt; &lt;ui5-label label slot=&#34;label&#34; for=&#34;Custom&#34; show-colon&gt;Currency / Units (custom)&lt;/ui5-label&gt; &lt;furo-horizontal-flex id=&#34;Custom&#34; content space&gt; &lt;furo-ui5-text-input flex fn-bind-data=&#34;--entity(*.data.furo_data_money_input.currency_code)&#34;&gt;&lt;/furo-ui5-text-input&gt; &lt;furo-ui5-number-input flex fn-bind-data=&#34;--entity(*.data.furo_data_money_input.units)&#34;&gt;&lt;/furo-ui5-number-input&gt; &lt;/furo-horizontal-flex&gt; &lt;/furo-ui5-form-field-container&gt; The form and simple form in size L use a two-column layout within the responsive grid layout by default. That means that the form groups are placed next to each other to have all the information on one screen and to avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value. So the form groups adopt the Z layout (reading direction in rows, not in columns).
The label-field ratio is 4:8:0 by default:
4 grid columns of the responsive grid layout are used by the labels. 8 grid columns of the responsive grid layout are used by fields. 0 grid columns of the responsive grid layout are used by empty columns.
Size M of the form and simple form also has a single-column layout within the responsive grid layout by default. However, in size M the labels are positioned in the same row as the corresponding input field or value, and form groups are positioned below each other.
The label-field ratio is 3:9:0 by default:
2 grid columns of the responsive grid layout are used by the labels. 10 grid columns of the responsive grid layout are used by the fields. 0 columns of the responsive grid layout are used by empty columns.
Size S (Smartphones and Dialogs) The form and simple form use a single-column layout within the responsive grid layout in size S by default. This means that the form groups are positioned below each other in a single column and the labels are positioned above the fields to avoid truncation of the labels.
The label-field ratio is 12:12:0 by default:
12 grid columns of the responsive grid layout are used by the labels. (A label handles the space of a whole row.) 12 grid columns of the responsive grid layout are used by the fields. (A field handles the space of a whole row.) 0 grid columns of the responsive grid layout are used by empty columns. (There is no empty space on the right of the field.)
Sample # Currency / Units (custom) 1 2 3 4 5 6 7 &lt;furo-ui5-form-field-container&gt; &lt;ui5-label label slot=&#34;label&#34; for=&#34;Custom&#34; show-colon&gt;Currency / Units (custom)&lt;/ui5-label&gt; &lt;furo-horizontal-flex id=&#34;Custom&#34; content space&gt; &lt;furo-ui5-text-input flex fn-bind-data=&#34;--entity(*.data.furo_data_money_input.currency_code)&#34;&gt;&lt;/furo-ui5-text-input&gt; &lt;furo-ui5-number-input flex fn-bind-data=&#34;--entity(*.data.furo_data_money_input.units)&#34;&gt;&lt;/furo-ui5-number-input&gt; &lt;/furo-horizontal-flex&gt; &lt;/furo-ui5-form-field-container&gt; Attributes and Properties # Methods # Slots # label # Type: HTMLElement
defines the label to be displayed. default # Type: HTMLElement
defines the form field to be displayed in the container element. Styling # The following custom properties available for styling:
Custom property Description --furo-ui5-form-field-container-grid-row-gap grid row gap default: 0 fallback: N/A --furo-ui5-form-field-container-grid-column-gap grid column gap default: 1em fallback: N/A --furo-ui5-form-field-container-label-justify-gap label alignment (start, end) default: end fallback: N/A `}),e.add({id:182,href:"/docs/components/furo-ui5-header-panel/",title:"furo-ui5-header-panel",section:"Components",content:` furo-ui5-header-panel # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-header-panel.js'; exports FuroUi5HeaderPanel js exports &lt;furo-ui5-header-panel&gt; custom-element-definition superclass LitElement mixes FBP
Summary: A bindable header panel
Description # A bindable header panel.
Info: This component is intended to use as a header panel, if you need panels in your view, consider to use a ui5-panel directly. That is also the reason that the api does not match with ui5-panel.
This component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.
1 &lt;furo-ui5-header-panel header-text=&#34;Header Text&#34; secondary-text=&#34;Subtitle Text&#34; icon=&#34;task&#34;&gt;&lt;/furo-ui5-header-panel&gt; Sample # default slot action slot 1 2 3 4 &lt;furo-ui5-header-panel header-text=&#34;Header Text&#34;&gt; &lt;div&gt;default slot&lt;/div&gt; &lt;ui5-button design=&#34;Emphasized&#34; slot=&#34;action&#34;&gt;action slot&lt;/ui5-button&gt; &lt;/furo-ui5-header-panel&gt; Sample with icon # default slot action slot action slot 1 2 3 4 5 &lt;furo-ui5-header-panel header-text=&#34;Header Text&#34; secondary-text=&#34;Subtitle Text&#34; icon=&#34;task&#34;&gt; &lt;div&gt;default slot&lt;/div&gt; &lt;ui5-button design=&#34;Transparent&#34; slot=&#34;action&#34;&gt;action slot&lt;/ui5-button&gt; &lt;ui5-button design=&#34;Emphasized&#34; slot=&#34;action&#34;&gt;action slot&lt;/ui5-button&gt; &lt;/furo-ui5-header-panel&gt; Attributes and Properties # icon # icon string default: ''
icon iconSize # icon-size string default: 'S'
size of the icon. Available options are: XS S M L XL. Default is S. headerText # header-text string default: ''
Header Text headerTextLevel # header-text-level string default: 'H2'
Set the level of the header text, default is H2 secondaryText # secondary-text string default: ''
sub title collapsed # collapsed reflects boolean default: false
Collapsed nonInteractive # non-interactive boolean default: false
Disables the toggler tabindex. headerIcon # header-icon string Set this to have a clickable icon on the header line bigAction # big-action Boolean Set to true to have a bigger action area (50:50).
The default ratio for title:action slot is 75:25 Events # collapsed # at-collapsed → Event
Fired when panel is collapsed by user interaction. expanded # at-expanded → Event
Fired when panel is expanded by user interaction. header-icon-clicked # at-header-icon-clicked → \`\`
{buttonRef} Fired when the header icon was clicked. Methods # bindHeaderText # bindHeaderText(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-header-text
Bind any scalar field to set the title of the panel. Supported types: scalar types
fieldNode bindSecondaryText # bindSecondaryText(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-secondary-text
Bind any scalar field to set the secondaryText of the panel.
fieldNode bindNavNode # bindNavNode(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-nav-node
bind a furo.navigation.Navigationnode field
fieldNode bindIcon # bindIcon(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-icon
Bind any scalar field to set the title of the panel. Do not forget to import the icon you will use in your component.
fieldNode toggleCollapse # toggleCollapse() ⟹ void
* → fn-toggle-collapse
toggles the collapse state
Slots # action # Type: HTMLElement [0..n]
defines an action, displayed in the right most part of the header panel. default # Type: HTMLElement [0..n]
defines the content of the panel ### Styling The following custom properties and mixins are available for styling: Styling # The following custom properties available for styling:
Custom property Description --furo-ui5-header-panel-icon-color Color of the icon default: --ui5-avatar-initials-color fallback: #ffffff --furo-ui5-header-panel-icon-background-color background Color of the icon default: --ui5-avatar-accent6 fallback: #354a5f --furo-ui5-header-panel-splitter-start-color the gradient-start hex-Color of the splitter default: --sapHighlightColor fallback: #0854a0 --furo-ui5-header-panel-splitter-end-rgba-color the gradient-end rgba-Color of the splitter default: rgba(8, 84, 16, 0) fallback: rgba(8, 84, 16, 0) `}),e.add({id:183,href:"/docs/components/furo-ui5-launchpad-navigation/",title:"furo-ui5-launchpad-navigation",section:"Components",content:` furo-ui5-launchpad-navigation # @furo/ui5 v1.18.0 import '@furo/ui5/src/spaces/furo-ui5-launchpad-navigation.js'; exports FuroUi5LaunchpadNavigation js exports &lt;furo-ui5-launchpad-navigation&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Spaces navigation tabs
Description # furo-ui5-launchpad-navigation
Is used to navigate between spaces and pages.
Attributes and Properties # _currentTab # Events # page-selected # at-page-selected → \`\`
{Object} Fired when a page was selected. The object contains the page:id Methods # focus # focus() ⟹ void
* → fn-focus
focus Focuses the first tab
bindSpaces # bindSpaces(fn \`\` ) ⟹ void
\`\` → fn-bind-spaces
fn _update # _update(fn \`\` ) ⟹ void
\`\` → fn&ndash;update
fn _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:184,href:"/docs/components/furo-ui5-launchpad-page-renderer/",title:"furo-ui5-launchpad-page-renderer",section:"Components",content:` furo-ui5-launchpad-page-renderer # @furo/ui5 v1.18.0 import '@furo/ui5/src/spaces/furo-ui5-launchpad-page-renderer.js'; exports FuroUi5LaunchpadPageRenderer js exports &lt;furo-ui5-launchpad-page-renderer&gt; custom-element-definition superclass LitElement mixes FBP
Summary: tile renderer
Description # furo-ui5-launchpad-page-renderer Renders a page of a space.
Hint: when you build a custom tile, do not forget to trigger the tile-clicked event.
Attributes and Properties # Events # tile-clicked # at-tile-clicked → PointerEvent
Fired from the default tiles inside of the rendered pages. Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
injectPage # injectPage(rawPage \`\` ) ⟹ void
\`\` → fn-inject-page
injectPage to render a page
rawPage focus # focus() ⟹ void
* → fn-focus
focus Focuses the first tile in the first section
`}),e.add({id:185,href:"/docs/components/furo-ui5-launchpad-section-renderer/",title:"furo-ui5-launchpad-section-renderer",section:"Components",content:` furo-ui5-launchpad-section-renderer # @furo/ui5 v1.18.0 import '@furo/ui5/src/spaces/furo-ui5-launchpad-section-renderer.js'; exports FuroUi5LaunchpadSectionRenderer js exports &lt;furo-ui5-launchpad-section-renderer&gt; custom-element-definition superclass LitElement mixes FBP
Summary: section renderer for a tile page
Description # furo-ui5-launchpad-section-renderer Renders a section of a page
Attributes and Properties # Methods # bindSection # bindSection(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-section
bindSection Bind a fieldnode of type launchpad.Section
fieldNode _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
focus # focus() ⟹ void
* → fn-focus
focus Focuses the first tile in the first section
`}),e.add({id:186,href:"/docs/components/furo-ui5-launchpad-tile-grid/",title:"furo-ui5-launchpad-tile-grid",section:"Components",content:` furo-ui5-launchpad-tile-grid # @furo/ui5 v1.18.0 import '@furo/ui5/src/spaces/furo-ui5-launchpad-tile-grid.js'; exports FuroUi5LaunchpadTileGrid js exports &lt;furo-ui5-launchpad-tile-grid&gt; custom-element-definition superclass LitElement mixes FBP
Summary: tile layout component
Description # furo-ui5-launchpad-tile-grid Layout component used in sections.
Attributes and Properties # Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
`}),e.add({id:187,href:"/docs/components/furo-ui5-markdown/",title:"furo-ui5-markdown",section:"Components",content:" furo-ui5-markdown # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-markdown.js'; exports FuroUi5Markdown js exports &lt;furo-ui5-markdown&gt; custom-element-definition superclass LitElement\nSummary: renders markdown data\nDescription # furo-markdown Renders given md data with parseMarkdown or loads a md file with mdsrc=&quot;source.md&quot;\nrender Attributes and Properties # mdsrc # mdsrc String source of the md markdown # markdown String markdown string markdownRendered # default: undefined\nunsafe # unsafe Boolean allow unsafe md. (writing html, components,&hellip;) Methods # fetchMd # fetchMd(src `` ) ⟹ Promise&amp;lt;string | never&amp;gt;\n`` → fn-fetch-md\nfetch markdown from a url or path\nsrc parseMarkdown # parseMarkdown(markdown `` ) ⟹ void\n`` → fn-parse-markdown\nParse markdown string to html content\nmarkdown bindData # bindData(stringField `` ) ⟹ void\n`` → fn-bind-data\nstringField "}),e.add({id:188,href:"/docs/components/furo-ui5-message-container-display/",title:"furo-ui5-message-container-display",section:"Components",content:` furo-ui5-message-container-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-message-container-display.js'; exports FuroUi5MessageContainerDisplay js exports &lt;furo-ui5-message-container-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: todo shortdescription
Description # furo-ui5-message-container-display Renders the contenst of a furo.MessageContainer or google.rpc.Status message.
Attributes and Properties # noFilter # no-filter Boolean Removes the filter tabs on top. disableScrolling # disable-scrolling Boolean Disable the scrolling to the element, when the container receives data. Events # message-item-clicked # at-message-item-clicked → Object
fired when a Methods # bindRootNode # bindRootNode(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-root-node
Bind your &ldquo;root node&rdquo; for the messages.
The state updates from the injected raw messagecontainer are applied to the fields of the root node.
fieldNode Any custom fieldnode bindMessageContainer # bindMessageContainer(mcfieldnode \`\` ) ⟹ void
\`\` → fn-bind-message-container
bindData bind a furo.messagecontainer field node
mcfieldnode _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:189,href:"/docs/components/furo-ui5-message-container-item/",title:"furo-ui5-message-container-item",section:"Components",content:` furo-ui5-message-container-item # @furo/ui5 v1.18.0 import '@furo/ui5/src/subcomponents/furo-ui5-message-container-item.js'; exports FuroUi5MessageContainerItem js exports &lt;furo-ui5-message-container-item&gt; custom-element-definition superclass LitElement mixes FBP
Summary: todo shortdescription
Description # furo-ui5-message-container-item todo Describe your element
Attributes and Properties # hidden # hidden reflects boolean Methods # bindData # bindData(fieldnode \`\` ) ⟹ void
\`\` → fn-bind-data
bindData Bind a fielNode
fieldnode filter # filter(kind \`\` ) ⟹ void
\`\` → fn-filter
kind _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:190,href:"/docs/components/furo-ui5-message-strip/",title:"furo-ui5-message-strip",section:"Components",content:` furo-ui5-message-strip # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-message-strip.js'; exports FuroUi5MessageStrip js exports &lt;furo-ui5-message-strip&gt; custom-element-definition superclass LitElement mixes FBP
Summary: furo ui5 message strip
Description # The furo-ui5-message-strip component enables the embedding of app-related messages. It displays 4 types of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.
It should be used together witch furo-ui5-message-strip-display. You can place those two components into different places. A good place for placing the furo-ui5-message-strip-display is on the app-shell. https://experience.sap.com/fiori-design-web/message-strip/
1 2 3 &lt;!-- the display is placed where you want the message to appear --&gt; &lt;furo-ui5-message-strip-display&gt;&lt;/furo-ui5-message-strip-display&gt; &lt;furo-ui5-message-strip fn-show-information=&#34;--wire&#34;&gt;&lt;/furo-ui5-message-strip&gt; Sample # Information Success Error Warning 1 2 3 4 5 6 7 8 9 10 11 &lt;ui5-button @-click=&#34;--infoClicked&#34; design=&#34;Default&#34;&gt;Information&lt;/ui5-button&gt; &lt;ui5-button @-click=&#34;--successClicked&#34; design=&#34;Positive&#34;&gt;Success&lt;/ui5-button&gt; &lt;ui5-button @-click=&#34;--errorClicked&#34; design=&#34;Negative&#34;&gt;Error&lt;/ui5-button&gt; &lt;ui5-button @-click=&#34;--warningClicked&#34; design=&#34;Warning&#34;&gt;Warning&lt;/ui5-button&gt; &lt;furo-ui5-message-strip fn-show-information=&#34;--infoClicked&#34; fn-show-success=&#34;--successClicked&#34; fn-show-error=&#34;--errorClicked&#34; fn-show-warning=&#34;--warningClicked&#34; message=&#34;static message&#34;&gt;&lt;/furo-ui5-message-strip&gt; &lt;furo-ui5-message-strip-display&gt;&lt;/furo-ui5-message-strip-display&gt; Attributes and Properties # hideCloseButton # hide-close-button boolean default: false
Defines whether the MessageStrip renders close button. hideIcon # hide-icon boolean default: false
Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the icon slot. Otherwise, the default icon for the type will be used. size # size String define the width of ui5-messagestrip. e.g. 200px message # message String the text message of the message strip Events # message-strip-closed # at-message-strip-closed → {Object} payload
Fired when the MessageStrip is closed Methods # showInformation # showInformation(msg \`\` ) ⟹ void
\`\` → fn-show-information
shows an information message if the param msg is empty, the attribute message is used.
msg showSuccess # showSuccess(msg \`\` ) ⟹ void
\`\` → fn-show-success
shows a success message if the param msg is empty, the attribute message is used.
msg showWarning # showWarning(msg \`\` ) ⟹ void
\`\` → fn-show-warning
shows a warning message if the param msg is empty, the attribute message is used.
msg showError # showError(msg \`\` ) ⟹ void
\`\` → fn-show-error
shows an error message if the param msg is empty, the attribute message is used.
msg showGrpcLocalizedMessage # showGrpcLocalizedMessage(rpcStatus \`\` ) ⟹ void
\`\` → fn-show-grpc-localized-message
shows a google rpc status message (message LocalizedMessage) Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
Rendering rules:
Every @type LocalizedMessage inside of details[] is displayed with a line break in the message strip. One message strip element is created per RPC status. Example rpc status:
1 2 3 4 5 6 7 8 9 10 11 12 { &#34;code&#34;:3, &#34;message&#34;:&#34;Missing mandatory values&#34;, &#34;details&#34;:[ {&#34;@type&#34;:&#34;type.googleapis.com/google.rpc.LocalizedMessage&#34;,&#34;locale&#34;:&#34;en-GB&#34;,&#34;message&#34;:&#34;Please register all the mandatory values.&#34;}, {&#34;@type&#34;:&#34;type.googleapis.com/google.rpc.LocalizedMessage&#34;,&#34;locale&#34;:&#34;en-GB&#34;,&#34;message&#34;:&#34;If you need help completing the data, call 0800-HELP-FURO.&#34;}, {&#34;@type&#34;:&#34;type.googleapis.com/google.rpc.BadRequest&#34;,&#34;field_violations&#34;:[ {&#34;field&#34;:&#34;short_form&#34;,&#34;description&#34;:&#34;The country designation (short form) should be set.&#34;}, {&#34;field&#34;:&#34;id&#34;,&#34;description&#34;:&#34;The id should be ISO Alpha-2 code as described in the ISO 3166 international standard&#34;}, {&#34;field&#34;:&#34;area&#34;,&#34;description&#34;:&#34;Please set a value for the field area.&#34;}] } ]} Example message strip display:
| X Please register all the mandatory values. | If you need help completing the data, call 0800-HELP-FURO. https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto
rpcStatus `}),e.add({id:191,href:"/docs/components/furo-ui5-message-strip-display/",title:"furo-ui5-message-strip-display",section:"Components",content:` furo-ui5-message-strip-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-message-strip-display.js'; exports FuroUi5MessageStripDisplay js exports &lt;furo-ui5-message-strip-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: furo ui5 message strip
Description # The furo-ui5-message-strip-display is the render component for the furo-ui5-message-strip component. The display component can be controlled by several furo-ui5-message-strip components.
&lt;furo-ui5-message-strip-display&gt;&lt;/furo-ui5-message-strip-display&gt; &lt;furo-ui5-message-strip fn-show-information=&#34;--wire&#34;&gt;&lt;/furo-ui5-message-strip&gt; &lt;furo-ui5-message-strip fn-show-warning=&#34;--wire&#34; message=&#34;Static warning message&#34;&gt;&lt;/furo-ui5-message-strip&gt; CSS Style Vars # margin-top: var(&ndash;FuroUi5MediaSizeIndentationTop, 0); margin-bottom: var(&ndash;FuroUi5MediaSizeIndentationBottom, 0); Attributes and Properties # Methods # clearAll # clearAll() ⟹ void
* → fn-clear-all
Removes all strips
`}),e.add({id:192,href:"/docs/components/furo-ui5-money-input/",title:"furo-ui5-money-input",section:"Components",content:` furo-ui5-money-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-money-input.js'; exports FuroUi5MoneyInput js exports &lt;furo-ui5-money-input&gt; custom-element-definition superclass LitElement mixes FBP mixes FieldNodeAdapter
Summary: Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
Description # The furo-ui5-money-input is a input element composition for FieldNodes of type google.type.Money. It consists of
ui5-input of type Number furo-ui5-text-input You can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three ways have priority : currencies &gt; options as attribute &gt; options in meta.
1 2 3 &lt;furo-ui5-money-input fn-bind-data=&#34;--dao(google.type.Money)&#34; options=&#39;{&#34;list&#34;: [ &#34;CHF&#34;,&#34;EUR&#34;,&#34;USD&#34; ]}&#39;&gt;&lt;/furo-ui5-money-input&gt; &lt;furo-ui5-money-input fn-bind-data=&#34;--dao(google.type.Money)&#34; options=&#39;{&#34;list&#34;: [ {&#34;id&#34;:&#34;CHF&#34;,&#34;label&#34;:&#34;Schweiz&#34;},{&#34;id&#34;:&#34;EUR&#34;,&#34;label&#34;:&#34;Europa&#34;, &#34;selected&#34;: true}&#39;&gt;&lt;/furo-ui5-money-input&gt; &lt;furo-ui5-money-input fn-bind-data=&#34;--dao(google.type.Money)&#34; currencies=&#34;CHF,EUR,USD&#34;&gt;&lt;/furo-ui5-money-input&gt; supported meta and constraints # readonly: true , set the element to readonly required: true , set the element to required Tags: money input
Example # 1 2 3 4 5 6 7 8 9 10 11 &lt;furo-form-layouter four&gt; &lt;furo-ui5-money-input fn-bind-data=&#34;--doExp(*.furo_data_money_input)&#34; &gt;&lt;/furo-ui5-money-input&gt; &lt;furo-ui5-money-input value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--doExp(*.furo_data_money_input)&#34; &gt;&lt;/furo-ui5-money-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → Money
Fired when the input operation has finished by pressing Enter or on focusout. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a fieldNode.
Supported types: google.type.Money
fieldNode of type google.type.Money readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. Attributes that can be se are required,readonly,disabled , Use this after manual or scripted update of the attributes.
onFnaOptionsChanged # onFnaOptionsChanged(options \`\` ) ⟹ void
\`\` → fn-on-fna-options-changed
Checks if options.flags has an entry currency_list In this case the option list is applied to the currency field as suggestion items.
If you use a static option definition in the type specification (furo), you can define the list as follows:
options: flags: - currency_list list: - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: Swiss francs (CHF) id: CHF selected: false - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: Euro (EUR) id: EUR selected: false - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: US Dollar (USD) id: USD selected: false options _convertDataToMoneyObj # _convertDataToMoneyObj(currency *amount* obj \`\` ) ⟹ void
\`\` → fn&ndash;convert-data-to-money-obj
currency amount obj onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:193,href:"/docs/components/furo-ui5-money-input-labeled/",title:"furo-ui5-money-input-labeled",section:"Components",content:` furo-ui5-money-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-money-input-labeled.js'; exports FuroUi5MoneyInputLabeled js exports &lt;furo-ui5-money-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-money-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-money-input-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-money-input-labeled&gt; Attributes and Properties # label # label string default: ''
the label for the data-money-input full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → google.type.Money
Fires the field value when it changes. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside Supported types: google.type.Money
fieldNode `}),e.add({id:194,href:"/docs/components/furo-ui5-multi-combobox/",title:"furo-ui5-multi-combobox",section:"Components",content:` furo-ui5-multi-combobox # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-multi-combobox.js'; exports FuroUi5MultiCombobox js mixes FieldNodeAdapter
Summary: data select field
Description # The furo-ui5-multi-combobox component is used to create a drop-down list. The items inside the furo-ui5-multi-combobox define the available options by using the ui5-mcb-item component. Use the function bindOptions to bind a RepeaterNode as a option list.
1 2 3 4 &lt;furo-ui5-multi-combobox fn-bind-data=&#34;--entity(*.data.description)&#34; fn-bind-options=&#34;--collection(*.entities)&#34;&gt; &lt;/furo-ui5-multi-combobox&gt; Attributes and Properties # activeFieldBinding # default: false
Flag to indicate if a field is attached Default: false idFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to identify the option items. Point-separated path to the field E.g. data.partner.ulid default: id This attribute is related to the option list displayFieldPath # default: 'display_name'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items. Point-separated path to the field E.g. data.partner.display_name default: display_name This attribute is related to the option list descFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional description of the option items. Point-separated path to the field E.g. data.partner.id default: id This attribute is related to the option list valueFieldPath # default: 'id'
Defines the field path that is used to update the bound component if the user has selected an option. Point-separated path to the field Must be set if a data binding is specified. default: id This attribute is related to the option list. optionList[selected].valueFieldPath ==&gt; bound FieldNode boundFieldIdPath # default: 'id'
Defines the id field path of the bound FieldNode. Point-separated path to the field Must be set if a data binding is specified with a complex type. default: id This attribute is related to the bound FieldNode. Events # options-updated # at-options-updated → optionNodeList
Fired after the option list was rebuilt. furo-value-changed # at-furo-value-changed → [string]
Fires the field value when it changes. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, required,readonly,disabled, value-field-path, display-field-path Use this after manual or scripted update of the attributes.
bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Here a RepeaterNode can be connected to the component as an option list.
repeaterNode bindData # bindData(repeaterNode RepeaterNode ) ⟹ boolean
RepeaterNode → fn-bind-data
Overridden bindData of FieldNodeAdapter
repeaterNode onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state selectOptionsByIds # selectOptionsByIds(ids [] ) ⟹ void
[] → fn-select-options-by-ids
Selects an option by id. The id field must be comparable.
ids string} must match the data `}),e.add({id:195,href:"/docs/components/furo-ui5-multi-combobox-labeled/",title:"furo-ui5-multi-combobox-labeled",section:"Components",content:` furo-ui5-multi-combobox-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-multi-combobox-labeled.js'; exports FuroUi5MultiComboboxLabeled js exports &lt;furo-ui5-multi-combobox-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled multi-combobox
Description # furo-ui5-multi-combobox-labeled The furo-ui5-multi-combobox-labeled is a composition to easily use a complete data multi-combobox with label according to the design specification of SAP Fiori Design System.
Choose your countries Attributes and Properties # label # label string default: ''
the label for the data-number-input idFieldPath # id-field-path string default: 'id'
Defines the field path that is used from the injected RepeaterNode to identify the option items. Point-separated path to the field E.g. data.partner.ulid valueFieldPath # value-field-path string default: 'id'
Defines the field path that is used to update the bound component if the user has selected an option. Point-separated path to the field Must be set if a data binding is specified. displayFieldPath # display-field-path string default: 'display_name'
Defines the field path that is used from the injected RepeaterNode to display the option items. Point-separated path to the field E.g. data.partner.display_name full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Binds a repeaterNode to the furo-ui5-multi-combobox component
repeaterNode Slots # valueStateMessage # Type: HTMLElement
defines the value state message that will be displayed as pop up under the input element. `}),e.add({id:196,href:"/docs/components/furo-ui5-multi-input/",title:"furo-ui5-multi-input",section:"Components",content:` furo-ui5-multi-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-multi-input.js'; exports FuroUi5MultiInput js mixes FieldNodeAdapter
Summary: repeated strings
Description # A furo-ui5-multi-input field allows the user to enter multiple values, which are displayed as ui5-token. https://sap.github.io/ui5-webcomponents/playground/components/MultiInput/
Supported type: repeated string
1 &lt;furo-ui5-multi-input fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-multi-input&gt; Example # 1 2 3 4 5 6 7 8 &lt;furo-ui5-multi-input fn-bind-data=&#34;--data(*.repeated_sring)&#34; &gt;&lt;/furo-ui5-multi-input&gt; &lt;furo-ui5-multi-input value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--data(*.repeated_sring)&#34; &gt;&lt;/furo-ui5-multi-input&gt; Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: repeated string
fieldNode onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:197,href:"/docs/components/furo-ui5-multi-input-labeled/",title:"furo-ui5-multi-input-labeled",section:"Components",content:` furo-ui5-multi-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-multi-input-labeled.js'; exports FuroUi5MultiInputLabeled js exports &lt;furo-ui5-multi-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled textarea field
Description # The furo-ui5-multi-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-multi-input-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-multi-input-labeled&gt; Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 &lt;furo-ui5-multi-input-labeled full fn-bind-data=&#34;--data(*.repstring)&#34; &gt;&lt;/furo-ui5-multi-input-labeled&gt; &lt;furo-ui5-multi-input-labeled required=&#34;&#34; fn-bind-data=&#34;--data(*.repstring)&#34; &gt;&lt;/furo-ui5-multi-input-labeled&gt; &lt;furo-ui5-multi-input-labeled disabled=&#34;&#34; fn-bind-data=&#34;--data(*.repstring)&#34; &gt;&lt;/furo-ui5-multi-input-labeled&gt; &lt;furo-ui5-multi-input-labeled label=&#34;Label&#34; fn-bind-data=&#34;--data(*.repstring)&#34; &gt;&lt;/furo-ui5-multi-input-labeled&gt; &lt;furo-ui5-multi-input-labeled show-value-help-icon fn-bind-data=&#34;--data(*.repstring)&#34; &gt;&lt;/furo-ui5-multi-input-labeled&gt; Attributes and Properties # label # label string default: ''
the label for the data-multi-input full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. showValueHelpIcon # show-value-help-icon Boolean Determines whether a value help icon will be should in the end of the input.
Pressing the icon will fire value-help-trigger event. Events # furo-value-changed # at-furo-value-changed → \`\`
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside Supported types: repeated string
fieldNode `}),e.add({id:198,href:"/docs/components/furo-ui5-notification/",title:"furo-ui5-notification",section:"Components",content:` furo-ui5-notification # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-notification.js'; exports FuroUi5Notification js exports &lt;furo-ui5-notification&gt; custom-element-definition superclass LitElement
Summary: trigger component for notifications
Description # furo-ui5-notification should be used together witch furo-ui5-notification-list-display or furo-ui5-notification-group-display. you can place those two components into different places. best place the furo-ui5-notification-list(or group)-display on the main site. then you only need one furo-ui5-notification-list(or group)-display. it can work with n furo-ui5-notification.
Example with defaults # show google rpc status messages clear messages The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each Status message contains three pieces of data: error code, error message, and error details.
github.com/googleapis/&hellip;
1 2 3 4 5 6 7 8 &lt;body&gt; &lt;furo-ui5-notification-list-display fn-clear-all=&#34;--clearRequested&#34;&gt;&lt;/furo-ui5-notification-list-display&gt; &lt;main&gt; &lt;furo-ui5-notification fn-parse-grpc-status=&#34;--grpcStatus&#34;&gt;&lt;/furo-ui5-notification&gt; &lt;/main&gt; &lt;/body&gt; Attributes and Properties # dismissButtonText # default: 'dismiss'
text # text String banner text content. Use word to mark as strong. Use \\n to insert a line break.
HTML tags will be stripped out. payload # payload Object payload. can be a GRPC error or a notification message collection. Events # open-furo-ui5-notification-requested # at-open-furo-ui5-notification-requested → {Object} this
Fired when value open banner is requested open-furo-ui5-notification-group-requested # at-open-furo-ui5-notification-group-requested → {Object} this
Fired when value open banner is requested notification-closed. # at-notification-closed. → {Object} payload
Fired when notification is closed. notification-custom-action # at-notification-custom-action → {Object} payload
Fired when notification custom action is triggered. this is a general action event. notification-custom-action-commandName # at-notification-custom-action-commandName → {Object} payload
Fired when notification custom action is triggered. Methods # parseGrpcStatus # parseGrpcStatus(status *s* ) ⟹ void
→ fn-parse-grpc-status
inject a grpc status object parse grpc status object and set the label according to the LocalizedMessage in status. https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto .
status s injectNotificationCollection # injectNotificationCollection(c \`\` ) ⟹ void
\`\` → fn-inject-notification-collection
inject an array of notification messages. the notification message should be an array of the following object signature: { &ldquo;id&rdquo;: 1, &ldquo;display_name&rdquo;: &ldquo;&rdquo;, &ldquo;heading&rdquo;: &ldquo;heading 1&rdquo;, &ldquo;message_priority&rdquo;: &ldquo;High&rdquo;, &ldquo;category&rdquo;: &ldquo;warning&rdquo;, &ldquo;category_priority&rdquo;: &ldquo;High&rdquo;, &ldquo;actions&rdquo;: [ { &ldquo;icon&rdquo;:&ldquo;accept&rdquo;, &ldquo;command&rdquo;:&ldquo;accept&rdquo;, &ldquo;text&rdquo;: &ldquo;accept&rdquo; }, { &ldquo;icon&rdquo;:&ldquo;message-error&rdquo;, &ldquo;command&rdquo;:&ldquo;reject&rdquo;, &ldquo;text&rdquo;: &ldquo;Reject&rdquo; } ], &ldquo;message&rdquo;: &ldquo;Markdown | Less | Pretty\\n&mdash; | &mdash; | &mdash;\\nStill | renders | nicely\\n1 | 2 | 3&rdquo; }
c parseFieldValidityMessages # parseFieldValidityMessages(fieldViolations \`\` ) ⟹ void
\`\` → fn-parse-field-validity-messages
Parses the output of dataObject.getValidityMessages and transforms the incoming data into a google.rpc.Status message of type google.rpc.BadRequest with a list of field violations as content
fieldViolations `}),e.add({id:199,href:"/docs/components/furo-ui5-notification-group-display/",title:"furo-ui5-notification-group-display",section:"Components",content:` furo-ui5-notification-group-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-notification-group-display.js'; exports FuroUi5NotificationGroupDisplay js exports &lt;furo-ui5-notification-group-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: ui5 notification group display
Description # Notification display component that works together with furo-ui5-notification. Best place the furo-ui5-notification-group-display on the main site. then you only need one furo-ui5-notification-group-display. you can also use more furo-ui5-notification-group-display&rsquo;s for special needs. But You have to be sure the furo-ui5-notification-group-display can receive the notification events.
Example # show notifications clear messages 1 2 3 4 5 &lt;furo-ui5-notification-group-display fn-clear-all=&#34;--clearRequested&#34;&gt;&lt;/furo-ui5-notification-group-display&gt; &lt;furo-ui5-notification fn-inject-notification-collection=&#34;--notificationsJson&#34; &gt;&lt;/furo-ui5-notification&gt; Attributes and Properties # headerText # header-text string default: ''
the header text of the notification target # target Object the target dom object, which sends the notification event collapsed # collapsed Boolean Defines if the group is collapsed or expanded. showCounter # show-counter Boolean Defines if the items counter would be displayed. showClose # show-close Boolean Defines if the close button would be displayed. Methods # clearAll # clearAll() ⟹ void
* → fn-clear-all
clear all notifications
`}),e.add({id:200,href:"/docs/components/furo-ui5-notification-list-display/",title:"furo-ui5-notification-list-display",section:"Components",content:` furo-ui5-notification-list-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-notification-list-display.js'; exports FuroUi5NotificationListDisplay js exports &lt;furo-ui5-notification-list-display&gt; custom-element-definition superclass LitElement mixes FBP
Summary: ui5 notification list
Description # Notification display component that works together with furo-ui5-notification. Displays google.rpc.Status messages in a grouped list. https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
Best place the furo-ui5-notification-list-display on the main site. then you only need one furo-ui5-notification-list-display. you can also use more than one furo-ui5-notification-list-display for special needs. But you have to be sure the furo-ui5-notification-list-display can receive the notification events from furo-ui5-notification.
Example # show google rpc status messages clear messages The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each Status message contains three pieces of data: error code, error message, and error details.
github.com/googleapis/&hellip;
1 2 3 4 5 6 7 8 9 &lt;furo-ui5-notification-list-display header-text=&#34;Notifications &amp;amp; Errors&#34; fn-clear-all=&#34;--clearRequested&#34; group-title-message=&#34;Localized Messages&#34; group-title-help=&#34;Helpful information&#34; group-title-bad-request=&#34;Field Violations&#34; @-notification-counter-update=&#34;--ncUpdated&#34;&gt;&lt;/furo-ui5-notification-list-display&gt; &lt;furo-ui5-notification fn-parse-grpc-status=&#34;--grpcStatus&#34;&gt;&lt;/furo-ui5-notification&gt; Attributes and Properties # headerText # header-text string default: ''
the header text of the notification noDataText # no-data-text string default: 'No messages'
Defines the text that is displayed when the list contains no items. _notificationCount # default: 0
groupTitleHelp # group-title-help string default: 'Help'
Defines the notification group element title for notifications of type &ldquo;type.googleapis.com/google.rpc.Help&rdquo; groupTitleBadRequest # group-title-bad-request string default: 'Bad Request'
Defines the notification group element title for notifications of type &ldquo;type.googleapis.com/google.rpc.BadRequest&rdquo; groupTitleMessage # group-title-message string default: 'Information'
Defines the notification group element title for notifications of type &ldquo;type.googleapis.com/google.rpc.LocalizedMessage&rdquo; _md # showClose # show-close Boolean Defines if the close button would be displayed. Events # notification-counter-update # at-notification-counter-update → CustomEvent
furo-value-changed # at-furo-value-changed → Number
Fires a notification counter changed. Use this event to show the amount of notifications to the user. Methods # parseGrpcStatus # parseGrpcStatus(d \`\` ) ⟹ void
\`\` → fn-parse-grpc-status
parse grpc status object and set the notification text according to the LocalizedMessage in status. https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
d parseNotificationMessage # parseNotificationMessage(message \`\` ) ⟹ void
\`\` → fn-parse-notification-message
parse notification message and set the ui5 notification properties like priority, actions, heading.. the notification message should be a furo.notification type: { &ldquo;id&rdquo;: 1, &ldquo;display_name&rdquo;: &ldquo;&rdquo;, &ldquo;heading&rdquo;: &ldquo;heading 1&rdquo;, &ldquo;message_priority&rdquo;: &ldquo;High&rdquo;, &ldquo;category&rdquo;: &ldquo;warning&rdquo;, &ldquo;category_priority&rdquo;: &ldquo;High&rdquo;, &ldquo;actions&rdquo;: [ { &ldquo;icon&rdquo;:&ldquo;accept&rdquo;, &ldquo;command&rdquo;:&ldquo;accept&rdquo;, &ldquo;text&rdquo;: &ldquo;accept&rdquo; }, { &ldquo;icon&rdquo;:&ldquo;message-error&rdquo;, &ldquo;command&rdquo;:&ldquo;reject&rdquo;, &ldquo;text&rdquo;: &ldquo;Reject&rdquo; } ], &ldquo;message&rdquo;: &ldquo;Markdown | Less | Pretty\\n&mdash; | &mdash; | &mdash;\\nStill | renders | nicely\\n1 | 2 | 3&rdquo; }
message _show # _show() ⟹ void
* → fn&ndash;show
shows grpc status notifications implemented types are:
Bad Request with Field Violations _dispatchNotificationCounterUpdates # _dispatchNotificationCounterUpdates(count \`\` ) ⟹ void
\`\` → fn&ndash;dispatch-notification-counter-updates
count clearAll # clearAll() ⟹ void
* → fn-clear-all
clear all notifications
`}),e.add({id:201,href:"/docs/components/furo-ui5-number-input/",title:"furo-ui5-number-input",section:"Components",content:` furo-ui5-number-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-number-input.js'; exports FuroUi5NumberInput js mixes FieldNodeAdapter
Summary: data number input field
Description # The furo-ui5-number-input component allows the user to enter and edit numbers with data binding. It supports all features from the SAP ui5 Input element.
You can bind any number type, any furo.fat.xxx number type, furo.BigDecimal or the google.wrapper.xxx number types.
1 2 3 &lt;furo-ui5-number-input fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-number-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;required&rdquo;:&ldquo;true&rdquo; set the element to required &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;placeholder&rdquo;:&ldquo;string&rdquo; set the placeholder for the element supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 &lt;furo-form-layouter four&gt; &lt;furo-ui5-number-input fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input&gt; &lt;furo-ui5-number-input readonly fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input&gt; &lt;furo-ui5-number-input disabled fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input&gt; &lt;furo-ui5-number-input value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # nativeInputAttributes # _previousValueState # default: { state: 'None', message: '' }
Events # change # at-change → number
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → \`\`
Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected. furo-value-changed # at-furo-value-changed → string
Fires the field value when it changes. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types:
double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64
google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc.
furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
furo.BigDecimal
fieldNode readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:202,href:"/docs/components/furo-ui5-number-input-labeled/",title:"furo-ui5-number-input-labeled",section:"Components",content:` furo-ui5-number-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-number-input-labeled.js'; exports FuroUi5NumberInputLabeled js exports &lt;furo-ui5-number-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-number-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-number-input fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-number-input&gt; Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 &lt;furo-form-layouter four&gt; &lt;furo-ui5-number-input-labeled fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;furo-ui5-number-input-labeled readonly fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;furo-ui5-number-input-labeled disabled fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;furo-ui5-number-input-labeled required fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;furo-ui5-number-input-labeled value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_number_input)&#34; &gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-number-input icon # icon string default: ''
Icon on the right side full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → Number
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside Supported types: double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64 google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc. furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
fieldNode `}),e.add({id:203,href:"/docs/components/furo-ui5-pagination-bar/",title:"furo-ui5-pagination-bar",section:"Components",content:` furo-ui5-pagination-bar # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-pagination-bar.js'; exports FuroUi5PaginationBar js exports &lt;furo-ui5-pagination-bar&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Pagination Bar
Description # The furo-ui5-pagination-bar element loops the hateoas array and finds out the pagination information like prev, next, first and last
&lt;furo-ui5-pagination-bar fn-inject=&#34;--hateoas&#34;&gt;&lt;/furo-ui5-pagination-bar&gt; Example # load collection 1 2 3 4 5 6 7 8 9 10 11 &lt;furo-ui5-pagination-bar fn-inject=&#34;--responseHts&#34; @-pagination-next=&#34;--next&#34; @-pagination-last=&#34;--last&#34;&gt;&lt;/furo-ui5-pagination-bar&gt; &lt;furo-collection-agent service=&#34;projectservice.ProjectService&#34; fn-hts-in=&#34;--hts&#34; fn-next=&#34;--next&#34; fn-last=&#34;--last&#34; @-response-hts-updated=&#34;--responseHts&#34;&gt; &lt;/furo-collection-agent&gt; Attributes and Properties # currentPage # currentPage number default: 0
first # first boolean prev # prev boolean next # next boolean last # last boolean Events # hts-injected # at-hts-injected → CustomEvent
pagination-first # at-pagination-first → \`\`
Is fired if the pagination button &lsquo;sys_first_page&rsquo; was clicked pagination-last # at-pagination-last → \`\`
Is fired if the pagination button &lsquo;sys_last_page&rsquo; was clicked pagination-prev # at-pagination-prev → \`\`
Is fired if the pagination button &lsquo;sys_prev_page&rsquo; was clicked pagination-next # at-pagination-next → \`\`
Is fired if the pagination button &lsquo;sys_next_page&rsquo; was clicked Methods # inject # inject(hts \`\` ) ⟹ void
\`\` → fn-inject
init pagination attributes Supported type: furo.Link
hts Slots # start # Type: HTMLElement
Defines the content at the start of the bar default # Type: HTMLElement
Defines the content in the middle of the bar Tags: pagination Styling # The following custom properties available for styling:
Custom property Description --furo-ui5-pagination-bar-padding-right Right padding definition default: 1rem fallback: 1rem --furo-ui5-pagination-bar-background-color Background color default: --sapPageHeader_Background fallback: #ffffff `}),e.add({id:204,href:"/docs/components/furo-ui5-password-input/",title:"furo-ui5-password-input",section:"Components",content:` furo-ui5-password-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-password-input.js'; exports FuroUi5PasswordInput js mixes FieldNodeAdapter
Summary: data password input field
Description # The &lsquo;furo-ui5-password-input&rsquo; component allows the user to enter and edit password with data binding. It supports all features from the SAP ui5 Input element.
You can bind any string type, like furo.fat.String type or the google.protobuf.StringValue type.
1 2 3 &lt;furo-ui5-password-input fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-password-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. ** meta &lt; fat &lt; html **
supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;required&rdquo;:&ldquo;true&rdquo; set the element to required &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;icon&rdquo;:&ldquo;home&rdquo; set the icon &ldquo;placeholder&rdquo;:&ldquo;string&rdquo; set the placeholder for the element &ldquo;max&rdquo;:&ldquo;number&rdquo; set the maximum number of characters available in the input field. supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element max:&ldquo;number&rdquo; set the maximum number of characters available in the input field. The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 &lt;furo-form-layouter four&gt; &lt;furo-ui5-password-input fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input&gt; &lt;furo-ui5-password-input readonly fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input&gt; &lt;furo-ui5-password-input disabled fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input&gt; &lt;furo-ui5-password-input value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # nativeInputAttributes # type # default: 'Password'
_previousValueState # default: { state: 'None', message: '' }
_attributesFromFNA # default: { readonly: undefined, placeholder: undefined, }
_constraintsFromFNA # default: { required: undefined, max: undefined, // maps to maxlength }
_labelsFromFAT # default: { readonly: undefined, disabled: undefined, required: undefined, hidden: undefined, }
_attributesFromFAT # default: { placeholder: undefined, max: undefined, // maps to maxlength icon: undefined, // updates the icon }
_privilegedAttributes # default: { readonly: null, placeholder: null, required: null, disabled: null, icon: null, maxlength: null, }
Events # change # at-change → text
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → \`\`
Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected. furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. icon-clicked # at-icon-clicked → MouseEvent
Fired when icon is clicked password-showed # at-password-showed → void
Fired when the password is showed, after calling the show method. password-hidden # at-password-hidden → void
Fired when the password is hidden, after calling the hide() method. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: string, google.protobuf.StringValue, furo.fat.String
fieldNode readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state show # show() ⟹ void
* → fn-show
show password
hide # hide() ⟹ void
* → fn-hide
hide password
toggleVisibility # toggleVisibility() ⟹ void
* → fn-toggle-visibility
toggle visibility of the password. (show/hide) password
`}),e.add({id:205,href:"/docs/components/furo-ui5-password-input-labeled/",title:"furo-ui5-password-input-labeled",section:"Components",content:` furo-ui5-password-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-password-input-labeled.js'; exports FuroUi5PasswordInputLabeled js exports &lt;furo-ui5-password-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-password-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-password-input-labeled fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-password-input&gt; Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 &lt;furo-form-layouter four&gt; &lt;furo-ui5-password-input-labeled fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input-labeled&gt; &lt;furo-ui5-password-input-labeled readonly fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input-labeled&gt; &lt;furo-ui5-password-input-labeled disabled fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input-labeled&gt; &lt;furo-ui5-password-input-labeled required fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input-labeled&gt; &lt;furo-ui5-password-input-labeled value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_password_input)&#34; &gt;&lt;/furo-ui5-password-input-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-password-input full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside Supported types: string, google.protobuf.StringValue, furo.fat.String
fieldNode Slots # icon # Type: HTMLElement
defines the icon to be displayed in the input element. `}),e.add({id:206,href:"/docs/components/furo-ui5-progress-indicator/",title:"furo-ui5-progress-indicator",section:"Components",content:` furo-ui5-progress-indicator # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-progress-indicator.js'; exports FuroUi5ProgressIndicator js mixes FieldNodeAdapter
Summary: repeated strings
Description # A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color.. https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator/
Supported type: You can bind any number type, any furo.fat.xxx number type, furo.BigDecimal or the google.wrapper.xxx number types
1 &lt;furo-ui5-progress-indicator fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-progress-indicator&gt; Attributes and Properties # Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled Use this after manual or scripted update of the attributes.
`}),e.add({id:207,href:"/docs/components/furo-ui5-property/",title:"furo-ui5-property",section:"Components",content:` furo-ui5-property # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-property.js'; exports FuroUi5Property js exports &lt;furo-ui5-property&gt; custom-element-definition superclass LitElement mixes FBP
Summary: ????? bind types of type any
Description # furo-ui5-property Field for type furo.Property. This can be used to display &ldquo;dynamic&rdquo; fields aka properties.
furo-ui5-property works with repeated types and non repeating property types.
1 &lt;furo-ui5-property fn-bind-data=&#34;--entity(*.single_type_property)&#34;&gt;&lt;/furo-ui5-property&gt; Example data for the data-object looks like this
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 &#34;single_type_property&#34;: { &#34;data&#34;: { &#34;@type&#34;: &#34;google.type.Date&#34;, &#34;day&#34;: 8, &#34;month&#34;: 11, &#34;year&#34;: 2022 }, &#34;display_name&#34;: &#34;a date&#34;, &#34;id&#34;: &#34;date&#34;, &#34;code&#34;: &#34;date&#34;, &#34;meta&#34;: { &#34;fields&#34;: { &#34;data&#34;: { &#34;meta&#34;: { &#34;label&#34;: &#34;Additional fields&#34;, &#34;hint&#34;: &#34;this is data&#34; }, &#34;constraints&#34;: { &#34;min&#34;: { &#34;value&#34;: &#34;2019-09-09&#34;, &#34;message&#34;: &#34;to small&#34; } } } } } } Example # load record 1 load record 2 load record 3 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-property fn-bind-data=&#34;--entity(*.data.type_property)&#34;&gt;&lt;/furo-ui5-property&gt; &lt;/furo-form-layouter&gt; &lt;furo-data-object type=&#34;experiment.ExperimentEntity&#34; @-object-ready=&#34;--entity&#34; @-data-changed-after-inject=&#34;--dataChanged&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # context # context string default: 'form'
Set the context, for the renderers. Methods # bindData # bindData(propertyField \`\` ) ⟹ void
\`\` → fn-bind-data
propertyField `}),e.add({id:208,href:"/docs/components/furo-ui5-propertylist-display/",title:"furo-ui5-propertylist-display",section:"Components",content:` furo-ui5-propertylist-display # @furo/components v1.0.0-rc.7 import '@furo/components/src/furo-ui5-propertylist-display.js'; exports FuroUi5PropertylistDisplay js exports &lt;furo-ui5-propertylist-display&gt; custom-element-definition superclass LitElement
Summary:
Example with context=&ldquo;display&rdquo; # load record 1 load record 2 load record 3 1 2 3 4 5 6 7 8 &lt;furo-form-layouter four&gt; &lt;furo-ui5-propertylist-display fn-bind-data=&#34;--entity(*.data.type_property)&#34;&gt;&lt;/furo-ui5-propertylist-display&gt; &lt;/furo-form-layouter&gt; &lt;furo-data-object type=&#34;experiment.ExperimentEntity&#34; @-object-ready=&#34;--entity&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; Description # furo-ui5-propertylist-display allows the user to show repeated properties (furo.Property) in a readonly mode. For all other types you can use furo-ui5-typerenderer-labeled.
The type information of the property is used for the display of the individual attributes. E.g.
[ { &#34;code&#34;: &#34;c0a7f550-0fbe-4046-8fa9-60c86327b6b1&#34;, &#34;data&#34;: { &#34;@type&#34;: &#34;type.googleapis.com/furo.StringProperty&#34;, &#34;data&#34;: &#34;01032020&#34; }, &#34;flags&#34;: [], &#34;display_name&#34;: &#34;Vertragsbeginn&#34;, &#34;id&#34;: &#34;246d79a0-0a15-43c5-b18f-ac8a4a449df1&#34;, &#34;meta&#34;: {} } ] You can bind the furo.Property type (single and repeated).
1 2 3 &lt;furo-ui5-propertylist-display fn-bind-data=&#34;--daoCountry(*.data.additional_data)&#34; &gt;&lt;/furo-ui5-propertylist-display&gt; Attributes and Properties # Methods # bindData # bindData(fieldNode FieldNode ) ⟹ boolean
FieldNode → fn-bind-data
Binds a RepeaterNode of type furo.Property.
fieldNode `}),e.add({id:209,href:"/docs/components/furo-ui5-radio-button/",title:"furo-ui5-radio-button",section:"Components",content:` furo-ui5-radio-button # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-radio-button.js'; exports FuroUi5RadioButton js extends src/furo-ui5-radio-button.js mixes FieldNodeAdapter
Summary: boolean toggle button
Description # The &lsquo;furo-ui5-radio-button&rsquo; component allows the user to switch true and false for Bool with data binding.
It supports all features from the SAP ui5 toggleButton element.
You can bind bool type, furo.fat.Bool type or the google.wrapper.BoolValue type.
1 2 3 4 5 6 7 8 &lt;furo-ui5-radio-button name=&#34;groupA&#34; fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-radio-button&gt; &lt;furo-ui5-radio-button name=&#34;groupA&#34; fn-bind-data=&#34;--dao(OTHERFIELDNODE)&#34; &gt;&lt;/furo-ui5-radio-button&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;icon&rdquo;:&quot;&quot; set the icon &ldquo;value-state&rdquo;:&quot;&quot; set the value-state supported meta and constraints # readonly: true , set the element to readonly The constraint required will mark the element as required
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 &lt;furo-form-layouter four&gt; &lt;furo-ui5-radio-button fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-radio-button&gt; &lt;furo-ui5-radio-button readonly text=&#34;Override&#34; fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-radio-button&gt; &lt;furo-ui5-radio-button disabled fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-radio-button&gt; &lt;furo-ui5-radio-button value-state=&#34;Warning&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-radio-button&gt; &lt;!-- just to be able to disable the radio again --&gt; &lt;furo-ui5-checkbox-input value-state=&#34;Success&#34; text=&#34;Toggle&#34; fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-checkbox-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # _previousValueState # default: 'None'
_tmpFAT # default: { labels: {}, value: false }
_attributesFromFNA # default: { readonly: undefined, disabled: undefined, label: undefined, }
_constraintsFromFNA # default: {}
_attributesFromFAT # default: { name: undefined, // the group name label: undefined, icon: undefined, 'value-state': undefined, }
_labelsFromFAT # default: { readonly: undefined, disabled: undefined, hidden: undefined, }
_privilegedAttributes # default: { name: null, readonly: null, disabled: null, text: null, icon: null, 'value-state': null, }
Events # change # at-change → \`\`
Fired when the input operation has finished by pressing Enter or on focusout. furo-value-changed # at-furo-value-changed → Boolean
Fired when value changed Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: bool, google.protobuf.BoolValue, furo.fat.Bool
fieldNode readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom.
onFnaFieldValueChanged # onFnaFieldValueChanged(val \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
overwrite onFnaFieldValueChanged
val onFnaFieldNodeBecameInvalid # onFnaFieldNodeBecameInvalid() ⟹ void
* → fn-on-fna-field-node-became-invalid
overwrite onFnaFieldNodeBecameInvalid function
onFnaLabelChanged # onFnaLabelChanged(text *placeholder* ) ⟹ void
→ fn-on-fna-label-changed
overwrite onFnaLabelChanged function label is mapped to text
text placeholder `}),e.add({id:210,href:"/docs/components/furo-ui5-rating-indicator/",title:"furo-ui5-rating-indicator",section:"Components",content:` furo-ui5-rating-indicator # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-rating-indicator.js'; exports FuroUi5RatingIndicator js extends src/furo-ui5-rating-indicator.js mixes FieldNodeAdapter
Summary: data rating input field
Description # The furo-ui5-rating-indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings. https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator/
You can bind any number type, any furo.fat.xxx number type, furo.BigDecimal or the google.wrapper.xxx number types.
1 2 3 &lt;furo-ui5-rating-indicator fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-rating-indicator&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled supported meta and constraints # readonly: true , set the element to readonly Methods # bind-data(fieldNode) Bind aa entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # Attributes and Properties # Events # change # at-change → number
Fired when the values changes. furo-value-changed # at-furo-value-changed → number
Fires the field value when it changes. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. readonly,disabled Use this after manual or scripted update of the attributes.
bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types:
double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64
google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc.
furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
furo.BigDecimal
fieldNode `}),e.add({id:211,href:"/docs/components/furo-ui5-reference-search/",title:"furo-ui5-reference-search",section:"Components",content:` furo-ui5-reference-search # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-reference-search.js'; exports FuroUi5ReferenceSearch js exports &lt;furo-ui5-reference-search&gt; custom-element-definition superclass LitElement mixes FBP mixes FieldNodeAdapter
Summary: furo ui5 data reference search
Description # The furo-ui5-reference-search is a search input field with the capability to open and extended search component.
Bound data must fullfill the furo.Reference signature. The service, deeplink,&hellip; is taken from the spec of your field. Do not forget to specify.
default usage
1 2 3 &lt;furo-ui5-reference-search fn-bind-data=&#34;--data(*.is_person)&#34; &gt;&lt;/furo-ui5-reference-search&gt; usage with an extended searcher
1 2 3 4 &lt;furo-ui5-reference-search extended-searcher=&#34;country-filter&#34; fn-bind-data=&#34;--data(*.is_person)&#34; &gt;&lt;/furo-ui5-reference-search&gt; usage example for a non default response
1 2 3 4 5 6 7 &lt;furo-ui5-reference-search extended-searcher=&#34;contact-filter&#34; search-response-path=&#34;xx_entities&#34; value-field-path=&#34;data.xx_id&#34; display-field-path=&#34;data.xx_display_name&#34; fn-bind-data=&#34;--data(*.is_person)&#34; &gt;&lt;/furo-ui5-reference-search-labeled&gt; supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element max:&ldquo;number&rdquo; set the maximum number of characters available in the input field. The constraint required will mark the element as required
If your type has a reference type signature (&lsquo;id&rsquo;,&lsquo;display_name&rsquo;, &rsquo;link&rsquo;), the service, and initial deep link is extracted from the link part of your type.
If you bind a scalar field, the value which is set in &lsquo;valueFieldPath&rsquo; will be set.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Specs # Define a proper default value on the reference type.
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 link: type: furo.Link description: HTS for the initial search (the default works on root resources only) __proto: number: 3 __ui: null meta: default: | { &#34;rel&#34;: &#34;list&#34;, &#34;href&#34;: &#34;/contacts&#34;, &#34;method&#34;: &#34;GET&#34;, &#34;type&#34;: &#34;contact.Contact&#34;, &#34;service&#34;: &#34;contact.Contacts&#34; } placeholder: &#34;&#34; hint: &#34;&#34; label: contact.Reference.link.label options: flags: [] list: [] readonly: false repeated: false typespecific: null API of an extended searcher # Searcher Methods # The only method you have to implement is htsIn. The reference-search will pass its own hts to the extended searcher. A call on qpIn on the searcher will also pass the resulting hts to the extended searcher.
Extended Searcher Events # Fire a record-selected to set the item on the reference-search. Fire a escape-filter-panel to close the extended search.
Examples # Minimal example # 1 2 3 4 5 &lt;furo-form-layouter four=&#34;&#34;&gt; &lt;furo-ui5-reference-search fn-bind-data=&#34;--entityReady(*.owner)&#34;&gt; &lt;/furo-ui5-reference-search&gt; &lt;/furo-form-layouter&gt; Example with extended searcher # To add the extended searcher, just set the name of the extended searcher component on the field extended-searcher.
The min-term-length in this demo is set to 1 character.
1 2 3 4 5 &lt;furo-ui5-reference-search fn-bind-data=&#34;--entityReady(*.owner)&#34; extended-searcher=&#34;demo-extended-searcher&#34; min-term-length=&#34;1&#34;&gt; &lt;/furo-ui5-reference-search&gt; Attributes and Properties # service # service string default: ''
setter for the service searchResponsePath # search-response-path string default: 'entities'
Path to the node in the response value which contains the array with the selection items. By default this goes to entitites valueFieldPath # value-field-path string default: 'data.id'
Path to response value item which is used for the id. By default this goes to data.id displayFieldPath # display-field-path string default: 'data.display_name'
Path to selection value node which is used for the display. By default this goes to data.display_name extendedValueFieldPath # extended-value-field-path string default: 'data.id'
Path to response value item of the extended search which is used for the id. By default this goes to data.id. Only needed when your extended searcher does not have the id, display_name signature in the response. extendedDisplayFieldPath # extended-display-field-path string default: 'data.display_name'
Path to response value item of the exteded search which is used for the display. By default this goes to data.display_name. Only needed when your extended searcher does not have the id, display_name signature in the response. maxItemsToDisplay # max-items-to-display number default: 8
The maximal number of items to display.
This value will be set as page-size query-param for the backend.
If the response contains hts information with rel next a &ldquo;load more&rdquo; button will be displayed at the end of the list. value # default: { id: '', display_name: '' }
minTermLength # min-term-length number default: 2
The minimal length of search term to trigger a search. debounceTimeout # debounce-timeout number default: 250
wait for this time between keystrokes to trigger a search to the service placeholder # placeholder string default: ''
Overrides the hint text from the specs.
Use with caution, normally the specs defines this value. label # label string default: ''
Overrides the label text from the specs.
Use with caution, normally the specs defines this value. noDataText # no-data-text string default: 'no result found'
hint text when result not found by search disableSearchList # disable-search-list boolean default: false
A Boolean attribute which, if present, means this field can not be searched.
This is very useful when you want enforce the usage of the extended search icon # icon string default: 'search'
Use this attribute to set a custom icon for your searcher valueState # value-state string default: 'None'
Value State of the input field method # method String Set the method. This is only needed when your service is not named &ldquo;List&rdquo;. This is not the http method. required # required reflects Boolean Overrides the required value from the specs.
Use with caution, normally the specs defines this value. searchOnEnterOnly # search-on-enter-only Boolean Enable this, to avoid the automatic triggering of &ldquo;search&rdquo;.
The user have to press enter to trigger the search. Min-term-length is respected. readonly # readonly Boolean Overrides the readonly value from the specs.
Use with caution, normally the specs defines this value. disabled # disabled Boolean Disable busy # busy Boolean This is used to activate the loading indicator. extendedSearcher # extended-searcher String Define the extended searcher. Do not forget to import the searcher you want to use. Events # item-selected # at-item-selected → \`\`Object the complete item
Fired when a item was selected from the list. change # at-change → text
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → \`\`
Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types: can be a scalar type or any complex type with &lsquo;id&rsquo;,&lsquo;display_name&rsquo; signature or use the furo.Reference type.
fieldNode focus # focus() ⟹ void
* → fn-focus
focuses the input field
triggerSearch # triggerSearch(term \`\` ) ⟹ void
\`\` → fn-trigger-search
triggerSearch search for a term
term onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom.
Following attributes can be set:
value-state value-state-message icon placeholder label required readonly disabled Use this after manual or scripted update of the attributes.
htsIn # htsIn(hts \`\` ) ⟹ void
\`\` → fn-hts-in
htsIn sets the HTS for the collection-agent.
This is only needed if you want to have fine grained control over the hts
hts qpIn # qpIn(qp \`\` ) ⟹ void
\`\` → fn-qp-in
qpIn Use this to set query params manualy
qp setFilter # setFilter(filter \`\` ) ⟹ void
\`\` → fn-set-filter
Sets the filter. Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side or do btoa(JSON.stringify(FILTER))
filter clearResultList # clearResultList() ⟹ void
* → fn-clear-result-list
clears the result set
Styling # The following custom properties available for styling:
Custom property Description --furo-ui5-reference-search-list-background background color of the result list default: --surface fallback: #ffffff `}),e.add({id:212,href:"/docs/components/furo-ui5-reference-search-labeled/",title:"furo-ui5-reference-search-labeled",section:"Components",content:` furo-ui5-reference-search-labeled # @furo/components v1.0.0-rc.7 import '@furo/components/src/furo-ui5-reference-search-labeled.js'; exports FuroUi5ReferenceSearchLabeled js exports &lt;furo-ui5-reference-search-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Examples # Minimal example # 1 2 3 4 5 &lt;furo-form-layouter four=&#34;&#34;&gt; &lt;furo-ui5-reference-search-labeled fn-bind-data=&#34;--entityReady(*.owner)&#34;&gt; &lt;/furo-ui5-reference-search-labeled&gt; &lt;/furo-form-layouter&gt; Example with extended searcher # To add the extended searcher, just set the name of the extended searcher component on the field extended-searcher.
The min-term-length in this demo is set to 1 character.
1 2 3 4 5 &lt;furo-ui5-reference-search-labeled fn-bind-data=&#34;--entityReady(*.owner)&#34; extended-searcher=&#34;demo-extended-searcher&#34; min-term-length=&#34;1&#34;&gt; &lt;/furo-ui5-reference-search-labeled&gt; Description # furo-ui5-reference-search-labeled The furo-ui5-reference-search-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
Attributes and Properties # service # service string default: ''
the service name label # label string default: ''
the label for the data-reference-search extendedSearcher # extended-searcher string default: ''
Define the extended searcher. Do not forget to import the searcher you want to use. disableSearchList # disable-search-list boolean default: false
A Boolean attribute which, if present, means this field can not be searched.
This is very useful when you want enforce the usage of the extended search icon # icon string default: 'search'
Use this attribute to set a custom icon for your searcher searchResponsePath # search-response-path string default: 'entities'
Path to the node in the response value which contains the array with the selection items. By default this goes to entitites valueFieldPath # value-field-path string default: 'data.id'
Path to response value item which is used for the id. By default this goes to data.id displayFieldPath # display-field-path string default: 'data.display_name'
Path to selection value node which is used for the display. By default this goes to data.display_name extendedValueFieldPath # extended-value-field-path string default: 'data.id'
Path to response value item of the exteded search which is used for the id. By default this goes to data.id. Only needed when your extended searcher does not have the id, display_name signature in the response. extendedDisplayFieldPath # extended-display-field-path string default: 'data.display_name'
Path to response value item of the exteded search which is used for the display. By default this goes to data.display_name. Only needed when your extended searcher does not have the id, display_name signature in the response. placeholder # placeholder Overrides the hint text from the specs. Use with caution, normally the specs defines this value. disabled # disabled A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly required # required A Boolean attribute which, if present, means this field is required and marked with *. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode setFilter # setFilter(filter \`\` ) ⟹ void
\`\` → fn-set-filter
sets the filter to the inner furo-ui5-reference-search
filter `}),e.add({id:213,href:"/docs/components/furo-ui5-relative-time-badge/",title:"furo-ui5-relative-time-badge",section:"Components",content:` furo-ui5-relative-time-badge # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-relative-time-badge.js'; exports FuroUi5RelativeTimeBadge js exports &lt;furo-ui5-relative-time-badge&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter
Summary: bindable relative time badge
Description # furo-ui5-relative-time-badge The furo-ui5-relative-time-badge is a small non-interactive component which contains relative time information (i.e. in 2 days, 5 days ago) and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information.
You can bind a string, google.protobuf.Timestamp, int32, int64, furo.type.Date or google.type.Date. int32, int64 will be handled as unix timestamps (seconds since epoc) and can not be empty.
1 2 3 &lt;furo-ui5-relative-time-badge fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt; &lt;/furo-ui5-relative-time-badge&gt; Attributes and Properties # colorSchemePositive # color-scheme-positive reflects string default: '1'
default values colorSchemeNegative # color-scheme-negative reflects string default: '2'
Defines the color scheme of the component if the value is NEGATIVE. There are 10 predefined schemes. Each scheme applies different values for the background-color and border-color. To use one you can set a number from &ldquo;1&rdquo; to &ldquo;10&rdquo;. The colorScheme &ldquo;1&rdquo; will be set by default.
Note: Color schemes have no visual representation in High Contrast Black (sap_belize_hcb) theme. optionStyle # option-style string default: 'long'
Defines the output style long, short, narrow Default: long optionNumeric # option-numeric string default: 'auto'
Defines the output format always, auto Default: auto Methods # bindData # bindData(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-data
Binds a fieldNode to the component Overridden bindData of FieldNodeAdapter
Supported types:
string (ISO 8061)
int32, int64 (unix timestamps (seconds since epoc))
google.protobuf.Timestamp
google.type.Date
furo.type.Date
fieldNode `}),e.add({id:214,href:"/docs/components/furo-ui5-section/",title:"furo-ui5-section",section:"Components",content:` furo-ui5-section # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-section.js'; exports FuroUi5Section js exports &lt;furo-ui5-section&gt; custom-element-definition superclass LitElement mixes FBP mixes FieldNodeAdapter
Summary:
Description # furo-ui5-section The object page content according to the SAP Design System Fiori guidelines consists of sections and subsections arranged in a column layout. The furo-ui5-section is basically a layout manager component to structure object pages. Sections can only contain subsections, not content.
1 2 3 4 &lt;furo-ui5-section heading=&#34;STRING&#34;&gt; &lt;furo-ui5-subsection&gt;&lt;/furo-ui5-subsection&gt; &lt;furo-ui5-subsection&gt;&lt;/furo-ui5-subsection&gt; &lt;/furo-ui5-section&gt; 1 2 3 4 5 &lt;furo-ui5-section fn-bind-data=&#34;--dao(*.field_of_type_string)&#34;&gt; &lt;furo-ui5-subsection&gt;&lt;/furo-ui5-subsection&gt; &lt;furo-ui5-subsection&gt;&lt;/furo-ui5-subsection&gt; &lt;/furo-ui5-section&gt; Methods # bindData(fieldNode) Binds an entity field to the heading. You can use the entity even when no data was received.
Example # Any content Any content Attributes and Properties # heading # heading string default: ''
Heading title of the section noborder # noborder Boolean Setting this attribute will hide the bottom border Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
Furo flow is ready lifecycle method
Slots # default # Type: FuroUi5SubSection [0..n]
defines the content of the section. `}),e.add({id:215,href:"/docs/components/furo-ui5-segmented-button/",title:"furo-ui5-segmented-button",section:"Components",content:` furo-ui5-segmented-button # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-segmented-button.js'; exports FuroUi5SegmentedButton js mixes FieldNodeAdapter
Summary: segmented button
Description # The furo-ui5-segmented-button component represents a drop-down list. The items inside define the available options by using the furo-ui5-segmented-button component.
1 2 3 &lt;furo-ui5-segmented-button fn-bind-data=&#34;--daoPerson(*.field_with_meta_options)&#34;&gt; &lt;/furo-ui5-segmented-button&gt; Example with options from specs # A simple way to use the segmented button is, uising it with specified options for a string type.
Defining a type with the options may look like a big overhead, but it let you switch the UI implementation by just changing the tag name.
The labels in the demo are not translated for better readability.
Markup # 1 2 3 4 5 6 7 8 &lt;furo-ui5-segmented-button fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-segmented-button&gt; &lt;furo-ui5-text-input value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-text-input&gt; &lt;furo-data-object type=&#34;person.Person&#34; @-object-ready=&#34;--daoPerson&#34;&gt;&lt;/furo-data-object&gt; Type definition # look at fields.sex.meta.options.list
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 name: Person type: Person description: Person message type lifecycle: null __proto: package: person targetfile: person.proto imports: - google/protobuf/field_mask.proto options: go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb java_multiple_files: &#34;true&#34; java_outer_classname: PersonProto java_package: com.example.tutorial.person fields: sex: type: string description: sex __proto: number: 8 __ui: null meta: default: female placeholder: &#34;&#34; hint: &#34;&#34; label: sex options: flags: [] list: # set the default options - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.unknown.label id: unknown selected: false - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.female.label id: female selected: true - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.male.label id: male selected: false readonly: false repeated: false typespecific: null constraints: {} Example with bindOptions # get options Markup # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 &lt;furo-form-layouter one&gt; &lt;furo-ui5-segmented-button value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.display_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt; &lt;/furo-ui5-segmented-button&gt; &lt;furo-ui5-segmented-button value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.first_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-segmented-button&gt; &lt;furo-ui5-segmented-button value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.phone_nr&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-segmented-button&gt; &lt;furo-ui5-number-input-labeled label=&#34;Selected option&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;/furo-form-layouter&gt; &lt;!-- this data object contains the list --&gt; &lt;furo-data-object type=&#34;person.PersonCollection&#34; @-object-ready=&#34;--collection&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; &lt;!-- this data object contains the field, you want to update --&gt; &lt;furo-data-object type=&#34;task.Task&#34; @-object-ready=&#34;--entity&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # activeFieldBinding # default: false
Flag to indicate if a field is attached Default: false idFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions()) to identify the option items. Point-separated path to the field E.g. data.partner.ulid default: id displayFieldPath # default: 'display_name'
Defines the field path that is used from the bound RepeaterNode (bindOptions()) to display the option items. Point-separated path to the field E.g. data.partner.display_name default: display_name valueFieldPath # default: 'id'
Defines the field path that is used to update the bound component if the user has selected an option. Point-separated path to the field Must be set if a data binding is specified. default: id Events # options-updated # at-options-updated → optionNodeList
Fired after the option list was rebuilt furo-value-changed # at-furo-value-changed → {*} the value from the value-field. By default the value field is &amp;#34;id&amp;#34;
Fired when value has changed from the component inside. bubbles item-selected # at-item-selected → selectedOption
Fired when the toggle button was clicked. Payload: - if no option binding is active: ui5-segmented-button-item - if a RepeaterNode is bound: FieldNode Methods # bindData # bindData(fieldNode \`\` ) ⟹ boolean
\`\` → fn-bind-data
Binds a FieldNode to the component.
Supported types:
fieldNode bindOptions # bindOptions(repeaterNode RepeaterNode ) ⟹ void
RepeaterNode → fn-bind-options
Bind a RepeaterNode that will be used to build up the option list.
Use idFieldPath and displayFieldPath if your structrure does not match the following signature:
1 2 3 4 [ { &#34;id&#34;: 1, &#34;display_name&#34;: &#34;option A&#34;}, { &#34;id&#34;: 2, &#34;display_name&#34;: &#34;option B&#34;} ] repeaterNode The list with the options readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. readonly,disabled, value-field-path, display-field-path Use this after manual or scripted update of the attributes.
selectOptionById # selectOptionById(val Id ) ⟹ void
Id → fn-select-option-by-id
Selects an option by id
val The id `}),e.add({id:216,href:"/docs/components/furo-ui5-select/",title:"furo-ui5-select",section:"Components",content:` furo-ui5-select # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-select.js'; exports FuroUi5Select js mixes FieldNodeAdapter
Summary: data select field
Description # The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.
1 2 3 4 &lt;furo-ui5-select fn-bind-data=&#34;--entity(*.data.description)&#34; fn-bind-options=&#34;--collection(*.entities)&#34;&gt; &lt;/furo-ui5-select&gt; Example with options from specs # A simple way to use the segmented button is, uising it with specified options for a string type.
Defining a type with the options may look like a big overhead, but it let you switch the UI implementation by just changing the tag name.
The labels in the demo are not translated for better readability.
Information message. This is a Link. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3. Markup # 1 2 3 4 5 6 7 8 9 10 11 &lt;furo-ui5-select label=&#34;Use with select&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-select&gt; &lt;furo-ui5-select label=&#34;Use with select&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-select&gt; &lt;furo-ui5-text-input label=&#34;use with text-input&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-text-input&gt; Type definition # look at fields.sex.meta.options.list
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 name: Person type: Person description: Person message type lifecycle: null __proto: package: person targetfile: person.proto imports: - google/protobuf/field_mask.proto options: go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb java_multiple_files: &#34;true&#34; java_outer_classname: PersonProto java_package: com.example.tutorial.person fields: sex: type: string description: sex __proto: number: 8 __ui: null meta: default: female placeholder: &#34;&#34; hint: &#34;&#34; label: sex options: flags: [] list: # set the default options - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.unknown.label id: unknown selected: false - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.female.label id: female selected: true - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.male.label id: male selected: false readonly: false repeated: false typespecific: null constraints: {} Example with bindOptions # Set the id of the selected optioin to a value which is not in the list and press load options again.
load options Markup # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 &lt;furo-ui5-select label=&#34;by display_name&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.display_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select&gt; &lt;furo-ui5-select label=&#34;by first_name&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.first_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select&gt; &lt;furo-ui5-select label=&#34;by phone_nr&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.phone_nr&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select&gt; &lt;furo-ui5-number-input label=&#34;Selected option&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-number-input&gt; &lt;/furo-form-layouter&gt; &lt;!-- this data object contains the list --&gt; &lt;furo-data-object type=&#34;person.PersonCollection&#34; @-object-ready=&#34;--collection&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; &lt;!-- this data object contains the field, you want to update --&gt; &lt;furo-data-object type=&#34;task.Task&#34; @-object-ready=&#34;--entity&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # activeFieldBinding # default: false
Flag to indicate if a field is attached Default: false idFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to identify the option items. Point-separated path to the field E.g. data.partner.ulid default: id This attribute is related to the option list displayFieldPath # default: 'display_name'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items. Point-separated path to the field E.g. data.partner.display_name default: display_name This attribute is related to the option list valueFieldPath # default: 'id'
Defines the field path that is used to update the bound component if the user has selected an option. Point-separated path to the field Must be set if a data binding is specified. default: id This attribute is related to the option list. optionList[selected].valueFieldPath ==&gt; bound FieldNode boundFieldIdPath # default: 'id'
Defines the id field path of the bound FieldNode. Point-separated path to the field Must be set if a data binding is specified with a complex type. default: id This attribute is related to the bound FieldNode. Events # options-updated # at-options-updated → optionNodeList
Fired after the option list was rebuilt. item-selected # at-item-selected → selectedOption
Fired when the item of the dropdown list is selected. furo-value-changed # at-furo-value-changed → selectedOption
Fires the field value when it changes. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, required,readonly,disabled, value-field-path, display-field-path Use this after manual or scripted update of the attributes.
bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Here a RepeaterNode can be connected to the component as an option list.
repeaterNode setOptions # setOptions(arr *rawJson* ) ⟹ boolean
→ fn-set-options
inject raw data as options
arr rawJson raw data array bindData # bindData(fieldNode FieldNode ) ⟹ boolean
FieldNode → fn-bind-data
Overridden bindData of FieldNodeAdapter
fieldNode onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state selectOptionById # selectOptionById(id * ) ⟹ void
* → fn-select-option-by-id
Selects an option by id. The id field must be comparable.
id must match the data `}),e.add({id:217,href:"/docs/components/furo-ui5-select-labeled/",title:"furo-ui5-select-labeled",section:"Components",content:` furo-ui5-select-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-select-labeled.js'; exports FuroUi5SelectLabeled js exports &lt;furo-ui5-select-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled select
Description # furo-ui5-select-labeled The furo-ui5-select-labeled is a composition to easily use a complete data select with label according to the design specification of SAP Fiori Design System.
Example with options from specs # A simple way to use the segmented button is, uising it with specified options for a string type.
Defining a type with the options may look like a big overhead, but it let you switch the UI implementation by just changing the tag name.
The labels in the demo are not translated for better readability.
Markup # 1 2 3 4 5 6 7 8 9 10 11 &lt;furo-ui5-select-labeled label=&#34;Use with select&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-select-labeled&gt; &lt;furo-ui5-select-labeled label=&#34;Use with select&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-select-labeled&gt; &lt;furo-ui5-text-input-labeled label=&#34;use with text-input&#34; value-state=&#34;Success&#34; fn-bind-data=&#34;--daoPerson(*.sex)&#34;&gt;&lt;/furo-ui5-text-input-labeled&gt; Type definition # look at fields.sex.meta.options.list
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 name: Person type: Person description: Person message type lifecycle: null __proto: package: person targetfile: person.proto imports: - google/protobuf/field_mask.proto options: go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb java_multiple_files: &#34;true&#34; java_outer_classname: PersonProto java_package: com.example.tutorial.person fields: sex: type: string description: sex __proto: number: 8 __ui: null meta: default: female placeholder: &#34;&#34; hint: &#34;&#34; label: sex options: flags: [] list: # set the default options - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.unknown.label id: unknown selected: false - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.female.label id: female selected: true - &#39;@type&#39;: type.googleapis.com/furo.Optionitem display_name: person.type.sex.male.label id: male selected: false readonly: false repeated: false typespecific: null constraints: {} Example with bindOptions # Set the id of the selected optioin to a value which is not in the list and press load options again.
load options Markup # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 &lt;furo-ui5-select-labeled label=&#34;by display_name&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.display_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select-labeled&gt; &lt;furo-ui5-select-labeled label=&#34;by first_name&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.first_name&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select-labeled&gt; &lt;furo-ui5-select-labeled label=&#34;by phone_nr&#34; value-field-path=&#34;data.id&#34; id-field-path=&#34;data.id&#34; display-field-path=&#34;data.phone_nr&#34; fn-bind-options=&#34;--collection(*.entities)&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-select-labeled&gt; &lt;furo-ui5-number-input-labeled label=&#34;Selected option&#34; fn-bind-data=&#34;--entity(*.owner.id)&#34;&gt;&lt;/furo-ui5-number-input-labeled&gt; &lt;/furo-form-layouter&gt; &lt;!-- this data object contains the list --&gt; &lt;furo-data-object type=&#34;person.PersonCollection&#34; @-object-ready=&#34;--collection&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; &lt;!-- this data object contains the field, you want to update --&gt; &lt;furo-data-object type=&#34;task.Task&#34; @-object-ready=&#34;--entity&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # label # label string default: ''
the label for the data-number-input idFieldPath # id-field-path string default: 'id'
Defines the field path that is used from the injected RepeaterNode to identify the option items. Point-separated path to the field E.g. data.partner.ulid valueFieldPath # value-field-path string default: 'id'
Defines the field path that is used to update the bound component if the user has selected an option. Point-separated path to the field Must be set if a data binding is specified. displayFieldPath # display-field-path string default: 'display_name'
Defines the field path that is used from the injected RepeaterNode to display the option items. Point-separated path to the field E.g. data.partner.display_name full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus setOptions # setOptions(arr *rawJson* ) ⟹ boolean
→ fn-set-options
inject raw data as options
arr rawJson raw data array with a id, display_name signature bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Binds a repeaterNode to the furo-ui5-select component
repeaterNode Slots # valueStateMessage # Type: HTMLElement
defines the value state message that will be displayed as pop up under the input element. `}),e.add({id:218,href:"/docs/components/furo-ui5-show-hide/",title:"furo-ui5-show-hide",section:"Components",content:` furo-ui5-show-hide # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-show-hide.js'; exports &lt;furo-ui5-show-hide&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Animated content hider
Description # furo-ui5-show-hide Animated content hider
Attributes and Properties # isHidden # Set is-hiddden to start in a closed state. The name is used by intention, to avoid css trouble with a global [hidden]{display:none}. hideOnFalse # default: false
_clientHeight # default: 0
_hidden # default: false
Methods # hide # hide() ⟹ void
* → fn-hide
Hides the content.
show # show() ⟹ void
* → fn-show
Shows the content.
toggle # toggle() ⟹ void
* → fn-toggle
Toggle the current visibility state..
`}),e.add({id:219,href:"/docs/components/furo-ui5-sign-pad/",title:"furo-ui5-sign-pad",section:"Components",content:` furo-ui5-sign-pad # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-sign-pad.js'; exports FuroUi5SignPad js exports &lt;furo-ui5-sign-pad&gt; custom-element-definition superclass LitElement mixes FBP
Summary: draw or sign
Description # furo-sign-pad Simple pad to sign or draw something
Example # clear 1 2 3 4 5 6 &lt;button @-click=&#34;--clearClicked&#34;&gt;clear&lt;/button&gt; &lt;furo-form-layouter four &gt; &lt;furo-ui5-sign-pad fn-clear=&#34;--clearClicked&#34; @-sign-updated=&#34;--signed&#34;&gt;&lt;/furo-ui5-sign-pad&gt; &lt;furo-ui5-sign-pad fn-clear=&#34;--clearClicked&#34; fn-put-image=&#34;--signed&#34;&gt;&lt;/furo-ui5-sign-pad&gt; &lt;/furo-form-layouter&gt; &lt;img set-src=&#34;--signed&#34; alt=&#34;&#34; width=&#34;100px&#34;&gt; Attributes and Properties # Events # sign-updated # at-sign-updated → Base64
Fired when sign gets new painting, with base encoded image. Methods # resize # resize() ⟹ void
* → fn-resize
Trigger this method after a resize.
disable # disable() ⟹ void
* → fn-disable
Disables the pad
enable # enable() ⟹ void
* → fn-enable
Enables the pad
clear # clear() ⟹ void
* → fn-clear
Clears the image. This also updates the bound field.
putImage # putImage(encodedImage imageURL ) ⟹ void
imageURL → fn-put-image
Adds the encoded image to the canvas.
Maybe you want to clear first.
encodedImage encodeImage # encodeImage() ⟹ void
* → fn-encode-image
Encodes the image using the type and encodingOptions (quality) defined. The encoded image is available in the image property.
bindData # bindData(entityField \`\` ) ⟹ void
\`\` → fn-bind-data
bind a entity field
entityField `}),e.add({id:220,href:"/docs/components/furo-ui5-step-input/",title:"furo-ui5-step-input",section:"Components",content:` furo-ui5-step-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-step-input.js'; exports FuroUi5StepInput js mixes FieldNodeAdapter
Summary: data step input field
Description # The furo-ui5-step-input component allows the user to enter and edit numbers with data binding. It consists of an input field and buttons with icons to increase/decrease the value with the predefined step. It supports all features from the SAP ui5 Input element.
You can bind any number type, any furo.fat.xxx number type, furo.BigDecimal or the google.wrapper.xxx number types.
1 2 3 &lt;furo-ui5-number-input fn-bind-data=&#34;--dao(FIELDNODE)&#34; &gt;&lt;/furo-ui5-number-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;required&rdquo;:&ldquo;true&rdquo; set the element to required &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;placeholder&rdquo;:&ldquo;string&rdquo; set the placeholder for the element supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind an entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Attributes and Properties # nativeInputAttributes # __previousValueState # default: { state: 'None', message: '' }
Events # change # at-change → number
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → \`\`
Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected. furo-value-changed # at-furo-value-changed → string
Fires the field value when it changes. Methods # bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds a FieldNode to the component.
Supported types:
double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64
google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc.
furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
furo.BigDecimal
fieldNode readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:221,href:"/docs/components/furo-ui5-step-input-labeled/",title:"furo-ui5-step-input-labeled",section:"Components",content:` furo-ui5-step-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-step-input-labeled.js'; exports FuroUi5StepInputLabeled js exports &lt;furo-ui5-step-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # The furo-ui5-step-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
1 &lt;furo-ui5-step-input fn-bind-data=&#34;--dao(FIELDNODE)&#34;&gt;&lt;/furo-ui5-step-input&gt; Attributes and Properties # label # label string default: ''
the label for the data-step-input icon # icon string default: ''
icon on the right full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. step # step Number Step size min # min Number Minimal value max # max Number Maximal value Events # furo-value-changed # at-furo-value-changed → Step
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside Supported types: double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64 google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc. furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
fieldNode `}),e.add({id:222,href:"/docs/components/furo-ui5-subsection/",title:"furo-ui5-subsection",section:"Components",content:` furo-ui5-subsection # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-subsection.js'; exports FuroUi5Subsection js exports &lt;furo-ui5-subsection&gt; custom-element-definition superclass LitElement mixes FBP mixes FieldNodeAdapter
Summary:
Description # furo-ui5-subsection The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be used within a furo-ui5-section Subsections have a progressive disclosure mechanism to show and hide content
https://experience.sap.com/fiori-design-web/object-page/#content-area
1 2 3 4 5 6 7 &lt;furo-ui5-section heading=&#34;STRING&#34;&gt; &lt;furo-ui5-subsection heading=&#34;Subsection Title&#34;&gt; &lt;furo-horizontal-flex slot=&#34;action&#34;&gt;...&lt;/furo-horizontal-flex&gt; &lt;my-content&gt;&lt;/my-content&gt; &lt;more-content slot=&#34;more&#34;&gt;&lt;/more-content&gt; &lt;/furo-ui5-subsection&gt; &lt;/furo-ui5-section&gt; Methods # bindData(fieldNode) Binds an entity field to the heading. You can use the entity even when no data was received.
Attributes and Properties # heading # heading string default: ''
Heading title of the section showMoreDataText # show-more-data-text string default: 'Show More'
Defines the text that will be displayed for show more showLessDataText # show-less-data-text string default: 'Show Less'
Defines the text that will be displayed for show less collapsed # collapsed reflects boolean default: false
Collapsed state of the read more section hasMoreContent # default: false
level # level string default: 'H4'
Defines the heading level. Available options are: &ldquo;H6&rdquo; to &ldquo;H1&rdquo;. Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
Furo flow is ready lifecycle method
toggleCollapse # toggleCollapse() ⟹ void
* → fn-toggle-collapse
toggles the collapse state
Slots # default # Type: HTMLElement [0..n]
defines the content of the subsection. headline-start # Type: HTMLElement [0..n]
defines the content right after the header. headline-end # Type: HTMLElement [0..n]
defines the content before the action slot. action # Type: HTMLElement [0..n]
defines the heading bar of the subsection. more # Type: HTMLElement [0..n]
defines the additional content in the show more section. `}),e.add({id:223,href:"/docs/components/furo-ui5-table/",title:"furo-ui5-table",section:"Components",content:` furo-ui5-table # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-table.js'; exports FuroUi5Table js exports &lt;furo-ui5-table&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Display repeated fields in a table
Description # furo-ui5-table display entities in a ui5-table
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 &lt;furo-ui5-table fn-bind-data=&#34;--data(*.entities)&#34; &gt; &lt;!-- The column label is evaluated from the specs --&gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.fieldname&#34; &gt;&lt;/ui5-table-column&gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.display_name&#34; &gt;&lt;span&gt;Custom Title&lt;/span&gt;&lt;/ui5-table-column&gt; &lt;/furo-ui5-table&gt; Attributes which are taken from ui5-table-column # field Define the field you want to bind. * is the root of the repeated field.
context Set a context for the type renderer. The default value is cell.
renderer Set a specific renderer component for the column. If not set, the renderer is evaluated from the type of the bound field.
Example # The default typerenderer context for the cells is cell. You can set the context on the ui5-table-column.
load data
Custom Title Markup # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 &lt;furo-ui5-table fn-bind-data=&#34;--collection(*.entities)&#34;&gt; &lt;!-- The column label is evaluated from the specs --&gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.phone_nr&#34; &gt;&lt;/ui5-table-column&gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.first_name&#34; &gt;&lt;/ui5-table-column&gt; &lt;!-- set a context for the typerenderer --&gt; &lt;ui5-table-column slot=&#34;columns&#34; context=&#34;celledit&#34; field=&#34;*.data.first_name&#34; &gt;&lt;/ui5-table-column&gt; &lt;!-- Setting a custom label --&gt; &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.data.name&#34; &gt;&lt;span&gt;Custom Title&lt;/span&gt;&lt;/ui5-table-column&gt; &lt;/furo-ui5-table&gt; &lt;furo-data-object type=&#34;person.PersonCollection&#34; @-object-ready=&#34;--collection&#34; fn-inject-raw=&#34;--response&#34;&gt;&lt;/furo-data-object&gt; Attributes and Properties # mode # mode string default: 'None'
Defines the mode of the component.
Available options are:
MultiSelect SingleSelect None noDataText # no-data-text String Defines the text that will be displayed when there is no data. string identityPath # identity-path * string} stickyColumnHeader # sticky-column-header Boolean Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport. busy # busy Boolean Busy state Events # data-loaded # at-data-loaded → HTMLElement
Fired when the data is loaded into data table. The event detail contains the data table self. arrow-down-on-last-row # at-arrow-down-on-last-row → entity
Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row tablerow-selected # at-tablerow-selected → entity
Fired when the row is selected. The event detail is the original entity of the row. arrow-up-on-first-row # at-arrow-up-on-first-row → entity
Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row rows-selected # at-rows-selected → Array with the selected items
Fired when the row selection in MultiSelect mode was changed Methods # bindData # bindData(data \`\` ) ⟹ void
\`\` → fn-bind-data
Bind a repeated data node.
data focus # focus() ⟹ void
* → fn-focus
Focuses the header of the table
focusLast # focusLast() ⟹ void
* → fn-focus-last
Focuses the last row.
focusFirst # focusFirst() ⟹ void
* → fn-focus-first
Focuses the first row.
_initRepeatTemplate # _initRepeatTemplate(fieldPaths \`\` ) ⟹ void
\`\` → fn&ndash;init-repeat-template
fieldPaths setBusy # setBusy() ⟹ void
* → fn-set-busy
setBusy Sets the busy state
unsetBusy # unsetBusy() ⟹ void
* → fn-unset-busy
unsetBusy Unsets the busy state
`}),e.add({id:224,href:"/docs/components/furo-ui5-table-row/",title:"furo-ui5-table-row",section:"Components",content:` furo-ui5-table-row # @furo/ui5 v1.18.0 import '@furo/ui5/src/subcomponents/furo-ui5-table-row.js'; exports FuroUi5TableRow js exports &lt;furo-ui5-table-row&gt; custom-element-definition extends src/subcomponents/furo-ui5-table-row.js
Summary:
Description # INTERNAL COMPONENT # This is a helper component to send tablerow-selected event by clicking the row or pressing the enter on the row.
Attributes and Properties # _data # default: {}
Events # ui5-selection-requested # at-ui5-selection-requested → Event
tablerow-selected # at-tablerow-selected → CustomEvent
arrow-down-on-last-row # at-arrow-down-on-last-row → CustomEvent
arrow-up-on-first-row # at-arrow-up-on-first-row → CustomEvent
Methods # focus # focus() ⟹ void
* → fn-focus
focus this row
setData # setData(d \`\` ) ⟹ void
\`\` → fn-set-data
d _select # _select() ⟹ void
* → fn&ndash;select
_arrowDownPressed # _arrowDownPressed(event \`\` ) ⟹ void
\`\` → fn&ndash;arrow-down-pressed
event _arrowUpPressed # _arrowUpPressed() ⟹ void
* → fn&ndash;arrow-up-pressed
`}),e.add({id:225,href:"/docs/components/furo-ui5-text-input/",title:"furo-ui5-text-input",section:"Components",content:` furo-ui5-text-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-text-input.js'; exports FuroUi5TextInput js mixes FieldNodeAdapter
Summary: data text input field
Description # The &lsquo;furo-ui5-text-input&rsquo; component allows the user to enter and edit texts with data binding.
It supports all features from the SAP ui5 Input element.
You can bind any string type, like furo.fat.String type or the google.protobuf.StringValue type.
1 2 3 &lt;furo-ui5-text-input fn-bind-data=&#34;--daoCountry(*.data.name)&#34; &gt;&lt;/furo-ui5-text-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. ** meta &lt; fat &lt; html **
supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;required&rdquo;:&ldquo;true&rdquo; set the element to required &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;icon&rdquo;:&ldquo;home&rdquo; set the icon &ldquo;placeholder&rdquo;:&ldquo;string&rdquo; set the placeholder for the element &ldquo;max&rdquo;:&ldquo;number&rdquo; set the maximum number of characters available in the input field. supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element max:&ldquo;number&rdquo; set the maximum number of characters available in the input field. The constraint required will mark the element as required
Methods # bindData(fieldNode) Bind an entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 &lt;furo-form-layouter four&gt; &lt;furo-ui5-text-input fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input&gt; &lt;furo-ui5-text-input readonly fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input&gt; &lt;furo-ui5-text-input disabled fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input&gt; &lt;furo-ui5-text-input value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # nativeInputAttributes # type # default: 'Text'
displayFieldPath # default: 'display_name'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the text of the option items. Point-separated path to the field E.g. data.partner.display_name default: display_name This attribute is related to the option list descFieldPath # default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional description of the option items. Point-separated path to the field E.g. data.partner.id default: id This attribute is related to the option list wait # default: 250
Debounce time in milliseconds Default value: 250 Events # search-requested # at-search-requested → value
Fired when typing in input (debounced, default 250ms) change # at-change → String
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → String
Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected. furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled
Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Here a RepeaterNode can be connected to the component as an option list. The items are displayed as suggestion items.
repeaterNode `}),e.add({id:226,href:"/docs/components/furo-ui5-text-input-labeled/",title:"furo-ui5-text-input-labeled",section:"Components",content:` furo-ui5-text-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-text-input-labeled.js'; exports FuroUi5TextInputLabeled js exports &lt;furo-ui5-text-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # furo-ui5-text-input-labeled The furo-ui5-text-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
Example # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 &lt;furo-form-layouter four&gt; &lt;furo-ui5-text-input-labeled fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input-labeled&gt; &lt;furo-ui5-text-input-labeled readonly fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input-labeled&gt; &lt;furo-ui5-text-input-labeled disabled fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input-labeled&gt; &lt;furo-ui5-text-input-labeled required fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input-labeled&gt; &lt;furo-ui5-text-input-labeled value-state=&#34;Success&#34; placeholder=&#34;Placeholder&#34; fn-bind-data=&#34;--doExp(*.furo_data_text_input)&#34; &gt;&lt;/furo-ui5-text-input-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-text-input descFieldPath # desc-field-path string default: 'id'
Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional description of the option items. Point-separated path to the field E.g. data.partner.id default: id This attribute is related to the option list displayFieldPath # display-field-path string default: 'display_name'
Defines the field path that is used from the injected RepeaterNode to display the option items. Point-separated path to the field E.g. data.partner.display_name full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user and appears in disabled state. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode bindOptions # bindOptions(repeaterNode \`\` ) ⟹ void
\`\` → fn-bind-options
Binds a repeaterNode to the furo-ui5-combobox component
repeaterNode Slots # icon # Type: HTMLElement
defines the icon to be displayed in the input element. icon # Type: HTMLElement
Defines the icon to be displayed in the input. `}),e.add({id:227,href:"/docs/components/furo-ui5-textarea-input/",title:"furo-ui5-textarea-input",section:"Components",content:` furo-ui5-textarea-input # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-textarea-input.js'; exports FuroUi5TextareaInput js extends src/furo-ui5-textarea-input.js mixes FieldNodeAdapter
Summary: data textarea input field
Description # The &lsquo;furo-ui5-textarea-input&rsquo; component allows the user to enter and edit texts with data binding.
It supports all features from the SAP ui5 Input element.
You can bind any string type, like furo.fat.String type or the google.protobuf.StringValue type.
1 2 3 &lt;furo-ui5-textarea-input fn-bind-data=&#34;--daoCountry(*.data.name)&#34; &gt;&lt;/furo-ui5-textarea-input&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. ** meta &lt; fat &lt; html **
supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;required&rdquo;:&ldquo;true&rdquo; set the element to required &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;placeholder&rdquo;:&ldquo;string&rdquo; set the placeholder for the element &ldquo;rows&rdquo;:&ldquo;number&rdquo; set the number of rows. &ldquo;growing&rdquo;:&ldquo;true&rdquo; Enables the ui5-textarea to automatically grow and shrink dynamically with its content. &ldquo;show-exceeded-text&rdquo;:&ldquo;true&rdquo; if set to true. the characters exceeding the maxlength value are selected on paste and the counter below the ui5-textarea displays their number. If set to false, the user is not allowed to enter more characters than what is set in the maxlength property. &ldquo;growing-max-lines&rdquo;:&ldquo;number&rdquo; Defines the maximum number of lines that the Web Component can grow. &ldquo;max&rdquo;:&ldquo;number&rdquo; set the maximum number of characters available in the input field. supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element max:&ldquo;number&rdquo; set the maximum number of characters available in the input field. The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-ui5-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 &lt;furo-ui5-textarea-input fn-bind-data=&#34;--dataObject(*.furo_data_textarea_input)&#34; &gt;&lt;/furo-ui5-textarea-input&gt; &lt;furo-ui5-textarea-input rows=&#34;9&#34; value-state=&#34;Information&#34; fn-bind-data=&#34;--dataObject(*.furo_data_textarea_input)&#34; &gt;&lt;/furo-ui5-textarea-input&gt; Attributes and Properties # nativeInputAttributes # value # default: ''
Events # change # at-change → text
Fired when the input operation has finished by pressing Enter or on focusout. input # at-input → \`\`
Fired when the value of the ui5-input changes at each keystroke. furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, placeholder, required,readonly,disabled Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:228,href:"/docs/components/furo-ui5-textarea-input-labeled/",title:"furo-ui5-textarea-input-labeled",section:"Components",content:` furo-ui5-textarea-input-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-textarea-input-labeled.js'; exports FuroUi5TextareaInputLabeled js exports &lt;furo-ui5-textarea-input-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled textarea field
Description # furo-ui5-textarea-input-labeled The furo-ui5-textarea-input-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
Example # 1 2 3 4 5 6 7 8 &lt;furo-ui5-textarea-input-labeled fn-bind-data=&#34;--dataObject(*.furo_data_textarea_input)&#34; &gt;&lt;/furo-ui5-textarea-input-labeled&gt; &lt;furo-ui5-textarea-input-labeled rows=&#34;9&#34; value-state=&#34;Information&#34; fn-bind-data=&#34;--dataObject(*.furo_data_textarea_input)&#34; &gt;&lt;/furo-ui5-textarea-input-labeled&gt; Attributes and Properties # label # label string default: ''
the label for the data-textarea-input rows # rows number default: 0
Defines the number of visible text lines for the component. growingMaxLines # growing-max-lines number default: 0
Defines the maximum number of lines that the Web Component can grow. full # full boolean This is only used to forward the state to the form-field-container required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. showExceededText # show-exceeded-text Boolean Determines whether the characters exceeding the maximum allowed character count are visible in the furo-ui5-textarea-input.
If set to false, the user is not allowed to enter more characters than what is set in the maxlength property. If set to true the characters exceeding the maxlength value are selected on paste and the counter below the furo-ui5-textarea-input displays their number. growing # growing Boolean Enables the furo-ui5-textarea to automatically grow and shrink dynamically with its content. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode `}),e.add({id:229,href:"/docs/components/furo-ui5-time-picker/",title:"furo-ui5-time-picker",section:"Components",content:` furo-ui5-time-picker # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-time-picker.js'; exports FuroUi5TimePicker js mixes FieldNodeAdapter
Summary: furo data time picker field
Description # The furo-ui5-time-picker component allows the user to bind a field of type google.type.TimeOfDay. Represents a time of day. The date and time zone are either not significant or are specified elsewhere.
https://sap.github.io/ui5-webcomponents/playground/components/TimePicker/
Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see UTS #35: Unicode Locale Data Markup Language.
For example, if the format-pattern is &ldquo;hh:mm:ss&rdquo;, a valid value string is &ldquo;11:42:35&rdquo; and the same is displayed in the input.
The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property). To visualize semantic states, such as &ldquo;error&rdquo; or &ldquo;warning&rdquo;, the valueState property is provided. When the user makes changes to the time, the change event is fired, which enables you to react on any time change.
You can bind a string or google.type.TimeOfDay ( https://github.com/googleapis/googleapis/blob/master/google/type/timeofday.proto).
1 2 3 &lt;furo-ui5-time-picker fn-bind-data=&#34;--data(*.start_time)&#34;&gt; &lt;/furo-ui5-time-picker&gt; supported meta and constraints # readonly: true , set the element to readonly placeholder:&ldquo;some string&rdquo; set the placeholder for the element min:&ldquo;11:42:35&rdquo; set the minDate for the element (use iso date in the constraint) max:&ldquo;23:59:59&rdquo; set the maxDate for the element (use iso date in the constraint) pattern:&ldquo;HH:mm:ss&rdquo; set the pattern for the element The constraint required will mark the element as required
Methods # bind-data(fieldNode) Bind a entity field. You can use the entity even when no data was received.
When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with &ndash;entity(*.fields.fieldname)
Example # 1 2 3 4 5 6 7 8 &lt;furo-ui5-time-picker fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker&gt; &lt;furo-ui5-time-picker value-state=&#34;Information&#34; fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # formatPattern # default: ''
Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes in ISO 8601 format. change # at-change → \`\`
Fired when the input operation has finished by pressing Enter or on focusout. Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(value \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
FieldNodeAdapter callback function to handle changes on the model.
value readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom. those attributes can be set. value-state, value-state-message, icon, placeholder, required,readonly,disabled
Use this after manual or scripted update of the attributes.
onFnaFieldStateChanged # onFnaFieldStateChanged(state \`\` ) ⟹ void
\`\` → fn-on-fna-field-state-changed
set the value state
state `}),e.add({id:230,href:"/docs/components/furo-ui5-time-picker-labeled/",title:"furo-ui5-time-picker-labeled",section:"Components",content:` furo-ui5-time-picker-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-time-picker-labeled.js'; exports FuroUi5TimePickerLabeled js exports &lt;furo-ui5-time-picker-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # furo-ui5-time-picker-labeled The furo-ui5-time-picker-labeled is a composition to easily use a complete input field with label according to the design specification of SAP Fiori Design System.
Inside a furo-form-layouter set to four # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-time-picker-labeled fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker-labeled&gt; &lt;furo-ui5-time-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker-labeled&gt; &lt;/furo-form-layouter&gt; Inside a furo-form-layouter set to two # 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter two&gt; &lt;furo-ui5-time-picker-labeled fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker-labeled&gt; &lt;furo-ui5-time-picker-labeled value-state=&#34;Success&#34; text=&#34;Override&#34; fn-bind-data=&#34;--dataObject(*.furo_data_time_input)&#34; &gt;&lt;/furo-ui5-time-picker-labeled&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # label # label string default: ''
the label for the data-date-picker full # full boolean This is only used to forward the state to the form-field-container formatPattern # format-pattern String forwards the format-pattern to the furo-ui5-time-picker component. required # required Boolean A Boolean attribute which, if present, means this field is required and marked with *. disabled # disabled reflects Boolean A Boolean attribute which, if present, means this field cannot be edited by the user. readonly # readonly Boolean A Boolean attribute which, if present, means this field is readonly. Events # furo-value-changed # at-furo-value-changed → String
Fires the field value when it changes in ISO 8601 format. Methods # focus # focus(options Object ) ⟹ void
Object → fn-focus
Focuses the underlying ui5 input element
options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Orchestrates the data field connection to the inside
fieldNode `}),e.add({id:231,href:"/docs/components/furo-ui5-toast/",title:"furo-ui5-toast",section:"Components",content:` furo-ui5-toast # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-toast.js'; exports FuroUi5Toast js extends src/furo-ui5-toast.js
Summary: Toast element
Description # The furo-ui5-toast is a extended ui5-toast which can attach itself to a parent dom element.
This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-toast behind the backdrop.
Use this component like a regular ui5-toast and do not forget to place the furo-ui5-toast-display in one of the parent elements.
It supports all features from the SAP ui5 Toast element.
important: Place a furo-ui5-toast-display in any dom parent of the component where you use furo-ui5-toast. Your app-shell or body is a good place to do that.
1 2 3 &lt;furo-ui5-toast fn-show=&#34;--openToastClicked&#34; placement=&#34;MiddleCenter&#34;&gt;Content&lt;/furo-ui5-toast&gt; &lt;button at-click=&#34;--openToastClicked&#34;&gt;Open toast&lt;/button&gt; Sample # Content open toast 1 2 3 &lt;furo-ui5-toast fn-show=&#34;--openToastClicked&#34; placement=&#34;MiddleCenter&#34;&gt;Content&lt;/furo-ui5-toast&gt; &lt;button @-click=&#34;--openToastClicked&#34;&gt;open toast&lt;/button&gt; Note: furo-ui5-toast-display is placed in body
Attributes and Properties # Methods # show # show() ⟹ void
* → fn-show
shows the toast
`}),e.add({id:232,href:"/docs/components/furo-ui5-toast-display/",title:"furo-ui5-toast-display",section:"Components",content:` furo-ui5-toast-display # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-toast-display.js'; exports FuroUi5ToastDisplay js exports &lt;furo-ui5-toast-display&gt; custom-element-definition superclass LitElement
Summary: Display element for furo-ui5-toast
Description # The furo-ui5-toast-display will catch furo-ui5-toast elements, to display it in the dom of his parent element.
The first furo-ui5-toast-display on the event path will catch the furo-ui5-toast-register request from a underlying furo-ui5-toast.
Attributes and Properties # Methods # `}),e.add({id:233,href:"/docs/components/furo-ui5-toggle-button/",title:"furo-ui5-toggle-button",section:"Components",content:` furo-ui5-toggle-button # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-toggle-button.js'; exports FuroUi5ToggleButton js extends src/furo-ui5-toggle-button.js mixes FieldNodeAdapter
Summary: boolean toggle button
Description # The &lsquo;furo-ui5-toggle-button&rsquo; component allows the user to switch true and false for Bool with data binding.
It supports all features from the SAP ui5 toggleButton element.
You can bind bool type, furo.fat.Bool type or the google.wrapper.BoolValue type.
1 2 3 &lt;furo-ui5-toggle-button fn-bind-data=&#34;--daoCountry(*.data.classified_as_risk_area)&#34; &gt;&lt;/furo-ui5-toggle-button&gt; Specificity # Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat. meta fat html 1 10 100 supported FAT attributes # &ldquo;readonly&rdquo;:&ldquo;true&rdquo; set the element to readonly &ldquo;disabled&rdquo;:&ldquo;true&rdquo; set the element to disabled &ldquo;icon&rdquo;:&quot;&quot; set the icon &ldquo;design&rdquo;:&quot;&quot; set the design supported meta and constraints # readonly: true , set the element to readonly The constraint required will mark the element as required
Example # Override 1 2 3 4 5 6 7 8 9 10 &lt;furo-form-layouter four&gt; &lt;furo-ui5-toggle-button fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;&lt;/furo-ui5-toggle-button&gt; &lt;furo-ui5-toggle-button design=&#34;Positive&#34; text fn-bind-data=&#34;--doExp(*.furo_data_checkbox_input)&#34; &gt;Override&lt;/furo-ui5-toggle-button&gt; &lt;/furo-form-layouter&gt; Attributes and Properties # _previousDesign # default: 'Default'
Events # click # at-click → \`\`
Fired when the input operation has finished by pressing Enter or on focusout. furo-value-changed # at-furo-value-changed → Boolean
Fires the value of pressed when value changed. Methods # readAttributes # readAttributes() ⟹ void
* → fn-read-attributes
Reads the attributes which are set on the component dom.
`}),e.add({id:234,href:"/docs/components/furo-ui5-tree/",title:"furo-ui5-tree",section:"Components",content:` furo-ui5-tree # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-tree.js'; exports FuroUi5Tree js exports &lt;furo-ui5-tree&gt; custom-element-definition superclass LitElement mixes FBP
Summary: tree navigation menu
Description # furo-tree renders a tree structure
Data signature # 1 2 3 4 5 6 - type: &#39;tree.Tree #Navigation tree type with recursive navigation nodes&#39; fields: root: &#39;tree.Navigationnode:1 #Root node of the tree&#39; id: &#39;string:2 #[optional] Id of the tree&#39; display_name: &#39;- string:3 #[optional] String representation of the tree&#39; description: &#39;string:4 #[optional] description of the tree&#39; 1 2 3 4 5 6 7 8 9 10 11 12 - type: &#39;tree.Navigationnode #Item of the navigationtree&#39; fields: id: &#39;string:1 #Id of the node&#39; display_name: &#39;- string:2 #String representation of the node&#39; children: &#39;[] tree.Navigationnode:3 #Children of this node&#39; open: &#39;bool:4 #node is open or not&#39; secondary_text: &#39;string:5 #[optional] Secondary text of the node&#39; description: &#39;string:6 #[optional] Searchable description of the node&#39; icon: &#39;string:7 #[optional] icon of the node&#39; key_words: &#39;string:8 #[optional] searchable key words of the node&#39; has_error: &#39;bool:9 #[optional] error indicator&#39; is_group_label: &#39;bool:10 #[optional] Mark node as group label&#39; Minimalistic Example # Source for the tree part with keyboard navigation
1 2 3 4 5 6 7 8 9 10 11 12 13 14 &lt;furo-ui5-tree fn-bind-data=&#34;--entityObj(*.data)&#34; @-node-selected=&#34;--nodeSelected&#34; fn-trigger-navigation=&#34;--navigation&#34; &gt; &lt;!-- add the furo-navigation-pad for keyboard navigation --&gt; &lt;furo-navigation-pad @-navigated=&#34;--navigation&#34;&gt;&lt;/furo-navigation-pad&gt; &lt;/furo-ui5-tree&gt; &lt;furo-data-object type=&#34;tree.TreeEntity&#34; fn-inject-raw=&#34;--data&#34; @-object-ready=&#34;--entityObj&#34; &gt;&lt;/furo-data-object&gt; Example with deep link and root node set as header # 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 &lt;furo-ui5-tree slot=&#34;master&#34; root-as-header fn-bind-data=&#34;--entityObj(*.data)&#34; qp=&#34;panel&#34; fn-location-in=&#34;--qp&#34; @-node-selected=&#34;--nodeSelected&#34; @-qp-change-requested=&#34;--qpchangerequest&#34; fn-trigger-navigation=&#34;--navigation&#34; &gt; &lt;!-- add the furo-navigation-pad for keyboard navigation --&gt; &lt;furo-navigation-pad @-navigated=&#34;--navigation&#34;&gt;&lt;/furo-navigation-pad&gt; &lt;/furo-ui5-tree&gt; &lt;!-- update the location --&gt; &lt;furo-location-updater fn-set-qp=&#34;--qpchangerequest&#34;&gt;&lt;/furo-location-updater&gt; &lt;!-- track location changes --&gt; &lt;furo-location @-location-query-changed=&#34;--qp&#34;&gt;&lt;/furo-location&gt; &lt;furo-data-object type=&#34;tree.TreeEntity&#34; fn-inject-raw=&#34;--data&#34; @-object-ready=&#34;--entityObj&#34; &gt;&lt;/furo-data-object&gt; &lt;furo-fetch-json fn-fetch=&#34;--entityObj&#34; src=&#34;/mockdata/trees/1/testdata.json&#34; @-data=&#34;--data&#34; &gt;&lt;/furo-fetch-json&gt; Attributes and Properties # tabindex # tabindex reflects number default: 0
Sets the tabindex expandDepth # expand-depth number default: 2
Sets the maximal expand level relative from the current node.
Expanding is a expensive operation. depth # depth Number Maximal depth for the tree. Default is infinite. qp # qp String Query param to watch. Set qp to have a deep linkable tree.
If you set this attribute, the node-selected event will only be fired on fn-qp-in or fn-select-by-id.
If you select an item the qp-change-request will be fired instead. With the qp-change-request event, you should update the url. A furo-location should watch the url and update the location on the tree, which will trigger a node-selected event.
1 2 3 4 5 6 &lt;furo-location at-location-query-changed=&#34;--qp&#34;&gt;&lt;/furo-location&gt; &lt;furo-ui5-tree qp=&#34;panel&#34; fn-location-in=&#34;--qp&#34; at-qp-change-requested=&#34;--qpchangerequest&#34;&gt;&lt;/furo-ui5-tree&gt; &lt;!-- update the location with the selected tree item --&gt; &lt;furo-location-updater fn-set-qp=&#34;--qpchangerequest&#34;&gt;&lt;/furo-location-updater&gt; rootAsHeader # root-as-header Boolean Set this flag if you do not want a header-text section. hideRootNode # hide-root-node Boolean Set this flag if you do not want to see the root node headerText # header-text String Override display name from root object secondaryText # secondary-text String Override description from root object. focused # focused reflects Boolean indicates that the element is focused Events # node-focused # at-node-focused → focused field
Fired when branch-focused # at-branch-focused → focused field
Fired when leaf-focused # at-leaf-focused → \`\`
Fired when node-selected # at-node-selected → selected field
Fired when the item gets selected, does not fire when you work with query params qp-change-requested # at-qp-change-requested → Object {&amp;#34;this.qp&amp;#34;: this._selectedField.id._value}
Fired when qp mode is enabled. Nodes are only selectable with qpIn or selectById branch-selected # at-branch-selected → selected field
Fired when leaf-selected # at-leaf-selected → selected field
Fired when node-opened # at-node-opened → \`\`
Fired when a node is opened node-closed # at-node-closed → \`\`
Fired when a node is closed nodes-expanded # at-nodes-expanded → \`\`
Fired when nodes are expanded recursive nodes-collapsed # at-nodes-collapsed → \`\`
Fired when nodes are collapsed recursive. Methods # collapseFocused # collapseFocused() ⟹ void
* → fn-collapse-focused
collapses the focused element. If it is closed the parent will be focused.
expandFocused # expandFocused() ⟹ void
* → fn-expand-focused
expands the focused node, if it is opened the first child will be focused
expandFocusedRecursive # expandFocusedRecursive() ⟹ void
* → fn-expand-focused-recursive
expands the focused node recursive
collapseFocusedRecursive # collapseFocusedRecursive() ⟹ void
* → fn-collapse-focused-recursive
collapses the focused node recursive
selectFocused # selectFocused() ⟹ void
* → fn-select-focused
selects the focused element.
search # search(term \`\` ) ⟹ []
\`\` → fn-search
Search in the visible nodes
term searchOpenTree # searchOpenTree() ⟹ void
* → fn-search-open-tree
resetSearch # resetSearch() ⟹ void
* → fn-reset-search
Disables the search mode and clears the term
focusParent # focusParent() ⟹ void
* → fn-focus-parent
Focuses the parent tree node without selecting it.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
focusPrevious # focusPrevious() ⟹ void
* → fn-focus-previous
focus the previous visible node.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
qpIn # qpIn(qpObject \`\` ) ⟹ void
\`\` → fn-qp-in
Selects the node which is defined on qp
Use this, if you do not have a location object.
qpObject locationIn # locationIn(locationObject \`\` ) ⟹ *|boolean
\`\` → fn-location-in
Inject a location object, which contains a query param property to select the current node.
locationObject selectById # selectById(nodeID \`\` ) ⟹ void
\`\` → fn-select-by-id
nodeID selectPrev # selectPrev() ⟹ void
* → fn-select-prev
select the previous visible item
expandNodeRecursive # expandNodeRecursive() ⟹ void
* → fn-expand-node-recursive
expands the currently selected node recursive
expandAll # expandAll() ⟹ void
* → fn-expand-all
collapseAll # collapseAll() ⟹ void
* → fn-collapse-all
collapseNodeRecursive # collapseNodeRecursive() ⟹ void
* → fn-collapse-node-recursive
expands the currently selected node recursive
toggle # toggle() ⟹ void
* → fn-toggle
toggles the currently selected node
addSubNode # addSubNode(rawNode \`\` ) ⟹ void
\`\` → fn-add-sub-node
rawNode deleteNode # deleteNode() ⟹ void
* → fn-delete-node
selectNext # selectNext() ⟹ void
* → fn-select-next
select the next visible item
triggerNavigation # triggerNavigation(key \`\` ) ⟹ void
\`\` → fn-trigger-navigation
key focusFirst # focusFirst() ⟹ void
* → fn-focus-first
Focuses the first node in the tree without selecting it.
Use selectFocused to select the focused node.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
focusLast # focusLast() ⟹ void
* → fn-focus-last
Focuses the last node in the tree without selecting it.
Use selectFocused to select the focused node.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
focusNext # focusNext() ⟹ void
* → fn-focus-next
focuses the next visible tree node.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
focus # focus() ⟹ void
* → fn-focus
focuses the tree itself. You can use this in combination with keyboard navigation (furo-navigation-pad)
bindData # bindData(treeNode NavigationNode|Tree ) ⟹ void
NavigationNode|Tree → fn-bind-data
Binds a FieldNode.
Supported types: everything with a tree.Tree or tree.Navigationnode signature.
treeNode Fieldnode focusSelected # focusSelected() ⟹ void
* → fn-focus-selected
Focuses the currently selected tree item.
The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).
Styling # The following custom properties available for styling:
Custom property Description --surface background color default: white fallback: N/A --on-surface foreground color default: #333333 fallback: N/A --tree-indentation-1 tree indention level 1 default: 16px fallback: N/A --tree-indentation-2 tree indention level 2 default: 32px fallback: N/A --tree-indentation-3 tree indention level 3 default: 48px fallback: N/A --tree-indentation-4 tree indention level 4 default: 56px fallback: N/A --tree-indentation-5 tree indention level 5 default: 64px fallback: N/A --tree-indentation-6 tree indention level 6 default: 72px fallback: N/A --tree-indentation-7 tree indention level 7 default: 80px fallback: N/A --tree-indentation-8 tree indention level 8 default: 88px fallback: N/A --tree-indentation-9 tree indention level 9 default: 92px fallback: N/A --tree-indentation-10 tree indention level 10 default: 96px fallback: N/A --tree-indentation-11 tree indention level 11 default: 100px fallback: N/A --tree-indentation-12 tree indention level 12 default: 104px fallback: N/A `}),e.add({id:235,href:"/docs/components/furo-ui5-tree-item/",title:"furo-ui5-tree-item",section:"Components",content:` furo-ui5-tree-item # @furo/ui5 v1.18.0 import '@furo/ui5/src/subcomponents/furo-ui5-tree-item.js'; exports FuroUi5TreeItem js exports &lt;furo-ui5-tree-item&gt; custom-element-definition superclass LitElement mixes FBP
Summary: tree item
Description # furo-tree-item /**
INTERNAL COMPONENT # This is a helper component to send tablerow-selected event by clicking the row or pressing the enter on the row.
Attributes and Properties # hidden # hidden reflects boolean default: true
Description isGroupLabel # is-group-label reflects boolean default: false
indentation # default: 0
_icon # default: 'border'
focused # focused reflects boolean searchmatch # searchmatch reflects boolean inedit # inedit reflects boolean haserror # haserror reflects boolean selected # selected reflects boolean noicon # noicon boolean Methods # search # search(event \`\` ) ⟹ void
\`\` → fn-search
event _updateItem # _updateItem() ⟹ void
* → fn&ndash;update-item
bindData # bindData(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-data
fieldNode __addNodeSelectedListener # __addNodeSelectedListener() ⟹ void
* → fn&mdash;add-node-selected-listener
Styling # The following custom properties available for styling:
Custom property Description --tree-indentation-1 tree indention level 1 default: 16px fallback: N/A --tree-indentation-2 tree indention level 2 default: 32px fallback: N/A --tree-indentation-3 tree indention level 3 default: 48px fallback: N/A --tree-indentation-4 tree indention level 4 default: 56px fallback: N/A --tree-indentation-5 tree indention level 5 default: 64px fallback: N/A --tree-indentation-6 tree indention level 6 default: 72px fallback: N/A --tree-indentation-7 tree indention level 7 default: 80px fallback: N/A --tree-indentation-8 tree indention level 8 default: 88px fallback: N/A --tree-indentation-9 tree indention level 9 default: 92px fallback: N/A --tree-indentation-10 tree indention level 10 default: 96px fallback: N/A --tree-indentation-11 tree indention level 11 default: 100px fallback: N/A --tree-indentation-12 tree indention level 12 default: 104px fallback: N/A `}),e.add({id:236,href:"/docs/components/furo-ui5-typerenderer-labeled/",title:"furo-ui5-typerenderer-labeled",section:"Components",content:` furo-ui5-typerenderer-labeled # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-typerenderer-labeled.js'; exports FuroUi5TyperendererLabeled js exports &lt;furo-ui5-typerenderer-labeled&gt; custom-element-definition superclass LitElement mixes FBP
Summary: labeled input field
Description # furo-ui5-typerenderer-labeled The furo-ui5-typerenderer-labeled is a composition to easily use a display field with label according to the design specification of SAP Fiori Design System.
Example # Attributes and Properties # context # context string default: 'display'
Set the render context. Default is display, the type renderer set of @furo/ui5 supports cell, form, celledit full # full boolean This is only used to forward the state to the form-field-container disabled # disabled reflects Boolean Disabled State Methods # focus # focus(null \`\` ) ⟹ void
\`\` → fn-focus
focus Focuses the field
null bindData # bindData(fieldNode FieldNode ) ⟹ void
FieldNode → fn-bind-data
Binds the fieldNode to the component binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used
fieldNode `}),e.add({id:237,href:"/docs/components/furo-ui5-views/",title:"furo-ui5-views",section:"Components",content:` furo-ui5-views # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-views/furo-ui5-views.js'; exports FuroUi5Views js exports &lt;furo-ui5-views&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Manage views
Description # furo-ui5-views allows you to manage custom views. This includes filter settings and table orders.
Tab orders are not implemented at the moment.
The user settings are stored in the local storage, session data in the session storage. Feel free to extend the furo-ui5-views component to store the settings anywhere else by overriding the saveData method.
furo-ui5-views manages the view data
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 &lt;furo-ui5-views view-id=&#34;vid.list-report&#34; fn-inject-default=&#34;|--defaultData&#34; fn-set-filter-ref=&#34;|--formRef&#34; at-current-view=&#34;--CurrentViewSettingDO&#34; at-raw-filter-data=&#34;--filterData&#34; fn-show-at=&#34;--showViewDialogClicked&#34; &gt;&lt;/furo-ui5-views&gt; &lt;furo-ui5-views-filter-settings fn-show=&#34;--setFilterClicked&#34; fn-bind-settings=&#34;--CurrentViewSettingDO&#34; fn-bind-filter=&#34;--filterDO&#34; &gt;&lt;/furo-ui5-views-filter-settings&gt; &lt;furo-ui5-views-table-settings row-type=&#34;project.Project&#34; fn-show=&#34;--ShowTableSettingsClicked&#34; fn-bind-settings=&#34;--CurrentViewSettingDO&#34; at-fields-changed=&#34;--reqFieldsChanged&#34; at-order-by-changed=&#34;--fieldSortChanged&#34; at-order-changed=&#34;--columnOrderChanged&#34; required-fields=&#34;id&#34; sortable &gt;&lt;/furo-ui5-views-table-settings&gt; &lt;furo-ui5-filtered-table fn-bind-data=&#34;--collectionDao(*.entities)&#34; fn-set-columns=&#34;--columnOrderChanged&#34; mode=&#34;SingleSelect&#34; &gt; ... &lt;/furo-ui5-filtered-table&gt; Inject the default
Specs # You have to import the furo-ui5-specs or add the following muspec to your spec project.
.furo
1 2 dependencies: - &#34;https://github.com/theNorstroem/furo-ui5-specs.git v1.0.0&#34; µSpecs
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 - type: &#39;furo.view.PersonalView #&#39; fields: id: &#39;string:1 #&#39; views: &#39;[] furo.view.ViewSettings:2&#39; - type: &#39;furo.view.ViewSettings #&#39; fields: id: &#39;string:1 #id&#39; name: &#39;string:2 #Textual identifier&#39; is_favorite: &#39;bool:3&#39; is_standard: &#39;bool:4&#39; auto_apply: &#39;bool:5&#39; created_by: &#39;string:6&#39; editable: &#39;bool:7 #&#39; filter_settings: &#39;[] furo.view.FilterItem:8&#39; filter_object: &#39;google.protobuf.Any:9 #Contains the filter Object&#39; table_settings: &#39;[] furo.view.TableColumn:10&#39; order_by: &#39;string:11 # sort order, comma separated list of field names&#39; group_by: &#39;string:11 # group by&#39; - type: &#39;furo.view.FilterItem #Filter object&#39; fields: field_name: &#39;string:1&#39; show: &#39;bool:2 #show hide&#39; - type: &#39;furo.view.TableColumnSortRow #TableColumn &#39; fields: id: &#39;string:1&#39; display_name: &#39;string:2 #&#39; descending: &#39;bool:3 #&#39; options: &#39;[] furo.Optionitem:4&#39; - type: &#39;furo.view.TableColumn #TableColumn &#39; fields: field_name: &#39;string:1&#39; show: &#39;bool:2 #show hide&#39; sortable: &#39;bool:3 # set this to true if the field is sortable&#39; groupable: &#39;bool:4 # set this to true if the field is groupable&#39; label: &#39;string:5 # set this to true if the field is groupable&#39; - type: &#39;furo.view.SaveAsDialog #Filter object&#39; fields: name: &#39;* string:1&#39; is_favorite: &#39;bool:3&#39; is_standard: &#39;bool:4&#39; auto_apply: &#39;bool:5&#39; Describe the filterable fields and sortable table columns.
sample data
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 export const Settings = { &#34;views&#34;: [ { &#34;id&#34;: &#34;default&#34;, &#34;name&#34;: &#34;Standard&#34;, &#34;is_favorite&#34;: true, &#34;is_standard&#34;: true, &#34;auto_apply&#34;: true, &#34;created_by&#34;: &#34;Furo&#34;, &#34;editable&#34;: false, &#34;filter_settings&#34;: [ { &#34;field_name&#34;: &#34;description&#34;, &#34;show&#34;: true }, { &#34;field_name&#34;: &#34;start&#34;, &#34;show&#34;: true }, { &#34;field_name&#34;: &#34;end&#34;, &#34;show&#34;: true }, { &#34;field_name&#34;: &#34;members&#34;, &#34;show&#34;: true } ], &#34;filter_object&#34;: { &#34;description&#34;: null, &#34;start&#34;: null, &#34;end&#34;: null, &#34;members&#34;: null }, &#34;table_settings&#34;: [ { &#34;field_name&#34;: &#34;id&#34;, &#34;show&#34;: false, &#34;sortable&#34; : true }, { &#34;field_name&#34;: &#34;display_name&#34;, &#34;show&#34;: true, &#34;sortable&#34; : true }, { &#34;field_name&#34;: &#34;description&#34;, &#34;show&#34;: true, &#34;sortable&#34; : true }, { &#34;field_name&#34;: &#34;start&#34;, &#34;show&#34;: false }, { &#34;field_name&#34;: &#34;end&#34;, &#34;show&#34;: false }, { &#34;field_name&#34;: &#34;members&#34;, &#34;show&#34;: true, &#34;sortable&#34; : true } ], &#34;order_by&#34;: &#34;&#34;, &#34;group_by&#34;: &#34;&#34; } ] } Example # Attributes and Properties # headerText # header-text string default: 'My Views'
Title of the dialog for &ldquo;views&rdquo; saveAsHeaderText # save-as-header-text string default: 'Save View'
Title of the &ldquo;save as&rdquo; dialog. checkoxSetDefault # checkbox-set-default string default: 'Set as Default'
Checkbox label for set as default on save as dialog. checkoxApplyAutomatically # checkbox-apply-automatically string default: 'Apply Automatically'
Checkbox label for apply automatically on save as dialog. manageButtonText # manage-button-text string default: 'Manage'
Button label to open the manage view dialog. saveButtonText # save-button-text string default: 'Save'
Button label for save. saveAsButtonText # save-as-button-text string default: 'Save As'
Button label for save as. cancelButtonText # cancel-button-text string default: 'Cancel'
Button label for cancel action. manageViewHeaderText # manage-view-header-text string default: 'Manage Views'
Title of the manage-view dialog. placeholderSearch # placeholder-search string default: 'Search'
placeholder for search fields. colheaderDefault # colheader-default string default: 'Default'
Column header for &ldquo;default&rdquo;. colheaderApply # colheader-apply string default: 'Apply Automatically'
Column header for &ldquo;apply automatically&rdquo;. colheaderCreator # colheader-creator string default: 'Created By'
Column header for &ldquo;created by&rdquo;. colheaderView # colheader-view string default: 'View'
Column header for &ldquo;view name&rdquo;. okButtonText # ok-button-text string default: 'Ok'
Button label for &ldquo;Ok&rdquo; action viewId # view-id string This is the id vor the view, this key is used to store the search filters in the session storage. Events # search-triggered # at-search-triggered → Event
Methods # showAt # showAt(ref \`\` ) ⟹ void
\`\` → fn-show-at
show opens the view
ref setFilterRef # setFilterRef(ref \`\` ) ⟹ void
\`\` → fn-set-filter-ref
set the ref to the filter form
ref injectDefault # injectDefault(data \`\` ) ⟹ void
\`\` → fn-inject-default
Inject the default settings. This is a set of predefined filters and columns.
data loadData # loadData() ⟹ string
* → fn-load-data
Loads the stored data. Extend and override, if you need another storage mechanism. The data is stored in local storage under the defined view-id.
saveData # saveData(data \`\` ) ⟹ string
\`\` → fn-save-data
Stores the settings. Extend and override, if you need another storage mechanism. The data is stored in local storage under the defined view-id.
data `}),e.add({id:238,href:"/docs/components/furo-ui5-views-column-header/",title:"furo-ui5-views-column-header",section:"Components",content:` furo-ui5-views-column-header # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-column-header.js'; exports FuroUi5ViewsColumnHeader js exports &lt;furo-ui5-views-column-header&gt; custom-element-definition superclass LitElement mixes FBP
Summary: Shows a sort direction icon
Description # furo-ui5-views-column-header
Displays a sort direction icon in the table header.
1 2 3 4 5 6 7 &lt;ui5-table-column slot=&#34;columns&#34; field=&#34;*.nr&#34; id=&#34;nr&#34; popin-text=&#34;\${i18n.t(&#39;activity_nr&#39;)}&#34; &gt;&lt;furo-ui5-views-column-header&gt;&lt;span&gt;\${i18n.t(&#39;activity_nr&#39;)}&lt;/span&gt;&lt;/furo-ui5-views-column-header&gt; &lt;/ui5-table-column&gt; Attributes and Properties # _icon # _icon string default: 'sort-ascending'
_hidesort # _hidesort boolean Description Methods # _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
showSort # showSort(descending \`\` ) ⟹ void
\`\` → fn-show-sort
set the sort indicator
descending clear # clear() ⟹ void
* → fn-clear
remove the sorting
`}),e.add({id:239,href:"/docs/components/furo-ui5-views-filter-settings/",title:"furo-ui5-views-filter-settings",section:"Components",content:` furo-ui5-views-filter-settings # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-filter-settings.js'; exports FuroUi5ViewsFilterSettings js exports &lt;furo-ui5-views-filter-settings&gt; custom-element-definition superclass LitElement mixes FBP
Summary: filter dialog
Description # furo-ui5-views-filter-settings contains the dialog for the filter settings for a furo-ui5-views.
Example # Attributes and Properties # colheaderField # colheader-field string default: 'Field'
Title for the field column. colheaderPosition # colheader-position string default: 'Position'
Title for the position column. colheaderValue # colheader-value string default: 'Value'
Title for the value column. placeholderSearch # placeholder-search string default: 'Search'
Placeholder text for the searcher. headerText # filtersettings-header-text string default: 'Adapt Filter'
Title for the dialog. Methods # bindFilter # bindFilter(fieldnode \`\` ) ⟹ void
\`\` → fn-bind-filter
Bind the filter DO.
fieldnode bindSettings # bindSettings(fieldnode \`\` ) ⟹ void
\`\` → fn-bind-settings
Bind the settings DO from furo-ui5-views.
fieldnode show # show() ⟹ void
* → fn-show
Opens the filter dialog.
_FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:240,href:"/docs/components/furo-ui5-views-table-settings/",title:"furo-ui5-views-table-settings",section:"Components",content:` furo-ui5-views-table-settings # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-table-settings.js'; exports FuroUi5ViewsTableSettings js exports &lt;furo-ui5-views-table-settings&gt; custom-element-definition superclass LitElement mixes FBP
Summary: table settings dialog
Description # furo-ui5-views-table-settings contains the dialog for the table settings for a furo-ui5-views.
Example # Attributes and Properties # headerText # tablesettings-header-text string default: 'View Settings'
Title of the dialog. tabColumnsLabel # tab-columns-label string default: 'Columns'
Label for the column tab. tabSortLabel # tab-sort-label string default: 'Sort'
Label for the sorter tab. okButtonText # ok-button-text string default: 'Ok'
Label for the OK button. cancelButtonText # cancel-button-text string default: 'Cancel'
Label for the cancel button. colheaderField # colheader-field string default: 'Field'
Titel for the field column. colheaderPosition # colheader-position string default: 'Position'
Titel for the Position column. labelEmptySelect # label-empty-select string default: 'Sort By'
Text for the &ldquo;pleace select&rdquo; dropdown entry. placeholderSearch # placeholder-search string default: 'Search'
Placeholder for the searcher field. rowType # row-type string Define the type for a row requiredFields # required-fields string Define fields that are required for your business logic. Required fields are always requested from the server even when they are not displayed. sortable # sortable boolean Set this to true to enable the sorting view in the dialog. Methods # show # show() ⟹ void
* → fn-show
show
bindSettings # bindSettings(e \`\` ) ⟹ void
\`\` → fn-bind-settings
Bind the settings component from furo-ui5-views.
e complete event _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:241,href:"/docs/components/furo-ui5-z-grid/",title:"furo-ui5-z-grid",section:"Components",content:` furo-ui5-z-grid # @furo/ui5 v1.18.0 import '@furo/ui5/src/furo-ui5-z-grid.js'; exports FuroUi5ZGrid js exports &lt;furo-ui5-z-grid&gt; custom-element-definition superclass LitElement mixes FBP
Summary: grid with a z pattern
Description # z-grid is a grid which places your elements in a z pattern. It creates a grid which can be imagined as a grid with cells of the size 8rem x 8rem.~
The size on the x-axis can vary a little bit, according to the the available space.
This component is nestable.
1 2 3 4 5 6 7 8 9 10 11 &lt;furo-z-grid&gt; &lt;your-component hspace=&#34;2&#34; vspace=&#34;4&#34;&gt;&lt;/your-component&gt; &lt;your-component hspace=&#34;2&#34; vspace=&#34;2&#34;&gt;&lt;/your-component&gt; &lt;/furo-z-grid&gt; &lt;!-- with automatic padding --&gt; &lt;furo-z-grid padding&gt; &lt;your-component hspan=&#34;2&#34; vspan=&#34;4&#34;&gt;&lt;/your-component&gt; &lt;your-component hspan=&#34;2&#34; vspan=&#34;2&#34;&gt;&lt;/your-component&gt; &lt;/furo-z-grid&gt; sizes # The sizes are calculated from the available space that the grid becomes from its parent.
Sizes are calculated as following # | small | medium | large | xlarge | | | | | | | 0...599 | 600...1023 | 1024...1439 | 1440...nnnn | hspan # Set the horizontal space (the width) with the hspan attribute.
Available ranges are from 1 to 9 and full.
To tell a element that it has to use the full width use hspan=&quot;full&quot; or use the alias full or full-width.
hspan=&quot;1&quot;, hspan=&quot;2&quot;,&hellip;,hspan=&quot;9&quot;, hspan=&quot;full&quot;
vspan # Set the vertical space (the height) with the vspan attribute.
Available ranges are from 1 to 9.
vspan=&quot;1&quot;, vspan=&quot;2&quot;,&hellip;,vspan=&quot;9&quot;
newline # To force a placement on a new line use newline
padding # Set the attribute padding to add paddings according to the size of the furo-z-grid automatically.
:host([size=&lsquo;size-s&rsquo;]) ==&gt; 0.25rem 1rem;
:host([size=&lsquo;size-m&rsquo;] ==&gt; 0.25rem 2rem;
:host([size=&lsquo;size-l&rsquo;] ==&gt; 1rem 2rem;
:host([size=&lsquo;size-xl&rsquo;] ==&gt; 1rem 3rem;
full-on-[size] # To set full width on a specific current size, use full-on-size-small , full-on-size-medium , full-on-size-large ,full-on-size-xlarge.
When the available space has the given size, the default hspan are overridden and the full width is used.
hide-on-[size] # To hide a element on a specific current size, use hide-on-size-small , hide-on-size-medium , hide-on-size-large ,hide-on-size-xlarge.
show-on-[size] # To show a element only on a specific current size, use show-on-size-small , show-on-size-medium , show-on-size-large ,show-on-size-xlarge.
custom span sizes on different sizes (hspan-on-[size]) # To set a specific width (hspan) on a specific current size, use hspan-on-size-small=&quot;1...9&quot; , hspan-on-size-medium=&quot;1...9&quot; , hspan-on-size-large=&quot;1...9&quot; , hspan-on-size-xlarge=&quot;1...9&quot; .
Ohter attributes # The attributes full and full-width are aliases for hspan=&quot;full&quot;.
Named lines and columns # last-col refers to the last column. last-row refers to the last line/row.
Sample # Switch the demo to fullscreen and resize your screen to see the effect.
Look at furo-ui5-flexible-grid for more examples.
1x2 1x1 2x2 2x1 full width, no height given 1 2 3 4 5 6 7 8 9 &lt;furo-ui5-z-grid&gt; &lt;div vspan=&#34;2&#34; hspan=&#34;1&#34; style=&#34;background: whitesmoke;&#34;&gt;1x2&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;1&#34; style=&#34;background: pink;&#34;&gt;1x1&lt;/div&gt; &lt;div vspan=&#34;2&#34; hspan=&#34;2&#34; style=&#34;background: papayawhip;&#34;&gt;2x2&lt;/div&gt; &lt;div vspan=&#34;1&#34; hspan=&#34;2&#34; style=&#34;background: lightblue;&#34;&gt;2x1&lt;/div&gt; &lt;div hspan=&#34;full&#34; style=&#34;background: papayawhip;&#34;&gt; full width, no height given &lt;/div&gt; &lt;/furo-ui5-z-grid&gt; Attributes and Properties # Methods # Slots # default # Type: HTMLElement [0..n]
default slot to add content. Styling # The following custom properties available for styling:
Custom property Description --furo-ui5-cardContentHeight card content height with vspan=1, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 4rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=2, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 8rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=3, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 12rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=4, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 16rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=5, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 20rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=6, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 24rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=7, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 28rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=8, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 32rem fallback: N/A --furo-ui5-cardContentHeight card content height with vspan=9, &ndash;furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight default: 36rem fallback: N/A `}),e.add({id:242,href:"/docs/typerenderer/line-launchpad-launchtile/",title:"line-launchpad-launchtile",section:"Typerenderer",content:` line-launchpad-launchtile # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/line-launchpad-launchtile.js'; exports LineLaunchpadLaunchtile js exports &lt;line-launchpad-launchtile&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter mixes FBP
Summary: todo shortdescription
Description # line-launchpad-launchtile todo Describe your element
Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(val \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
val _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:243,href:"/docs/typerenderer/line-launchpad-monitortile/",title:"line-launchpad-monitortile",section:"Typerenderer",content:` line-launchpad-monitortile # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/line-launchpad-monitortile.js'; exports LineLaunchpadMonitortile js exports &lt;line-launchpad-monitortile&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter mixes FBP
Summary: todo shortdescription
Description # line-launchpad-monitortile todo Describe your element
Attributes and Properties # Methods # bindData # bindData(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-data
fieldNode onFnaFieldValueChanged # onFnaFieldValueChanged(val \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
val _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
`}),e.add({id:244,href:"/docs/typerenderer/tile-launchpad-launchtile/",title:"tile-launchpad-launchtile",section:"Typerenderer",content:` tile-launchpad-launchtile # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/tile-launchpad-launchtile.js'; exports TileLaunchpadLaunchtile js exports &lt;tile-launchpad-launchtile&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter mixes FBP
Summary: todo shortdescription
Description # tile-launchpad-launchtile todo Describe your element
Attributes and Properties # Methods # onFnaFieldValueChanged # onFnaFieldValueChanged(val \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
val _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
focus # focus() ⟹ void
* → fn-focus
focus focuses the table
`}),e.add({id:245,href:"/docs/typerenderer/tile-launchpad-monitortile/",title:"tile-launchpad-monitortile",section:"Typerenderer",content:` tile-launchpad-monitortile # @furo/ui5 v1.18.0 import '@furo/ui5/src/typerenderer/tile-launchpad-monitortile.js'; exports TileLaunchpadMonitortile js exports &lt;tile-launchpad-monitortile&gt; custom-element-definition superclass LitElement mixes FieldNodeAdapter mixes FBP
Summary: todo shortdescription
Description # tile-launchpad-monitortile todo Describe your element
Attributes and Properties # Methods # bindData # bindData(fieldNode \`\` ) ⟹ void
\`\` → fn-bind-data
fieldNode onFnaFieldValueChanged # onFnaFieldValueChanged(val \`\` ) ⟹ void
\`\` → fn-on-fna-field-value-changed
val _FBPReady # _FBPReady() ⟹ void
* → fn&ndash;fbp-ready
flow is ready lifecycle method
focus # focus() ⟹ void
* → fn-focus
focus focuses the table
`}),e.add({id:246,href:"/docs/components/ui5-reference-search-item/",title:"ui5-reference-search-item",section:"Components",content:` ui5-reference-search-item # @furo/ui5 v1.18.0 import '@furo/ui5/src/ui5-reference-search-item.js'; exports Ui5ReferenceSearchItem js exports &lt;ui5-reference-search-item&gt; custom-element-definition extends src/ui5-reference-search-item.js
Summary: representation of a result item
Description # reference-search-item Repeated item to display the search result set
Attributes and Properties # _item # default: {}
displayField # default: 'display_name'
Events # item-selected # at-item-selected → item
Fired when item is selected Methods # injectItem # injectItem(item \`\` ) ⟹ void
\`\` → fn-inject-item
Inject of the item data of inner text of the element is defined with the attribute display-field (default value: display_name)
item deselect # deselect() ⟹ void
* → fn-deselect
preselect # preselect() ⟹ void
* → fn-preselect
select # select() ⟹ void
* → fn-select
`}),e.add({id:247,href:"/docs/components/",title:"Components",section:"Docs",content:` @furo/ui5 # @furo/ui5 v1.18.0 SAP UI5 Web Components data bindings for furo-web
What is inside # Components # furo-ui5-barcode-scanner-dialog data barcode scanner dialog furo-ui5-bool-icon Displays a icon for a boolean value furo-ui5-busy-indicator ui5 busy indicator with methods furo-ui5-button ui5 button with methods furo-ui5-card Ui5 card with data bindings furo-ui5-chart-display Display charts with data objects furo-ui5-chart connect data to a chart furo-ui5-checkbox-input-labeled labeled input field furo-ui5-checkbox-input data checkbox input field furo-ui5-combobox-labeled labeled combobox furo-ui5-combobox data combobox field furo-ui5-context-menu-display context menu furo-ui5-context-menu Context menu furo-ui5-date-picker-labeled labeled input field furo-ui5-date-picker bindable datepicker field furo-ui5-date-time-picker-labeled labeled input field furo-ui5-date-time-picker furo data datetime picker field furo-ui5-dialog-display Display element for furo-ui5-dialog furo-ui5-dialog Dialog element furo-ui5-dynamic-header Dynamic Header furo-ui5-flexible-grid a grid splitter furo-ui5-form-field-container responsive labels for your input elements furo-ui5-header-panel A bindable header panel furo-ui5-markdown renders markdown data furo-ui5-message-container-display todo shortdescription furo-ui5-message-strip-display furo ui5 message strip furo-ui5-message-strip furo ui5 message strip furo-ui5-money-input-labeled labeled input field furo-ui5-money-input Binds a entityObject field google.type.Money to a number-input and currency dropdown fields furo-ui5-multi-combobox-labeled labeled multi-combobox furo-ui5-multi-combobox data select field furo-ui5-multi-input-labeled labeled textarea field furo-ui5-multi-input repeated strings furo-ui5-notification-group-display ui5 notification group display furo-ui5-notification-list-display ui5 notification list furo-ui5-notification trigger component for notifications furo-ui5-number-input-labeled labeled input field furo-ui5-number-input data number input field furo-ui5-pagination-bar Pagination Bar furo-ui5-password-input-labeled labeled input field furo-ui5-password-input data password input field furo-ui5-progress-indicator repeated strings furo-ui5-property ????? bind types of type any furo-ui5-typerenderer-labeled furo-ui5-radio-button boolean toggle button furo-ui5-rating-indicator data rating input field furo-ui5-reference-search labeled input field furo-ui5-reference-search furo ui5 data reference search furo-ui5-relative-time-badge bindable relative time badge furo-ui5-section furo-ui5-segmented-button segmented button furo-ui5-select-labeled labeled select furo-ui5-select data select field furo-ui5-show-hide Animated content hider furo-ui5-sign-pad draw or sign furo-ui5-step-input-labeled labeled input field furo-ui5-step-input data step input field furo-ui5-subsection furo-ui5-table Display repeated fields in a table furo-ui5-text-input-labeled labeled input field furo-ui5-text-input data text input field furo-ui5-textarea-input-labeled labeled textarea field furo-ui5-textarea-input data textarea input field furo-ui5-time-picker-labeled labeled input field furo-ui5-time-picker furo data time picker field furo-ui5-toast-display Display element for furo-ui5-toast furo-ui5-toast Toast element furo-ui5-toggle-button boolean toggle button furo-ui5-tree tree navigation menu furo-ui5-typerenderer-labeled labeled input field furo-ui5-z-grid grid with a z pattern ui5-reference-search-item representation of a result item furo-ui5-filtered-table table with flexible columns furo-ui5-views-column-header Shows a sort direction icon furo-ui5-views-filter-settings filter dialog furo-ui5-views-table-settings table settings dialog furo-ui5-views Manage views furo-ui5-launchpad-navigation Spaces navigation tabs furo-ui5-launchpad-page-renderer tile renderer furo-ui5-launchpad-section-renderer section renderer for a tile page furo-ui5-launchpad-tile-grid tile layout component furo-ui5-context-menu-item context menu item furo-ui5-context-submenu helper furo-ui5-message-container-item todo shortdescription furo-ui5-table-row furo-ui5-tree-item tree item `}),e.add({id:248,href:"/docs/components/DirectiveNl2br/",title:"DirectiveNl2br",section:"Components",content:` DirectiveNl2br # @furo/components v1.18.0 import '@furo/components/src/src/directives/nl2br.js'; exports DirectiveNl2br js exports nl2br js superclass Directive
Attributes and Properties # Methods # `}),e.add({id:249,href:"/docs/components/Events/",title:"Events",section:"Components",content:` Events # @furo/components v1.18.0 import '@furo/components/src/src/lib/Events.js'; exports Events js
Attributes and Properties # Methods # buildChangeEvent # buildChangeEvent(detail \`\` ) ⟹ Event
Creates an universal furo-value-changed event All extended ui5 components should use this builder function to create the change event
detail `}),e.add({id:250,href:"/docs/components/MediaSize/",title:"MediaSize",section:"Components",content:` MediaSize # @furo/components v1.18.0 import '@furo/components/src/src/lib/MediaSize.js'; exports MediaSize js
MediaSize resolver # Returns the media size from S to XXL according to the screen width.
Use this to set style vars according to the current media size.
Usage # Apply the media-size attribute to your main-stage or component.
1 2 3 4 5 6 window.addEventListener(&#39;resize&#39;, MediaSize.DebounceBuilder(() =&gt; { this.setAttribute(&#34;media-size&#34;, MediaSize.GetMediaSize()) }, MediaSize.HANDLE_RESIZE_DEBOUNCE_RATE) ); // initial size this.setAttribute(&#34;media-size&#34;, MediaSize.GetMediaSize()) Set media-size related values for your variables.
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 :host([media-size=&#39;XXL&#39;]) { --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem; --FuroUi5MediaSizeIndentationTop: 2rem; --FuroUi5MediaSizeIndentationRight: 3rem; --FuroUi5MediaSizeIndentationBottom: 1; --FuroUi5MediaSizeIndentationLeft: 3rem; } :host([media-size=&#39;XL&#39;]) { --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem; --FuroUi5MediaSizeIndentationTop: 2rem; --FuroUi5MediaSizeIndentationRight: 3rem; --FuroUi5MediaSizeIndentationBottom: 1; --FuroUi5MediaSizeIndentationLeft: 3rem; } :host([media-size=&#39;L&#39;]) { --FuroUi5MediaSizeIndentation: 1rem 2rem 0 2rem; --FuroUi5MediaSizeIndentationTop: 1rem; --FuroUi5MediaSizeIndentationRight: 2rem; --FuroUi5MediaSizeIndentationBottom: 0; --FuroUi5MediaSizeIndentationLeft: 2rem; } :host([media-size=&#39;M&#39;]) { --FuroUi5MediaSizeIndentation: 0.625rem 2rem 0 2rem; --FuroUi5MediaSizeIndentationTop: 0.625rem; --FuroUi5MediaSizeIndentationRight: 2rem; --FuroUi5MediaSizeIndentationBottom: 0; --FuroUi5MediaSizeIndentationLeft: 2rem; } :host([media-size=&#39;S&#39;]) { --FuroUi5MediaSizeIndentation: 0.625rem 1rem 0 1rem; --FuroUi5MediaSizeIndentationTop: 0.625rem; --FuroUi5MediaSizeIndentationRight: 1rem; --FuroUi5MediaSizeIndentationBottom: 0; --FuroUi5MediaSizeIndentationLeft: 1rem; } Attributes and Properties # HANDLE_RESIZE_DEBOUNCE_RATE # Default debounce rate for resize updates. BREAKPOINTS # BREAKPOINTS_MAP # Methods # GetMediaSize # GetMediaSize() ⟹ String
Returns the media size.
Sizes: S,M,L,XL,XXl
DebounceBuilder # DebounceBuilder(func *delay* ) ⟹ (function(...[*]): void)|*
Generates a debounced function.
func delay `}),e.add({id:251,href:"/docs/components/nl2br/",title:"nl2br",section:"Components",content:` nl2br # @furo/components v1.16.2 import '@furo/components/src/src/directives/nl2br.js'; exports nl2br js
Attributes and Properties # Methods # `}),e.add({id:252,href:"/docs/typerenderer/",title:"Typerenderer",section:"Docs",content:` @furo/ui5 # @furo/ui5 v1.18.0 SAP UI5 Web Components data bindings for furo-web
What is inside # Components # cell-bool cell display renderer for bool cell-double cell display renderer for double cell cell display renderer for float cell-furo-bigdecimal cell display renderer for type furo.BigDecimal cell-furo-fat-bool cell display renderer for furo.fat.Bool cell-furo-fat-double cell display renderer for furo.fat.Double cell-furo-fat-float cell display renderer for furo.fat.Float cell-furo-fat-int32 cell display renderer for furo.fat.Int32 cell-furo-fat-int64 cell display renderer for furo.fat.Int64 cell-furo-fat-string cell display renderer for furo.fat.String cell-furo-fat-uint32 cell display renderer for furo.fat.Uint32 cell-furo-fat-uint64 cell display renderer for furo.fat.Uint64 cell-furo-integerproperty cell display renderer for furo.Integerproperty cell-furo-link cell display renderer for furo.Link cell-furo-numberproperty cell display renderer for furo.Numberproperty cell-furo-property-repeated cell display renderer for [] furo.Property cell-furo-property cell display renderer for furo.Property cell-furo-reference cell display renderer for furo.Reference cell-furo-stringoptionproperty cell display renderer for furo.Stringoptionproperty cell-furo-stringproperty cell display renderer for furo.Stringproperty cell-furo-type-date cell display renderer for furo.type.Date cell-furo-type-money cell display renderer for furo.type.Money cell-google-protobuf-any cell display renderer for google.protobuf.Any cell-google-protobuf-boolvalue cell display renderer for google.protobuf.BoolValue cell-google-protobuf-doublevalue cell display renderer for google.protobuf.DoubleValue cell-google-protobuf- cell display renderer for google.protobuf. cell-google-protobuf-int32value cell display renderer for google.protobuf.Int32Value cell-google-protobuf-int64value cell display renderer for google.protobuf.Int64Value cell-google-protobuf-stringvalue cell display renderer for google.protobuf.StringValue cell-google-protobuf-timestamp cell display renderer for google.protobuf.Timestamp cell-google-protobuf-uint32value cell display renderer for google.protobuf.Uint32Value cell-google-protobuf-uint64value cell display renderer for google.protobuf.Uint64Value cell-google-type-color cell display renderer for google.type.Color cell-google-type-date cell display renderer for google.type.Date cell-google-type-money cell display renderer for google.type.Money cell-google-type-timeofday cell display renderer for google.type.TimeOfDay cell-int32 cell display renderer for int32 cell-int64 cell display renderer for int64 cell-string cell display renderer for string cell-uint32 cell display renderer for uint32 cell-uint64 cell display renderer for uint64 celledit-bool celledit renderer for bool celledit-double celledit renderer for double celledit-float celledit renderer for float celledit-furo-bigdecimal celledit renderer for type furo.BigDecimal celledit-furo-fat-bool celledit renderer for bool celledit-furo-fat-double celledit renderer for furo.fat.Double celledit-furo-fat-float celledit renderer for furo.fat.Float celledit-furo-fat-int32 celledit renderer for furo.fat.Int32 celledit-furo-fat-int64 celledit renderer for furo.fat.Int64 celledit-furo-fat-string celledit renderer for furo.fat.String celledit-furo-fat-uint32 celledit renderer for furo.fat.Uint32 celledit-furo-fat-uint64 celledit renderer for furo.fat.Uint64 celledit-furo-integerproperty celledit renderer for furo.Integerproperty celledit-furo-link celledit renderer for furo.Link celledit-furo-inumberproperty celledit renderer for furo.INumberproperty celledit-furo-property-repeated celledit renderer for [] furo.Property celledit-furo-property celledit renderer for furo.Property celledit-furo-reference celledit renderer for furo.Reference celledit-furo-stringoptionproperty celledit renderer for furo.Stringoptionproperty celledit-furo-stringproperty celledit renderer for furo.Stringproperty celledit-furo-type-date celledit renderer for furo.type.Date celledit-furo-type-money celledit renderer for furo.type.Money celledit-google-protobuf-any celledit renderer for google.protobuf.Any celledit-google-protobuf-boolvalue celledit renderer for google.protobuf.BoolValue celledit-google-protobuf-doublevalue celledit renderer for google.protobuf.Double celledit-google-protobuf-floatvalue celledit renderer for google.protobuf.FloatValue celledit-google-protobuf-int32value celledit renderer for google.protobuf.Int32value celledit-google-protobuf-int64value celledit renderer for google.protobuf.Int64Value celledit-google-protobuf-stringvalue celledit renderer for google.protobuf.StringValue celledit-google-protobuf-timestamp celledit renderer for google.protobuf.Timestamp celledit-google-protobuf-uint32value celledit renderer for google.protobuf.Uint32value celledit-google-protobuf-uint64value celledit renderer for google.protobuf.Uint64value celledit-google-type-date celledit renderer for google.type.Date celledit-google-type-money celledit renderer for google.type.Money celledit-google-type-timeofday celledit renderer for google.type.TimeOfDay celledit-int32 celledit renderer for int32 celledit-int64 celledit renderer for int64 celledit-string celledit renderer for string celledit-uint32 celledit renderer for uint32 celledit-uint64 celledit renderer for uint64 display-bool display renderer for bool display-double display renderer for double display-float display renderer for float display-furo-bigdecimal display renderer for furo.BigDecimal display-furo-fat-bool display renderer for furo.fat.Bool display-furo-fat-double display renderer for furo.fat.Double display-furo-fat-float display renderer for furo.fat.Float display-furo-fat-int32 display renderer for furo.fat.Int32 display-furo-fat-int64 display renderer for furo.fat.Int64 display-furo-fat-string display renderer for furo.fat.String display-furo-fat-Uint32 display renderer for furo.fat.Uint32 display-furo-fat-uint64 display renderer for furo.fat.Uint64 display-furo- display renderer for furo. display-furo-link display renderer for furo.Link display-furo-numberproperty display renderer for furo.Numberproperty display-furo-property-repeated display renderer for [] furo.Property display-furo-property-labeled display renderer for [] furo.Property with labels display-furo-property display renderer for furo.Property display-furo-reference display renderer for furo.Reference display-furo-stringoptionproperty display renderer for furo.Stringoptionproperty display-furo-stringproperty display renderer for furo.Stringproperty display-furo-type-date display renderer for furo.type.Date display-furo-type-money display renderer for furo.type.Money display-google-protobuf- display renderer for google.protobuf. display-google-protobuf-boolvalue display renderer for google.protobuf.BoolValue display-google-protobuf-doublevalue display renderer for google.protobuf.DoubleValue display-google-protobuf-floatvalue display renderer for google.protobuf.FloatValue display-google-protobuf-int32Value display renderer for google.protobuf.Int32Value display-google-protobuf-int64Value display renderer for google.protobuf.Int64Value display-google-protobuf-stringvalue display renderer for google.protobuf.StringValue display-google-protobuf-timestamp display renderer for google.protobuf.Timestamp display-google-protobuf-uint32value display renderer for google.protobuf.Uint32Value display-google-protobuf-uint64value display renderer for google.protobuf.Uint64Value display-google-type-color display renderer for google.type.Color display-google-type-date display renderer for google.type.Date display-google-type-datetime display-google-type-money display renderer for google.type.Money display-google-type-timeofday display renderer for google.type.TimeOfDay display-int32 display renderer for int32 display-int64 display renderer for int64 display-string display renderer for string display-uint32 display renderer for uint32 display-uint64 display renderer for uint64 form-bool form renderer for bool form-double form renderer for double form-float form renderer for float form-furo-bigdecimal form renderer for type furo.BigDecimal form-furo-fat-bool form renderer for furo.fat.Bool form-furo-fat-double form renderer for furo.fat.Double form-furo-fat-float form renderer for furo.fat.Float form-furo-fat-int32 form renderer for furo.fat.Int32 form-furo-fat-int64 form renderer for furo.fat.Int64 form-furo-fat-string form renderer for furo.fat.String form-furo-fat-uint32 form renderer for furo.fat.Uint32 form-furo-fat-uint64 form renderer for furo.fat.Uint64 form-furo-integerproperty form renderer for furo.Integerproperty form-furo-integerproperty form renderer for furo.Integerproperty form-furo-reference form renderer for furo.Reference form-furo-stringoptionproperty form renderer for furo.Stringoptionproperty form-furo-stringproperty form renderer for furo.Stringproperty form-furo-type-date form renderer for furo.type.Date form-furo-type-money form renderer for furo.type.Money form-google-protobuf-boolvalue form renderer for google.protobuf.BoolValue form-google-protobuf-doublevalue form renderer for google.protobuf.Double form-google-protobuf-floatvalue form renderer for google.protobuf.FloatValue form-google-protobuf-int32value form renderer for google.protobuf.Int32Value form-google-protobuf-int64value form renderer for google.protobuf.Int64Value form-google-protobuf-stringValue form renderer for google.protobuf.StringValue form-google-protobuf-timestamp form renderer for google.protobuf.Timestamp form-google-type-date form renderer for google.type.Date form-google-type-money form renderer for google.type.Money form-google-type-timeofday form renderer for google.type.TimeOfDay form-int32 form renderer for int32 form-int64 form renderer for int64 form-string form renderer for string form-uint32 form renderer for uint32 form-uint64 form renderer for uint64 line-launchpad-launchtile todo shortdescription line-launchpad-monitortile todo shortdescription tile-launchpad-launchtile todo shortdescription tile-launchpad-monitortile todo shortdescription `}),e.add({id:253,href:"/docs/components/Ui5LabelDataBinding/",title:"Ui5LabelDataBinding",section:"Components",content:` Ui5LabelDataBinding # @furo/components v1.18.0 import '@furo/components/src/src/lib/Ui5LabelDataBinding.js'; exports Ui5LabelDataBinding js
Helper class for binding ui5 labeled elements
Attributes and Properties # Methods # bindData # bindData(element \`\` fieldNode FieldNode ) ⟹ void
bind data for labeled element
element fieldNode isFatType # isFatType(field \`\` ) ⟹ boolean
check whether it is a fat type
field `})})()
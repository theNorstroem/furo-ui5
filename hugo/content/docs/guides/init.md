---
weight: 200
title: "Init"
---


### Environment
``` js
// -- initialize application env, theme, api and icons

import {Init, i18n, Env, Iconset} from "@furo/framework/src/furo.js"
import {Theme} from "@furo/framework/src/theme.js"
import {Services, Types} from "@furo/spec-restapi/api/src/api_spec.js

//Attention: Styling is defined in main-stage
import {Themeset} from "./my_fancy_theme"
import {Translations} from "./translations";

// import custom demo svg icons which are defined in demo-icons.js
import {DemoIcons} from "./demo-icons";

Theme.registerThemeset(Themeset);
Init.registerApiServices(Services);
Init.registerApiTypes(Types);
i18n.registerResBundle(Translations);
Iconset.registerIconset("demo", DemoIcons);

```

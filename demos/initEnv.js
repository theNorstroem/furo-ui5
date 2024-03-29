import { Init } from '@furo/framework/src/furo.js';

import { Services, Types } from '../furo-specs/dist/env.js';
import '@furo/data/src/furo-data-object.js';
import '../src/typerenderer/registry.js';

Init.registerApiServices(Services);
Init.registerApiTypes(Types);

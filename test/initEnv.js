import { Init, i18n } from '@furo/framework/src/furo.js';
import { Translations } from './translations.js';
import { Services, Types } from '../furo-specs/dist/env.js';
import '@furo/data/src/furo-data-object.js';

Init.registerApiServices(Services);
Init.registerApiTypes(Types);
i18n.registerResBundle(Translations);

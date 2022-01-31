import { Init, i18n,  Env } from "https://cdn.jsdelivr.net/npm/@furo/precompiled@2.0.0-rc.18/dist/framework.js";


import {Types,Services} from "./data_environment.js";

/**
 * Register resource bundle i18n
 */
import { Translations } from './translations.js';
i18n.registerResBundle(Translations);

/**
 * Register the types and services which was generated by furo
 */
Init.registerApiTypes(Types);
Init.registerApiServices(Services);


/**
 * register the API prefix based on the APPROOT.
 * This information is used for furo-deep-link and furo-reverse-deep-link to resolve the api address.
 *
 * We use /api here, because we do not have a dedicated host like api.xxx.com for the api services
 * @type {string}
 */
Env.api.prefix = `../../../`;
Init.applyCustomApiPrefixToServicesAndTypes(Env.api.prefix);


/**
 * Translate static messages in SPEC
 */
let locale = 'en';
if (i18n.resbundle[Env.locale.toLowerCase().replace('-', '_')]) {
  locale = Env.locale.toLowerCase().replace('-', '_');
}
Init.translateStaticTypeMessages(locale);



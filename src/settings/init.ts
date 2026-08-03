import { type Ui5Config, buildUi5Config } from "./buildUi5Config";
import { loadCalendarAssets } from "./calendarAssets";

/**
 * Applies the persisted furo settings to UI5's page configuration.
 *
 * ⚠️ **Import this before anything else.** UI5 parses its `data-ui5-config` tag on the first read of
 * any configuration value and caches the result for the life of the page, so a tag added after that
 * is ignored. Make it the first import of the application entry point, above every `@furo/ui5` and
 * `@ui5/webcomponents` import:
 *
 * ```ts
 * import "@furo/ui5/settings/init";
 *
 * import "@furo/ui5/Assets";
 * // …the rest of the app
 * ```
 *
 * Importing it applies the configuration; nothing has to be called. {@link initUi5Config} is
 * exported for tests and for apps that build their own bootstrap.
 *
 * The module deliberately reaches no UI5 configuration API — only the inert `CalendarType` enum, via
 * the modules it imports — so importing it cannot trigger the very parse it prepares for.
 */

/**
 * Writes a `data-ui5-config` script tag into `document.head`.
 *
 * Does nothing when the page already carries one, so an application shipping its own configuration
 * keeps it.
 *
 * @param config - the configuration to write; defaults to the persisted settings.
 * @returns the tag that was added, or `undefined` when one was already present.
 */
export const initUi5Config = (config: Ui5Config = buildUi5Config()): HTMLScriptElement | undefined => {
  if (document.querySelector("script[data-ui5-config]")) {
    return undefined;
  }

  const tag = document.createElement("script");
  tag.setAttribute("data-ui5-config", "");
  tag.type = "application/json";
  tag.textContent = JSON.stringify(config, undefined, 2);
  document.head.appendChild(tag);

  return tag;
};

const config = buildUi5Config();

initUi5Config(config);

// Not awaited: the data only has to be there by the time a date component renders, and blocking
// here would stall every import below this one.
void loadCalendarAssets(config.calendarType, config.secondaryCalendarType);

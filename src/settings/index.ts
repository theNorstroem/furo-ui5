/**
 * Barrel for the app-level settings shipped under `@furo/ui5/settings`.
 *
 * These configure how furo components present data — as opposed to `@furo/ui5/types`, which spells
 * property *values*. Settings are process-wide: an app sets them once at startup, and components
 * read them at format/render time.
 *
 * Exported as a barrel only, for the same reason as `./models` and `./types`: a `./settings/*`
 * wildcard would freeze every filename as public API, and would additionally advertise the
 * co-located `*.spec` files, which are excluded from the published tarball.
 */
export { getLocale, setLocale } from "./locale";

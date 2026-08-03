import { getLocale } from "@/settings/locale";

export interface RelativeTimeParts {
  /** Relative time text, e.g. "in 5 days" / "5 days ago". */
  text: string;
  /** Absolute timestamp suitable for a tooltip, e.g. "2026-05-30, 14:30:45". */
  tooltip: string;
  /** True when the instant is now or in the future (drives the badge's color scheme). */
  isFuture: boolean;
}

/**
 * Formats an ISO 8601 datetime as relative time (day granularity) using `Intl`, in the locale
 * reported by {@link getLocale} — the language configured on UI5, or an explicit `setLocale()`.
 *
 * Shared by `furo-ui5-relative-time-badge` and `furo-ui5-relative-time-display`. Pure: no DOM or
 * component access.
 *
 * @param isoValue - canonical ISO 8601 string (e.g. "2026-05-30T12:00:00.000Z"); empty or
 *                   unparseable values yield `null`.
 * @param options - `style` ("long" | "short" | "narrow", default "long") and `numeric`
 *                   ("always" | "auto", default "auto") forwarded to `Intl.RelativeTimeFormat`.
 * @returns the formatted parts, or `null` when there is nothing to display.
 */
export const formatRelativeTime = (
  isoValue: string,
  options?: { style?: Intl.RelativeTimeFormatStyle; numeric?: Intl.RelativeTimeFormatNumeric }
): RelativeTimeParts | null => {
  const endTime = isoValue ? new Date(isoValue).getTime() : NaN;
  if (Number.isNaN(endTime)) {
    return null;
  }

  const now = Date.now();
  const difference = endTime - now;

  const tooltip = new Intl.DateTimeFormat(getLocale(), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(endTime));

  let diffValue = difference / 1000 / 60 / 60 / 24;
  if (diffValue < 1 && diffValue > -1) {
    // special check for small differences: same calendar day counts as "today"
    diffValue = new Date(now).getDate() === new Date(now + difference).getDate() ? 0 : Math.round(diffValue);
  } else {
    diffValue = Math.round(diffValue);
  }

  const text = new Intl.RelativeTimeFormat(getLocale(), {
    style: options?.style ?? "long",
    numeric: options?.numeric ?? "auto",
  }).format(diffValue, "day");

  return { text, tooltip, isFuture: difference >= 0 };
};

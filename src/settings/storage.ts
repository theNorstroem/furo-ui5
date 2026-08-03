/**
 * `localStorage` access for the settings modules.
 *
 * Every call is guarded: `localStorage` *throws* rather than returning `null` where it is
 * unavailable (Safari with cross-site cookies blocked, sandboxed iframes), and no setting is
 * important enough to break rendering over. A setting then simply does not persist.
 */

export const readSetting = (key: string): string | undefined => {
  try {
    return localStorage.getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
};

export const writeSetting = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage unavailable — the setting still applies for this session
  }
};

export const removeSetting = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // storage unavailable — nothing was persisted anyway
  }
};

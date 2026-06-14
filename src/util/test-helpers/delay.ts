/**
 * Pauses a test for n ms
 *
 * Usage:
 * Use it in an async test.
 * ```ts
 * await delay(16);
 * ```
 *
 * @param ms
 */
export const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

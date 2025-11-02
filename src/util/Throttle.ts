// Executes the first call and accepts the next call after delay time.
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function Throttle(func: Function, delay = 500) {
  let isQueued = false;
  return (...args: unknown[]) => {
    if (!isQueued) {
      isQueued = true;
      setTimeout(() => {
        isQueued = false;
        func(...args);
      }, delay);
    }
  };
}

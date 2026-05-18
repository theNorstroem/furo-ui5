// Executes the first call and accepts the next call after delay time.
export default function Throttle<TArgs extends unknown[]>(func: (...args: TArgs) => unknown, delay = 500) {
  let isQueued = false;
  return (...args: TArgs) => {
    if (!isQueued) {
      isQueued = true;
      setTimeout(() => {
        isQueued = false;
        func(...args);
      }, delay);
    }
  };
}

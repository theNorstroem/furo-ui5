/**
 *
 * //What are we doing here?
 * //1. Set the context and trailing arguments
 * //2. If not leading/trailing, return null
 * //3. If timer is done but leading is true, invoke the func execution
 * //4. If not, save the context for later execution
 * //5. clear the timer to avoid multiple timer instances
 * //6. call the timer if trailing is true n trailing args exists
 * //7. Reset the timer and args
 */

/**
 * @param {Function} func
 * @param {number} delay
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 *
 */
export default function DebounceBuilder<TArgs extends unknown[]>(func: (...args: TArgs) => unknown, delay = 250, option = { leading: false, trailing: true }) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let trailingArgs: TArgs | undefined;

  if (!option.leading && !option.trailing) return () => null;

  return function debounced(...args: TArgs) {
    if (!timer && option.leading) {
      func(...args);
    } else {
      trailingArgs = args;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      if (option.trailing && trailingArgs) func(...trailingArgs);

      trailingArgs = undefined;
      timer = undefined;
    }, delay);
  };
}

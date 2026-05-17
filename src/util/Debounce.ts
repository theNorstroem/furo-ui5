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
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function DebounceBuilder(func: Function, delay = 250, option = { leading: false, trailing: true }) {
  let timer: ReturnType<typeof setTimeout> | undefined; // same like basic debounce
  let trailingArgs: unknown[] = []; // as we require last arguments for trailing

  if (!option.leading && !option.trailing) return () => null; // if both false, return null

  return function debounced(...args: unknown[]) {
    // returns a debounced function

    if (!timer && option.leading) {
      // timer done but leading true
      func(args); // call func
    } else {
      trailingArgs = args; // arguments will be the last args
    }

    clearTimeout(timer); // clear timer for avoiding multiple timer instances

    timer = setTimeout(() => {
      if (option.trailing && trailingArgs) func(...trailingArgs); // trailingArgs is present and trailing is true

      trailingArgs = []; // reset last arguments
      timer = undefined; // reset timer
    }, delay);
  };
}

/**
 * # MediaSize resolver
 *
 * Returns the **media size** from S to XXL according to the screen width.
 *
 * Use this to set style vars according to the current media size.
 *
 *
 * ## Usage
 *
 * Apply the media-size attribute to your main-stage or component.
 *
 * ```js
 * window.addEventListener('resize',   MediaSize.DebounceBuilder(() => {
 *       this.setAttribute("media-size", MediaSize.GetMediaSize())
 *     }, MediaSize.HANDLE_RESIZE_DEBOUNCE_RATE)
 * );
 * // initial size
 * this.setAttribute("media-size", MediaSize.GetMediaSize())
 *
 *```
 *
 * Set media-size related values for your variables.
 * ```css
 *  :host([media-size='XXL']) {
 *          --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem;
 *          --FuroUi5MediaSizeIndentationTop: 2rem;
 *          --FuroUi5MediaSizeIndentationRight: 3rem;
 *          --FuroUi5MediaSizeIndentationBottom: 1;
 *          --FuroUi5MediaSizeIndentationLeft: 3rem;
 *        }
 *
 * :host([media-size='XL']) {
 *          --FuroUi5MediaSizeIndentation: 2rem 3rem 1rem 3rem;
 *          --FuroUi5MediaSizeIndentationTop: 2rem;
 *          --FuroUi5MediaSizeIndentationRight: 3rem;
 *          --FuroUi5MediaSizeIndentationBottom: 1;
 *          --FuroUi5MediaSizeIndentationLeft: 3rem;
 *        }
 *
 * :host([media-size='L']) {
 *          --FuroUi5MediaSizeIndentation: 1rem 2rem 0 2rem;
 *          --FuroUi5MediaSizeIndentationTop: 1rem;
 *          --FuroUi5MediaSizeIndentationRight: 2rem;
 *          --FuroUi5MediaSizeIndentationBottom: 0;
 *          --FuroUi5MediaSizeIndentationLeft: 2rem;
 *        }
 *
 * :host([media-size='M']) {
 *          --FuroUi5MediaSizeIndentation: 0.625rem 2rem 0 2rem;
 *          --FuroUi5MediaSizeIndentationTop: 0.625rem;
 *          --FuroUi5MediaSizeIndentationRight: 2rem;
 *          --FuroUi5MediaSizeIndentationBottom: 0;
 *          --FuroUi5MediaSizeIndentationLeft: 2rem;
 *        }
 *
 * :host([media-size='S']) {
 *          --FuroUi5MediaSizeIndentation: 0.625rem 1rem 0 1rem;
 *          --FuroUi5MediaSizeIndentationTop: 0.625rem;
 *          --FuroUi5MediaSizeIndentationRight: 1rem;
 *          --FuroUi5MediaSizeIndentationBottom: 0;
 *          --FuroUi5MediaSizeIndentationLeft: 1rem;
 *      }
 * ```
 */

export class MediaSize {
  /**
   * Default debounce rate for resize updates.
   * @return {number}
   * @constructor
   */
  static get HANDLE_RESIZE_DEBOUNCE_RATE() {
    return 200;
  }

  /**
   * Returns the media size.
   *
   * Sizes:
   * S,M,L,XL,XXl
   *
   * @return {String} size
   * @constructor
   */
  static GetMediaSize() {
    const width = window.innerWidth;
    const size = MediaSize.BREAKPOINTS.find(bp1 => width < bp1);
    return MediaSize.BREAKPOINTS_MAP[size];
  }

  static get BREAKPOINTS() {
    return [599, 1023, 1439, 1919, 10000];
  }

  static get BREAKPOINTS_MAP() {
    return {
      599: 'S',
      1023: 'M',
      1439: 'L',
      1919: 'XL',
      10000: 'XXL',
    };
  }

  /**
   * Generates a debounced function.
   *
   * @param func
   * @param delay
   * @return {(function(...[*]): void)|*} Your function with debounce feature.
   * @constructor
   */
  static DebounceBuilder(func, delay) {
    let timerId;
    return (...args) => {
      const boundFunc = func.bind(this, ...args);
      clearTimeout(timerId);
      timerId = setTimeout(boundFunc, delay);
    };
  }
}

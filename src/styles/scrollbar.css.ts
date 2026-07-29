import { css } from "lit";

/**
 * Adoptable styles for Fiori-themed scrollbars
 *
 * Every UI5 theme defines `--sapScrollBar_Dimension`, `--sapScrollBar_TrackColor`,
 * `--sapScrollBar_FaceColor` and `--sapScrollBar_Hover_FaceColor`, but UI5 never applies
 * them — this sheet does. It styles the `::-webkit-scrollbar` pseudo-elements, so there is
 * nothing to add to your markup.
 *
 * In the light DOM you get this for free: `@furo/ui5/Assets` adopts it into `document`.
 * A scroll container inside a shadow root keeps the browser default until that root adopts
 * the rules too:
 *
 * ```js
 * // lit
 * static styles = [ScrollbarCSS, css`.content { overflow: auto; }`];
 *
 * // without lit — the same sheet, ready to adopt
 * this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, GlobalStyles.scrollbar];
 * ```
 *
 * Chromium and WebKit only; Firefox renders its native scrollbar. The fallback colours are
 * a dark-theme palette and only apply if no UI5 theme has loaded.
 *
 * See the "Styling scrollbars" how-to for the full picture.
 */
const ScrollbarCSS = css`
  /* width */
  ::-webkit-scrollbar {
    height: var(--sapScrollBar_Dimension, 0.75rem);
    width: var(--sapScrollBar_Dimension, 0.75rem);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--sapScrollBar_TrackColor, #090b0d);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--sapScrollBar_FaceColor, #91c8f6);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--sapScrollBar_Hover_FaceColor, #4a5a6a);
  }
`;

/**
 * A thinner variant of {@link ScrollbarCSS}
 *
 * Identical apart from the track, which is a fixed `0.5rem` — for dense areas where the
 * full width is too heavy: a popover list, a narrow sidebar, an inline code block. Adopt it
 * exactly like {@link ScrollbarCSS}, as a straight swap.
 *
 * Note the trade-off: because the size is hardcoded, this variant does **not** follow
 * `--sapScrollBar_Dimension` and will not change with the theme. Nothing in this package
 * uses it — it is here for your own scroll areas.
 */
const MiniScrollbarCSS = css`
  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--sapScrollBar_TrackColor, #090b0d);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--sapScrollBar_FaceColor, #91c8f6);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--sapScrollBar_Hover_FaceColor, #4a5a6a);
  }
`;

export { ScrollbarCSS, MiniScrollbarCSS };

import { css } from "lit";

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

/**
 *
 * @public
 * @author veith
 */
export const SpanSizeVerticalVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
export const SpanSizeHorizontalVals = ["full", "end", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
export type SpanSizeVertical = (typeof SpanSizeVerticalVals)[number];
export type SpanSizeHorizontal = (typeof SpanSizeHorizontalVals)[number];

export interface FlexibleGridSetting {
  hSpan?: SpanSizeHorizontal;
  vSpan?: SpanSizeVertical;
  order: number;
}

/**
 * Different types of AutoStates.
 *
 * @readonly
 * @enum {string}
 * @public
 */
enum FormFieldSegmentationPatterns {
  /**
   * Use the full width, useful when you want to set units.
   * |--|--------|
   *
   * @public
   * @type {SmallBig}
   */
  Full = "Full",

  /**
   * Small field followed by a big field.
   * |--|--------|
   *
   * @public
   * @type {SmallBig}
   */
  SmallBig = "SmallBig",
  /**
   * Big field followed by a small field.
   * |--------|--|
   *
   * @public
   * @type {BigSmall}
   */
  BigSmall = "BigSmall",
}

export default FormFieldSegmentationPatterns;

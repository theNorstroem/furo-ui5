import type { ARRAY, FieldNode, STRING } from "@furo/open-models";

/**
 * A list item which fits in to an option component
 */
export interface Identifiable extends FieldNode {
  id: STRING;
  displayName: STRING;
}

/**
 * Some web-components are expecting that you fulfill this interface.
 */
export type IdentifiableList = ARRAY<Identifiable, unknown>;

/**
 * A list item which fits in to a furo-ui5-mcb-item component
 */
export interface MultiComboBoxItemLike extends FieldNode {
  id: STRING;
  displayName: STRING;
  additionalText?: STRING;
}

/**
 * Used to set the input to a furo-ui5-multi-combobox
 */
export type MultiComboBoxItemLikeList = ARRAY<MultiComboBoxItemLike, unknown>;

/**
 * A list item which fits in to an option component
 */
export interface OptionLike extends FieldNode {
  id: STRING;
  displayName: STRING;
  icon?: STRING;
  additionalText?: STRING;
  tooltip?: STRING;
}

/**
 * Some web-components are expecting that you fulfill this interface.
 */
export type OptionLikeList = ARRAY<OptionLike, unknown>;

/**
 * Represents an option in a selection control.
 *
 * This interface defines the shape of objects used to populate dropdowns,
 * lists, or other selection widgets. Each option has a unique identifier
 * and a human‑readable name, with optional visual or informational
 * enhancements.
 *
 */
export interface SelectOption {
  /**
   * Unique string identifier for the option. Used internally
   * (e.g., as a value when an item is selected).
   */
  id: string;
  /**
   * Text shown to the user. Should be concise and descriptive.
   */
  displayName: string;
  /**
   * Optional icon name. If provided, the UI can render an icon alongside the display text.
   */
  icon?: string;
  /**
   * Optional secondary text that can be shown
   * beside the main display name, often used for hints.
   */
  additionalText?: string;
  /**
   * Optional tooltip text that appears when the user hovers over the option, offering extra context or clarification.
   */
  tooltip?: string;
}

export interface McbItem {
  id: string;
  displayName: string;
  additionalText?: string;
}

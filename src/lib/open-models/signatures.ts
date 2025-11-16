import { ARRAY, FieldNode, STRING } from "@furo/open-models";

/**
 * A list item which fits in to an option component
 */
export interface Identifiable extends FieldNode {
  id: STRING;
  displayName: STRING;
  icon?: STRING;
  additionalText?: STRING;
  tooltip?: STRING;
}

/**
 * Some components are expecting that you fulfill this interface.
 */
export interface IdentifiableList extends ARRAY<Identifiable, unknown> {}

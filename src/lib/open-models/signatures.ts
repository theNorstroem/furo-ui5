import { FieldNode, STRING } from "@furo/open-models";

export interface Identifiable extends FieldNode {
  id: STRING;
  displayName: STRING;
}

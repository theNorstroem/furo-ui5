import { ValueState } from "@furo/open-models/dist";
import { Validators } from "@furo/open-models/dist/Validator";

import { type XString as FuroFatString } from "@/models/furo/fat/String";

Validators.set("furo.fat.String", (node: FuroFatString) => {
  const fieldConstraints = node.__getConstraints();
  const val = node.value.value;
  if (fieldConstraints) {
    const check = (): string[] | undefined => {
      if (fieldConstraints.required === true) {
        if (val === "") {
          return ["constraint.violation.required"];
        }
      }
      if (fieldConstraints.max_length) {
        // String length can be restricted using minLength and maxLength. ">" is used to check.
        if (val.length > fieldConstraints.max_length) {
          return ["constraint.violation.max_length", fieldConstraints.max_length?.toString(), val];
        }
      }
      if (fieldConstraints.min_length) {
        // String length can be restricted using minLength and maxLength. "<" is used to check.
        if (val.length < fieldConstraints.min_length) {
          return ["constraint.violation.min_length", fieldConstraints.min_length?.toString(), val];
        }
      }
      if (fieldConstraints.pattern) {
        // The pattern keyword lets you define a regular expression template for the string value.

        const re = new RegExp(fieldConstraints.pattern);
        if (!val.match(re)) {
          return ["constraint.violation.pattern", fieldConstraints.pattern, val];
        }
      }

      return undefined;
    };

    const res = check();

    if (res !== undefined) {
      node.__setValueState(ValueState.Negative, res);
    } else {
      node.__setValueState(ValueState.None, [""]);
    }
  }
});

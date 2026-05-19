import { FuroFatFloat } from "@/models";

export interface CreateFatFloatInit {
  value?: number;
  attributes?: Record<string, string>;
  labels?: Record<string, boolean>;
}

/**
 * Constructs a `FuroFatFloat` for tests with the requested value, attributes, and labels.
 * Use it in element specs to drive FAT-aware binding scenarios (placeholder,
 * readonly/required/disabled labels, value-state, etc.) for numeric float fields.
 */
export const createFatFloat = (init: CreateFatFloatInit = {}): FuroFatFloat =>
  new FuroFatFloat({
    value: init.value ?? 0,
    attributes: init.attributes ?? {},
    labels: init.labels ?? {},
  });

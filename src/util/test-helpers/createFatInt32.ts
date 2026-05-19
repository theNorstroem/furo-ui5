import { FuroFatInt32 } from "@/models";

export interface CreateFatInt32Init {
  value?: number;
  attributes?: Record<string, string>;
  labels?: Record<string, boolean>;
}

/**
 * Constructs a `FuroFatInt32` for tests with the requested value, attributes, and labels.
 * Use it in element specs to drive FAT-aware binding scenarios (placeholder,
 * readonly/required/disabled labels, value-state, etc.) for numeric int32 fields.
 */
export const createFatInt32 = (init: CreateFatInt32Init = {}): FuroFatInt32 =>
  new FuroFatInt32({
    value: init.value ?? 0,
    attributes: init.attributes ?? {},
    labels: init.labels ?? {},
  });

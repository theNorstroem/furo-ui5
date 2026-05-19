import { FuroFatString } from "@/models";

export interface CreateFatStringInit {
  value?: string;
  attributes?: Record<string, string>;
  labels?: Record<string, boolean>;
}

/**
 * Constructs a `FuroFatString` for tests with the requested value, attributes, and labels.
 * Use it in element specs to drive FAT-aware binding scenarios (placeholder, maxlength,
 * readonly/required/disabled labels, value-state, etc.).
 */
export const createFatString = (init: CreateFatStringInit = {}): FuroFatString =>
  new FuroFatString({
    value: init.value ?? "",
    attributes: init.attributes ?? {},
    labels: init.labels ?? {},
  });

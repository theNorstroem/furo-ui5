import { FuroFatBool } from "@/models";

export interface CreateFatBoolInit {
  value?: boolean;
  attributes?: Record<string, string>;
  labels?: Record<string, boolean>;
}

/**
 * Constructs a `FuroFatBool` for tests with the requested value, attributes, and labels.
 * Use it in element specs to drive FAT-aware binding scenarios (disabled label, value-state, etc.).
 */
export const createFatBool = (init: CreateFatBoolInit = {}): FuroFatBool =>
  new FuroFatBool({
    value: init.value ?? false,
    attributes: init.attributes ?? {},
    labels: init.labels ?? {},
  });

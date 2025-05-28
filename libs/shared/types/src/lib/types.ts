/**
 * Common utility types
 */

// Type for nullable values
export type Nullable<T> = T | null;

// Type for optional values
export type Optional<T> = T | undefined;

// Type for async function results
export type AsyncResult<T> = Promise<T>;

// Type for function that returns void
export type VoidFunction = () => void;

// Type for function that returns a promise of void
export type AsyncVoidFunction = () => Promise<void>;

// Type for record with string keys and any value
export type StringRecord = Record<string, unknown>;

// Type for record with number keys and any value
export type NumberRecord = Record<number, unknown>;

// Type for ID types
export type ID = string | number;

// Type for date-like values
export type DateLike = Date | string | number;

// Type for pagination metadata
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Month format key type definition
 * @module time-master/types/MonthFormatKey
 */

import type { Locale } from './Locale';

/**
 * Type representing valid month format keys
 * Derived from the months property of the Locale type
 *
 * Available formats:
 * - 'short': Short month names (e.g., "Jan", "Feb")
 * - 'long': Long month names (e.g., "January", "February")
 *
 * @example
 * const format: MonthFormatKey = 'short'; // Valid
 * const format: MonthFormatKey = 'invalid'; // Type error - not supported
 */
export type MonthFormatKey = keyof Locale['months'];

/**
 * @module date-time-master/types/WeekDayFormatKey
 */

import type { Locale } from './Locale';

/**
 * Type representing valid week day format keys
 * Derived from the weekDays property of the Locale type
 *
 * Available formats:
 * - 'short': Short day names (e.g., "Mon", "Tue")
 * - 'long': Long day names (e.g., "Monday", "Tuesday")
 *
 * @example
 * const format: WeekDayFormatKey = 'short'; // Valid
 * const format: WeekDayFormatKey = 'invalid'; // Type error - not supported
 */
export type WeekDayFormatKey = keyof Locale['weekDays'];

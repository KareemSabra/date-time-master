/**
 * @module date-time-master/types/DateFormatKey
 */

import type { Locale } from './Locale';

/**
 * Type representing valid date format keys
 * Derived from the dateFormats property of the Locale type
 *
 * Available formats:
 * - 'short': Short date format (e.g., "MM/DD/YYYY")
 * - 'medium': Medium date format (e.g., "MMM DD, YYYY")
 * - 'long': Long date format (e.g., "MMMM DD, YYYY")
 * - 'full': Full date format (e.g., "EEEE, MMMM DD, YYYY")
 * - 'time': Time format (e.g., "HH:mm:ss")
 * - 'dateTime': Date and time format (e.g., "MM/DD/YYYY HH:mm:ss")
 *
 * @example
 * const format: DateFormatKey = 'short'; // Valid
 * const format: DateFormatKey = 'invalid'; // Type error - not supported
 */
export type DateFormatKey = keyof Locale['dateFormats'];

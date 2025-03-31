/**
 * Relative time key type definition
 * @module time-master/types/RelativeTimeKey
 */

import type { Locale } from './Locale';

/**
 * Type representing valid relative time keys
 * Derived from the relativeTime.past property of the Locale type
 *
 * Available keys:
 * - 'seconds': For second-based relative time
 * - 'minute': For single minute
 * - 'minutes': For multiple minutes
 * - 'hour': For single hour
 * - 'hours': For multiple hours
 * - 'day': For single day
 * - 'days': For multiple days
 * - 'week': For single week
 * - 'weeks': For multiple weeks
 * - 'month': For single month
 * - 'months': For multiple months
 * - 'year': For single year
 * - 'years': For multiple years
 *
 * @example
 * const key: RelativeTimeKey = 'minutes'; // Valid
 * const key: RelativeTimeKey = 'invalid'; // Type error - not supported
 */
export type RelativeTimeKey = keyof Locale['relativeTime']['past'];

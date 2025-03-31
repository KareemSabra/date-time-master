/**
 * Timezone type definition
 * @module time-master/types/TimeZone
 */

import { timeZones } from '../constants/timezones';

/**
 * Type representing valid IANA timezone identifiers
 * Derived from the timeZones constant array
 *
 * @example
 * const tz: TimeZone = 'UTC'; // Valid
 * const tz: TimeZone = 'America/New_York'; // Valid
 * const tz: TimeZone = 'Invalid/Zone'; // Type error - not supported
 */
export type TimeZone = (typeof timeZones)[number];

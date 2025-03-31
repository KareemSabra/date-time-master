/**
 * Locale key type definition
 * @module time-master/types/LocaleKey
 */

import { locales } from '../constants/locales';

/**
 * Type representing the available locale keys
 * Derived from the locales constant array
 *
 * @example
 * const locale: LocaleKey = 'en'; // Valid
 * const locale: LocaleKey = 'fr'; // Type error - not supported
 */
export type LocaleKey = (typeof locales)[number];

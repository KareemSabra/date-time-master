/**
 * @module date-time-master/types/Locale
 */

import { ArabicLocale } from '../locales/ar';
import { EnglishLocale } from '../locales/en';
import { SpanishLocale } from '../locales/es';

/**
 * Union type of all supported locales
 * Currently supports:
 * - English (en)
 * - Spanish (es)
 * - Arabic (ar)
 *
 * Each locale includes:
 * - Date formats (short, medium, long, full)
 * - Week day names (short and long)
 * - Month names (short and long)
 * - Relative time expressions (past and future)
 */
export type Locale = EnglishLocale | SpanishLocale | ArabicLocale;

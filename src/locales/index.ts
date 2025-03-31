/**
 * Locale types and configurations
 * @module time-master/locales
 */

import { ar } from './ar';
import { en } from './en';
import { es } from './es';

/**
 * Available locales
 */
export const locales = {
    en,
    es,
    ar,
} as const;

// Re-export individual locales
export { en, es, ar };

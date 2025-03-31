/**
 * TimeMaster class for handling time-related operations with locale and timezone support
 * @module time-master/TimeMaster
 */

import { LocaleProvider } from '../providers/LocaleProvider';
import type { Locale, LocaleKey, TimeZone } from '../types';

/**
 * Main class for time manipulation and formatting
 * Provides functionality for handling dates with locale and timezone support
 */
export class TimeMaster {
    private localeProvider: LocaleProvider;
    private timeZone: string;

    /**
     * Creates a new TimeMaster instance
     * @param localeKey - The locale key to use for formatting (e.g., 'en', 'ar')
     * @param timeZone - The timezone to use for date operations (e.g., 'UTC', 'America/New_York')
     */
    constructor(localeKey: LocaleKey, timeZone: TimeZone) {
        this.localeProvider = new LocaleProvider(localeKey);
        this.timeZone = timeZone;
    }

    /**
     * Gets the current date in the configured timezone
     * @returns {Date} The current date
     */
    getCurrentDate(): Date {
        const date = new Date();
        return date;
    }

    /**
     * Gets the configured timezone
     * @returns {string} The current timezone
     */
    getTimezone(): string {
        return this.timeZone;
    }

    /**
     * Gets the current locale configuration
     * @returns {Locale} The current locale settings
     */
    getLocale(): Locale {
        return this.localeProvider.getLocale();
    }
}

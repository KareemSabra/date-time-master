/**
 * Locale provider for managing internationalization
 * @module time-master/LocaleProvider
 */

import { defaultConfig } from '../constants/defaultConfig';
import { locales } from '../locales';
import type { Locale, LocaleKey } from '../types';

/**
 * Class for managing locales and internationalization
 * Handles date formatting, month names, week days, and relative time expressions
 * in different locales and formats.
 */
export class LocaleProvider {
    private currentLocale: Locale;

    /**
     * Create a new LocaleProvider instance
     * @param defaultLocale - The default locale to use (e.g., 'en', 'ar')
     */
    constructor(defaultLocale: LocaleKey = defaultConfig.localeKey) {
        this.currentLocale = locales[defaultLocale as keyof typeof locales];
    }

    /**
     * Get the current locale
     * @returns The current locale configuration
     */
    getLocale(): Locale {
        return this.currentLocale;
    }

    /**
     * Set the current locale
     * @param locale - The locale to set (e.g., 'en', 'ar')
     */
    setLocale(locale: LocaleKey): void {
        this.currentLocale = locales[locale as keyof typeof locales];
    }

    /**
     * Get a date format string
     * @param format - The format key to get (e.g., 'short', 'medium', 'long', 'full')
     * @returns The date format string
     * @example
     * // Returns "MM/DD/YYYY" for 'en' locale
     * getDateFormat('short')
     * // Returns "DD من MMMM من YYYY" for 'ar' locale
     * getDateFormat('long')
     */
    getDateFormat(format: keyof Locale['dateFormats']): string {
        return this.currentLocale.dateFormats[format];
    }

    /**
     * Get a week day name
     * @param day - The day index (0-6, where 0 is Sunday)
     * @param format - The format to use ('short' or 'long')
     * @returns The week day name
     * @example
     * // Returns "Mon" for 'en' locale
     * getWeekDay(1, 'short')
     * // Returns "الإثنين" for 'ar' locale
     * getWeekDay(1, 'long')
     */
    getWeekDay(day: number, format: 'short' | 'long'): string {
        return this.currentLocale.weekDays[format][day];
    }

    /**
     * Get a month name
     * @param month - The month index (0-11, where 0 is January)
     * @param format - The format to use ('short' or 'long')
     * @returns The month name
     * @example
     * // Returns "Jan" for 'en' locale
     * getMonth(0, 'short')
     * // Returns "يناير" for 'ar' locale
     * getMonth(0, 'long')
     */
    getMonth(month: number, format: 'short' | 'long'): string {
        return this.currentLocale.months[format][month];
    }

    /**
     * Get a relative time string
     * @param key - The relative time key (e.g., 'seconds', 'minutes', 'hours')
     * @param count - The count to use in the string (default: 1)
     * @param isFuture - Whether to use future or past tense (default: false)
     * @returns The relative time string
     * @example
     * // Returns "2 minutes ago" for 'en' locale
     * getRelativeTime('minutes', 2)
     * // Returns "خلال 3 ساعات" for 'ar' locale
     * getRelativeTime('hours', 3, true)
     */
    getRelativeTime(
        key: keyof Locale['relativeTime']['past'],
        count: number = 1,
        isFuture: boolean = false
    ): string {
        const timeKey = isFuture ? 'future' : 'past';
        const template = this.currentLocale.relativeTime[timeKey][key];
        return template.replace('{count}', count.toString());
    }

    /**
     * Format a date using the current locale
     * @param date - The date to format
     * @param format - The format to use (e.g., 'short', 'medium', 'long', 'full')
     * @returns The formatted date string
     * @example
     * // Returns "3/29/2024" for 'en' locale
     * formatDate(new Date(), 'short')
     * // Returns "29 من مارس من 2024" for 'ar' locale
     * formatDate(new Date(), 'long')
     */
    formatDate(date: Date, format: keyof Locale['dateFormats']): string {
        const formatString = this.getDateFormat(format);
        return this.formatDateWithString(date, formatString);
    }

    /**
     * Format a date using a custom format string
     * @param date - The date to format
     * @param format - The format string to use
     * @returns The formatted date string
     * @private
     * @example
     * // Returns "2024-03-29 14:30:00"
     * formatDateWithString(new Date(), "YYYY-MM-DD HH:mm:ss")
     */
    private formatDateWithString(date: Date, format: string): string {
        const map: { [key: string]: string } = {
            YYYY: date.getFullYear().toString(),
            MM: ('0' + (date.getMonth() + 1)).slice(-2),
            MMM: this.getMonth(date.getMonth(), 'short'),
            MMMM: this.getMonth(date.getMonth(), 'long'),
            DD: ('0' + date.getDate()).slice(-2),
            EEEE: this.getWeekDay(date.getDay(), 'long'),
            EEE: this.getWeekDay(date.getDay(), 'short'),
            HH: ('0' + date.getHours()).slice(-2),
            mm: ('0' + date.getMinutes()).slice(-2),
            ss: ('0' + date.getSeconds()).slice(-2),
        };

        return format.replace(/YYYY|MMM|MMMM|MM|DD|EEEE|EEE|HH|mm|ss/g, (matched) => map[matched]);
    }
}

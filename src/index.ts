import { locales } from './locales';
import { Locale } from './types';
import { Config } from './types/Config';
import { LocaleKey } from './types/LocaleKey';
import { TimeZone } from './types/TimeZone';

export default class DateTimeMaster {
    private localeKey: LocaleKey;
    private timeZone: TimeZone;
    private currentLocale: Locale;

    /**
     * Initializes a new instance of the DateTimeMaster class.
     * @param {Config} params - The configuration options for DateTimeMaster.
     * @example
     * const dateTimeMaster = new DateTimeMaster({
     *   localeKey: 'en',
     *   timeZone: 'UTC',
     * });
     */
    constructor({ localeKey, timeZone }: Config) {
        this.localeKey = localeKey;
        this.timeZone = timeZone;
        this.currentLocale = locales[localeKey as keyof typeof locales];
    }

    /**
     * Gets the current timezone.
     * @returns {TimeZone} The current timezone.
     * @example
     * const dateTimeMaster = new DateTimeMaster({
     *   localeKey: 'en',
     *   timeZone: 'UTC',
     * });
     * const timezone = dateTimeMaster.getCurrentTimezone();
     * console.log(timezone); // 'UTC'
     */
    getCurrentTimezone(): TimeZone {
        return this.timeZone;
    }

    /**
     * Gets the current locale.
     * @returns {LocaleKey} The current locale.
     * @example
     * const dateTimeMaster = new DateTimeMaster({
     *   localeKey: 'en',
     *   timeZone: 'UTC',
     * });
     * const locale = dateTimeMaster.getCurrentLocale();
     * console.log(locale); // 'en'
     */
    getCurrentLocale(): LocaleKey {
        return this.localeKey;
    }

    /**
     * Gets the current date.
     * @returns {Date} The current date.
     * @example
     * const dateTimeMaster = new DateTimeMaster({
     *   localeKey: 'en',
     *   timeZone: 'UTC',
     * });
     * const date = dateTimeMaster.getNow();
     * console.log(date); // '2021-01-01'
     */
    getNow(): Date {
        return new Date();
    }

    /**
     * Get the current locale configuration.
     * @returns {Locale} The current locale configuration.
     */
    getLocale(): Locale {
        return this.currentLocale;
    }

    /**
     * Set the current locale.
     * @param {LocaleKey} locale - The locale to set (e.g., 'en', 'ar').
     */
    setLocale(locale: LocaleKey): void {
        this.currentLocale = locales[locale as keyof typeof locales];
        this.localeKey = locale;
    }

    /**
     * Get a date format string.
     * @param {keyof Locale['dateFormats']} format - The format key to get (e.g., 'short', 'medium', 'long', 'full').
     * @returns {string} The date format string.
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
     * Get a week day name.
     * @param {number} day - The day index (0-6, where 0 is Sunday).
     * @param {'short' | 'long'} format - The format to use ('short' or 'long').
     * @returns {string} The week day name.
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
     * Get a month name.
     * @param {number} month - The month index (0-11, where 0 is January).
     * @param {'short' | 'long'} format - The format to use ('short' or 'long').
     * @returns {string} The month name.
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
     * Get a relative time string.
     * @param {keyof Locale['relativeTime']['past']} key - The relative time key (e.g., 'seconds', 'minutes', 'hours').
     * @param {number} [count=1] - The count to use in the string (default: 1).
     * @param {boolean} [isFuture=false] - Whether to use future or past tense (default: false).
     * @returns {string} The relative time string.
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
     * Format a date using the current locale.
     * @param {Date} date - The date to format.
     * @param {keyof Locale['dateFormats']} format - The format to use (e.g., 'short', 'medium', 'long', 'full').
     * @returns {string} The formatted date string.
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
     * Format a date using a custom format string.
     * @param {Date} date - The date to format.
     * @param {string} format - The format string to use.
     * @returns {string} The formatted date string.
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

        return format.replace(/YYYY|MMMM|MMM|MM|DD|EEEE|EEE|HH|mm|ss/g, (matched) => map[matched]);
    }
}

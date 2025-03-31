/**
 * Time Master - A powerful time manipulation and formatting library
 * @module time-master
 */

export { LocaleProvider } from './providers/LocaleProvider';
export { locales } from './constants/locales';
export { timeZones } from './constants/timezones';
export type {
    Locale,
    LocaleKey,
    TimeZone,
    DateFormatKey,
    WeekDayFormatKey,
    MonthFormatKey,
    RelativeTimeKey,
} from './types';

/**
 * MM-YYYY-DD -> 03-2025-29
 * DD-MM-YYYY -> 29-03-2025
 * YYYY-MM-DD -> 2025-03-29
 * DD/MM/YYYY -> 29/03/2025
 * MM/DD/YYYY -> 03/29/2025
 * YYYY/MM/DD -> 2025/03/29
 * HH:mm:ss -> 14:05:09
 */
export function timeFormat(date: string | Date, format: string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) {
        return 'Invalid Date';
    }
    const map: { [key: string]: string } = {
        YYYY: d.getFullYear().toString(),
        MM: ('0' + (d.getMonth() + 1)).slice(-2),
        DD: ('0' + d.getDate()).slice(-2),
        HH: ('0' + d.getHours()).slice(-2),
        mm: ('0' + d.getMinutes()).slice(-2),
        ss: ('0' + d.getSeconds()).slice(-2),
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}

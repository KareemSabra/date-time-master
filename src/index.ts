/**
 * Time Master - A powerful time manipulation and formatting library
 * @module time-master
 */

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

/**
 * Returns the number 1
 * @returns {1} The number 1
 * @example
 * ```typescript
 * import { one } from 'time-master';
 * const result = one(); // 1
 * ```
 */
export const one = (): 1 => 1;

/**
 * Returns the number 2
 * @returns {2} The number 2
 * @example
 * ```typescript
 * import { two } from 'time-master';
 * const result = two(); // 2
 * ```
 */
export const two = (): 2 => 2;

/**
 * Type definition for the library's exports
 */
export type TimeMaster = {
    one: () => 1;
    two: () => 2;
};

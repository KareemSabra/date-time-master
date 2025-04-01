import { describe, it, expect } from 'vitest';

import DateTimeMaster from '../index';
import { Locale } from '../types';

describe('DateTimeMaster Class', () => {
    it('should create a new DateTimeMaster instance with various locales and timezones', () => {
        const locales = ['en', 'ar', 'fr'];
        const timeZones = ['UTC', 'GMT', 'PST'];
        locales.forEach((locale) => {
            timeZones.forEach((timeZone) => {
                const dateTimeMaster = new DateTimeMaster({
                    localeKey: locale,
                    timeZone: timeZone,
                });
                expect(dateTimeMaster).toBeInstanceOf(DateTimeMaster);
                expect(dateTimeMaster.getCurrentLocale()).toBe(locale);
                expect(dateTimeMaster.getCurrentTimezone()).toBe(timeZone);
            });
        });
    });

    it('should format dates correctly for different formats and locales', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const date = new Date('2021-01-01');
        const formats = {
            short: '01/01/2021',
            medium: 'Jan 01, 2021',
            long: 'January 01, 2021',
            full: 'Friday, January 01, 2021',
        };
        Object.keys(formats).forEach((format) => {
            expect(dateTimeMaster.formatDate(date, format as keyof typeof formats)).toBe(
                formats[format as keyof typeof formats]
            );
        });
    });

    it('should handle relative time strings correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const relativeTimes = [
            { key: 'minutes', count: 2, isFuture: false, expected: '2 minutes ago' },
            { key: 'hours', count: 3, isFuture: true, expected: 'in 3 hours' },
            { key: 'day', count: 1, isFuture: false, expected: '1 day ago' },
        ];
        relativeTimes.forEach(({ key, count, isFuture, expected }) => {
            expect(
                dateTimeMaster.getRelativeTime(
                    key as keyof Locale['relativeTime']['past'],
                    count,
                    isFuture
                )
            ).toBe(expected);
        });
    });
});

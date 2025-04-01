import { describe, it, expect } from 'vitest';

import DateTimeMaster from '../index';
import { Locale } from '../types';
import { defaultConfig } from '../constants/defaultConfig';
import { locales } from '../locales';
import { timeZones } from '../constants/timezones';
import { locales as supportedLocales } from '../constants/locales';

describe('Constants', () => {
    it('should have valid default config', () => {
        expect(defaultConfig).toBeDefined();
        expect(defaultConfig.localeKey).toBe('en');
        expect(defaultConfig.timeZone).toBe('UTC');
    });

    it('should have valid locales', () => {
        expect(locales).toBeDefined();
        expect(locales.en).toBeDefined();
        expect(locales.ar).toBeDefined();
        expect(locales.es).toBeDefined();

        // Check English locale
        expect(locales.en.localeKey).toBe('en');
        expect(locales.en.dateFormats).toBeDefined();
        expect(locales.en.weekDays).toBeDefined();
        expect(locales.en.months).toBeDefined();
        expect(locales.en.relativeTime).toBeDefined();

        // Check Arabic locale
        expect(locales.ar.localeKey).toBe('ar');
        expect(locales.ar.dateFormats).toBeDefined();
        expect(locales.ar.weekDays).toBeDefined();
        expect(locales.ar.months).toBeDefined();
        expect(locales.ar.relativeTime).toBeDefined();

        // Check Spanish locale
        expect(locales.es.localeKey).toBe('es');
        expect(locales.es.dateFormats).toBeDefined();
        expect(locales.es.weekDays).toBeDefined();
        expect(locales.es.months).toBeDefined();
        expect(locales.es.relativeTime).toBeDefined();
    });

    it('should have valid supported locales list', () => {
        expect(supportedLocales).toBeDefined();
        expect(Array.isArray(supportedLocales)).toBe(true);
        expect(supportedLocales).toContain('en');
        expect(supportedLocales).toContain('es');
        expect(supportedLocales).toContain('ar');
        expect(supportedLocales.length).toBe(3);

        // Verify that all supported locales have corresponding locale configurations
        supportedLocales.forEach((locale) => {
            expect(locales[locale as keyof typeof locales]).toBeDefined();
            expect(locales[locale as keyof typeof locales].localeKey).toBe(locale);
        });
    });

    it('should have valid timezones', () => {
        expect(timeZones).toBeDefined();
        expect(Array.isArray(timeZones)).toBe(true);
        expect(timeZones.length).toBeGreaterThan(0);
        expect(timeZones).toContain('UTC');
        expect(timeZones).toContain('America/New_York');
        expect(timeZones).toContain('Europe/London');
        expect(timeZones).toContain('Asia/Tokyo');
        expect(timeZones).toContain('Australia/Sydney');
    });
});

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

    it('should handle getNow() correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const now = dateTimeMaster.getNow();
        expect(now).toBeInstanceOf(Date);
        expect(now.getTime()).toBeLessThanOrEqual(Date.now());
    });

    it('should handle getLocale() correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const locale = dateTimeMaster.getLocale();
        expect(locale).toBeDefined();
        expect(locale.localeKey).toBe('en');
        expect(locale.dateFormats).toBeDefined();
        expect(locale.weekDays).toBeDefined();
        expect(locale.months).toBeDefined();
        expect(locale.relativeTime).toBeDefined();
    });

    it('should handle getDateFormat() correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const formats = ['short', 'medium', 'long', 'full'] as const;
        formats.forEach((format) => {
            const dateFormat = dateTimeMaster.getDateFormat(format);
            expect(dateFormat).toBeDefined();
            expect(typeof dateFormat).toBe('string');
        });
    });

    it('should handle getWeekDay() correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const days = [0, 1, 2, 3, 4, 5, 6];
        const formats = ['short', 'long'] as const;
        days.forEach((day) => {
            formats.forEach((format) => {
                const weekDay = dateTimeMaster.getWeekDay(day, format);
                expect(weekDay).toBeDefined();
                expect(typeof weekDay).toBe('string');
            });
        });
    });

    it('should handle getMonth() correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const formats = ['short', 'long'] as const;
        months.forEach((month) => {
            formats.forEach((format) => {
                const monthName = dateTimeMaster.getMonth(month, format);
                expect(monthName).toBeDefined();
                expect(typeof monthName).toBe('string');
            });
        });
    });

    it('should handle formatDateWithString() with all format tokens', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const date = new Date('2021-01-01T12:30:45');
        const format = 'YYYY-MM-DD HH:mm:ss EEEE MMMM MMM';
        const result = dateTimeMaster.formatDate(date, 'full');
        expect(result).toBeDefined();
        expect(typeof result).toBe('string');
        expect(result).toContain('2021');
        expect(result).toContain('January');
        expect(result).toContain('Friday');
    });

    it('should handle locale changes correctly', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });
        const date = new Date('2021-01-01');

        // Test English locale
        expect(dateTimeMaster.getCurrentLocale()).toBe('en');
        expect(dateTimeMaster.formatDate(date, 'long')).toBe('January 01, 2021');

        // Change to Arabic locale
        dateTimeMaster.setLocale('ar');
        expect(dateTimeMaster.getCurrentLocale()).toBe('ar');
        expect(dateTimeMaster.formatDate(date, 'long')).toBe('01 من يناير من 2021');

        // Change back to English locale
        dateTimeMaster.setLocale('en');
        expect(dateTimeMaster.getCurrentLocale()).toBe('en');
        expect(dateTimeMaster.formatDate(date, 'long')).toBe('January 01, 2021');
    });

    it('should handle edge cases in relative time', () => {
        const dateTimeMaster = new DateTimeMaster({
            localeKey: 'en',
            timeZone: 'UTC',
        });

        // Test zero count
        expect(dateTimeMaster.getRelativeTime('minutes', 0)).toBe('0 minutes ago');

        // Test large numbers
        expect(dateTimeMaster.getRelativeTime('years', 1000)).toBe('1000 years ago');

        // Test all relative time keys
        const keys = [
            'seconds',
            'minute',
            'minutes',
            'hour',
            'hours',
            'day',
            'days',
            'week',
            'weeks',
            'month',
            'months',
            'year',
            'years',
        ] as const;

        keys.forEach((key) => {
            expect(dateTimeMaster.getRelativeTime(key)).toBeDefined();
            expect(dateTimeMaster.getRelativeTime(key, 1)).toBeDefined();
            expect(dateTimeMaster.getRelativeTime(key, 2)).toBeDefined();
            expect(dateTimeMaster.getRelativeTime(key, 1, true)).toBeDefined();
        });
    });
});

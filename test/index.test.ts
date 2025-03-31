import { describe, it, expect } from 'vitest';

import { TimeMaster } from '../src/classes/TimeMaster';

describe('Time Master Class', () => {
    it('should create a new TimeMaster instance', () => {
        const timeMaster = new TimeMaster('en', 'UTC');
        expect(timeMaster).toBeDefined();
    });

    it('should get the current date', () => {
        const timeMaster = new TimeMaster('en', 'UTC');
        const date = timeMaster.getCurrentDate();
        expect(date).toBeDefined();
    });

    it('should get the current timezone', () => {
        const timeMaster = new TimeMaster('en', 'UTC');
        const timezone = timeMaster.getTimezone();
        expect(timezone).toBeDefined();
        expect(timezone).toBe('UTC');
    });

    it('should get the current locale "en"', () => {
        const timeMaster = new TimeMaster('en', 'UTC');
        const locale = timeMaster.getLocale();
        expect(locale).toBeDefined();
        expect(locale.localeKey).toBe('en');
    });

    it('should get the current locale "es"', () => {
        const timeMaster = new TimeMaster('es', 'UTC');
        const locale = timeMaster.getLocale();
        expect(locale).toBeDefined();
        expect(locale.localeKey).toBe('es');
    });

    it('should get the current locale "ar"', () => {
        const timeMaster = new TimeMaster('ar', 'UTC');
        const locale = timeMaster.getLocale();
        expect(locale).toBeDefined();
        expect(locale.localeKey).toBe('ar');
    });
});

import { describe, it, expect } from 'vitest';

import { timeFormat } from '../src';

describe('timeFormat function', () => {
    it('should format date in YYYY MM DD format', () => {
        const date = new Date('2025-03-29T00:00:00Z');
        expect(timeFormat(date, 'YYYY MM DD')).toBe('2025 03 29');
    });

    it('should format date in DD-MM-YYYY format', () => {
        const date = new Date('2025-03-29T00:00:00Z');
        expect(timeFormat(date, 'DD-MM-YYYY')).toBe('29-03-2025');
    });

    it('should format date in MM/DD/YYYY format', () => {
        const date = new Date('2025-03-29T00:00:00Z');
        expect(timeFormat(date, 'MM/DD/YYYY')).toBe('03/29/2025');
    });

    it('should format date in HH:mm:ss format', () => {
        const date = new Date('2025-03-29T14:05:09Z');
        expect(timeFormat(date, 'HH:mm:ss')).toBe('14:05:09');
    });

    it('should handle string date input', () => {
        const date = '2025-03-29T00:00:00Z';
        expect(timeFormat(date, 'YYYY-MM-DD')).toBe('2025-03-29');
    });

    it('should handle invalid date input gracefully', () => {
        const date = 'invalid-date';
        expect(timeFormat(date, 'YYYY-MM-DD')).toBe('Invalid Date');
    });
});

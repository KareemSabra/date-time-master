import { describe, it, expect } from 'vitest';

import { one, two } from '../src';

describe('Basic exports', () => {
    it('should export one as 1', () => {
        expect(one).toBe(1);
    });

    it('should export two as 2', () => {
        expect(two).toBe(2);
    });
});

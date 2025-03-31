import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            reporter: ['text', 'lcov'],
            exclude: [
                'node_modules/**',
                'dist/**',
                '**/*.d.ts',
                '**/*.test.ts',
                '**/*.config.ts',
                '**/types/**',
            ],
            include: ['src/**'],
            all: true,
        },
    },
});

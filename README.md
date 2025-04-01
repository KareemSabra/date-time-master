# Date Time Master

[![npm version](https://img.shields.io/npm/v/date-time-master.svg)](https://www.npmjs.com/package/date-time-master)
[![License](https://img.shields.io/github/license/kareemsabra/date-time-master)](https://github.com/kareemsabra/date-time-master/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0-orange.svg)](https://bun.sh/)
[![CI](https://github.com/kareemsabra/date-time-master/actions/workflows/ci.yml/badge.svg)](https://github.com/kareemsabra/date-time-master/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/KareemSabra/date-time-master/badge.svg)](https://coveralls.io/github/KareemSabra/date-time-master)

A powerful and flexible date and time manipulation library for JavaScript and TypeScript. Built with performance, type safety, and internationalization in mind.

## Features

- 🚀 Built with TypeScript for type safety
- 📦 Zero dependencies
- 🔄 ESM and CommonJS support
- 🎯 Tree-shakeable
- ⚡ Bun-powered for maximum performance
- 🌍 Built-in internationalization support
- 📝 Comprehensive JSDoc documentation
- ✅ Full test coverage
- 🔍 Strict type checking

## Installation

```bash
# Using bun
bun add date-time-master

# Using npm
npm install date-time-master

# Using yarn
yarn add date-time-master

# Using pnpm
pnpm add date-time-master
```

## Quick Start

```typescript
import DateTimeMaster from 'date-time-master';

// Initialize with configuration
const dateTime = new DateTimeMaster({
    localeKey: 'en',
    timeZone: 'UTC',
});

// Format dates
const date = new Date();
console.log(dateTime.formatDate(date, 'short')); // "3/29/2024"
console.log(dateTime.formatDate(date, 'long')); // "March 29, 2024"

// Get relative time
console.log(dateTime.getRelativeTime('minutes', 5)); // "5 minutes ago"
console.log(dateTime.getRelativeTime('hour', 1)); // "1 hour ago"

// Change locale
dateTime.setLocale('ar');
console.log(dateTime.formatDate(date, 'long')); // "29 من مارس من 2024"
```

## API Reference

### Constructor

```typescript
new DateTimeMaster(config: Config)
```

**Parameters:**

- `config`: Configuration object
    - `localeKey`: The locale to use (e.g., 'en', 'ar')
    - `timeZone`: The timezone to use (e.g., 'UTC', 'America/New_York')

### Methods

#### `formatDate(date: Date, format: keyof Locale['dateFormats']): string`

Formats a date using the current locale's format strings.

**Parameters:**

- `date`: The date to format
- `format`: The format key to use ('short', 'medium', 'long', 'full')

**Example:**

```typescript
const date = new Date();
dateTime.formatDate(date, 'short'); // "3/29/2024"
dateTime.formatDate(date, 'long'); // "March 29, 2024"
```

#### `getRelativeTime(key: keyof Locale['relativeTime']['past'], count?: number, isFuture?: boolean): string`

Gets a relative time string (e.g., "5 minutes ago", "in 2 hours").

**Parameters:**

- `key`: The relative time key (e.g., 'seconds', 'minutes', 'hours')
- `count`: The count to use (default: 1)
- `isFuture`: Whether to use future tense (default: false)

**Example:**

```typescript
dateTime.getRelativeTime('minutes', 5); // "5 minutes ago"
dateTime.getRelativeTime('hour', 1); // "1 hour ago"
dateTime.getRelativeTime('days', 2, true); // "in 2 days"
```

#### `setLocale(locale: LocaleKey): void`

Sets the current locale.

**Parameters:**

- `locale`: The locale to set (e.g., 'en', 'ar')

**Example:**

```typescript
dateTime.setLocale('ar');
```

#### `getCurrentLocale(): LocaleKey`

Gets the current locale.

**Returns:** The current locale key

**Example:**

```typescript
dateTime.getCurrentLocale(); // "en"
```

#### `getCurrentTimezone(): TimeZone`

Gets the current timezone.

**Returns:** The current timezone

**Example:**

```typescript
dateTime.getCurrentTimezone(); // "UTC"
```

## Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Run tests with coverage
bun run test:coverage

# Build the library
bun run build

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Format code
bun run format

# Type check
bun run tsc:check
```

### Git Hooks

This project uses Husky for Git hooks to ensure code quality. The following hooks are set up:

- **Pre-commit**: Runs before each commit to:
    - Format code using Prettier
    - Fix linting issues
    - Run tests
    - Type check
    - Stage the changes

These hooks are automatically installed when you run `bun install`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write tests for all new features
- Ensure all tests pass
- Update documentation as needed
- Follow the existing code style
- Add type definitions for all new functions
- Include JSDoc comments for public APIs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Kareem Sabra

## Acknowledgments

- Built with [Bun](https://bun.sh/)
- Tested with [Vitest](https://vitest.dev/)
- Type checking with [TypeScript](https://www.typescriptlang.org/)

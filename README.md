# Time Master

[![npm version](https://img.shields.io/npm/v/time-master.svg)](https://www.npmjs.com/package/time-master)
[![License](https://img.shields.io/npm/l/time-master.svg)](https://github.com/kareemsabra/time-master/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0-orange.svg)](https://bun.sh/)
[![CI](https://github.com/kareemsabra/time-master/actions/workflows/ci.yml/badge.svg)](https://github.com/kareemsabra/time-master/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/kareemsabra/time-master/badge.svg?branch=main)](https://coveralls.io/github/kareemsabra/time-master?branch=main)

A powerful and flexible time manipulation and formatting library for JavaScript and TypeScript. Built with performance and type safety in mind.

## Features

- 🚀 Built with TypeScript for type safety
- 📦 Zero dependencies
- 🔄 ESM and CommonJS support
- 🎯 Tree-shakeable
- ⚡ Bun-powered for maximum performance
- 📝 Comprehensive JSDoc documentation
- ✅ Full test coverage
- 🔍 Strict type checking

## Installation

```bash
# Using bun
bun add time-master

# Using npm
npm install time-master

# Using yarn
yarn add time-master

# Using pnpm
pnpm add time-master
```

## Quick Start

```typescript
import { one, two } from 'time-master';

// Basic usage
const result1 = one(); // 1
const result2 = two(); // 2

// TypeScript support
const timeMaster: TimeMaster = {
    one,
    two,
};
```

## API Reference

### Constants

#### `one()`

Returns the number 1.

```typescript
function one(): 1;
```

**Returns:** The literal type `1`

**Example:**

```typescript
import { one } from 'time-master';
const result = one(); // 1
```

#### `two()`

Returns the number 2.

```typescript
function two(): 2;
```

**Returns:** The literal type `2`

**Example:**

```typescript
import { two } from 'time-master';
const result = two(); // 2
```

### Types

#### `TimeMaster`

Type definition for the library's exports.

```typescript
type TimeMaster = {
    one: () => 1;
    two: () => 2;
};
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

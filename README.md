# Time Master

A powerful and flexible time manipulation and formatting library for JavaScript and TypeScript.

## Features

- 🚀 Built with TypeScript
- 📦 Zero dependencies
- 🔄 ESM and CommonJS support
- 🎯 Tree-shakeable
- ⚡ Bun-powered for maximum performance

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

## Usage

```typescript
import { one, two } from 'time-master';

// Basic usage examples will go here as the library grows
```

## API Reference

### Constants

- `one`: Returns the number 1
- `two`: Returns the number 2

More API documentation will be added as the library grows.

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
```

### Git Hooks

This project uses Husky for Git hooks to ensure code quality. The following hooks are set up:

- **Pre-commit**: Runs before each commit to:
    - Format code using Prettier
    - Fix linting issues
    - Run tests
    - Stage the changes

These hooks are automatically installed when you run `bun install`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Kareem Sabra

## Acknowledgments

- Built with [Bun](https://bun.sh/)
- Tested with [Vitest](https://vitest.dev/)

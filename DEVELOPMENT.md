# Development Guide

This guide is for developers who want to contribute to or run the Storybook documentation locally.

## Prerequisites

- Node.js 14.0.0 or higher
- npm or yarn package manager

## Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asudbury/use-fetch-with-callbacks.git
   cd use-fetch-with-callbacks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the package:**
   ```bash
   npm run build
   ```

## Running Storybook

Storybook provides interactive documentation and examples for the hook:

```bash
# Start Storybook development server
npm run storybook
```

This will start Storybook on `http://localhost:6006` with:

- **Basic Usage Examples**: Simple GET requests with callbacks
- **CRUD Operations**: Complete Create, Read, Update, Delete examples
- **Request Chaining**: Advanced sequential operation examples
- **Documentation**: Complete API reference

## Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

This creates a `storybook-static/` directory with the static site.

## Available Scripts

- `npm run build` - Build the TypeScript package
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build static Storybook site
- `npm run prepare` - Prepare package for publishing
- `npm run prepublishOnly` - Pre-publish build step

## Package Structure

```
├── src/
│   ├── useFetchWithCallbacks.ts  # Main hook implementation
│   ├── index.ts                  # Package exports
│   └── stories/                  # Storybook stories
│       ├── BasicUsage.stories.tsx
│       ├── CrudOperations.stories.tsx
│       ├── RequestChaining.stories.tsx
│       └── Documentation.stories.tsx
├── .storybook/                   # Storybook configuration
├── dist/                         # Built package (generated)
├── storybook-static/            # Built Storybook (generated)
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Add/update tests and stories
5. Ensure build passes: `npm run build`
6. Test with Storybook: `npm run storybook`
7. Commit your changes: `git commit -am 'Add feature'`
8. Push to the branch: `git push origin feature-name`
9. Create a Pull Request

## Testing Changes

Use Storybook to test your changes:

1. Start Storybook: `npm run storybook`
2. Navigate to different stories to test functionality
3. Check the console for any errors
4. Test all HTTP methods and chaining functionality

## Publishing

For maintainers only:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Build: `npm run build`
4. Publish: `npm publish`
5. Tag release: `git tag v1.x.x && git push origin v1.x.x`

## Help

If you encounter any issues:

1. Check the [GitHub Issues](https://github.com/asudbury/use-fetch-with-callbacks/issues)
2. Create a new issue with detailed information
3. Include code examples and error messages

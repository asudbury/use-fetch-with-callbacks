# Generated Documentation

This folder contains auto-generated API documentation for the `useFetchWithCallbacks` hook.

## Files

- **`api.json`** - Structured API data extracted from TypeScript source and JSDoc comments
- **`api.md`** - Markdown documentation generated from the JSON data

## Regeneration

To regenerate the documentation:

```bash
npm run docs:build
```

This will:

1. Parse the TypeScript source file (`src/useFetchWithCallbacks.ts`)
2. Extract JSDoc comments and interface definitions
3. Generate both JSON and Markdown documentation

## Usage in Storybook

The API Documentation story in Storybook reads from these generated files to display comprehensive documentation with proper formatting and navigation.

## Automation

Consider adding the documentation generation to your CI/CD pipeline to keep docs in sync with code changes:

```bash
# In your build script
npm run docs:build
npm run build-storybook
```

# Agent Instructions for use-fetch-with-callbacks

This document provides guidance for AI agents and GitHub Copilot when working with this repository.

## Project Overview

`use-fetch-with-callbacks` is a powerful React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration. It provides a declarative API for handling HTTP requests with full TypeScript type safety.

## Key Architectural Principles

1. **TypeScript First**: All code must be fully typed with no `any` types unless absolutely necessary
2. **React Hooks Best Practices**: Follow React hooks rules and conventions
3. **Zero Dependencies**: Keep the package lightweight - only React as a peer dependency
4. **Backward Compatibility**: Maintain API compatibility when making changes
5. **Comprehensive Testing**: All features must have corresponding tests

## Code Style & Conventions

### TypeScript
- Use explicit return types for all public functions
- Prefer interfaces over types for public APIs
- Use generics for type flexibility
- Enable strict mode in TypeScript configuration

### React Patterns
- Use functional components exclusively
- Follow hooks naming convention (`use` prefix)
- Properly manage component lifecycle and cleanup
- Use `useRef` for values that don't trigger re-renders
- Implement proper AbortController for request cancellation

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for types and interfaces
- Use descriptive names that reflect purpose
- Prefix boolean variables with `is`, `has`, or `should`

### Error Handling
- Always catch and properly handle errors
- Provide meaningful error messages
- Use custom Error types when appropriate
- Never silently fail

## Testing Standards

- Use Vitest as the testing framework
- Use React Testing Library for component testing
- Mock fetch API calls appropriately
- Test success, error, and edge cases
- Aim for high code coverage (>80%)
- Test TypeScript types with proper type assertions

## Documentation

- Maintain JSDoc comments for all public APIs
- Keep README.md up to date with examples
- Use TypeDoc for generating API documentation
- Include Storybook examples for visual documentation
- Document breaking changes clearly

## Build & Development

### Available Scripts
- `npm run build` - Build the TypeScript source
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run storybook` - Run Storybook locally
- `npm run docs:build` - Generate documentation

### Before Committing
- Run `npm run lint` to check for linting errors
- Run `npm run test` to ensure tests pass
- Run `npm run build` to verify build succeeds
- Format code with `npm run format`

Note: Pre-commit hooks will automatically format and lint code.

## Git Commit Standards

This project uses Conventional Commits specification. All commit messages must follow this format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes that don't modify src or test files
- `revert`: Revert previous commit

### Examples
```
feat: Add support for request timeout configuration
fix: Resolve memory leak in component unmount
docs: Update README with new examples
test: Add tests for error handling
```

Commitlint is configured to enforce these standards via the commit-msg hook.

## Security Considerations

- Never commit secrets or API keys
- Sanitize user inputs appropriately
- Keep dependencies up to date
- Address security vulnerabilities promptly
- Use AbortController to prevent memory leaks

## API Design Principles

1. **Intuitive**: API should be self-documenting and easy to understand
2. **Flexible**: Support various use cases without complexity
3. **Type-Safe**: Leverage TypeScript for compile-time safety
4. **Composable**: Allow chaining and combining operations
5. **Error-Resilient**: Handle errors gracefully with clear feedback

## Common Patterns

### Request Methods
All request methods (`fetchData`, `postData`, `putData`, `deleteData`, `patchData`) accept a `RequestParams<T>` object:

```typescript
type RequestParams<T> = {
  endpoint?: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onLoading?: (loading: boolean) => void;
};
```

### Request Chaining
The `chain()` API enables sequential request execution with per-step callbacks and overall success/error/finally handlers.

### AbortController Usage
Always create a new AbortController for each request and properly clean up on component unmount.

## Dependencies Management

- Regularly check for outdated packages with `npm outdated`
- Update dependencies cautiously, testing thoroughly
- Be mindful of breaking changes in major version updates
- Keep security vulnerabilities at zero
- Use `npm audit` to check for security issues

## When Making Changes

1. Understand the existing architecture before modifying
2. Make minimal, focused changes
3. Update tests to reflect changes
4. Update documentation if API changes
5. Ensure backward compatibility when possible
6. Run the full test suite before submitting
7. Update Storybook examples if UI/behavior changes

## Storybook

Storybook is used for interactive documentation and examples:
- Add stories for new features
- Keep stories up to date with API changes
- Use stories to demonstrate use cases
- Include edge cases and error scenarios

## CI/CD Pipeline

The project uses GitHub Actions for:
- Running tests on multiple Node versions
- Linting and formatting checks
- Building the package
- Deploying Storybook to GitHub Pages
- Publishing to npm (on main branch)

Ensure all CI checks pass before merging PRs.

## Questions or Clarifications

When in doubt:
1. Check existing code patterns
2. Review test cases for expected behavior
3. Consult the README and documentation
4. Follow React and TypeScript best practices
5. Prioritize user experience and developer experience

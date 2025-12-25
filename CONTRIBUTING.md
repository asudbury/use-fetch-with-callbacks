# Contributing to use-fetch-with-callbacks

Thank you for considering contributing to `use-fetch-with-callbacks`! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to foster an open and welcoming environment.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/use-fetch-with-callbacks.git`
3. Add upstream remote: `git remote add upstream https://github.com/asudbury/use-fetch-with-callbacks.git`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites

- Node.js 14.0.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Format code
npm run format

# Start Storybook for interactive development
npm run storybook
```

## Development Workflow

1. **Create a branch** from `main` for your feature or fix
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** following our code style and guidelines

3. **Write tests** for any new functionality

4. **Run the test suite** to ensure nothing breaks
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

5. **Commit your changes** using conventional commit format (see below)

6. **Push to your fork** and create a pull request

## Commit Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages must be formatted as:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring (neither fixes a bug nor adds a feature)
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **build**: Changes to build system or dependencies
- **ci**: Changes to CI configuration
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Examples

```bash
feat: Add request retry mechanism
fix: Resolve memory leak in component unmount
docs: Update README with new examples
test: Add tests for timeout handling
refactor: Simplify chain API implementation
```

### Pre-commit Hooks

Pre-commit hooks will automatically:
- Format your code with Prettier
- Lint your code with ESLint
- Validate your commit message format (via commitlint)

## Pull Request Process

1. **Update documentation** if you've changed APIs or added features
2. **Add tests** for new functionality
3. **Ensure all tests pass** and linting succeeds
4. **Update the README** if needed
5. **Add a changeset** describing your changes
6. **Request review** from maintainers
7. **Address review feedback** promptly

### PR Title Format

Use the same conventional commit format for PR titles:
```
feat: Add support for custom headers
fix: Resolve issue with request cancellation
```

## Code Style

### TypeScript

- Use TypeScript for all code
- Enable strict mode
- Avoid `any` types unless absolutely necessary
- Use explicit return types for functions
- Prefer interfaces over types for public APIs

### React

- Use functional components
- Follow React hooks rules
- Implement proper cleanup in effects
- Use descriptive variable names

### Formatting

- Code is automatically formatted with Prettier on commit
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas where valid

### Naming Conventions

- Use camelCase for variables and functions
- Use PascalCase for types, interfaces, and components
- Prefix boolean variables with `is`, `has`, or `should`
- Use descriptive names that convey purpose

## Testing

### Writing Tests

- Use Vitest and React Testing Library
- Test success cases, error cases, and edge cases
- Mock external dependencies appropriately
- Aim for high code coverage (>80%)

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```typescript
describe('Feature Name', () => {
  it('should handle success case', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should handle error case', () => {
    // Test implementation
  });

  it('should handle edge case', () => {
    // Test implementation
  });
});
```

## Documentation

### Code Documentation

- Add JSDoc comments for all public APIs
- Include parameter descriptions and return types
- Provide usage examples in comments

```typescript
/**
 * Fetches data from the specified endpoint.
 * 
 * @param params - Request parameters including endpoint, data, and callbacks
 * @returns Promise that resolves when the request completes
 * 
 * @example
 * ```typescript
 * fetchData({
 *   endpoint: '/users/1',
 *   onSuccess: (data) => console.log('User:', data),
 *   onError: (error) => console.error('Error:', error)
 * });
 * ```
 */
```

### README Updates

- Update README.md when adding features
- Include clear examples
- Keep the API reference up to date

### Storybook

- Add Storybook stories for new features
- Include interactive examples
- Document different use cases

## Questions?

If you have questions or need help:
- Open an issue for discussion
- Check existing issues and pull requests
- Review the documentation in the README

## Recognition

Contributors will be recognized in the project's documentation. Thank you for helping improve `use-fetch-with-callbacks`!

---

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

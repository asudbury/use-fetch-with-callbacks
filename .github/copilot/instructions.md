# GitHub Copilot Instructions for use-fetch-with-callbacks

## Project Context

You are working on `use-fetch-with-callbacks`, a React hook library for HTTP requests with callback support, request chaining, and TypeScript integration.

## Key Guidelines

### Code Style
- Write TypeScript code with strict typing (no `any` unless absolutely necessary)
- Use explicit return types for functions
- Follow React hooks conventions and rules
- Use camelCase for variables/functions, PascalCase for types/interfaces
- Add JSDoc comments for all public APIs

### React Patterns
- Use functional components only
- Properly implement cleanup in useEffect
- Use AbortController for cancellable requests
- Follow hooks rules (dependencies, conditional calls, etc.)

### Testing
- Write tests with Vitest and React Testing Library
- Mock fetch API calls appropriately
- Test success, error, and edge cases
- Include TypeScript type tests

### Commit Messages
Use Conventional Commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `test:` for tests
- `refactor:` for refactoring
- `chore:` for maintenance

Example: `feat: Add request timeout support`

### Key APIs
- `useFetchWithCallbacks<T>()` - Main hook
- `RequestParams<T>` - Configuration object for all request methods
- `chain()` - Sequential request execution
- `fetchMultipleData()` - Concurrent requests

### Important Patterns
1. All request methods accept optional `RequestParams<T>` with `endpoint`, `data`, and callbacks
2. AbortController is used for cancellation
3. Timeout is implemented with Promise.race
4. State updates use functional updates for consistency
5. Cleanup happens in useEffect return function

### Before Submitting Code
- Run `npm run lint` to check linting
- Run `npm run test` to verify tests pass
- Run `npm run build` to confirm builds successfully
- Ensure TypeScript has no errors
- Update documentation if API changes

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- DELETE and PATCH HTTP methods
- Enhanced error handling with better error messages
- Request chaining with DELETE and PATCH support

## [1.0.0] - 2025-07-05

### Added
- Initial release
- GET, POST, PUT HTTP methods with callback support
- Request chaining functionality
- Multiple concurrent requests support
- Request timeout with configurable duration
- Automatic request cancellation with AbortController
- TypeScript support with full type definitions
- Comprehensive JSDoc documentation
- Memory leak prevention with cleanup on unmount
- Error handling with detailed error messages
- Loading state management

### Features
- ✅ HTTP Methods: GET, POST, PUT, DELETE, PATCH
- ✅ Request Chaining: Sequential operations with fluent API
- ✅ Multiple Requests: Concurrent requests to different endpoints
- ✅ Request Timeout: Configurable timeout with automatic cancellation
- ✅ AbortController: Automatic request cancellation on unmount
- ✅ TypeScript: Full type safety and IntelliSense support
- ✅ Zero Dependencies: Lightweight with no external dependencies
- ✅ Flexible Configuration: Customizable headers, base URLs, and error handling

[Unreleased]: https://github.com/asudbury/use-fetch-with-callbacks/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/asudbury/use-fetch-with-callbacks/releases/tag/v1.0.0

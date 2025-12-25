# Security Policy

## Reporting Security Issues

If you discover a security vulnerability in `use-fetch-with-callbacks`, please report it by emailing the maintainers or opening a private security advisory on GitHub. Please do not report security vulnerabilities through public GitHub issues.

## Security Updates

We take security seriously and will respond to security issues as quickly as possible. Security updates will be released as patch versions and documented in the release notes.

## Current Security Status

### Production Dependencies

The production build of `use-fetch-with-callbacks` has **zero dependencies** except for React as a peer dependency. This minimizes the attack surface and security concerns for applications using this library.

### Development Dependencies

As of the last security audit:

#### Known Development-Time Vulnerabilities

The following moderate severity vulnerabilities exist in **development-only** dependencies (Storybook and related packages):

- **esbuild <=0.24.2**: Enables any website to send requests to development server
  - Affects: Storybook development server only
  - Impact: Development environment only, does not affect production builds
  - Mitigation: Only run Storybook in trusted development environments
  - Status: Waiting for Storybook to update to newer esbuild version

These vulnerabilities:
1. **Only affect the development environment** (Storybook)
2. **Do not affect the production build** of the library
3. **Do not affect applications** that use this library
4. Will be resolved when Storybook updates to newer versions of its dependencies

### Security Best Practices

When using this library:

1. **Keep React up to date** - Ensure you're using a supported version of React
2. **Validate user inputs** - Always sanitize and validate data before sending to APIs
3. **Use HTTPS** - Always use secure connections for API requests
4. **Implement proper authentication** - Use appropriate authentication mechanisms (e.g., JWT, OAuth)
5. **Handle sensitive data carefully** - Never log or expose sensitive information
6. **Set appropriate timeouts** - Use the timeout option to prevent hanging requests
7. **Implement proper error handling** - Don't expose sensitive error details to end users

### Automatic Request Cancellation

This library implements automatic request cancellation on component unmount using AbortController, which helps prevent:
- Memory leaks from pending requests
- State updates on unmounted components
- Unnecessary network traffic

## Supported Versions

We support the latest major version with security updates. Older versions may not receive security patches.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Security Features

- **AbortController Integration**: Automatic request cancellation prevents memory leaks
- **Timeout Support**: Configurable timeouts prevent hanging requests
- **Type Safety**: Full TypeScript support helps prevent runtime errors
- **No Hidden Dependencies**: Zero production dependencies (except React peer dependency)
- **Secure by Default**: No automatic credential inclusion or unsafe defaults

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine affected versions
2. Audit code to find similar problems
3. Prepare fixes for all supported versions
4. Release new versions as soon as possible
5. Clearly communicate the issue and fix in release notes

## Contact

For security concerns, please contact the maintainers through:
- GitHub Security Advisories: https://github.com/asudbury/use-fetch-with-callbacks/security/advisories
- GitHub Issues (for non-sensitive issues): https://github.com/asudbury/use-fetch-with-callbacks/issues

---

Last updated: December 2024

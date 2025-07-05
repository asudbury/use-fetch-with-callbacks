import { Meta } from '@storybook/react';

/**
 * # useFetchWithCallbacks
 *
 * A powerful React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration.
 *
 * ## Features
 *
 * - ✅ **Full HTTP Methods**: GET, POST, PUT, DELETE, PATCH with callback support
 * - ✅ **Request Chaining**: Sequential operations with fluent API
 * - ✅ **Multiple Requests**: Concurrent requests to different endpoints
 * - ✅ **Request Timeout**: Configurable timeout with automatic cancellation
 * - ✅ **AbortController**: Automatic request cancellation on unmount
 * - ✅ **TypeScript First**: Full type safety and IntelliSense support
 * - ✅ **Lightweight**: Zero dependencies except React
 * - ✅ **Flexible**: Customizable headers, base URLs, and error handling
 *
 * ## Installation
 *
 * ```bash
 * npm install use-fetch-with-callbacks
 * ```
 *
 * ## Basic Usage
 *
 * ```typescript
 * import useFetchWithCallbacks from 'use-fetch-with-callbacks';
 *
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 * }
 *
 * const UserComponent = () => {
 *   const { response, loading, error, fetchData } = useFetchWithCallbacks<User>('/users/1', {
 *     baseUrl: 'https://api.example.com',
 *     headers: { Authorization: 'Bearer token' },
 *     timeout: 5000
 *   });
 *
 *   const handleFetch = () => {
 *     fetchData(
 *       (data) => console.log('Success:', data),
 *       (error) => console.error('Error:', error),
 *       (loading) => console.log('Loading:', loading)
 *     );
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleFetch}>Fetch User</button>
 *       {loading && <p>Loading...</p>}
 *       {error && <p>Error: {error.message}</p>}
 *       {response && <p>Hello, {response.name}!</p>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ## Request Chaining
 *
 * ```typescript
 * const { chain } = useFetchWithCallbacks<User>('/users/1');
 *
 * // Execute multiple operations sequentially
 * await chain()
 *   .fetch((user) => console.log('1. Fetched:', user))
 *   .post({ name: 'John' }, (created) => console.log('2. Created:', created))
 *   .put({ name: 'Jane' }, (updated) => console.log('3. Updated:', updated))
 *   .delete((deleted) => console.log('4. Deleted:', deleted))
 *   .then((final) => console.log('All operations completed!'))
 *   .catch((error) => console.error('Chain failed:', error))
 *   .finally(() => console.log('Cleanup'))
 *   .execute();
 * ```
 *
 * ## All HTTP Methods
 *
 * ```typescript
 * const { fetchData, postData, putData, patchData, deleteData } = useFetchWithCallbacks<User>('/users/1');
 *
 * // GET request
 * fetchData(onSuccess, onError, onLoading);
 *
 * // POST request
 * postData(newUser, onSuccess, onError, onLoading);
 *
 * // PUT request
 * putData(updatedUser, onSuccess, onError, onLoading);
 *
 * // PATCH request
 * patchData(partialUpdate, onSuccess, onError, onLoading);
 *
 * // DELETE request
 * deleteData(onSuccess, onError, onLoading);
 * ```
 *
 * ## Configuration Options
 *
 * ```typescript
 * interface UseFetchOptions {
 *   baseUrl?: string;      // Base URL for all requests
 *   headers?: HeadersInit; // Default headers
 *   timeout?: number;      // Request timeout (default: 10000ms)
 * }
 * ```
 *
 * ## Error Handling
 *
 * The hook provides comprehensive error handling for:
 * - Network errors
 * - HTTP status errors
 * - Request timeouts
 * - Request cancellation
 *
 * ## TypeScript Support
 *
 * Full TypeScript support with proper type inference and IntelliSense.
 */

const meta: Meta = {
  title: 'useFetchWithCallbacks/Documentation',
  parameters: {
    docs: {
      page: () => null, // Use the component's JSDoc as documentation
    },
  },
};

export default meta;

// This creates a documentation-only story
export const Documentation = () => null;

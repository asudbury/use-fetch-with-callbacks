# useFetchWithCallbacks

A powerful React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration.

## ✨ Features

- 🔄 **Full HTTP Methods**: GET, POST, PUT, DELETE, PATCH with callback support
- 🔗 **Request Chaining**: Sequential operations with fluent API
- 📡 **Multiple Requests**: Concurrent requests to different endpoints
- ⏰ **Request Timeout**: Configurable timeout with automatic cancellation
- 🛑 **AbortController**: Automatic request cancellation on unmount
- 🎯 **TypeScript First**: Full type safety and IntelliSense support
- 📦 **Lightweight**: Zero dependencies except React
- 🔧 **Flexible**: Customizable headers, base URLs, and error handling

## 🚀 Installation

```bash
npm install use-fetch-with-callbacks
```

## � Interactive Documentation

Explore live examples and comprehensive documentation in our **Storybook**:

[**🚀 View Live Examples →**](https://asudbury.github.io/use-fetch-with-callbacks)

Or run locally:

```bash
git clone https://github.com/asudbury/use-fetch-with-callbacks.git
cd use-fetch-with-callbacks
npm install
npm run storybook
```

## �📋 Requirements

- React 18.0.0 or higher
- TypeScript 4.0+ (for TypeScript projects)

## 🔧 Basic Usage

```tsx
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = () => {
  const { response, loading, error, fetchData, postData, deleteData } =
    useFetchWithCallbacks<User>('/users/1', {
      baseUrl: 'https://api.example.com',
      headers: { Authorization: 'Bearer your-token' },
      timeout: 5000, // 5 second timeout
    });

  const handleFetch = () => {
    fetchData({
      onSuccess: data => console.log('User loaded:', data),
      onError: error => console.error('Failed to load user:', error),
      onLoading: loading => console.log('Loading state:', loading),
    });
  };

  const handleUpdate = () => {
    postData({
      data: { name: 'John Doe', email: 'john@example.com' },
      onSuccess: data => console.log('User updated:', data),
      onError: error => console.error('Update failed:', error),
    });
  };

  const handleDelete = () => {
    deleteData({
      onSuccess: data => console.log('User deleted:', data),
      onError: error => console.error('Delete failed:', error),
    });
  };

  return (
    <div>
      <button onClick={handleFetch}>Load User</button>
      <button onClick={handleUpdate}>Update User</button>
      <button onClick={handleDelete}>Delete User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>Hello, {response.name}!</p>}
    </div>
  );
};
```

## � API Reference

### `RequestParams<T>`

The `RequestParams<T>` type is used for all request methods (GET, POST, PUT, DELETE, PATCH) and for chainable operations. It allows you to specify the endpoint, request body, and callbacks for handling success, error, and loading states.

```typescript
type RequestParams<T> = {
  endpoint?: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onLoading?: (loading: boolean) => void;
};
```

**Properties:**

- `endpoint` (string, optional): Override the default endpoint for this request.
- `data` (unknown, optional): Data to send in the request body (for POST, PUT, PATCH).
- `onSuccess` ((data: T) => void, optional): Callback executed when the request succeeds.
- `onError` ((error: Error) => void, optional): Callback executed when the request fails.
- `onLoading` ((loading: boolean) => void, optional): Callback executed when loading state changes.

**Example:**

```tsx
fetchData({
  endpoint: '/users/1',
  onSuccess: user => console.log('Loaded user:', user),
  onError: error => console.error('Failed:', error),
  onLoading: loading => console.log('Loading:', loading),
});

postData({
  endpoint: '/users',
  data: { name: 'Jane' },
  onSuccess: user => console.log('Created:', user),
});
```

**Note:** Each chainable method (`fetch`, `post`, `put`, `patch`, `delete`) now accepts an optional `endpoint` as the first argument, allowing you to chain requests to different endpoints in a single workflow.

## 📡 Multiple Concurrent Requests

```tsx
const Dashboard = () => {
  const { fetchMultipleData } = useFetchWithCallbacks<any>('/', {
    baseUrl: 'https://api.example.com',
  });

  const loadDashboard = () => {
    fetchMultipleData({
      endpoints: ['/users', '/posts', '/comments'],
      onSuccess: results => {
        console.log('All data loaded:', results);
      },
      onError: error => console.error('Failed to load dashboard:', error),
    });
  };

  return <button onClick={loadDashboard}>Load Dashboard</button>;
};
```

## 🎛️ Advanced Configuration

```tsx
const api = useFetchWithCallbacks<ApiResponse>('/data', {
  baseUrl: 'https://api.example.com',
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
  timeout: 10000, // 10 second timeout
});
```


## 📝 API Reference

### `useFetchWithCallbacks<T>(endpoint, options?)`

**Parameters:**

- `endpoint` (string): The API endpoint path
- `options` (UseFetchOptions): Optional configuration

**Returns:** `FetchResult<T>`

### `FetchResult<T>`

```typescript
interface FetchResult<T> {
  response: T | null;
  loading: boolean;
  error: Error | null;
  requestCompleted: boolean;
  fetchData: (...) => Promise<void>;
  postData: (...) => Promise<void>;
  putData: (...) => Promise<void>;
  deleteData: (...) => Promise<void>;
  patchData: (...) => Promise<void>;
  fetchMultipleData: (...) => Promise<void>;
  chain: () => ChainableRequest<T>;
}
```

### `UseFetchOptions`

```typescript
interface UseFetchOptions {
  baseUrl?: string; // Base URL for all requests
  headers?: HeadersInit; // Default headers
  timeout?: number; // Request timeout (default: 10000ms)
}
```

### `RequestParams<T>`

The `RequestParams<T>` type is used for all request methods (GET, POST, PUT, DELETE, PATCH) and for chainable operations. It allows you to specify the endpoint, request body, and callbacks for handling success, error, and loading states.

```typescript
type RequestParams<T> = {
  endpoint?: string; // Optional
  data?: unknown; // Optional
  onSuccess?: (data: T) => void; // Optional
  onError?: (error: Error) => void; // Optional
  onLoading?: (loading: boolean) => void; // Optional
};
```

**Properties:**

- `endpoint` (string, optional): Override the default endpoint for this request.
- `data` (unknown, optional): Data to send in the request body (for POST, PUT, PATCH).
- `onSuccess` ((data: T) => void, optional): Callback executed when the request succeeds.
- `onError` ((error: Error) => void, optional): Callback executed when the request fails.
- `onLoading` ((loading: boolean) => void, optional): Callback executed when loading state changes.

**Example:**

```tsx
fetchData({
  endpoint: '/users/1',
  onSuccess: user => console.log('Loaded user:', user),
  onError: error => console.error('Failed:', error),
  onLoading: loading => console.log('Loading:', loading),
});

postData({
  endpoint: '/users',
  data: { name: 'Jane' },
  onSuccess: user => console.log('Created:', user),
});
```


### `ChainableRequest<T>`

The `chain` API allows you to compose and execute multiple requests in sequence, with full callback support for each step and for the overall chain. Each chainable method can override the endpoint and provide per-request callbacks.

**Available methods:**

- `fetch(params?: RequestParams<T>)`
- `post(params: RequestParams<T>)`
- `put(params: RequestParams<T>)`
- `delete(params?: RequestParams<T>)`
- `patch(params: RequestParams<T>)`
- `then(callback: (data: T) => void)`
- `catch(callback: (error: Error) => void)`
- `finally(callback: () => void)`
- `execute()`

**Example:**

```tsx
const { chain } = useFetchWithCallbacks<User>('/users/1', { baseUrl: 'https://api.example.com' });

chain()
  .fetch({
    endpoint: '/users/1',
    onSuccess: user => console.log('Loaded user:', user),
  })
  .put({
    endpoint: '/users/1',
    data: { name: 'Updated Name' },
    onSuccess: user => console.log('Updated user:', user),
  })
  .then(user => {
    // Called after the last successful request in the chain
    console.log('Chain completed. Final user:', user);
  })
  .catch(error => {
    // Called if any request in the chain fails
    console.error('Chain failed:', error);
  })
  .finally(() => {
    // Always called at the end
    console.log('Chain finished');
  })
  .execute();
```

> **Tip:** Each chainable method (`fetch`, `post`, `put`, `patch`, `delete`) accepts an optional `endpoint` and per-request callbacks, allowing you to build flexible, readable workflows.

## 🛡️ Error Handling

The hook provides comprehensive error handling:

```tsx
const { fetchData } = useFetchWithCallbacks<User>('/users/1');

fetchData(
  data => {
    // Success callback
    console.log('Success:', data);
  },
  error => {
    // Error callback - handles network errors, timeouts, HTTP errors
    if (error.message === 'Request timeout') {
      console.log('Request timed out');
    } else if (error.message.includes('404')) {
      console.log('User not found');
    } else {
      console.log('Other error:', error.message);
    }
  }
);
```

## 🔄 Request Cancellation

Requests are automatically cancelled when:

- Component unmounts
- New request is initiated
- Timeout is reached

```tsx
const { fetchData } = useFetchWithCallbacks<User>('/users/1');

// This request will be cancelled if component unmounts
fetchData(
  data => console.log('Success:', data),
  error => console.log('Error:', error)
);
```

## 🎯 TypeScript Support

Full TypeScript support with proper type inference:

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

// T is automatically inferred as User
const { response, fetchData } = useFetchWithCallbacks<User>('/users/1');

// response is typed as User | null
// fetchData callbacks receive properly typed data
```

## 📄 License

MIT © Adrian Sudbury


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/asudbury/use-fetch-with-callbacks/pulls).

- [Open a Pull Request](https://github.com/asudbury/use-fetch-with-callbacks/pulls)
- [View All Issues](https://github.com/asudbury/use-fetch-with-callbacks/issues)
- [Create a New Issue](https://github.com/asudbury/use-fetch-with-callbacks/issues/new)

## 📞 Support

If you have any questions or need help, please [Open an issue](https://github.com/asudbury/use-fetch-with-callbacks/issues) or use the links above.

---

Made with ❤️ for the React community

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
    fetchData(
      data => console.log('User loaded:', data),
      error => console.error('Failed to load user:', error),
      loading => console.log('Loading state:', loading)
    );
  };

  const handleUpdate = () => {
    postData(
      { name: 'John Doe', email: 'john@example.com' },
      data => console.log('User updated:', data),
      error => console.error('Update failed:', error)
    );
  };

  const handleDelete = () => {
    deleteData(
      data => console.log('User deleted:', data),
      error => console.error('Delete failed:', error)
    );
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

## 🔗 Request Chaining

Execute multiple HTTP requests sequentially:

```tsx
const UserWorkflow = () => {
  const { chain } = useFetchWithCallbacks<User>('/users/1', {
    baseUrl: 'https://api.example.com',
  });

  const handleWorkflow = async () => {
    // Execute a complex workflow
    await chain()
      .fetch(user => {
        console.log('1. Fetched user:', user);
      })
      .patch(
        {
          lastLogin: new Date(),
        },
        updated => {
          console.log('2. Updated login time:', updated);
        }
      )
      .put(
        {
          status: 'active',
        },
        activated => {
          console.log('3. Activated user:', activated);
        }
      )
      .delete(deleted => {
        console.log('4. Cleaned up:', deleted);
      })
      .then(finalResult => {
        console.log('✅ Workflow completed:', finalResult);
      })
      .catch(error => {
        console.error('❌ Workflow failed:', error);
      })
      .finally(() => {
        console.log('🔄 Workflow finished');
      })
      .execute();
  };

  return <button onClick={handleWorkflow}>Run Workflow</button>;
};
```

## 📡 Multiple Concurrent Requests

Fetch from multiple endpoints simultaneously:

```tsx
const Dashboard = () => {
  const { fetchMultipleData } = useFetchWithCallbacks<any>('/', {
    baseUrl: 'https://api.example.com',
  });

  const loadDashboard = () => {
    fetchMultipleData(
      ['/users', '/posts', '/comments'],
      results => {
        console.log('All data loaded:', results);
        // results[0] = users, results[1] = posts, results[2] = comments
      },
      error => console.error('Failed to load dashboard:', error)
    );
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
  response: T | null;           // The response data
  loading: boolean;             // Loading state
  error: Error | null;          // Error state
  requestCompleted: boolean;    // Whether any request completed
  fetchData: (...) => Promise<void>;     // GET request
  postData: (...) => Promise<void>;      // POST request
  putData: (...) => Promise<void>;       // PUT request
  deleteData: (...) => Promise<void>;    // DELETE request
  patchData: (...) => Promise<void>;     // PATCH request
  fetchMultipleData: (...) => Promise<void>; // Multiple concurrent requests
  chain: () => ChainableRequest<T>;      // Request chaining
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

### `ChainableRequest<T>`

```typescript
interface ChainableRequest<T> {
  fetch: (...) => ChainableRequest<T>;    // Add GET request to chain
  post: (...) => ChainableRequest<T>;     // Add POST request to chain
  put: (...) => ChainableRequest<T>;      // Add PUT request to chain
  delete: (...) => ChainableRequest<T>;   // Add DELETE request to chain
  patch: (...) => ChainableRequest<T>;    // Add PATCH request to chain
  then: (callback) => ChainableRequest<T>; // Success callback
  catch: (callback) => ChainableRequest<T>; // Error callback
  finally: (callback) => ChainableRequest<T>; // Cleanup callback
  execute: () => Promise<void>;           // Execute the chain
}
```

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

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for the React community

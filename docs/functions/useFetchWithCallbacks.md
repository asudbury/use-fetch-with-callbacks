[**use-fetch-with-callbacks**](../README.md)

---

[use-fetch-with-callbacks](../globals.md) / useFetchWithCallbacks

# Function: useFetchWithCallbacks()

> **useFetchWithCallbacks**\<`T`\>(`endpoint`, `options?`): [`FetchResult`](../interfaces/FetchResult.md)\<`T`\>

Defined in: [useFetchWithCallbacks.ts:200](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L200)

A React hook that provides fetch functionality with callback support for success, error, and loading states

## Type Parameters

### T

`T`

The type of data expected from the API response

## Parameters

### endpoint

`string`

The API endpoint path to make requests to

### options?

[`UseFetchOptions`](../type-aliases/UseFetchOptions.md)

Optional configuration including base URL and headers

## Returns

[`FetchResult`](../interfaces/FetchResult.md)\<`T`\>

An object containing response data, loading state, error state, and request methods

## Examples

### Chained Example: Fetching Two Endpoints

```tsx
import React, { useState } from 'react';
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function App() {
  const { loading, error, fetchData } = useFetchWithCallbacks<string>('https://jsonplaceholder.typicode.com/users/1');
  const [firstResponse, setFirstResponse] = useState<string | null>(null);
  const [secondResponse, setSecondResponse] = useState<string | null>(null);

  const handleSuccess = (data?: string) => {
    setFirstResponse(data ?? null);
    fetchData({ endpoint: 'https://jsonplaceholder.typicode.com/posts/1', onSuccess: (data?: string) => {
      setSecondResponse(data ?? null);
    }});
  };

  const handleFetch = () => {
    setFirstResponse(null);
    setSecondResponse(null);
    fetchData({ onSuccess: handleSuccess });
  };

  return (
    <>
      <button onClick={handleFetch}>Load Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {firstResponse && (
        <>
          <hr />
          <div>1st response</div>
          <pre>{JSON.stringify(firstResponse, null, 2)}</pre>
        </>
      )}

      {secondResponse && (
        <>
          <hr />
          <div>2nd response</div>
          <pre>{JSON.stringify(secondResponse, null, 2)}</pre>
        </>
      )}
    </>
  );
}
```

Basic usage:

```typescript
const { response, loading, error, fetchData } = useFetchWithCallbacks<User>(
  '/users/1',
  {
    baseUrl: 'https://api.example.com',
    headers: { Authorization: 'Bearer token' },
  }
);

// Fetch data with callbacks
fetchData({
  onSuccess: data?: User => console.log('Success:', data),
  onError: error => console.error('Error:', error),
  onLoading: loading => console.log('Loading:', loading)
});
```

// Quick Start (Duplicate)
```typescript
const { response, loading, error, fetchData } = useFetchWithCallbacks<User>('/users/1', {
  baseUrl: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer token' }
});

// Fetch data with callbacks
fetchData({
  onSuccess: (data?: User) => console.log('Success:', data),
  onError: (error) => console.error('Error:', error),
  onLoading: (loading) => console.log('Loading:', loading)
});
```

Chaining operations with multiple endpoints:

```typescript
const { chain } = useFetchWithCallbacks<User>('/users/1', {
  baseUrl: 'https://api.example.com',
});

// Chain multiple operations to different endpoints
chain()
  .fetch({ endpoint: '/users/1', onSuccess: data?: User => console.log('Fetched user 1:', data) })
  .post({ endpoint: '/users', data: { name: 'John' }, onSuccess: data?: User => console.log('Posted:', data) })
  .put({ endpoint: '/users/2', data: { name: 'Jane' }, onSuccess: data?: User => console.log('Updated:', data) })
  .then(finalData?: User => console.log('All operations completed:', finalData))
  .catch(error => console.error('Chain failed:', error))
  .finally(() => console.log('Chain finished'))
  .execute();
```

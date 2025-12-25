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
fetchData(
  data => console.log('Success:', data),
  error => console.error('Error:', error),
  loading => console.log('Loading:', loading)
);
```

Chaining operations with multiple endpoints:

```typescript
const { chain } = useFetchWithCallbacks<User>('/users/1', {
  baseUrl: 'https://api.example.com',
});

// Chain multiple operations to different endpoints
chain()
  .fetch('/users/1', data => console.log('Fetched user 1:', data))
  .post('/users', { name: 'John' }, data => console.log('Posted:', data))
  .put('/users/2', { name: 'Jane' }, data => console.log('Updated:', data))
  .then(finalData => console.log('All operations completed:', finalData))
  .catch(error => console.error('Chain failed:', error))
  .finally(() => console.log('Chain finished'))
  .execute();
```

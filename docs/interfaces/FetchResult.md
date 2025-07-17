[**use-fetch-with-callbacks**](../README.md)

***

[use-fetch-with-callbacks](../globals.md) / FetchResult

# Interface: FetchResult\<T\>

Defined in: [useFetchWithCallbacks.ts:94](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L94)

Result object returned by the useFetchWithCallbacks hook

## Type Parameters

### T

`T`

The type of data expected from the API response

## Properties

### chain()

> **chain**: () => [`ChainableRequest`](ChainableRequest.md)\<`T`\>

Defined in: [useFetchWithCallbacks.ts:155](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L155)

Provides a chainable interface for sequential operations

#### Returns

[`ChainableRequest`](ChainableRequest.md)\<`T`\>

A chainable object with then, catch, and finally methods

***

### deleteData()

> **deleteData**: (`params?`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:130](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L130)

Performs a DELETE request to the specified endpoint

#### Parameters

##### params?

`RequestParams`\<`T`\>

Request parameters (callbacks, etc)

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request completes

***

### error

> **error**: `null` \| `Error`

Defined in: [useFetchWithCallbacks.ts:100](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L100)

Any error that occurred during the request, null if no error

***

### fetchData()

> **fetchData**: (`params?`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:109](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L109)

Performs a GET request to the specified endpoint

#### Parameters

##### params?

`RequestParams`\<`T`\>

Request parameters (callbacks, etc)

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request completes

***

### fetchMultipleData()

> **fetchMultipleData**: (`params`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:144](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L144)

Performs multiple GET requests to different endpoints concurrently

#### Parameters

##### params

Object containing endpoints and optional callbacks

###### endpoints

`string`[]

###### onError?

(`error`) => `void`

###### onLoading?

(`loading`) => `void`

###### onSuccess?

(`data`) => `void`

#### Returns

`Promise`\<`void`\>

Promise that resolves when all requests complete

***

### loading

> **loading**: `boolean`

Defined in: [useFetchWithCallbacks.ts:98](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L98)

Whether a request is currently in progress

***

### patchData()

> **patchData**: (`params`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:137](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L137)

Performs a PATCH request to the specified endpoint

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (data, callbacks, etc)

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request completes

***

### postData()

> **postData**: (`params`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:116](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L116)

Performs a POST request to the specified endpoint

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (data, callbacks, etc)

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request completes

***

### putData()

> **putData**: (`params`) => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:123](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L123)

Performs a PUT request to the specified endpoint

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (data, callbacks, etc)

#### Returns

`Promise`\<`void`\>

Promise that resolves when the request completes

***

### requestCompleted

> **requestCompleted**: `boolean`

Defined in: [useFetchWithCallbacks.ts:102](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L102)

Whether at least one request has been completed (successfully or with error)

***

### response

> **response**: `null` \| `T`

Defined in: [useFetchWithCallbacks.ts:96](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L96)

The response data from the API call, null if no data has been fetched yet

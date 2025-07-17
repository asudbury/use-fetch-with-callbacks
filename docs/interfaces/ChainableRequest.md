[**use-fetch-with-callbacks**](../README.md)

***

[use-fetch-with-callbacks](../globals.md) / ChainableRequest

# Interface: ChainableRequest\<T\>

Defined in: [useFetchWithCallbacks.ts:42](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L42)

Chainable request interface for sequential API operations

## Type Parameters

### T

`T`

## Properties

### catch()

> **catch**: (`callback`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:77](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L77)

Adds an error callback to be executed if any operation fails

#### Parameters

##### callback

(`error`) => `void`

Function to execute on error

#### Returns

`ChainableRequest`\<`T`\>

***

### delete()

> **delete**: (`params?`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:62](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L62)

Performs a DELETE request as part of the chain

#### Parameters

##### params?

`RequestParams`\<`T`\>

Request parameters (endpoint, callbacks, etc)

#### Returns

`ChainableRequest`\<`T`\>

***

### execute()

> **execute**: () => `Promise`\<`void`\>

Defined in: [useFetchWithCallbacks.ts:87](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L87)

Executes the chained operations sequentially

#### Returns

`Promise`\<`void`\>

Promise that resolves when all operations complete

***

### fetch()

> **fetch**: (`params?`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:47](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L47)

Performs a GET request as part of the chain

#### Parameters

##### params?

`RequestParams`\<`T`\>

Request parameters (endpoint, callbacks, etc)

#### Returns

`ChainableRequest`\<`T`\>

***

### finally()

> **finally**: (`callback`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:82](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L82)

Adds a callback to be executed after all operations complete (success or error)

#### Parameters

##### callback

() => `void`

Function to execute finally

#### Returns

`ChainableRequest`\<`T`\>

***

### patch()

> **patch**: (`params`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:67](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L67)

Performs a PATCH request as part of the chain

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (endpoint, data, callbacks, etc)

#### Returns

`ChainableRequest`\<`T`\>

***

### post()

> **post**: (`params`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:52](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L52)

Performs a POST request as part of the chain

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (endpoint, data, callbacks, etc)

#### Returns

`ChainableRequest`\<`T`\>

***

### put()

> **put**: (`params`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:57](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L57)

Performs a PUT request as part of the chain

#### Parameters

##### params

`RequestParams`\<`T`\>

Request parameters (endpoint, data, callbacks, etc)

#### Returns

`ChainableRequest`\<`T`\>

***

### then()

> **then**: (`callback`) => `ChainableRequest`\<`T`\>

Defined in: [useFetchWithCallbacks.ts:72](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L72)

Adds a success callback to be executed after all operations complete

#### Parameters

##### callback

(`data`) => `void`

Function to execute on success

#### Returns

`ChainableRequest`\<`T`\>

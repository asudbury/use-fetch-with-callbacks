[**use-fetch-with-callbacks**](../README.md)

---

[use-fetch-with-callbacks](../globals.md) / UseFetchOptions

# Type Alias: UseFetchOptions

> **UseFetchOptions** = `object`

Defined in: [useFetchWithCallbacks.ts:10](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L10)

Options to configure the behavior of the `useFetchWithCallbacks` hook.

## Properties

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [useFetchWithCallbacks.ts:11](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L11)

An optional base URL to prepend to all fetch requests.

---

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\> \| `Headers`

Defined in: [useFetchWithCallbacks.ts:12](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L12)

Optional HTTP headers to include with each request. Can be a plain object or a `Headers` instance.

---

### timeout?

> `optional` **timeout**: `number`

Defined in: [useFetchWithCallbacks.ts:13](https://github.com/asudbury/use-fetch-with-callbacks/blob/753d5bc18fd69390abbff6986e0c47905271a8d3/src/useFetchWithCallbacks.ts#L13)

Optional timeout in milliseconds for the fetch request. If specified, the request will be aborted if it takes longer than this duration.

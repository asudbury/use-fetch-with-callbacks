# API Documentation

## Interfaces

### FetchResult<T>

Result object returned by the useFetchWithCallbacks hook
@template T - The type of data expected from the API response

#### Properties

- **fetchData**: `(`
  The response data from the API call, null if no data has been fetched yet */ Whether a request is currently in progress */ Any error that occurred during the request, null if no error */ Whether at least one request has been completed (successfully or with error) */ Performs a GET request to the specified endpoint @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when the request completes

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **postData**: `(`
  Performs a POST request to the specified endpoint @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when the request completes

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **putData**: `(`
  Performs a PUT request to the specified endpoint @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when the request completes

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **deleteData**: `(`
  Performs a DELETE request to the specified endpoint @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when the request completes

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **patchData**: `(`
  Performs a PATCH request to the specified endpoint @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when the request completes

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **fetchMultipleData**: `(`
  Performs multiple GET requests to different endpoints concurrently @param endpoints - Array of endpoint paths to fetch from @param onSuccess - Optional callback executed when all requests succeed @param onError - Optional callback executed when any request fails @param onLoading - Optional callback executed when loading state changes @returns Promise that resolves when all requests complete

- **endpoints**: `string[]`
  Property endpoints

- **onSuccess?**: `(data: unknown[]) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **chain**: `() => ChainableRequest<T>`
  Provides a chainable interface for sequential operations @returns A chainable object with then, catch, and finally methods

### ChainableRequest<T>

Chainable request interface for sequential operations
@template T - The type of data expected from the API response

#### Properties

- **fetch**: `(`
  Performs a GET request and returns a chainable object @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns A chainable object for further operations

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **post**: `(`
  Performs a POST request and returns a chainable object @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns A chainable object for further operations

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **put**: `(`
  Performs a PUT request and returns a chainable object @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns A chainable object for further operations

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **delete**: `(`
  Performs a DELETE request and returns a chainable object @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns A chainable object for further operations

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **patch**: `(`
  Performs a PATCH request and returns a chainable object @param data - The data to send in the request body @param onSuccess - Optional callback executed when the request succeeds @param onError - Optional callback executed when the request fails @param onLoading - Optional callback executed when loading state changes @returns A chainable object for further operations

- **data**: `unknown`
  Property data

- **onSuccess?**: `(data: T) => void`
  Property onSuccess

- **onError?**: `(error: Error) => void`
  Property onError

- **onLoading?**: `(loading: boolean) => void`
  Property onLoading

- **execute**: `() => Promise<void>`
  Executes the chained operations sequentially @returns Promise that resolves when all operations complete

- **then**: `(callback: (data: T) => void) => ChainableRequest<T>`
  Adds a success callback to be executed after all operations complete @param callback - Function to execute on success @returns A chainable object for further operations

- **catch**: `(callback: (error: Error) => void) => ChainableRequest<T>`
  Adds an error callback to be executed if any operation fails @param callback - Function to execute on error @returns A chainable object for further operations

- **finally**: `(callback: () => void) => ChainableRequest<T>`
  Adds a callback to be executed after all operations complete (success or error) @param callback - Function to execute finally @returns A chainable object for further operations

### UseFetchOptions

Configuration options for the useFetchWithCallbacks hook


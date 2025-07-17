/**
 * Options to configure the behavior of the `useFetchWithCallbacks` hook.
 *
 * @typedef {Object} UseFetchOptions
 * @property {string} [baseUrl] - Optional base URL to prepend to all fetch requests. Useful for setting a common API root.
 * @property {Record<string, string> | Headers} [headers] - Optional HTTP headers to include with each request. Can be a plain object or a `Headers` instance. Commonly used for authentication or content type.
 * @property {number} [timeout] - Optional timeout in milliseconds for the fetch request. If specified, the request will be aborted if it takes longer than this duration. Default is 10000ms.
 */
export type UseFetchOptions = {
  baseUrl?: string;
  headers?: Record<string, string> | Headers;
  timeout?: number;
};

/**
 * Parameters for a request operation, used for both direct and chainable methods.
 *
 * @template T Type of data expected from the API response.
 * @typedef {Object} RequestParams
 * @property {string} [endpoint] - Optional endpoint to override the default for this request. Allows targeting different API paths per request.
 * @property {unknown} [data] - Optional data to send in the request body (for POST, PUT, PATCH). Should be serializable to JSON.
 * @property {(data: T) => void} [onSuccess] - Optional callback executed when the request succeeds. Receives the parsed response data.
 * @property {(error: Error) => void} [onError] - Optional callback executed when the request fails. Receives the error object.
 * @property {(loading: boolean) => void} [onLoading] - Optional callback executed when loading state changes. Useful for custom loading indicators.
 */
export type RequestParams<T> = {
  endpoint?: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  onLoading?: (loading: boolean) => void;
};

/**
 * Chainable request interface for sequential API operations.
 *
 * Enables chaining multiple API requests (GET, POST, PUT, DELETE, PATCH) and attaching callbacks for success, error, and completion.
 * Each method adds an operation to the chain, which is executed in order when `execute()` is called.
 *
 * @template T Type of data expected from the API response.
 *
 * @example
 * chain()
 *   .fetch({ endpoint: '/users/1' })
 *   .post({ endpoint: '/users', data: { name: 'John' } })
 *   .then((finalData) => console.log(finalData))
 *   .catch((error) => console.error(error))
 *   .finally(() => console.log('Chain finished'))
 *   .execute();
 */
export interface ChainableRequest<T> {
  /**
   * Adds a GET request to the chain.
   * @param params - Request parameters (endpoint, callbacks, etc)
   * @returns The chainable request object for further chaining.
   */
  fetch: (params?: RequestParams<T>) => ChainableRequest<T>;

  /**
   * Adds a POST request to the chain.
   * @param params - Request parameters (endpoint, data, callbacks, etc)
   * @returns The chainable request object for further chaining.
   */
  post: (params: RequestParams<T>) => ChainableRequest<T>;

  /**
   * Adds a PUT request to the chain.
   * @param params - Request parameters (endpoint, data, callbacks, etc)
   * @returns The chainable request object for further chaining.
   */
  put: (params: RequestParams<T>) => ChainableRequest<T>;

  /**
   * Adds a DELETE request to the chain.
   * @param params - Request parameters (endpoint, callbacks, etc)
   * @returns The chainable request object for further chaining.
   */
  delete: (params?: RequestParams<T>) => ChainableRequest<T>;

  /**
   * Adds a PATCH request to the chain.
   * @param params - Request parameters (endpoint, data, callbacks, etc)
   * @returns The chainable request object for further chaining.
   */
  patch: (params: RequestParams<T>) => ChainableRequest<T>;

  /**
   * Adds a success callback to be executed after all operations complete.
   * @param callback - Function to execute on success, receives the final response data.
   * @returns The chainable request object for further chaining.
   */
  then: (callback: (data: T) => void) => ChainableRequest<T>;

  /**
   * Adds an error callback to be executed if any operation fails.
   * @param callback - Function to execute on error, receives the error object.
   * @returns The chainable request object for further chaining.
   */
  catch: (callback: (error: Error) => void) => ChainableRequest<T>;

  /**
   * Adds a callback to be executed after all operations complete (success or error).
   * @param callback - Function to execute finally.
   * @returns The chainable request object for further chaining.
   */
  finally: (callback: () => void) => ChainableRequest<T>;

  /**
   * Executes the chained operations sequentially.
   * @returns Promise that resolves when all operations complete.
   */
  execute: () => Promise<void>;
}

/**
 * Result object returned by the useFetchWithCallbacks hook.
 *
 * Provides state and methods for performing API requests, including chainable operations and concurrent fetches.
 *
 * @template T Type of data expected from the API response.
 * @property {T | null} response - The response data from the API call, or null if no data has been fetched yet.
 * @property {boolean} loading - Whether a request is currently in progress.
 * @property {Error | null} error - Any error that occurred during the request, or null if no error.
 * @property {boolean} requestCompleted - Whether at least one request has been completed (successfully or with error).
 * @property {(params?: RequestParams<T>) => Promise<void>} fetchData - Performs a GET request to the specified endpoint.
 * @property {(params: RequestParams<T>) => Promise<void>} postData - Performs a POST request to the specified endpoint.
 * @property {(params: RequestParams<T>) => Promise<void>} putData - Performs a PUT request to the specified endpoint.
 * @property {(params?: RequestParams<T>) => Promise<void>} deleteData - Performs a DELETE request to the specified endpoint.
 * @property {(params: RequestParams<T>) => Promise<void>} patchData - Performs a PATCH request to the specified endpoint.
 * @property {(params: { endpoints: string[]; onSuccess?: (data: unknown[]) => void; onError?: (error: Error) => void; onLoading?: (loading: boolean) => void; }) => Promise<void>} fetchMultipleData - Performs multiple GET requests concurrently.
 * @property {() => ChainableRequest<T>} chain - Provides a chainable interface for sequential operations.
 */
export interface FetchResult<T> {
  response: T | null;
  loading: boolean;
  error: Error | null;
  requestCompleted: boolean;
  fetchData: (params?: RequestParams<T>) => Promise<void>;
  postData: (params: RequestParams<T>) => Promise<void>;
  putData: (params: RequestParams<T>) => Promise<void>;
  deleteData: (params?: RequestParams<T>) => Promise<void>;
  patchData: (params: RequestParams<T>) => Promise<void>;
  fetchMultipleData: (params: {
    endpoints: string[];
    onSuccess?: (data: unknown[]) => void;
    onError?: (error: Error) => void;
    onLoading?: (loading: boolean) => void;
  }) => Promise<void>;
  chain: () => ChainableRequest<T>;
}

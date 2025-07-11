import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Result object returned by the useFetchWithCallbacks hook
 * @template T - The type of data expected from the API response
 */
export interface FetchResult<T> {
  /** The response data from the API call, null if no data has been fetched yet */
  response: T | null;
  /** Whether a request is currently in progress */
  loading: boolean;
  /** Any error that occurred during the request, null if no error */
  error: Error | null;
  /** Whether at least one request has been completed (successfully or with error) */
  requestCompleted: boolean;
  /**
   * Performs a GET request to the specified endpoint
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when the request completes
   */
  fetchData: (
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Performs a POST request to the specified endpoint
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when the request completes
   */
  postData: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Performs a PUT request to the specified endpoint
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when the request completes
   */
  putData: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Performs a DELETE request to the specified endpoint
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when the request completes
   */
  deleteData: (
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Performs a PATCH request to the specified endpoint
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when the request completes
   */
  patchData: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Performs multiple GET requests to different endpoints concurrently
   * @param endpoints - Array of endpoint paths to fetch from
   * @param onSuccess - Optional callback executed when all requests succeed
   * @param onError - Optional callback executed when any request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns Promise that resolves when all requests complete
   */
  fetchMultipleData: (
    endpoints: string[],
    onSuccess?: (data: unknown[]) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => Promise<void>;
  /**
   * Provides a chainable interface for sequential operations
   * @returns A chainable object with then, catch, and finally methods
   */
  chain: () => ChainableRequest<T>;
}

/**
 * Chainable request interface for sequential operations
 * @template T - The type of data expected from the API response
 */
export interface ChainableRequest<T> {
  /**
   * Performs a GET request and returns a chainable object
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns A chainable object for further operations
   */
  fetch: (
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => ChainableRequest<T>;
  /**
   * Performs a POST request and returns a chainable object
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns A chainable object for further operations
   */
  post: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => ChainableRequest<T>;
  /**
   * Performs a PUT request and returns a chainable object
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns A chainable object for further operations
   */
  put: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => ChainableRequest<T>;
  /**
   * Performs a DELETE request and returns a chainable object
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns A chainable object for further operations
   */
  delete: (
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => ChainableRequest<T>;
  /**
   * Performs a PATCH request and returns a chainable object
   * @param data - The data to send in the request body
   * @param onSuccess - Optional callback executed when the request succeeds
   * @param onError - Optional callback executed when the request fails
   * @param onLoading - Optional callback executed when loading state changes
   * @returns A chainable object for further operations
   */
  patch: (
    data: unknown,
    onSuccess?: (data: T) => void,
    onError?: (error: Error) => void,
    onLoading?: (loading: boolean) => void
  ) => ChainableRequest<T>;
  /**
   * Executes the chained operations sequentially
   * @returns Promise that resolves when all operations complete
   */
  execute: () => Promise<void>;
  /**
   * Adds a success callback to be executed after all operations complete
   * @param callback - Function to execute on success
   * @returns A chainable object for further operations
   */
  then: (callback: (data: T) => void) => ChainableRequest<T>;
  /**
   * Adds an error callback to be executed if any operation fails
   * @param callback - Function to execute on error
   * @returns A chainable object for further operations
   */
  catch: (callback: (error: Error) => void) => ChainableRequest<T>;
  /**
   * Adds a callback to be executed after all operations complete (success or error)
   * @param callback - Function to execute finally
   * @returns A chainable object for further operations
   */
  finally: (callback: () => void) => ChainableRequest<T>;
}

/**
 * Configuration options for the useFetchWithCallbacks hook
 */
export interface UseFetchOptions {
  /** Base URL to prepend to all endpoint paths */
  baseUrl?: string;
  /** Additional headers to include in all requests */
  headers?: Record<string, string> | Headers;
  /** Request timeout in milliseconds (default: 10000) */
  timeout?: number;
}

/**
 * A React hook that provides fetch functionality with callback support for success, error, and loading states
 *
 * @template T - The type of data expected from the API response
 * @param endpoint - The API endpoint path to make requests to
 * @param options - Optional configuration including base URL and headers
 * @returns An object containing response data, loading state, error state, and request methods
 *
 * @example
 * Basic usage:
 * ```typescript
 * const { response, loading, error, fetchData } = useFetchWithCallbacks<User>('/users/1', {
 *   baseUrl: 'https://api.example.com',
 *   headers: { 'Authorization': 'Bearer token' }
 * });
 *
 * // Fetch data with callbacks
 * fetchData(
 *   (data) => console.log('Success:', data),
 *   (error) => console.error('Error:', error),
 *   (loading) => console.log('Loading:', loading)
 * );
 * ```
 *
 * @example
 * Chaining operations:
 * ```typescript
 * const { chain } = useFetchWithCallbacks<User>('/users/1', {
 *   baseUrl: 'https://api.example.com'
 * });
 *
 * // Chain multiple operations
 * chain()
 *   .fetch((data) => console.log('Fetched:', data))
 *   .post({ name: 'John' }, (data) => console.log('Posted:', data))
 *   .put({ name: 'Jane' }, (data) => console.log('Updated:', data))
 *   .then((finalData) => console.log('All operations completed:', finalData))
 *   .catch((error) => console.error('Chain failed:', error))
 *   .finally(() => console.log('Chain finished'))
 *   .execute();
 * ```
 */
const useFetchWithCallbacks = <T>(
  endpoint: string,
  options?: UseFetchOptions
): FetchResult<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [requestCompleted, setRequestCompleted] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const baseUrl = options?.baseUrl ?? '';
  const timeout = options?.timeout ?? 10000;
  const headers = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };

  const setLoadingState = (
    isLoading: boolean,
    onLoading?: (loading: boolean) => void
  ) => {
    setLoading(isLoading);
    if (onLoading) {
      onLoading(isLoading);
    }
  };

  const executeMultipleRequest = useCallback(
    async (
      fetchFn: (abortSignal: AbortSignal) => Promise<unknown[]>,
      onSuccess?: (data: unknown[]) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) => {
      // Cancel any ongoing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setLoadingState(true, onLoading);
      setError(null);
      setRequestCompleted(false);

      try {
        const data = await fetchFn(abortController.signal);

        // Check if request was aborted
        if (abortController.signal.aborted) {
          return;
        }

        setResponse(data as T);
        setRequestCompleted(true);
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (err: unknown) {
        // Don't set error if request was aborted
        if (abortController.signal.aborted) {
          return;
        }

        const errorObj = err instanceof Error ? err : new Error(String(err));
        setError(errorObj);
        if (onError) {
          onError(errorObj);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoadingState(false, onLoading);
        }
      }
    },
    [timeout]
  );

  const executeRequest = useCallback(
    async (
      fetchFn: (abortSignal: AbortSignal) => Promise<T>,
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) => {
      // Cancel any ongoing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setLoadingState(true, onLoading);
      setError(null);
      setRequestCompleted(false);

      try {
        const data = await fetchFn(abortController.signal);

        // Check if request was aborted
        if (abortController.signal.aborted) {
          return;
        }

        setResponse(data);
        setRequestCompleted(true);
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (err: unknown) {
        // Don't set error if request was aborted
        if (abortController.signal.aborted) {
          return;
        }

        const errorObj = err instanceof Error ? err : new Error(String(err));
        setError(errorObj);
        if (onError) {
          onError(errorObj);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoadingState(false, onLoading);
        }
      }
    },
    [timeout]
  );

  // Cleanup effect to abort requests when component unmounts
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const fetchData = useCallback(
    (
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeRequest(
        async (abortSignal: AbortSignal) => {
          const url = `${baseUrl}${endpoint}`;
          const res = await Promise.race([
            fetch(url, { method: 'GET', headers, signal: abortSignal }),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), timeout)
            ),
          ]);

          if (!res.ok) {
            const errorText = await res.text();
            let errorMessage = 'An error occurred';
            try {
              const errorJson = JSON.parse(errorText);
              errorMessage = errorJson.message || errorMessage;
            } catch {
              errorMessage = errorText || errorMessage;
            }
            throw new Error(errorMessage);
          }

          const json = await res.json();
          return json as T;
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, endpoint, headers, executeRequest, timeout]
  );

  const postData = useCallback(
    (
      data: unknown,
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeRequest(
        async (abortSignal: AbortSignal) => {
          const url = `${baseUrl}${endpoint}`;
          const res = await Promise.race([
            fetch(url, {
              method: 'POST',
              headers,
              body: JSON.stringify(data),
              signal: abortSignal,
            }),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), timeout)
            ),
          ]);

          if (!res.ok) {
            const errorText = await res.text();
            let errorMessage = 'An error occurred';
            try {
              const errorJson = JSON.parse(errorText);
              errorMessage = errorJson.message || errorMessage;
            } catch {
              errorMessage = errorText || errorMessage;
            }
            throw new Error(errorMessage);
          }

          const json = await res.json();
          return json as T;
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, endpoint, headers, executeRequest, timeout]
  );

  const putData = useCallback(
    (
      data: unknown,
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeRequest(
        async (abortSignal: AbortSignal) => {
          const url = `${baseUrl}${endpoint}`;
          const res = await Promise.race([
            fetch(url, {
              method: 'PUT',
              headers,
              body: JSON.stringify(data),
              signal: abortSignal,
            }),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), timeout)
            ),
          ]);

          if (!res.ok) {
            const errorText = await res.text();
            let errorMessage = 'An error occurred';
            try {
              const errorJson = JSON.parse(errorText);
              errorMessage = errorJson.message || errorMessage;
            } catch {
              errorMessage = errorText || errorMessage;
            }
            throw new Error(errorMessage);
          }

          const json = await res.json();
          return json as T;
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, endpoint, headers, executeRequest, timeout]
  );

  const deleteData = useCallback(
    (
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeRequest(
        async (abortSignal: AbortSignal) => {
          const url = `${baseUrl}${endpoint}`;
          const res = await Promise.race([
            fetch(url, {
              method: 'DELETE',
              headers,
              signal: abortSignal,
            }),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), timeout)
            ),
          ]);

          if (!res.ok) {
            const errorText = await res.text();
            let errorMessage = 'An error occurred';
            try {
              const errorJson = JSON.parse(errorText);
              errorMessage = errorJson.message || errorMessage;
            } catch {
              errorMessage = errorText || errorMessage;
            }
            throw new Error(errorMessage);
          }

          const json = await res.json();
          return json as T;
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, endpoint, headers, executeRequest, timeout]
  );

  const patchData = useCallback(
    (
      data: unknown,
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeRequest(
        async (abortSignal: AbortSignal) => {
          const url = `${baseUrl}${endpoint}`;
          const res = await Promise.race([
            fetch(url, {
              method: 'PATCH',
              headers,
              body: JSON.stringify(data),
              signal: abortSignal,
            }),
            new Promise<never>((_, reject) =>
              setTimeout(() => reject(new Error('Request timeout')), timeout)
            ),
          ]);

          if (!res.ok) {
            const errorText = await res.text();
            let errorMessage = 'An error occurred';
            try {
              const errorJson = JSON.parse(errorText);
              errorMessage = errorJson.message || errorMessage;
            } catch {
              errorMessage = errorText || errorMessage;
            }
            throw new Error(errorMessage);
          }

          const json = await res.json();
          return json as T;
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, endpoint, headers, executeRequest, timeout]
  );

  const fetchMultipleData = useCallback(
    (
      endpoints: string[],
      onSuccess?: (data: unknown[]) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) =>
      executeMultipleRequest(
        async (abortSignal: AbortSignal) => {
          const promises = endpoints.map(async ep => {
            const url = `${baseUrl}${ep}`;
            const res = await Promise.race([
              fetch(url, { method: 'GET', headers, signal: abortSignal }),
              new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('Request timeout')), timeout)
              ),
            ]);

            if (!res.ok) {
              const errorText = await res.text();
              let errorMessage = 'An error occurred';
              try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.message || errorMessage;
              } catch {
                errorMessage = errorText || errorMessage;
              }
              throw new Error(errorMessage);
            }

            return res.json();
          });
          return Promise.all(promises);
        },
        onSuccess,
        onError,
        onLoading
      ),
    [baseUrl, headers, executeMultipleRequest, timeout]
  );

  const chain = useCallback(() => {
    type ChainedOperation = {
      type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      data?: unknown;
      onSuccess?: (data: T) => void;
      onError?: (error: Error) => void;
      onLoading?: (loading: boolean) => void;
    };

    const operations: ChainedOperation[] = [];
    let finalSuccessCallback: ((data: T) => void) | undefined;
    let finalErrorCallback: ((error: Error) => void) | undefined;
    let finallyCallback: (() => void) | undefined;

    const chainableRequest: ChainableRequest<T> = {
      fetch: (onSuccess, onError, onLoading) => {
        operations.push({ type: 'GET', onSuccess, onError, onLoading });
        return chainableRequest;
      },
      post: (data, onSuccess, onError, onLoading) => {
        operations.push({ type: 'POST', data, onSuccess, onError, onLoading });
        return chainableRequest;
      },
      put: (data, onSuccess, onError, onLoading) => {
        operations.push({ type: 'PUT', data, onSuccess, onError, onLoading });
        return chainableRequest;
      },
      delete: (onSuccess, onError, onLoading) => {
        operations.push({ type: 'DELETE', onSuccess, onError, onLoading });
        return chainableRequest;
      },
      patch: (data, onSuccess, onError, onLoading) => {
        operations.push({ type: 'PATCH', data, onSuccess, onError, onLoading });
        return chainableRequest;
      },
      then: callback => {
        finalSuccessCallback = callback;
        return chainableRequest;
      },
      catch: callback => {
        finalErrorCallback = callback;
        return chainableRequest;
      },
      finally: callback => {
        finallyCallback = callback;
        return chainableRequest;
      },
      execute: async () => {
        let lastResult: T | null = null;

        try {
          for (const operation of operations) {
            await new Promise<void>((resolve, reject) => {
              const onSuccess = (data: T) => {
                lastResult = data;
                if (operation.onSuccess) {
                  operation.onSuccess(data);
                }
                resolve();
              };

              const onError = (error: Error) => {
                if (operation.onError) {
                  operation.onError(error);
                }
                reject(error);
              };

              switch (operation.type) {
                case 'GET':
                  fetchData(onSuccess, onError, operation.onLoading);
                  break;
                case 'POST':
                  postData(
                    operation.data,
                    onSuccess,
                    onError,
                    operation.onLoading
                  );
                  break;
                case 'PUT':
                  putData(
                    operation.data,
                    onSuccess,
                    onError,
                    operation.onLoading
                  );
                  break;
                case 'DELETE':
                  deleteData(onSuccess, onError, operation.onLoading);
                  break;
                case 'PATCH':
                  patchData(
                    operation.data,
                    onSuccess,
                    onError,
                    operation.onLoading
                  );
                  break;
              }
            });
          }

          if (finalSuccessCallback && lastResult) {
            finalSuccessCallback(lastResult);
          }
        } catch (error) {
          if (finalErrorCallback) {
            finalErrorCallback(error as Error);
          }
        } finally {
          if (finallyCallback) {
            finallyCallback();
          }
        }
      },
    };

    return chainableRequest;
  }, [fetchData, postData, putData, deleteData, patchData]);

  return {
    response,
    loading,
    error,
    requestCompleted,
    fetchData,
    postData,
    putData,
    deleteData,
    patchData,
    fetchMultipleData,
    chain,
  };
};

export default useFetchWithCallbacks;

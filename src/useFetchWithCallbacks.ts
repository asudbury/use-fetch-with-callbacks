import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import type { UseFetchOptions, RequestParams, ChainableRequest, FetchResult } from './types';

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
 * Chaining operations with multiple endpoints:
 * ```typescript
 * const { chain } = useFetchWithCallbacks<User>('/users/1', {
 *   baseUrl: 'https://api.example.com'
 * });
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
  const headers = useMemo(
    () => ({
      'Content-Type': 'application/json',
      ...options?.headers,
    }),
    [options?.headers]
  );


  /**
   * Executes a single API request and manages loading, error, and success states.
   *
   * @param fetchFn - Function that performs the fetch and returns a Promise of T
   * @param onSuccess - Optional callback for successful response
   * @param onError - Optional callback for error response
   * @param onLoading - Optional callback for loading state
   * @returns Promise<void>
   */
  const executeRequest = useCallback(
    async (
      fetchFn: (abortSignal: AbortSignal) => Promise<T>,
      onSuccess?: (data: T) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setLoadingState(true, onLoading);
      setError(null);
      setRequestCompleted(false);

      try {
        const data = await fetchFn(abortController.signal);

        if (abortController.signal.aborted) {
          return;
        }

        setResponse(data);
        setRequestCompleted(true);
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (err: unknown) {
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
    []
  );

  /**
   * Sets the loading state and calls the onLoading callback if provided.
   *
   * @param isLoading - The new loading state
   * @param onLoading - Optional callback to be called with the new loading state
   */
  const setLoadingState = (
    isLoading: boolean,
    onLoading?: (loading: boolean) => void
  ) => {
    setLoading(isLoading);
    if (onLoading) {
      onLoading(isLoading);
    }
  };

  /**
   * Executes multiple API requests in parallel and manages loading, error, and success states.
   *
   * @param fetchFn - Function that performs the fetch and returns a Promise of unknown[]
   * @param onSuccess - Optional callback for successful response
   * @param onError - Optional callback for error response
   * @param onLoading - Optional callback for loading state
   * @returns Promise<void>
   */
  const executeMultipleRequest = useCallback(
    async (
      fetchFn: (abortSignal: AbortSignal) => Promise<unknown[]>,
      onSuccess?: (data: unknown[]) => void,
      onError?: (error: Error) => void,
      onLoading?: (loading: boolean) => void
    ) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      setLoadingState(true, onLoading);
      setError(null);
      setRequestCompleted(false);

      try {
        const data = await fetchFn(abortController.signal);

        if (abortController.signal.aborted) {
          return;
        }

        setResponse(data as T);
        setRequestCompleted(true);
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (err: unknown) {
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
    []
  );

  /**
   * Cleans up any ongoing requests when the component unmounts.
   */
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  /**
   * Performs a fetch request with the specified HTTP method and parameters.
   *
   * @param method - HTTP method (GET, POST, PUT, DELETE, PATCH)
   * @param params - Optional request parameters
   * @param abortSignal - Optional abort signal for cancellation
   * @returns Promise<T>
   */
  const requestWithMethod = useCallback(
    async (
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
      params?: RequestParams<T>,
      abortSignal?: AbortSignal
    ): Promise<T> => {
      const url = `${baseUrl}${params?.endpoint ?? endpoint}`;
      const fetchOptions: Record<string, unknown> = {
        method,
        headers,
        signal: abortSignal,
      };
      if (params?.data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        fetchOptions.body = JSON.stringify(params.data);
      }
      const res = await Promise.race([
        fetch(url, fetchOptions),
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
    [baseUrl, endpoint, headers, timeout]
  );

  /**
   * Fetches data from the API using a GET request.
   *
   * @param params - An object containing:
   *   - endpoint: (optional) API endpoint to override the default
   *   - onSuccess: (optional) Callback invoked with response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const fetchData = useCallback(
    (params?: RequestParams<T>) =>
      executeRequest(
        (abortSignal: AbortSignal) => requestWithMethod('GET', params, abortSignal),
        params?.onSuccess,
        params?.onError,
        params?.onLoading
      ),
    [executeRequest, requestWithMethod]
  );

  /**
   * Sends data to the API using a POST request.
   *
   * @param params - An object containing:
   *   - endpoint: (optional) API endpoint to override the default
   *   - data: (optional) The payload to send in the request body
   *   - onSuccess: (optional) Callback invoked with response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const postData = useCallback(
    (params: RequestParams<T>) =>
      executeRequest(
        (abortSignal: AbortSignal) => requestWithMethod('POST', params, abortSignal),
        params.onSuccess,
        params.onError,
        params.onLoading
      ),
    [executeRequest, requestWithMethod]
  );

  /**
   * Updates data on the API using a PUT request.
   *
   * @param params - An object containing:
   *   - endpoint: (optional) API endpoint to override the default
   *   - data: (optional) The payload to send in the request body
   *   - onSuccess: (optional) Callback invoked with response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const putData = useCallback(
    (params: RequestParams<T>) =>
      executeRequest(
        (abortSignal: AbortSignal) => requestWithMethod('PUT', params, abortSignal),
        params.onSuccess,
        params.onError,
        params.onLoading
      ),
    [executeRequest, requestWithMethod]
  );

  /**
   * Deletes data from the API using a DELETE request.
   *
   * @param params - An object containing:
   *   - endpoint: (optional) API endpoint to override the default
   *   - onSuccess: (optional) Callback invoked with response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const deleteData = useCallback(
    (params?: RequestParams<T>) =>
      executeRequest(
        (abortSignal: AbortSignal) => requestWithMethod('DELETE', params, abortSignal),
        params?.onSuccess,
        params?.onError,
        params?.onLoading
      ),
    [executeRequest, requestWithMethod]
  );

  /**
   * Partially updates data on the API using a PATCH request.
   *
   * @param params - An object containing:
   *   - endpoint: (optional) API endpoint to override the default
   *   - data: (optional) The payload to send in the request body
   *   - onSuccess: (optional) Callback invoked with response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const patchData = useCallback(
    (params: RequestParams<T>) =>
      executeRequest(
        (abortSignal: AbortSignal) => requestWithMethod('PATCH', params, abortSignal),
        params.onSuccess,
        params.onError,
        params.onLoading
      ),
    [executeRequest, requestWithMethod]
  );

  /**
   * Fetches data from multiple endpoints in parallel using GET requests.
   *
   * @param params - An object containing:
   *   - endpoints: Array of endpoint strings to fetch
   *   - onSuccess: (optional) Callback invoked with array of response data on success
   *   - onError: (optional) Callback invoked with error object on failure
   *   - onLoading: (optional) Callback invoked with loading state changes
   * @returns void
   */
  const fetchMultipleData = useCallback(
    (params: {
      endpoints: string[];
      onSuccess?: (data: unknown[]) => void;
      onError?: (error: Error) => void;
      onLoading?: (loading: boolean) => void;
    }) =>
      executeMultipleRequest(
        async (abortSignal: AbortSignal) => {
          const promises = params.endpoints.map(async ep => {
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
        params.onSuccess,
        params.onError,
        params.onLoading
      ),
    [baseUrl, headers, executeMultipleRequest, timeout]
  );

  /**
   * Creates a chainable API for performing multiple requests in sequence.
   *
   * @returns ChainableRequest<T> - An object with methods for chaining requests (fetch, post, put, delete, patch) and handling callbacks (then, catch, finally, execute).
   *
   * @example
   * chain()
   *   .fetch({ endpoint: '/users/1' })
   *   .put({ endpoint: '/users/1', data: { name: 'New Name' } })
   *   .then(data => console.log('Success:', data))
   *   .catch(error => console.error('Error:', error))
   *   .finally(() => console.log('Done'))
   *   .execute();
   */
  const chain = useCallback(() => {
    type ChainedOperation = {
      type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      endpoint?: string;
      data?: unknown;
      onSuccess?: (data: T) => void;
      onError?: (error: Error) => void;
      onLoading?: (loading: boolean) => void;
    };

    const operations: ChainedOperation[] = [];
    let finalSuccessCallback: ((data: T) => void) | undefined;
    let finalErrorCallback: ((error: Error) => void) | undefined;
    let finallyCallback: (() => void) | undefined;

    const chainRequestWithMethod = (
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
      params?: RequestParams<T>,
    ) => {
      return executeRequest(
        (abortSignal: AbortSignal) =>
          requestWithMethod(method, params, abortSignal),
        params?.onSuccess,
        params?.onError,
        params?.onLoading
      );
    };

    const chainableRequest: ChainableRequest<T> = {
      fetch: (params?: RequestParams<T>) => {
        operations.push({ type: 'GET', ...params });
        return chainableRequest;
      },
      post: (params: RequestParams<T>) => {
        operations.push({ type: 'POST', ...params });
        return chainableRequest;
      },
      put: (params: RequestParams<T>) => {
        operations.push({ type: 'PUT', ...params });
        return chainableRequest;
      },
      delete: (params?: RequestParams<T>) => {
        operations.push({ type: 'DELETE', ...params });
        return chainableRequest;
      },
      patch: (params: RequestParams<T>) => {
        operations.push({ type: 'PATCH', ...params });
        return chainableRequest;
      },
      then: (callback: (data: T) => void) => {
        finalSuccessCallback = callback;
        return chainableRequest;
      },
      catch: (callback: (error: Error) => void) => {
        finalErrorCallback = callback;
        return chainableRequest;
      },
      finally: (callback: () => void) => {
        finallyCallback = callback;
        return chainableRequest;
      },
      execute: async () => {
        let lastResult: T | null = null;

        try {
          for (const operation of operations) {
            await chainRequestWithMethod(operation.type, operation);
            if (operation.onSuccess && lastResult !== null) {
              operation.onSuccess(lastResult);
            }
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
  }, [executeRequest, requestWithMethod]);

  /**
   * Hook return value: provides API response, loading/error states, and request methods.
   *
   * @property response - The API response data
   * @property loading - Loading state
   * @property error - Error state
   * @property requestCompleted - Whether the request has completed
   * @property fetchData - GET request method
   * @property postData - POST request method
   * @property putData - PUT request method
   * @property deleteData - DELETE request method
   * @property patchData - PATCH request method
   * @property fetchMultipleData - Multiple GET requests method
   * @property chain - Chainable API for sequential requests
   */
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

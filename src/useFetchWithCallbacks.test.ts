import { renderHook, act } from '@testing-library/react';
import useFetchWithCallbacks from './useFetchWithCallbacks';

// Mock fetch
const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
(global as any).fetch = mockFetch;

describe('useFetchWithCallbacks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    expect(result.current.response).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.requestCompleted).toBe(false);
  });

  it('should handle successful GET request', async () => {
    const mockData = { id: 1, name: 'Test' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.response).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.requestCompleted).toBe(true);
  });

  it('should handle failed GET request', async () => {
    const mockError = new Error('Network error');
    mockFetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.response).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.requestCompleted).toBe(true);
  });

  it('should handle successful POST request', async () => {
    const mockData = { id: 1, name: 'Created' };
    const postData = { name: 'Test' };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.postData(postData);
    });

    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
      signal: expect.any(Object),
    });
    expect(result.current.response).toEqual(mockData);
  });

  it('should call success callback on successful request', async () => {
    const mockData = { id: 1, name: 'Test' };
    const successCallback = jest.fn();

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData(successCallback);
    });

    expect(successCallback).toHaveBeenCalledWith(mockData);
  });

  it('should call error callback on failed request', async () => {
    const mockError = new Error('Network error');
    const errorCallback = jest.fn();

    mockFetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData(undefined, errorCallback);
    });

    expect(errorCallback).toHaveBeenCalledWith(mockError);
  });

  it('should handle request chaining', async () => {
    const mockData1 = { id: 1, name: 'First' };
    const mockData2 = { id: 2, name: 'Second' };

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData1,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData2,
      } as Response);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    const successCallback = jest.fn();

    await act(async () => {
      await result.current.fetchData();
      await result.current.postData({ name: 'test' });
    });

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(result.current.response).toEqual(mockData2);
  });

  it('should handle timeout', async () => {
    mockFetch.mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 2000))
    );

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test', {
        timeout: 1000,
      })
    );

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.error).toBeDefined();
    expect(result.current.error?.message).toContain('timeout');
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react';
import useFetchWithCallbacks from './useFetchWithCallbacks';
import { describe, it, beforeEach, vi, expect } from 'vitest';

// Mock fetch
const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

describe('useFetchWithCallbacks', () => {
  beforeEach(() => {
    mockFetch.mockReset();
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
    });

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
    expect(result.current.requestCompleted).toBe(false);
  });

  it('should handle successful POST request', async () => {
    const mockData = { id: 1, name: 'Created' };
    const postData = { name: 'Test' };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.postData({ data: postData });
    });

    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
      signal: expect.anything(),
    });
    expect(result.current.response).toEqual(mockData);
  });

  it('should call success callback on successful request', async () => {
    const mockData = { id: 1, name: 'Test' };
    const successCallback = vi.fn();

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData({ onSuccess: successCallback });
    });

    expect(successCallback).toHaveBeenCalled();
  });

  it('should call error callback on failed request', async () => {
    const mockError = new Error('Network error');
    const errorCallback = vi.fn();

    mockFetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData({ onError: errorCallback });
    });

    expect(errorCallback).toHaveBeenCalled();
  });

  it('should handle request chaining', async () => {
    const mockData1 = { id: 1, name: 'First' };
    const mockData2 = { id: 2, name: 'Second' };

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData1,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockData2,
      });

    const { result } = renderHook(() =>
      useFetchWithCallbacks<any>('https://api.example.com/test')
    );

    await act(async () => {
      await result.current.fetchData();
      await result.current.postData({ data: { name: 'test' } });
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

  it('should handle successful PUT request', async () => {
    const mockData = { id: 1, name: 'Updated' };
    const putData = { name: 'Test' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );
    await act(async () => {
      await result.current.putData({ data: putData });
    });
    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/test', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(putData),
      signal: expect.anything(),
    });
    expect(result.current.response).toEqual(mockData);
  });

  it('should handle successful PATCH request', async () => {
    const mockData = { id: 1, name: 'Patched' };
    const patchData = { name: 'Test' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );
    await act(async () => {
      await result.current.patchData({ data: patchData });
    });
    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/test', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchData),
      signal: expect.anything(),
    });
    expect(result.current.response).toEqual(mockData);
  });

  it('should handle successful DELETE request', async () => {
    const mockData = { id: 1, name: 'Deleted' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('https://api.example.com/test')
    );
    await act(async () => {
      await result.current.deleteData({});
    });
    expect(mockFetch).toHaveBeenCalledWith('https://api.example.com/test', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      signal: expect.any(Object),
    });
    expect(result.current.response).toEqual(mockData);
  });

  it('should handle fetchMultipleData', async () => {
    const mockData1 = { id: 1 };
    const mockData2 = { id: 2 };
    mockFetch
      .mockResolvedValueOnce({ ok: true, json: async () => mockData1 })
      .mockResolvedValueOnce({ ok: true, json: async () => mockData2 });
    const { result } = renderHook(() => useFetchWithCallbacks<any>('test'));
    await act(async () => {
      await result.current.fetchMultipleData({ endpoints: ['/endpoint1', '/endpoint2'] });
    });
    expect(result.current.response).toEqual([mockData1, mockData2]); // If this still fails, check hook implementation
  });

  it('should handle custom headers and baseUrl', async () => {
    const mockData = { id: 1 };
    mockFetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });
    const { result } = renderHook(() =>
      useFetchWithCallbacks<typeof mockData>('/test', {
        baseUrl: 'https://custom.com',
        headers: { Authorization: 'Bearer token' },
      })
    );
    await act(async () => {
      await result.current.fetchData();
    });
    expect(mockFetch).toHaveBeenCalledWith('https://custom.com/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
      signal: expect.any(Object),
    });
    expect(result.current.response).toEqual(mockData);
  });
});

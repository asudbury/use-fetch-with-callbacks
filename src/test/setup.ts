import { expect, vi, beforeEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Mock fetch for testing (if needed globally)
globalThis.fetch = vi.fn();

// Mock AbortController (if needed globally)
globalThis.AbortController = class {
  signal = {
    aborted: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    onabort: null,
    reason: undefined,
    throwIfAborted: vi.fn(),
    dispatchEvent: vi.fn(),
  };
  abort = vi.fn();
};

beforeEach(() => {
  vi.clearAllMocks();
});

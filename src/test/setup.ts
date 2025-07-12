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

// Polyfill crypto.getRandomValues for Node.js
// Polyfill crypto.getRandomValues for Node.js
if (typeof globalThis.crypto === 'undefined' || !globalThis.crypto.getRandomValues) {
  const nodeCrypto = require('crypto');
  globalThis.crypto = {
    getRandomValues: (arr) => nodeCrypto.randomFillSync(arr),
    subtle: {} as SubtleCrypto,
    randomUUID: () => (typeof nodeCrypto.randomUUID === 'function' ? nodeCrypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

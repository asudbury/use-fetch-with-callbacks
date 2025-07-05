import '@testing-library/jest-dom';

// Mock fetch for testing
(global as any).fetch = jest.fn();

// Mock AbortController
(global as any).AbortController = class {
  signal = {
    aborted: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
  abort = jest.fn();
};

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});

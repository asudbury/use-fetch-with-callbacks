import type { Meta, StoryObj } from '@storybook/react';
import { storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    docs: {
      description: {
        component: `
# 🚀 useFetchWithCallbacks

A powerful, production-ready React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration.

## 🎯 Key Features

- **✅ Complete HTTP Methods**: GET, POST, PUT, DELETE, PATCH support
- **🔗 Request Chaining**: Sequential operations with chainable API
- **📞 Callback Support**: Success, error, and loading callbacks
- **⚡ Performance Optimized**: Memory leak prevention and efficient state management
- **🛡️ Type Safe**: Full TypeScript support with generic types
- **🚫 Request Cancellation**: Built-in AbortController support
- **⏱️ Timeout Support**: Configurable request timeouts
- **🔄 Concurrent Requests**: Handle multiple simultaneous requests
- **📊 State Management**: Comprehensive loading, error, and response states

## 📦 Installation

\`\`\`bash
npm install use-fetch-with-callbacks
\`\`\`

## 🚀 Quick Start

\`\`\`tsx
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function MyComponent() {
  const { fetchData, loading, response, error } = useFetchWithCallbacks(
    'https://api.example.com/users'
  );

  const handleFetch = () => {
    fetchData(
      (data) => console.log('Success:', data),
      (error) => console.error('Error:', error),
      (loading) => console.log('Loading:', loading)
    );
  };

  return (
    <div>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
\`\`\`

## 🔗 Request Chaining

\`\`\`tsx
const { chain } = useFetchWithCallbacks<User>('/users/1');

// Execute multiple operations sequentially
await chain()
  .fetch((user) => console.log('1. Fetched:', user))
  .post({ name: 'John' }, (created) => console.log('2. Created:', created))
  .put({ name: 'Jane' }, (updated) => console.log('3. Updated:', updated))
  .delete((deleted) => console.log('4. Deleted:', deleted))
  .then((final) => console.log('All operations completed!'))
  .catch((error) => console.error('Chain failed:', error))
  .finally(() => console.log('Cleanup'))
  .execute();
\`\`\`

## 📡 HTTP Methods

\`\`\`tsx
const { fetchData, postData, putData, patchData, deleteData } = useFetchWithCallbacks<User>('/users/1');

// GET request
fetchData(onSuccess, onError, onLoading);

// POST request
postData(newUser, onSuccess, onError, onLoading);

// PUT request
putData(updatedUser, onSuccess, onError, onLoading);

// PATCH request
patchData(partialUpdate, onSuccess, onError, onLoading);

// DELETE request
deleteData(onSuccess, onError, onLoading);
\`\`\`

## ⚙️ Configuration Options

\`\`\`tsx
interface UseFetchOptions {
  baseUrl?: string;      // Base URL for all requests
  headers?: HeadersInit; // Default headers
  timeout?: number;      // Request timeout (default: 10000ms)
}

const { fetchData } = useFetchWithCallbacks<User>('/users/1', {
  baseUrl: 'https://api.example.com',
  headers: { Authorization: 'Bearer token' },
  timeout: 5000
});
\`\`\`

## 🛡️ Error Handling

The hook provides comprehensive error handling for:
- Network errors
- HTTP status errors
- Request timeouts
- Request cancellation


## 📖 Explore the Stories

Navigate through the different sections to explore all features:

1. **🎯 Basic Usage** - Simple GET requests and basic functionality
2. **📝 CRUD Operations** - Create, Read, Update, Delete operations
3. **🔗 Request Chaining** - Sequential API calls with chaining
4. **⚡ Performance** - Optimization techniques and best practices
5. **🛠️ Error Handling** - Comprehensive error scenarios, edge cases, and handling patterns
6. **🌐 Integration Patterns** - Real-world integration examples
7. **🔍 API Explorer** - Interactive testing environment
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Introduction component
const IntroductionComponent = () => {
  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>useFetchWithCallbacks</h1>
        <p style={storyStyles.gradientHeaderSubtitle}>
          A powerful React hook for HTTP requests with comprehensive callback
          and chaining support
        </p>
      </div>

      {/* Installation Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#667eea',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Installation
          </h2>
        </div>
        <div style={{ position: 'relative', display: 'block', width: '70%' }}>
          <pre
            style={{
              backgroundColor: '#f8f9fa',
              color: '#333',
              padding: '20px 50px 20px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'monospace',
              margin: '0',
              border: '1px solid #e9ecef',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px', color: '#666' }}>$</span>
            npm install use-fetch-with-callbacks
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                'npm install use-fetch-with-callbacks'
              );
              // Show a brief success feedback
              const btn = document.activeElement as HTMLButtonElement;
              const originalHTML = btn.innerHTML;
              btn.innerHTML =
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>';
              btn.style.color = '#4ade80';
              setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.color = '#9ca3af';
              }, 1000);
            }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.color = '#666';
              (e.target as HTMLButtonElement).style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.color = '#9ca3af';
              (e.target as HTMLButtonElement).style.backgroundColor =
                'transparent';
            }}
            title="Copy to clipboard"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Key Features Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Key Features
          </h2>
        </div>
        <ul
          style={{
            paddingLeft: '0',
            lineHeight: '1.8',
            fontSize: '16px',
            listStyle: 'none',
          }}
        >
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <span>
              <strong>Complete HTTP Methods</strong>: GET, POST, PUT, DELETE,
              PATCH support
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <span>
              <strong>Request Chaining</strong>: Sequential operations with
              chainable API
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span>
              <strong>Callback Support</strong>: Success, error, and loading
              callbacks
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
              </svg>
            </div>
            <span>
              <strong>Performance Optimized</strong>: Memory leak prevention and
              efficient state management
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span>
              <strong>Type Safe</strong>: Full TypeScript support with generic
              types
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <span>
              <strong>Request Cancellation</strong>: Built-in AbortController
              support
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <span>
              <strong>Timeout Support</strong>: Configurable request timeouts
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span>
              <strong>Concurrent Requests</strong>: Handle multiple simultaneous
              requests
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 3v5h5" />
                <path d="M3 8l9-9 9 9-9 9-9-9" />
              </svg>
            </div>
            <span>
              <strong>State Management</strong>: Comprehensive loading, error,
              and response states
            </span>
          </li>
        </ul>
      </div>

      {/* Feature Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Type Safe
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Full TypeScript support with generic types for complete type safety
            and IntelliSense.
          </p>
        </div>

        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f093fb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Performance
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Optimized for performance with built-in memory leak prevention and
            efficient state management.
          </p>
        </div>

        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#48bb78',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Chainable
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Sequential operations with a fluent, chainable API for complex
            workflows.
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#48bb78',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Quick Start
          </h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function MyComponent() {
  const { fetchData, loading, response, error } = useFetchWithCallbacks(
    'https://api.example.com/users'
  );

  const handleFetch = () => {
    fetchData(
      (data) => console.log('Success:', data),
      (error) => console.error('Error:', error),
      (loading) => console.log('Loading:', loading)
    );
  };

  return (
    <div>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}`}
        </pre>
      </div>

      {/* Request Chaining Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#667eea',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Request Chaining
          </h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`const { chain } = useFetchWithCallbacks<User>('/users/1');

// Execute multiple operations sequentially
await chain()
  .fetch((user) => console.log('1. Fetched:', user))
  .post({ name: 'John' }, (created) => console.log('2. Created:', created))
  .put({ name: 'Jane' }, (updated) => console.log('3. Updated:', updated))
  .delete((deleted) => console.log('4. Deleted:', deleted))
  .then((final) => console.log('All operations completed!'))
  .catch((error) => console.error('Chain failed:', error))
  .finally(() => console.log('Cleanup'))
  .execute();`}
        </pre>
      </div>

      {/* HTTP Methods Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            HTTP Methods
          </h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`const { fetchData, postData, putData, patchData, deleteData } = useFetchWithCallbacks<User>('/users/1');

// GET request
fetchData(onSuccess, onError, onLoading);

// POST request
postData(newUser, onSuccess, onError, onLoading);

// PUT request
putData(updatedUser, onSuccess, onError, onLoading);

// PATCH request
patchData(partialUpdate, onSuccess, onError, onLoading);

// DELETE request
deleteData(onSuccess, onError, onLoading);`}
        </pre>
      </div>

      {/* Configuration Options Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#48bb78',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Configuration Options
          </h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`interface UseFetchOptions {
  baseUrl?: string;      // Base URL for all requests
  headers?: HeadersInit; // Default headers
  timeout?: number;      // Request timeout (default: 10000ms)
}

const { fetchData } = useFetchWithCallbacks<User>('/users/1', {
  baseUrl: 'https://api.example.com',
  headers: { Authorization: 'Bearer token' },
  timeout: 5000
});`}
        </pre>
      </div>

      {/* Error Handling Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>
            Error Handling
          </h2>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
          The hook provides comprehensive error handling for:
        </p>
        <ul
          style={{
            paddingLeft: '20px',
            lineHeight: '1.8',
            fontSize: '16px',
            color: '#666',
          }}
        >
          <li>Network errors</li>
          <li>HTTP status errors</li>
          <li>Request timeouts</li>
          <li>Request cancellation</li>
        </ul>
      </div>
    </div>
  );
};

export const Introduction: Story = {
  render: () => <IntroductionComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'Welcome to useFetchWithCallbacks! Explore the features and navigate through the documentation.',
      },
    },
  },
};

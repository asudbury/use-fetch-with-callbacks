import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    docs: {
      description: {
        component: `
# useFetchWithCallbacks

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

## 📚 Documentation

Explore the stories in this Storybook to see comprehensive examples and use cases:

- **[Basic Usage](/?path=/story/examples-basic-usage--basic-fetch)** - Simple GET requests and basic functionality
- **[CRUD Operations](/?path=/story/examples-crud-operations--crud-example)** - Complete REST API operations
- **[Request Chaining](/?path=/story/examples-request-chaining--chaining-example)** - Sequential HTTP operations
- **[Performance](/?path=/story/advanced-performance-optimization--performance-optimization)** - Optimization techniques and best practices

## 🔗 Links

- **[GitHub Repository](https://github.com/yourusername/use-fetch-with-callbacks)**
- **[npm Package](https://www.npmjs.com/package/use-fetch-with-callbacks)**
- **[API Documentation](/?path=/story/documentation--api-reference)**

## 📄 License

MIT © [Your Name]
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const WelcomeComponent = () => {
  return (
    <div style={{ 
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        padding: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3em', 
          margin: '0 0 16px 0',
          fontWeight: '700'
        }}>
          useFetchWithCallbacks
        </h1>
        <p style={{ 
          fontSize: '1.2em', 
          margin: 0,
          opacity: 0.9
        }}>
          A powerful React hook for HTTP requests with comprehensive callback support
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ color: '#495057', marginTop: 0 }}>🎯 Type Safe</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>
            Full TypeScript support with generic types for complete type safety
          </p>
        </div>

        <div style={{
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ color: '#495057', marginTop: 0 }}>⚡ Performance</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>
            Optimized for performance with memory leak prevention and efficient state management
          </p>
        </div>

        <div style={{
          padding: '24px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ color: '#495057', marginTop: 0 }}>🔗 Chainable</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>
            Support for request chaining and sequential operations
          </p>
        </div>
      </div>

      <div style={{
        padding: '24px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        border: '1px solid #bbdefb',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#1565c0', marginTop: 0 }}>🚀 Ready to Get Started?</h3>
        <p style={{ margin: '16px 0', color: '#1976d2' }}>
          Explore the interactive examples and documentation in the sidebar
        </p>
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
            onClick={() => window.open('/?path=/story/examples-basic-usage--basic-fetch', '_self')}
          >
            View Examples
          </button>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: '#1976d2',
              border: '2px solid #1976d2',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
            onClick={() => window.open('/?path=/story/documentation--api-reference', '_self')}
          >
            API Reference
          </button>
        </div>
      </div>
    </div>
  );
};

export const Welcome: Story = {
  render: () => <WelcomeComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null, // Disable docs page for this story
    },
  },
};

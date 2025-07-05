import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';

interface Post {
  id: number;
  title: string;
  body: string;
}

const meta: Meta = {
  title: 'Advanced/Performance Optimization',
  parameters: {
    docs: {
      description: {
        component:
          'Examples showing performance optimizations and best practices for the useFetchWithCallbacks hook.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PerformanceDemo = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [renderCount, setRenderCount] = useState(0);

  // Demo endpoint
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const addLog = (message: string) => {
    setLogs(prev => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  // Optimized hook usage with memoized callbacks
  const { fetchData, loading, response, error } = useFetchWithCallbacks<Post>(
    `${baseUrl}/posts/1`,
    {
      timeout: 5000,
    }
  );

  // Track render count for performance monitoring
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  const handleOptimizedFetch = () => {
    // This uses pre-configured callbacks for better performance
    fetchData(
      data => addLog(`✅ Data fetched successfully: ${data.title}`),
      error => addLog(`❌ Error: ${error.message}`),
      isLoading => addLog(`⏳ Loading: ${isLoading}`)
    );
  };

  const handleUnoptimizedFetch = () => {
    // This creates new callback functions on each render (anti-pattern)
    fetchData(
      data => addLog(`✅ New callback: ${(data as Post).title}`),
      error => addLog(`❌ New error callback: ${error.message}`)
    );
  };

  const clearLogs = () => {
    setLogs([]);
    setRenderCount(0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Performance Optimization Examples</h2>

      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
        }}
      >
        <h3>🎯 Performance Metrics</h3>
        <p>
          <strong>Component Renders:</strong> {renderCount}
        </p>
        <p>
          <strong>Current State:</strong> {loading ? 'Loading...' : 'Idle'}
        </p>
        <p>
          <strong>Memory Usage:</strong>{' '}
          {error ? 'Error state' : response ? 'Data cached' : 'No data'}
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>✅ Optimized Approach</h3>
        <p>
          Callbacks are pre-configured in hook options - no new functions
          created on each render.
        </p>
        <button
          onClick={handleOptimizedFetch}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: loading ? '#ccc' : '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginRight: '10px',
          }}
        >
          {loading ? 'Loading...' : 'Optimized Fetch'}
        </button>

        <button
          onClick={handleUnoptimizedFetch}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: loading ? '#ccc' : '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginRight: '10px',
          }}
        >
          {loading ? 'Loading...' : 'Unoptimized Fetch'}
        </button>

        <button
          onClick={clearLogs}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear Logs
        </button>
      </div>

      {error && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#ffebee',
            borderLeft: '4px solid #f44336',
            borderRadius: '4px',
          }}
        >
          <strong>Error:</strong> {error.message}
        </div>
      )}

      {response && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#e8f5e8',
            borderLeft: '4px solid #4caf50',
            borderRadius: '4px',
          }}
        >
          <h3>📊 Response Data:</h3>
          <p>
            <strong>ID:</strong> {(response as Post).id}
          </p>
          <p>
            <strong>Title:</strong> {(response as Post).title}
          </p>
          <p>
            <strong>Body:</strong> {(response as Post).body.substring(0, 100)}
            ...
          </p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>📝 Performance Logs:</h3>
        <div
          style={{
            backgroundColor: '#f8f9fa',
            padding: '10px',
            borderRadius: '4px',
            maxHeight: '200px',
            overflowY: 'auto',
            fontFamily: 'monospace',
          }}
        >
          {logs.length === 0 ? (
            <em>No logs yet...</em>
          ) : (
            logs.map((log, index) => <div key={index}>{log}</div>)
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
        }}
      >
        <h4>🔧 Performance Tips:</h4>
        <ul>
          <li>
            <strong>Pre-configure callbacks:</strong> Use hook options instead
            of inline functions
          </li>
          <li>
            <strong>Memoize expensive operations:</strong> Use React.useMemo for
            complex data transformations
          </li>
          <li>
            <strong>Debounce frequent requests:</strong> Implement debouncing
            for search/filter operations
          </li>
          <li>
            <strong>Use request cancellation:</strong> Leverage AbortController
            for cleanup
          </li>
          <li>
            <strong>Monitor re-renders:</strong> Use React DevTools to identify
            unnecessary renders
          </li>
        </ul>
      </div>
    </div>
  );
};

export const PerformanceOptimization: Story = {
  render: () => <PerformanceDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates performance optimization techniques when using the useFetchWithCallbacks hook.',
      },
    },
  },
};

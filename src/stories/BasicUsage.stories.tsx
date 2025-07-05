import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Mock component that uses the hook
const BasicExample = ({
  endpoint = '/users/1',
  baseUrl = 'https://jsonplaceholder.typicode.com',
}) => {
  const { response, loading, error, fetchData } = useFetchWithCallbacks<User>(
    endpoint,
    {
      baseUrl,
      timeout: 5000,
    }
  );

  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const handleFetch = () => {
    setLogs([]);
    fetchData(
      data => addLog(`✅ Success: Loaded user ${data.name}`),
      error => addLog(`❌ Error: ${error.message}`),
      loading => addLog(`⏳ Loading: ${loading}`)
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Basic Fetch Example</h2>
      <p>
        Endpoint:{' '}
        <code>
          {baseUrl}
          {endpoint}
        </code>
      </p>

      <button
        onClick={handleFetch}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Fetch User'}
      </button>

      {error && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
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
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
          }}
        >
          <h3>User Data:</h3>
          <p>
            <strong>ID:</strong> {response.id}
          </p>
          <p>
            <strong>Name:</strong> {response.name}
          </p>
          <p>
            <strong>Email:</strong> {response.email}
          </p>
          <p>
            <strong>Phone:</strong> {response.phone}
          </p>
        </div>
      )}

      {logs.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <h3>Callback Logs:</h3>
          <div
            style={{
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'monospace',
            }}
          >
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof BasicExample> = {
  title: 'useFetchWithCallbacks/Basic Usage',
  component: BasicExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Basic usage example showing GET request with success, error, and loading callbacks.',
      },
    },
  },
  argTypes: {
    endpoint: {
      control: 'text',
      description: 'API endpoint path',
    },
    baseUrl: {
      control: 'text',
      description: 'Base URL for the API',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasicExample>;

export const Default: Story = {
  args: {
    endpoint: '/users/1',
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

export const DifferentUser: Story = {
  args: {
    endpoint: '/users/2',
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

export const WithError: Story = {
  args: {
    endpoint: '/users/999',
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

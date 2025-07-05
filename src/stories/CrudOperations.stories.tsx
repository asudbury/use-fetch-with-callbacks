import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';

interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

const CrudExample = ({ baseUrl = 'https://jsonplaceholder.typicode.com' }) => {
  const {
    response,
    loading,
    error,
    fetchData,
    postData,
    putData,
    deleteData,
    patchData,
  } = useFetchWithCallbacks<Post>('/posts/1', { baseUrl, timeout: 5000 });

  const [logs, setLogs] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1,
  });

  const addLog = (message: string) => {
    setLogs(prev => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const handleFetch = () => {
    setLogs([]);
    fetchData(
      data => addLog(`✅ GET Success: Loaded post "${data.title}"`),
      error => addLog(`❌ GET Error: ${error.message}`),
      loading => addLog(`⏳ GET Loading: ${loading}`)
    );
  };

  const handlePost = () => {
    setLogs([]);
    postData(
      formData,
      data => addLog(`✅ POST Success: Created post with ID ${data.id}`),
      error => addLog(`❌ POST Error: ${error.message}`),
      loading => addLog(`⏳ POST Loading: ${loading}`)
    );
  };

  const handlePut = () => {
    setLogs([]);
    putData(
      { ...formData, id: 1 },
      data => addLog(`✅ PUT Success: Updated post "${data.title}"`),
      error => addLog(`❌ PUT Error: ${error.message}`),
      loading => addLog(`⏳ PUT Loading: ${loading}`)
    );
  };

  const handlePatch = () => {
    setLogs([]);
    patchData(
      { title: formData.title },
      data => addLog(`✅ PATCH Success: Updated title to "${data.title}"`),
      error => addLog(`❌ PATCH Error: ${error.message}`),
      loading => addLog(`⏳ PATCH Loading: ${loading}`)
    );
  };

  const handleDelete = () => {
    setLogs([]);
    deleteData(
      data => addLog(`✅ DELETE Success: Post deleted`),
      error => addLog(`❌ DELETE Error: ${error.message}`),
      loading => addLog(`⏳ DELETE Loading: ${loading}`)
    );
  };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: loading ? '#ccc' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: loading ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>CRUD Operations Example</h2>
      <p>
        Base URL: <code>{baseUrl}</code>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <h3>Form Data:</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Title: </label>
          <input
            type="text"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            style={{ padding: '5px', marginLeft: '5px', width: '200px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Body: </label>
          <textarea
            value={formData.body}
            onChange={e => setFormData({ ...formData, body: e.target.value })}
            style={{
              padding: '5px',
              marginLeft: '5px',
              width: '200px',
              height: '60px',
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>HTTP Methods:</h3>
        <button onClick={handleFetch} disabled={loading} style={buttonStyle}>
          GET Post
        </button>
        <button onClick={handlePost} disabled={loading} style={buttonStyle}>
          POST Create
        </button>
        <button onClick={handlePut} disabled={loading} style={buttonStyle}>
          PUT Update
        </button>
        <button onClick={handlePatch} disabled={loading} style={buttonStyle}>
          PATCH Partial
        </button>
        <button
          onClick={handleDelete}
          disabled={loading}
          style={{
            ...buttonStyle,
            backgroundColor: loading ? '#ccc' : '#dc3545',
          }}
        >
          DELETE Post
        </button>
      </div>

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
          <h3>Response Data:</h3>
          <pre
            style={{
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
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

const meta: Meta<typeof CrudExample> = {
  title: 'useFetchWithCallbacks/CRUD Operations',
  component: CrudExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Complete CRUD operations example showing GET, POST, PUT, PATCH, and DELETE methods.',
      },
    },
  },
  argTypes: {
    baseUrl: {
      control: 'text',
      description: 'Base URL for the API',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CrudExample>;

export const Default: Story = {
  args: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

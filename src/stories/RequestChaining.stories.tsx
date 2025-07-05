import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';

interface User {
  id: number;
  name: string;
  email: string;
}

const ChainExample = ({ baseUrl = 'https://jsonplaceholder.typicode.com' }) => {
  const { chain } = useFetchWithCallbacks<User>('/users/1', {
    baseUrl,
    timeout: 5000,
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addLog = (message: string) => {
    setLogs(prev => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const clearLogs = () => setLogs([]);

  const runSimpleChain = async () => {
    setIsRunning(true);
    clearLogs();

    await chain()
      .fetch(user => {
        addLog(`✅ Step 1: Fetched user ${user.name}`);
      })
      .post(
        { name: 'Updated Name', email: 'updated@example.com', id: 1 },
        updated => {
          addLog(`✅ Step 2: Posted update for ${updated.name}`);
        }
      )
      .put({ name: 'Final Name', email: 'final@example.com', id: 1 }, final => {
        addLog(`✅ Step 3: Put final update for ${final.name}`);
      })
      .then(result => {
        addLog(`🎉 Chain completed successfully with final result!`);
      })
      .catch(error => {
        addLog(`❌ Chain failed: ${error.message}`);
      })
      .finally(() => {
        addLog(`🔄 Chain execution finished`);
        setIsRunning(false);
      })
      .execute();
  };

  const runComplexChain = async () => {
    setIsRunning(true);
    clearLogs();

    await chain()
      .fetch(user => {
        addLog(`✅ Step 1: Fetched user ${user.name}`);
      })
      .patch({ email: 'patched@example.com' }, patched => {
        addLog(`✅ Step 2: Patched email to ${patched.email}`);
      })
      .put(
        { name: 'Chain User', email: 'chain@example.com', id: 1 },
        updated => {
          addLog(`✅ Step 3: Full update to ${updated.name}`);
        }
      )
      .delete(deleted => {
        addLog(`✅ Step 4: Cleanup completed`);
      })
      .then(result => {
        addLog(`🎉 Complex chain completed!`);
      })
      .catch(error => {
        addLog(`❌ Complex chain failed: ${error.message}`);
      })
      .finally(() => {
        addLog(`🔄 Complex chain execution finished`);
        setIsRunning(false);
      })
      .execute();
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 10px 10px 0',
    backgroundColor: isRunning ? '#ccc' : '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: isRunning ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Request Chaining Example</h2>
      <p>This demonstrates sequential HTTP operations using the chain API.</p>
      <p>
        Base URL: <code>{baseUrl}</code>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={runSimpleChain}
          disabled={isRunning}
          style={buttonStyle}
        >
          {isRunning ? 'Running...' : 'Run Simple Chain (GET → POST → PUT)'}
        </button>

        <button
          onClick={runComplexChain}
          disabled={isRunning}
          style={buttonStyle}
        >
          {isRunning
            ? 'Running...'
            : 'Run Complex Chain (GET → PATCH → PUT → DELETE)'}
        </button>

        <button
          onClick={clearLogs}
          disabled={isRunning}
          style={{
            ...buttonStyle,
            backgroundColor: isRunning ? '#ccc' : '#6c757d',
          }}
        >
          Clear Logs
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Chain Execution Logs:</h3>
        <div
          style={{
            backgroundColor: '#f8f9fa',
            padding: '15px',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'monospace',
            minHeight: '200px',
            border: '1px solid #dee2e6',
          }}
        >
          {logs.length === 0 ? (
            <div style={{ color: '#6c757d', fontStyle: 'italic' }}>
              Click a button above to see chain execution logs...
            </div>
          ) : (
            logs.map((log, index) => (
              <div key={index} style={{ marginBottom: '5px' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e9ecef',
          borderRadius: '4px',
        }}
      >
        <h4>How Chain Works:</h4>
        <ul>
          <li>
            <strong>Sequential Execution:</strong> Each operation waits for the
            previous to complete
          </li>
          <li>
            <strong>Error Handling:</strong> If any step fails, the chain stops
            and calls .catch()
          </li>
          <li>
            <strong>Final Callbacks:</strong> .then() runs only if all steps
            succeed
          </li>
          <li>
            <strong>Cleanup:</strong> .finally() always runs regardless of
            success/failure
          </li>
          <li>
            <strong>Individual Callbacks:</strong> Each method can have its own
            success/error/loading callbacks
          </li>
        </ul>
      </div>
    </div>
  );
};

const meta: Meta<typeof ChainExample> = {
  title: 'useFetchWithCallbacks/Request Chaining',
  component: ChainExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Advanced request chaining example showing sequential HTTP operations with comprehensive error handling.',
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
type Story = StoryObj<typeof ChainExample>;

export const Default: Story = {
  args: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

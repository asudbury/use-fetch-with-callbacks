import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';
import { storyStyles, getButtonStyle } from './shared/storyStyles';

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

  // Demonstrates chaining with multiple endpoints
  const runSimpleChain = async () => {
    setIsRunning(true);
    clearLogs();

    await chain()
      .fetch({
        endpoint: '/users/1',
        onSuccess: user => {
          addLog(`✅ Step 1: Fetched user ${user?.name}`);
        },
      })
      .post({
        endpoint: '/posts',
        data: { title: 'New Post', body: 'Hello world', userId: 1 },
        onSuccess: post => {
          addLog(`✅ Step 2: Created post with id ${post?.id}`);
        },
      })
      .put({
        endpoint: '/users/1',
        data: { name: 'Final Name', email: 'final@example.com', id: 1 },
        onSuccess: final => {
          addLog(`✅ Step 3: Put final update for ${final?.name}`);
        },
      })
      .then(() => {
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
      .fetch({
        endpoint: '/users/2',
        onSuccess: user => {
          addLog(`✅ Step 1: Fetched user ${user?.name}`);
        },
      })
      .patch({
        endpoint: '/users/2',
        data: { email: 'patched@example.com' },
        onSuccess: patched => {
          addLog(`✅ Step 2: Patched email to ${patched?.email}`);
        },
      })
      .put({
        endpoint: '/users/2',
        data: { name: 'Chain User', email: 'chain@example.com', id: 2 },
        onSuccess: updated => {
          addLog(`✅ Step 3: Full update to ${updated?.name}`);
        },
      })
      .delete({
        endpoint: '/users/2',
        onSuccess: () => {
          addLog(`✅ Step 4: Cleanup completed`);
        },
      })
      .then(() => {
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

  return (
    <div style={storyStyles.container}>
      {/* Gradient Header */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Request Chaining</h1>
        <p style={storyStyles.gradientHeaderSubtitle}>
          Advanced sequential HTTP operations using the powerful chain API for
          complex data workflows and multi-step operations.
        </p>
      </div>

      <div style={storyStyles.card}>
        <h3 style={storyStyles.cardHeader}>🚀 Chain Operations</h3>
        <p style={storyStyles.pageDescription}>
          Base URL: <code>{baseUrl}</code>
        </p>

        <div style={storyStyles.flexCenter}>
          <button
            onClick={runSimpleChain}
            disabled={isRunning}
            style={getButtonStyle('success', isRunning)}
          >
            {isRunning ? 'Running...' : 'Run Simple Chain (GET → POST → PUT)'}
          </button>

          <button
            onClick={runComplexChain}
            disabled={isRunning}
            style={getButtonStyle('primary', isRunning)}
          >
            {isRunning
              ? 'Running...'
              : 'Run Complex Chain (GET → PATCH → PUT → DELETE)'}
          </button>

          <button
            onClick={clearLogs}
            disabled={isRunning}
            style={getButtonStyle('secondary', isRunning)}
          >
            Clear Logs
          </button>
        </div>
      </div>

      <div style={storyStyles.card}>
        <h3 style={storyStyles.cardHeader}>📋 Chain Execution Logs</h3>
        <div style={storyStyles.logsContainer}>
          {logs.length === 0 ? (
            <em>No logs yet. Click one of the chain buttons to start.</em>
          ) : (
            logs.map((log, index) => (
              <div key={index} style={storyStyles.mb16}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      <div style={storyStyles.card}>
        <h3 style={storyStyles.cardHeader}>💡 How Chain Works</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
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
  title: 'Request Chaining',
  component: ChainExample,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Advanced request chaining example showing sequential HTTP operations with comprehensive error handling.\n\n' +
          'You can chain requests to different endpoints in a single chain. Each chainable method (`fetch`, `post`, `put`, `patch`, `delete`) accepts an optional endpoint and per-request callbacks.\n\n' +
          'Example usage:\n' +
          '```tsx\n' +
          'chain()\n' +
          '  .fetch({ endpoint: "/users/1", onSuccess: user => { /* ... */ } })\n' +
          '  .put({ endpoint: "/users/1", data: { name: "New Name" }, onSuccess: updated => { /* ... */ } })\n' +
          '  .then(user => { /* Called after last successful request */ })\n' +
          '  .catch(error => { /* Called if any request fails */ })\n' +
          '  .finally(() => { /* Always called at the end */ })\n' +
          '  .execute();\n' +
          '```\n\n' +
          '- Each step can have its own `onSuccess`, `onError`, and `onLoading` callbacks.\n' +
          '- `.then()` is called after all steps succeed.\n' +
          '- `.catch()` is called if any step fails.\n' +
          '- `.finally()` is always called at the end.',
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

export const RequestChaining: Story = {
  args: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};

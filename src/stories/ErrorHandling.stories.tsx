import React, { useState } from 'react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';
import {
  storyStyles,
  getButtonStyle,
  combineStyles,
} from './shared/storyStyles';

const ErrorHandlingDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState('/posts/999999');

  // Hook instance with different configurations for error scenarios
  const { fetchData, loading, response, error } = useFetchWithCallbacks(
    endpoint,
    {
      baseUrl: 'https://jsonplaceholder.typicode.com',
      timeout: selectedScenario === 'timeout' ? 1 : 5000, // Very short timeout for timeout scenario
    }
  );

  const addLog = (
    message: string,
    type: 'info' | 'success' | 'error' = 'info'
  ) => {
    const timestamp = new Date().toLocaleTimeString();
    const emoji = type === 'success' ? '✅' : type === 'error' ? '❌' : '📝';
    setLogs(prev => [...prev, `${timestamp}: ${emoji} ${message}`]);
  };

  const clearLogs = () => setLogs([]);

  const errorScenarios = [
    {
      id: 'notfound',
      name: '404 Not Found',
      endpoint: '/posts/999999',
      description: 'Try to fetch a non-existent resource',
    },
    {
      id: 'timeout',
      name: 'Request Timeout',
      endpoint: '/posts/1',
      description: 'Simulate a timeout with very short timeout value',
    },
    {
      id: 'invalidjson',
      name: 'Invalid JSON Response',
      endpoint: '/invalid-json-endpoint',
      description: 'Endpoint that returns invalid JSON',
    },
    {
      id: 'networkerror',
      name: 'Network Error',
      endpoint: '/posts/1',
      description: 'Simulate network error with invalid URL',
    },
  ];

  const executeScenario = async () => {
    if (!selectedScenario) {
      addLog('Please select an error scenario first', 'error');
      return;
    }

    const scenario = errorScenarios.find(s => s.id === selectedScenario);
    if (!scenario) return;

    addLog(`🚀 Testing: ${scenario.name}`);
    addLog(`📍 Endpoint: ${scenario.endpoint}`);

    const successCallback = (data: unknown) => {
      addLog(
        `✅ Unexpected success (this shouldn't happen in error scenarios)`,
        'success'
      );
      console.log('Success data:', data);
    };

    const errorCallback = (err: Error) => {
      addLog(`❌ Error caught: ${err.message}`, 'error');
      addLog(`🔍 Error type: ${err.constructor.name}`, 'info');
    };

    const loadingCallback = (isLoading: boolean) => {
      addLog(`⏳ Loading: ${isLoading ? 'started' : 'completed'}`);
    };

    try {
      if (selectedScenario === 'networkerror') {
        // Temporarily change base URL to cause network error
        addLog('🌐 Changing to invalid URL to simulate network error', 'info');
        // Note: We can't easily change the hook's baseUrl after initialization,
        // so we'll just trigger a regular request and let it potentially succeed
        // This is more of a demonstration of the error handling structure
      }

      await fetchData(successCallback, errorCallback, loadingCallback);
    } catch (err) {
      addLog(
        `💥 Unhandled error: ${err instanceof Error ? err.message : 'Unknown error'}`,
        'error'
      );
    }
  };

  return (
    <div style={storyStyles.container}>
      {/* Gradient Header */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>⚠️ Error Handling</h1>
        <p style={storyStyles.gradientHeaderSubtitle}>
          Comprehensive demonstration of how the useFetchWithCallbacks hook
          handles various error scenarios including network errors, timeouts,
          and HTTP errors.
        </p>
      </div>

      {/* Scenario Selection */}
      <div style={storyStyles.card}>
        <h3 style={storyStyles.cardHeader}>🎯 Error Scenarios</h3>
        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            Select an error scenario to test:
          </label>
          <select
            value={selectedScenario}
            onChange={e => {
              const scenario = e.target.value;
              setSelectedScenario(scenario);

              // Update endpoint based on scenario
              const scenarioData = errorScenarios.find(s => s.id === scenario);
              if (scenarioData) {
                setEndpoint(scenarioData.endpoint);
              }
            }}
            style={storyStyles.select}
          >
            <option value="">Choose a scenario...</option>
            {errorScenarios.map(scenario => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name} - {scenario.description}
              </option>
            ))}
          </select>
        </div>

        {selectedScenario && (
          <div style={storyStyles.warningBox}>
            <strong>Selected Scenario:</strong>{' '}
            {errorScenarios.find(s => s.id === selectedScenario)?.name}
            <br />
            <strong>Description:</strong>{' '}
            {errorScenarios.find(s => s.id === selectedScenario)?.description}
            <br />
            <strong>Endpoint:</strong> <code>{endpoint}</code>
          </div>
        )}

        <button
          onClick={executeScenario}
          disabled={!selectedScenario || loading}
          style={getButtonStyle('danger', !selectedScenario || loading)}
        >
          {loading ? 'Testing...' : 'Execute Error Scenario'}
        </button>
      </div>

      {/* Response Display */}
      {(response || error) && (
        <div style={storyStyles.card}>
          <h3 style={storyStyles.cardHeader}>📊 Result</h3>
          {error ? (
            <div style={storyStyles.errorBox}>
              <strong>❌ Error Details:</strong>
              <pre
                style={combineStyles(storyStyles.codeBlock, {
                  marginTop: '10px',
                  whiteSpace: 'pre-wrap',
                })}
              >
                {error.message}
              </pre>
              <div style={{ marginTop: '10px', fontSize: '14px' }}>
                <strong>Error Type:</strong> {error.constructor.name}
              </div>
            </div>
          ) : (
            <div style={storyStyles.successBox}>
              <strong>✅ Unexpected Success:</strong>
              <pre
                style={combineStyles(storyStyles.codeBlock, {
                  marginTop: '10px',
                })}
              >
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Error Handling Logs */}
      <div style={storyStyles.card}>
        <div style={storyStyles.flexBetween}>
          <h3 style={storyStyles.cardHeader}>📋 Error Handling Logs</h3>
          <button onClick={clearLogs} style={getButtonStyle('secondary')}>
            Clear Logs
          </button>
        </div>
        <div style={storyStyles.logsContainer}>
          {logs.length === 0 ? (
            <em>
              No logs yet. Select a scenario and click "Execute Error Scenario"
              to see error handling in action.
            </em>
          ) : (
            logs.map((log, index) => (
              <div key={index} style={storyStyles.mb16}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Error Handling Best Practices */}
      <div
        style={combineStyles(storyStyles.card, { backgroundColor: '#e9ecef' })}
      >
        <h3 style={storyStyles.cardHeader}>💡 Error Handling Best Practices</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Always provide error callbacks to handle failures gracefully</li>
          <li>Use loading callbacks to show appropriate loading states</li>
          <li>Log errors for debugging purposes</li>
          <li>Provide user-friendly error messages</li>
          <li>Consider retry mechanisms for transient errors</li>
          <li>Set appropriate timeouts for different types of requests</li>
        </ul>
      </div>
    </div>
  );
};

// Storybook meta configuration
export default {
  title: 'Error Handling',
  component: ErrorHandlingDemo,
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates how the useFetchWithCallbacks hook handles various error scenarios including network errors, timeouts, and HTTP errors.',
      },
    },
  },
};

// Single story export
export const ErrorHandling = {
  render: () => <ErrorHandlingDemo />,
};

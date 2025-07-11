import React, { useState, useCallback } from 'react';
import useFetchWithCallbacks from '../useFetchWithCallbacks';
import { storyStyles, getButtonStyle, combineStyles } from './shared/storyStyles';

const ApiExplorer = () => {
  const [config, setConfig] = useState({
    method: 'GET',
    endpoint: '/posts/1',
    baseUrl: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: '{"Content-Type": "application/json"}',
    body: '{"title": "Test Post", "body": "This is a test", "userId": 1}',
  });

  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [requestHistory, setRequestHistory] = useState<Array<{
    id: number;
    method: string;
    url: string;
    timestamp: string;
    status: 'success' | 'error';
    response?: unknown;
    error?: string;
  }>>([]);

  const {
    fetchData,
    postData,
    putData,
    deleteData,
    patchData,
    loading,
    response,
    error
  } = useFetchWithCallbacks(config.endpoint, {
    baseUrl: config.baseUrl,
    timeout: config.timeout,
    headers: config.headers ? JSON.parse(config.headers) : undefined,
  });

  const addLog = useCallback((message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    const emoji = type === 'success' ? '✅' : type === 'error' ? '❌' : '📝';
    setLogs(prev => [...prev, `${timestamp}: ${emoji} ${message}`]);
  }, []);

  const addToHistory = useCallback((
    method: string,
    url: string,
    status: 'success' | 'error',
    response?: unknown,
    error?: string
  ) => {
    setRequestHistory(prev => [...prev, {
      id: Date.now(),
      method,
      url: `${config.baseUrl}${config.endpoint}`,
      timestamp: new Date().toLocaleString(),
      status,
      response,
      error,
    }]);
  }, [config.baseUrl, config.endpoint]);

  const executeRequest = useCallback(async () => {
    const fullUrl = `${config.baseUrl}${config.endpoint}`;
    addLog(`🚀 ${config.method} ${fullUrl}`);

    const successCallback = (data: unknown) => {
      addLog(`✅ Success: ${config.method} completed`, 'success');
      addToHistory(config.method, fullUrl, 'success', data);
    };

    const errorCallback = (err: Error) => {
      addLog(`❌ Error: ${err.message}`, 'error');
      addToHistory(config.method, fullUrl, 'error', undefined, err.message);
    };

    const loadingCallback = (isLoading: boolean) => {
      addLog(`⏳ Loading: ${isLoading ? 'started' : 'completed'}`);
    };

    try {
      switch (config.method) {
        case 'GET':
          await fetchData(successCallback, errorCallback, loadingCallback);
          break;
        case 'POST':
          await postData(
            JSON.parse(config.body),
            successCallback,
            errorCallback,
            loadingCallback
          );
          break;
        case 'PUT':
          await putData(
            JSON.parse(config.body),
            successCallback,
            errorCallback,
            loadingCallback
          );
          break;
        case 'DELETE':
          await deleteData(successCallback, errorCallback, loadingCallback);
          break;
        case 'PATCH':
          await patchData(
            JSON.parse(config.body),
            successCallback,
            errorCallback,
            loadingCallback
          );
          break;
        default:
          addLog(`❌ Unsupported method: ${config.method}`, 'error');
      }
    } catch (err) {
      addLog(`❌ Request failed: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error');
    }
  }, [config, fetchData, postData, putData, deleteData, patchData, addLog, addToHistory]);

  const clearLogs = () => setLogs([]);
  const clearHistory = () => setRequestHistory([]);

  const presetEndpoints = [
    { name: 'Get Single Post', method: 'GET', endpoint: '/posts/1' },
    { name: 'Get All Posts', method: 'GET', endpoint: '/posts' },
    { name: 'Get User', method: 'GET', endpoint: '/users/1' },
    { name: 'Create Post', method: 'POST', endpoint: '/posts' },
    { name: 'Update Post', method: 'PUT', endpoint: '/posts/1' },
    { name: 'Delete Post', method: 'DELETE', endpoint: '/posts/1' },
    { name: 'Patch Post', method: 'PATCH', endpoint: '/posts/1' },
  ];

  return (
    <div style={storyStyles.container}>
      {/* Gradient Header */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>🔍 API Explorer</h1>
        <p style={storyStyles.gradientHeaderSubtitle}>
          Interactive API testing interface that lets you explore different endpoints, methods, and configurations of the useFetchWithCallbacks hook in real-time.
        </p>
      </div>

      {/* Configuration Panel */}
      <div style={storyStyles.card}>
        <h3 style={storyStyles.cardHeader}>⚙️ Configuration</h3>

        {/* Quick Presets */}
        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            🎯 Quick Presets:
          </label>
          <select
            value={selectedPreset}
            onChange={(e) => {
              const presetValue = e.target.value;
              setSelectedPreset(presetValue);

              if (presetValue) {
                const selectedPresetData = presetEndpoints.find(p => `${p.method}:${p.endpoint}` === presetValue);
                if (selectedPresetData) {
                  setConfig(prev => ({
                    ...prev,
                    method: selectedPresetData.method,
                    endpoint: selectedPresetData.endpoint
                  }));
                }
              }
            }}
            style={storyStyles.select}
          >
            <option value="">Select a preset...</option>
            {presetEndpoints.map((preset, index) => (
              <option key={index} value={`${preset.method}:${preset.endpoint}`}>
                {preset.method} - {preset.name} ({preset.endpoint})
              </option>
            ))}
          </select>
        </div>

        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            HTTP Method:
          </label>
          <select
            value={config.method}
            onChange={(e) => setConfig(prev => ({ ...prev, method: e.target.value }))}
            style={storyStyles.select}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="PATCH">PATCH</option>
          </select>
        </div>

        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            Base URL:
          </label>
          <input
            type="text"
            value={config.baseUrl}
            onChange={(e) => setConfig(prev => ({ ...prev, baseUrl: e.target.value }))}
            style={storyStyles.input}
          />
        </div>

        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            Endpoint:
          </label>
          <input
            type="text"
            value={config.endpoint}
            onChange={(e) => setConfig(prev => ({ ...prev, endpoint: e.target.value }))}
            style={storyStyles.input}
          />
        </div>

        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            Timeout (ms):
          </label>
          <input
            type="number"
            value={config.timeout}
            onChange={(e) => setConfig(prev => ({ ...prev, timeout: parseInt(e.target.value) }))}
            style={storyStyles.input}
          />
        </div>

        <div style={storyStyles.formGroup}>
          <label style={storyStyles.label}>
            Headers (JSON):
          </label>
          <textarea
            value={config.headers}
            onChange={(e) => setConfig(prev => ({ ...prev, headers: e.target.value }))}
            rows={3}
            style={storyStyles.textarea}
          />
        </div>

        {['POST', 'PUT', 'PATCH'].includes(config.method) && (
          <div style={storyStyles.formGroup}>
            <label style={storyStyles.label}>
              Request Body (JSON):
            </label>
            <textarea
              value={config.body}
              onChange={(e) => setConfig(prev => ({ ...prev, body: e.target.value }))}
              rows={4}
              style={storyStyles.textarea}
            />
          </div>
        )}

        <button
          onClick={executeRequest}
          disabled={loading}
          style={getButtonStyle('primary', loading)}
        >
          {loading ? 'Executing...' : `Execute ${config.method} Request`}
        </button>
      </div>

      {/* Response Display */}
      {(response || error) && (
        <div style={storyStyles.card}>
          <h3 style={storyStyles.cardHeader}>📊 Response</h3>
          {error ? (
            <div style={storyStyles.errorBox}>
              <strong>Error:</strong> {error.message}
            </div>
          ) : (
            <pre style={storyStyles.codeBlock}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </div>
      )}

      {/* Request Logs */}
      <div style={storyStyles.card}>
        <div style={storyStyles.flexBetween}>
          <h3 style={storyStyles.cardHeader}>📋 Request Logs</h3>
          <button
            onClick={clearLogs}
            style={getButtonStyle('secondary')}
          >
            Clear
          </button>
        </div>
        <div style={storyStyles.logsContainer}>
          {logs.length === 0 ? (
            <em>No logs yet...</em>
          ) : (
            logs.map((log, index) => (
              <div key={index} style={storyStyles.mb16}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Request History */}
      <div style={storyStyles.card}>
        <div style={storyStyles.flexBetween}>
          <h3 style={storyStyles.cardHeader}>📚 Request History</h3>
          <button
            onClick={clearHistory}
            style={getButtonStyle('danger')}
          >
            Clear History
          </button>
        </div>
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {requestHistory.length === 0 ? (
            <em>No requests yet...</em>
          ) : (
            requestHistory.map((request) => (
              <div
                key={request.id}
                style={combineStyles(
                  storyStyles.listItem,
                  request.status === 'success' ? storyStyles.listItemSuccess : storyStyles.listItemError
                )}
              >
                <div style={storyStyles.textBold}>
                  {request.method} {request.url}
                  <span style={{ float: 'right', fontWeight: 'normal' }}>
                    {request.timestamp}
                  </span>
                </div>
                <div style={combineStyles({ marginTop: '8px' }, storyStyles.textMuted)}>
                  Status: {request.status === 'success' ? '✅ Success' : '❌ Error'}
                  {request.error && ` - ${request.error}`}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Storybook meta configuration
export default {
  title: 'API Explorer',
  component: ApiExplorer,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive API explorer that lets you test different endpoints, methods, and configurations of the useFetchWithCallbacks hook.',
      },
    },
  },
};

// Single story export that will show as "API Explorer" in navigation
export const APIExplorer = {
  render: () => <ApiExplorer />,
};

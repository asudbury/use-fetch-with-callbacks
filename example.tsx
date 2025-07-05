import React from 'react';
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

interface User {
  id: number;
  name: string;
  email: string;
  status?: string;
}

export const ComprehensiveExample: React.FC = () => {
  const { 
    response, 
    loading, 
    error, 
    fetchData, 
    postData, 
    putData, 
    deleteData, 
    patchData,
    fetchMultipleData,
    chain 
  } = useFetchWithCallbacks<User>('/users/1', {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {
      'Authorization': 'Bearer your-token-here'
    }
  });

  // Basic HTTP methods
  const handleFetch = () => {
    fetchData(
      (data) => console.log('✅ User fetched:', data),
      (error) => console.error('❌ Fetch failed:', error),
      (loading) => console.log('🔄 Loading state:', loading)
    );
  };

  const handleCreate = () => {
    postData(
      { name: 'New User', email: 'new@example.com' },
      (data) => console.log('✅ User created:', data),
      (error) => console.error('❌ Create failed:', error)
    );
  };

  const handleUpdate = () => {
    putData(
      { id: 1, name: 'Updated User', email: 'updated@example.com' },
      (data) => console.log('✅ User updated:', data),
      (error) => console.error('❌ Update failed:', error)
    );
  };

  const handlePartialUpdate = () => {
    patchData(
      { status: 'active' },
      (data) => console.log('✅ User partially updated:', data),
      (error) => console.error('❌ Partial update failed:', error)
    );
  };

  const handleDelete = () => {
    deleteData(
      (data) => console.log('✅ User deleted:', data),
      (error) => console.error('❌ Delete failed:', error)
    );
  };

  // Multiple concurrent requests
  const handleMultipleFetch = () => {
    fetchMultipleData(
      ['/users/1', '/users/2', '/users/3'],
      (results) => console.log('✅ Multiple users fetched:', results),
      (error) => console.error('❌ Multiple fetch failed:', error)
    );
  };

  // Complex workflow with chaining
  const handleComplexWorkflow = async () => {
    await chain()
      .fetch((user) => {
        console.log('1️⃣ Fetched user:', user);
      })
      .patch({ 
        lastLogin: new Date().toISOString() 
      }, (updated) => {
        console.log('2️⃣ Updated login time:', updated);
      })
      .put({ 
        ...response,
        status: 'active' 
      }, (activated) => {
        console.log('3️⃣ Activated user:', activated);
      })
      .then((finalResult) => {
        console.log('✅ Complex workflow completed:', finalResult);
      })
      .catch((error) => {
        console.error('❌ Workflow failed:', error);
      })
      .finally(() => {
        console.log('🔄 Workflow finished');
      })
      .execute();
  };

  // CRUD workflow
  const handleCRUDWorkflow = async () => {
    await chain()
      .post({ 
        name: 'CRUD User', 
        email: 'crud@example.com' 
      }, (created) => {
        console.log('Created:', created);
      })
      .patch({ 
        status: 'verified' 
      }, (updated) => {
        console.log('Updated:', updated);
      })
      .delete((deleted) => {
        console.log('Deleted:', deleted);
      })
      .then(() => {
        console.log('CRUD workflow completed');
      })
      .execute();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🚀 useFetchWithCallbacks - Complete Example</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>📊 Current State</h2>
        <p><strong>Loading:</strong> {loading ? '🔄 Yes' : '✅ No'}</p>
        <p><strong>Error:</strong> {error ? `❌ ${error.message}` : '✅ None'}</p>
        <p><strong>Response:</strong> {response ? `✅ ${JSON.stringify(response)}` : '❌ None'}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>🔧 Basic HTTP Methods</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={handleFetch}>GET - Fetch User</button>
          <button onClick={handleCreate}>POST - Create User</button>
          <button onClick={handleUpdate}>PUT - Update User</button>
          <button onClick={handlePartialUpdate}>PATCH - Partial Update</button>
          <button onClick={handleDelete}>DELETE - Delete User</button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>🔗 Advanced Features</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={handleMultipleFetch}>📡 Multiple Requests</button>
          <button onClick={handleComplexWorkflow}>⚡ Complex Workflow</button>
          <button onClick={handleCRUDWorkflow}>🔄 CRUD Workflow</button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>📋 Features Demonstrated</h2>
        <ul>
          <li>✅ All HTTP methods (GET, POST, PUT, PATCH, DELETE)</li>
          <li>✅ Individual callbacks for each operation</li>
          <li>✅ Request chaining with sequential operations</li>
          <li>✅ Multiple concurrent requests</li>
          <li>✅ Error handling and loading states</li>
          <li>✅ TypeScript support with proper typing</li>
          <li>✅ Configurable timeout and headers</li>
          <li>✅ Automatic request cancellation</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '15px', 
        borderRadius: '5px',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        <strong>💡 Tip:</strong> Open your browser's console to see the detailed logs of all operations!
      </div>
    </div>
  );
};

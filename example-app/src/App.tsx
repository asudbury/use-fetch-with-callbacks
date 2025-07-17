import React from 'react';
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function App() {
  const { loading, error, fetchData } = useFetchWithCallbacks<string>('https://jsonplaceholder.typicode.com/users');
  const [loadedData, setLoadedData] = React.useState<string | null>(null);

  const handleSuccess = (data: string) => {
    setLoadedData(data);
  };

  const handleFetch = () => {
    fetchData({
      onSuccess: handleSuccess
    });
  };

  return (
    <div>
      <button onClick={handleFetch}>Load Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {loadedData && <pre>{JSON.stringify(loadedData, null, 2)}</pre>}
    </div>
  );
}

export default App;

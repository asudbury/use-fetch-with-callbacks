import React, { useState } from 'react';
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function App() {
  const { loading, error, fetchData } = useFetchWithCallbacks<string>('https://jsonplaceholder.typicode.com/users/1');
  const [firstResponse, setFirstResponse] = useState<string | null>(null);
  const [secondResponse, setSecondResponse] = useState<string | null>(null);

  const handleSuccess = (data: string) => {
    setFirstResponse(data);
    fetchData({ endpoint: 'https://jsonplaceholder.typicode.com/posts/1', onSuccess: (data) => {
      setSecondResponse(data);
    }});
  };

  const handleFetch = () => {
    setFirstResponse(null);
    setSecondResponse(null);
    fetchData({ onSuccess: handleSuccess });
  };

  return (
    <>
        <button onClick={handleFetch}>Load Data</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        {firstResponse && (
          <>
            <hr />
            <div>1st response</div>
            {firstResponse && <pre>{JSON.stringify(firstResponse, null, 2)}</pre>}
          </>
        )}

        {secondResponse && (
          <>
            <hr />
            <div>2nd response</div>
            <pre>{JSON.stringify(secondResponse, null, 2)}</pre>
          </>
        )}
    </>
  );
}

export default App;

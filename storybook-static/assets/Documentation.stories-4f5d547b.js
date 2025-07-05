const o={title:"useFetchWithCallbacks/Documentation",parameters:{docs:{page:()=>null,description:{component:`# useFetchWithCallbacks\r

A powerful React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration.\r

## Features\r

- ✅ **Full HTTP Methods**: GET, POST, PUT, DELETE, PATCH with callback support\r
- ✅ **Request Chaining**: Sequential operations with fluent API\r
- ✅ **Multiple Requests**: Concurrent requests to different endpoints\r
- ✅ **Request Timeout**: Configurable timeout with automatic cancellation\r
- ✅ **AbortController**: Automatic request cancellation on unmount\r
- ✅ **TypeScript First**: Full type safety and IntelliSense support\r
- ✅ **Lightweight**: Zero dependencies except React\r
- ✅ **Flexible**: Customizable headers, base URLs, and error handling\r

## Installation\r

\`\`\`bash\r
npm install use-fetch-with-callbacks\r
\`\`\`\r

## Basic Usage\r

\`\`\`typescript\r
import useFetchWithCallbacks from 'use-fetch-with-callbacks';\r

interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
}\r

const UserComponent = () => {\r
  const { response, loading, error, fetchData } = useFetchWithCallbacks<User>('/users/1', {\r
    baseUrl: 'https://api.example.com',\r
    headers: { Authorization: 'Bearer token' },\r
    timeout: 5000\r
  });\r

  const handleFetch = () => {\r
    fetchData(\r
      (data) => console.log('Success:', data),\r
      (error) => console.error('Error:', error),\r
      (loading) => console.log('Loading:', loading)\r
    );\r
  };\r

  return (\r
    <div>\r
      <button onClick={handleFetch}>Fetch User</button>\r
      {loading && <p>Loading...</p>}\r
      {error && <p>Error: {error.message}</p>}\r
      {response && <p>Hello, {response.name}!</p>}\r
    </div>\r
  );\r
};\r
\`\`\`\r

## Request Chaining\r

\`\`\`typescript\r
const { chain } = useFetchWithCallbacks<User>('/users/1');\r

// Execute multiple operations sequentially\r
await chain()\r
  .fetch((user) => console.log('1. Fetched:', user))\r
  .post({ name: 'John' }, (created) => console.log('2. Created:', created))\r
  .put({ name: 'Jane' }, (updated) => console.log('3. Updated:', updated))\r
  .delete((deleted) => console.log('4. Deleted:', deleted))\r
  .then((final) => console.log('All operations completed!'))\r
  .catch((error) => console.error('Chain failed:', error))\r
  .finally(() => console.log('Cleanup'))\r
  .execute();\r
\`\`\`\r

## All HTTP Methods\r

\`\`\`typescript\r
const { fetchData, postData, putData, patchData, deleteData } = useFetchWithCallbacks<User>('/users/1');\r

// GET request\r
fetchData(onSuccess, onError, onLoading);\r

// POST request\r
postData(newUser, onSuccess, onError, onLoading);\r

// PUT request\r
putData(updatedUser, onSuccess, onError, onLoading);\r

// PATCH request\r
patchData(partialUpdate, onSuccess, onError, onLoading);\r

// DELETE request\r
deleteData(onSuccess, onError, onLoading);\r
\`\`\`\r

## Configuration Options\r

\`\`\`typescript\r
interface UseFetchOptions {\r
  baseUrl?: string;      // Base URL for all requests\r
  headers?: HeadersInit; // Default headers\r
  timeout?: number;      // Request timeout (default: 10000ms)\r
}\r
\`\`\`\r

## Error Handling\r

The hook provides comprehensive error handling for:\r
- Network errors\r
- HTTP status errors\r
- Request timeouts\r
- Request cancellation\r

## TypeScript Support\r

Full TypeScript support with proper type inference and IntelliSense.`}}}},e=()=>null;var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => null",...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const a=["Documentation"];export{e as Documentation,a as __namedExportsOrder,o as default};

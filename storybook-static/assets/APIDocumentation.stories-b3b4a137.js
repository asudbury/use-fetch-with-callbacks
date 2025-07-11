import{j as o,s as t}from"./storyStyles-370e2c63.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const d=()=>{const i=`
## useFetchWithCallbacks Hook

A comprehensive React hook for making HTTP requests with callback support

This hook provides a complete solution for handling HTTP requests in React applications,
including support for all common HTTP methods, request chaining, timeout handling,
retry logic, and comprehensive callback management.

### Type Parameters
- \`T\` - The type of data expected from API responses

### Parameters
- \`url\` - The base URL endpoint for requests
- \`options\` - Configuration options for the hook behavior

### Returns
\`FetchResult<T>\` object with request state and methods

## Interfaces

### FetchResult<T>

Result object returned by the useFetchWithCallbacks hook

#### Properties

- **response**: \`T | null\`
  The response data from the API call, null if no data has been fetched yet

- **loading**: \`boolean\`
  Whether a request is currently in progress

- **error**: \`Error | null\`
  Any error that occurred during the request, null if no error

- **requestCompleted**: \`boolean\`
  Whether at least one request has been completed (successfully or with error)

- **fetchData**: \`(onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs a GET request to the specified endpoint

- **postData**: \`(data, onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs a POST request to the specified endpoint

- **putData**: \`(data, onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs a PUT request to the specified endpoint

- **deleteData**: \`(onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs a DELETE request to the specified endpoint

- **patchData**: \`(data, onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs a PATCH request to the specified endpoint

- **fetchMultipleData**: \`(endpoints[], onSuccess?, onError?, onLoading?) => Promise<void>\`
  Performs multiple GET requests to different endpoints concurrently

- **chain**: \`() => ChainableRequest<T>\`
  Provides a chainable interface for sequential operations

### UseFetchOptions

Configuration options for the useFetchWithCallbacks hook

#### Properties

- **baseUrl?**: \`string\`
  Base URL to prepend to all endpoint paths

- **headers?**: \`HeadersInit\`
  Additional headers to include in all requests

- **timeout?**: \`number\`
  Request timeout in milliseconds (default: 10000)

### ChainableRequest<T>

Chainable request interface for sequential operations

#### Methods

- **fetch**: \`(onSuccess?, onError?, onLoading?) => ChainableRequest<T>\`
  Performs a GET request and returns a chainable object

- **post**: \`(data, onSuccess?, onError?, onLoading?) => ChainableRequest<T>\`
  Performs a POST request and returns a chainable object

- **put**: \`(data, onSuccess?, onError?, onLoading?) => ChainableRequest<T>\`
  Performs a PUT request and returns a chainable object

- **delete**: \`(onSuccess?, onError?, onLoading?) => ChainableRequest<T>\`
  Performs a DELETE request and returns a chainable object

- **patch**: \`(data, onSuccess?, onError?, onLoading?) => ChainableRequest<T>\`
  Performs a PATCH request and returns a chainable object

- **execute**: \`() => Promise<void>\`
  Executes the chained operations sequentially

- **then**: \`(callback: (data: T) => void) => ChainableRequest<T>\`
  Adds a success callback to be executed after all operations complete

- **catch**: \`(callback: (error: Error) => void) => ChainableRequest<T>\`
  Adds an error callback to be executed if any operation fails

- **finally**: \`(callback: () => void) => ChainableRequest<T>\`
  Adds a callback to be executed after all operations complete (success or error)
`.trim(),c=l=>{let e=l;return e=e.replace(/^# (.+)$/gm,'<h1 style="font-size: 2.5rem; color: #2563eb; margin: 2rem 0 1rem 0; border-bottom: 3px solid #e5e7eb; padding-bottom: 1rem;">📚 $1</h1>'),e=e.replace(/^## (.+)$/gm,'<h2 style="font-size: 2rem; color: #1e40af; margin: 2rem 0 1rem 0;">🎣 $1</h2>'),e=e.replace(/^### (.+)$/gm,`<h3 style="font-size: 1.5rem; color: #1e40af; margin: 1.5rem 0 1rem 0; font-family: 'Consolas', 'Monaco', monospace;">📋 $1</h3>`),e=e.replace(/^#### (.+)$/gm,'<h4 style="font-size: 1.2rem; color: #374151; margin: 1rem 0 0.5rem 0;">⚙️ $1</h4>'),e=e.replace(/`([^`]+)`/g,`<code style="background: #f1f5f9; color: #1e40af; padding: 0.2rem 0.4rem; border-radius: 3px; font-family: 'Consolas', 'Monaco', monospace;">$1</code>`),e=e.replace(/\*\*([^*]+)\*\*/g,'<strong style="color: #1e293b;">$1</strong>'),e=e.replace(/\n\n/g,'</p><p style="margin: 1rem 0; line-height: 1.6;">'),e=e.replace(/\n- /g,'</p><div style="margin: 0.5rem 0; padding-left: 1rem;"><span style="color: #2563eb;">•</span> '),e=e.replace(/\n {2}/g,"<br/>{2}"),e='<p style="margin: 1rem 0; line-height: 1.6;">'+e+"</p>",e};return o.jsx("div",{style:t.container,children:o.jsx("div",{style:t.card,dangerouslySetInnerHTML:{__html:c(i)}})})},h={title:"API Reference",parameters:{docs:{page:null}}},r={render:()=>o.jsx(d,{}),parameters:{layout:"fullscreen"}};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <APIDocumentation />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["APIReference"];export{r as APIReference,f as __namedExportsOrder,h as default};

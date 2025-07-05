import{j as e}from"./jsx-runtime-1a9d9a93.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const p={title:"Introduction",parameters:{docs:{description:{component:`
# useFetchWithCallbacks

A powerful, production-ready React hook for HTTP requests with comprehensive callback support, request chaining, and TypeScript integration.

## 🎯 Key Features

- **✅ Complete HTTP Methods**: GET, POST, PUT, DELETE, PATCH support
- **🔗 Request Chaining**: Sequential operations with chainable API
- **📞 Callback Support**: Success, error, and loading callbacks
- **⚡ Performance Optimized**: Memory leak prevention and efficient state management
- **🛡️ Type Safe**: Full TypeScript support with generic types
- **🚫 Request Cancellation**: Built-in AbortController support
- **⏱️ Timeout Support**: Configurable request timeouts
- **🔄 Concurrent Requests**: Handle multiple simultaneous requests
- **📊 State Management**: Comprehensive loading, error, and response states

## 📦 Installation

\`\`\`bash
npm install use-fetch-with-callbacks
\`\`\`

## 🚀 Quick Start

\`\`\`tsx
import useFetchWithCallbacks from 'use-fetch-with-callbacks';

function MyComponent() {
  const { fetchData, loading, response, error } = useFetchWithCallbacks(
    'https://api.example.com/users'
  );

  const handleFetch = () => {
    fetchData(
      (data) => console.log('Success:', data),
      (error) => console.error('Error:', error),
      (loading) => console.log('Loading:', loading)
    );
  };

  return (
    <div>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error.message}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
\`\`\`

## 📚 Documentation

Explore the stories in this Storybook to see comprehensive examples and use cases:

- **[Basic Usage](/?path=/story/examples-basic-usage--basic-fetch)** - Simple GET requests and basic functionality
- **[CRUD Operations](/?path=/story/examples-crud-operations--crud-example)** - Complete REST API operations
- **[Request Chaining](/?path=/story/examples-request-chaining--chaining-example)** - Sequential HTTP operations
- **[Performance](/?path=/story/advanced-performance-optimization--performance-optimization)** - Optimization techniques and best practices

## 🔗 Links

- **[GitHub Repository](https://github.com/yourusername/use-fetch-with-callbacks)**
- **[npm Package](https://www.npmjs.com/package/use-fetch-with-callbacks)**
- **[API Documentation](/?path=/story/documentation--api-reference)**

## 📄 License

MIT © [Your Name]
        `}}}},n=()=>e.jsxs("div",{style:{padding:"40px",fontFamily:"system-ui, -apple-system, sans-serif",maxWidth:"800px",margin:"0 auto",lineHeight:"1.6"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"40px",padding:"30px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",color:"white"},children:[e.jsx("h1",{style:{fontSize:"3em",margin:"0 0 16px 0",fontWeight:"700"},children:"useFetchWithCallbacks"}),e.jsx("p",{style:{fontSize:"1.2em",margin:0,opacity:.9},children:"A powerful React hook for HTTP requests with comprehensive callback support"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",marginBottom:"40px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("h3",{style:{color:"#495057",marginTop:0},children:"🎯 Type Safe"}),e.jsx("p",{style:{margin:0,color:"#6c757d"},children:"Full TypeScript support with generic types for complete type safety"})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("h3",{style:{color:"#495057",marginTop:0},children:"⚡ Performance"}),e.jsx("p",{style:{margin:0,color:"#6c757d"},children:"Optimized for performance with memory leak prevention and efficient state management"})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("h3",{style:{color:"#495057",marginTop:0},children:"🔗 Chainable"}),e.jsx("p",{style:{margin:0,color:"#6c757d"},children:"Support for request chaining and sequential operations"})]})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#e3f2fd",borderRadius:"8px",border:"1px solid #bbdefb",textAlign:"center"},children:[e.jsx("h3",{style:{color:"#1565c0",marginTop:0},children:"🚀 Ready to Get Started?"}),e.jsx("p",{style:{margin:"16px 0",color:"#1976d2"},children:"Explore the interactive examples and documentation in the sidebar"}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#1976d2",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},onClick:()=>window.open("/?path=/story/examples-basic-usage--basic-fetch","_self"),children:"View Examples"}),e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"transparent",color:"#1976d2",border:"2px solid #1976d2",borderRadius:"6px",cursor:"pointer",fontWeight:"500"},onClick:()=>window.open("/?path=/story/documentation--api-reference","_self"),children:"API Reference"})]})]})]}),t={render:()=>e.jsx(n,{}),parameters:{layout:"fullscreen",docs:{page:null}}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <WelcomeComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null // Disable docs page for this story
    }
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const c=["Welcome"];export{t as Welcome,c as __namedExportsOrder,p as default};

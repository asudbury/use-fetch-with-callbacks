import { j as e, s as r, g as v, c as u } from './storyStyles-370e2c63.js';
import { r as x } from './index-8b3efc3f.js';
import { u as $ } from './useFetchWithCallbacks-0999b78a.js';
import './_commonjsHelpers-de833af9.js';
const w = () => {
    var f, S;
    const [o, C] = x.useState(''),
      [m, g] = x.useState([]),
      [j, H] = x.useState('/posts/999999'),
      {
        fetchData: T,
        loading: p,
        response: y,
        error: d,
      } = $(j, {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        timeout: o === 'timeout' ? 1 : 5e3,
      }),
      t = (s, i = 'info') => {
        const a = new Date().toLocaleTimeString(),
          l = i === 'success' ? '✅' : i === 'error' ? '❌' : '📝';
        g(n => [...n, `${a}: ${l} ${s}`]);
      },
      L = () => g([]),
      c = [
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
      ],
      D = async () => {
        if (!o) {
          t('Please select an error scenario first', 'error');
          return;
        }
        const s = c.find(n => n.id === o);
        if (!s) return;
        (t(`🚀 Testing: ${s.name}`), t(`📍 Endpoint: ${s.endpoint}`));
        const i = n => {
            (t(
              "✅ Unexpected success (this shouldn't happen in error scenarios)",
              'success'
            ),
              console.log('Success data:', n));
          },
          a = n => {
            (t(`❌ Error caught: ${n.message}`, 'error'),
              t(`🔍 Error type: ${n.constructor.name}`, 'info'));
          },
          l = n => {
            t(`⏳ Loading: ${n ? 'started' : 'completed'}`);
          };
        try {
          (o === 'networkerror' &&
            t('🌐 Changing to invalid URL to simulate network error', 'info'),
            await T(i, a, l));
        } catch (n) {
          t(
            `💥 Unhandled error: ${n instanceof Error ? n.message : 'Unknown error'}`,
            'error'
          );
        }
      };
    return e.jsxs('div', {
      style: r.container,
      children: [
        e.jsx('h2', {
          style: r.pageTitle,
          children: '⚠️ Error Handling Demonstration',
        }),
        e.jsxs('p', {
          style: r.pageDescription,
          children: [
            'This demo shows how the ',
            e.jsx('code', { children: 'useFetchWithCallbacks' }),
            ' hook handles various error scenarios. Each scenario demonstrates different types of errors you might encounter in real applications.',
          ],
        }),
        e.jsxs('div', {
          style: r.card,
          children: [
            e.jsx('h3', {
              style: r.cardHeader,
              children: '🎯 Error Scenarios',
            }),
            e.jsxs('div', {
              style: r.formGroup,
              children: [
                e.jsx('label', {
                  style: r.label,
                  children: 'Select an error scenario to test:',
                }),
                e.jsxs('select', {
                  value: o,
                  onChange: s => {
                    const i = s.target.value;
                    C(i);
                    const a = c.find(l => l.id === i);
                    a && H(a.endpoint);
                  },
                  style: r.select,
                  children: [
                    e.jsx('option', {
                      value: '',
                      children: 'Choose a scenario...',
                    }),
                    c.map(s =>
                      e.jsxs(
                        'option',
                        {
                          value: s.id,
                          children: [s.name, ' - ', s.description],
                        },
                        s.id
                      )
                    ),
                  ],
                }),
              ],
            }),
            o &&
              e.jsxs('div', {
                style: r.warningBox,
                children: [
                  e.jsx('strong', { children: 'Selected Scenario:' }),
                  ' ',
                  (f = c.find(s => s.id === o)) == null ? void 0 : f.name,
                  e.jsx('br', {}),
                  e.jsx('strong', { children: 'Description:' }),
                  ' ',
                  (S = c.find(s => s.id === o)) == null
                    ? void 0
                    : S.description,
                  e.jsx('br', {}),
                  e.jsx('strong', { children: 'Endpoint:' }),
                  ' ',
                  e.jsx('code', { children: j }),
                ],
              }),
            e.jsx('button', {
              onClick: D,
              disabled: !o || p,
              style: v('danger', !o || p),
              children: p ? 'Testing...' : 'Execute Error Scenario',
            }),
          ],
        }),
        (y || d) &&
          e.jsxs('div', {
            style: r.card,
            children: [
              e.jsx('h3', { style: r.cardHeader, children: '📊 Result' }),
              d
                ? e.jsxs('div', {
                    style: r.errorBox,
                    children: [
                      e.jsx('strong', { children: '❌ Error Details:' }),
                      e.jsx('pre', {
                        style: u(r.codeBlock, {
                          marginTop: '10px',
                          whiteSpace: 'pre-wrap',
                        }),
                        children: d.message,
                      }),
                      e.jsxs('div', {
                        style: { marginTop: '10px', fontSize: '14px' },
                        children: [
                          e.jsx('strong', { children: 'Error Type:' }),
                          ' ',
                          d.constructor.name,
                        ],
                      }),
                    ],
                  })
                : e.jsxs('div', {
                    style: r.successBox,
                    children: [
                      e.jsx('strong', { children: '✅ Unexpected Success:' }),
                      e.jsx('pre', {
                        style: u(r.codeBlock, { marginTop: '10px' }),
                        children: JSON.stringify(y, null, 2),
                      }),
                    ],
                  }),
            ],
          }),
        e.jsxs('div', {
          style: r.card,
          children: [
            e.jsxs('div', {
              style: r.flexBetween,
              children: [
                e.jsx('h3', {
                  style: r.cardHeader,
                  children: '📋 Error Handling Logs',
                }),
                e.jsx('button', {
                  onClick: L,
                  style: v('secondary'),
                  children: 'Clear Logs',
                }),
              ],
            }),
            e.jsx('div', {
              style: r.logsContainer,
              children:
                m.length === 0
                  ? e.jsx('em', {
                      children:
                        'No logs yet. Select a scenario and click "Execute Error Scenario" to see error handling in action.',
                    })
                  : m.map((s, i) =>
                      e.jsx('div', { style: r.mb16, children: s }, i)
                    ),
            }),
          ],
        }),
        e.jsxs('div', {
          style: u(r.card, { backgroundColor: '#e9ecef' }),
          children: [
            e.jsx('h3', {
              style: r.cardHeader,
              children: '💡 Error Handling Best Practices',
            }),
            e.jsxs('ul', {
              style: { paddingLeft: '20px', margin: 0 },
              children: [
                e.jsx('li', {
                  children:
                    'Always provide error callbacks to handle failures gracefully',
                }),
                e.jsx('li', {
                  children:
                    'Use loading callbacks to show appropriate loading states',
                }),
                e.jsx('li', { children: 'Log errors for debugging purposes' }),
                e.jsx('li', {
                  children: 'Provide user-friendly error messages',
                }),
                e.jsx('li', {
                  children: 'Consider retry mechanisms for transient errors',
                }),
                e.jsx('li', {
                  children:
                    'Set appropriate timeouts for different types of requests',
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  F = {
    title: 'Error Handling',
    component: w,
    parameters: {
      docs: {
        description: {
          component:
            'Demonstrates how the useFetchWithCallbacks hook handles various error scenarios including network errors, timeouts, and HTTP errors.',
        },
      },
    },
  },
  h = { render: () => e.jsx(w, {}) };
var E, k, b;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((E = h.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => <ErrorHandlingDemo />
}`,
      ...((b = (k = h.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : b.source),
    },
  },
};
const O = ['ErrorHandling'];
export { h as ErrorHandling, O as __namedExportsOrder, F as default };

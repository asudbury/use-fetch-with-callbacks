import { j as e, s as t, g as x, c as k } from './storyStyles-370e2c63.js';
import { r as c } from './index-8b3efc3f.js';
import { u as R } from './useFetchWithCallbacks-0999b78a.js';
import './_commonjsHelpers-de833af9.js';
const G = () => {
    const [o, i] = c.useState({
        method: 'GET',
        endpoint: '/posts/1',
        baseUrl: 'https://jsonplaceholder.typicode.com',
        timeout: 5e3,
        headers: '{"Content-Type": "application/json"}',
        body: '{"title": "Test Post", "body": "This is a test", "userId": 1}',
      }),
      [w, A] = c.useState(''),
      [y, j] = c.useState([]),
      [b, g] = c.useState([]),
      {
        fetchData: v,
        postData: E,
        putData: T,
        deleteData: f,
        patchData: P,
        loading: p,
        response: C,
        error: u,
      } = R(o.endpoint, {
        baseUrl: o.baseUrl,
        timeout: o.timeout,
        headers: o.headers ? JSON.parse(o.headers) : void 0,
      }),
      d = c.useCallback((s, r = 'info') => {
        const a = new Date().toLocaleTimeString(),
          l = r === 'success' ? '✅' : r === 'error' ? '❌' : '📝';
        j(n => [...n, `${a}: ${l} ${s}`]);
      }, []),
      m = c.useCallback(
        (s, r, a, l, n) => {
          g(I => [
            ...I,
            {
              id: Date.now(),
              method: s,
              url: `${o.baseUrl}${o.endpoint}`,
              timestamp: new Date().toLocaleString(),
              status: a,
              response: l,
              error: n,
            },
          ]);
        },
        [o.baseUrl, o.endpoint]
      ),
      D = c.useCallback(async () => {
        const s = `${o.baseUrl}${o.endpoint}`;
        d(`🚀 ${o.method} ${s}`);
        const r = n => {
            (d(`✅ Success: ${o.method} completed`, 'success'),
              m(o.method, s, 'success', n));
          },
          a = n => {
            (d(`❌ Error: ${n.message}`, 'error'),
              m(o.method, s, 'error', void 0, n.message));
          },
          l = n => {
            d(`⏳ Loading: ${n ? 'started' : 'completed'}`);
          };
        try {
          switch (o.method) {
            case 'GET':
              await v(r, a, l);
              break;
            case 'POST':
              await E(JSON.parse(o.body), r, a, l);
              break;
            case 'PUT':
              await T(JSON.parse(o.body), r, a, l);
              break;
            case 'DELETE':
              await f(r, a, l);
              break;
            case 'PATCH':
              await P(JSON.parse(o.body), r, a, l);
              break;
            default:
              d(`❌ Unsupported method: ${o.method}`, 'error');
          }
        } catch (n) {
          d(
            `❌ Request failed: ${n instanceof Error ? n.message : 'Unknown error'}`,
            'error'
          );
        }
      }, [o, v, E, T, f, P, d, m]),
      O = () => j([]),
      L = () => g([]),
      S = [
        { name: 'Get Single Post', method: 'GET', endpoint: '/posts/1' },
        { name: 'Get All Posts', method: 'GET', endpoint: '/posts' },
        { name: 'Get User', method: 'GET', endpoint: '/users/1' },
        { name: 'Create Post', method: 'POST', endpoint: '/posts' },
        { name: 'Update Post', method: 'PUT', endpoint: '/posts/1' },
        { name: 'Delete Post', method: 'DELETE', endpoint: '/posts/1' },
        { name: 'Patch Post', method: 'PATCH', endpoint: '/posts/1' },
      ];
    return e.jsxs('div', {
      style: t.container,
      children: [
        e.jsx('h2', { style: t.pageTitle, children: '🔍 API Explorer' }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsx('h3', { style: t.cardHeader, children: '⚙️ Configuration' }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', {
                  style: t.label,
                  children: '🎯 Quick Presets:',
                }),
                e.jsxs('select', {
                  value: w,
                  onChange: s => {
                    const r = s.target.value;
                    if ((A(r), r)) {
                      const a = S.find(l => `${l.method}:${l.endpoint}` === r);
                      a &&
                        i(l => ({
                          ...l,
                          method: a.method,
                          endpoint: a.endpoint,
                        }));
                    }
                  },
                  style: t.select,
                  children: [
                    e.jsx('option', {
                      value: '',
                      children: 'Select a preset...',
                    }),
                    S.map((s, r) =>
                      e.jsxs(
                        'option',
                        {
                          value: `${s.method}:${s.endpoint}`,
                          children: [
                            s.method,
                            ' - ',
                            s.name,
                            ' (',
                            s.endpoint,
                            ')',
                          ],
                        },
                        r
                      )
                    ),
                  ],
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'HTTP Method:' }),
                e.jsxs('select', {
                  value: o.method,
                  onChange: s => i(r => ({ ...r, method: s.target.value })),
                  style: t.select,
                  children: [
                    e.jsx('option', { value: 'GET', children: 'GET' }),
                    e.jsx('option', { value: 'POST', children: 'POST' }),
                    e.jsx('option', { value: 'PUT', children: 'PUT' }),
                    e.jsx('option', { value: 'DELETE', children: 'DELETE' }),
                    e.jsx('option', { value: 'PATCH', children: 'PATCH' }),
                  ],
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'Base URL:' }),
                e.jsx('input', {
                  type: 'text',
                  value: o.baseUrl,
                  onChange: s => i(r => ({ ...r, baseUrl: s.target.value })),
                  style: t.input,
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'Endpoint:' }),
                e.jsx('input', {
                  type: 'text',
                  value: o.endpoint,
                  onChange: s => i(r => ({ ...r, endpoint: s.target.value })),
                  style: t.input,
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'Timeout (ms):' }),
                e.jsx('input', {
                  type: 'number',
                  value: o.timeout,
                  onChange: s =>
                    i(r => ({ ...r, timeout: parseInt(s.target.value) })),
                  style: t.input,
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'Headers (JSON):' }),
                e.jsx('textarea', {
                  value: o.headers,
                  onChange: s => i(r => ({ ...r, headers: s.target.value })),
                  rows: 3,
                  style: t.textarea,
                }),
              ],
            }),
            ['POST', 'PUT', 'PATCH'].includes(o.method) &&
              e.jsxs('div', {
                style: t.formGroup,
                children: [
                  e.jsx('label', {
                    style: t.label,
                    children: 'Request Body (JSON):',
                  }),
                  e.jsx('textarea', {
                    value: o.body,
                    onChange: s => i(r => ({ ...r, body: s.target.value })),
                    rows: 4,
                    style: t.textarea,
                  }),
                ],
              }),
            e.jsx('button', {
              onClick: D,
              disabled: p,
              style: x('primary', p),
              children: p ? 'Executing...' : `Execute ${o.method} Request`,
            }),
          ],
        }),
        (C || u) &&
          e.jsxs('div', {
            style: t.card,
            children: [
              e.jsx('h3', { style: t.cardHeader, children: '📊 Response' }),
              u
                ? e.jsxs('div', {
                    style: t.errorBox,
                    children: [
                      e.jsx('strong', { children: 'Error:' }),
                      ' ',
                      u.message,
                    ],
                  })
                : e.jsx('pre', {
                    style: t.codeBlock,
                    children: JSON.stringify(C, null, 2),
                  }),
            ],
          }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsxs('div', {
              style: t.flexBetween,
              children: [
                e.jsx('h3', {
                  style: t.cardHeader,
                  children: '📋 Request Logs',
                }),
                e.jsx('button', {
                  onClick: O,
                  style: x('secondary'),
                  children: 'Clear',
                }),
              ],
            }),
            e.jsx('div', {
              style: t.logsContainer,
              children:
                y.length === 0
                  ? e.jsx('em', { children: 'No logs yet...' })
                  : y.map((s, r) =>
                      e.jsx('div', { style: t.mb16, children: s }, r)
                    ),
            }),
          ],
        }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsxs('div', {
              style: t.flexBetween,
              children: [
                e.jsx('h3', {
                  style: t.cardHeader,
                  children: '📚 Request History',
                }),
                e.jsx('button', {
                  onClick: L,
                  style: x('danger'),
                  children: 'Clear History',
                }),
              ],
            }),
            e.jsx('div', {
              style: { maxHeight: '300px', overflowY: 'auto' },
              children:
                b.length === 0
                  ? e.jsx('em', { children: 'No requests yet...' })
                  : b.map(s =>
                      e.jsxs(
                        'div',
                        {
                          style: k(
                            t.listItem,
                            s.status === 'success'
                              ? t.listItemSuccess
                              : t.listItemError
                          ),
                          children: [
                            e.jsxs('div', {
                              style: t.textBold,
                              children: [
                                s.method,
                                ' ',
                                s.url,
                                e.jsx('span', {
                                  style: {
                                    float: 'right',
                                    fontWeight: 'normal',
                                  },
                                  children: s.timestamp,
                                }),
                              ],
                            }),
                            e.jsxs('div', {
                              style: k({ marginTop: '8px' }, t.textMuted),
                              children: [
                                'Status: ',
                                s.status === 'success'
                                  ? '✅ Success'
                                  : '❌ Error',
                                s.error && ` - ${s.error}`,
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
            }),
          ],
        }),
      ],
    });
  },
  _ = {
    title: 'API Explorer',
    component: G,
    parameters: {
      docs: {
        description: {
          component:
            'Interactive API explorer that lets you test different endpoints, methods, and configurations of the useFetchWithCallbacks hook.',
        },
      },
    },
  },
  h = { render: () => e.jsx(G, {}) };
var $, U, H;
h.parameters = {
  ...h.parameters,
  docs: {
    ...(($ = h.parameters) == null ? void 0 : $.docs),
    source: {
      originalSource: `{
  render: () => <ApiExplorer />
}`,
      ...((H = (U = h.parameters) == null ? void 0 : U.docs) == null
        ? void 0
        : H.source),
    },
  },
};
const q = ['APIExplorer'];
export { h as APIExplorer, q as __namedExportsOrder, _ as default };

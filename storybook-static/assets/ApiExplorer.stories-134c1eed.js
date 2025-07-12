import { j as e, s as t, g as x, c as k } from './storyStyles-bf201a31.js';
import { r as c } from './index-8b3efc3f.js';
import { u as R } from './useFetchWithCallbacks-0999b78a.js';
import './_commonjsHelpers-de833af9.js';
const G = () => {
    const [r, i] = c.useState({
        method: 'GET',
        endpoint: '/posts/1',
        baseUrl: 'https://jsonplaceholder.typicode.com',
        timeout: 5e3,
        headers: '{"Content-Type": "application/json"}',
        body: '{"title": "Test Post", "body": "This is a test", "userId": 1}',
      }),
      [w, A] = c.useState(''),
      [y, j] = c.useState([]),
      [g, b] = c.useState([]),
      {
        fetchData: v,
        postData: f,
        putData: E,
        deleteData: T,
        patchData: P,
        loading: p,
        response: C,
        error: u,
      } = R(r.endpoint, {
        baseUrl: r.baseUrl,
        timeout: r.timeout,
        headers: r.headers ? JSON.parse(r.headers) : void 0,
      }),
      d = c.useCallback((s, o = 'info') => {
        const a = new Date().toLocaleTimeString(),
          l = o === 'success' ? '✅' : o === 'error' ? '❌' : '📝';
        j(n => [...n, `${a}: ${l} ${s}`]);
      }, []),
      m = c.useCallback(
        (s, o, a, l, n) => {
          b(L => [
            ...L,
            {
              id: Date.now(),
              method: s,
              url: `${r.baseUrl}${r.endpoint}`,
              timestamp: new Date().toLocaleString(),
              status: a,
              response: l,
              error: n,
            },
          ]);
        },
        [r.baseUrl, r.endpoint]
      ),
      D = c.useCallback(async () => {
        const s = `${r.baseUrl}${r.endpoint}`;
        d(`🚀 ${r.method} ${s}`);
        const o = n => {
            (d(`✅ Success: ${r.method} completed`, 'success'),
              m(r.method, s, 'success', n));
          },
          a = n => {
            (d(`❌ Error: ${n.message}`, 'error'),
              m(r.method, s, 'error', void 0, n.message));
          },
          l = n => {
            d(`⏳ Loading: ${n ? 'started' : 'completed'}`);
          };
        try {
          switch (r.method) {
            case 'GET':
              await v(o, a, l);
              break;
            case 'POST':
              await f(JSON.parse(r.body), o, a, l);
              break;
            case 'PUT':
              await E(JSON.parse(r.body), o, a, l);
              break;
            case 'DELETE':
              await T(o, a, l);
              break;
            case 'PATCH':
              await P(JSON.parse(r.body), o, a, l);
              break;
            default:
              d(`❌ Unsupported method: ${r.method}`, 'error');
          }
        } catch (n) {
          d(
            `❌ Request failed: ${n instanceof Error ? n.message : 'Unknown error'}`,
            'error'
          );
        }
      }, [r, v, f, E, T, P, d, m]),
      I = () => j([]),
      O = () => b([]),
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
        e.jsxs('div', {
          style: t.gradientHeader,
          children: [
            e.jsx('h1', {
              style: t.gradientHeaderTitle,
              children: 'API Explorer',
            }),
            e.jsx('p', {
              style: t.gradientHeaderSubtitle,
              children:
                'Interactive API testing interface that lets you explore different endpoints, methods, and configurations of the useFetchWithCallbacks hook in real-time.',
            }),
          ],
        }),
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
                    const o = s.target.value;
                    if ((A(o), o)) {
                      const a = S.find(l => `${l.method}:${l.endpoint}` === o);
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
                    S.map((s, o) =>
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
                        o
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
                  value: r.method,
                  onChange: s => i(o => ({ ...o, method: s.target.value })),
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
                  value: r.baseUrl,
                  onChange: s => i(o => ({ ...o, baseUrl: s.target.value })),
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
                  value: r.endpoint,
                  onChange: s => i(o => ({ ...o, endpoint: s.target.value })),
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
                  value: r.timeout,
                  onChange: s =>
                    i(o => ({ ...o, timeout: parseInt(s.target.value) })),
                  style: t.input,
                }),
              ],
            }),
            e.jsxs('div', {
              style: t.formGroup,
              children: [
                e.jsx('label', { style: t.label, children: 'Headers (JSON):' }),
                e.jsx('textarea', {
                  value: r.headers,
                  onChange: s => i(o => ({ ...o, headers: s.target.value })),
                  rows: 3,
                  style: t.textarea,
                }),
              ],
            }),
            ['POST', 'PUT', 'PATCH'].includes(r.method) &&
              e.jsxs('div', {
                style: t.formGroup,
                children: [
                  e.jsx('label', {
                    style: t.label,
                    children: 'Request Body (JSON):',
                  }),
                  e.jsx('textarea', {
                    value: r.body,
                    onChange: s => i(o => ({ ...o, body: s.target.value })),
                    rows: 4,
                    style: t.textarea,
                  }),
                ],
              }),
            e.jsx('button', {
              onClick: D,
              disabled: p,
              style: x('primary', p),
              children: p ? 'Executing...' : `Execute ${r.method} Request`,
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
                  onClick: I,
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
                  : y.map((s, o) =>
                      e.jsx('div', { style: t.mb16, children: s }, o)
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
                  onClick: O,
                  style: x('danger'),
                  children: 'Clear History',
                }),
              ],
            }),
            e.jsx('div', {
              style: { maxHeight: '300px', overflowY: 'auto' },
              children:
                g.length === 0
                  ? e.jsx('em', { children: 'No requests yet...' })
                  : g.map(s =>
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
                                'Status:',
                                ' ',
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
  F = {
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
var H, $, U;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((H = h.parameters) == null ? void 0 : H.docs),
    source: {
      originalSource: `{
  render: () => <ApiExplorer />
}`,
      ...((U = ($ = h.parameters) == null ? void 0 : $.docs) == null
        ? void 0
        : U.source),
    },
  },
};
const _ = ['APIExplorer'];
export { h as APIExplorer, _ as __namedExportsOrder, F as default };

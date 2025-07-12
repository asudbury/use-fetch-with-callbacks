import { j as e, s as t, g as o } from './storyStyles-bf201a31.js';
import { r as m } from './index-8b3efc3f.js';
import { u as C } from './useFetchWithCallbacks-0999b78a.js';
import './_commonjsHelpers-de833af9.js';
const S = ({ baseUrl: d = 'https://jsonplaceholder.typicode.com' }) => {
    const { chain: h } = C('/users/1', { baseUrl: d, timeout: 5e3 }),
      [p, u] = m.useState([]),
      [a, i] = m.useState(!1),
      n = s => {
        u(c => [...c, `${new Date().toLocaleTimeString()}: ${s}`]);
      },
      r = () => u([]),
      f = async () => {
        (i(!0),
          r(),
          await h()
            .fetch(s => {
              n(`✅ Step 1: Fetched user ${s.name}`);
            })
            .post(
              { name: 'Updated Name', email: 'updated@example.com', id: 1 },
              s => {
                n(`✅ Step 2: Posted update for ${s.name}`);
              }
            )
            .put(
              { name: 'Final Name', email: 'final@example.com', id: 1 },
              s => {
                n(`✅ Step 3: Put final update for ${s.name}`);
              }
            )
            .then(() => {
              n('🎉 Chain completed successfully with final result!');
            })
            .catch(s => {
              n(`❌ Chain failed: ${s.message}`);
            })
            .finally(() => {
              (n('🔄 Chain execution finished'), i(!1));
            })
            .execute());
      },
      j = async () => {
        (i(!0),
          r(),
          await h()
            .fetch(s => {
              n(`✅ Step 1: Fetched user ${s.name}`);
            })
            .patch({ email: 'patched@example.com' }, s => {
              n(`✅ Step 2: Patched email to ${s.email}`);
            })
            .put(
              { name: 'Chain User', email: 'chain@example.com', id: 1 },
              s => {
                n(`✅ Step 3: Full update to ${s.name}`);
              }
            )
            .delete(() => {
              n('✅ Step 4: Cleanup completed');
            })
            .then(() => {
              n('🎉 Complex chain completed!');
            })
            .catch(s => {
              n(`❌ Complex chain failed: ${s.message}`);
            })
            .finally(() => {
              (n('🔄 Complex chain execution finished'), i(!1));
            })
            .execute());
      };
    return e.jsxs('div', {
      style: t.container,
      children: [
        e.jsxs('div', {
          style: t.gradientHeader,
          children: [
            e.jsx('h1', {
              style: t.gradientHeaderTitle,
              children: '🔗 Request Chaining',
            }),
            e.jsx('p', {
              style: t.gradientHeaderSubtitle,
              children:
                'Advanced sequential HTTP operations using the powerful chain API for complex data workflows and multi-step operations.',
            }),
          ],
        }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsx('h3', {
              style: t.cardHeader,
              children: '🚀 Chain Operations',
            }),
            e.jsxs('p', {
              style: t.pageDescription,
              children: ['Base URL: ', e.jsx('code', { children: d })],
            }),
            e.jsxs('div', {
              style: t.flexCenter,
              children: [
                e.jsx('button', {
                  onClick: f,
                  disabled: a,
                  style: o('success', a),
                  children: a
                    ? 'Running...'
                    : 'Run Simple Chain (GET → POST → PUT)',
                }),
                e.jsx('button', {
                  onClick: j,
                  disabled: a,
                  style: o('primary', a),
                  children: a
                    ? 'Running...'
                    : 'Run Complex Chain (GET → PATCH → PUT → DELETE)',
                }),
                e.jsx('button', {
                  onClick: r,
                  disabled: a,
                  style: o('secondary', a),
                  children: 'Clear Logs',
                }),
              ],
            }),
          ],
        }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsx('h3', {
              style: t.cardHeader,
              children: '📋 Chain Execution Logs',
            }),
            e.jsx('div', {
              style: t.logsContainer,
              children:
                p.length === 0
                  ? e.jsx('em', {
                      children:
                        'No logs yet. Click one of the chain buttons to start.',
                    })
                  : p.map((s, c) =>
                      e.jsx('div', { style: t.mb16, children: s }, c)
                    ),
            }),
          ],
        }),
        e.jsxs('div', {
          style: t.card,
          children: [
            e.jsx('h3', {
              style: t.cardHeader,
              children: '💡 How Chain Works',
            }),
            e.jsxs('ul', {
              style: { paddingLeft: '20px', margin: 0 },
              children: [
                e.jsxs('li', {
                  children: [
                    e.jsx('strong', { children: 'Sequential Execution:' }),
                    ' Each operation waits for the previous to complete',
                  ],
                }),
                e.jsxs('li', {
                  children: [
                    e.jsx('strong', { children: 'Error Handling:' }),
                    ' If any step fails, the chain stops and calls .catch()',
                  ],
                }),
                e.jsxs('li', {
                  children: [
                    e.jsx('strong', { children: 'Final Callbacks:' }),
                    ' .then() runs only if all steps succeed',
                  ],
                }),
                e.jsxs('li', {
                  children: [
                    e.jsx('strong', { children: 'Cleanup:' }),
                    ' .finally() always runs regardless of success/failure',
                  ],
                }),
                e.jsxs('li', {
                  children: [
                    e.jsx('strong', { children: 'Individual Callbacks:' }),
                    ' Each method can have its own success/error/loading callbacks',
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  w = {
    title: 'Request Chaining',
    component: S,
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: {
          story:
            'Advanced request chaining example showing sequential HTTP operations with comprehensive error handling.',
        },
      },
    },
    argTypes: {
      baseUrl: { control: 'text', description: 'Base URL for the API' },
    },
  },
  l = { args: { baseUrl: 'https://jsonplaceholder.typicode.com' } };
var x, g, y;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((x = l.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }
}`,
      ...((y = (g = l.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : y.source),
    },
  },
};
const R = ['RequestChaining'];
export { l as RequestChaining, R as __namedExportsOrder, w as default };

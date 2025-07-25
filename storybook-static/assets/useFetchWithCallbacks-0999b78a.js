import { r as f } from './index-8b3efc3f.js';
const _ = (b, g) => {
  const [R, p] = f.useState(null),
    [$, q] = f.useState(!1),
    [A, d] = f.useState(null),
    [D, k] = f.useState(!1),
    E = f.useRef(null),
    h = (g == null ? void 0 : g.baseUrl) ?? '',
    w = (g == null ? void 0 : g.timeout) ?? 1e4,
    m = {
      'Content-Type': 'application/json',
      ...(g == null ? void 0 : g.headers),
    },
    C = (a, n) => {
      (q(a), n && n(a));
    },
    O = f.useCallback(
      async (a, n, l, u) => {
        E.current && E.current.abort();
        const o = new AbortController();
        ((E.current = o), C(!0, u), d(null), k(!1));
        try {
          const r = await a(o.signal);
          if (o.signal.aborted) return;
          (p(r), k(!0), n && n(r));
        } catch (r) {
          if (o.signal.aborted) return;
          const e = r instanceof Error ? r : new Error(String(r));
          (d(e), l && l(e));
        } finally {
          o.signal.aborted || C(!1, u);
        }
      },
      [w]
    ),
    y = f.useCallback(
      async (a, n, l, u) => {
        E.current && E.current.abort();
        const o = new AbortController();
        ((E.current = o), C(!0, u), d(null), k(!1));
        try {
          const r = await a(o.signal);
          if (o.signal.aborted) return;
          (p(r), k(!0), n && n(r));
        } catch (r) {
          if (o.signal.aborted) return;
          const e = r instanceof Error ? r : new Error(String(r));
          (d(e), l && l(e));
        } finally {
          o.signal.aborted || C(!1, u);
        }
      },
      [w]
    );
  f.useEffect(
    () => () => {
      E.current && E.current.abort();
    },
    []
  );
  const P = f.useCallback(
      (a, n, l) =>
        y(
          async u => {
            const o = `${h}${b}`,
              r = await Promise.race([
                fetch(o, { method: 'GET', headers: m, signal: u }),
                new Promise((c, t) =>
                  setTimeout(() => t(new Error('Request timeout')), w)
                ),
              ]);
            if (!r.ok) {
              const c = await r.text();
              let t = 'An error occurred';
              try {
                t = JSON.parse(c).message || t;
              } catch {
                t = c || t;
              }
              throw new Error(t);
            }
            return await r.json();
          },
          a,
          n,
          l
        ),
      [h, b, m, y, w]
    ),
    J = f.useCallback(
      (a, n, l, u) =>
        y(
          async o => {
            const r = `${h}${b}`,
              e = await Promise.race([
                fetch(r, {
                  method: 'POST',
                  headers: m,
                  body: JSON.stringify(a),
                  signal: o,
                }),
                new Promise((t, s) =>
                  setTimeout(() => s(new Error('Request timeout')), w)
                ),
              ]);
            if (!e.ok) {
              const t = await e.text();
              let s = 'An error occurred';
              try {
                s = JSON.parse(t).message || s;
              } catch {
                s = t || s;
              }
              throw new Error(s);
            }
            return await e.json();
          },
          n,
          l,
          u
        ),
      [h, b, m, y, w]
    ),
    S = f.useCallback(
      (a, n, l, u) =>
        y(
          async o => {
            const r = `${h}${b}`,
              e = await Promise.race([
                fetch(r, {
                  method: 'PUT',
                  headers: m,
                  body: JSON.stringify(a),
                  signal: o,
                }),
                new Promise((t, s) =>
                  setTimeout(() => s(new Error('Request timeout')), w)
                ),
              ]);
            if (!e.ok) {
              const t = await e.text();
              let s = 'An error occurred';
              try {
                s = JSON.parse(t).message || s;
              } catch {
                s = t || s;
              }
              throw new Error(s);
            }
            return await e.json();
          },
          n,
          l,
          u
        ),
      [h, b, m, y, w]
    ),
    j = f.useCallback(
      (a, n, l) =>
        y(
          async u => {
            const o = `${h}${b}`,
              r = await Promise.race([
                fetch(o, { method: 'DELETE', headers: m, signal: u }),
                new Promise((c, t) =>
                  setTimeout(() => t(new Error('Request timeout')), w)
                ),
              ]);
            if (!r.ok) {
              const c = await r.text();
              let t = 'An error occurred';
              try {
                t = JSON.parse(c).message || t;
              } catch {
                t = c || t;
              }
              throw new Error(t);
            }
            return await r.json();
          },
          a,
          n,
          l
        ),
      [h, b, m, y, w]
    ),
    x = f.useCallback(
      (a, n, l, u) =>
        y(
          async o => {
            const r = `${h}${b}`,
              e = await Promise.race([
                fetch(r, {
                  method: 'PATCH',
                  headers: m,
                  body: JSON.stringify(a),
                  signal: o,
                }),
                new Promise((t, s) =>
                  setTimeout(() => s(new Error('Request timeout')), w)
                ),
              ]);
            if (!e.ok) {
              const t = await e.text();
              let s = 'An error occurred';
              try {
                s = JSON.parse(t).message || s;
              } catch {
                s = t || s;
              }
              throw new Error(s);
            }
            return await e.json();
          },
          n,
          l,
          u
        ),
      [h, b, m, y, w]
    ),
    N = f.useCallback(
      (a, n, l, u) =>
        O(
          async o => {
            const r = a.map(async e => {
              const c = `${h}${e}`,
                t = await Promise.race([
                  fetch(c, { method: 'GET', headers: m, signal: o }),
                  new Promise((s, i) =>
                    setTimeout(() => i(new Error('Request timeout')), w)
                  ),
                ]);
              if (!t.ok) {
                const s = await t.text();
                let i = 'An error occurred';
                try {
                  i = JSON.parse(s).message || i;
                } catch {
                  i = s || i;
                }
                throw new Error(i);
              }
              return t.json();
            });
            return Promise.all(r);
          },
          n,
          l,
          u
        ),
      [h, m, O, w]
    ),
    M = f.useCallback(() => {
      const a = [];
      let n, l, u;
      const o = {
        fetch: (r, e, c) => (
          a.push({ type: 'GET', onSuccess: r, onError: e, onLoading: c }),
          o
        ),
        post: (r, e, c, t) => (
          a.push({
            type: 'POST',
            data: r,
            onSuccess: e,
            onError: c,
            onLoading: t,
          }),
          o
        ),
        put: (r, e, c, t) => (
          a.push({
            type: 'PUT',
            data: r,
            onSuccess: e,
            onError: c,
            onLoading: t,
          }),
          o
        ),
        delete: (r, e, c) => (
          a.push({ type: 'DELETE', onSuccess: r, onError: e, onLoading: c }),
          o
        ),
        patch: (r, e, c, t) => (
          a.push({
            type: 'PATCH',
            data: r,
            onSuccess: e,
            onError: c,
            onLoading: t,
          }),
          o
        ),
        then: r => ((n = r), o),
        catch: r => ((l = r), o),
        finally: r => ((u = r), o),
        execute: async () => {
          let r = null;
          try {
            for (const e of a)
              await new Promise((c, t) => {
                const s = T => {
                    ((r = T), e.onSuccess && e.onSuccess(T), c());
                  },
                  i = T => {
                    (e.onError && e.onError(T), t(T));
                  };
                switch (e.type) {
                  case 'GET':
                    P(s, i, e.onLoading);
                    break;
                  case 'POST':
                    J(e.data, s, i, e.onLoading);
                    break;
                  case 'PUT':
                    S(e.data, s, i, e.onLoading);
                    break;
                  case 'DELETE':
                    j(s, i, e.onLoading);
                    break;
                  case 'PATCH':
                    x(e.data, s, i, e.onLoading);
                    break;
                }
              });
            n && r && n(r);
          } catch (e) {
            l && l(e);
          } finally {
            u && u();
          }
        },
      };
      return o;
    }, [P, J, S, j, x]);
  return {
    response: R,
    loading: $,
    error: A,
    requestCompleted: D,
    fetchData: P,
    postData: J,
    putData: S,
    deleteData: j,
    patchData: x,
    fetchMultipleData: N,
    chain: M,
  };
};
export { _ as u };

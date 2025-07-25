import '../sb-preview/runtime.js';
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) O(t);
  new MutationObserver(t => {
    for (const e of t)
      if (e.type === 'childList')
        for (const o of e.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && O(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (e.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (e.credentials = 'omit')
          : (e.credentials = 'same-origin'),
      e
    );
  }
  function O(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = s(t);
    fetch(t.href, e);
  }
})();
const u = 'modulepreload',
  R = function (_) {
    return '/use-fetch-with-callbacks/' + _;
  },
  a = {},
  r = function (n, s, O) {
    if (!s || s.length === 0) return n();
    const t = document.getElementsByTagName('link');
    return Promise.all(
      s.map(e => {
        if (((e = R(e)), e in a)) return;
        a[e] = !0;
        const o = e.endsWith('.css'),
          d = o ? '[rel="stylesheet"]' : '';
        if (!!O)
          for (let c = t.length - 1; c >= 0; c--) {
            const E = t[c];
            if (E.href === e && (!o || E.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${e}"]${d}`)) return;
        const i = document.createElement('link');
        if (
          ((i.rel = o ? 'stylesheet' : u),
          o || ((i.as = 'script'), (i.crossOrigin = '')),
          (i.href = e),
          document.head.appendChild(i),
          o)
        )
          return new Promise((c, E) => {
            (i.addEventListener('load', c),
              i.addEventListener('error', () =>
                E(new Error(`Unable to preload CSS for ${e}`))
              ));
          });
      })
    )
      .then(() => n())
      .catch(e => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = e), window.dispatchEvent(o), !o.defaultPrevented))
          throw e;
      });
  },
  { createBrowserChannel: f } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: m } = __STORYBOOK_MODULE_PREVIEW_API__,
  l = f({ page: 'preview' });
m.setChannel(l);
window.__STORYBOOK_ADDONS_CHANNEL__ = l;
window.CONFIG_TYPE === 'DEVELOPMENT' &&
  (window.__STORYBOOK_SERVER_CHANNEL__ = l);
const p = {
  './src/stories/APIDocumentation.stories.tsx': async () =>
    r(
      () => import('./APIDocumentation.stories-3816d7bf.js'),
      [
        'assets/APIDocumentation.stories-3816d7bf.js',
        'assets/storyStyles-bf201a31.js',
        'assets/index-8b3efc3f.js',
        'assets/_commonjsHelpers-de833af9.js',
      ]
    ),
  './src/stories/ApiExplorer.stories.tsx': async () =>
    r(
      () => import('./ApiExplorer.stories-134c1eed.js'),
      [
        'assets/ApiExplorer.stories-134c1eed.js',
        'assets/storyStyles-bf201a31.js',
        'assets/index-8b3efc3f.js',
        'assets/_commonjsHelpers-de833af9.js',
        'assets/useFetchWithCallbacks-0999b78a.js',
      ]
    ),
  './src/stories/ErrorHandling.stories.tsx': async () =>
    r(
      () => import('./ErrorHandling.stories-b1d660d8.js'),
      [
        'assets/ErrorHandling.stories-b1d660d8.js',
        'assets/storyStyles-bf201a31.js',
        'assets/index-8b3efc3f.js',
        'assets/_commonjsHelpers-de833af9.js',
        'assets/useFetchWithCallbacks-0999b78a.js',
      ]
    ),
  './src/stories/Introduction.stories.tsx': async () =>
    r(
      () => import('./Introduction.stories-05a75f78.js'),
      [
        'assets/Introduction.stories-05a75f78.js',
        'assets/storyStyles-bf201a31.js',
        'assets/index-8b3efc3f.js',
        'assets/_commonjsHelpers-de833af9.js',
      ]
    ),
  './src/stories/RequestChaining.stories.tsx': async () =>
    r(
      () => import('./RequestChaining.stories-be0cb560.js'),
      [
        'assets/RequestChaining.stories-be0cb560.js',
        'assets/storyStyles-bf201a31.js',
        'assets/index-8b3efc3f.js',
        'assets/_commonjsHelpers-de833af9.js',
        'assets/useFetchWithCallbacks-0999b78a.js',
      ]
    ),
};
async function P(_) {
  return p[_]();
}
const {
    composeConfigs: T,
    PreviewWeb: w,
    ClientApi: I,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  L = async () => {
    const _ = await Promise.all([
      r(
        () => import('./entry-preview-b21759a2.js'),
        [
          'assets/entry-preview-b21759a2.js',
          'assets/index-8b3efc3f.js',
          'assets/_commonjsHelpers-de833af9.js',
          'assets/react-18-0a210e0b.js',
        ]
      ),
      r(
        () => import('./entry-preview-docs-d14f77b2.js'),
        [
          'assets/entry-preview-docs-d14f77b2.js',
          'assets/_getPrototype-1e53b583.js',
          'assets/_commonjsHelpers-de833af9.js',
          'assets/index-356e4a49.js',
          'assets/index-8b3efc3f.js',
        ]
      ),
      r(
        () => import('./preview-2ff2accb.js'),
        ['assets/preview-2ff2accb.js', 'assets/index-1b441bc2.js']
      ),
      r(() => import('./preview-e88dcfcb.js'), []),
      r(
        () => import('./preview-d01b88e8.js'),
        ['assets/preview-d01b88e8.js', 'assets/index-356e4a49.js']
      ),
      r(
        () => import('./preview-30b54f76.js'),
        ['assets/preview-30b54f76.js', 'assets/index-356e4a49.js']
      ),
      r(() => import('./preview-0ef86afd.js'), []),
      r(
        () => import('./preview-2d30111f.js'),
        ['assets/preview-2d30111f.js', 'assets/_commonjsHelpers-de833af9.js']
      ),
      r(() => import('./preview-9d605ddc.js'), []),
      r(() => import('./preview-c56bf6ac.js'), []),
      r(
        () => import('./preview-da31036b.js'),
        ['assets/preview-da31036b.js', 'assets/index-356e4a49.js']
      ),
      r(() => import('./preview-03b02d32.js'), []),
    ]);
    return T(_);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new w();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ ||
  new I({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({
  importFn: P,
  getProjectAnnotations: L,
});
export { r as _ };

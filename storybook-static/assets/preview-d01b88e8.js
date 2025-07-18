import { d as N } from './index-356e4a49.js';
let R;
const V = new Uint8Array(16);
function A() {
  if (
    !R &&
    ((R =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !R)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return R(V);
}
const E = [];
for (let t = 0; t < 256; ++t) E.push((t + 256).toString(16).slice(1));
function D(t, e = 0) {
  return (
    E[t[e + 0]] +
    E[t[e + 1]] +
    E[t[e + 2]] +
    E[t[e + 3]] +
    '-' +
    E[t[e + 4]] +
    E[t[e + 5]] +
    '-' +
    E[t[e + 6]] +
    E[t[e + 7]] +
    '-' +
    E[t[e + 8]] +
    E[t[e + 9]] +
    '-' +
    E[t[e + 10]] +
    E[t[e + 11]] +
    E[t[e + 12]] +
    E[t[e + 13]] +
    E[t[e + 14]] +
    E[t[e + 15]]
  );
}
const P =
    typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  h = { randomUUID: P };
function S(t, e, n) {
  if (h.randomUUID && !e && !t) return h.randomUUID();
  t = t || {};
  const o = t.random || (t.rng || A)();
  if (((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), e)) {
    n = n || 0;
    for (let r = 0; r < 16; ++r) e[n + r] = o[r];
    return e;
  }
  return D(o);
}
var b = class extends Error {
    constructor() {
      (super(...arguments),
        (this.data = {}),
        (this.documentation = !1),
        (this.fromStorybook = !0));
    }
    get fullErrorCode() {
      let t = String(this.code).padStart(4, '0');
      return `SB_${this.category}_${t}`;
    }
    get name() {
      let t = this.constructor.name;
      return `${this.fullErrorCode} (${t})`;
    }
    get message() {
      let t;
      return (
        this.documentation === !0
          ? (t = `https://storybook.js.org/error/${this.fullErrorCode}`)
          : typeof this.documentation == 'string'
            ? (t = this.documentation)
            : Array.isArray(this.documentation) &&
              (t = `
${this.documentation.map(e => `	- ${e}`).join(`
`)}`),
        `${this.template()}${
          t != null
            ? `

More info: ${t}
`
            : ''
        }`
      );
    }
  },
  W = (t => (
    (t.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
    (t.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
    (t.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
    (t.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
    (t.PREVIEW_API = 'PREVIEW_API'),
    (t.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
    (t.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
    (t.PREVIEW_THEMING = 'PREVIEW_THEMING'),
    (t.RENDERER_HTML = 'RENDERER_HTML'),
    (t.RENDERER_PREACT = 'RENDERER_PREACT'),
    (t.RENDERER_REACT = 'RENDERER_REACT'),
    (t.RENDERER_SERVER = 'RENDERER_SERVER'),
    (t.RENDERER_SVELTE = 'RENDERER_SVELTE'),
    (t.RENDERER_VUE = 'RENDERER_VUE'),
    (t.RENDERER_VUE3 = 'RENDERER_VUE3'),
    (t.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
    t
  ))(W || {}),
  f = class extends b {
    constructor(t) {
      (super(),
        (this.data = t),
        (this.category = 'PREVIEW_API'),
        (this.code = 2),
        (this.documentation =
          'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function'));
    }
    template() {
      return N`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${
        this.data.deprecated
          ? `
This is deprecated and won't work in Storybook 8 anymore.
`
          : ''
      }
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `;
    }
  };
const { addons: U } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: g } = __STORYBOOK_MODULE_GLOBAL__;
var M = 'storybook/actions',
  w = `${M}/action-event`,
  x = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  y = (t, e) => {
    let n = Object.getPrototypeOf(t);
    return !n || e(n) ? n : y(n, e);
  },
  j = t =>
    !!(
      typeof t == 'object' &&
      t &&
      y(t, e => /^Synthetic(?:Base)?Event$/.test(e.constructor.name)) &&
      typeof t.persist == 'function'
    ),
  $ = t => {
    if (j(t)) {
      let e = Object.create(
        t.constructor.prototype,
        Object.getOwnPropertyDescriptors(t)
      );
      e.persist();
      let n = Object.getOwnPropertyDescriptor(e, 'view'),
        o = n == null ? void 0 : n.value;
      return (
        typeof o == 'object' &&
          (o == null ? void 0 : o.constructor.name) === 'Window' &&
          Object.defineProperty(e, 'view', {
            ...n,
            value: Object.create(o.constructor.prototype),
          }),
        e
      );
    }
    return t;
  },
  k = () =>
    typeof crypto == 'object' && typeof crypto.getRandomValues == 'function'
      ? S()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function p(t, e = {}) {
  let n = { ...x, ...e },
    o = function (...r) {
      var l, u;
      if (e.implicit) {
        let _ =
          (l =
            '__STORYBOOK_PREVIEW__' in g ? g.__STORYBOOK_PREVIEW__ : void 0) ==
          null
            ? void 0
            : l.storyRenders.find(
                a => a.phase === 'playing' || a.phase === 'rendering'
              );
        if (_) {
          let a = !(
              (u = window == null ? void 0 : window.FEATURES) != null &&
              u.disallowImplicitActionsInRenderV8
            ),
            m = new f({ phase: _.phase, name: t, deprecated: a });
          if (a) console.warn(m);
          else throw m;
        }
      }
      let i = U.getChannel(),
        s = k(),
        c = 5,
        d = r.map($),
        O = r.length > 1 ? d : d[0],
        T = {
          id: s,
          count: 0,
          data: { name: t, args: O },
          options: {
            ...n,
            maxDepth: c + (n.depth || 3),
            allowFunction: n.allowFunction || !1,
          },
        };
      i.emit(w, T);
    };
  return ((o.isAction = !0), o);
}
var I = (t, e) => typeof e[t] > 'u' && !(t in e),
  L = t => {
    let {
      initialArgs: e,
      argTypes: n,
      id: o,
      parameters: { actions: r },
    } = t;
    if (!r || r.disable || !r.argTypesRegex || !n) return {};
    let i = new RegExp(r.argTypesRegex);
    return Object.entries(n)
      .filter(([s]) => !!i.test(s))
      .reduce(
        (s, [c, d]) => (I(c, e) && (s[c] = p(c, { implicit: !0, id: o })), s),
        {}
      );
  },
  v = t => {
    let {
      initialArgs: e,
      argTypes: n,
      parameters: { actions: o },
    } = t;
    return (o != null && o.disable) || !n
      ? {}
      : Object.entries(n)
          .filter(([r, i]) => !!i.action)
          .reduce(
            (r, [i, s]) => (
              I(i, e) && (r[i] = p(typeof s.action == 'string' ? s.action : i)),
              r
            ),
            {}
          );
  },
  F = [v, L],
  B = t => {
    let {
      args: e,
      parameters: { actions: n },
    } = t;
    (n != null && n.disable) ||
      Object.entries(e)
        .filter(
          ([, o]) =>
            typeof o == 'function' &&
            '_isMockFunction' in o &&
            o._isMockFunction
        )
        .forEach(([o, r]) => {
          let i = r.getMockImplementation();
          if (
            (i == null ? void 0 : i._actionAttached) !== !0 &&
            (i == null ? void 0 : i.isAction) !== !0
          ) {
            let s = (...c) => (p(o)(...c), i == null ? void 0 : i(...c));
            ((s._actionAttached = !0), r.mockImplementation(s));
          }
        });
  },
  G = [B];
export { F as argsEnhancers, G as loaders };

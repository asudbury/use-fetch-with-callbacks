try {
  (() => {
    var te = Object.create;
    var F = Object.defineProperty;
    var re = Object.getOwnPropertyDescriptor;
    var ne = Object.getOwnPropertyNames;
    var oe = Object.getPrototypeOf,
      ie = Object.prototype.hasOwnProperty;
    var x = (e =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, s) => (typeof require < 'u' ? require : t)[s],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var B = (e, t) => () => (e && (t = e((e = 0))), t);
    var ae = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t),
      t.exports
    );
    var se = (e, t, s, o) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let i of ne(t))
          !ie.call(e, i) &&
            i !== s &&
            F(e, i, {
              get: () => t[i],
              enumerable: !(o = re(t, i)) || o.enumerable,
            });
      return e;
    };
    var le = (e, t, s) => (
      (s = e != null ? te(oe(e)) : {}),
      se(
        t || !e || !e.__esModule
          ? F(s, 'default', { value: e, enumerable: !0 })
          : s,
        e
      )
    );
    var d = B(() => {});
    var m = B(() => {});
    var p = B(() => {});
    var j = ae(($, G) => {
      d();
      m();
      p();
      (function (e) {
        if (typeof $ == 'object' && typeof G < 'u') G.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          (typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e()));
        }
      })(function () {
        var e, t, s;
        return (function o(i, g, l) {
          function n(a, h) {
            if (!g[a]) {
              if (!i[a]) {
                var c = typeof x == 'function' && x;
                if (!h && c) return c(a, !0);
                if (r) return r(a, !0);
                var y = new Error("Cannot find module '" + a + "'");
                throw ((y.code = 'MODULE_NOT_FOUND'), y);
              }
              var f = (g[a] = { exports: {} });
              i[a][0].call(
                f.exports,
                function (b) {
                  var _ = i[a][1][b];
                  return n(_ || b);
                },
                f,
                f.exports,
                o,
                i,
                g,
                l
              );
            }
            return g[a].exports;
          }
          for (var r = typeof x == 'function' && x, u = 0; u < l.length; u++)
            n(l[u]);
          return n;
        })(
          {
            1: [
              function (o, i, g) {
                i.exports = function (l) {
                  if (typeof Map != 'function' || l) {
                    var n = o('./similar');
                    return new n();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (o, i, g) {
                function l() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                ((l.prototype.get = function (n) {
                  var r;
                  if (this.lastItem && this.isEqual(this.lastItem.key, n))
                    return this.lastItem.val;
                  if (((r = this.indexOf(n)), r >= 0))
                    return ((this.lastItem = this.list[r]), this.list[r].val);
                }),
                  (l.prototype.set = function (n, r) {
                    var u;
                    return this.lastItem && this.isEqual(this.lastItem.key, n)
                      ? ((this.lastItem.val = r), this)
                      : ((u = this.indexOf(n)),
                        u >= 0
                          ? ((this.lastItem = this.list[u]),
                            (this.list[u].val = r),
                            this)
                          : ((this.lastItem = { key: n, val: r }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (l.prototype.delete = function (n) {
                    var r;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, n) &&
                        (this.lastItem = void 0),
                      (r = this.indexOf(n)),
                      r >= 0)
                    )
                      return (this.size--, this.list.splice(r, 1)[0]);
                  }),
                  (l.prototype.has = function (n) {
                    var r;
                    return this.lastItem && this.isEqual(this.lastItem.key, n)
                      ? !0
                      : ((r = this.indexOf(n)),
                        r >= 0 ? ((this.lastItem = this.list[r]), !0) : !1);
                  }),
                  (l.prototype.forEach = function (n, r) {
                    var u;
                    for (u = 0; u < this.size; u++)
                      n.call(
                        r || this,
                        this.list[u].val,
                        this.list[u].key,
                        this
                      );
                  }),
                  (l.prototype.indexOf = function (n) {
                    var r;
                    for (r = 0; r < this.size; r++)
                      if (this.isEqual(this.list[r].key, n)) return r;
                    return -1;
                  }),
                  (l.prototype.isEqual = function (n, r) {
                    return n === r || (n !== n && r !== r);
                  }),
                  (i.exports = l));
              },
              {},
            ],
            3: [
              function (o, i, g) {
                var l = o('map-or-similar');
                i.exports = function (a) {
                  var h = new l(!1),
                    c = [];
                  return function (y) {
                    var f = function () {
                      var b = h,
                        _,
                        A,
                        k = arguments.length - 1,
                        R = Array(k + 1),
                        C = !0,
                        I;
                      if ((f.numArgs || f.numArgs === 0) && f.numArgs !== k + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments'
                        );
                      for (I = 0; I < k; I++) {
                        if (
                          ((R[I] = { cacheItem: b, arg: arguments[I] }),
                          b.has(arguments[I]))
                        ) {
                          b = b.get(arguments[I]);
                          continue;
                        }
                        ((C = !1),
                          (_ = new l(!1)),
                          b.set(arguments[I], _),
                          (b = _));
                      }
                      return (
                        C &&
                          (b.has(arguments[k])
                            ? (A = b.get(arguments[k]))
                            : (C = !1)),
                        C ||
                          ((A = y.apply(null, arguments)),
                          b.set(arguments[k], A)),
                        a > 0 &&
                          ((R[k] = { cacheItem: b, arg: arguments[k] }),
                          C ? n(c, R) : c.push(R),
                          c.length > a && r(c.shift())),
                        (f.wasMemoized = C),
                        (f.numArgs = k + 1),
                        A
                      );
                    };
                    return (
                      (f.limit = a),
                      (f.wasMemoized = !1),
                      (f.cache = h),
                      (f.lru = c),
                      f
                    );
                  };
                };
                function n(a, h) {
                  var c = a.length,
                    y = h.length,
                    f,
                    b,
                    _;
                  for (b = 0; b < c; b++) {
                    for (f = !0, _ = 0; _ < y; _++)
                      if (!u(a[b][_].arg, h[_].arg)) {
                        f = !1;
                        break;
                      }
                    if (f) break;
                  }
                  a.push(a.splice(b, 1)[0]);
                }
                function r(a) {
                  var h = a.length,
                    c = a[h - 1],
                    y,
                    f;
                  for (
                    c.cacheItem.delete(c.arg), f = h - 2;
                    f >= 0 &&
                    ((c = a[f]), (y = c.cacheItem.get(c.arg)), !y || !y.size);
                    f--
                  )
                    c.cacheItem.delete(c.arg);
                }
                function u(a, h) {
                  return a === h || (a !== a && h !== h);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3]
        )(3);
      });
    });
    d();
    m();
    p();
    d();
    m();
    p();
    d();
    m();
    p();
    d();
    m();
    p();
    var v = __REACT__,
      {
        Children: Te,
        Component: Se,
        Fragment: w,
        Profiler: ke,
        PureComponent: Ie,
        StrictMode: Ee,
        Suspense: Ce,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xe,
        cloneElement: Ae,
        createContext: Re,
        createElement: Be,
        createFactory: we,
        createRef: Le,
        forwardRef: Me,
        isValidElement: Pe,
        lazy: Ne,
        memo: L,
        useCallback: K,
        useContext: Ge,
        useDebugValue: ze,
        useEffect: De,
        useImperativeHandle: qe,
        useLayoutEffect: He,
        useMemo: Y,
        useReducer: Fe,
        useRef: Ke,
        useState: W,
        version: Ye,
      } = __REACT__;
    d();
    m();
    p();
    var Ve = __STORYBOOK_API__,
      {
        ActiveTabs: Ze,
        Consumer: Je,
        ManagerContext: Qe,
        Provider: Xe,
        addons: M,
        combineParameters: et,
        controlOrMetaKey: tt,
        controlOrMetaSymbol: rt,
        eventMatchesShortcut: nt,
        eventToShortcut: ot,
        isMacLike: it,
        isShortcutTaken: at,
        keyToSymbol: st,
        merge: lt,
        mockChannel: ut,
        optionOrAltSymbol: ct,
        shortcutMatchesShortcut: ft,
        shortcutToHumanString: dt,
        types: U,
        useAddonState: mt,
        useArgTypes: pt,
        useArgs: ht,
        useChannel: gt,
        useGlobalTypes: bt,
        useGlobals: P,
        useParameter: N,
        useSharedState: yt,
        useStoryPrepared: _t,
        useStorybookApi: vt,
        useStorybookState: Ot,
      } = __STORYBOOK_API__;
    var H = le(j());
    d();
    m();
    p();
    var Rt = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Bt,
        logger: z,
        once: wt,
        pretty: Lt,
      } = __STORYBOOK_CLIENT_LOGGER__;
    d();
    m();
    p();
    var zt = __STORYBOOK_COMPONENTS__,
      {
        A: Dt,
        ActionBar: qt,
        AddonPanel: Ht,
        Badge: Ft,
        Bar: Kt,
        Blockquote: Yt,
        Button: Wt,
        ClipboardCode: Ut,
        Code: $t,
        DL: jt,
        Div: Vt,
        DocumentWrapper: Zt,
        ErrorFormatter: Jt,
        FlexBar: Qt,
        Form: Xt,
        H1: er,
        H2: tr,
        H3: rr,
        H4: nr,
        H5: or,
        H6: ir,
        HR: ar,
        IconButton: D,
        IconButtonSkeleton: sr,
        Icons: q,
        Img: lr,
        LI: ur,
        Link: cr,
        ListItem: fr,
        Loader: dr,
        OL: mr,
        P: pr,
        Placeholder: hr,
        Pre: gr,
        ResetWrapper: br,
        ScrollArea: yr,
        Separator: _r,
        Spaced: vr,
        Span: Or,
        StorybookIcon: Tr,
        StorybookLogo: Sr,
        Symbols: kr,
        SyntaxHighlighter: Ir,
        TT: Er,
        TabBar: Cr,
        TabButton: xr,
        TabWrapper: Ar,
        Table: Rr,
        Tabs: Br,
        TabsState: wr,
        TooltipLinkList: V,
        TooltipMessage: Lr,
        TooltipNote: Mr,
        UL: Pr,
        WithTooltip: Z,
        WithTooltipPure: Nr,
        Zoom: Gr,
        codeCommon: zr,
        components: Dr,
        createCopyToClipboardFunction: qr,
        getStoryHref: Hr,
        icons: Fr,
        interleaveSeparators: Kr,
        nameSpaceClassNames: Yr,
        resetComponents: Wr,
        withReset: Ur,
      } = __STORYBOOK_COMPONENTS__;
    d();
    m();
    p();
    var Jr = __STORYBOOK_THEMING__,
      {
        CacheProvider: Qr,
        ClassNames: Xr,
        Global: en,
        ThemeProvider: tn,
        background: rn,
        color: nn,
        convert: on,
        create: an,
        createCache: sn,
        createGlobal: ln,
        createReset: un,
        css: cn,
        darken: fn,
        ensure: dn,
        ignoreSsrWarning: mn,
        isPropValid: pn,
        jsx: hn,
        keyframes: gn,
        lighten: bn,
        styled: J,
        themes: yn,
        typography: _n,
        useTheme: vn,
        withTheme: On,
      } = __STORYBOOK_THEMING__;
    d();
    m();
    p();
    var En = (() => {
      let e;
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    d();
    m();
    p();
    function Q(e) {
      for (var t = [], s = 1; s < arguments.length; s++)
        t[s - 1] = arguments[s];
      var o = Array.from(typeof e == 'string' ? [e] : e);
      o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var i = o.reduce(function (n, r) {
        var u = r.match(/\n([\t ]+|(?!\s).)/g);
        return u
          ? n.concat(
              u.map(function (a) {
                var h, c;
                return (c =
                  (h = a.match(/[\t ]/g)) === null || h === void 0
                    ? void 0
                    : h.length) !== null && c !== void 0
                  ? c
                  : 0;
              })
            )
          : n;
      }, []);
      if (i.length) {
        var g = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            '}',
          'g'
        );
        o = o.map(function (n) {
          return n.replace(
            g,
            `
`
          );
        });
      }
      o[0] = o[0].replace(/^\r?\n/, '');
      var l = o[0];
      return (
        t.forEach(function (n, r) {
          var u = l.match(/(?:^|\n)( *)$/),
            a = u ? u[1] : '',
            h = n;
          (typeof n == 'string' &&
            n.includes(`
`) &&
            (h = String(n)
              .split(
                `
`
              )
              .map(function (c, y) {
                return y === 0 ? c : '' + a + c;
              }).join(`
`)),
            (l += h + o[r + 1]));
        }),
        l
      );
    }
    var X = 'storybook/background',
      E = 'backgrounds',
      ue = J.span(
        ({ background: e }) => ({
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
          background: e,
        }),
        ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` })
      ),
      ce = (e, t = [], s) => {
        if (e === 'transparent') return 'transparent';
        if (t.find(i => i.value === e)) return e;
        let o = t.find(i => i.name === s);
        if (o) return o.value;
        if (s) {
          let i = t.map(g => g.name).join(', ');
          z.warn(Q`
        Backgrounds Addon: could not find the default color "${s}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `);
        }
        return 'transparent';
      },
      ee = (0, H.default)(1e3)((e, t, s, o, i, g) => ({
        id: e || t,
        title: t,
        onClick: () => {
          i({ selected: s, name: t });
        },
        value: s,
        right: o ? v.createElement(ue, { background: s }) : void 0,
        active: g,
      })),
      fe = (0, H.default)(10)((e, t, s) => {
        let o = e.map(({ name: i, value: g }) =>
          ee(null, i, g, !0, s, g === t)
        );
        return t !== 'transparent'
          ? [ee('reset', 'Clear background', 'transparent', null, s, !1), ...o]
          : o;
      }),
      de = { default: null, disable: !0, values: [] },
      me = L(function () {
        let e = N(E, de),
          [t, s] = W(!1),
          [o, i] = P(),
          g = o[E]?.value,
          l = Y(() => ce(g, e.values, e.default), [e, g]);
        Array.isArray(e) &&
          z.warn(
            'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
          );
        let n = K(
          r => {
            i({ [E]: { ...o[E], value: r } });
          },
          [e, o, i]
        );
        return e.disable
          ? null
          : v.createElement(
              w,
              null,
              v.createElement(
                Z,
                {
                  placement: 'top',
                  closeOnOutsideClick: !0,
                  tooltip: ({ onHide: r }) =>
                    v.createElement(V, {
                      links: fe(e.values, l, ({ selected: u }) => {
                        (l !== u && n(u), r());
                      }),
                    }),
                  onVisibleChange: s,
                },
                v.createElement(
                  D,
                  {
                    key: 'background',
                    title: 'Change the background of the preview',
                    active: l !== 'transparent' || t,
                  },
                  v.createElement(q, { icon: 'photo' })
                )
              )
            );
      }),
      pe = L(function () {
        let [e, t] = P(),
          { grid: s } = N(E, { grid: { disable: !1 } });
        if (s?.disable) return null;
        let o = e[E]?.grid || !1;
        return v.createElement(
          D,
          {
            key: 'background',
            active: o,
            title: 'Apply a grid to the preview',
            onClick: () => t({ [E]: { ...e[E], grid: !o } }),
          },
          v.createElement(q, { icon: 'grid' })
        );
      });
    M.register(X, () => {
      M.add(X, {
        title: 'Backgrounds',
        type: U.TOOL,
        match: ({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)),
        render: () =>
          v.createElement(
            w,
            null,
            v.createElement(me, null),
            v.createElement(pe, null)
          ),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}

try {
  (() => {
    var oe = Object.create;
    var H = Object.defineProperty;
    var ne = Object.getOwnPropertyDescriptor;
    var ae = Object.getOwnPropertyNames;
    var se = Object.getPrototypeOf,
      le = Object.prototype.hasOwnProperty;
    var R = (e =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, o) => (typeof require < 'u' ? require : t)[o],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var P = (e, t) => () => (e && (t = e((e = 0))), t);
    var ue = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t),
      t.exports
    );
    var ce = (e, t, o, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let u of ae(t))
          !le.call(e, u) &&
            u !== o &&
            H(e, u, {
              get: () => t[u],
              enumerable: !(n = ne(t, u)) || n.enumerable,
            });
      return e;
    };
    var de = (e, t, o) => (
      (o = e != null ? oe(se(e)) : {}),
      ce(
        t || !e || !e.__esModule
          ? H(o, 'default', { value: e, enumerable: !0 })
          : o,
        e
      )
    );
    var y = P(() => {});
    var b = P(() => {});
    var S = P(() => {});
    var J = ue((Z, B) => {
      y();
      b();
      S();
      (function (e) {
        if (typeof Z == 'object' && typeof B < 'u') B.exports = e();
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
        var e, t, o;
        return (function n(u, f, c) {
          function i(a, h) {
            if (!f[a]) {
              if (!u[a]) {
                var d = typeof R == 'function' && R;
                if (!h && d) return d(a, !0);
                if (r) return r(a, !0);
                var g = new Error("Cannot find module '" + a + "'");
                throw ((g.code = 'MODULE_NOT_FOUND'), g);
              }
              var l = (f[a] = { exports: {} });
              u[a][0].call(
                l.exports,
                function (s) {
                  var p = u[a][1][s];
                  return i(p || s);
                },
                l,
                l.exports,
                n,
                u,
                f,
                c
              );
            }
            return f[a].exports;
          }
          for (var r = typeof R == 'function' && R, m = 0; m < c.length; m++)
            i(c[m]);
          return i;
        })(
          {
            1: [
              function (n, u, f) {
                u.exports = function (c) {
                  if (typeof Map != 'function' || c) {
                    var i = n('./similar');
                    return new i();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (n, u, f) {
                function c() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                ((c.prototype.get = function (i) {
                  var r;
                  if (this.lastItem && this.isEqual(this.lastItem.key, i))
                    return this.lastItem.val;
                  if (((r = this.indexOf(i)), r >= 0))
                    return ((this.lastItem = this.list[r]), this.list[r].val);
                }),
                  (c.prototype.set = function (i, r) {
                    var m;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? ((this.lastItem.val = r), this)
                      : ((m = this.indexOf(i)),
                        m >= 0
                          ? ((this.lastItem = this.list[m]),
                            (this.list[m].val = r),
                            this)
                          : ((this.lastItem = { key: i, val: r }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (c.prototype.delete = function (i) {
                    var r;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, i) &&
                        (this.lastItem = void 0),
                      (r = this.indexOf(i)),
                      r >= 0)
                    )
                      return (this.size--, this.list.splice(r, 1)[0]);
                  }),
                  (c.prototype.has = function (i) {
                    var r;
                    return this.lastItem && this.isEqual(this.lastItem.key, i)
                      ? !0
                      : ((r = this.indexOf(i)),
                        r >= 0 ? ((this.lastItem = this.list[r]), !0) : !1);
                  }),
                  (c.prototype.forEach = function (i, r) {
                    var m;
                    for (m = 0; m < this.size; m++)
                      i.call(
                        r || this,
                        this.list[m].val,
                        this.list[m].key,
                        this
                      );
                  }),
                  (c.prototype.indexOf = function (i) {
                    var r;
                    for (r = 0; r < this.size; r++)
                      if (this.isEqual(this.list[r].key, i)) return r;
                    return -1;
                  }),
                  (c.prototype.isEqual = function (i, r) {
                    return i === r || (i !== i && r !== r);
                  }),
                  (u.exports = c));
              },
              {},
            ],
            3: [
              function (n, u, f) {
                var c = n('map-or-similar');
                u.exports = function (a) {
                  var h = new c(!1),
                    d = [];
                  return function (g) {
                    var l = function () {
                      var s = h,
                        p,
                        A,
                        x = arguments.length - 1,
                        L = Array(x + 1),
                        I = !0,
                        v;
                      if ((l.numArgs || l.numArgs === 0) && l.numArgs !== x + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments'
                        );
                      for (v = 0; v < x; v++) {
                        if (
                          ((L[v] = { cacheItem: s, arg: arguments[v] }),
                          s.has(arguments[v]))
                        ) {
                          s = s.get(arguments[v]);
                          continue;
                        }
                        ((I = !1),
                          (p = new c(!1)),
                          s.set(arguments[v], p),
                          (s = p));
                      }
                      return (
                        I &&
                          (s.has(arguments[x])
                            ? (A = s.get(arguments[x]))
                            : (I = !1)),
                        I ||
                          ((A = g.apply(null, arguments)),
                          s.set(arguments[x], A)),
                        a > 0 &&
                          ((L[x] = { cacheItem: s, arg: arguments[x] }),
                          I ? i(d, L) : d.push(L),
                          d.length > a && r(d.shift())),
                        (l.wasMemoized = I),
                        (l.numArgs = x + 1),
                        A
                      );
                    };
                    return (
                      (l.limit = a),
                      (l.wasMemoized = !1),
                      (l.cache = h),
                      (l.lru = d),
                      l
                    );
                  };
                };
                function i(a, h) {
                  var d = a.length,
                    g = h.length,
                    l,
                    s,
                    p;
                  for (s = 0; s < d; s++) {
                    for (l = !0, p = 0; p < g; p++)
                      if (!m(a[s][p].arg, h[p].arg)) {
                        l = !1;
                        break;
                      }
                    if (l) break;
                  }
                  a.push(a.splice(s, 1)[0]);
                }
                function r(a) {
                  var h = a.length,
                    d = a[h - 1],
                    g,
                    l;
                  for (
                    d.cacheItem.delete(d.arg), l = h - 2;
                    l >= 0 &&
                    ((d = a[l]), (g = d.cacheItem.get(d.arg)), !g || !g.size);
                    l--
                  )
                    d.cacheItem.delete(d.arg);
                }
                function m(a, h) {
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
    y();
    b();
    S();
    y();
    b();
    S();
    y();
    b();
    S();
    var w = __REACT__,
      {
        Children: Ve,
        Component: Be,
        Fragment: D,
        Profiler: Ne,
        PureComponent: ze,
        StrictMode: qe,
        Suspense: He,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: De,
        cloneElement: We,
        createContext: Fe,
        createElement: W,
        createFactory: Ye,
        createRef: je,
        forwardRef: Ge,
        isValidElement: Ue,
        lazy: $e,
        memo: F,
        useCallback: Ke,
        useContext: Ze,
        useDebugValue: Je,
        useEffect: M,
        useImperativeHandle: Qe,
        useLayoutEffect: Xe,
        useMemo: et,
        useReducer: tt,
        useRef: Y,
        useState: j,
        version: rt,
      } = __REACT__;
    y();
    b();
    S();
    var at = __STORYBOOK_API__,
      {
        ActiveTabs: st,
        Consumer: lt,
        ManagerContext: ut,
        Provider: ct,
        addons: V,
        combineParameters: dt,
        controlOrMetaKey: pt,
        controlOrMetaSymbol: ft,
        eventMatchesShortcut: mt,
        eventToShortcut: ht,
        isMacLike: gt,
        isShortcutTaken: yt,
        keyToSymbol: bt,
        merge: St,
        mockChannel: wt,
        optionOrAltSymbol: xt,
        shortcutMatchesShortcut: _t,
        shortcutToHumanString: vt,
        types: G,
        useAddonState: U,
        useArgTypes: It,
        useArgs: Tt,
        useChannel: Ot,
        useGlobalTypes: Et,
        useGlobals: Ct,
        useParameter: $,
        useSharedState: Rt,
        useStoryPrepared: kt,
        useStorybookApi: K,
        useStorybookState: At,
      } = __STORYBOOK_API__;
    var q = de(J());
    y();
    b();
    S();
    var Ht = __STORYBOOK_THEMING__,
      {
        CacheProvider: Dt,
        ClassNames: Wt,
        Global: Q,
        ThemeProvider: Ft,
        background: Yt,
        color: jt,
        convert: Gt,
        create: Ut,
        createCache: $t,
        createGlobal: Kt,
        createReset: Zt,
        css: Jt,
        darken: Qt,
        ensure: Xt,
        ignoreSsrWarning: er,
        isPropValid: tr,
        jsx: rr,
        keyframes: ir,
        lighten: or,
        styled: k,
        themes: nr,
        typography: ar,
        useTheme: sr,
        withTheme: X,
      } = __STORYBOOK_THEMING__;
    y();
    b();
    S();
    var pr = __STORYBOOK_COMPONENTS__,
      {
        A: fr,
        ActionBar: mr,
        AddonPanel: hr,
        Badge: gr,
        Bar: yr,
        Blockquote: br,
        Button: Sr,
        ClipboardCode: wr,
        Code: xr,
        DL: _r,
        Div: vr,
        DocumentWrapper: Ir,
        ErrorFormatter: Tr,
        FlexBar: Or,
        Form: Er,
        H1: Cr,
        H2: Rr,
        H3: kr,
        H4: Ar,
        H5: Lr,
        H6: Mr,
        HR: Pr,
        IconButton: N,
        IconButtonSkeleton: Vr,
        Icons: z,
        Img: Br,
        LI: Nr,
        Link: zr,
        ListItem: qr,
        Loader: Hr,
        OL: Dr,
        P: Wr,
        Placeholder: Fr,
        Pre: Yr,
        ResetWrapper: jr,
        ScrollArea: Gr,
        Separator: Ur,
        Spaced: $r,
        Span: Kr,
        StorybookIcon: Zr,
        StorybookLogo: Jr,
        Symbols: Qr,
        SyntaxHighlighter: Xr,
        TT: ei,
        TabBar: ti,
        TabButton: ri,
        TabWrapper: ii,
        Table: oi,
        Tabs: ni,
        TabsState: ai,
        TooltipLinkList: ee,
        TooltipMessage: si,
        TooltipNote: li,
        UL: ui,
        WithTooltip: te,
        WithTooltipPure: ci,
        Zoom: di,
        codeCommon: pi,
        components: fi,
        createCopyToClipboardFunction: mi,
        getStoryHref: hi,
        icons: gi,
        interleaveSeparators: yi,
        nameSpaceClassNames: bi,
        resetComponents: Si,
        withReset: wi,
      } = __STORYBOOK_COMPONENTS__;
    var _ = 'storybook/viewport',
      fe = 'viewport',
      ie = (e, t) => e.indexOf(t),
      me = (e, t) => {
        let o = ie(e, t);
        return o === e.length - 1 ? e[0] : e[o + 1];
      },
      he = (e, t) => {
        let o = ie(e, t);
        return o < 1 ? e[e.length - 1] : e[o - 1];
      },
      ge = async (e, t, o) => {
        (await e.setAddonShortcut(_, {
          label: 'Previous viewport',
          defaultShortcut: ['shift', 'V'],
          actionName: 'previous',
          action: () => {
            let { selected: n, isRotated: u } = e.getAddonState(_);
            t({ selected: he(o, n), isRotated: u });
          },
        }),
          await e.setAddonShortcut(_, {
            label: 'Next viewport',
            defaultShortcut: ['V'],
            actionName: 'next',
            action: () => {
              let { selected: n, isRotated: u } = e.getAddonState(_);
              t({ selected: me(o, n), isRotated: u });
            },
          }),
          await e.setAddonShortcut(_, {
            label: 'Reset viewport',
            defaultShortcut: ['alt', 'V'],
            actionName: 'reset',
            action: () => {
              let { isRotated: n } = e.getAddonState(_);
              t({ selected: 'reset', isRotated: n });
            },
          }));
      },
      ye = {
        mobile1: {
          name: 'Small mobile',
          styles: { height: '568px', width: '320px' },
          type: 'mobile',
        },
        mobile2: {
          name: 'Large mobile',
          styles: { height: '896px', width: '414px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { height: '1112px', width: '834px' },
          type: 'tablet',
        },
      },
      be = (0, q.default)(50)(e => [
        ...Se,
        ...Object.entries(e).map(([t, { name: o, ...n }]) => ({
          ...n,
          id: t,
          title: o,
        })),
      ]),
      C = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
      Se = [C],
      we = (0, q.default)(50)((e, t, o, n, u) =>
        e
          .filter(f => f.id !== C.id || t.id !== f.id)
          .map(f => ({
            ...f,
            onClick: () => {
              (o({ ...n, selected: f.id }), u());
            },
          }))
      ),
      xe = 'storybook-preview-wrapper',
      _e = ({ width: e, height: t, ...o }) => ({ ...o, height: e, width: t }),
      ve = k.div(() => ({ display: 'inline-flex' })),
      re = k.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      Ie = k(N)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      Te = k.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2 - 1,
        marginLeft: 10,
      })),
      Oe = (e, t, o) => {
        if (t === null) return;
        let n = typeof t == 'function' ? t(e) : t;
        return o ? _e(n) : n;
      },
      Ee = F(
        X(({ theme: e }) => {
          let {
              viewports: t = ye,
              defaultOrientation: o = 'portrait',
              defaultViewport: n = C.id,
              disable: u,
            } = $(fe, {}),
            [f, c] = U(_, { selected: n, isRotated: o === 'landscape' }),
            i = be(t),
            r = K(),
            [m, a] = j(!1);
          (i.find(p => p.id === n) ||
            console.warn(
              `Cannot find "defaultViewport" of "${n}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
            ),
            M(() => {
              ge(r, c, Object.keys(t));
            }, [t]),
            M(() => {
              c({
                selected:
                  n || (f.selected && t[f.selected] ? f.selected : C.id),
                isRotated: o === 'landscape',
              });
            }, [o, n]));
          let { selected: h, isRotated: d } = f,
            g =
              i.find(p => p.id === h) ||
              i.find(p => p.id === n) ||
              i.find(p => p.default) ||
              C,
            l = Y(),
            s = Oe(l.current, g.styles, d);
          return (
            M(() => {
              l.current = s;
            }, [g]),
            u || Object.entries(t).length === 0
              ? null
              : w.createElement(
                  D,
                  null,
                  w.createElement(
                    te,
                    {
                      placement: 'top',
                      tooltip: ({ onHide: p }) =>
                        w.createElement(ee, { links: we(i, g, c, f, p) }),
                      closeOnOutsideClick: !0,
                      onVisibleChange: a,
                    },
                    w.createElement(
                      Ie,
                      {
                        key: 'viewport',
                        title: 'Change the size of the preview',
                        active: m || !!s,
                        onDoubleClick: () => {
                          c({ ...f, selected: C.id });
                        },
                      },
                      w.createElement(z, { icon: 'grow' }),
                      s
                        ? w.createElement(
                            Te,
                            null,
                            d ? `${g.title} (L)` : `${g.title} (P)`
                          )
                        : null
                    )
                  ),
                  s
                    ? w.createElement(
                        ve,
                        null,
                        w.createElement(Q, {
                          styles: {
                            'iframe[data-is-storybook="true"]': {
                              margin: 'auto',
                              transition: 'none',
                              position: 'relative',
                              border: '1px solid black',
                              boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)',
                              ...s,
                            },
                            [`#${xe}`]: {
                              padding: e.layoutMargin,
                              alignContent: 'center',
                              alignItems: 'center',
                              justifyContent: 'center',
                              justifyItems: 'center',
                              overflow: 'auto',
                              display: 'grid',
                              gridTemplateColumns: '100%',
                              gridTemplateRows: '100%',
                            },
                          },
                        }),
                        w.createElement(
                          re,
                          { title: 'Viewport width' },
                          s.width.replace('px', '')
                        ),
                        w.createElement(
                          N,
                          {
                            key: 'viewport-rotate',
                            title: 'Rotate viewport',
                            onClick: () => {
                              c({ ...f, isRotated: !d });
                            },
                          },
                          w.createElement(z, { icon: 'transfer' })
                        ),
                        w.createElement(
                          re,
                          { title: 'Viewport height' },
                          s.height.replace('px', '')
                        )
                      )
                    : null
                )
          );
        })
      );
    V.register(_, () => {
      V.add(_, {
        title: 'viewport / media-queries',
        type: G.TOOL,
        match: ({ viewMode: e }) => e === 'story',
        render: () => W(Ee, null),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}

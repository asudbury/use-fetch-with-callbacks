try {
  (() => {
    var a = __REACT__,
      {
        Children: fn,
        Component: Rn,
        Fragment: $,
        Profiler: bn,
        PureComponent: se,
        StrictMode: yn,
        Suspense: _n,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Tn,
        cloneElement: G,
        createContext: ue,
        createElement: h,
        createFactory: Sn,
        createRef: de,
        forwardRef: On,
        isValidElement: me,
        lazy: vn,
        memo: xn,
        useCallback: v,
        useContext: pe,
        useDebugValue: Cn,
        useEffect: P,
        useImperativeHandle: An,
        useLayoutEffect: ge,
        useMemo: W,
        useReducer: In,
        useRef: j,
        useState: k,
        version: kn,
      } = __REACT__;
    var wn = __STORYBOOK_API__,
      {
        ActiveTabs: Ln,
        Consumer: Pn,
        ManagerContext: Bn,
        Provider: Mn,
        addons: F,
        combineParameters: $n,
        controlOrMetaKey: Gn,
        controlOrMetaSymbol: Wn,
        eventMatchesShortcut: jn,
        eventToShortcut: Fn,
        isMacLike: Un,
        isShortcutTaken: Yn,
        keyToSymbol: zn,
        merge: Vn,
        mockChannel: Kn,
        optionOrAltSymbol: Xn,
        shortcutMatchesShortcut: qn,
        shortcutToHumanString: Qn,
        types: X,
        useAddonState: q,
        useArgTypes: Jn,
        useArgs: Zn,
        useChannel: Q,
        useGlobalTypes: ea,
        useGlobals: ta,
        useParameter: he,
        useSharedState: ra,
        useStoryPrepared: na,
        useStorybookApi: Ee,
        useStorybookState: fe,
      } = __STORYBOOK_API__;
    var ca = __STORYBOOK_COMPONENTS__,
      {
        A: sa,
        ActionBar: J,
        AddonPanel: ua,
        Badge: Z,
        Bar: da,
        Blockquote: ma,
        Button: pa,
        ClipboardCode: ga,
        Code: ha,
        DL: Ea,
        Div: fa,
        DocumentWrapper: Ra,
        ErrorFormatter: ba,
        FlexBar: ya,
        Form: _a,
        H1: Ta,
        H2: Sa,
        H3: Oa,
        H4: va,
        H5: xa,
        H6: Ca,
        HR: Aa,
        IconButton: Re,
        IconButtonSkeleton: Ia,
        Icons: U,
        Img: ka,
        LI: Na,
        Link: Da,
        ListItem: Ha,
        Loader: wa,
        OL: La,
        P: Pa,
        Placeholder: be,
        Pre: Ba,
        ResetWrapper: Ma,
        ScrollArea: ye,
        Separator: $a,
        Spaced: _e,
        Span: Ga,
        StorybookIcon: Wa,
        StorybookLogo: ja,
        Symbols: Fa,
        SyntaxHighlighter: Ua,
        TT: Ya,
        TabBar: za,
        TabButton: Va,
        TabWrapper: Ka,
        Table: Xa,
        Tabs: qa,
        TabsState: Qa,
        TooltipLinkList: Te,
        TooltipMessage: Ja,
        TooltipNote: Za,
        UL: eo,
        WithTooltip: Se,
        WithTooltipPure: to,
        Zoom: ro,
        codeCommon: no,
        components: ao,
        createCopyToClipboardFunction: oo,
        getStoryHref: io,
        icons: lo,
        interleaveSeparators: co,
        nameSpaceClassNames: so,
        resetComponents: uo,
        withReset: mo,
      } = __STORYBOOK_COMPONENTS__;
    var fo = __STORYBOOK_THEMING__,
      {
        CacheProvider: Ro,
        ClassNames: bo,
        Global: Oe,
        ThemeProvider: yo,
        background: _o,
        color: To,
        convert: Y,
        create: So,
        createCache: Oo,
        createGlobal: vo,
        createReset: xo,
        css: Co,
        darken: Ao,
        ensure: Io,
        ignoreSsrWarning: ko,
        isPropValid: No,
        jsx: Do,
        keyframes: Ho,
        lighten: wo,
        styled: c,
        themes: z,
        typography: Lo,
        useTheme: Po,
        withTheme: Bo,
      } = __STORYBOOK_THEMING__;
    var jo = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Fo,
        createPortal: Uo,
        findDOMNode: ve,
        flushSync: Yo,
        hydrate: zo,
        render: Vo,
        unmountComponentAtNode: Ko,
        unstable_batchedUpdates: Xo,
        unstable_createPortal: qo,
        unstable_renderSubtreeIntoContainer: Qo,
        version: Jo,
      } = __REACT_DOM__;
    var ni = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: ai,
        CONFIG_ERROR: oi,
        CURRENT_STORY_WAS_SET: ii,
        DOCS_PREPARED: li,
        DOCS_RENDERED: ci,
        FORCE_REMOUNT: si,
        FORCE_RE_RENDER: ui,
        GLOBALS_UPDATED: di,
        IGNORED_EXCEPTION: mi,
        NAVIGATE_URL: pi,
        PLAY_FUNCTION_THREW_EXCEPTION: gi,
        PRELOAD_ENTRIES: hi,
        PREVIEW_BUILDER_PROGRESS: Ei,
        PREVIEW_KEYDOWN: fi,
        REGISTER_SUBSCRIPTION: Ri,
        REQUEST_WHATS_NEW_DATA: bi,
        RESET_STORY_ARGS: yi,
        RESULT_WHATS_NEW_DATA: _i,
        SELECT_STORY: Ti,
        SET_CONFIG: Si,
        SET_CURRENT_STORY: Oi,
        SET_GLOBALS: vi,
        SET_INDEX: xi,
        SET_STORIES: Ci,
        SET_WHATS_NEW_CACHE: Ai,
        SHARED_STATE_CHANGED: Ii,
        SHARED_STATE_SET: ki,
        STORIES_COLLAPSE_ALL: Ni,
        STORIES_EXPAND_ALL: Di,
        STORY_ARGS_UPDATED: Hi,
        STORY_CHANGED: xe,
        STORY_ERRORED: wi,
        STORY_INDEX_INVALIDATED: Li,
        STORY_MISSING: Pi,
        STORY_PREPARED: Bi,
        STORY_RENDERED: Ce,
        STORY_RENDER_PHASE_CHANGED: Mi,
        STORY_SPECIFIED: $i,
        STORY_THREW_EXCEPTION: Gi,
        STORY_UNCHANGED: Wi,
        TELEMETRY_ERROR: ji,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: Fi,
        UPDATE_GLOBALS: Ui,
        UPDATE_QUERY_PARAMS: Yi,
        UPDATE_STORY_ARGS: zi,
      } = __STORYBOOK_CORE_EVENTS__;
    var Ae = 'storybook/highlight',
      Ie = `${Ae}/add`,
      Qi = `${Ae}/reset`;
    var x = 'storybook/a11y',
      ke = `${x}/panel`,
      et = 'a11y',
      tt = `${x}/result`,
      rt = `${x}/request`,
      nt = `${x}/running`,
      at = `${x}/error`,
      ot = `${x}/manual`,
      M = { RESULT: tt, REQUEST: rt, RUNNING: nt, ERROR: at, MANUAL: ot },
      it = e =>
        h(
          'svg',
          { ...e },
          h(
            'defs',
            null,
            h(
              'filter',
              { id: 'protanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'protanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'deuteranopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'deuteranomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'tritanopia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'tritanomaly' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0',
              })
            ),
            h(
              'filter',
              { id: 'achromatopsia' },
              h('feColorMatrix', {
                in: 'SourceGraphic',
                type: 'matrix',
                values:
                  '0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0',
              })
            )
          )
        ),
      lt = 'storybook-preview-iframe',
      ct = [
        { name: 'blurred vision', percentage: 22.9 },
        { name: 'deuteranomaly', percentage: 2.7 },
        { name: 'deuteranopia', percentage: 0.56 },
        { name: 'protanomaly', percentage: 0.66 },
        { name: 'protanopia', percentage: 0.59 },
        { name: 'tritanomaly', percentage: 0.01 },
        { name: 'tritanopia', percentage: 0.016 },
        { name: 'achromatopsia', percentage: 1e-4 },
        { name: 'grayscale' },
      ],
      Ge = e =>
        e
          ? e === 'blurred vision'
            ? 'blur(2px)'
            : e === 'grayscale'
              ? 'grayscale(100%)'
              : `url('#${e}')`
          : 'none',
      st = c.div(() => ({
        '&, & svg': { position: 'absolute', width: 0, height: 0 },
      })),
      ut = c.span(
        {
          background:
            'linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)',
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
        },
        ({ filter: e }) => ({ filter: Ge(e) }),
        ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` })
      ),
      dt = c.span({ display: 'flex', flexDirection: 'column' }),
      mt = c.span({ textTransform: 'capitalize' }),
      pt = c.span(({ theme: e }) => ({
        fontSize: 11,
        color: e.textMutedColor,
      })),
      gt = (e, r) => [
        ...(e !== null
          ? [
              {
                id: 'reset',
                title: 'Reset color filter',
                onClick: () => {
                  r(null);
                },
                right: void 0,
                active: !1,
              },
            ]
          : []),
        ...ct.map(n => {
          let t =
            n.percentage !== void 0 ? `${n.percentage}% of users` : void 0;
          return {
            id: n.name,
            title: a.createElement(
              dt,
              null,
              a.createElement(mt, null, n.name),
              t && a.createElement(pt, null, t)
            ),
            onClick: () => {
              r(n);
            },
            right: a.createElement(ut, { filter: n.name }),
            active: e === n,
          };
        }),
      ],
      ht = () => {
        let [e, r] = k(null);
        return a.createElement(
          a.Fragment,
          null,
          e &&
            a.createElement(Oe, {
              styles: { [`#${lt}`]: { filter: Ge(e.name) } },
            }),
          a.createElement(
            Se,
            {
              placement: 'top',
              tooltip: ({ onHide: n }) => {
                let t = gt(e, o => {
                  (r(o), n());
                });
                return a.createElement(Te, { links: t });
              },
              closeOnOutsideClick: !0,
              onDoubleClick: () => r(null),
            },
            a.createElement(
              Re,
              { key: 'filter', active: !!e, title: 'Vision simulator' },
              a.createElement(U, { icon: 'accessibility' })
            )
          ),
          a.createElement(st, null, a.createElement(it, null))
        );
      },
      Et = c.div({ padding: 12, marginBottom: 10 }),
      ft = c.p({ margin: '0 0 12px' }),
      Rt = c.a({
        marginTop: 12,
        textDecoration: 'underline',
        color: 'inherit',
        display: 'block',
      }),
      bt = ({ item: e }) =>
        a.createElement(
          Et,
          null,
          a.createElement(ft, null, e.description),
          a.createElement(
            Rt,
            { href: e.helpUrl, target: '_blank' },
            'More info...'
          )
        ),
      re = function (e, r) {
        return (
          (re =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, t) {
                n.__proto__ = t;
              }) ||
            function (n, t) {
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            }),
          re(e, r)
        );
      };
    function yt(e, r) {
      if (typeof r != 'function' && r !== null)
        throw new TypeError(
          'Class extends value ' + String(r) + ' is not a constructor or null'
        );
      re(e, r);
      function n() {
        this.constructor = e;
      }
      e.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    }
    var ne = function () {
      return (
        (ne =
          Object.assign ||
          function (e) {
            for (var r, n = 1, t = arguments.length; n < t; n++) {
              r = arguments[n];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }),
        ne.apply(this, arguments)
      );
    };
    function _t(e, r) {
      var n = {};
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
          r.indexOf(t) < 0 &&
          (n[t] = e[t]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++)
          r.indexOf(t[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, t[o]) &&
            (n[t[o]] = e[t[o]]);
      return n;
    }
    var V =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u' || typeof window < 'u'
          ? window
          : typeof self < 'u'
            ? self
            : {};
    function Tt(e) {
      var r = typeof e;
      return e != null && (r == 'object' || r == 'function');
    }
    var oe = Tt,
      St = typeof V == 'object' && V && V.Object === Object && V,
      Ot = St,
      vt = Ot,
      xt = typeof self == 'object' && self && self.Object === Object && self,
      Ct = vt || xt || Function('return this')(),
      We = Ct,
      At = We,
      It = function () {
        return At.Date.now();
      },
      kt = It,
      Nt = /\s/;
    function Dt(e) {
      for (var r = e.length; r-- && Nt.test(e.charAt(r)); );
      return r;
    }
    var Ht = Dt,
      wt = Ht,
      Lt = /^\s+/;
    function Pt(e) {
      return e && e.slice(0, wt(e) + 1).replace(Lt, '');
    }
    var Bt = Pt,
      Mt = We,
      $t = Mt.Symbol,
      je = $t,
      Ne = je,
      Fe = Object.prototype,
      Gt = Fe.hasOwnProperty,
      Wt = Fe.toString,
      B = Ne ? Ne.toStringTag : void 0;
    function jt(e) {
      var r = Gt.call(e, B),
        n = e[B];
      try {
        e[B] = void 0;
        var t = !0;
      } catch {}
      var o = Wt.call(e);
      return (t && (r ? (e[B] = n) : delete e[B]), o);
    }
    var Ft = jt,
      Ut = Object.prototype,
      Yt = Ut.toString;
    function zt(e) {
      return Yt.call(e);
    }
    var Vt = zt,
      De = je,
      Kt = Ft,
      Xt = Vt,
      qt = '[object Null]',
      Qt = '[object Undefined]',
      He = De ? De.toStringTag : void 0;
    function Jt(e) {
      return e == null
        ? e === void 0
          ? Qt
          : qt
        : He && He in Object(e)
          ? Kt(e)
          : Xt(e);
    }
    var Zt = Jt;
    function er(e) {
      return e != null && typeof e == 'object';
    }
    var tr = er,
      rr = Zt,
      nr = tr,
      ar = '[object Symbol]';
    function or(e) {
      return typeof e == 'symbol' || (nr(e) && rr(e) == ar);
    }
    var ir = or,
      lr = Bt,
      we = oe,
      cr = ir,
      Le = 0 / 0,
      sr = /^[-+]0x[0-9a-f]+$/i,
      ur = /^0b[01]+$/i,
      dr = /^0o[0-7]+$/i,
      mr = parseInt;
    function pr(e) {
      if (typeof e == 'number') return e;
      if (cr(e)) return Le;
      if (we(e)) {
        var r = typeof e.valueOf == 'function' ? e.valueOf() : e;
        e = we(r) ? r + '' : r;
      }
      if (typeof e != 'string') return e === 0 ? e : +e;
      e = lr(e);
      var n = ur.test(e);
      return n || dr.test(e) ? mr(e.slice(2), n ? 2 : 8) : sr.test(e) ? Le : +e;
    }
    var gr = pr,
      hr = oe,
      ee = kt,
      Pe = gr,
      Er = 'Expected a function',
      fr = Math.max,
      Rr = Math.min;
    function br(e, r, n) {
      var t,
        o,
        u,
        s,
        l,
        m,
        p = 0,
        d = !1,
        g = !1,
        i = !0;
      if (typeof e != 'function') throw new TypeError(Er);
      ((r = Pe(r) || 0),
        hr(n) &&
          ((d = !!n.leading),
          (g = 'maxWait' in n),
          (u = g ? fr(Pe(n.maxWait) || 0, r) : u),
          (i = 'trailing' in n ? !!n.trailing : i)));
      function b(E) {
        var S = t,
          O = o;
        return ((t = o = void 0), (p = E), (s = e.apply(O, S)), s);
      }
      function y(E) {
        return ((p = E), (l = setTimeout(R, r)), d ? b(E) : s);
      }
      function _(E) {
        var S = E - m,
          O = E - p,
          L = r - S;
        return g ? Rr(L, u - O) : L;
      }
      function f(E) {
        var S = E - m,
          O = E - p;
        return m === void 0 || S >= r || S < 0 || (g && O >= u);
      }
      function R() {
        var E = ee();
        if (f(E)) return T(E);
        l = setTimeout(R, _(E));
      }
      function T(E) {
        return ((l = void 0), i && t ? b(E) : ((t = o = void 0), s));
      }
      function H() {
        (l !== void 0 && clearTimeout(l), (p = 0), (t = m = o = l = void 0));
      }
      function w() {
        return l === void 0 ? s : T(ee());
      }
      function D() {
        var E = ee(),
          S = f(E);
        if (((t = arguments), (o = this), (m = E), S)) {
          if (l === void 0) return y(m);
          if (g) return (clearTimeout(l), (l = setTimeout(R, r)), b(m));
        }
        return (l === void 0 && (l = setTimeout(R, r)), s);
      }
      return ((D.cancel = H), (D.flush = w), D);
    }
    var Ue = br,
      yr = Ue,
      _r = oe,
      Tr = 'Expected a function';
    function Sr(e, r, n) {
      var t = !0,
        o = !0;
      if (typeof e != 'function') throw new TypeError(Tr);
      return (
        _r(n) &&
          ((t = 'leading' in n ? !!n.leading : t),
          (o = 'trailing' in n ? !!n.trailing : o)),
        yr(e, r, { leading: t, maxWait: r, trailing: o })
      );
    }
    var Or = Sr,
      Ye = function (e, r, n, t) {
        switch (r) {
          case 'debounce':
            return Ue(e, n, t);
          case 'throttle':
            return Or(e, n, t);
          default:
            return e;
        }
      },
      ae = function (e) {
        return typeof e == 'function';
      },
      N = function () {
        return typeof window > 'u';
      },
      Be = function (e) {
        return e instanceof Element || e instanceof HTMLDocument;
      },
      ze = function (e, r, n, t) {
        return function (o) {
          var u = o.width,
            s = o.height;
          r(function (l) {
            return (l.width === u && l.height === s) ||
              (l.width === u && !t) ||
              (l.height === s && !n)
              ? l
              : (e && ae(e) && e(u, s), { width: u, height: s });
          });
        };
      };
    (function (e) {
      yt(r, e);
      function r(n) {
        var t = e.call(this, n) || this;
        ((t.cancelHandler = function () {
          t.resizeHandler &&
            t.resizeHandler.cancel &&
            (t.resizeHandler.cancel(), (t.resizeHandler = null));
        }),
          (t.attachObserver = function () {
            var p = t.props,
              d = p.targetRef,
              g = p.observerOptions;
            if (!N()) {
              d && d.current && (t.targetRef.current = d.current);
              var i = t.getElement();
              i &&
                ((t.observableElement && t.observableElement === i) ||
                  ((t.observableElement = i), t.resizeObserver.observe(i, g)));
            }
          }),
          (t.getElement = function () {
            var p = t.props,
              d = p.querySelector,
              g = p.targetDomEl;
            if (N()) return null;
            if (d) return document.querySelector(d);
            if (g && Be(g)) return g;
            if (t.targetRef && Be(t.targetRef.current))
              return t.targetRef.current;
            var i = ve(t);
            if (!i) return null;
            var b = t.getRenderType();
            switch (b) {
              case 'renderProp':
                return i;
              case 'childFunction':
                return i;
              case 'child':
                return i;
              case 'childArray':
                return i;
              default:
                return i.parentElement;
            }
          }),
          (t.createResizeHandler = function (p) {
            var d = t.props,
              g = d.handleWidth,
              i = g === void 0 ? !0 : g,
              b = d.handleHeight,
              y = b === void 0 ? !0 : b,
              _ = d.onResize;
            if (!(!i && !y)) {
              var f = ze(_, t.setState.bind(t), i, y);
              p.forEach(function (R) {
                var T = (R && R.contentRect) || {},
                  H = T.width,
                  w = T.height,
                  D = !t.skipOnMount && !N();
                (D && f({ width: H, height: w }), (t.skipOnMount = !1));
              });
            }
          }),
          (t.getRenderType = function () {
            var p = t.props,
              d = p.render,
              g = p.children;
            return ae(d)
              ? 'renderProp'
              : ae(g)
                ? 'childFunction'
                : me(g)
                  ? 'child'
                  : Array.isArray(g)
                    ? 'childArray'
                    : 'parent';
          }));
        var o = n.skipOnMount,
          u = n.refreshMode,
          s = n.refreshRate,
          l = s === void 0 ? 1e3 : s,
          m = n.refreshOptions;
        return (
          (t.state = { width: void 0, height: void 0 }),
          (t.skipOnMount = o),
          (t.targetRef = de()),
          (t.observableElement = null),
          N() ||
            ((t.resizeHandler = Ye(t.createResizeHandler, u, l, m)),
            (t.resizeObserver = new window.ResizeObserver(t.resizeHandler))),
          t
        );
      }
      return (
        (r.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (r.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (r.prototype.componentWillUnmount = function () {
          N() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler());
        }),
        (r.prototype.render = function () {
          var n = this.props,
            t = n.render,
            o = n.children,
            u = n.nodeType,
            s = u === void 0 ? 'div' : u,
            l = this.state,
            m = l.width,
            p = l.height,
            d = { width: m, height: p, targetRef: this.targetRef },
            g = this.getRenderType(),
            i;
          switch (g) {
            case 'renderProp':
              return t && t(d);
            case 'childFunction':
              return ((i = o), i(d));
            case 'child':
              if (((i = o), i.type && typeof i.type == 'string')) {
                d.targetRef;
                var b = _t(d, ['targetRef']);
                return G(i, b);
              }
              return G(i, d);
            case 'childArray':
              return (
                (i = o),
                i.map(function (y) {
                  return !!y && G(y, d);
                })
              );
            default:
              return h(s, null);
          }
        }),
        r
      );
    })(se);
    var vr = N() ? P : ge;
    function Ve(e) {
      e === void 0 && (e = {});
      var r = e.skipOnMount,
        n = r === void 0 ? !1 : r,
        t = e.refreshMode,
        o = e.refreshRate,
        u = o === void 0 ? 1e3 : o,
        s = e.refreshOptions,
        l = e.handleWidth,
        m = l === void 0 ? !0 : l,
        p = e.handleHeight,
        d = p === void 0 ? !0 : p,
        g = e.targetRef,
        i = e.observerOptions,
        b = e.onResize,
        y = j(n),
        _ = j(null),
        f = g ?? _,
        R = j(),
        T = k({ width: void 0, height: void 0 }),
        H = T[0],
        w = T[1];
      return (
        vr(
          function () {
            if (!N()) {
              var D = ze(b, w, m, d),
                E = function (O) {
                  (!m && !d) ||
                    O.forEach(function (L) {
                      var ce = (L && L.contentRect) || {},
                        qe = ce.width,
                        Qe = ce.height,
                        Je = !y.current && !N();
                      (Je && D({ width: qe, height: Qe }), (y.current = !1));
                    });
                };
              R.current = Ye(E, t, u, s);
              var S = new window.ResizeObserver(R.current);
              return (
                f.current && S.observe(f.current, i),
                function () {
                  S.disconnect();
                  var O = R.current;
                  O && O.cancel && O.cancel();
                }
              );
            }
          },
          [t, u, s, m, d, b, i, f.current]
        ),
        ne({ ref: f }, H)
      );
    }
    var xr = c.div({
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 4,
        paddingRight: 4,
        paddingTop: 4,
        fontWeight: 400,
      }),
      Cr = c.div(({ elementWidth: e }) => ({
        flexDirection: e > 407 ? 'row' : 'inherit',
        marginBottom: e > 407 ? 6 : 12,
        display: e > 407 ? 'flex' : 'block',
      })),
      Ar = c(Z)({
        padding: '2px 8px',
        marginBottom: 3,
        minWidth: 65,
        maxWidth: 'fit-content',
        width: '100%',
        textAlign: 'center',
      }),
      Ir = c.div({ paddingLeft: 6, paddingRight: 23 }),
      kr = e => e.charAt(0).toUpperCase().concat(e.slice(1)),
      Nr = ({ rule: e }) => {
        let { ref: r, width: n } = Ve({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          t = null;
        switch (e.impact) {
          case 'critical':
            t = 'critical';
            break;
          case 'serious':
            t = 'negative';
            break;
          case 'moderate':
            t = 'warning';
            break;
          case 'minor':
            t = 'neutral';
            break;
        }
        return a.createElement(
          Cr,
          { ref: r, elementWidth: n || 0 },
          a.createElement(Ar, { status: t }, kr(e.impact)),
          a.createElement(Ir, null, e.message)
        );
      },
      Dr = ({ rules: e }) =>
        a.createElement(
          xr,
          null,
          e.map((r, n) => a.createElement(Nr, { rule: r, key: n }))
        ),
      Hr = [
        Y(z.light).color.negative,
        Y(z.light).color.positive,
        Y(z.light).color.warning,
      ],
      Ke = ue({
        results: { passes: [], incomplete: [], violations: [] },
        setResults: () => {},
        highlighted: [],
        toggleHighlight: () => {},
        clearHighlights: () => {},
        tab: 0,
        setTab: () => {},
      }),
      Me = { passes: [], incomplete: [], violations: [] },
      wr = ({ active: e, ...r }) => {
        let [n, t] = q(x, Me),
          [o, u] = k(0),
          [s, l] = k([]),
          m = Ee().getCurrentStoryData(),
          p = v((_, f) => {
            l(R => (f ? [...R, ..._] : R.filter(T => !_.includes(T))));
          }, []),
          d = _ => {
            y(M.REQUEST, _);
          },
          g = v(() => l([]), []),
          i = v(_ => {
            (g(), u(_));
          }, []),
          b = v(() => {
            (u(0), t(Me));
          }, []),
          y = Q({ [Ce]: d, [xe]: b });
        return (
          P(() => {
            y(Ie, { elements: s, color: Hr[o] });
          }, [s, o]),
          P(() => {
            e && m?.type === 'story' ? d(m.id) : g();
          }, [e, g, y, m]),
          e
            ? h(Ke.Provider, {
                value: {
                  results: n,
                  setResults: t,
                  highlighted: s,
                  toggleHighlight: p,
                  clearHighlights: g,
                  tab: o,
                  setTab: i,
                },
                ...r,
              })
            : null
        );
      },
      ie = () => pe(Ke),
      Lr = c.input(({ disabled: e }) => ({
        cursor: e ? 'not-allowed' : 'pointer',
      }));
    function $e(e, r) {
      let n = e.filter(t => r.includes(t.target[0])).length;
      return n === 0 ? 1 : n === e.length ? 0 : 2;
    }
    var Pr = ({ toggleId: e, elementsToHighlight: r = [] }) => {
        let { toggleHighlight: n, highlighted: t } = ie(),
          o = a.useRef(null),
          [u, s] = a.useState($e(r, t));
        a.useEffect(() => {
          let m = $e(r, t);
          (o.current && (o.current.indeterminate = m === 2), s(m));
        }, [r, t]);
        let l = a.useCallback(() => {
          n(
            r.map(m => m.target[0]),
            u !== 0
          );
        }, [r, u, n]);
        return a.createElement(Lr, {
          ref: o,
          id: e,
          type: 'checkbox',
          'aria-label': 'Highlight result',
          disabled: !r.length,
          onChange: l,
          checked: u === 0,
        });
      },
      le = Pr,
      Br = c.li({ fontWeight: 600 }),
      Mr = c.span(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        width: '100%',
        display: 'flex',
        paddingBottom: 6,
        marginBottom: 6,
        justifyContent: 'space-between',
      })),
      $r = c.span({
        fontWeight: 'normal',
        alignSelf: 'center',
        paddingRight: 15,
        input: { margin: 0, display: 'block' },
      }),
      Gr = ({ element: e, type: r }) => {
        let { any: n, all: t, none: o } = e,
          u = [...n, ...t, ...o],
          s = `${r}-${e.target[0]}`;
        return a.createElement(
          Br,
          null,
          a.createElement(
            Mr,
            null,
            e.target[0],
            a.createElement(
              $r,
              null,
              a.createElement(le, { toggleId: s, elementsToHighlight: [e] })
            )
          ),
          a.createElement(Dr, { rules: u })
        );
      },
      Wr = ({ elements: e, type: r }) =>
        a.createElement(
          'ol',
          null,
          e.map((n, t) => a.createElement(Gr, { element: n, key: t, type: r }))
        ),
      jr = c.div({ display: 'flex', flexWrap: 'wrap', margin: '12px 0' }),
      Fr = c.div(({ theme: e }) => ({
        margin: '0 6px',
        padding: 5,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
      })),
      Ur = ({ tags: e }) =>
        a.createElement(
          jr,
          null,
          e.map(r => a.createElement(Fr, { key: r }, r))
        ),
      Yr = c.div(({ theme: e }) => ({
        display: 'flex',
        width: '100%',
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:hover': { background: e.background.hoverable },
      })),
      zr = c(U)({
        height: 10,
        width: 10,
        minWidth: 10,
        marginRight: 10,
        transition: 'transform 0.1s ease-in-out',
        verticalAlign: 'inherit',
      }),
      Vr = c.div(({ theme: e }) => ({
        padding: e.layoutMargin,
        paddingLeft: e.layoutMargin - 3,
        lineHeight: '20px',
        background: 'none',
        color: 'inherit',
        textAlign: 'left',
        cursor: 'pointer',
        borderLeft: '3px solid transparent',
        width: '100%',
        '&:focus': {
          outline: '0 none',
          borderLeft: `3px solid ${e.color.secondary}`,
        },
      })),
      Kr = c.span({
        fontWeight: 'normal',
        float: 'right',
        marginRight: 15,
        alignSelf: 'center',
        input: { margin: 0, display: 'block' },
      }),
      Xr = e => {
        let [r, n] = k(!1),
          { item: t, type: o } = e,
          u = `${o}-${t.id}`;
        return a.createElement(
          $,
          null,
          a.createElement(
            Yr,
            null,
            a.createElement(
              Vr,
              { onClick: () => n(!r), role: 'button' },
              a.createElement(zr, {
                icon: 'arrowdown',
                style: { transform: `rotate(${r ? 0 : -90}deg)` },
              }),
              t.help
            ),
            a.createElement(
              Kr,
              null,
              a.createElement(le, { toggleId: u, elementsToHighlight: t.nodes })
            )
          ),
          r
            ? a.createElement(
                $,
                null,
                a.createElement(bt, { item: t, key: 'info' }),
                a.createElement(Wr, {
                  elements: t.nodes,
                  type: o,
                  key: 'elements',
                }),
                a.createElement(Ur, { tags: t.tags, key: 'tags' })
              )
            : null
        );
      },
      te = ({ items: e, empty: r, type: n }) =>
        a.createElement(
          $,
          null,
          e && e.length
            ? e.map(t =>
                a.createElement(Xr, { item: t, key: `${n}:${t.id}`, type: n })
              )
            : a.createElement(be, { key: 'placeholder' }, r)
        ),
      qr = c.div({ width: '100%', position: 'relative', minHeight: '100%' }),
      Qr = c.label(({ theme: e }) => ({
        cursor: 'pointer',
        userSelect: 'none',
        color: e.color.dark,
      })),
      Jr = c.div(({ elementWidth: e, theme: r }) => ({
        cursor: 'pointer',
        fontSize: 13,
        lineHeight: '20px',
        padding: e > 450 ? '10px 15px 10px 0' : '10px 0px 10px 15px',
        height: '40px',
        border: 'none',
        marginTop: e > 450 ? -40 : 0,
        float: e > 450 ? 'right' : 'left',
        display: 'flex',
        alignItems: 'center',
        width: e > 450 ? 'auto' : '100%',
        borderBottom: e > 450 ? 'none' : `1px solid ${r.appBorderColor}`,
        input: {
          marginLeft: 10,
          marginRight: 0,
          marginTop: -1,
          marginBottom: 0,
        },
      })),
      Zr = c.button(
        ({ theme: e }) => ({
          textDecoration: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          fontWeight: e.typography.weight.bold,
          fontSize: e.typography.size.s2 - 1,
          lineHeight: 1,
          height: 40,
          border: 'none',
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          background: 'transparent',
          '&:focus': {
            outline: '0 none',
            borderBottom: `3px solid ${e.color.secondary}`,
          },
        }),
        ({ active: e, theme: r }) =>
          e
            ? { opacity: 1, borderBottom: `3px solid ${r.color.secondary}` }
            : {}
      ),
      en = c.div({}),
      tn = c.div(({ theme: e }) => ({
        boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
        background: e.background.app,
        display: 'flex',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
      }));
    function rn(e) {
      return e.reduce((r, n) => r.concat(n.nodes), []);
    }
    var nn = ({ tabs: e }) => {
        let { ref: r, width: n } = Ve({
            refreshMode: 'debounce',
            handleHeight: !1,
            handleWidth: !0,
          }),
          { tab: t, setTab: o } = ie(),
          u = v(
            m => {
              o(parseInt(m.currentTarget.getAttribute('data-index') || '', 10));
            },
            [o]
          ),
          s = `${e[t].type}-global-checkbox`,
          l = 'Highlight results';
        return h(
          qr,
          { ref: r },
          h(
            tn,
            null,
            h(
              en,
              null,
              e.map((m, p) =>
                h(
                  Zr,
                  { key: p, 'data-index': p, active: t === p, onClick: u },
                  m.label
                )
              )
            )
          ),
          e[t].items.length > 0
            ? h(
                Jr,
                { elementWidth: n || 0 },
                h(Qr, { htmlFor: s }, l),
                h(le, { toggleId: s, elementsToHighlight: rn(e[t].items) })
              )
            : null,
          e[t].panel
        );
      },
      Xe = c(U)({ height: 12, width: 12, marginRight: 4 }),
      an = c(Xe)(({ theme: e }) => ({
        animation: `${e.animation.rotate360} 1s linear infinite;`,
      })),
      on = c.span(({ theme: e }) => ({ color: e.color.positiveText })),
      ln = c.span(({ theme: e }) => ({ color: e.color.negativeText })),
      cn = c.span(({ theme: e }) => ({ color: e.color.warningText })),
      K = c.span({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }),
      sn = () => {
        let { manual: e } = he('a11y', { manual: !1 }),
          [r, n] = k(e ? 'manual' : 'initial'),
          [t, o] = a.useState(void 0),
          { setResults: u, results: s } = ie(),
          { storyId: l } = fe();
        a.useEffect(() => {
          n(e ? 'manual' : 'initial');
        }, [e]);
        let m = f => {
            (n('ran'),
              u(f),
              setTimeout(() => {
                r === 'ran' && n('ready');
              }, 900));
          },
          p = v(() => {
            n('running');
          }, []),
          d = v(f => {
            (n('error'), o(f));
          }, []),
          g = Q({ [M.RUNNING]: p, [M.RESULT]: m, [M.ERROR]: d }),
          i = v(() => {
            (n('running'), g(M.MANUAL, l));
          }, [l]),
          b = W(() => [{ title: 'Run test', onClick: i }], [i]),
          y = W(
            () => [
              {
                title:
                  r === 'ready'
                    ? 'Rerun tests'
                    : a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(Xe, { icon: 'check' }),
                        ' Tests completed'
                      ),
                onClick: i,
              },
            ],
            [r, i]
          ),
          _ = W(() => {
            let { passes: f, incomplete: R, violations: T } = s;
            return [
              {
                label: a.createElement(ln, null, T.length, ' Violations'),
                panel: a.createElement(te, {
                  items: T,
                  type: 0,
                  empty: 'No accessibility violations found.',
                }),
                items: T,
                type: 0,
              },
              {
                label: a.createElement(on, null, f.length, ' Passes'),
                panel: a.createElement(te, {
                  items: f,
                  type: 1,
                  empty: 'No accessibility checks passed.',
                }),
                items: f,
                type: 1,
              },
              {
                label: a.createElement(cn, null, R.length, ' Incomplete'),
                panel: a.createElement(te, {
                  items: R,
                  type: 2,
                  empty: 'No accessibility checks incomplete.',
                }),
                items: R,
                type: 2,
              },
            ];
          }, [s]);
        return a.createElement(
          a.Fragment,
          null,
          r === 'initial' && a.createElement(K, null, 'Initializing...'),
          r === 'manual' &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(K, null, 'Manually run the accessibility scan.'),
              a.createElement(J, { key: 'actionbar', actionItems: b })
            ),
          r === 'running' &&
            a.createElement(
              K,
              null,
              a.createElement(an, { icon: 'sync' }),
              ' Please wait while the accessibility scan is running ...'
            ),
          (r === 'ready' || r === 'ran') &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                ye,
                { vertical: !0, horizontal: !0 },
                a.createElement(nn, { key: 'tabs', tabs: _ })
              ),
              a.createElement(J, { key: 'actionbar', actionItems: y })
            ),
          r === 'error' &&
            a.createElement(
              K,
              null,
              'The accessibility scan encountered an error.',
              a.createElement('br', null),
              typeof t == 'string' ? t : JSON.stringify(t)
            )
        );
      },
      un = () => {
        let [e] = q(x),
          r = e?.violations?.length || 0,
          n = e?.incomplete?.length || 0,
          t = r + n;
        return a.createElement(
          'div',
          null,
          a.createElement(
            _e,
            { col: 1 },
            a.createElement(
              'span',
              { style: { display: 'inline-block', verticalAlign: 'middle' } },
              'Accessibility'
            ),
            t === 0 ? '' : a.createElement(Z, { status: 'neutral' }, t)
          )
        );
      };
    F.register(x, e => {
      (F.add(ke, {
        title: '',
        type: X.TOOL,
        match: ({ viewMode: r }) => r === 'story',
        render: () => a.createElement(ht, null),
      }),
        F.add(ke, {
          title: un,
          type: X.PANEL,
          render: ({ active: r = !0 }) =>
            a.createElement(wr, { active: r }, a.createElement(sn, null)),
          paramKey: et,
        }));
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}

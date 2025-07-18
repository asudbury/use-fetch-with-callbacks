try {
  (() => {
    var l = __REACT__,
      {
        Children: le,
        Component: ne,
        Fragment: ie,
        Profiler: se,
        PureComponent: ce,
        StrictMode: ue,
        Suspense: me,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pe,
        cloneElement: de,
        createContext: be,
        createElement: Se,
        createFactory: Te,
        createRef: ye,
        forwardRef: _e,
        isValidElement: fe,
        lazy: Ce,
        memo: ve,
        useCallback: v,
        useContext: Ie,
        useDebugValue: Oe,
        useEffect: E,
        useImperativeHandle: xe,
        useLayoutEffect: Ee,
        useMemo: ge,
        useReducer: he,
        useRef: L,
        useState: R,
        version: ke,
      } = __REACT__;
    var Pe = __STORYBOOK_API__,
      {
        ActiveTabs: Me,
        Consumer: Ne,
        ManagerContext: we,
        Provider: He,
        addons: g,
        combineParameters: Ve,
        controlOrMetaKey: De,
        controlOrMetaSymbol: Fe,
        eventMatchesShortcut: Ge,
        eventToShortcut: We,
        isMacLike: Ke,
        isShortcutTaken: Ye,
        keyToSymbol: $e,
        merge: ze,
        mockChannel: Ue,
        optionOrAltSymbol: je,
        shortcutMatchesShortcut: qe,
        shortcutToHumanString: Ze,
        types: B,
        useAddonState: Je,
        useArgTypes: Qe,
        useArgs: Xe,
        useChannel: et,
        useGlobalTypes: P,
        useGlobals: h,
        useParameter: tt,
        useSharedState: ot,
        useStoryPrepared: rt,
        useStorybookApi: M,
        useStorybookState: at,
      } = __STORYBOOK_API__;
    var ct = __STORYBOOK_COMPONENTS__,
      {
        A: ut,
        ActionBar: mt,
        AddonPanel: pt,
        Badge: dt,
        Bar: bt,
        Blockquote: St,
        Button: Tt,
        ClipboardCode: yt,
        Code: _t,
        DL: ft,
        Div: Ct,
        DocumentWrapper: vt,
        ErrorFormatter: It,
        FlexBar: Ot,
        Form: xt,
        H1: Et,
        H2: gt,
        H3: ht,
        H4: kt,
        H5: At,
        H6: Lt,
        HR: Rt,
        IconButton: N,
        IconButtonSkeleton: Bt,
        Icons: k,
        Img: Pt,
        LI: Mt,
        Link: Nt,
        ListItem: wt,
        Loader: Ht,
        OL: Vt,
        P: Dt,
        Placeholder: Ft,
        Pre: Gt,
        ResetWrapper: Wt,
        ScrollArea: Kt,
        Separator: w,
        Spaced: Yt,
        Span: $t,
        StorybookIcon: zt,
        StorybookLogo: Ut,
        Symbols: jt,
        SyntaxHighlighter: qt,
        TT: Zt,
        TabBar: Jt,
        TabButton: Qt,
        TabWrapper: Xt,
        Table: eo,
        Tabs: to,
        TabsState: oo,
        TooltipLinkList: H,
        TooltipMessage: ro,
        TooltipNote: ao,
        UL: lo,
        WithTooltip: V,
        WithTooltipPure: no,
        Zoom: io,
        codeCommon: so,
        components: co,
        createCopyToClipboardFunction: uo,
        getStoryHref: mo,
        icons: po,
        interleaveSeparators: bo,
        nameSpaceClassNames: So,
        resetComponents: To,
        withReset: yo,
      } = __STORYBOOK_COMPONENTS__;
    var G = ({ active: o, title: t, icon: e, description: r, onClick: a }) =>
        l.createElement(
          N,
          { active: o, title: r, onClick: a },
          e && l.createElement(k, { icon: e }),
          t ? `\xA0${t}` : null
        ),
      W = ['reset'],
      K = o => o.filter(t => !W.includes(t.type)).map(t => t.value),
      b = 'addon-toolbars',
      Y = async (o, t, e) => {
        (e &&
          e.next &&
          (await o.setAddonShortcut(b, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await o.setAddonShortcut(b, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await o.setAddonShortcut(b, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            })));
      },
      $ = o => t => {
        let {
            id: e,
            toolbar: { items: r, shortcuts: a },
          } = t,
          d = M(),
          [S, i] = h(),
          n = L([]),
          s = S[e],
          I = v(() => {
            i({ [e]: '' });
          }, [i]),
          O = v(() => {
            let p = n.current,
              c = p.indexOf(s),
              m = c === p.length - 1 ? 0 : c + 1,
              T = n.current[m];
            i({ [e]: T });
          }, [n, s, i]),
          u = v(() => {
            let p = n.current,
              c = p.indexOf(s),
              m = c > -1 ? c : 0,
              T = m === 0 ? p.length - 1 : m - 1,
              y = n.current[T];
            i({ [e]: y });
          }, [n, s, i]);
        return (
          E(() => {
            a &&
              Y(d, e, {
                next: { ...a.next, action: O },
                previous: { ...a.previous, action: u },
                reset: { ...a.reset, action: I },
              });
          }, [d, e, a, O, u, I]),
          E(() => {
            n.current = K(r);
          }, []),
          l.createElement(o, { cycleValues: n.current, ...t })
        );
      },
      D = ({ currentValue: o, items: t }) =>
        o != null && t.find(e => e.value === o && e.type !== 'reset'),
      z = ({ currentValue: o, items: t }) => {
        let e = D({ currentValue: o, items: t });
        if (e) return e.icon;
      },
      U = ({ currentValue: o, items: t }) => {
        let e = D({ currentValue: o, items: t });
        if (e) return e.title;
      },
      j = ({
        left: o,
        right: t,
        title: e,
        value: r,
        icon: a,
        hideIcon: d,
        onClick: S,
        currentValue: i,
      }) => {
        let n = a && l.createElement(k, { style: { opacity: 1 }, icon: a }),
          s = {
            id: r ?? '_reset',
            active: i === r,
            right: t,
            title: e,
            left: o,
            onClick: S,
          };
        return (a && !d && (s.left = n), s);
      },
      q = $(
        ({
          id: o,
          name: t,
          description: e,
          toolbar: {
            icon: r,
            items: a,
            title: d,
            preventDynamicIcon: S,
            dynamicTitle: i,
          },
        }) => {
          let [n, s] = h(),
            [I, O] = R(!1),
            u = n[o],
            p = !!u,
            c = r,
            m = d;
          (S || (c = z({ currentValue: u, items: a }) || c),
            i && (m = U({ currentValue: u, items: a }) || m),
            !m && !c && console.warn(`Toolbar '${t}' has no title or icon`));
          let T = v(
            y => {
              s({ [o]: y });
            },
            [u, s]
          );
          return l.createElement(
            V,
            {
              placement: 'top',
              tooltip: ({ onHide: y }) => {
                let F = a
                  .filter(({ type: x }) => {
                    let A = !0;
                    return (x === 'reset' && !u && (A = !1), A);
                  })
                  .map(x =>
                    j({
                      ...x,
                      currentValue: u,
                      onClick: () => {
                        (T(x.value), y());
                      },
                    })
                  );
                return l.createElement(H, { links: F });
              },
              closeOnOutsideClick: !0,
              onVisibleChange: O,
            },
            l.createElement(G, {
              active: I || p,
              description: e || '',
              icon: c,
              title: m || '',
            })
          );
        }
      ),
      Z = { type: 'item', value: '' },
      J = (o, t) => ({
        ...t,
        name: t.name || o,
        description: t.description || o,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map(e => {
            let r = typeof e == 'string' ? { value: e, title: e } : e;
            return (
              r.type === 'reset' &&
                t.toolbar.icon &&
                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
              { ...Z, ...r }
            );
          }),
        },
      }),
      Q = () => {
        let o = P(),
          t = Object.keys(o).filter(e => !!o[e].toolbar);
        return t.length
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(w, null),
              t.map(e => {
                let r = J(e, o[e]);
                return l.createElement(q, { key: e, id: e, ...r });
              })
            )
          : null;
      };
    g.register(b, () =>
      g.add(b, {
        title: b,
        type: B.TOOL,
        match: () => !0,
        render: () => l.createElement(Q, null),
      })
    );
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}

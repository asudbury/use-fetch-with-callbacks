try {
  (() => {
    var _ = __STORYBOOK_API__,
      {
        ActiveTabs: h,
        Consumer: A,
        ManagerContext: E,
        Provider: b,
        addons: a,
        combineParameters: O,
        controlOrMetaKey: k,
        controlOrMetaSymbol: p,
        eventMatchesShortcut: v,
        eventToShortcut: g,
        isMacLike: I,
        isShortcutTaken: C,
        keyToSymbol: M,
        merge: P,
        mockChannel: R,
        optionOrAltSymbol: f,
        shortcutMatchesShortcut: x,
        shortcutToHumanString: D,
        types: G,
        useAddonState: K,
        useArgTypes: V,
        useArgs: $,
        useChannel: B,
        useGlobalTypes: N,
        useGlobals: Q,
        useParameter: U,
        useSharedState: Y,
        useStoryPrepared: q,
        useStorybookApi: H,
        useStorybookState: L,
      } = __STORYBOOK_API__;
    var e = 'storybook/links',
      n = {
        NAVIGATE: `${e}/navigate`,
        REQUEST: `${e}/request`,
        RECEIVE: `${e}/receive`,
      };
    a.register(e, t => {
      t.on(n.REQUEST, ({ kind: u, name: S }) => {
        let c = t.storyId(u, S);
        t.emit(n.RECEIVE, c);
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}

import './index-1b441bc2.js';
const { global: O } = __STORYBOOK_MODULE_GLOBAL__,
  { makeDecorator: E, addons: _ } = __STORYBOOK_MODULE_PREVIEW_API__,
  { STORY_CHANGED: l, SELECT_STORY: L } = __STORYBOOK_MODULE_CORE_EVENTS__;
var c = 'links',
  { document: i, HTMLElement: m } = O,
  v = e => _.getChannel().emit(L, e),
  o = e => {
    let { target: t } = e;
    if (!(t instanceof m)) return;
    let s = t,
      { sbKind: a, sbStory: r } = s.dataset;
    (a || r) && (e.preventDefault(), v({ kind: a, story: r }));
  },
  n = !1,
  d = () => {
    n || ((n = !0), i.addEventListener('click', o));
  },
  k = () => {
    n && ((n = !1), i.removeEventListener('click', o));
  },
  R = E({
    name: 'withLinks',
    parameterName: c,
    wrapper: (e, t) => (d(), _.getChannel().once(l, k), e(t)),
  }),
  T = [R];
export { T as decorators };

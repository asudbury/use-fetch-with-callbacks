var K = !0,
  S = 'Invariant failed';
function A(o, t) {
  if (!o) {
    if (K) throw new Error(S);
    var e = typeof t == 'function' ? t() : t,
      l = e ? ''.concat(S, ': ').concat(e) : S;
    throw new Error(l);
  }
}
const { useEffect: W } = __STORYBOOK_MODULE_PREVIEW_API__,
  { global: d } = __STORYBOOK_MODULE_GLOBAL__;
function H() {
  let o = d.document.documentElement,
    t = Math.max(o.scrollHeight, o.offsetHeight);
  return { width: Math.max(o.scrollWidth, o.offsetWidth), height: t };
}
function U() {
  let o = d.document.createElement('canvas');
  o.id = 'storybook-addon-measure';
  let t = o.getContext('2d');
  A(t != null);
  let { width: e, height: l } = H();
  return (
    P(o, t, { width: e, height: l }),
    (o.style.position = 'absolute'),
    (o.style.left = '0'),
    (o.style.top = '0'),
    (o.style.zIndex = '2147483647'),
    (o.style.pointerEvents = 'none'),
    d.document.body.appendChild(o),
    { canvas: o, context: t, width: e, height: l }
  );
}
function P(o, t, { width: e, height: l }) {
  ((o.style.width = `${e}px`), (o.style.height = `${l}px`));
  let i = d.window.devicePixelRatio;
  ((o.width = Math.floor(e * i)),
    (o.height = Math.floor(l * i)),
    t.scale(i, i));
}
var s = {};
function V() {
  s.canvas || (s = U());
}
function C() {
  s.context && s.context.clearRect(0, 0, s.width ?? 0, s.height ?? 0);
}
function Z(o) {
  (C(), o(s.context));
}
function G() {
  (A(s.canvas, 'Canvas should exist in the state.'),
    A(s.context, 'Context should exist in the state.'),
    P(s.canvas, s.context, { width: 0, height: 0 }));
  let { width: o, height: t } = H();
  (P(s.canvas, s.context, { width: o, height: t }),
    (s.width = o),
    (s.height = t));
}
function J() {
  var o;
  s.canvas &&
    (C(),
    (o = s.canvas.parentNode) == null || o.removeChild(s.canvas),
    (s = {}));
}
var w = {
    margin: '#f6b26b',
    border: '#ffe599',
    padding: '#93c47d',
    content: '#6fa8dc',
    text: '#232020',
  },
  p = 6;
function B(o, { x: t, y: e, w: l, h: i, r: n }) {
  ((t = t - l / 2),
    (e = e - i / 2),
    l < 2 * n && (n = l / 2),
    i < 2 * n && (n = i / 2),
    o.beginPath(),
    o.moveTo(t + n, e),
    o.arcTo(t + l, e, t + l, e + i, n),
    o.arcTo(t + l, e + i, t, e + i, n),
    o.arcTo(t, e + i, t, e, n),
    o.arcTo(t, e, t + l, e, n),
    o.closePath());
}
function Q(o, { padding: t, border: e, width: l, height: i, top: n, left: f }) {
  let r = l - e.left - e.right - t.left - t.right,
    a = i - t.top - t.bottom - e.top - e.bottom,
    h = f + e.left + t.left,
    u = n + e.top + t.top;
  return (
    o === 'top'
      ? (h += r / 2)
      : o === 'right'
        ? ((h += r), (u += a / 2))
        : o === 'bottom'
          ? ((h += r / 2), (u += a))
          : o === 'left'
            ? (u += a / 2)
            : o === 'center' && ((h += r / 2), (u += a / 2)),
    { x: h, y: u }
  );
}
function x(o, t, { margin: e, border: l, padding: i }, n, f) {
  let r = m => 0,
    a = 0,
    h = 0,
    u = f ? 1 : 0.5,
    c = f ? n * 2 : 0;
  return (
    o === 'padding'
      ? (r = m => i[m] * u + c)
      : o === 'border'
        ? (r = m => i[m] + l[m] * u + c)
        : o === 'margin' && (r = m => i[m] + l[m] + e[m] * u + c),
    t === 'top'
      ? (h = -r('top'))
      : t === 'right'
        ? (a = r('right'))
        : t === 'bottom'
          ? (h = r('bottom'))
          : t === 'left' && (a = -r('left')),
    { offsetX: a, offsetY: h }
  );
}
function tt(o, t) {
  return (
    Math.abs(o.x - t.x) < Math.abs(o.w + t.w) / 2 &&
    Math.abs(o.y - t.y) < Math.abs(o.h + t.h) / 2
  );
}
function ot(o, t, e) {
  return (
    o === 'top'
      ? (t.y = e.y - e.h - p)
      : o === 'right'
        ? (t.x = e.x + e.w / 2 + p + t.w / 2)
        : o === 'bottom'
          ? (t.y = e.y + e.h + p)
          : o === 'left' && (t.x = e.x - e.w / 2 - p - t.w / 2),
    { x: t.x, y: t.y }
  );
}
function X(o, t, { x: e, y: l, w: i, h: n }, f) {
  return (
    B(o, { x: e, y: l, w: i, h: n, r: 3 }),
    (o.fillStyle = `${w[t]}dd`),
    o.fill(),
    (o.strokeStyle = w[t]),
    o.stroke(),
    (o.fillStyle = w.text),
    o.fillText(f, e, l),
    B(o, { x: e, y: l, w: i, h: n, r: 3 }),
    (o.fillStyle = `${w[t]}dd`),
    o.fill(),
    (o.strokeStyle = w[t]),
    o.stroke(),
    (o.fillStyle = w.text),
    o.fillText(f, e, l),
    { x: e, y: l, w: i, h: n }
  );
}
function k(o, t) {
  ((o.font = '600 12px monospace'),
    (o.textBaseline = 'middle'),
    (o.textAlign = 'center'));
  let e = o.measureText(t),
    l = e.actualBoundingBoxAscent + e.actualBoundingBoxDescent,
    i = e.width + p * 2,
    n = l + p * 2;
  return { w: i, h: n };
}
function et(o, t, { type: e, position: l = 'center', text: i }, n, f = !1) {
  let { x: r, y: a } = Q(l, t),
    { offsetX: h, offsetY: u } = x(e, l, t, p + 1, f);
  ((r += h), (a += u));
  let { w: c, h: m } = k(o, i);
  if (n && tt({ x: r, y: a, w: c, h: m }, n)) {
    let E = ot(l, { x: r, y: a, w: c, h: m }, n);
    ((r = E.x), (a = E.y));
  }
  return X(o, e, { x: r, y: a, w: c, h: m }, i);
}
function it(o, { w: t, h: e }) {
  let l = t * 0.5 + p,
    i = e * 0.5 + p;
  return {
    offsetX: (o.x === 'left' ? -1 : 1) * l,
    offsetY: (o.y === 'top' ? -1 : 1) * i,
  };
}
function lt(o, t, { type: e, text: l }) {
  let { floatingAlignment: i, extremities: n } = t,
    f = n[i.x],
    r = n[i.y],
    { w: a, h } = k(o, l),
    { offsetX: u, offsetY: c } = it(i, { w: a, h });
  return ((f += u), (r += c), X(o, e, { x: f, y: r, w: a, h }, l));
}
function v(o, t, e, l) {
  let i = [];
  e.forEach((n, f) => {
    let r =
      l && n.position === 'center' ? lt(o, t, n) : et(o, t, n, i[f - 1], l);
    i[f] = r;
  });
}
function nt(o, t, e, l) {
  let i = e.reduce((n, f) => {
    var r;
    return (
      Object.prototype.hasOwnProperty.call(n, f.position) ||
        (n[f.position] = []),
      (r = n[f.position]) == null || r.push(f),
      n
    );
  }, {});
  (i.top && v(o, t, i.top, l),
    i.right && v(o, t, i.right, l),
    i.bottom && v(o, t, i.bottom, l),
    i.left && v(o, t, i.left, l),
    i.center && v(o, t, i.center, l));
}
var L = {
    margin: '#f6b26ba8',
    border: '#ffe599a8',
    padding: '#93c47d8c',
    content: '#6fa8dca8',
  },
  O = 30;
function g(o) {
  return parseInt(o.replace('px', ''), 10);
}
function b(o) {
  return Number.isInteger(o) ? o : o.toFixed(2);
}
function _(o) {
  return o.filter(t => t.text !== 0 && t.text !== '0');
}
function rt(o) {
  let t = {
      top: d.window.scrollY,
      bottom: d.window.scrollY + d.window.innerHeight,
      left: d.window.scrollX,
      right: d.window.scrollX + d.window.innerWidth,
    },
    e = {
      top: Math.abs(t.top - o.top),
      bottom: Math.abs(t.bottom - o.bottom),
      left: Math.abs(t.left - o.left),
      right: Math.abs(t.right - o.right),
    };
  return {
    x: e.left > e.right ? 'left' : 'right',
    y: e.top > e.bottom ? 'top' : 'bottom',
  };
}
function ft(o) {
  let t = d.getComputedStyle(o),
    {
      top: e,
      left: l,
      right: i,
      bottom: n,
      width: f,
      height: r,
    } = o.getBoundingClientRect(),
    {
      marginTop: a,
      marginBottom: h,
      marginLeft: u,
      marginRight: c,
      paddingTop: m,
      paddingBottom: E,
      paddingLeft: F,
      paddingRight: I,
      borderBottomWidth: D,
      borderTopWidth: $,
      borderLeftWidth: N,
      borderRightWidth: q,
    } = t;
  ((e = e + d.window.scrollY),
    (l = l + d.window.scrollX),
    (n = n + d.window.scrollY),
    (i = i + d.window.scrollX));
  let y = { top: g(a), bottom: g(h), left: g(u), right: g(c) },
    z = { top: g(m), bottom: g(E), left: g(F), right: g(I) },
    j = { top: g($), bottom: g(D), left: g(N), right: g(q) },
    T = {
      top: e - y.top,
      bottom: n + y.bottom,
      left: l - y.left,
      right: i + y.right,
    };
  return {
    margin: y,
    padding: z,
    border: j,
    top: e,
    left: l,
    bottom: n,
    right: i,
    width: f,
    height: r,
    extremities: T,
    floatingAlignment: rt(T),
  };
}
function at(
  o,
  { margin: t, width: e, height: l, top: i, left: n, bottom: f, right: r }
) {
  let a = l + t.bottom + t.top;
  ((o.fillStyle = L.margin),
    o.fillRect(n, i - t.top, e, t.top),
    o.fillRect(r, i - t.top, t.right, a),
    o.fillRect(n, f, e, t.bottom),
    o.fillRect(n - t.left, i - t.top, t.left, a));
  let h = [
    { type: 'margin', text: b(t.top), position: 'top' },
    { type: 'margin', text: b(t.right), position: 'right' },
    { type: 'margin', text: b(t.bottom), position: 'bottom' },
    { type: 'margin', text: b(t.left), position: 'left' },
  ];
  return _(h);
}
function ht(
  o,
  {
    padding: t,
    border: e,
    width: l,
    height: i,
    top: n,
    left: f,
    bottom: r,
    right: a,
  }
) {
  let h = l - e.left - e.right,
    u = i - t.top - t.bottom - e.top - e.bottom;
  ((o.fillStyle = L.padding),
    o.fillRect(f + e.left, n + e.top, h, t.top),
    o.fillRect(a - t.right - e.right, n + t.top + e.top, t.right, u),
    o.fillRect(f + e.left, r - t.bottom - e.bottom, h, t.bottom),
    o.fillRect(f + e.left, n + t.top + e.top, t.left, u));
  let c = [
    { type: 'padding', text: t.top, position: 'top' },
    { type: 'padding', text: t.right, position: 'right' },
    { type: 'padding', text: t.bottom, position: 'bottom' },
    { type: 'padding', text: t.left, position: 'left' },
  ];
  return _(c);
}
function st(
  o,
  { border: t, width: e, height: l, top: i, left: n, bottom: f, right: r }
) {
  let a = l - t.top - t.bottom;
  ((o.fillStyle = L.border),
    o.fillRect(n, i, e, t.top),
    o.fillRect(n, f - t.bottom, e, t.bottom),
    o.fillRect(n, i + t.top, t.left, a),
    o.fillRect(r - t.right, i + t.top, t.right, a));
  let h = [
    { type: 'border', text: t.top, position: 'top' },
    { type: 'border', text: t.right, position: 'right' },
    { type: 'border', text: t.bottom, position: 'bottom' },
    { type: 'border', text: t.left, position: 'left' },
  ];
  return _(h);
}
function ut(
  o,
  { padding: t, border: e, width: l, height: i, top: n, left: f }
) {
  let r = l - e.left - e.right - t.left - t.right,
    a = i - t.top - t.bottom - e.top - e.bottom;
  return (
    (o.fillStyle = L.content),
    o.fillRect(f + e.left + t.left, n + e.top + t.top, r, a),
    [{ type: 'content', position: 'center', text: `${b(r)} x ${b(a)}` }]
  );
}
function dt(o) {
  return t => {
    if (o && t) {
      let e = ft(o),
        l = at(t, e),
        i = ht(t, e),
        n = st(t, e),
        f = ut(t, e),
        r = e.width <= O * 3 || e.height <= O;
      nt(t, e, [...f, ...i, ...n, ...l], r);
    }
  };
}
function mt(o) {
  Z(dt(o));
}
var ct = (o, t) => {
    let e = d.document.elementFromPoint(o, t),
      l = i => {
        if (i && i.shadowRoot) {
          let n = i.shadowRoot.elementFromPoint(o, t);
          return i.isEqualNode(n) ? i : n.shadowRoot ? l(n) : n;
        }
        return i;
      };
    return l(e) || e;
  },
  R,
  M = { x: 0, y: 0 };
function Y(o, t) {
  ((R = ct(o, t)), mt(R));
}
var gt = (o, t) => {
    let { measureEnabled: e } = t.globals;
    return (
      W(() => {
        let l = i => {
          window.requestAnimationFrame(() => {
            (i.stopPropagation(), (M.x = i.clientX), (M.y = i.clientY));
          });
        };
        return (
          document.addEventListener('pointermove', l),
          () => {
            document.removeEventListener('pointermove', l);
          }
        );
      }, []),
      W(() => {
        let l = n => {
            window.requestAnimationFrame(() => {
              (n.stopPropagation(), Y(n.clientX, n.clientY));
            });
          },
          i = () => {
            window.requestAnimationFrame(() => {
              G();
            });
          };
        return (
          t.viewMode === 'story' &&
            e &&
            (document.addEventListener('pointerover', l),
            V(),
            window.addEventListener('resize', i),
            Y(M.x, M.y)),
          () => {
            (window.removeEventListener('resize', i), J());
          }
        );
      }, [e, t.viewMode]),
      o()
    );
  },
  pt = 'measureEnabled',
  wt = [gt],
  bt = { [pt]: !1 };
export { wt as decorators, bt as globals };

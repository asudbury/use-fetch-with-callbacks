import { r as f } from './index-8b3efc3f.js';
var p = { exports: {} },
  i = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c = f,
  x = Symbol.for('react.element'),
  b = Symbol.for('react.fragment'),
  u = Object.prototype.hasOwnProperty,
  g = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  m = { key: !0, ref: !0, __self: !0, __source: !0 };
function l(r, e, n) {
  var o,
    a = {},
    d = null,
    s = null;
  (n !== void 0 && (d = '' + n),
    e.key !== void 0 && (d = '' + e.key),
    e.ref !== void 0 && (s = e.ref));
  for (o in e) u.call(e, o) && !m.hasOwnProperty(o) && (a[o] = e[o]);
  if (r && r.defaultProps)
    for (o in ((e = r.defaultProps), e)) a[o] === void 0 && (a[o] = e[o]);
  return { $$typeof: x, type: r, key: d, ref: s, props: a, _owner: g.current };
}
i.Fragment = b;
i.jsx = l;
i.jsxs = l;
p.exports = i;
var k = p.exports;
const t = {
    container: {
      padding: '24px',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    pageTitle: {
      fontSize: '28px',
      fontWeight: '600',
      marginBottom: '16px',
      color: '#1a1a1a',
      borderBottom: '2px solid #e9ecef',
      paddingBottom: '12px',
    },
    pageDescription: {
      fontSize: '16px',
      color: '#6c757d',
      marginBottom: '32px',
      lineHeight: '1.5',
    },
    card: {
      padding: '24px',
      marginBottom: '24px',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    cardHeader: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '16px',
      color: '#495057',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    formGroup: { marginBottom: '20px' },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#495057',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      fontSize: '14px',
      transition:
        'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
      backgroundColor: '#ffffff',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      fontSize: '14px',
      resize: 'vertical',
      fontFamily: 'inherit',
      transition:
        'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
    select: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px',
      border: '1px solid #ced4da',
      fontSize: '14px',
      backgroundColor: '#ffffff',
      transition:
        'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    },
    button: {
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.15s ease-in-out',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    buttonPrimary: { backgroundColor: '#007bff', color: '#ffffff' },
    buttonSecondary: { backgroundColor: '#6c757d', color: '#ffffff' },
    buttonDanger: { backgroundColor: '#dc3545', color: '#ffffff' },
    buttonSuccess: { backgroundColor: '#28a745', color: '#ffffff' },
    buttonDisabled: {
      backgroundColor: '#e9ecef',
      color: '#6c757d',
      cursor: 'not-allowed',
    },
    successBox: {
      padding: '16px',
      backgroundColor: '#d4edda',
      borderRadius: '6px',
      color: '#155724',
      border: '1px solid #c3e6cb',
      marginBottom: '16px',
    },
    errorBox: {
      padding: '16px',
      backgroundColor: '#f8d7da',
      borderRadius: '6px',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      marginBottom: '16px',
    },
    warningBox: {
      padding: '16px',
      backgroundColor: '#fff3cd',
      borderRadius: '6px',
      color: '#856404',
      border: '1px solid #ffeaa7',
      marginBottom: '16px',
    },
    infoBox: {
      padding: '16px',
      backgroundColor: '#d1ecf1',
      borderRadius: '6px',
      color: '#0c5460',
      border: '1px solid #bee5eb',
      marginBottom: '16px',
    },
    codeBlock: {
      backgroundColor: '#f8f9fa',
      padding: '16px',
      borderRadius: '6px',
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      fontSize: '13px',
      overflowX: 'auto',
      border: '1px solid #e9ecef',
      lineHeight: '1.4',
    },
    logsContainer: {
      backgroundColor: '#f8f9fa',
      padding: '16px',
      borderRadius: '6px',
      maxHeight: '300px',
      overflowY: 'auto',
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      fontSize: '13px',
      border: '1px solid #e9ecef',
      lineHeight: '1.4',
    },
    listItem: {
      padding: '12px',
      margin: '8px 0',
      borderRadius: '6px',
      fontSize: '14px',
      border: '1px solid #e9ecef',
    },
    listItemSuccess: { backgroundColor: '#d4edda', borderColor: '#c3e6cb' },
    listItemError: { backgroundColor: '#f8d7da', borderColor: '#f5c6cb' },
    flexBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexCenter: { display: 'flex', alignItems: 'center', gap: '8px' },
    textMuted: { color: '#6c757d' },
    textBold: { fontWeight: '600' },
    mb16: { marginBottom: '16px' },
    mb24: { marginBottom: '24px' },
    mt16: { marginTop: '16px' },
  },
  y = (...r) => Object.assign({}, ...r),
  B = (r, e = !1) => {
    const n = t.button;
    let o;
    if (e) o = t.buttonDisabled;
    else
      switch (r) {
        case 'primary':
          o = t.buttonPrimary;
          break;
        case 'secondary':
          o = t.buttonSecondary;
          break;
        case 'danger':
          o = t.buttonDanger;
          break;
        case 'success':
          o = t.buttonSuccess;
          break;
        default:
          o = t.buttonPrimary;
      }
    return y(n, o);
  };
export { y as c, B as g, k as j, t as s };

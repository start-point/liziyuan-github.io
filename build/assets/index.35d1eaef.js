var U = Object.defineProperty,
  $ = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty,
  j = Object.prototype.propertyIsEnumerable;
var C = (e, t, n) =>
    t in e
      ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  S = (e, t) => {
    for (var n in t || (t = {})) V.call(t, n) && C(e, n, t[n]);
    if (x) for (var n of x(t)) j.call(t, n) && C(e, n, t[n]);
    return e;
  },
  _ = (e, t) => $(e, H(t));
var L = (e, t, n) => (C(e, typeof t != 'symbol' ? t + '' : t, n), n);
import {
  o as z,
  a as Q,
  h as G,
  R as o,
  r as l,
  b as W,
  c as g,
  T as q,
  C as T,
  d as F,
  N as K,
  B as Y,
  S as J,
  e as O,
  f as M,
  P as X,
  L as Z,
} from './vendor.6a0bda23.js';
const ee = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const c of s.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && a(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
};
ee();
const p = 'liziyuan-react-web',
  te = '\u674E\u5B50\u56ED',
  ne = '\u55D2\u55D2\u55D2',
  oe = '\u662F\u4E0D\u662F\u8981\u96E2\u958B\u6211\u4E86',
  re = '\u4F60\u60F3\u7528\u63A7\u5236\u53F0\u770B\u4EC0\u4E48\u5462\u{1F60A}',
  ae = ['#a18cd1', '#fbc2eb'],
  Be = [
    { text: 'Hello,', tagName: 'h1', config: {}, domAttr: {}, reactAttr: {} },
    {
      text: '\u6709\u5E78\uFF0C\u80FD\u5728\u8FD9\u91CC\u770B\u5230\u4F60...',
      tagName: 'h2',
      config: {},
      domAttr: {},
      reactAttr: {},
    },
  ],
  se = {
    FIRST_INFO:
      '\u6B22\u8FCE\u6765\u5230\u674E\u5B50\u56ED\u7684\u4E2A\u4EBA\u7F51\u7AD9\u{1F389}',
    FIRST_HOME: '\u6B22\u8FCE\u6765\u5230\u9996\u9875\u{1F389}',
    FIRST_USER: '\u6B22\u8FCE\u8FDB\u5165\u4E2A\u4EBA\u9875\u9762\u{1F60A}',
    FIRST_URL:
      '\u6B22\u8FCE\u8FDB\u5165\u5E38\u7528\u94FE\u63A5\u9875\u9762,\u5E0C\u671B\u80FD\u5E2E\u52A9\u5230\u4F60\u{1F618}',
  },
  N = {
    TITLE_HOME: '\u9996\u9875',
    TITLE_USER: '\u4E2A\u4EBA',
    TITLE_LINK_URL: '\u5E38\u7528\u94FE\u63A5',
  };
class ce {
  constructor() {
    L(this, 't', null);
  }
  addVisiblityChange() {
    const t = this,
      n = function () {
        clearTimeout(t.t),
          document.hidden
            ? (document.title = oe)
            : ((document.title = ne),
              (t.t = setTimeout(() => {
                document.title = te;
              }, 3e3)));
      };
    document.addEventListener('visibilitychange', n);
  }
}
const ue = new ce();
var le = Object.defineProperty,
  ie = Object.getOwnPropertyDescriptor,
  A = (e, t, n, a) => {
    for (var r = a > 1 ? void 0 : a ? ie(t, n) : t, s = e.length - 1, c; s >= 0; s--)
      (c = e[s]) && (r = (a ? c(t, n, r) : c(r)) || r);
    return a && r && le(t, n, r), r;
  };
class R {
  constructor() {
    L(this, 'mode', 'light');
  }
  changeMode(t) {
    if (t) {
      this.mode = t;
      return;
    }
    this.mode = this.mode === 'light' ? 'dark' : 'light';
  }
}
A([z], R.prototype, 'mode', 2);
A([Q], R.prototype, 'changeMode', 1);
const d = { colorStore: new R() };
function de() {
  const e = document.getElementById('liziyuan-react-web-container'),
    t = document.body;
  G(e, 'light')
    ? ((e.className = 'dark'),
      (t.className = 'dark'),
      d.colorStore.changeMode('dark'),
      localStorage.setItem('mode', 'dark'))
    : ((e.className = 'light'),
      (t.className = 'light'),
      d.colorStore.changeMode('light'),
      localStorage.setItem('mode', 'light'));
}
function me() {
  const e = localStorage.getItem('mode'),
    t = document.body;
  let n;
  return (
    e ? (n = e) : ((n = 'light'), localStorage.setItem('mode', n)),
    d.colorStore.changeMode(n),
    (t.className = n),
    n
  );
}
var Ee = '/assets/loading.a87af1aa.svg';
const fe = () =>
    o.createElement(
      'div',
      { style: { height: '400px' } },
      o.createElement('img', {
        className: 'flex',
        style: { margin: '200px auto' },
        width: '80',
        height: '80',
        src: Ee,
        alt: '',
      }),
    ),
  he = 'modulepreload',
  b = {},
  ge = '/',
  I = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((a) => {
            if (((a = `${ge}${a}`), a in b)) return;
            b[a] = !0;
            const r = a.endsWith('.css'),
              s = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${a}"]${s}`)) return;
            const c = document.createElement('link');
            if (
              ((c.rel = r ? 'stylesheet' : he),
              r || ((c.as = 'script'), (c.crossOrigin = '')),
              (c.href = a),
              document.head.appendChild(c),
              r)
            )
              return new Promise((m, y) => {
                c.addEventListener('load', m), c.addEventListener('error', y);
              });
          }),
        ).then(() => t());
  },
  pe = l.exports.lazy(() =>
    I(() => import('./index.76c859c7.js'), [
      'assets/index.76c859c7.js',
      'assets/vendor.6a0bda23.js',
    ]),
  ),
  Ne = l.exports.lazy(() =>
    I(() => import('./index.b2110d49.js'), [
      'assets/index.b2110d49.js',
      'assets/vendor.6a0bda23.js',
    ]),
  ),
  ve = l.exports.lazy(() =>
    I(() => import('./index.ea1b35c7.js'), [
      'assets/index.ea1b35c7.js',
      'assets/index.0df4e9e2.css',
      'assets/vendor.6a0bda23.js',
    ]),
  ),
  k = [
    { path: '/home', component: ve, hidden: !0, meta: { title: N.TITLE_HOME } },
    { path: '/user', component: pe, hidden: !0, meta: { title: N.TITLE_USER } },
    { path: '/linkUrl', component: Ne, hidden: !0, meta: { title: N.TITLE_LINK_URL } },
    { path: '/*', meta: { title: N.TITLE_HOME }, hidden: !1, redirect: '/home' },
  ];
function v(e, t, n) {
  const a = [];
  for (let r = 0; r < e.length; r += 1) {
    const s = e[r];
    a.push(_(S({}, s), { auth: typeof s.auth != 'undefined' ? s.auth : n })),
      s.children && t && a.push(...v(s.children, t, n));
  }
  return a;
}
function ye() {
  return v(k, !1, !1);
}
function Ce() {
  const e = k.filter((t) => t.path === '/');
  return e.length > 0 ? v(e, !0, !0) : [];
}
function Se() {
  const e = k.filter((t) => t.path === '/system');
  return e.length > 0 ? v(e, !0, !1) : [];
}
const w = ye();
Ce();
Se();
var _e = '/assets/logo.9d888d4d.gif';
var i;
(function (e) {
  (e.INFO = 'info'),
    (e.SUCCESS = 'success'),
    (e.ERROR = 'error'),
    (e.WARNING = 'warning'),
    (e.DEFAULT = 'default');
})(i || (i = {}));
const Le = W((e) => {
    const { mode: t } = d.colorStore,
      { type: n, text: a } = e,
      r = g({ [`${p}-comp-notice`]: !0, [`notice-${n}`]: !0, [`${t}`]: !0 });
    return o.createElement(
      'div',
      { className: r },
      o.createElement('span', { className: 'notice-text' }, a),
    );
  }),
  Te = (e, t) => {
    let n = 0;
    const [a, r] = l.exports.useState([]),
      s = (u) => a.some((E) => u.key === E.key),
      c = (u) => {
        n++,
          (u.key = y()),
          (u.id = n),
          (u.duration = u.duration ? u.duration : 3e3),
          s(u) ||
            (r((E) => E.concat([u])),
            u.duration > 0 &&
              setTimeout(() => {
                u.key && m(u.key);
              }, u.duration));
      },
      m = (u) => {
        r((E) => E.filter((h) => (h.key === u ? (h.onClose && h.onClose(), !1) : h)));
      },
      y = () =>
        `message-${new Date().getTime()}-${a.length}-${Math.floor(Math.random() * 1e4)}`,
      P = g({ [`${p}-comp-notice-queue`]: !0 });
    return (
      l.exports.useImperativeHandle(t, () => ({ addMessage: c })),
      o.createElement(
        'div',
        { className: P },
        o.createElement(
          q,
          null,
          a.map((u) =>
            o.createElement(
              T,
              {
                in: !0,
                timeout: { enter: 100, exit: 200 },
                key: u.id,
                classNames: 'side-left',
                appear: !1,
                unmountOnExit: !1,
              },
              o.createElement(Le, { type: u.type, key: u.id, text: u.text }),
            ),
          ),
        ),
      )
    );
  },
  Fe = o.forwardRef(Te);
function Re(e) {
  const t = o.createRef(),
    n = document.createElement('div');
  document.body.appendChild(n), F.render(o.createElement(Fe, _(S({}, e), { ref: t })), n);
  const a = () => {
      F.unmountComponentAtNode(n), n.parentNode.removeChild(n);
    },
    { addMessage: r } = t.current;
  return {
    addMessage(s) {
      return r(s);
    },
    destroy: a,
  };
}
var Ie = Re({});
const f = (e, t, n = 3e3, a) =>
    Ie.addMessage({ type: e, text: t, duration: n, onClose: a }),
  ke = {
    info(e, t = 3e3, n) {
      return f(i.INFO, e, t, n);
    },
    success(e, t = 3e3, n) {
      return f(i.SUCCESS, e, t, n);
    },
    error(e, t = 3e3, n) {
      return f(i.ERROR, e, t, n);
    },
    warning(e, t = 3e3, n) {
      return f(i.WARNING, e, t, n);
    },
    default(e, t = 3e3, n) {
      return f(i.DEFAULT, e, t, n);
    },
  };
const B = (e) => {
  const [t, n] = l.exports.useState(e.checked);
  l.exports.useEffect(() => {
    n(e.checked);
  }, [e.checked]);
  const a = () => {
      e.onChange && e.onChange(!t), n((s) => !s);
    },
    r = g({ [`${p}-comp-switch`]: !0, ['switch-checked']: !!t });
  return o.createElement(
    'div',
    { className: r, onClick: a },
    o.createElement(
      T,
      {
        in: t,
        timeout: 1,
        classNames: 'side-low-left-fade',
        appear: !0,
        unmountOnExit: !0,
      },
      o.createElement('span', { className: 'switch-on' }, e.checkedName),
    ),
    o.createElement(
      T,
      {
        in: !t,
        timeout: 1,
        classNames: 'side-low-left-fade',
        appear: !0,
        unmountOnExit: !0,
      },
      o.createElement('span', { className: 'switch-off' }, e.unCheckedName),
    ),
    o.createElement('span', { className: 'switch-range' }),
  );
};
B.defaultProps = { checked: !1, unCheckedName: 'off', checkedName: 'on', onChange: null };
const D = o.createContext(d),
  xe = () => l.exports.useContext(D),
  Oe = (e) => {
    const { routes: t } = e;
    console.log('\u{1F680} ~ file: HeaderLayout.tsx ~ line 24 ~ routes', t);
    let [n, a] = l.exports.useState(xe().colorStore.mode === 'dark');
    l.exports.useEffect(() => {
      ke.default(se.FIRST_INFO);
    }, []);
    const r = (c) => {
        a(() => (n = c)), de();
      },
      s = g({ [`${p}-nav`]: !0 });
    return o.createElement(
      'nav',
      { className: s },
      o.createElement(
        'div',
        { className: 'nav-content' },
        o.createElement(
          'div',
          { className: 'nav-logo' },
          o.createElement('img', { className: 'nav-img', src: _e, alt: '' }),
        ),
        o.createElement(
          'div',
          { className: 'nav-lists' },
          t == null
            ? void 0
            : t.map((c, m) => {
                if (!!c.hidden)
                  return o.createElement(
                    K,
                    { className: 'nav-list', to: c.path, key: m },
                    c.meta.title,
                  );
              }),
        ),
      ),
      o.createElement(
        'div',
        { className: 'nav-switch' },
        o.createElement(B, {
          checked: n,
          onChange: r,
          unCheckedName: o.createElement('i', { className: 'iconfont' }, '\uE6DB'),
          checkedName: o.createElement('i', { className: 'iconfont' }, '\uE62B'),
        }),
      ),
    );
  },
  Me = () =>
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        Y,
        null,
        o.createElement(Oe, { routes: w }),
        o.createElement(
          J,
          null,
          o.createElement(O, {
            exact: !0,
            path: '/',
            component: () => o.createElement(M, { to: '/home' }),
          }),
          w.map((e) =>
            o.createElement(O, {
              key: e.path,
              exact: e.exact,
              path: e.path,
              component: e.component
                ? e.component
                : () => o.createElement(M, { to: e.redirect }),
            }),
          ),
        ),
      ),
    ),
  Ae = () =>
    o.createElement(
      l.exports.Suspense,
      { fallback: o.createElement(fe, null) },
      o.createElement(Me, null),
    );
X.logger();
Z.logBeauty(re, { isMax: !0, colors: ae });
ue.addVisiblityChange();
F.render(
  o.createElement(
    D.Provider,
    { value: d },
    o.createElement(
      o.StrictMode,
      null,
      o.createElement(
        'div',
        { id: 'liziyuan-react-web-container', className: me() },
        o.createElement(Ae, null),
      ),
    ),
  ),
  document.getElementById('root'),
);
export { p as P, Be as T };

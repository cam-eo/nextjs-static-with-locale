var In, V, ef, Ft, nc, tf, rf, nf, ua, _s, Ss, of, _n = {}, sf = [], Ug = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vn = Array.isArray;
function tt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function da(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function D(e, t, r) {
  var n, o, i, s = {};
  for (i in t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? In.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return cn(e, s, n, o, null);
}
function cn(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ef, __i: -1, __u: 0 };
  return o == null && V.vnode != null && V.vnode(i), i;
}
function af() {
  return { current: null };
}
function pe(e) {
  return e.children;
}
function $e(e, t) {
  this.props = e, this.context = t;
}
function xr(e, t) {
  if (t == null) return e.__ ? xr(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? xr(e) : null;
}
function lf(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) {
      e.__e = e.__c.base = r.__e;
      break;
    }
    return lf(e);
  }
}
function xs(e) {
  (!e.__d && (e.__d = !0) && Ft.push(e) && !Oo.__r++ || nc !== V.debounceRendering) && ((nc = V.debounceRendering) || tf)(Oo);
}
function Oo() {
  for (var e, t, r, n, o, i, s, a = 1; Ft.length; ) Ft.length > a && Ft.sort(rf), e = Ft.shift(), a = Ft.length, e.__d && (r = void 0, o = (n = (t = e).__v).__e, i = [], s = [], t.__P && ((r = tt({}, n)).__v = n.__v + 1, V.vnode && V.vnode(r), fa(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, i, o ?? xr(n), !!(32 & n.__u), s), r.__v = n.__v, r.__.__k[r.__i] = r, df(i, r, s), r.__e != o && lf(r)));
  Oo.__r = 0;
}
function cf(e, t, r, n, o, i, s, a, l, c, d) {
  var u, f, h, p, y, b, g = n && n.__k || sf, S = t.length;
  for (l = qg(r, t, g, l, S), u = 0; u < S; u++) (h = r.__k[u]) != null && (f = h.__i === -1 ? _n : g[h.__i] || _n, h.__i = u, b = fa(e, h, f, o, i, s, a, l, c, d), p = h.__e, h.ref && f.ref != h.ref && (f.ref && ha(f.ref, null, h), d.push(h.ref, h.__c || p, h)), y == null && p != null && (y = p), 4 & h.__u || f.__k === h.__k ? l = uf(h, l, e) : typeof h.type == "function" && b !== void 0 ? l = b : p && (l = p.nextSibling), h.__u &= -7);
  return r.__e = y, l;
}
function qg(e, t, r, n, o) {
  var i, s, a, l, c, d = r.length, u = d, f = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (l = i + f, (s = e.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? cn(null, s, null, null, null) : Vn(s) ? cn(pe, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? cn(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, a = null, (c = s.__i = Gg(s, r, l, u)) !== -1 && (u--, (a = r[c]) && (a.__u |= 2)), a == null || a.__v === null ? (c == -1 && (o > d ? f-- : o < d && f++), typeof s.type != "function" && (s.__u |= 4)) : c != l && (c == l - 1 ? f-- : c == l + 1 ? f++ : (c > l ? f-- : f++, s.__u |= 4))) : e.__k[i] = null;
  if (u) for (i = 0; i < d; i++) (a = r[i]) != null && (2 & a.__u) == 0 && (a.__e == n && (n = xr(a)), hf(a, a));
  return n;
}
function uf(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, t = uf(n[o], t, r));
    return t;
  }
  e.__e != t && (t && e.type && !r.contains(t) && (t = xr(e)), r.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function pt(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Vn(e) ? e.some(function(r) {
    pt(r, t);
  }) : t.push(e)), t;
}
function Gg(e, t, r, n) {
  var o, i, s = e.key, a = e.type, l = t[r];
  if (l === null && e.key == null || l && s == l.key && a === l.type && (2 & l.__u) == 0) return r;
  if (n > (l != null && (2 & l.__u) == 0 ? 1 : 0)) for (o = r - 1, i = r + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && (2 & l.__u) == 0 && s == l.key && a === l.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((l = t[i]) && (2 & l.__u) == 0 && s == l.key && a === l.type) return i;
      i++;
    }
  }
  return -1;
}
function oc(e, t, r) {
  t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || Ug.test(t) ? r : r + "px";
}
function io(e, t, r, n, o) {
  var i;
  e: if (t == "style") if (typeof r == "string") e.style.cssText = r;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (t in n) r && t in r || oc(e.style, t, "");
    if (r) for (t in r) n && r[t] === n[t] || oc(e.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(nf, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.t = n.t : (r.t = ua, e.addEventListener(t, i ? Ss : _s, i)) : e.removeEventListener(t, i ? Ss : _s, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function ic(e) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.u == null) t.u = ua++;
      else if (t.u < r.t) return;
      return r(V.event ? V.event(t) : t);
    }
  };
}
function fa(e, t, r, n, o, i, s, a, l, c) {
  var d, u, f, h, p, y, b, g, S, x, P, w, T, $, R, I, F, K = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (l = !!(32 & r.__u), i = [a = t.__e = r.__e]), (d = V.__b) && d(t);
  e: if (typeof K == "function") try {
    if (g = t.props, S = "prototype" in K && K.prototype.render, x = (d = K.contextType) && n[d.__c], P = d ? x ? x.props.value : d.__ : n, r.__c ? b = (u = t.__c = r.__c).__ = u.__E : (S ? t.__c = u = new K(g, P) : (t.__c = u = new $e(g, P), u.constructor = K, u.render = Yg), x && x.sub(u), u.props = g, u.state || (u.state = {}), u.context = P, u.__n = n, f = u.__d = !0, u.__h = [], u._sb = []), S && u.__s == null && (u.__s = u.state), S && K.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = tt({}, u.__s)), tt(u.__s, K.getDerivedStateFromProps(g, u.__s))), h = u.props, p = u.state, u.__v = t, f) S && K.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), S && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (S && K.getDerivedStateFromProps == null && g !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(g, P), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(g, u.__s, P) === !1 || t.__v == r.__v)) {
        for (t.__v != r.__v && (u.props = g, u.state = u.__s, u.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(Ye) {
          Ye && (Ye.__ = t);
        }), w = 0; w < u._sb.length; w++) u.__h.push(u._sb[w]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, P), S && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(h, p, y);
      });
    }
    if (u.context = P, u.props = g, u.__P = e, u.__e = !1, T = V.__r, $ = 0, S) {
      for (u.state = u.__s, u.__d = !1, T && T(t), d = u.render(u.props, u.state, u.context), R = 0; R < u._sb.length; R++) u.__h.push(u._sb[R]);
      u._sb = [];
    } else do
      u.__d = !1, T && T(t), d = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++$ < 25);
    u.state = u.__s, u.getChildContext != null && (n = tt(tt({}, n), u.getChildContext())), S && !f && u.getSnapshotBeforeUpdate != null && (y = u.getSnapshotBeforeUpdate(h, p)), I = d, d != null && d.type === pe && d.key == null && (I = ff(d.props.children)), a = cf(e, Vn(I) ? I : [I], t, r, n, o, i, s, a, l, c), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), b && (u.__E = u.__ = null);
  } catch (Ye) {
    if (t.__v = null, l || i != null) if (Ye.then) {
      for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; ) a = a.nextSibling;
      i[i.indexOf(a)] = null, t.__e = a;
    } else for (F = i.length; F--; ) da(i[F]);
    else t.__e = r.__e, t.__k = r.__k;
    V.__e(Ye, t, r);
  }
  else i == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : a = t.__e = Kg(r.__e, t, r, n, o, i, s, l, c);
  return (d = V.diffed) && d(t), 128 & t.__u ? void 0 : a;
}
function df(e, t, r) {
  for (var n = 0; n < r.length; n++) ha(r[n], r[++n], r[++n]);
  V.__c && V.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      V.__e(i, o.__v);
    }
  });
}
function ff(e) {
  return typeof e != "object" || e == null ? e : Vn(e) ? e.map(ff) : tt({}, e);
}
function Kg(e, t, r, n, o, i, s, a, l) {
  var c, d, u, f, h, p, y, b = r.props, g = t.props, S = t.type;
  if (S == "svg" ? o = "http://www.w3.org/2000/svg" : S == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((h = i[c]) && "setAttribute" in h == !!S && (S ? h.localName == S : h.nodeType == 3)) {
      e = h, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (S == null) return document.createTextNode(g);
    e = document.createElementNS(o, S, g.is && g), a && (V.__m && V.__m(t, i), a = !1), i = null;
  }
  if (S === null) b === g || a && e.data === g || (e.data = g);
  else {
    if (i = i && In.call(e.childNodes), b = r.props || _n, !a && i != null) for (b = {}, c = 0; c < e.attributes.length; c++) b[(h = e.attributes[c]).name] = h.value;
    for (c in b) if (h = b[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") u = h;
      else if (!(c in g)) {
        if (c == "value" && "defaultValue" in g || c == "checked" && "defaultChecked" in g) continue;
        io(e, c, null, h, o);
      }
    }
    for (c in g) h = g[c], c == "children" ? f = h : c == "dangerouslySetInnerHTML" ? d = h : c == "value" ? p = h : c == "checked" ? y = h : a && typeof h != "function" || b[c] === h || io(e, c, h, b[c], o);
    if (d) a || u && (d.__html === u.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), cf(t.type === "template" ? e.content : e, Vn(f) ? f : [f], t, r, n, S == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : r.__k && xr(r, 0), a, l), i != null) for (c = i.length; c--; ) da(i[c]);
    a || (c = "value", S == "progress" && p == null ? e.removeAttribute("value") : p !== void 0 && (p !== e[c] || S == "progress" && !p || S == "option" && p !== b[c]) && io(e, c, p, b[c], o), c = "checked", y !== void 0 && y !== e[c] && io(e, c, y, b[c], o));
  }
  return e;
}
function ha(e, t, r) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    V.__e(o, r);
  }
}
function hf(e, t, r) {
  var n, o;
  if (V.unmount && V.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || ha(n, null, t)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      V.__e(i, t);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && hf(n[o], t, r || typeof e.type != "function");
  r || da(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Yg(e, t, r) {
  return this.constructor(e, r);
}
function Sn(e, t, r) {
  var n, o, i, s;
  t == document && (t = document.documentElement), V.__ && V.__(e, t), o = (n = typeof r == "function") ? null : r && r.__k || t.__k, i = [], s = [], fa(t, e = (!n && r || t).__k = D(pe, null, [e]), o || _n, _n, t.namespaceURI, !n && r ? [r] : o ? null : t.firstChild ? In.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n, s), df(i, e, s);
}
function pf(e, t) {
  Sn(e, t, pf);
}
function Xg(e, t, r) {
  var n, o, i, s, a = tt({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? n = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? In.call(arguments, 2) : r), cn(e.type, a, n || e.key, o || e.ref, null);
}
function oe(e) {
  function t(r) {
    var n, o;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (o = {})[t.__c] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.forEach(function(s) {
        s.__e = !0, xs(s);
      });
    }, this.sub = function(i) {
      n.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), s && s.call(i);
      };
    }), r.children;
  }
  return t.__c = "__cC" + of++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = t, t;
}
In = sf.slice, V = { __e: function(e, t, r, n) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, ef = 0, $e.prototype.setState = function(e, t) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = tt({}, this.state), typeof e == "function" && (e = e(tt({}, r), this.props)), e && tt(r, e), e != null && this.__v && (t && this._sb.push(t), xs(this));
}, $e.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xs(this));
}, $e.prototype.render = pe, Ft = [], tf = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, rf = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Oo.__r = 0, nf = /(PointerCapture)$|Capture$/i, ua = 0, _s = ic(!1), Ss = ic(!0), of = 0;
var vt, X, Ii, sc, wr = 0, mf = [], ie = V, ac = ie.__b, lc = ie.__r, cc = ie.diffed, uc = ie.__c, dc = ie.unmount, fc = ie.__;
function Yt(e, t) {
  ie.__h && ie.__h(X, e, wr || t), wr = 0;
  var r = X.__H || (X.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function _e(e) {
  return wr = 1, ti(gf, e);
}
function ti(e, t, r) {
  var n = Yt(vt++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : gf(void 0, t), function(a) {
    var l = n.__N ? n.__N[0] : n.__[0], c = n.t(l, a);
    l !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = X, !X.__f)) {
    var o = function(a, l, c) {
      if (!n.__c.__H) return !0;
      var d = n.__c.__H.__.filter(function(f) {
        return !!f.__c;
      });
      if (d.every(function(f) {
        return !f.__N;
      })) return !i || i.call(this, a, l, c);
      var u = n.__c.props !== a;
      return d.forEach(function(f) {
        if (f.__N) {
          var h = f.__[0];
          f.__ = f.__N, f.__N = void 0, h !== f.__[0] && (u = !0);
        }
      }), i && i.call(this, a, l, c) || u;
    };
    X.__f = !0;
    var i = X.shouldComponentUpdate, s = X.componentWillUpdate;
    X.componentWillUpdate = function(a, l, c) {
      if (this.__e) {
        var d = i;
        i = void 0, o(a, l, c), i = d;
      }
      s && s.call(this, a, l, c);
    }, X.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function le(e, t) {
  var r = Yt(vt++, 3);
  !ie.__s && ga(r.__H, t) && (r.__ = e, r.u = t, X.__H.__h.push(r));
}
function je(e, t) {
  var r = Yt(vt++, 4);
  !ie.__s && ga(r.__H, t) && (r.__ = e, r.u = t, X.__h.push(r));
}
function ue(e) {
  return wr = 5, Z(function() {
    return { current: e };
  }, []);
}
function pa(e, t, r) {
  wr = 6, je(function() {
    if (typeof e == "function") {
      var n = e(t());
      return function() {
        e(null), n && typeof n == "function" && n();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, r == null ? r : r.concat(e));
}
function Z(e, t) {
  var r = Yt(vt++, 7);
  return ga(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__;
}
function Re(e, t) {
  return wr = 8, Z(function() {
    return e;
  }, t);
}
function E(e) {
  var t = X.context[e.__c], r = Yt(vt++, 9);
  return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(X)), t.props.value) : e.__;
}
function ma(e, t) {
  ie.useDebugValue && ie.useDebugValue(t ? t(e) : e);
}
function Zg(e) {
  var t = Yt(vt++, 10), r = _e();
  return t.__ = e, X.componentDidCatch || (X.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function Er() {
  var e = Yt(vt++, 11);
  if (!e.__) {
    for (var t = X.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Jg() {
  for (var e; e = mf.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(xo), e.__H.__h.forEach(ws), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], ie.__e(t, e.__v);
  }
}
ie.__b = function(e) {
  X = null, ac && ac(e);
}, ie.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), fc && fc(e, t);
}, ie.__r = function(e) {
  lc && lc(e), vt = 0;
  var t = (X = e.__c).__H;
  t && (Ii === X ? (t.__h = [], X.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.forEach(xo), t.__h.forEach(ws), t.__h = [], vt = 0)), Ii = X;
}, ie.diffed = function(e) {
  cc && cc(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (mf.push(t) !== 1 && sc === ie.requestAnimationFrame || ((sc = ie.requestAnimationFrame) || Qg)(Jg)), t.__H.__.forEach(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Ii = X = null;
}, ie.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(xo), r.__h = r.__h.filter(function(n) {
        return !n.__ || ws(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], ie.__e(n, r.__v);
    }
  }), uc && uc(e, t);
}, ie.unmount = function(e) {
  dc && dc(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      xo(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && ie.__e(t, r.__v));
};
var hc = typeof requestAnimationFrame == "function";
function Qg(e) {
  var t, r = function() {
    clearTimeout(n), hc && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  hc && (t = requestAnimationFrame(r));
}
function xo(e) {
  var t = X, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), X = t;
}
function ws(e) {
  var t = X;
  e.__c = e.__(), X = t;
}
function ga(e, t) {
  return !e || e.length !== t.length || t.some(function(r, n) {
    return r !== e[n];
  });
}
function gf(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yf(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ks(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function ri(e, t) {
  var r = t(), n = _e({ t: { __: r, u: t } }), o = n[0].t, i = n[1];
  return je(function() {
    o.__ = r, o.u = t, Vi(o) && i({ t: o });
  }, [e, r, t]), le(function() {
    return Vi(o) && i({ t: o }), e(function() {
      Vi(o) && i({ t: o });
    });
  }, [e]), r;
}
function Vi(e) {
  var t, r, n = e.u, o = e.__;
  try {
    var i = n();
    return !((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r);
  } catch {
    return !0;
  }
}
function ni(e) {
  e();
}
function ya(e) {
  return e;
}
function ba() {
  return [!1, ni];
}
var Ln = je;
function jo(e, t) {
  this.props = e, this.context = t;
}
function oi(e, t) {
  function r(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : ks(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, D(e, o);
  }
  return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(jo.prototype = new $e()).isPureReactComponent = !0, jo.prototype.shouldComponentUpdate = function(e, t) {
  return ks(this.props, e) || ks(this.state, t);
};
var pc = V.__b;
V.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), pc && pc(e);
};
var ey = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function wt(e) {
  function t(r) {
    var n = yf({}, r);
    return delete n.ref, e(n, r.ref || null);
  }
  return t.$$typeof = ey, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var mc = function(e, t) {
  return e == null ? null : pt(pt(e).map(t));
}, ii = { map: mc, forEach: mc, count: function(e) {
  return e ? pt(e).length : 0;
}, only: function(e) {
  var t = pt(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: pt }, ty = V.__e;
V.__e = function(e, t, r, n) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), o.__c(e, t);
  }
  ty(e, t, r, n);
};
var gc = V.unmount;
function bf(e, t, r) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = yf({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return bf(n, t, r);
  })), e;
}
function vf(e, t, r) {
  return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return vf(n, t, r);
  }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e;
}
function mr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function _f(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function si(e) {
  var t, r, n;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      r = s.default || s;
    }, function(s) {
      n = s;
    }), n) throw n;
    if (!r) throw t;
    return D(r, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function nr() {
  this.i = null, this.l = null;
}
V.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), gc && gc(e);
}, (mr.prototype = new $e()).__c = function(e, t) {
  var r = t.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var o = _f(n.__v), i = !1, s = function() {
    i || (i = !0, r.__R = null, o ? o(a) : a());
  };
  r.__R = s;
  var a = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var l = n.state.__a;
        n.__v.__k[0] = vf(l, l.__c.__P, l.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.o.pop(); ) c.forceUpdate();
    }
  };
  n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(s, s);
}, mr.prototype.componentWillUnmount = function() {
  this.o = [];
}, mr.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = bf(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = t.__a && D(pe, null, e.fallback);
  return o && (o.__u &= -33), [D(pe, null, t.__a ? null : e.children), o];
};
var yc = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (r = e.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    e.i = r = r[2];
  }
};
function ry(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function ny(e) {
  var t = this, r = e.h;
  t.componentWillUnmount = function() {
    Sn(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== r && t.componentWillUnmount(), t.v || (t.h = r, t.v = { nodeType: 1, parentNode: r, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(n) {
    this.childNodes.push(n), t.h.appendChild(n);
  }, insertBefore: function(n, o) {
    this.childNodes.push(n), t.h.insertBefore(n, o);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.h.removeChild(n);
  } }), Sn(D(ry, { context: t.context }, e.__v), t.v);
}
function ai(e, t) {
  var r = D(ny, { __v: e, h: t });
  return r.containerInfo = t, r;
}
(nr.prototype = new $e()).__a = function(e) {
  var t = this, r = _f(t.__v), n = t.l.get(e);
  return n[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (n.push(o), yc(t, e, n)) : o();
    };
    r ? r(i) : i();
  };
}, nr.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = pt(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; ) this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, nr.prototype.componentDidUpdate = nr.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, r) {
    yc(e, r, t);
  });
};
var Sf = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, oy = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, iy = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, sy = /[A-Z0-9]/g, ay = typeof document < "u", ly = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function va(e, t, r) {
  return t.__k == null && (t.textContent = ""), Sn(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
function _a(e, t, r) {
  return pf(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
$e.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($e.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var bc = V.event;
function cy() {
}
function uy() {
  return this.cancelBubble;
}
function dy() {
  return this.defaultPrevented;
}
V.event = function(e) {
  return bc && (e = bc(e)), e.persist = cy, e.isPropagationStopped = uy, e.isDefaultPrevented = dy, e.nativeEvent = e;
};
var Sa, fy = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, vc = V.vnode;
V.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var r = t.props, n = t.type, o = {}, i = n.indexOf("-") === -1;
    for (var s in r) {
      var a = r[s];
      if (!(s === "value" && "defaultValue" in r && a == null || ay && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : l === "translate" && a === "no" ? a = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || ly(r.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : iy.test(s) && (s = l) : l = s = "oninput" : i && oy.test(s) ? s = s.replace(sy, "-$&").toLowerCase() : a === null && (a = void 0), l === "oninput" && o[s = l] && (s = "oninputCapture"), o[s] = a;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = pt(r.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = pt(r.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), r.class && !r.className ? (o.class = r.class, Object.defineProperty(o, "className", fy)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className), t.props = o;
  }(e), e.$$typeof = Sf, vc && vc(e);
};
var _c = V.__r;
V.__r = function(e) {
  _c && _c(e), Sa = e.__c;
};
var Sc = V.diffed;
V.diffed = function(e) {
  Sc && Sc(e);
  var t = e.props, r = e.__e;
  r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Sa = null;
};
var xf = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Sa.__n[e.__c].props.value;
}, useCallback: Re, useContext: E, useDebugValue: ma, useDeferredValue: ya, useEffect: le, useId: Er, useImperativeHandle: pa, useInsertionEffect: Ln, useLayoutEffect: je, useMemo: Z, useReducer: ti, useRef: ue, useState: _e, useSyncExternalStore: ri, useTransition: ba } } }, hy = "18.3.1";
function wf(e) {
  return D.bind(null, e);
}
function Xt(e) {
  return !!e && e.$$typeof === Sf;
}
function kf(e) {
  return Xt(e) && e.type === pe;
}
function Tf(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function xa(e) {
  return Xt(e) ? Xg.apply(null, arguments) : e;
}
function wa(e) {
  return !!e.__k && (Sn(null, e), !0);
}
function Cf(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Pf = function(e, t) {
  return e(t);
}, $f = function(e, t) {
  return e(t);
}, Af = pe, Rf = Xt, Ts = { useState: _e, useId: Er, useReducer: ti, useEffect: le, useLayoutEffect: je, useInsertionEffect: Ln, useTransition: ba, useDeferredValue: ya, useSyncExternalStore: ri, startTransition: ni, useRef: ue, useImperativeHandle: pa, useMemo: Z, useCallback: Re, useContext: E, useDebugValue: ma, version: "18.3.1", Children: ii, render: va, hydrate: _a, unmountComponentAtNode: wa, createPortal: ai, createElement: D, createContext: oe, createFactory: wf, cloneElement: xa, createRef: af, Fragment: pe, isValidElement: Xt, isElement: Rf, isFragment: kf, isMemo: Tf, findDOMNode: Cf, Component: $e, PureComponent: jo, memo: oi, forwardRef: wt, flushSync: $f, unstable_batchedUpdates: Pf, StrictMode: Af, Suspense: mr, SuspenseList: nr, lazy: si, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xf };
const xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: ii,
  Component: $e,
  Fragment: pe,
  PureComponent: jo,
  StrictMode: Af,
  Suspense: mr,
  SuspenseList: nr,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xf,
  cloneElement: xa,
  createContext: oe,
  createElement: D,
  createFactory: wf,
  createPortal: ai,
  createRef: af,
  default: Ts,
  findDOMNode: Cf,
  flushSync: $f,
  forwardRef: wt,
  hydrate: _a,
  isElement: Rf,
  isFragment: kf,
  isMemo: Tf,
  isValidElement: Xt,
  lazy: si,
  memo: oi,
  render: va,
  startTransition: ni,
  unmountComponentAtNode: wa,
  unstable_batchedUpdates: Pf,
  useCallback: Re,
  useContext: E,
  useDebugValue: ma,
  useDeferredValue: ya,
  useEffect: le,
  useErrorBoundary: Zg,
  useId: Er,
  useImperativeHandle: pa,
  useInsertionEffect: Ln,
  useLayoutEffect: je,
  useMemo: Z,
  useReducer: ti,
  useRef: ue,
  useState: _e,
  useSyncExternalStore: ri,
  useTransition: ba,
  version: hy
}, Symbol.toStringTag, { value: "Module" }));
var py = 0;
function C(e, t, r, n, o, i) {
  t || (t = {});
  var s, a, l = t;
  if ("ref" in l) for (a in l = {}, t) a == "ref" ? s = t[a] : l[a] = t[a];
  var c = { type: e, props: l, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --py, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) l[a] === void 0 && (l[a] = s[a]);
  return V.vnode && V.vnode(c), c;
}
function Ef(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      va(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      wa(e);
    }
  };
}
function my(e, t) {
  return _a(t, e), Ef(e);
}
const gy = {
  createRoot: Ef,
  hydrateRoot: my
};
var so = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qr = {}, wc;
function yy() {
  if (wc) return qr;
  wc = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.parse = s, qr.serialize = c;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, n = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, i = /* @__PURE__ */ (() => {
    const f = function() {
    };
    return f.prototype = /* @__PURE__ */ Object.create(null), f;
  })();
  function s(f, h) {
    const p = new i(), y = f.length;
    if (y < 2)
      return p;
    const b = (h == null ? void 0 : h.decode) || d;
    let g = 0;
    do {
      const S = f.indexOf("=", g);
      if (S === -1)
        break;
      const x = f.indexOf(";", g), P = x === -1 ? y : x;
      if (S > P) {
        g = f.lastIndexOf(";", S - 1) + 1;
        continue;
      }
      const w = a(f, g, S), T = l(f, S, w), $ = f.slice(w, T);
      if (p[$] === void 0) {
        let R = a(f, S + 1, P), I = l(f, P, R);
        const F = b(f.slice(R, I));
        p[$] = F;
      }
      g = P + 1;
    } while (g < y);
    return p;
  }
  function a(f, h, p) {
    do {
      const y = f.charCodeAt(h);
      if (y !== 32 && y !== 9)
        return h;
    } while (++h < p);
    return p;
  }
  function l(f, h, p) {
    for (; h > p; ) {
      const y = f.charCodeAt(--h);
      if (y !== 32 && y !== 9)
        return h + 1;
    }
    return p;
  }
  function c(f, h, p) {
    const y = (p == null ? void 0 : p.encode) || encodeURIComponent;
    if (!e.test(f))
      throw new TypeError(`argument name is invalid: ${f}`);
    const b = y(h);
    if (!t.test(b))
      throw new TypeError(`argument val is invalid: ${h}`);
    let g = f + "=" + b;
    if (!p)
      return g;
    if (p.maxAge !== void 0) {
      if (!Number.isInteger(p.maxAge))
        throw new TypeError(`option maxAge is invalid: ${p.maxAge}`);
      g += "; Max-Age=" + p.maxAge;
    }
    if (p.domain) {
      if (!r.test(p.domain))
        throw new TypeError(`option domain is invalid: ${p.domain}`);
      g += "; Domain=" + p.domain;
    }
    if (p.path) {
      if (!n.test(p.path))
        throw new TypeError(`option path is invalid: ${p.path}`);
      g += "; Path=" + p.path;
    }
    if (p.expires) {
      if (!u(p.expires) || !Number.isFinite(p.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${p.expires}`);
      g += "; Expires=" + p.expires.toUTCString();
    }
    if (p.httpOnly && (g += "; HttpOnly"), p.secure && (g += "; Secure"), p.partitioned && (g += "; Partitioned"), p.priority)
      switch (typeof p.priority == "string" ? p.priority.toLowerCase() : void 0) {
        case "low":
          g += "; Priority=Low";
          break;
        case "medium":
          g += "; Priority=Medium";
          break;
        case "high":
          g += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${p.priority}`);
      }
    if (p.sameSite)
      switch (typeof p.sameSite == "string" ? p.sameSite.toLowerCase() : p.sameSite) {
        case !0:
        case "strict":
          g += "; SameSite=Strict";
          break;
        case "lax":
          g += "; SameSite=Lax";
          break;
        case "none":
          g += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${p.sameSite}`);
      }
    return g;
  }
  function d(f) {
    if (f.indexOf("%") === -1)
      return f;
    try {
      return decodeURIComponent(f);
    } catch {
      return f;
    }
  }
  function u(f) {
    return o.call(f) === "[object Date]";
  }
  return qr;
}
yy();
/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var kc = "popstate";
function by(e = {}) {
  function t(o, i) {
    let {
      pathname: s = "/",
      search: a = "",
      hash: l = ""
    } = Zt(o.location.hash.substring(1));
    return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), Cs(
      "",
      { pathname: s, search: a, hash: l },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function r(o, i) {
    let s = o.document.querySelector("base"), a = "";
    if (s && s.getAttribute("href")) {
      let l = o.location.href, c = l.indexOf("#");
      a = c === -1 ? l : l.slice(0, c);
    }
    return a + "#" + (typeof i == "string" ? i : xn(i));
  }
  function n(o, i) {
    Ge(
      o.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        i
      )})`
    );
  }
  return _y(
    t,
    r,
    n,
    e
  );
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ge(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function vy() {
  return Math.random().toString(36).substring(2, 10);
}
function Tc(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Cs(e, t, r = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? Zt(t) : t,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || vy()
  };
}
function xn({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function Zt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function _y(e, t, r, n = {}) {
  let { window: o = document.defaultView, v5Compat: i = !1 } = n, s = o.history, a = "POP", l = null, c = d();
  c == null && (c = 0, s.replaceState({ ...s.state, idx: c }, ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function u() {
    a = "POP";
    let b = d(), g = b == null ? null : b - c;
    c = b, l && l({ action: a, location: y.location, delta: g });
  }
  function f(b, g) {
    a = "PUSH";
    let S = Cs(y.location, b, g);
    r && r(S, b), c = d() + 1;
    let x = Tc(S, c), P = y.createHref(S);
    try {
      s.pushState(x, "", P);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError")
        throw w;
      o.location.assign(P);
    }
    i && l && l({ action: a, location: y.location, delta: 1 });
  }
  function h(b, g) {
    a = "REPLACE";
    let S = Cs(y.location, b, g);
    r && r(S, b), c = d();
    let x = Tc(S, c), P = y.createHref(S);
    s.replaceState(x, "", P), i && l && l({ action: a, location: y.location, delta: 0 });
  }
  function p(b) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href, S = typeof b == "string" ? b : xn(b);
    return S = S.replace(/ $/, "%20"), ae(
      g,
      `No window.location.(origin|href) available to create URL for href: ${S}`
    ), new URL(S, g);
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(b) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(kc, u), l = b, () => {
        o.removeEventListener(kc, u), l = null;
      };
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: p,
    encodeLocation(b) {
      let g = p(b);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: f,
    replace: h,
    go(b) {
      return s.go(b);
    }
  };
  return y;
}
function zf(e, t, r = "/") {
  return Sy(e, t, r, !1);
}
function Sy(e, t, r, n) {
  let o = typeof t == "string" ? Zt(t) : t, i = _t(o.pathname || "/", r);
  if (i == null)
    return null;
  let s = Df(e);
  xy(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = zy(i);
    a = Ey(
      s[l],
      c,
      n
    );
  }
  return a;
}
function Df(e, t = [], r = [], n = "") {
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    l.relativePath.startsWith("/") && (ae(
      l.relativePath.startsWith(n),
      `Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(n.length));
    let c = mt([n, l.relativePath]), d = r.concat(l);
    i.children && i.children.length > 0 && (ae(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
    ), Df(i.children, t, d, c)), !(i.path == null && !i.index) && t.push({
      path: c,
      score: Ay(c, i.index),
      routesMeta: d
    });
  };
  return e.forEach((i, s) => {
    var a;
    if (i.path === "" || !((a = i.path) != null && a.includes("?")))
      o(i, s);
    else
      for (let l of Bf(i.path))
        o(i, s, l);
  }), t;
}
function Bf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, o = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (n.length === 0)
    return o ? [i, ""] : [i];
  let s = Bf(n.join("/")), a = [];
  return a.push(
    ...s.map(
      (l) => l === "" ? i : [i, l].join("/")
    )
  ), o && a.push(...s), a.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function xy(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : Ry(
      t.routesMeta.map((n) => n.childrenIndex),
      r.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var wy = /^:[\w-]+$/, ky = 3, Ty = 2, Cy = 1, Py = 10, $y = -2, Cc = (e) => e === "*";
function Ay(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Cc) && (n += $y), t && (n += Ty), r.filter((o) => !Cc(o)).reduce(
    (o, i) => o + (wy.test(i) ? ky : i === "" ? Cy : Py),
    n
  );
}
function Ry(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ey(e, t, r = !1) {
  let { routesMeta: n } = e, o = {}, i = "/", s = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a], c = a === n.length - 1, d = i === "/" ? t : t.slice(i.length) || "/", u = No(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      d
    ), f = l.route;
    if (!u && c && r && !n[n.length - 1].route.index && (u = No(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      d
    )), !u)
      return null;
    Object.assign(o, u.params), s.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: mt([i, u.pathname]),
      pathnameBase: Vy(
        mt([i, u.pathnameBase])
      ),
      route: f
    }), u.pathnameBase !== "/" && (i = mt([i, u.pathnameBase]));
  }
  return s;
}
function No(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = My(
    e.path,
    e.caseSensitive,
    e.end
  ), o = t.match(r);
  if (!o) return null;
  let i = o[0], s = i.replace(/(.)\/+$/, "$1"), a = o.slice(1);
  return {
    params: n.reduce(
      (c, { paramName: d, isOptional: u }, f) => {
        if (d === "*") {
          let p = a[f] || "";
          s = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
        }
        const h = a[f];
        return u && !h ? c[d] = void 0 : c[d] = (h || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function My(e, t = !1, r = !0) {
  Ge(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, a, l) => (n.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (n.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n];
}
function zy(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ge(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function _t(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Dy(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? Zt(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : By(r, t) : t,
    search: Ly(n),
    hash: Fy(o)
  };
}
function By(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function Li(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Iy(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function If(e) {
  let t = Iy(e);
  return t.map(
    (r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Vf(e, t, r, n = !1) {
  let o;
  typeof e == "string" ? o = Zt(e) : (o = { ...e }, ae(
    !o.pathname || !o.pathname.includes("?"),
    Li("?", "pathname", "search", o)
  ), ae(
    !o.pathname || !o.pathname.includes("#"),
    Li("#", "pathname", "hash", o)
  ), ae(
    !o.search || !o.search.includes("#"),
    Li("#", "search", "hash", o)
  ));
  let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
  if (s == null)
    a = r;
  else {
    let u = t.length - 1;
    if (!n && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), u -= 1;
      o.pathname = f.join("/");
    }
    a = u >= 0 ? t[u] : "/";
  }
  let l = Dy(o, a), c = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
var mt = (e) => e.join("/").replace(/\/\/+/g, "/"), Vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Ly = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Fy = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Oy(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var Lf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Lf
);
var jy = [
  "GET",
  ...Lf
];
new Set(jy);
var Mr = oe(null);
Mr.displayName = "DataRouter";
var li = oe(null);
li.displayName = "DataRouterState";
var Ff = oe({
  isTransitioning: !1
});
Ff.displayName = "ViewTransition";
var Ny = oe(
  /* @__PURE__ */ new Map()
);
Ny.displayName = "Fetchers";
var Wy = oe(null);
Wy.displayName = "Await";
var at = oe(
  null
);
at.displayName = "Navigation";
var Fn = oe(
  null
);
Fn.displayName = "Location";
var kt = oe({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
kt.displayName = "Route";
var ka = oe(null);
ka.displayName = "RouteError";
function Hy(e, { relative: t } = {}) {
  ae(
    On(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: n } = E(at), { hash: o, pathname: i, search: s } = jn(e, { relative: t }), a = i;
  return r !== "/" && (a = i === "/" ? r : mt([r, i])), n.createHref({ pathname: a, search: s, hash: o });
}
function On() {
  return E(Fn) != null;
}
function Jt() {
  return ae(
    On(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E(Fn).location;
}
var Of = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jf(e) {
  E(at).static || je(e);
}
function Uy() {
  let { isDataRoute: e } = E(kt);
  return e ? o0() : qy();
}
function qy() {
  ae(
    On(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = E(Mr), { basename: t, navigator: r } = E(at), { matches: n } = E(kt), { pathname: o } = Jt(), i = JSON.stringify(If(n)), s = ue(!1);
  return jf(() => {
    s.current = !0;
  }), Re(
    (l, c = {}) => {
      if (Ge(s.current, Of), !s.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let d = Vf(
        l,
        JSON.parse(i),
        o,
        c.relative === "path"
      );
      e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : mt([t, d.pathname])), (c.replace ? r.replace : r.push)(
        d,
        c.state,
        c
      );
    },
    [
      t,
      r,
      i,
      o,
      e
    ]
  );
}
oe(null);
function jn(e, { relative: t } = {}) {
  let { matches: r } = E(kt), { pathname: n } = Jt(), o = JSON.stringify(If(r));
  return Z(
    () => Vf(
      e,
      JSON.parse(o),
      n,
      t === "path"
    ),
    [e, o, n, t]
  );
}
function Gy(e, t) {
  return Nf(e, t);
}
function Nf(e, t, r, n) {
  var S;
  ae(
    On(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: i } = E(at), { matches: s } = E(kt), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", d = a ? a.pathnameBase : "/", u = a && a.route;
  {
    let x = u && u.path || "";
    Wf(
      c,
      !u || x.endsWith("*") || x.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === "/" ? "*" : `${x}/*`}">.`
    );
  }
  let f = Jt(), h;
  if (t) {
    let x = typeof t == "string" ? Zt(t) : t;
    ae(
      d === "/" || ((S = x.pathname) == null ? void 0 : S.startsWith(d)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`
    ), h = x;
  } else
    h = f;
  let p = h.pathname || "/", y = p;
  if (d !== "/") {
    let x = d.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let b = !i && r && r.matches && r.matches.length > 0 ? r.matches : zf(e, { pathname: y });
  Ge(
    u || b != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), Ge(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let g = Jy(
    b && b.map(
      (x) => Object.assign({}, x, {
        params: Object.assign({}, l, x.params),
        pathname: mt([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname
        ]),
        pathnameBase: x.pathnameBase === "/" ? d : mt([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
        ])
      })
    ),
    s,
    r,
    n
  );
  return t && g ? /* @__PURE__ */ D(
    Fn.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...h
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    g
  ) : g;
}
function Ky() {
  let e = n0(), t = Oy(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: n }, i = { padding: "2px 4px", backgroundColor: n }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ D(pe, null, /* @__PURE__ */ D("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ D("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ D("code", { style: i }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ D("code", { style: i }, "errorElement"), " prop on your route.")), /* @__PURE__ */ D(pe, null, /* @__PURE__ */ D("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ D("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ D("pre", { style: o }, r) : null, s);
}
var Yy = /* @__PURE__ */ D(Ky, null), Xy = class extends $e {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ D(kt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ D(
      ka.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Zy({ routeContext: e, match: t, children: r }) {
  let n = E(Mr);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ D(kt.Provider, { value: e }, r);
}
function Jy(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let o = e, i = r == null ? void 0 : r.errors;
  if (i != null) {
    let l = o.findIndex(
      (c) => c.route.id && (i == null ? void 0 : i[c.route.id]) !== void 0
    );
    ae(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        i
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, l + 1)
    );
  }
  let s = !1, a = -1;
  if (r)
    for (let l = 0; l < o.length; l++) {
      let c = o[l];
      if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = l), c.route.id) {
        let { loaderData: d, errors: u } = r, f = c.route.loader && !d.hasOwnProperty(c.route.id) && (!u || u[c.route.id] === void 0);
        if (c.route.lazy || f) {
          s = !0, a >= 0 ? o = o.slice(0, a + 1) : o = [o[0]];
          break;
        }
      }
    }
  return o.reduceRight((l, c, d) => {
    let u, f = !1, h = null, p = null;
    r && (u = i && c.route.id ? i[c.route.id] : void 0, h = c.route.errorElement || Yy, s && (a < 0 && d === 0 ? (Wf(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), f = !0, p = null) : a === d && (f = !0, p = c.route.hydrateFallbackElement || null)));
    let y = t.concat(o.slice(0, d + 1)), b = () => {
      let g;
      return u ? g = h : f ? g = p : c.route.Component ? g = /* @__PURE__ */ D(c.route.Component, null) : c.route.element ? g = c.route.element : g = l, /* @__PURE__ */ D(
        Zy,
        {
          match: c,
          routeContext: {
            outlet: l,
            matches: y,
            isDataRoute: r != null
          },
          children: g
        }
      );
    };
    return r && (c.route.ErrorBoundary || c.route.errorElement || d === 0) ? /* @__PURE__ */ D(
      Xy,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: h,
        error: u,
        children: b(),
        routeContext: { outlet: null, matches: y, isDataRoute: !0 }
      }
    ) : b();
  }, null);
}
function Ta(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qy(e) {
  let t = E(Mr);
  return ae(t, Ta(e)), t;
}
function e0(e) {
  let t = E(li);
  return ae(t, Ta(e)), t;
}
function t0(e) {
  let t = E(kt);
  return ae(t, Ta(e)), t;
}
function Ca(e) {
  let t = t0(e), r = t.matches[t.matches.length - 1];
  return ae(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function r0() {
  return Ca(
    "useRouteId"
    /* UseRouteId */
  );
}
function n0() {
  var n;
  let e = E(ka), t = e0(
    "useRouteError"
    /* UseRouteError */
  ), r = Ca(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function o0() {
  let { router: e } = Qy(
    "useNavigate"
    /* UseNavigateStable */
  ), t = Ca(
    "useNavigate"
    /* UseNavigateStable */
  ), r = ue(!1);
  return jf(() => {
    r.current = !0;
  }), Re(
    async (o, i = {}) => {
      Ge(r.current, Of), r.current && (typeof o == "number" ? e.navigate(o) : await e.navigate(o, { fromRouteId: t, ...i }));
    },
    [e, t]
  );
}
var Pc = {};
function Wf(e, t, r) {
  !t && !Pc[e] && (Pc[e] = !0, Ge(!1, r));
}
oi(i0);
function i0({
  routes: e,
  future: t,
  state: r
}) {
  return Nf(e, void 0, r, t);
}
function Ps(e) {
  ae(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function s0({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: n = "POP",
  navigator: o,
  static: i = !1
}) {
  ae(
    !On(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let s = e.replace(/^\/*/, "/"), a = Z(
    () => ({
      basename: s,
      navigator: o,
      static: i,
      future: {}
    }),
    [s, o, i]
  );
  typeof r == "string" && (r = Zt(r));
  let {
    pathname: l = "/",
    search: c = "",
    hash: d = "",
    state: u = null,
    key: f = "default"
  } = r, h = Z(() => {
    let p = _t(l, s);
    return p == null ? null : {
      location: {
        pathname: p,
        search: c,
        hash: d,
        state: u,
        key: f
      },
      navigationType: n
    };
  }, [s, l, c, d, u, f, n]);
  return Ge(
    h != null,
    `<Router basename="${s}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
  ), h == null ? null : /* @__PURE__ */ D(at.Provider, { value: a }, /* @__PURE__ */ D(Fn.Provider, { children: t, value: h }));
}
function a0({
  children: e,
  location: t
}) {
  return Gy($s(e), t);
}
function $s(e, t = []) {
  let r = [];
  return ii.forEach(e, (n, o) => {
    if (!Xt(n))
      return;
    let i = [...t, o];
    if (n.type === pe) {
      r.push.apply(
        r,
        $s(n.props.children, i)
      );
      return;
    }
    ae(
      n.type === Ps,
      `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ae(
      !n.props.index || !n.props.children,
      "An index route cannot have child routes."
    );
    let s = {
      id: n.props.id || i.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      hydrateFallbackElement: n.props.hydrateFallbackElement,
      HydrateFallback: n.props.HydrateFallback,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.hasErrorBoundary === !0 || n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (s.children = $s(
      n.props.children,
      i
    )), r.push(s);
  }), r;
}
var wo = "get", ko = "application/x-www-form-urlencoded";
function ci(e) {
  return e != null && typeof e.tagName == "string";
}
function l0(e) {
  return ci(e) && e.tagName.toLowerCase() === "button";
}
function c0(e) {
  return ci(e) && e.tagName.toLowerCase() === "form";
}
function u0(e) {
  return ci(e) && e.tagName.toLowerCase() === "input";
}
function d0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function f0(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !d0(e);
}
var ao = null;
function h0() {
  if (ao === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ao = !1;
    } catch {
      ao = !0;
    }
  return ao;
}
var p0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Fi(e) {
  return e != null && !p0.has(e) ? (Ge(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ko}"`
  ), null) : e;
}
function m0(e, t) {
  let r, n, o, i, s;
  if (c0(e)) {
    let a = e.getAttribute("action");
    n = a ? _t(a, t) : null, r = e.getAttribute("method") || wo, o = Fi(e.getAttribute("enctype")) || ko, i = new FormData(e);
  } else if (l0(e) || u0(e) && (e.type === "submit" || e.type === "image")) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || a.getAttribute("action");
    if (n = l ? _t(l, t) : null, r = e.getAttribute("formmethod") || a.getAttribute("method") || wo, o = Fi(e.getAttribute("formenctype")) || Fi(a.getAttribute("enctype")) || ko, i = new FormData(a, e), !h0()) {
      let { name: c, type: d, value: u } = e;
      if (d === "image") {
        let f = c ? `${c}.` : "";
        i.append(`${f}x`, "0"), i.append(`${f}y`, "0");
      } else c && i.append(c, u);
    }
  } else {
    if (ci(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = wo, n = null, o = ko, s = e;
  }
  return i && o === "text/plain" && (s = i, i = void 0), { action: n, method: r.toLowerCase(), encType: o, formData: i, body: s };
}
function Pa(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function g0(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function y0(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function b0(e, t, r) {
  let n = await Promise.all(
    e.map(async (o) => {
      let i = t.routes[o.route.id];
      if (i) {
        let s = await g0(i, r);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return x0(
    n.flat(1).filter(y0).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function $c(e, t, r, n, o, i) {
  let s = (l, c) => r[c] ? l.route.id !== r[c].route.id : !0, a = (l, c) => {
    var d;
    return (
      // param change, /users/123 -> /users/456
      r[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((d = r[c].route.path) == null ? void 0 : d.endsWith("*")) && r[c].params["*"] !== l.params["*"]
    );
  };
  return i === "assets" ? t.filter(
    (l, c) => s(l, c) || a(l, c)
  ) : i === "data" ? t.filter((l, c) => {
    var u;
    let d = n.routes[l.route.id];
    if (!d || !d.hasLoader)
      return !1;
    if (s(l, c) || a(l, c))
      return !0;
    if (l.route.shouldRevalidate) {
      let f = l.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: ((u = r[0]) == null ? void 0 : u.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function v0(e, t, { includeHydrateFallback: r } = {}) {
  return _0(
    e.map((n) => {
      let o = t.routes[n.route.id];
      if (!o) return [];
      let i = [o.module];
      return o.clientActionModule && (i = i.concat(o.clientActionModule)), o.clientLoaderModule && (i = i.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (i = i.concat(o.hydrateFallbackModule)), o.imports && (i = i.concat(o.imports)), i;
    }).flat(1)
  );
}
function _0(e) {
  return [...new Set(e)];
}
function S0(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let n of r)
    t[n] = e[n];
  return t;
}
function x0(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((n, o) => {
    let i = JSON.stringify(S0(o));
    return r.has(i) || (r.add(i), n.push({ key: i, link: o })), n;
  }, []);
}
function w0(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && _t(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
function Hf() {
  let e = E(Mr);
  return Pa(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function k0() {
  let e = E(li);
  return Pa(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var $a = oe(void 0);
$a.displayName = "FrameworkContext";
function Uf() {
  let e = E($a);
  return Pa(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function T0(e, t) {
  let r = E($a), [n, o] = _e(!1), [i, s] = _e(!1), { onFocus: a, onBlur: l, onMouseEnter: c, onMouseLeave: d, onTouchStart: u } = t, f = ue(null);
  le(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let y = (g) => {
        g.forEach((S) => {
          s(S.isIntersecting);
        });
      }, b = new IntersectionObserver(y, { threshold: 0.5 });
      return f.current && b.observe(f.current), () => {
        b.disconnect();
      };
    }
  }, [e]), le(() => {
    if (n) {
      let y = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(y);
      };
    }
  }, [n]);
  let h = () => {
    o(!0);
  }, p = () => {
    o(!1), s(!1);
  };
  return r ? e !== "intent" ? [i, f, {}] : [
    i,
    f,
    {
      onFocus: Gr(a, h),
      onBlur: Gr(l, p),
      onMouseEnter: Gr(c, h),
      onMouseLeave: Gr(d, p),
      onTouchStart: Gr(u, h)
    }
  ] : [!1, f, {}];
}
function Gr(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function C0({
  page: e,
  ...t
}) {
  let { router: r } = Hf(), n = Z(
    () => zf(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return n ? /* @__PURE__ */ D($0, { page: e, matches: n, ...t }) : null;
}
function P0(e) {
  let { manifest: t, routeModules: r } = Uf(), [n, o] = _e([]);
  return le(() => {
    let i = !1;
    return b0(e, t, r).then(
      (s) => {
        i || o(s);
      }
    ), () => {
      i = !0;
    };
  }, [e, t, r]), n;
}
function $0({
  page: e,
  matches: t,
  ...r
}) {
  let n = Jt(), { manifest: o, routeModules: i } = Uf(), { basename: s } = Hf(), { loaderData: a, matches: l } = k0(), c = Z(
    () => $c(
      e,
      t,
      l,
      o,
      n,
      "data"
    ),
    [e, t, l, o, n]
  ), d = Z(
    () => $c(
      e,
      t,
      l,
      o,
      n,
      "assets"
    ),
    [e, t, l, o, n]
  ), u = Z(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let p = /* @__PURE__ */ new Set(), y = !1;
    if (t.forEach((g) => {
      var x;
      let S = o.routes[g.route.id];
      !S || !S.hasLoader || (!c.some((P) => P.route.id === g.route.id) && g.route.id in a && ((x = i[g.route.id]) != null && x.shouldRevalidate) || S.hasClientLoader ? y = !0 : p.add(g.route.id));
    }), p.size === 0)
      return [];
    let b = w0(e, s);
    return y && p.size > 0 && b.searchParams.set(
      "_routes",
      t.filter((g) => p.has(g.route.id)).map((g) => g.route.id).join(",")
    ), [b.pathname + b.search];
  }, [
    s,
    a,
    n,
    o,
    c,
    t,
    e,
    i
  ]), f = Z(
    () => v0(d, o),
    [d, o]
  ), h = P0(d);
  return /* @__PURE__ */ D(pe, null, u.map((p) => /* @__PURE__ */ D("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...r })), f.map((p) => /* @__PURE__ */ D("link", { key: p, rel: "modulepreload", href: p, ...r })), h.map(({ key: p, link: y }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ D("link", { key: p, ...y })
  )));
}
function A0(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var qf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  qf && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function R0({ basename: e, children: t, window: r }) {
  let n = ue();
  n.current == null && (n.current = by({ window: r, v5Compat: !0 }));
  let o = n.current, [i, s] = _e({
    action: o.action,
    location: o.location
  }), a = Re(
    (l) => {
      ni(() => s(l));
    },
    [s]
  );
  return je(() => o.listen(a), [o, a]), /* @__PURE__ */ D(
    s0,
    {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: o
    }
  );
}
var Gf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Kf = wt(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: n = "none",
    relative: o,
    reloadDocument: i,
    replace: s,
    state: a,
    target: l,
    to: c,
    preventScrollReset: d,
    viewTransition: u,
    ...f
  }, h) {
    let { basename: p } = E(at), y = typeof c == "string" && Gf.test(c), b, g = !1;
    if (typeof c == "string" && y && (b = c, qf))
      try {
        let I = new URL(window.location.href), F = c.startsWith("//") ? new URL(I.protocol + c) : new URL(c), K = _t(F.pathname, p);
        F.origin === I.origin && K != null ? c = K + F.search + F.hash : g = !0;
      } catch {
        Ge(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let S = Hy(c, { relative: o }), [x, P, w] = T0(
      n,
      f
    ), T = D0(c, {
      replace: s,
      state: a,
      target: l,
      preventScrollReset: d,
      relative: o,
      viewTransition: u
    });
    function $(I) {
      t && t(I), I.defaultPrevented || T(I);
    }
    let R = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ D(
        "a",
        {
          ...f,
          ...w,
          href: b || S,
          onClick: g || i ? t : $,
          ref: A0(h, P),
          target: l,
          "data-discover": !y && r === "render" ? "true" : void 0
        }
      )
    );
    return x && !y ? /* @__PURE__ */ D(pe, null, R, /* @__PURE__ */ D(C0, { page: S })) : R;
  }
);
Kf.displayName = "Link";
var E0 = wt(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: o = !1,
    style: i,
    to: s,
    viewTransition: a,
    children: l,
    ...c
  }, d) {
    let u = jn(s, { relative: c.relative }), f = Jt(), h = E(li), { navigator: p, basename: y } = E(at), b = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    F0(u) && a === !0, g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname, S = f.pathname, x = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    r || (S = S.toLowerCase(), x = x ? x.toLowerCase() : null, g = g.toLowerCase()), x && y && (x = _t(x, y) || x);
    const P = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let w = S === g || !o && S.startsWith(g) && S.charAt(P) === "/", T = x != null && (x === g || !o && x.startsWith(g) && x.charAt(g.length) === "/"), $ = {
      isActive: w,
      isPending: T,
      isTransitioning: b
    }, R = w ? t : void 0, I;
    typeof n == "function" ? I = n($) : I = [
      n,
      w ? "active" : null,
      T ? "pending" : null,
      b ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let F = typeof i == "function" ? i($) : i;
    return /* @__PURE__ */ D(
      Kf,
      {
        ...c,
        "aria-current": R,
        className: I,
        ref: d,
        style: F,
        to: s,
        viewTransition: a
      },
      typeof l == "function" ? l($) : l
    );
  }
);
E0.displayName = "NavLink";
var M0 = wt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: o,
    state: i,
    method: s = wo,
    action: a,
    onSubmit: l,
    relative: c,
    preventScrollReset: d,
    viewTransition: u,
    ...f
  }, h) => {
    let p = V0(), y = L0(a, { relative: c }), b = s.toLowerCase() === "get" ? "get" : "post", g = typeof a == "string" && Gf.test(a);
    return /* @__PURE__ */ D(
      "form",
      {
        ref: h,
        method: b,
        action: y,
        onSubmit: n ? l : (x) => {
          if (l && l(x), x.defaultPrevented) return;
          x.preventDefault();
          let P = x.nativeEvent.submitter, w = (P == null ? void 0 : P.getAttribute("formmethod")) || s;
          p(P || x.currentTarget, {
            fetcherKey: t,
            method: w,
            navigate: r,
            replace: o,
            state: i,
            relative: c,
            preventScrollReset: d,
            viewTransition: u
          });
        },
        ...f,
        "data-discover": !g && e === "render" ? "true" : void 0
      }
    );
  }
);
M0.displayName = "Form";
function z0(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yf(e) {
  let t = E(Mr);
  return ae(t, z0(e)), t;
}
function D0(e, {
  target: t,
  replace: r,
  state: n,
  preventScrollReset: o,
  relative: i,
  viewTransition: s
} = {}) {
  let a = Uy(), l = Jt(), c = jn(e, { relative: i });
  return Re(
    (d) => {
      if (f0(d, t)) {
        d.preventDefault();
        let u = r !== void 0 ? r : xn(l) === xn(c);
        a(e, {
          replace: u,
          state: n,
          preventScrollReset: o,
          relative: i,
          viewTransition: s
        });
      }
    },
    [
      l,
      a,
      c,
      r,
      n,
      t,
      e,
      o,
      i,
      s
    ]
  );
}
var B0 = 0, I0 = () => `__${String(++B0)}__`;
function V0() {
  let { router: e } = Yf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = E(at), r = r0();
  return Re(
    async (n, o = {}) => {
      let { action: i, method: s, encType: a, formData: l, body: c } = m0(
        n,
        t
      );
      if (o.navigate === !1) {
        let d = o.fetcherKey || I0();
        await e.fetch(d, r, o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          flushSync: o.flushSync
        });
      } else
        await e.navigate(o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          replace: o.replace,
          state: o.state,
          fromRouteId: r,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition
        });
    },
    [e, t, r]
  );
}
function L0(e, { relative: t } = {}) {
  let { basename: r } = E(at), n = E(kt);
  ae(n, "useFormAction must be used inside a RouteContext");
  let [o] = n.matches.slice(-1), i = { ...jn(e || ".", { relative: t }) }, s = Jt();
  if (e == null) {
    i.search = s.search;
    let a = new URLSearchParams(i.search), l = a.getAll("index");
    if (l.some((d) => d === "")) {
      a.delete("index"), l.filter((u) => u).forEach((u) => a.append("index", u));
      let d = a.toString();
      i.search = d ? `?${d}` : "";
    }
  }
  return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : mt([r, i.pathname])), xn(i);
}
function F0(e, t = {}) {
  let r = E(Ff);
  ae(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Yf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = jn(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let i = _t(r.currentLocation.pathname, n) || r.currentLocation.pathname, s = _t(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return No(o.pathname, s) != null || No(o.pathname, i) != null;
}
new TextEncoder();
function O0() {
  return !!(globalThis != null && globalThis.document);
}
function j0(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function As(e) {
  return Array.isArray(e);
}
function Ae(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !As(e);
}
function N0(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function W0(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Rs(e) {
  if (e == null)
    return e;
  const { unitless: t } = W0(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
const Xf = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Aa = (e) => Object.fromEntries(Object.entries(e).sort(Xf));
function Ac(e) {
  const t = Aa(e);
  return Object.assign(Object.values(t), t);
}
function H0(e) {
  const t = Object.keys(Aa(e));
  return new Set(t);
}
function Rc(e) {
  if (!e)
    return e;
  e = Rs(e) ?? e;
  const t = -0.02;
  return typeof e == "number" ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function Qr(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Rs(e)})`), t && r.push("and", `(max-width: ${Rs(t)})`), r.join(" ");
}
function U0(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Ac(e), r = Object.entries(e).sort(Xf).map(([i, s], a, l) => {
    let [, c] = l[a + 1] ?? [];
    return c = parseFloat(c) > 0 ? Rc(c) : void 0, {
      _minW: Rc(s),
      breakpoint: i,
      minW: s,
      maxW: c,
      maxWQuery: Qr(null, c),
      minWQuery: Qr(s),
      minMaxQuery: Qr(s, c)
    };
  }), n = H0(e), o = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((a) => n.has(a));
    },
    asObject: Aa(e),
    asArray: Ac(e),
    details: r,
    get(i) {
      return r.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...t.map((i) => Qr(i)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(i) {
      if (!Ae(i))
        throw new Error("toArrayValue: value must be an object");
      const s = o.map((a) => i[a] ?? null);
      for (; N0(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce(
        (s, a, l) => {
          const c = o[l];
          return c != null && a != null && (s[c] = a), s;
        },
        {}
      );
    }
  };
}
function Zf(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function q0(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function zr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: s
  } = e, a = oe(s);
  a.displayName = t;
  function l() {
    var d;
    const c = E(a);
    if (!c && r) {
      const u = new Error(
        i ?? q0(n, o)
      );
      throw u.name = "ContextError", (d = Error.captureStackTrace) == null || d.call(Error, u, l), u;
    }
    return c;
  }
  return [a.Provider, l, a];
}
const Dr = (...e) => e.filter(Boolean).join(" ");
function G0(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
const K0 = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, s) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const a = t.get(n);
    if (a.has(o))
      return a.get(o);
    const l = e(n, o, i, s);
    return a.set(o, l), l;
  };
}, Jf = K0(G0), Y0 = (e) => e.default || e;
function Qf(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function X0(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
const Z0 = (e) => typeof e == "function";
function rt(e, ...t) {
  return Z0(e) ? e(...t) : e;
}
function J0(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), n = Object.keys(r), o = (s) => {
    const a = {};
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      r[c] && (Object.defineProperty(a, c, r[c]), delete r[c]);
    }
    return a;
  }, i = (s) => o(Array.isArray(s) ? s : n.filter(s));
  return t.map(i).concat(o(n));
}
function Ec(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(s, a = []) {
    if (Ae(s) || Array.isArray(s)) {
      const l = {};
      for (const [c, d] of Object.entries(s)) {
        const u = (o == null ? void 0 : o(c)) ?? c, f = [...a, u];
        if (n != null && n(s, f))
          return t(s, a);
        l[u] = i(d, f);
      }
      return l;
    }
    return t(s, a);
  }
  return i(e);
}
var en = { exports: {} };
en.exports;
var Mc;
function Q0() {
  return Mc || (Mc = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, s = 9007199254740991, a = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", d = "[object Boolean]", u = "[object Date]", f = "[object Error]", h = "[object Function]", p = "[object GeneratorFunction]", y = "[object Map]", b = "[object Number]", g = "[object Null]", S = "[object Object]", x = "[object Proxy]", P = "[object RegExp]", w = "[object Set]", T = "[object String]", $ = "[object Undefined]", R = "[object WeakMap]", I = "[object ArrayBuffer]", F = "[object DataView]", K = "[object Float32Array]", Ye = "[object Float64Array]", wi = "[object Int8Array]", Xn = "[object Int16Array]", Ml = "[object Int32Array]", zl = "[object Uint8Array]", ye = "[object Uint8ClampedArray]", Ne = "[object Uint16Array]", Fr = "[object Uint32Array]", Or = /[\\^$.*+?()[\]{}|]/g, Am = /^\[object .+?Constructor\]$/, Rm = /^(?:0|[1-9]\d*)$/, ee = {};
    ee[K] = ee[Ye] = ee[wi] = ee[Xn] = ee[Ml] = ee[zl] = ee[ye] = ee[Ne] = ee[Fr] = !0, ee[a] = ee[l] = ee[I] = ee[d] = ee[F] = ee[u] = ee[f] = ee[h] = ee[y] = ee[b] = ee[S] = ee[P] = ee[w] = ee[T] = ee[R] = !1;
    var Dl = typeof so == "object" && so && so.Object === Object && so, Em = typeof self == "object" && self && self.Object === Object && self, jr = Dl || Em || Function("return this")(), Bl = t && !t.nodeType && t, Nr = Bl && !0 && e && !e.nodeType && e, Il = Nr && Nr.exports === Bl, ki = Il && Dl.process, Vl = function() {
      try {
        var m = Nr && Nr.require && Nr.require("util").types;
        return m || ki && ki.binding && ki.binding("util");
      } catch {
      }
    }(), Ll = Vl && Vl.isTypedArray;
    function Mm(m, _, k) {
      switch (k.length) {
        case 0:
          return m.call(_);
        case 1:
          return m.call(_, k[0]);
        case 2:
          return m.call(_, k[0], k[1]);
        case 3:
          return m.call(_, k[0], k[1], k[2]);
      }
      return m.apply(_, k);
    }
    function zm(m, _) {
      for (var k = -1, A = Array(m); ++k < m; )
        A[k] = _(k);
      return A;
    }
    function Dm(m) {
      return function(_) {
        return m(_);
      };
    }
    function Bm(m, _) {
      return m == null ? void 0 : m[_];
    }
    function Im(m, _) {
      return function(k) {
        return m(_(k));
      };
    }
    var Vm = Array.prototype, Lm = Function.prototype, Zn = Object.prototype, Ti = jr["__core-js_shared__"], Jn = Lm.toString, Tt = Zn.hasOwnProperty, Fl = function() {
      var m = /[^.]+$/.exec(Ti && Ti.keys && Ti.keys.IE_PROTO || "");
      return m ? "Symbol(src)_1." + m : "";
    }(), Ol = Zn.toString, Fm = Jn.call(Object), Om = RegExp(
      "^" + Jn.call(Tt).replace(Or, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Qn = Il ? jr.Buffer : void 0, jl = jr.Symbol, Nl = jr.Uint8Array;
    Qn && Qn.allocUnsafe;
    var Wl = Im(Object.getPrototypeOf, Object), Hl = Object.create, jm = Zn.propertyIsEnumerable, Nm = Vm.splice, Dt = jl ? jl.toStringTag : void 0, eo = function() {
      try {
        var m = $i(Object, "defineProperty");
        return m({}, "", {}), m;
      } catch {
      }
    }(), Wm = Qn ? Qn.isBuffer : void 0, Ul = Math.max, Hm = Date.now, ql = $i(jr, "Map"), Wr = $i(Object, "create"), Um = /* @__PURE__ */ function() {
      function m() {
      }
      return function(_) {
        if (!It(_))
          return {};
        if (Hl)
          return Hl(_);
        m.prototype = _;
        var k = new m();
        return m.prototype = void 0, k;
      };
    }();
    function Bt(m) {
      var _ = -1, k = m == null ? 0 : m.length;
      for (this.clear(); ++_ < k; ) {
        var A = m[_];
        this.set(A[0], A[1]);
      }
    }
    function qm() {
      this.__data__ = Wr ? Wr(null) : {}, this.size = 0;
    }
    function Gm(m) {
      var _ = this.has(m) && delete this.__data__[m];
      return this.size -= _ ? 1 : 0, _;
    }
    function Km(m) {
      var _ = this.__data__;
      if (Wr) {
        var k = _[m];
        return k === n ? void 0 : k;
      }
      return Tt.call(_, m) ? _[m] : void 0;
    }
    function Ym(m) {
      var _ = this.__data__;
      return Wr ? _[m] !== void 0 : Tt.call(_, m);
    }
    function Xm(m, _) {
      var k = this.__data__;
      return this.size += this.has(m) ? 0 : 1, k[m] = Wr && _ === void 0 ? n : _, this;
    }
    Bt.prototype.clear = qm, Bt.prototype.delete = Gm, Bt.prototype.get = Km, Bt.prototype.has = Ym, Bt.prototype.set = Xm;
    function lt(m) {
      var _ = -1, k = m == null ? 0 : m.length;
      for (this.clear(); ++_ < k; ) {
        var A = m[_];
        this.set(A[0], A[1]);
      }
    }
    function Zm() {
      this.__data__ = [], this.size = 0;
    }
    function Jm(m) {
      var _ = this.__data__, k = to(_, m);
      if (k < 0)
        return !1;
      var A = _.length - 1;
      return k == A ? _.pop() : Nm.call(_, k, 1), --this.size, !0;
    }
    function Qm(m) {
      var _ = this.__data__, k = to(_, m);
      return k < 0 ? void 0 : _[k][1];
    }
    function eg(m) {
      return to(this.__data__, m) > -1;
    }
    function tg(m, _) {
      var k = this.__data__, A = to(k, m);
      return A < 0 ? (++this.size, k.push([m, _])) : k[A][1] = _, this;
    }
    lt.prototype.clear = Zm, lt.prototype.delete = Jm, lt.prototype.get = Qm, lt.prototype.has = eg, lt.prototype.set = tg;
    function er(m) {
      var _ = -1, k = m == null ? 0 : m.length;
      for (this.clear(); ++_ < k; ) {
        var A = m[_];
        this.set(A[0], A[1]);
      }
    }
    function rg() {
      this.size = 0, this.__data__ = {
        hash: new Bt(),
        map: new (ql || lt)(),
        string: new Bt()
      };
    }
    function ng(m) {
      var _ = no(this, m).delete(m);
      return this.size -= _ ? 1 : 0, _;
    }
    function og(m) {
      return no(this, m).get(m);
    }
    function ig(m) {
      return no(this, m).has(m);
    }
    function sg(m, _) {
      var k = no(this, m), A = k.size;
      return k.set(m, _), this.size += k.size == A ? 0 : 1, this;
    }
    er.prototype.clear = rg, er.prototype.delete = ng, er.prototype.get = og, er.prototype.has = ig, er.prototype.set = sg;
    function tr(m) {
      var _ = this.__data__ = new lt(m);
      this.size = _.size;
    }
    function ag() {
      this.__data__ = new lt(), this.size = 0;
    }
    function lg(m) {
      var _ = this.__data__, k = _.delete(m);
      return this.size = _.size, k;
    }
    function cg(m) {
      return this.__data__.get(m);
    }
    function ug(m) {
      return this.__data__.has(m);
    }
    function dg(m, _) {
      var k = this.__data__;
      if (k instanceof lt) {
        var A = k.__data__;
        if (!ql || A.length < r - 1)
          return A.push([m, _]), this.size = ++k.size, this;
        k = this.__data__ = new er(A);
      }
      return k.set(m, _), this.size = k.size, this;
    }
    tr.prototype.clear = ag, tr.prototype.delete = lg, tr.prototype.get = cg, tr.prototype.has = ug, tr.prototype.set = dg;
    function fg(m, _) {
      var k = Ei(m), A = !k && Ri(m), O = !k && !A && Zl(m), Y = !k && !A && !O && Ql(m), re = k || A || O || Y, j = re ? zm(m.length, String) : [], ne = j.length;
      for (var We in m)
        re && // Safari 9 has enumerable `arguments.length` in strict mode.
        (We == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        O && (We == "offset" || We == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        Y && (We == "buffer" || We == "byteLength" || We == "byteOffset") || // Skip index properties.
        Yl(We, ne)) || j.push(We);
      return j;
    }
    function Ci(m, _, k) {
      (k !== void 0 && !oo(m[_], k) || k === void 0 && !(_ in m)) && Pi(m, _, k);
    }
    function hg(m, _, k) {
      var A = m[_];
      (!(Tt.call(m, _) && oo(A, k)) || k === void 0 && !(_ in m)) && Pi(m, _, k);
    }
    function to(m, _) {
      for (var k = m.length; k--; )
        if (oo(m[k][0], _))
          return k;
      return -1;
    }
    function Pi(m, _, k) {
      _ == "__proto__" && eo ? eo(m, _, {
        configurable: !0,
        enumerable: !0,
        value: k,
        writable: !0
      }) : m[_] = k;
    }
    var pg = Pg();
    function ro(m) {
      return m == null ? m === void 0 ? $ : g : Dt && Dt in Object(m) ? $g(m) : Dg(m);
    }
    function Gl(m) {
      return Hr(m) && ro(m) == a;
    }
    function mg(m) {
      if (!It(m) || Mg(m))
        return !1;
      var _ = zi(m) ? Om : Am;
      return _.test(Lg(m));
    }
    function gg(m) {
      return Hr(m) && Jl(m.length) && !!ee[ro(m)];
    }
    function yg(m) {
      if (!It(m))
        return zg(m);
      var _ = Xl(m), k = [];
      for (var A in m)
        A == "constructor" && (_ || !Tt.call(m, A)) || k.push(A);
      return k;
    }
    function Kl(m, _, k, A, O) {
      m !== _ && pg(_, function(Y, re) {
        if (O || (O = new tr()), It(Y))
          bg(m, _, re, k, Kl, A, O);
        else {
          var j = A ? A(Ai(m, re), Y, re + "", m, _, O) : void 0;
          j === void 0 && (j = Y), Ci(m, re, j);
        }
      }, ec);
    }
    function bg(m, _, k, A, O, Y, re) {
      var j = Ai(m, k), ne = Ai(_, k), We = re.get(ne);
      if (We) {
        Ci(m, k, We);
        return;
      }
      var Me = Y ? Y(j, ne, k + "", m, _, re) : void 0, Ur = Me === void 0;
      if (Ur) {
        var Di = Ei(ne), Bi = !Di && Zl(ne), rc = !Di && !Bi && Ql(ne);
        Me = ne, Di || Bi || rc ? Ei(j) ? Me = j : Fg(j) ? Me = kg(j) : Bi ? (Ur = !1, Me = Sg(ne)) : rc ? (Ur = !1, Me = wg(ne)) : Me = [] : Og(ne) || Ri(ne) ? (Me = j, Ri(j) ? Me = jg(j) : (!It(j) || zi(j)) && (Me = Ag(ne))) : Ur = !1;
      }
      Ur && (re.set(ne, Me), O(Me, ne, A, Y, re), re.delete(ne)), Ci(m, k, Me);
    }
    function vg(m, _) {
      return Ig(Bg(m, _, tc), m + "");
    }
    var _g = eo ? function(m, _) {
      return eo(m, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Wg(_),
        writable: !0
      });
    } : tc;
    function Sg(m, _) {
      return m.slice();
    }
    function xg(m) {
      var _ = new m.constructor(m.byteLength);
      return new Nl(_).set(new Nl(m)), _;
    }
    function wg(m, _) {
      var k = xg(m.buffer);
      return new m.constructor(k, m.byteOffset, m.length);
    }
    function kg(m, _) {
      var k = -1, A = m.length;
      for (_ || (_ = Array(A)); ++k < A; )
        _[k] = m[k];
      return _;
    }
    function Tg(m, _, k, A) {
      var O = !k;
      k || (k = {});
      for (var Y = -1, re = _.length; ++Y < re; ) {
        var j = _[Y], ne = void 0;
        ne === void 0 && (ne = m[j]), O ? Pi(k, j, ne) : hg(k, j, ne);
      }
      return k;
    }
    function Cg(m) {
      return vg(function(_, k) {
        var A = -1, O = k.length, Y = O > 1 ? k[O - 1] : void 0, re = O > 2 ? k[2] : void 0;
        for (Y = m.length > 3 && typeof Y == "function" ? (O--, Y) : void 0, re && Rg(k[0], k[1], re) && (Y = O < 3 ? void 0 : Y, O = 1), _ = Object(_); ++A < O; ) {
          var j = k[A];
          j && m(_, j, A, Y);
        }
        return _;
      });
    }
    function Pg(m) {
      return function(_, k, A) {
        for (var O = -1, Y = Object(_), re = A(_), j = re.length; j--; ) {
          var ne = re[++O];
          if (k(Y[ne], ne, Y) === !1)
            break;
        }
        return _;
      };
    }
    function no(m, _) {
      var k = m.__data__;
      return Eg(_) ? k[typeof _ == "string" ? "string" : "hash"] : k.map;
    }
    function $i(m, _) {
      var k = Bm(m, _);
      return mg(k) ? k : void 0;
    }
    function $g(m) {
      var _ = Tt.call(m, Dt), k = m[Dt];
      try {
        m[Dt] = void 0;
        var A = !0;
      } catch {
      }
      var O = Ol.call(m);
      return A && (_ ? m[Dt] = k : delete m[Dt]), O;
    }
    function Ag(m) {
      return typeof m.constructor == "function" && !Xl(m) ? Um(Wl(m)) : {};
    }
    function Yl(m, _) {
      var k = typeof m;
      return _ = _ ?? s, !!_ && (k == "number" || k != "symbol" && Rm.test(m)) && m > -1 && m % 1 == 0 && m < _;
    }
    function Rg(m, _, k) {
      if (!It(k))
        return !1;
      var A = typeof _;
      return (A == "number" ? Mi(k) && Yl(_, k.length) : A == "string" && _ in k) ? oo(k[_], m) : !1;
    }
    function Eg(m) {
      var _ = typeof m;
      return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? m !== "__proto__" : m === null;
    }
    function Mg(m) {
      return !!Fl && Fl in m;
    }
    function Xl(m) {
      var _ = m && m.constructor, k = typeof _ == "function" && _.prototype || Zn;
      return m === k;
    }
    function zg(m) {
      var _ = [];
      if (m != null)
        for (var k in Object(m))
          _.push(k);
      return _;
    }
    function Dg(m) {
      return Ol.call(m);
    }
    function Bg(m, _, k) {
      return _ = Ul(_ === void 0 ? m.length - 1 : _, 0), function() {
        for (var A = arguments, O = -1, Y = Ul(A.length - _, 0), re = Array(Y); ++O < Y; )
          re[O] = A[_ + O];
        O = -1;
        for (var j = Array(_ + 1); ++O < _; )
          j[O] = A[O];
        return j[_] = k(re), Mm(m, this, j);
      };
    }
    function Ai(m, _) {
      if (!(_ === "constructor" && typeof m[_] == "function") && _ != "__proto__")
        return m[_];
    }
    var Ig = Vg(_g);
    function Vg(m) {
      var _ = 0, k = 0;
      return function() {
        var A = Hm(), O = i - (A - k);
        if (k = A, O > 0) {
          if (++_ >= o)
            return arguments[0];
        } else
          _ = 0;
        return m.apply(void 0, arguments);
      };
    }
    function Lg(m) {
      if (m != null) {
        try {
          return Jn.call(m);
        } catch {
        }
        try {
          return m + "";
        } catch {
        }
      }
      return "";
    }
    function oo(m, _) {
      return m === _ || m !== m && _ !== _;
    }
    var Ri = Gl(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Gl : function(m) {
      return Hr(m) && Tt.call(m, "callee") && !jm.call(m, "callee");
    }, Ei = Array.isArray;
    function Mi(m) {
      return m != null && Jl(m.length) && !zi(m);
    }
    function Fg(m) {
      return Hr(m) && Mi(m);
    }
    var Zl = Wm || Hg;
    function zi(m) {
      if (!It(m))
        return !1;
      var _ = ro(m);
      return _ == h || _ == p || _ == c || _ == x;
    }
    function Jl(m) {
      return typeof m == "number" && m > -1 && m % 1 == 0 && m <= s;
    }
    function It(m) {
      var _ = typeof m;
      return m != null && (_ == "object" || _ == "function");
    }
    function Hr(m) {
      return m != null && typeof m == "object";
    }
    function Og(m) {
      if (!Hr(m) || ro(m) != S)
        return !1;
      var _ = Wl(m);
      if (_ === null)
        return !0;
      var k = Tt.call(_, "constructor") && _.constructor;
      return typeof k == "function" && k instanceof k && Jn.call(k) == Fm;
    }
    var Ql = Ll ? Dm(Ll) : gg;
    function jg(m) {
      return Tg(m, ec(m));
    }
    function ec(m) {
      return Mi(m) ? fg(m) : yg(m);
    }
    var Ng = Cg(function(m, _, k, A) {
      Kl(m, _, k, A);
    });
    function Wg(m) {
      return function() {
        return m;
      };
    }
    function tc(m) {
      return m;
    }
    function Hg() {
      return !1;
    }
    e.exports = Ng;
  }(en, en.exports)), en.exports;
}
var eb = Q0();
const Oe = /* @__PURE__ */ Mf(eb);
function tb(e, t = []) {
  const r = ue(e);
  return le(() => {
    r.current = e;
  }), Re((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
const Es = globalThis != null && globalThis.document ? je : le, zc = (e, t) => {
  const r = ue(!1), n = ue(!1);
  le(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), le(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
};
function rb(e, t) {
  const r = tb(e);
  le(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
const me = {
  open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
  closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, Xe = (e) => eh((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), ct = (e) => eh((t) => e(t, "~ &"), "[data-peer]", ".peer"), eh = (e, ...t) => t.map(e).join(", "), gr = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within, &[data-focus-within]",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty, &[data-empty]",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is open
   */
  _groupOpen: Xe(me.open),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is closed
   */
  _groupClosed: Xe(me.closed),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Xe(me.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: ct(me.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Xe(me.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: ct(me.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Xe(me.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: ct(me.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Xe(me.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: ct(me.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Xe(me.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: ct(me.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Xe(me.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: ct(me.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Xe(me.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: ct(me.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Xe(me.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: ct(me.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: ct(me.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder, &[data-placeholder]",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen, &[data-fullscreen]",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]",
  /**
   * Styles for the CSS Selector `&[data-open], &[open], &[data-state=open]`
   */
  _open: "&[data-open], &[open], &[data-state=open]",
  /**
   * Styles for the CSS Selector `&[data-closed], &[data-state=closed]`
   */
  _closed: "&[data-closed], &[data-state=closed]",
  /**
   * Styles for the CSS Selector `&[data-complete]`
   */
  _complete: "&[data-complete]",
  /**
   * Styles for the CSS Selector `&[data-incomplete]`
   */
  _incomplete: "&[data-incomplete]",
  /**
   * Styles for the CSS Selector `&[data-current]`
   */
  _current: "&[data-current]"
}, th = Object.keys(
  gr
), nb = (e) => /!(important)?$/.test(e), Dc = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ob = (e, t) => (r) => {
  const n = String(t), o = nb(n), i = Dc(n), s = e ? `${e}.${i}` : i;
  let a = Ae(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].varRef : t;
  return a = Dc(a), o ? `${a} !important` : a;
};
function Ra(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, s) => {
    const a = ob(t, i)(s);
    let l = (r == null ? void 0 : r(a, s)) ?? a;
    return n && (l = n(l, s)), l;
  };
}
const lo = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Ie(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Ra({
      scale: e,
      transform: t
    }), n;
  };
}
const ib = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function sb(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: ib(t),
    transform: r ? Ra({
      scale: r,
      compose: n
    }) : n
  };
}
const rh = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ab() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...rh
  ].join(" ");
}
function lb() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...rh
  ].join(" ");
}
const cb = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, ub = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function db(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
const fb = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Ms = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, hb = new Set(Object.values(Ms)), zs = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), pb = (e) => e.trim();
function mb(e, t) {
  if (e == null || zs.has(e))
    return e;
  if (!(Ds(e) || zs.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], s = o == null ? void 0 : o[2];
  if (!i || !s)
    return e;
  const a = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...c] = s.split(",").map(pb).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const d = l in Ms ? Ms[l] : l;
  c.unshift(d);
  const u = c.map((f) => {
    if (hb.has(f))
      return f;
    const h = f.indexOf(" "), [p, y] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f], b = Ds(y) ? y : y && y.split(" "), g = `colors.${p}`, S = g in t.__cssMap ? t.__cssMap[g].varRef : p;
    return b ? [
      S,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : S;
  });
  return `${a}(${u.join(", ")})`;
}
const Ds = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), gb = (e, t) => mb(e, t ?? {});
function yb(e) {
  return /^var\(--.+\)$/.test(e);
}
const bb = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Ze = (e) => (t) => `${e}(${t})`, L = {
  filter(e) {
    return e !== "auto" ? e : cb;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : ub;
  },
  ring(e) {
    return db(L.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ab() : e === "auto-gpu" ? lb() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = bb(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (yb(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: gb,
  blur: Ze("blur"),
  opacity: Ze("opacity"),
  brightness: Ze("brightness"),
  contrast: Ze("contrast"),
  dropShadow: Ze("drop-shadow"),
  grayscale: Ze("grayscale"),
  hueRotate: (e) => Ze("hue-rotate")(L.degree(e)),
  invert: Ze("invert"),
  saturate: Ze("saturate"),
  sepia: Ze("sepia"),
  bgImage(e) {
    return e == null || Ds(e) || zs.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    const { space: t, divide: r } = fb[e] ?? {}, n = { flexDirection: e };
    return t && (n[t] = 1), r && (n[r] = 1), n;
  }
}, v = {
  borderWidths: Ie("borderWidths"),
  borderStyles: Ie("borderStyles"),
  colors: Ie("colors"),
  borders: Ie("borders"),
  gradients: Ie("gradients", L.gradient),
  radii: Ie("radii", L.px),
  space: Ie("space", lo(L.vh, L.px)),
  spaceT: Ie("space", lo(L.vh, L.px)),
  degreeT(e) {
    return { property: e, transform: L.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Ra({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Ie("sizes", lo(L.vh, L.px)),
  sizesT: Ie("sizes", lo(L.vh, L.fraction)),
  shadows: Ie("shadows"),
  logical: sb,
  blur: Ie("blur", L.blur)
}, To = {
  background: v.colors("background"),
  backgroundColor: v.colors("backgroundColor"),
  backgroundImage: v.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: L.bgClip },
  bgSize: v.prop("backgroundSize"),
  bgPosition: v.prop("backgroundPosition"),
  bg: v.colors("background"),
  bgColor: v.colors("backgroundColor"),
  bgPos: v.prop("backgroundPosition"),
  bgRepeat: v.prop("backgroundRepeat"),
  bgAttachment: v.prop("backgroundAttachment"),
  bgGradient: v.gradients("backgroundImage"),
  bgClip: { transform: L.bgClip }
};
Object.assign(To, {
  bgImage: To.backgroundImage,
  bgImg: To.backgroundImage
});
const N = {
  border: v.borders("border"),
  borderWidth: v.borderWidths("borderWidth"),
  borderStyle: v.borderStyles("borderStyle"),
  borderColor: v.colors("borderColor"),
  borderRadius: v.radii("borderRadius"),
  borderTop: v.borders("borderTop"),
  borderBlockStart: v.borders("borderBlockStart"),
  borderTopLeftRadius: v.radii("borderTopLeftRadius"),
  borderStartStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: v.radii("borderTopRightRadius"),
  borderStartEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: v.borders("borderRight"),
  borderInlineEnd: v.borders("borderInlineEnd"),
  borderBottom: v.borders("borderBottom"),
  borderBlockEnd: v.borders("borderBlockEnd"),
  borderBottomLeftRadius: v.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: v.radii("borderBottomRightRadius"),
  borderLeft: v.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: v.borders(["borderLeft", "borderRight"]),
  borderInline: v.borders("borderInline"),
  borderY: v.borders(["borderTop", "borderBottom"]),
  borderBlock: v.borders("borderBlock"),
  borderTopWidth: v.borderWidths("borderTopWidth"),
  borderBlockStartWidth: v.borderWidths("borderBlockStartWidth"),
  borderTopColor: v.colors("borderTopColor"),
  borderBlockStartColor: v.colors("borderBlockStartColor"),
  borderTopStyle: v.borderStyles("borderTopStyle"),
  borderBlockStartStyle: v.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: v.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: v.borderWidths("borderBlockEndWidth"),
  borderBottomColor: v.colors("borderBottomColor"),
  borderBlockEndColor: v.colors("borderBlockEndColor"),
  borderBottomStyle: v.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: v.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: v.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: v.borderWidths("borderInlineStartWidth"),
  borderLeftColor: v.colors("borderLeftColor"),
  borderInlineStartColor: v.colors("borderInlineStartColor"),
  borderLeftStyle: v.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: v.borderStyles("borderInlineStartStyle"),
  borderRightWidth: v.borderWidths("borderRightWidth"),
  borderInlineEndWidth: v.borderWidths("borderInlineEndWidth"),
  borderRightColor: v.colors("borderRightColor"),
  borderInlineEndColor: v.colors("borderInlineEndColor"),
  borderRightStyle: v.borderStyles("borderRightStyle"),
  borderInlineEndStyle: v.borderStyles("borderInlineEndStyle"),
  borderTopRadius: v.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: v.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: v.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: v.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(N, {
  rounded: N.borderRadius,
  roundedTop: N.borderTopRadius,
  roundedTopLeft: N.borderTopLeftRadius,
  roundedTopRight: N.borderTopRightRadius,
  roundedTopStart: N.borderStartStartRadius,
  roundedTopEnd: N.borderStartEndRadius,
  roundedBottom: N.borderBottomRadius,
  roundedBottomLeft: N.borderBottomLeftRadius,
  roundedBottomRight: N.borderBottomRightRadius,
  roundedBottomStart: N.borderEndStartRadius,
  roundedBottomEnd: N.borderEndEndRadius,
  roundedLeft: N.borderLeftRadius,
  roundedRight: N.borderRightRadius,
  roundedStart: N.borderInlineStartRadius,
  roundedEnd: N.borderInlineEndRadius,
  borderStart: N.borderInlineStart,
  borderEnd: N.borderInlineEnd,
  borderTopStartRadius: N.borderStartStartRadius,
  borderTopEndRadius: N.borderStartEndRadius,
  borderBottomStartRadius: N.borderEndStartRadius,
  borderBottomEndRadius: N.borderEndEndRadius,
  borderStartRadius: N.borderInlineStartRadius,
  borderEndRadius: N.borderInlineEndRadius,
  borderStartWidth: N.borderInlineStartWidth,
  borderEndWidth: N.borderInlineEndWidth,
  borderStartColor: N.borderInlineStartColor,
  borderEndColor: N.borderInlineEndColor,
  borderStartStyle: N.borderInlineStartStyle,
  borderEndStyle: N.borderInlineEndStyle
});
const vb = {
  color: v.colors("color"),
  textColor: v.colors("color"),
  fill: v.colors("fill"),
  stroke: v.colors("stroke"),
  accentColor: v.colors("accentColor"),
  textFillColor: v.colors("textFillColor")
}, Wo = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: L.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: v.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: v.space("gap"),
  rowGap: v.space("rowGap"),
  columnGap: v.space("columnGap")
};
Object.assign(Wo, {
  flexDir: Wo.flexDirection
});
const Le = {
  width: v.sizesT("width"),
  inlineSize: v.sizesT("inlineSize"),
  height: v.sizes("height"),
  blockSize: v.sizes("blockSize"),
  boxSize: v.sizes(["width", "height"]),
  minWidth: v.sizes("minWidth"),
  minInlineSize: v.sizes("minInlineSize"),
  minHeight: v.sizes("minHeight"),
  minBlockSize: v.sizes("minBlockSize"),
  maxWidth: v.sizes("maxWidth"),
  maxInlineSize: v.sizes("maxInlineSize"),
  maxHeight: v.sizes("maxHeight"),
  maxBlockSize: v.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return { [`@media screen and (min-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i.minW) ?? e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return { [`@media screen and (max-width: ${((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null ? void 0 : i._minW) ?? e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: v.propT("float", L.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Le, {
  w: Le.width,
  h: Le.height,
  minW: Le.minWidth,
  maxW: Le.maxWidth,
  minH: Le.minHeight,
  maxH: Le.maxHeight,
  overscroll: Le.overscrollBehavior,
  overscrollX: Le.overscrollBehaviorX,
  overscrollY: Le.overscrollBehaviorY
});
const _b = {
  filter: { transform: L.filter },
  blur: v.blur("--chakra-blur"),
  brightness: v.propT("--chakra-brightness", L.brightness),
  contrast: v.propT("--chakra-contrast", L.contrast),
  hueRotate: v.propT("--chakra-hue-rotate", L.hueRotate),
  invert: v.propT("--chakra-invert", L.invert),
  saturate: v.propT("--chakra-saturate", L.saturate),
  dropShadow: v.propT("--chakra-drop-shadow", L.dropShadow),
  backdropFilter: { transform: L.backdropFilter },
  backdropBlur: v.blur("--chakra-backdrop-blur"),
  backdropBrightness: v.propT(
    "--chakra-backdrop-brightness",
    L.brightness
  ),
  backdropContrast: v.propT("--chakra-backdrop-contrast", L.contrast),
  backdropHueRotate: v.propT(
    "--chakra-backdrop-hue-rotate",
    L.hueRotate
  ),
  backdropInvert: v.propT("--chakra-backdrop-invert", L.invert),
  backdropSaturate: v.propT("--chakra-backdrop-saturate", L.saturate)
}, Sb = {
  ring: { transform: L.ring },
  ringColor: v.colors("--chakra-ring-color"),
  ringOffset: v.prop("--chakra-ring-offset-width"),
  ringOffsetColor: v.colors("--chakra-ring-offset-color"),
  ringInset: v.prop("--chakra-ring-inset")
}, xb = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: L.outline },
  outlineOffset: !0,
  outlineColor: v.colors("outlineColor")
}, nh = {
  gridGap: v.space("gridGap"),
  gridColumnGap: v.space("gridColumnGap"),
  gridRowGap: v.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
};
function wb(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
const kb = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, s) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const a = t.get(n);
    if (a.has(o))
      return a.get(o);
    const l = e(n, o, i, s);
    return a.set(o, l), l;
  };
}, Tb = kb(wb), Cb = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Pb = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Oi = (e, t, r) => {
  const n = {}, o = Tb(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, $b = {
  srOnly: {
    transform(e) {
      return e === !0 ? Cb : e === "focusable" ? Pb : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Oi(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Oi(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Oi(t, e, r)
  }
}, un = {
  position: !0,
  pos: v.prop("position"),
  zIndex: v.prop("zIndex", "zIndices"),
  inset: v.spaceT("inset"),
  insetX: v.spaceT(["left", "right"]),
  insetInline: v.spaceT("insetInline"),
  insetY: v.spaceT(["top", "bottom"]),
  insetBlock: v.spaceT("insetBlock"),
  top: v.spaceT("top"),
  insetBlockStart: v.spaceT("insetBlockStart"),
  bottom: v.spaceT("bottom"),
  insetBlockEnd: v.spaceT("insetBlockEnd"),
  left: v.spaceT("left"),
  insetInlineStart: v.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: v.spaceT("right"),
  insetInlineEnd: v.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(un, {
  insetStart: un.insetInlineStart,
  insetEnd: un.insetInlineEnd
});
const Bs = {
  boxShadow: v.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: v.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: v.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Bs, {
  shadow: Bs.boxShadow
});
const te = {
  margin: v.spaceT("margin"),
  marginTop: v.spaceT("marginTop"),
  marginBlockStart: v.spaceT("marginBlockStart"),
  marginRight: v.spaceT("marginRight"),
  marginInlineEnd: v.spaceT("marginInlineEnd"),
  marginBottom: v.spaceT("marginBottom"),
  marginBlockEnd: v.spaceT("marginBlockEnd"),
  marginLeft: v.spaceT("marginLeft"),
  marginInlineStart: v.spaceT("marginInlineStart"),
  marginX: v.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: v.spaceT("marginInline"),
  marginY: v.spaceT(["marginTop", "marginBottom"]),
  marginBlock: v.spaceT("marginBlock"),
  padding: v.space("padding"),
  paddingTop: v.space("paddingTop"),
  paddingBlockStart: v.space("paddingBlockStart"),
  paddingRight: v.space("paddingRight"),
  paddingBottom: v.space("paddingBottom"),
  paddingBlockEnd: v.space("paddingBlockEnd"),
  paddingLeft: v.space("paddingLeft"),
  paddingInlineStart: v.space("paddingInlineStart"),
  paddingInlineEnd: v.space("paddingInlineEnd"),
  paddingX: v.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: v.space("paddingInline"),
  paddingY: v.space(["paddingTop", "paddingBottom"]),
  paddingBlock: v.space("paddingBlock")
};
Object.assign(te, {
  m: te.margin,
  mt: te.marginTop,
  mr: te.marginRight,
  me: te.marginInlineEnd,
  marginEnd: te.marginInlineEnd,
  mb: te.marginBottom,
  ml: te.marginLeft,
  ms: te.marginInlineStart,
  marginStart: te.marginInlineStart,
  mx: te.marginX,
  my: te.marginY,
  p: te.padding,
  pt: te.paddingTop,
  py: te.paddingY,
  px: te.paddingX,
  pb: te.paddingBottom,
  pl: te.paddingLeft,
  ps: te.paddingInlineStart,
  paddingStart: te.paddingInlineStart,
  pr: te.paddingRight,
  pe: te.paddingInlineEnd,
  paddingEnd: te.paddingInlineEnd
});
const Ab = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: v.spaceT("scrollMargin"),
  scrollMarginTop: v.spaceT("scrollMarginTop"),
  scrollMarginBottom: v.spaceT("scrollMarginBottom"),
  scrollMarginLeft: v.spaceT("scrollMarginLeft"),
  scrollMarginRight: v.spaceT("scrollMarginRight"),
  scrollMarginX: v.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: v.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: v.spaceT("scrollPadding"),
  scrollPaddingTop: v.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: v.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: v.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: v.spaceT("scrollPaddingRight"),
  scrollPaddingX: v.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: v.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
}, Rb = {
  fontFamily: v.prop("fontFamily", "fonts"),
  fontSize: v.prop("fontSize", "fontSizes", L.px),
  fontWeight: v.prop("fontWeight", "fontWeights"),
  lineHeight: v.prop("lineHeight", "lineHeights"),
  letterSpacing: v.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Eb = {
  textDecorationColor: v.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: v.shadows("textShadow")
}, Mb = {
  clipPath: !0,
  transform: v.propT("transform", L.transform),
  transformOrigin: !0,
  translateX: v.spaceT("--chakra-translate-x"),
  translateY: v.spaceT("--chakra-translate-y"),
  skewX: v.degreeT("--chakra-skew-x"),
  skewY: v.degreeT("--chakra-skew-y"),
  scaleX: v.prop("--chakra-scale-x"),
  scaleY: v.prop("--chakra-scale-y"),
  scale: v.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: v.degreeT("--chakra-rotate")
}, zb = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: v.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: v.prop("listStyleImage")
}, Db = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: v.prop("transitionDuration", "transition.duration"),
  transitionProperty: v.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: v.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Ea = Oe(
  {},
  To,
  N,
  vb,
  Wo,
  Le,
  _b,
  Sb,
  xb,
  nh,
  $b,
  un,
  Bs,
  te,
  Ab,
  Rb,
  Eb,
  Mb,
  zb,
  Db
);
Object.assign({}, te, Le, Wo, nh, un);
const Bb = [...Object.keys(Ea), ...th], Ib = { ...Ea, ...gr }, Vb = (e) => e in Ib, Lb = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const s in e) {
    let a = rt(e[s], t);
    if (a == null)
      continue;
    if (a = Ae(a) && r(a) ? n(a) : a, !Array.isArray(a)) {
      i[s] = a;
      continue;
    }
    const l = a.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const d = o == null ? void 0 : o[c];
      if (!d) {
        i[s] = a[c];
        continue;
      }
      i[d] = i[d] || {}, a[c] != null && (i[d][s] = a[c]);
    }
  }
  return i;
};
function Fb(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Ob(e) {
  return /^var\(--.+\)$/.test(e);
}
const jb = (e, t) => e.startsWith("--") && typeof t == "string" && !Ob(t), Nb = (e, t) => {
  if (t == null)
    return t;
  const r = (s) => {
    var a, l;
    return (l = (a = e.__cssMap) == null ? void 0 : a[s]) == null ? void 0 : l.varRef;
  }, n = (s) => r(s) ?? s, [o, i] = Fb(t);
  return t = r(o) ?? n(i) ?? n(t), t;
};
function Wb(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, s = !1) => {
    var d;
    const a = rt(i, n), l = Lb(a)(n);
    let c = {};
    for (let u in l) {
      const f = l[u];
      let h = rt(f, n);
      u in r && (u = r[u]), jb(u, h) && (h = Nb(n, h));
      let p = t[u];
      if (p === !0 && (p = { property: u }), Ae(h)) {
        c[u] = c[u] ?? {}, c[u] = Oe(
          {},
          c[u],
          o(h, !0)
        );
        continue;
      }
      let y = ((d = p == null ? void 0 : p.transform) == null ? void 0 : d.call(p, h, n, a)) ?? h;
      y = p != null && p.processResult ? o(y, !0) : y;
      const b = rt(p == null ? void 0 : p.property, n);
      if (!s && (p != null && p.static)) {
        const g = rt(p.static, n);
        c = Oe({}, c, g);
      }
      if (b && Array.isArray(b)) {
        for (const g of b)
          c[g] = y;
        continue;
      }
      if (b) {
        b === "&" && Ae(y) ? c = Oe({}, c, y) : c[b] = y;
        continue;
      }
      if (Ae(y)) {
        c = Oe({}, c, y);
        continue;
      }
      c[u] = y;
    }
    return c;
  };
  return o;
}
const oh = (e) => (t) => Wb({
  theme: t,
  pseudos: gr,
  configs: Ea
})(e);
function mR(e) {
  return e;
}
function Q(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Hb(e, t) {
  if (Array.isArray(e))
    return e;
  if (Ae(e))
    return t(e);
  if (e != null)
    return [e];
}
function Ub(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function qb(e) {
  const t = e.__breakpoints;
  return function(n, o, i, s) {
    var f, h;
    if (!t)
      return;
    const a = {}, l = Hb(i, t.toArrayValue);
    if (!l)
      return a;
    const c = l.length, d = c === 1, u = !!n.parts;
    for (let p = 0; p < c; p++) {
      const y = t.details[p], b = t.details[Ub(l, p)], g = Qr(y.minW, b == null ? void 0 : b._minW), S = rt((f = n[o]) == null ? void 0 : f[l[p]], s);
      if (S) {
        if (u) {
          (h = n.parts) == null || h.forEach((x) => {
            Oe(a, {
              [x]: d ? S[x] : { [g]: S[x] }
            });
          });
          continue;
        }
        if (!u) {
          d ? Oe(a, S) : a[g] = S;
          continue;
        }
        a[g] = S;
      }
    }
    return a;
  };
}
function Gb(e) {
  return (t) => {
    const { variant: r, size: n, theme: o } = t, i = qb(o);
    return Oe(
      {},
      rt(e.baseStyle ?? {}, t),
      i(e, "sizes", n, t),
      i(e, "variants", r, t)
    );
  };
}
function Ma(e) {
  return Qf(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function ih(e) {
  return Ae(e) && e.reference ? e.reference : String(e);
}
const ui = (e, ...t) => t.map(ih).join(` ${e} `).replace(/calc/g, ""), Bc = (...e) => `calc(${ui("+", ...e)})`, Ic = (...e) => `calc(${ui("-", ...e)})`, Is = (...e) => `calc(${ui("*", ...e)})`, Vc = (...e) => `calc(${ui("/", ...e)})`, Lc = (e) => {
  const t = ih(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Is(t, -1);
}, ut = Object.assign(
  (e) => ({
    add: (...t) => ut(Bc(e, ...t)),
    subtract: (...t) => ut(Ic(e, ...t)),
    multiply: (...t) => ut(Is(e, ...t)),
    divide: (...t) => ut(Vc(e, ...t)),
    negate: () => ut(Lc(e)),
    toString: () => e.toString()
  }),
  {
    add: Bc,
    subtract: Ic,
    multiply: Is,
    divide: Vc,
    negate: Lc
  }
);
function Kb(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Yb(e) {
  const t = Kb(e.toString());
  return Zb(Xb(t));
}
function Xb(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Zb(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Jb(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Qb(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function ev(e, t = "") {
  return Yb(`--${Jb(e, t)}`);
}
function z(e, t, r) {
  const n = ev(e, r);
  return {
    variable: n,
    reference: Qb(n, t)
  };
}
function tv(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = z(`${e}-${o}`, i);
      continue;
    }
    r[n] = z(`${e}-${n}`);
  }
  return r;
}
const rv = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function nv(e) {
  return X0(e, rv);
}
function ov(e) {
  return e.semanticTokens;
}
function iv(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
function sv(e) {
  const t = nv(e), r = ov(e), n = (i) => (
    // @ts-ignore
    th.includes(i) || i === "default"
  ), o = {};
  return Ec(t, (i, s) => {
    i != null && (o[s.join(".")] = { isSemantic: !1, value: i });
  }), Ec(
    r,
    (i, s) => {
      i != null && (o[s.join(".")] = { isSemantic: !0, value: i });
    },
    {
      stop: (i) => Object.keys(i).every(n)
    }
  ), o;
}
function Fc(e, t) {
  return z(String(e).replace(/\./g, "-"), void 0, t);
}
function av(e) {
  var s;
  const t = sv(e), r = (s = e.config) == null ? void 0 : s.cssVarPrefix;
  let n = {};
  const o = {};
  function i(a, l) {
    const d = [String(a).split(".")[0], l].join(".");
    if (!t[d])
      return l;
    const { reference: f } = Fc(d, r);
    return f;
  }
  for (const [a, l] of Object.entries(t)) {
    const { isSemantic: c, value: d } = l, { variable: u, reference: f } = Fc(a, r);
    if (!c) {
      if (a.startsWith("space")) {
        const p = a.split("."), [y, ...b] = p, g = `${y}.-${b.join(".")}`, S = ut.negate(d), x = ut.negate(f);
        o[g] = {
          value: S,
          var: u,
          varRef: x
        };
      }
      n[u] = d, o[a] = {
        value: d,
        var: u,
        varRef: f
      };
      continue;
    }
    const h = Ae(d) ? d : { default: d };
    n = Oe(
      n,
      Object.entries(h).reduce(
        (p, [y, b]) => {
          if (!b)
            return p;
          const g = i(a, `${b}`);
          if (y === "default")
            return p[u] = g, p;
          const S = (gr == null ? void 0 : gr[y]) ?? y;
          return p[S] = { [u]: g }, p;
        },
        {}
      )
    ), o[a] = {
      value: f,
      var: u,
      varRef: f
    };
  }
  return {
    cssVars: n,
    cssMap: o
  };
}
function lv(e) {
  const t = iv(e), {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: r,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: n
  } = av(t);
  return Object.assign(t, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...n },
    __cssMap: r,
    __breakpoints: U0(t.breakpoints)
  }), t;
}
function q(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...d) {
    n();
    for (const u of d)
      t[u] = l(u);
    return q(e, t);
  }
  function i(...d) {
    for (const u of d)
      u in t || (t[u] = l(u));
    return q(e, t);
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([u, f]) => [u, f.selector])
    );
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([u, f]) => [u, f.className])
    );
  }
  function l(d) {
    const h = `chakra-${(["container", "root"].includes(d ?? "") ? [e] : [e, d]).filter(Boolean).join("__")}`;
    return {
      className: h,
      selector: `.${h}`,
      toString: () => d
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
const cv = q("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
), uv = q("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
), dv = q("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
), fv = q("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
q("button").parts();
const hv = q("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
q("progress").parts(
  "track",
  "filledTrack",
  "label"
);
const pv = q("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), mv = q("editable").parts(
  "preview",
  "input",
  "textarea"
), gv = q("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), yv = q("formError").parts("text", "icon"), bv = q("input").parts(
  "addon",
  "field",
  "element",
  "group"
), vv = q("list").parts("container", "item", "icon"), _v = q("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
), Sv = q("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
), xv = q("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
q("pininput").parts("field");
const wv = q("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
), kv = q("progress").parts(
  "label",
  "filledTrack",
  "track"
), Tv = q("radio").parts(
  "container",
  "control",
  "label"
), Cv = q("select").parts("field", "icon"), Pv = q("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), $v = q("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Av = q("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), Rv = q("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), Ev = q("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Mv = q("tag").parts(
  "container",
  "label",
  "closeButton"
), zv = q("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
q("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: Dv, defineMultiStyleConfig: Bv } = Q(cv.keys), Iv = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, Vv = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, Lv = {
  pt: "2",
  px: "4",
  pb: "5"
}, Fv = {
  fontSize: "1.25em"
}, Ov = Dv({
  container: Iv,
  button: Vv,
  panel: Lv,
  icon: Fv
}), jv = Bv({ baseStyle: Ov });
function jt(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class Nv extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var tn = Nv;
function za(e) {
  if (typeof e != "string") throw new tn(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = Xv.test(e) ? Uv(e) : e;
  const r = qv.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(wn(a, 2), 16)), parseInt(wn(s[3] || "f", 2), 16) / 255];
  }
  const n = Gv.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 16)), parseInt(s[3] || "ff", 16) / 255];
  }
  const o = Kv.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [...s.slice(0, 3).map((a) => parseInt(a, 10)), parseFloat(s[3] || "1")];
  }
  const i = Yv.exec(t);
  if (i) {
    const [s, a, l, c] = Array.from(i).slice(1).map(parseFloat);
    if (jt(0, 100, a) !== a) throw new tn(e);
    if (jt(0, 100, l) !== l) throw new tn(e);
    return [...Zv(s, a, l), Number.isNaN(c) ? 1 : c];
  }
  throw new tn(e);
}
function Wv(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Oc = (e) => parseInt(e.replace(/_/g, ""), 36), Hv = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Oc(t.substring(0, 3)), n = Oc(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function Uv(e) {
  const t = e.toLowerCase().trim(), r = Hv[Wv(t)];
  if (!r) throw new tn(e);
  return `#${r}`;
}
const wn = (e, t) => Array.from(Array(t)).map(() => e).join(""), qv = new RegExp(`^#${wn("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Gv = new RegExp(`^#${wn("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Kv = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${wn(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Yv = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Xv = /^[a-z]+$/i, jc = (e) => Math.round(e * 255), Zv = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(jc);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), s = i * (1 - Math.abs(o % 2 - 1));
  let a = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
  const d = n - i / 2, u = a + d, f = l + d, h = c + d;
  return [u, f, h].map(jc);
};
function Jv(e, t, r, n) {
  return `rgba(${jt(0, 255, e).toFixed()}, ${jt(0, 255, t).toFixed()}, ${jt(0, 255, r).toFixed()}, ${parseFloat(jt(0, 1, n).toFixed(3))})`;
}
function Qv(e, t) {
  const [r, n, o, i] = za(e);
  return Jv(r, n, o, i - t);
}
function e_(e) {
  const [t, r, n, o] = za(e);
  let i = (s) => {
    const a = jt(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
const t_ = (e) => Object.keys(e).length === 0;
function r_(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
const ke = (e, t, r) => {
  const n = r_(e, `colors.${t}`, t);
  try {
    return e_(n), n;
  } catch {
    return r ?? "#000000";
  }
}, n_ = (e) => {
  const [t, r, n] = za(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, o_ = (e) => (t) => {
  const r = ke(t, e);
  return n_(r) < 128 ? "dark" : "light";
}, i_ = (e) => (t) => o_(e)(t) === "dark", kr = (e, t) => (r) => {
  const n = ke(r, e);
  return Qv(n, 1 - t);
};
function Nc(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
const s_ = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function a_(e) {
  const t = s_();
  return !e || t_(e) ? t : e.string && e.colors ? c_(e.string, e.colors) : e.string && !e.colors ? l_(e.string) : e.colors && !e.string ? u_(e.colors) : t;
}
function l_(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function c_(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function u_(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function M(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Da(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function sh(e) {
  return Ae(e) && e.reference ? e.reference : String(e);
}
const di = (e, ...t) => t.map(sh).join(` ${e} `).replace(/calc/g, ""), Wc = (...e) => `calc(${di("+", ...e)})`, Hc = (...e) => `calc(${di("-", ...e)})`, Vs = (...e) => `calc(${di("*", ...e)})`, Uc = (...e) => `calc(${di("/", ...e)})`, qc = (e) => {
  const t = sh(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Vs(t, -1);
}, dt = Object.assign(
  (e) => ({
    add: (...t) => dt(Wc(e, ...t)),
    subtract: (...t) => dt(Hc(e, ...t)),
    multiply: (...t) => dt(Vs(e, ...t)),
    divide: (...t) => dt(Uc(e, ...t)),
    negate: () => dt(qc(e)),
    toString: () => e.toString()
  }),
  {
    add: Wc,
    subtract: Hc,
    multiply: Vs,
    divide: Uc,
    negate: qc
  }
);
function d_(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function f_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ah(e) {
  const t = f_(e.toString());
  return t.includes("\\.") ? e : d_(e) ? t.replace(".", "\\.") : e;
}
function h_(e, t = "") {
  return [t, ah(e)].filter(Boolean).join("-");
}
function p_(e, t) {
  return `var(${ah(e)}${t ? `, ${t}` : ""})`;
}
function m_(e, t = "") {
  return `--${h_(e, t)}`;
}
function ge(e, t) {
  const r = m_(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: p_(r, g_(t == null ? void 0 : t.fallback))
  };
}
function g_(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: Nn, defineMultiStyleConfig: y_ } = Q(uv.keys), ze = z("alert-fg"), St = z("alert-bg"), b_ = Nn({
  container: {
    bg: St.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: ze.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: ze.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Ba(e) {
  const { theme: t, colorScheme: r } = e, n = kr(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
const v_ = Nn((e) => {
  const { colorScheme: t } = e, r = Ba(e);
  return {
    container: {
      [ze.variable]: `colors.${t}.600`,
      [St.variable]: r.light,
      _dark: {
        [ze.variable]: `colors.${t}.200`,
        [St.variable]: r.dark
      }
    }
  };
}), __ = Nn((e) => {
  const { colorScheme: t } = e, r = Ba(e);
  return {
    container: {
      [ze.variable]: `colors.${t}.600`,
      [St.variable]: r.light,
      _dark: {
        [ze.variable]: `colors.${t}.200`,
        [St.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: ze.reference
    }
  };
}), S_ = Nn((e) => {
  const { colorScheme: t } = e, r = Ba(e);
  return {
    container: {
      [ze.variable]: `colors.${t}.600`,
      [St.variable]: r.light,
      _dark: {
        [ze.variable]: `colors.${t}.200`,
        [St.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: ze.reference
    }
  };
}), x_ = Nn((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [ze.variable]: "colors.white",
      [St.variable]: `colors.${t}.600`,
      _dark: {
        [ze.variable]: "colors.gray.900",
        [St.variable]: `colors.${t}.200`
      },
      color: ze.reference
    }
  };
}), w_ = {
  subtle: v_,
  "left-accent": __,
  "top-accent": S_,
  solid: x_
}, k_ = y_({
  baseStyle: b_,
  variants: w_,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), lh = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, T_ = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, C_ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, ch = {
  ...lh,
  ...T_,
  container: C_
}, P_ = (e) => typeof e == "function";
function Ce(e, ...t) {
  return P_(e) ? e(...t) : e;
}
const { definePartsStyle: uh, defineMultiStyleConfig: $_ } = Q(dv.keys), yr = z("avatar-border-color"), dn = z("avatar-bg"), kn = z("avatar-font-size"), Tr = z("avatar-size"), A_ = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: yr.reference,
  [yr.variable]: "white",
  _dark: {
    [yr.variable]: "colors.gray.800"
  }
}, R_ = {
  bg: dn.reference,
  fontSize: kn.reference,
  width: Tr.reference,
  height: Tr.reference,
  lineHeight: "1",
  [dn.variable]: "colors.gray.200",
  _dark: {
    [dn.variable]: "colors.whiteAlpha.400"
  }
}, E_ = (e) => {
  const { name: t, theme: r } = e, n = t ? a_({ string: t }) : "colors.gray.400", o = i_(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: dn.reference,
    fontSize: kn.reference,
    color: i,
    borderColor: yr.reference,
    verticalAlign: "top",
    width: Tr.reference,
    height: Tr.reference,
    "&:not([data-loaded])": {
      [dn.variable]: n
    },
    [yr.variable]: "colors.white",
    _dark: {
      [yr.variable]: "colors.gray.800"
    }
  };
}, M_ = {
  fontSize: kn.reference,
  lineHeight: "1"
}, z_ = uh((e) => ({
  badge: Ce(A_, e),
  excessLabel: Ce(R_, e),
  container: Ce(E_, e),
  label: M_
}));
function Ct(e) {
  const t = e !== "100%" ? ch[e] : void 0;
  return uh({
    container: {
      [Tr.variable]: t ?? e,
      [kn.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Tr.variable]: t ?? e,
      [kn.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
const D_ = {
  "2xs": Ct(4),
  xs: Ct(6),
  sm: Ct(8),
  md: Ct(12),
  lg: Ct(16),
  xl: Ct(24),
  "2xl": Ct(32),
  full: Ct("100%")
}, B_ = $_({
  baseStyle: z_,
  sizes: D_,
  defaultProps: {
    size: "md"
  }
}), fe = tv("badge", ["bg", "color", "shadow"]), I_ = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: fe.bg.reference,
  color: fe.color.reference,
  boxShadow: fe.shadow.reference
}, V_ = (e) => {
  const { colorScheme: t, theme: r } = e, n = kr(`${t}.500`, 0.6)(r);
  return {
    [fe.bg.variable]: `colors.${t}.500`,
    [fe.color.variable]: "colors.white",
    _dark: {
      [fe.bg.variable]: n,
      [fe.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, L_ = (e) => {
  const { colorScheme: t, theme: r } = e, n = kr(`${t}.200`, 0.16)(r);
  return {
    [fe.bg.variable]: `colors.${t}.100`,
    [fe.color.variable]: `colors.${t}.800`,
    _dark: {
      [fe.bg.variable]: n,
      [fe.color.variable]: `colors.${t}.200`
    }
  };
}, F_ = (e) => {
  const { colorScheme: t, theme: r } = e, n = kr(`${t}.200`, 0.8)(r);
  return {
    [fe.color.variable]: `colors.${t}.500`,
    _dark: {
      [fe.color.variable]: n
    },
    [fe.shadow.variable]: `inset 0 0 0px 1px ${fe.color.reference}`
  };
}, O_ = {
  solid: V_,
  subtle: L_,
  outline: F_
}, fn = {
  baseStyle: I_,
  variants: O_,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: j_, definePartsStyle: N_ } = Q(fv.keys), ji = z("breadcrumb-link-decor"), W_ = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: ji.reference,
  [ji.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [ji.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, H_ = N_({
  link: W_
}), U_ = j_({
  baseStyle: H_
}), q_ = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, dh = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: M("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: M("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: M("gray.200", "whiteAlpha.300")(e) }
    };
  const n = kr(`${t}.200`, 0.12)(r), o = kr(`${t}.200`, 0.24)(r);
  return {
    color: M(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: M(`${t}.50`, n)(e)
    },
    _active: {
      bg: M(`${t}.100`, o)(e)
    }
  };
}, G_ = (e) => {
  const { colorScheme: t } = e, r = M("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Ce(dh, e)
  };
}, K_ = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, Y_ = (e) => {
  const { colorScheme: t } = e;
  if (t === "gray") {
    const a = M("gray.100", "whiteAlpha.200")(e);
    return {
      bg: a,
      color: M("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: M("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: a
        }
      },
      _active: { bg: M("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${t}.500`,
    color: n = "white",
    hoverBg: o = `${t}.600`,
    activeBg: i = `${t}.700`
  } = K_[t] ?? {}, s = M(r, `${t}.200`)(e);
  return {
    bg: s,
    color: M(n, "gray.800")(e),
    _hover: {
      bg: M(o, `${t}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: M(i, `${t}.400`)(e) }
  };
}, X_ = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: M(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: M(`${t}.700`, `${t}.500`)(e)
    }
  };
}, Z_ = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, J_ = {
  ghost: dh,
  outline: G_,
  solid: Y_,
  link: X_,
  unstyled: Z_
}, Q_ = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, eS = {
  baseStyle: q_,
  variants: J_,
  sizes: Q_,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Ht, defineMultiStyleConfig: tS } = Q(zv.keys), Ho = z("card-bg"), gt = z("card-padding"), fh = z("card-shadow"), Co = z("card-radius"), hh = z("card-border-width", "0"), ph = z("card-border-color"), rS = Ht({
  container: {
    [Ho.variable]: "colors.chakra-body-bg",
    backgroundColor: Ho.reference,
    boxShadow: fh.reference,
    borderRadius: Co.reference,
    color: "chakra-body-text",
    borderWidth: hh.reference,
    borderColor: ph.reference
  },
  body: {
    padding: gt.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: gt.reference
  },
  footer: {
    padding: gt.reference
  }
}), nS = {
  sm: Ht({
    container: {
      [Co.variable]: "radii.base",
      [gt.variable]: "space.3"
    }
  }),
  md: Ht({
    container: {
      [Co.variable]: "radii.md",
      [gt.variable]: "space.5"
    }
  }),
  lg: Ht({
    container: {
      [Co.variable]: "radii.xl",
      [gt.variable]: "space.7"
    }
  })
}, oS = {
  elevated: Ht({
    container: {
      [fh.variable]: "shadows.base",
      _dark: {
        [Ho.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Ht({
    container: {
      [hh.variable]: "1px",
      [ph.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Ht({
    container: {
      [Ho.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [gt.variable]: 0
    },
    header: {
      [gt.variable]: 0
    },
    footer: {
      [gt.variable]: 0
    }
  }
}, iS = tS({
  baseStyle: rS,
  variants: oS,
  sizes: nS,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), { definePartsStyle: Po, defineMultiStyleConfig: sS } = Q(hv.keys), hn = z("checkbox-size"), aS = (e) => {
  const { colorScheme: t } = e;
  return {
    w: hn.reference,
    h: hn.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: M(`${t}.500`, `${t}.200`)(e),
      borderColor: M(`${t}.500`, `${t}.200`)(e),
      color: M("white", "gray.900")(e),
      _hover: {
        bg: M(`${t}.600`, `${t}.300`)(e),
        borderColor: M(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: M("gray.200", "transparent")(e),
        bg: M("gray.200", "whiteAlpha.300")(e),
        color: M("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: M(`${t}.500`, `${t}.200`)(e),
      borderColor: M(`${t}.500`, `${t}.200`)(e),
      color: M("white", "gray.900")(e)
    },
    _disabled: {
      bg: M("gray.100", "whiteAlpha.100")(e),
      borderColor: M("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: M("red.500", "red.300")(e)
    }
  };
}, lS = {
  _disabled: { cursor: "not-allowed" }
}, cS = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, uS = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, dS = Po((e) => ({
  icon: uS,
  container: lS,
  control: Ce(aS, e),
  label: cS
})), fS = {
  sm: Po({
    control: { [hn.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Po({
    control: { [hn.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Po({
    control: { [hn.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, At = sS({
  baseStyle: dS,
  sizes: fS,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), pn = ge("close-button-size"), Kr = ge("close-button-bg"), hS = {
  w: [pn.reference],
  h: [pn.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Kr.variable]: "colors.blackAlpha.100",
    _dark: {
      [Kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Kr.variable]: "colors.blackAlpha.200",
    _dark: {
      [Kr.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Kr.reference
}, pS = {
  lg: {
    [pn.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [pn.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [pn.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, mS = {
  baseStyle: hS,
  sizes: pS,
  defaultProps: {
    size: "md"
  }
}, { variants: gS, defaultProps: yS } = fn, bS = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: fe.bg.reference,
  color: fe.color.reference,
  boxShadow: fe.shadow.reference
}, vS = {
  baseStyle: bS,
  variants: gS,
  defaultProps: yS
}, _S = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, SS = {
  baseStyle: _S
}, xS = {
  opacity: 0.6,
  borderColor: "inherit"
}, wS = {
  borderStyle: "solid"
}, kS = {
  borderStyle: "dashed"
}, TS = {
  solid: wS,
  dashed: kS
}, CS = {
  baseStyle: xS,
  variants: TS,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Ls, defineMultiStyleConfig: PS } = Q(pv.keys), Ni = z("drawer-bg"), Wi = z("drawer-box-shadow");
function rr(e) {
  return Ls(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
const $S = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, AS = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, RS = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Ni.variable]: "colors.white",
    [Wi.variable]: "shadows.lg",
    _dark: {
      [Ni.variable]: "colors.gray.700",
      [Wi.variable]: "shadows.dark-lg"
    },
    bg: Ni.reference,
    boxShadow: Wi.reference
  };
}, ES = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, MS = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, zS = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, DS = {
  px: "6",
  py: "4"
}, BS = Ls((e) => ({
  overlay: $S,
  dialogContainer: AS,
  dialog: Ce(RS, e),
  header: ES,
  closeButton: MS,
  body: zS,
  footer: DS
})), IS = {
  xs: rr("xs"),
  sm: rr("md"),
  md: rr("lg"),
  lg: rr("2xl"),
  xl: rr("4xl"),
  full: rr("full")
}, VS = PS({
  baseStyle: BS,
  sizes: IS,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: LS, defineMultiStyleConfig: FS } = Q(mv.keys), OS = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, jS = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, NS = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, WS = LS({
  preview: OS,
  input: jS,
  textarea: NS
}), HS = FS({
  baseStyle: WS
}), { definePartsStyle: US, defineMultiStyleConfig: qS } = Q(gv.keys), br = z("form-control-color"), GS = {
  marginStart: "1",
  [br.variable]: "colors.red.500",
  _dark: {
    [br.variable]: "colors.red.300"
  },
  color: br.reference
}, KS = {
  mt: "2",
  [br.variable]: "colors.gray.600",
  _dark: {
    [br.variable]: "colors.whiteAlpha.600"
  },
  color: br.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, YS = US({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: GS,
  helperText: KS
}), XS = qS({
  baseStyle: YS
}), { definePartsStyle: ZS, defineMultiStyleConfig: JS } = Q(yv.keys), vr = z("form-error-color"), QS = {
  [vr.variable]: "colors.red.500",
  _dark: {
    [vr.variable]: "colors.red.300"
  },
  color: vr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, e1 = {
  marginEnd: "0.5em",
  [vr.variable]: "colors.red.500",
  _dark: {
    [vr.variable]: "colors.red.300"
  },
  color: vr.reference
}, t1 = ZS({
  text: QS,
  icon: e1
}), r1 = JS({
  baseStyle: t1
}), n1 = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, o1 = {
  baseStyle: n1
}, i1 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, s1 = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, a1 = {
  baseStyle: i1,
  sizes: s1,
  defaultProps: {
    size: "xl"
  }
}, { definePartsStyle: ht, defineMultiStyleConfig: l1 } = Q(bv.keys), or = z("input-height"), ir = z("input-font-size"), sr = z("input-padding"), ar = z("input-border-radius"), c1 = ht({
  addon: {
    height: or.reference,
    fontSize: ir.reference,
    px: sr.reference,
    borderRadius: ar.reference
  },
  field: {
    width: "100%",
    height: or.reference,
    fontSize: ir.reference,
    px: sr.reference,
    borderRadius: ar.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), Pt = {
  lg: {
    [ir.variable]: "fontSizes.lg",
    [sr.variable]: "space.4",
    [ar.variable]: "radii.md",
    [or.variable]: "sizes.12"
  },
  md: {
    [ir.variable]: "fontSizes.md",
    [sr.variable]: "space.4",
    [ar.variable]: "radii.md",
    [or.variable]: "sizes.10"
  },
  sm: {
    [ir.variable]: "fontSizes.sm",
    [sr.variable]: "space.3",
    [ar.variable]: "radii.sm",
    [or.variable]: "sizes.8"
  },
  xs: {
    [ir.variable]: "fontSizes.xs",
    [sr.variable]: "space.2",
    [ar.variable]: "radii.sm",
    [or.variable]: "sizes.6"
  }
}, u1 = {
  lg: ht({
    field: Pt.lg,
    group: Pt.lg
  }),
  md: ht({
    field: Pt.md,
    group: Pt.md
  }),
  sm: ht({
    field: Pt.sm,
    group: Pt.sm
  }),
  xs: ht({
    field: Pt.xs,
    group: Pt.xs
  })
};
function Ia(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || M("blue.500", "blue.300")(e),
    errorBorderColor: r || M("red.500", "red.300")(e)
  };
}
const d1 = ht((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ia(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: M("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ke(t, n),
        boxShadow: `0 0 0 1px ${ke(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ke(t, r),
        boxShadow: `0 0 0 1px ${ke(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: M("inherit", "whiteAlpha.50")(e),
      bg: M("gray.100", "whiteAlpha.300")(e)
    }
  };
}), f1 = ht((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ia(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: M("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: M("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ke(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ke(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: M("gray.100", "whiteAlpha.50")(e)
    }
  };
}), h1 = ht((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Ia(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ke(t, n),
        boxShadow: `0px 1px 0px 0px ${ke(t, n)}`
      },
      _focusVisible: {
        borderColor: ke(t, r),
        boxShadow: `0px 1px 0px 0px ${ke(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), p1 = ht({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), m1 = {
  outline: d1,
  filled: f1,
  flushed: h1,
  unstyled: p1
}, U = l1({
  baseStyle: c1,
  sizes: u1,
  variants: m1,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Hi = z("kbd-bg"), g1 = {
  [Hi.variable]: "colors.gray.100",
  _dark: {
    [Hi.variable]: "colors.whiteAlpha.100"
  },
  bg: Hi.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, y1 = {
  baseStyle: g1
}, b1 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, v1 = {
  baseStyle: b1
}, { defineMultiStyleConfig: _1, definePartsStyle: S1 } = Q(vv.keys), x1 = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, w1 = S1({
  icon: x1
}), k1 = _1({
  baseStyle: w1
}), { defineMultiStyleConfig: T1, definePartsStyle: C1 } = Q(_v.keys), Je = z("menu-bg"), Ui = z("menu-shadow"), P1 = {
  [Je.variable]: "#fff",
  [Ui.variable]: "shadows.sm",
  _dark: {
    [Je.variable]: "colors.gray.700",
    [Ui.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: Je.reference,
  boxShadow: Ui.reference
}, $1 = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Je.variable]: "colors.gray.100",
    _dark: {
      [Je.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Je.variable]: "colors.gray.200",
    _dark: {
      [Je.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Je.variable]: "colors.gray.100",
    _dark: {
      [Je.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Je.reference
}, A1 = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, R1 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, E1 = {
  opacity: 0.6
}, M1 = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, z1 = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, D1 = C1({
  button: z1,
  list: P1,
  item: $1,
  groupTitle: A1,
  icon: R1,
  command: E1,
  divider: M1
}), B1 = T1({
  baseStyle: D1
}), { defineMultiStyleConfig: I1, definePartsStyle: Fs } = Q(Sv.keys), qi = z("modal-bg"), Gi = z("modal-shadow"), V1 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, L1 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, F1 = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [qi.variable]: "colors.white",
    [Gi.variable]: "shadows.lg",
    _dark: {
      [qi.variable]: "colors.gray.700",
      [Gi.variable]: "shadows.dark-lg"
    },
    bg: qi.reference,
    boxShadow: Gi.reference
  };
}, O1 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, j1 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, N1 = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, W1 = {
  px: "6",
  py: "4"
}, H1 = Fs((e) => ({
  overlay: V1,
  dialogContainer: Ce(L1, e),
  dialog: Ce(F1, e),
  header: O1,
  closeButton: j1,
  body: Ce(N1, e),
  footer: W1
}));
function He(e) {
  return Fs(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
const U1 = {
  xs: He("xs"),
  sm: He("sm"),
  md: He("md"),
  lg: He("lg"),
  xl: He("xl"),
  "2xl": He("2xl"),
  "3xl": He("3xl"),
  "4xl": He("4xl"),
  "5xl": He("5xl"),
  "6xl": He("6xl"),
  full: He("full")
}, q1 = I1({
  baseStyle: H1,
  sizes: U1,
  defaultProps: { size: "md" }
}), mh = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, { defineMultiStyleConfig: G1, definePartsStyle: gh } = Q(xv.keys), Va = ge("number-input-stepper-width"), yh = ge("number-input-input-padding"), K1 = dt(Va).add("0.5rem").toString(), Ki = ge("number-input-bg"), Yi = ge("number-input-color"), Xi = ge("number-input-border-color"), Y1 = {
  [Va.variable]: "sizes.6",
  [yh.variable]: K1
}, X1 = (e) => {
  var t;
  return ((t = Ce(U.baseStyle, e)) == null ? void 0 : t.field) ?? {};
}, Z1 = {
  width: Va.reference
}, J1 = {
  borderStart: "1px solid",
  borderStartColor: Xi.reference,
  color: Yi.reference,
  bg: Ki.reference,
  [Yi.variable]: "colors.chakra-body-text",
  [Xi.variable]: "colors.chakra-border-color",
  _dark: {
    [Yi.variable]: "colors.whiteAlpha.800",
    [Xi.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ki.variable]: "colors.gray.200",
    _dark: {
      [Ki.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, Q1 = gh((e) => ({
  root: Y1,
  field: Ce(X1, e) ?? {},
  stepperGroup: Z1,
  stepper: J1
}));
function co(e) {
  var i, s;
  const t = (i = U.sizes) == null ? void 0 : i[e], r = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, n = ((s = t.field) == null ? void 0 : s.fontSize) ?? "md", o = mh.fontSizes[n];
  return gh({
    field: {
      ...t.field,
      paddingInlineEnd: yh.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: dt(o).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: r[e]
      },
      _last: {
        borderBottomEndRadius: r[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
const ex = {
  xs: co("xs"),
  sm: co("sm"),
  md: co("md"),
  lg: co("lg")
}, tx = G1({
  baseStyle: Q1,
  sizes: ex,
  variants: U.variants,
  defaultProps: U.defaultProps
});
var Vd;
const rx = {
  ...(Vd = U.baseStyle) == null ? void 0 : Vd.field,
  textAlign: "center"
}, nx = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var Ld;
const ox = {
  outline: (e) => {
    var t, r;
    return ((r = Ce((t = U.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) ?? {};
  },
  flushed: (e) => {
    var t, r;
    return ((r = Ce((t = U.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) ?? {};
  },
  filled: (e) => {
    var t, r;
    return ((r = Ce((t = U.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) ?? {};
  },
  unstyled: ((Ld = U.variants) == null ? void 0 : Ld.unstyled.field) ?? {}
}, ix = {
  baseStyle: rx,
  sizes: nx,
  variants: ox,
  defaultProps: U.defaultProps
}, { defineMultiStyleConfig: sx, definePartsStyle: ax } = Q(wv.keys), uo = ge("popper-bg"), lx = ge("popper-arrow-bg"), Gc = ge("popper-arrow-shadow-color"), cx = {
  zIndex: "popover"
}, ux = {
  [uo.variable]: "colors.white",
  bg: uo.reference,
  [lx.variable]: uo.reference,
  [Gc.variable]: "colors.gray.200",
  _dark: {
    [uo.variable]: "colors.gray.700",
    [Gc.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, dx = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, fx = {
  px: 3,
  py: 2
}, hx = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, px = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, mx = ax({
  popper: cx,
  content: ux,
  header: dx,
  body: fx,
  footer: hx,
  closeButton: px
}), gx = sx({
  baseStyle: mx
}), { defineMultiStyleConfig: yx, definePartsStyle: rn } = Q(kv.keys), bx = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = M(
    Nc(),
    Nc("1rem", "rgba(0,0,0,0.1)")
  )(e), s = M(`${t}.500`, `${t}.200`)(e), a = `linear-gradient(
    to right,
    transparent 0%,
    ${ke(r, s)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: a } : { bgColor: s }
  };
}, vx = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, _x = (e) => ({
  bg: M("gray.100", "whiteAlpha.300")(e)
}), Sx = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...bx(e)
}), xx = rn((e) => ({
  label: vx,
  filledTrack: Sx(e),
  track: _x(e)
})), wx = {
  xs: rn({
    track: { h: "1" }
  }),
  sm: rn({
    track: { h: "2" }
  }),
  md: rn({
    track: { h: "3" }
  }),
  lg: rn({
    track: { h: "4" }
  })
}, kx = yx({
  sizes: wx,
  baseStyle: xx,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Tx, definePartsStyle: $o } = Q(Tv.keys), Cx = (e) => {
  var r;
  const t = (r = Ce(At.baseStyle, e)) == null ? void 0 : r.control;
  return {
    ...t,
    borderRadius: "full",
    _checked: {
      ...t == null ? void 0 : t._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, Px = $o((e) => {
  var t, r;
  return {
    label: (t = At.baseStyle) == null ? void 0 : t.call(At, e).label,
    container: (r = At.baseStyle) == null ? void 0 : r.call(At, e).container,
    control: Cx(e)
  };
}), $x = {
  md: $o({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: $o({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: $o({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Ax = Tx({
  baseStyle: Px,
  sizes: $x,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Rx, definePartsStyle: Ex } = Q(Cv.keys), fo = z("select-bg");
var Fd;
const Mx = {
  ...(Fd = U.baseStyle) == null ? void 0 : Fd.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: fo.reference,
  [fo.variable]: "colors.white",
  _dark: {
    [fo.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: fo.reference
  }
}, zx = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, Dx = Ex({
  field: Mx,
  icon: zx
}), ho = {
  paddingInlineEnd: "8"
};
var Od, jd, Nd, Wd, Hd, Ud, qd, Gd;
const Bx = {
  lg: {
    ...(Od = U.sizes) == null ? void 0 : Od.lg,
    field: {
      ...(jd = U.sizes) == null ? void 0 : jd.lg.field,
      ...ho
    }
  },
  md: {
    ...(Nd = U.sizes) == null ? void 0 : Nd.md,
    field: {
      ...(Wd = U.sizes) == null ? void 0 : Wd.md.field,
      ...ho
    }
  },
  sm: {
    ...(Hd = U.sizes) == null ? void 0 : Hd.sm,
    field: {
      ...(Ud = U.sizes) == null ? void 0 : Ud.sm.field,
      ...ho
    }
  },
  xs: {
    ...(qd = U.sizes) == null ? void 0 : qd.xs,
    field: {
      ...(Gd = U.sizes) == null ? void 0 : Gd.xs.field,
      ...ho
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Ix = Rx({
  baseStyle: Dx,
  sizes: Bx,
  variants: U.variants,
  defaultProps: U.defaultProps
}), Zi = z("skeleton-start-color"), Ji = z("skeleton-end-color"), Vx = {
  [Zi.variable]: "colors.gray.100",
  [Ji.variable]: "colors.gray.400",
  _dark: {
    [Zi.variable]: "colors.gray.800",
    [Ji.variable]: "colors.gray.600"
  },
  background: Zi.reference,
  borderColor: Ji.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, Lx = {
  baseStyle: Vx
}, Qi = z("skip-link-bg"), Fx = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Qi.variable]: "colors.white",
    _dark: {
      [Qi.variable]: "colors.gray.700"
    },
    bg: Qi.reference
  }
}, Ox = {
  baseStyle: Fx
}, { defineMultiStyleConfig: jx, definePartsStyle: fi } = Q(Pv.keys), Kt = z("slider-thumb-size"), Tn = z("slider-track-size"), Rt = z("slider-bg"), Nx = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Da({
      orientation: t,
      vertical: {
        h: "100%",
        px: ut(Kt.reference).divide(2).toString()
      },
      horizontal: {
        w: "100%",
        py: ut(Kt.reference).divide(2).toString()
      }
    })
  };
}, Wx = (e) => ({
  ...Da({
    orientation: e.orientation,
    horizontal: { h: Tn.reference },
    vertical: { w: Tn.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Rt.variable]: "colors.gray.200",
  _dark: {
    [Rt.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Rt.variable]: "colors.gray.300",
    _dark: {
      [Rt.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Rt.reference
}), Hx = (e) => {
  const { orientation: t } = e;
  return {
    ...Da({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Kt.reference,
    h: Kt.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, Ux = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Rt.variable]: `colors.${t}.500`,
    _dark: {
      [Rt.variable]: `colors.${t}.200`
    },
    bg: Rt.reference
  };
}, qx = fi((e) => ({
  container: Nx(e),
  track: Wx(e),
  thumb: Hx(e),
  filledTrack: Ux(e)
})), Gx = fi({
  container: {
    [Kt.variable]: "sizes.4",
    [Tn.variable]: "sizes.1"
  }
}), Kx = fi({
  container: {
    [Kt.variable]: "sizes.3.5",
    [Tn.variable]: "sizes.1"
  }
}), Yx = fi({
  container: {
    [Kt.variable]: "sizes.2.5",
    [Tn.variable]: "sizes.0.5"
  }
}), Xx = {
  lg: Gx,
  md: Kx,
  sm: Yx
}, Zx = jx({
  baseStyle: qx,
  sizes: Xx,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ot = ge("spinner-size"), Jx = {
  width: [Ot.reference],
  height: [Ot.reference]
}, Qx = {
  xs: {
    [Ot.variable]: "sizes.3"
  },
  sm: {
    [Ot.variable]: "sizes.4"
  },
  md: {
    [Ot.variable]: "sizes.6"
  },
  lg: {
    [Ot.variable]: "sizes.8"
  },
  xl: {
    [Ot.variable]: "sizes.12"
  }
}, ew = {
  baseStyle: Jx,
  sizes: Qx,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: tw, definePartsStyle: bh } = Q($v.keys), rw = {
  fontWeight: "medium"
}, nw = {
  opacity: 0.8,
  marginBottom: "2"
}, ow = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, iw = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, sw = bh({
  container: {},
  label: rw,
  helpText: nw,
  number: ow,
  icon: iw
}), aw = {
  md: bh({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, lw = tw({
  baseStyle: sw,
  sizes: aw,
  defaultProps: {
    size: "md"
  }
}), { defineMultiStyleConfig: cw, definePartsStyle: nn } = Q([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), ft = z("stepper-indicator-size"), lr = z("stepper-icon-size"), cr = z("stepper-title-font-size"), on = z("stepper-description-font-size"), Yr = z("stepper-accent-color"), uw = nn(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Yr.variable]: `colors.${e}.500`,
    _dark: {
      [Yr.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: cr.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: on.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: cr.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: lr.reference,
    height: lr.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: ft.reference,
    height: ft.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Yr.reference
    },
    "&[data-status=complete]": {
      bg: Yr.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Yr.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${ft.reference} - 8px)`,
      top: `calc(${ft.reference} + 4px)`,
      insetStart: `calc(${ft.reference} / 2 - 1px)`
    }
  }
})), dw = cw({
  baseStyle: uw,
  sizes: {
    xs: nn({
      stepper: {
        [ft.variable]: "sizes.4",
        [lr.variable]: "sizes.3",
        [cr.variable]: "fontSizes.xs",
        [on.variable]: "fontSizes.xs"
      }
    }),
    sm: nn({
      stepper: {
        [ft.variable]: "sizes.6",
        [lr.variable]: "sizes.4",
        [cr.variable]: "fontSizes.sm",
        [on.variable]: "fontSizes.xs"
      }
    }),
    md: nn({
      stepper: {
        [ft.variable]: "sizes.8",
        [lr.variable]: "sizes.5",
        [cr.variable]: "fontSizes.md",
        [on.variable]: "fontSizes.sm"
      }
    }),
    lg: nn({
      stepper: {
        [ft.variable]: "sizes.10",
        [lr.variable]: "sizes.6",
        [cr.variable]: "fontSizes.lg",
        [on.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: fw, definePartsStyle: Ao } = Q(Av.keys), mn = ge("switch-track-width"), Ut = ge("switch-track-height"), es = ge("switch-track-diff"), hw = dt.subtract(mn, Ut), Os = ge("switch-thumb-x"), Xr = ge("switch-bg"), pw = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [mn.reference],
    height: [Ut.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Xr.variable]: "colors.gray.300",
    _dark: {
      [Xr.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Xr.variable]: `colors.${t}.500`,
      _dark: {
        [Xr.variable]: `colors.${t}.200`
      }
    },
    bg: Xr.reference
  };
}, mw = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Ut.reference],
  height: [Ut.reference],
  _checked: {
    transform: `translateX(${Os.reference})`
  }
}, gw = Ao((e) => ({
  container: {
    [es.variable]: hw,
    [Os.variable]: es.reference,
    _rtl: {
      [Os.variable]: dt(es).negate().toString()
    }
  },
  track: pw(e),
  thumb: mw
})), yw = {
  sm: Ao({
    container: {
      [mn.variable]: "1.375rem",
      [Ut.variable]: "sizes.3"
    }
  }),
  md: Ao({
    container: {
      [mn.variable]: "1.875rem",
      [Ut.variable]: "sizes.4"
    }
  }),
  lg: Ao({
    container: {
      [mn.variable]: "2.875rem",
      [Ut.variable]: "sizes.6"
    }
  })
}, bw = fw({
  baseStyle: gw,
  sizes: yw,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: vw, definePartsStyle: _r } = Q(Rv.keys), _w = _r({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Uo = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Sw = _r((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: M("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: M(`${t}.100`, `${t}.700`)(e),
      ...Uo
    },
    td: {
      borderBottom: "1px",
      borderColor: M(`${t}.100`, `${t}.700`)(e),
      ...Uo
    },
    caption: {
      color: M("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), xw = _r((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: M("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: M(`${t}.100`, `${t}.700`)(e),
      ...Uo
    },
    td: {
      borderBottom: "1px",
      borderColor: M(`${t}.100`, `${t}.700`)(e),
      ...Uo
    },
    caption: {
      color: M("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: M(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: M(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), ww = {
  simple: Sw,
  striped: xw,
  unstyled: {}
}, kw = {
  sm: _r({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: _r({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: _r({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, Tw = vw({
  baseStyle: _w,
  variants: ww,
  sizes: kw,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Pe = z("tabs-color"), qe = z("tabs-bg"), po = z("tabs-border-color"), { defineMultiStyleConfig: Cw, definePartsStyle: nt } = Q(Ev.keys), Pw = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, $w = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, Aw = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, Rw = {
  p: 4
}, Ew = nt((e) => ({
  root: Pw(e),
  tab: $w(e),
  tablist: Aw(e),
  tabpanel: Rw
})), Mw = {
  sm: nt({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: nt({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: nt({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, zw = nt((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Pe.variable]: `colors.${t}.600`,
        _dark: {
          [Pe.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [qe.variable]: "colors.gray.200",
        _dark: {
          [qe.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Pe.reference,
      bg: qe.reference
    }
  };
}), Dw = nt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [po.variable]: "transparent",
      _selected: {
        [Pe.variable]: `colors.${t}.600`,
        [po.variable]: "colors.white",
        _dark: {
          [Pe.variable]: `colors.${t}.300`,
          [po.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: po.reference
      },
      color: Pe.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Bw = nt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [qe.variable]: "colors.gray.50",
      _dark: {
        [qe.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [qe.variable]: "colors.white",
        [Pe.variable]: `colors.${t}.600`,
        _dark: {
          [qe.variable]: "colors.gray.800",
          [Pe.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Pe.reference,
      bg: qe.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Iw = nt((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ke(r, `${t}.700`),
        bg: ke(r, `${t}.100`)
      }
    }
  };
}), Vw = nt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Pe.variable]: "colors.gray.600",
      _dark: {
        [Pe.variable]: "inherit"
      },
      _selected: {
        [Pe.variable]: "colors.white",
        [qe.variable]: `colors.${t}.600`,
        _dark: {
          [Pe.variable]: "colors.gray.800",
          [qe.variable]: `colors.${t}.300`
        }
      },
      color: Pe.reference,
      bg: qe.reference
    }
  };
}), Lw = nt({}), Fw = {
  line: zw,
  enclosed: Dw,
  "enclosed-colored": Bw,
  "soft-rounded": Iw,
  "solid-rounded": Vw,
  unstyled: Lw
}, Ow = Cw({
  baseStyle: Ew,
  sizes: Mw,
  variants: Fw,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: jw, definePartsStyle: qt } = Q(Mv.keys), Kc = z("tag-bg"), Yc = z("tag-color"), ts = z("tag-shadow"), Ro = z("tag-min-height"), Eo = z("tag-min-width"), Mo = z("tag-font-size"), zo = z("tag-padding-inline"), Nw = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Yc.variable]: fe.color.reference,
  [Kc.variable]: fe.bg.reference,
  [ts.variable]: fe.shadow.reference,
  color: Yc.reference,
  bg: Kc.reference,
  boxShadow: ts.reference,
  borderRadius: "md",
  minH: Ro.reference,
  minW: Eo.reference,
  fontSize: Mo.reference,
  px: zo.reference,
  _focusVisible: {
    [ts.variable]: "shadows.outline"
  }
}, Ww = {
  lineHeight: 1.2,
  overflow: "visible"
}, Hw = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, Uw = qt({
  container: Nw,
  label: Ww,
  closeButton: Hw
}), qw = {
  sm: qt({
    container: {
      [Ro.variable]: "sizes.5",
      [Eo.variable]: "sizes.5",
      [Mo.variable]: "fontSizes.xs",
      [zo.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: qt({
    container: {
      [Ro.variable]: "sizes.6",
      [Eo.variable]: "sizes.6",
      [Mo.variable]: "fontSizes.sm",
      [zo.variable]: "space.2"
    }
  }),
  lg: qt({
    container: {
      [Ro.variable]: "sizes.8",
      [Eo.variable]: "sizes.8",
      [Mo.variable]: "fontSizes.md",
      [zo.variable]: "space.3"
    }
  })
}, Gw = {
  subtle: qt((e) => {
    var t;
    return {
      container: (t = fn.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: qt((e) => {
    var t;
    return {
      container: (t = fn.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: qt((e) => {
    var t;
    return {
      container: (t = fn.variants) == null ? void 0 : t.outline(e)
    };
  })
}, Kw = jw({
  variants: Gw,
  baseStyle: Uw,
  sizes: qw,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var Kd;
const Yw = {
  ...(Kd = U.baseStyle) == null ? void 0 : Kd.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
};
var Yd;
const Xw = {
  outline: (e) => {
    var t;
    return ((t = U.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = U.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = U.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((Yd = U.variants) == null ? void 0 : Yd.unstyled.field) ?? {}
};
var Xd, Zd, Jd, Qd;
const Zw = {
  xs: ((Xd = U.sizes) == null ? void 0 : Xd.xs.field) ?? {},
  sm: ((Zd = U.sizes) == null ? void 0 : Zd.sm.field) ?? {},
  md: ((Jd = U.sizes) == null ? void 0 : Jd.md.field) ?? {},
  lg: ((Qd = U.sizes) == null ? void 0 : Qd.lg.field) ?? {}
}, Jw = {
  baseStyle: Yw,
  sizes: Zw,
  variants: Xw,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, mo = ge("tooltip-bg"), rs = ge("tooltip-fg"), Qw = ge("popper-arrow-bg"), ek = {
  bg: mo.reference,
  color: rs.reference,
  [mo.variable]: "colors.gray.700",
  [rs.variable]: "colors.whiteAlpha.900",
  _dark: {
    [mo.variable]: "colors.gray.300",
    [rs.variable]: "colors.gray.900"
  },
  [Qw.variable]: mo.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, tk = {
  baseStyle: ek
}, rk = {
  Accordion: jv,
  Alert: k_,
  Avatar: B_,
  Badge: fn,
  Breadcrumb: U_,
  Button: eS,
  Checkbox: At,
  CloseButton: mS,
  Code: vS,
  Container: SS,
  Divider: CS,
  Drawer: VS,
  Editable: HS,
  Form: XS,
  FormError: r1,
  FormLabel: o1,
  Heading: a1,
  Input: U,
  Kbd: y1,
  Link: v1,
  List: k1,
  Menu: B1,
  Modal: q1,
  NumberInput: tx,
  PinInput: ix,
  Popover: gx,
  Progress: kx,
  Radio: Ax,
  Select: Ix,
  Skeleton: Lx,
  SkipLink: Ox,
  Slider: Zx,
  Spinner: ew,
  Stat: lw,
  Switch: bw,
  Table: Tw,
  Tabs: Ow,
  Tag: Kw,
  Textarea: Jw,
  Tooltip: tk,
  Card: iS,
  Stepper: dw
}, nk = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, ok = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, ik = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  }
}, sk = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, ak = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, lk = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, ck = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, uk = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, dk = {
  property: lk,
  easing: ck,
  duration: uk
}, fk = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, hk = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, pk = {
  breakpoints: ok,
  zIndices: fk,
  radii: sk,
  blur: hk,
  colors: ik,
  ...mh,
  sizes: ch,
  shadows: ak,
  space: lh,
  borders: nk,
  transition: dk
}, mk = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, gk = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, yk = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function bk(e) {
  return Ae(e) ? yk.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
const vk = "ltr", _k = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, vh = {
  semanticTokens: mk,
  direction: vk,
  ...pk,
  components: rk,
  styles: gk,
  config: _k
};
function Sk(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xk(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wk = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xk(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Sk(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Se = "-ms-", qo = "-moz-", W = "-webkit-", _h = "comm", La = "rule", Fa = "decl", kk = "@import", Sh = "@keyframes", Tk = "@layer", Ck = Math.abs, hi = String.fromCharCode, Pk = Object.assign;
function $k(e, t) {
  return ve(e, 0) ^ 45 ? (((t << 2 ^ ve(e, 0)) << 2 ^ ve(e, 1)) << 2 ^ ve(e, 2)) << 2 ^ ve(e, 3) : 0;
}
function xh(e) {
  return e.trim();
}
function Ak(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, r) {
  return e.replace(t, r);
}
function js(e, t) {
  return e.indexOf(t);
}
function ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cn(e, t, r) {
  return e.slice(t, r);
}
function Qe(e) {
  return e.length;
}
function Oa(e) {
  return e.length;
}
function go(e, t) {
  return t.push(e), e;
}
function Rk(e, t) {
  return e.map(t).join("");
}
var pi = 1, Cr = 1, wh = 0, Ee = 0, he = 0, Br = "";
function mi(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: pi, column: Cr, length: s, return: "" };
}
function Zr(e, t) {
  return Pk(mi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ek() {
  return he;
}
function Mk() {
  return he = Ee > 0 ? ve(Br, --Ee) : 0, Cr--, he === 10 && (Cr = 1, pi--), he;
}
function De() {
  return he = Ee < wh ? ve(Br, Ee++) : 0, Cr++, he === 10 && (Cr = 1, pi++), he;
}
function ot() {
  return ve(Br, Ee);
}
function Do() {
  return Ee;
}
function Wn(e, t) {
  return Cn(Br, e, t);
}
function Pn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kh(e) {
  return pi = Cr = 1, wh = Qe(Br = e), Ee = 0, [];
}
function Th(e) {
  return Br = "", e;
}
function Bo(e) {
  return xh(Wn(Ee - 1, Ns(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zk(e) {
  for (; (he = ot()) && he < 33; )
    De();
  return Pn(e) > 2 || Pn(he) > 3 ? "" : " ";
}
function Dk(e, t) {
  for (; --t && De() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); )
    ;
  return Wn(e, Do() + (t < 6 && ot() == 32 && De() == 32));
}
function Ns(e) {
  for (; De(); )
    switch (he) {
      // ] ) " '
      case e:
        return Ee;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ns(he);
        break;
      // (
      case 40:
        e === 41 && Ns(e);
        break;
      // \
      case 92:
        De();
        break;
    }
  return Ee;
}
function Bk(e, t) {
  for (; De() && e + he !== 57; )
    if (e + he === 84 && ot() === 47)
      break;
  return "/*" + Wn(t, Ee - 1) + "*" + hi(e === 47 ? e : De());
}
function Ik(e) {
  for (; !Pn(ot()); )
    De();
  return Wn(e, Ee);
}
function Vk(e) {
  return Th(Io("", null, null, null, [""], e = kh(e), 0, [0], e));
}
function Io(e, t, r, n, o, i, s, a, l) {
  for (var c = 0, d = 0, u = s, f = 0, h = 0, p = 0, y = 1, b = 1, g = 1, S = 0, x = "", P = o, w = i, T = n, $ = x; b; )
    switch (p = S, S = De()) {
      // (
      case 40:
        if (p != 108 && ve($, u - 1) == 58) {
          js($ += H(Bo(S), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += Bo(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += zk(p);
        break;
      // \
      case 92:
        $ += Dk(Do() - 1, 7);
        continue;
      // /
      case 47:
        switch (ot()) {
          case 42:
          case 47:
            go(Lk(Bk(De(), Do()), t, r), l);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * y:
        a[c++] = Qe($) * g;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            b = 0;
          // ;
          case 59 + d:
            g == -1 && ($ = H($, /\f/g, "")), h > 0 && Qe($) - u && go(h > 32 ? Zc($ + ";", n, r, u - 1) : Zc(H($, " ", "") + ";", n, r, u - 2), l);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (go(T = Xc($, t, r, c, d, o, a, x, P = [], w = [], u), i), S === 123)
              if (d === 0)
                Io($, t, T, T, P, i, u, a, w);
              else
                switch (f === 99 && ve($, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Io(e, T, T, n && go(Xc(e, T, T, 0, 0, o, a, x, o, P = [], u), w), o, w, u, a, n ? P : w);
                    break;
                  default:
                    Io($, T, T, T, [""], w, 0, a, w);
                }
        }
        c = d = h = 0, y = g = 1, x = $ = "", u = s;
        break;
      // :
      case 58:
        u = 1 + Qe($), h = p;
      default:
        if (y < 1) {
          if (S == 123)
            --y;
          else if (S == 125 && y++ == 0 && Mk() == 125)
            continue;
        }
        switch ($ += hi(S), S * y) {
          // &
          case 38:
            g = d > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            a[c++] = (Qe($) - 1) * g, g = 1;
            break;
          // @
          case 64:
            ot() === 45 && ($ += Bo(De())), f = ot(), d = u = Qe(x = $ += Ik(Do())), S++;
            break;
          // -
          case 45:
            p === 45 && Qe($) == 2 && (y = 0);
        }
    }
  return i;
}
function Xc(e, t, r, n, o, i, s, a, l, c, d) {
  for (var u = o - 1, f = o === 0 ? i : [""], h = Oa(f), p = 0, y = 0, b = 0; p < n; ++p)
    for (var g = 0, S = Cn(e, u + 1, u = Ck(y = s[p])), x = e; g < h; ++g)
      (x = xh(y > 0 ? f[g] + " " + S : H(S, /&\f/g, f[g]))) && (l[b++] = x);
  return mi(e, t, r, o === 0 ? La : a, l, c, d);
}
function Lk(e, t, r) {
  return mi(e, t, r, _h, hi(Ek()), Cn(e, 2, -2), 0);
}
function Zc(e, t, r, n) {
  return mi(e, t, r, Fa, Cn(e, 0, n), Cn(e, n + 1, -1), n);
}
function Sr(e, t) {
  for (var r = "", n = Oa(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Fk(e, t, r, n) {
  switch (e.type) {
    case Tk:
      if (e.children.length) break;
    case kk:
    case Fa:
      return e.return = e.return || e.value;
    case _h:
      return "";
    case Sh:
      return e.return = e.value + "{" + Sr(e.children, n) + "}";
    case La:
      e.value = e.props.join(",");
  }
  return Qe(r = Sr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ok(e) {
  var t = Oa(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function jk(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Jc = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Ch(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Nk = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = ot(), o === 38 && i === 12 && (r[n] = 1), !Pn(i); )
    De();
  return Wn(t, Ee);
}, Wk = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Pn(o)) {
      case 0:
        o === 38 && ot() === 12 && (r[n] = 1), t[n] += Nk(Ee - 1, r, n);
        break;
      case 2:
        t[n] += Bo(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = ot() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += hi(o);
    }
  while (o = De());
  return t;
}, Hk = function(t, r) {
  return Th(Wk(kh(t), r));
}, Qc = /* @__PURE__ */ new WeakMap(), Uk = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Qc.get(n)) && !o) {
      Qc.set(t, !0);
      for (var i = [], s = Hk(r, i), a = n.props, l = 0, c = 0; l < s.length; l++)
        for (var d = 0; d < a.length; d++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
    }
  }
}, qk = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ph(e, t) {
  switch ($k(e, t)) {
    // color-adjust
    case 5103:
      return W + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + qo + e + Se + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return W + e + Se + e + e;
    // order
    case 6165:
      return W + e + Se + "flex-" + e + e;
    // align-items
    case 5187:
      return W + e + H(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + Se + "flex-$1$2") + e;
    // align-self
    case 5443:
      return W + e + Se + "flex-item-" + H(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return W + e + Se + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return W + e + Se + H(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return W + e + Se + H(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return W + "box-" + H(e, "-grow", "") + W + e + Se + H(e, "grow", "positive") + e;
    // transition
    case 4554:
      return W + H(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    // cursor
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, W + "$1$`$1");
    // justify-content
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, W + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qe(e) - 1 - t > 6) switch (ve(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ve(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return H(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + qo + (ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~js(e, "stretch") ? Ph(H(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ve(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ve(e, Qe(e) - 3 - (~js(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return H(e, ":", ":" + W) + e;
        // (inline-)?fl(e)x
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Se + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ve(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return W + e + Se + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return W + e + Se + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return W + e + Se + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + Se + e + e;
  }
  return e;
}
var Gk = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Fa:
      t.return = Ph(t.value, t.length);
      break;
    case Sh:
      return Sr([Zr(t, {
        value: H(t.value, "@", "@" + W)
      })], o);
    case La:
      if (t.length) return Rk(t.props, function(i) {
        switch (Ak(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Sr([Zr(t, {
              props: [H(i, /:(read-\w+)/, ":" + qo + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Sr([Zr(t, {
              props: [H(i, /:(plac\w+)/, ":" + W + "input-$1")]
            }), Zr(t, {
              props: [H(i, /:(plac\w+)/, ":" + qo + "$1")]
            }), Zr(t, {
              props: [H(i, /:(plac\w+)/, Se + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Kk = [Gk], Yk = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var b = y.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Kk, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var b = y.getAttribute("data-emotion").split(" "), g = 1; g < b.length; g++)
        i[b[g]] = !0;
      a.push(y);
    }
  );
  var l, c = [Uk, qk];
  {
    var d, u = [Fk, jk(function(y) {
      d.insert(y);
    })], f = Ok(c.concat(o, u)), h = function(b) {
      return Sr(Vk(b), f);
    };
    l = function(b, g, S, x) {
      d = S, h(b ? b + "{" + g.styles + "}" : g.styles), x && (p.inserted[g.name] = !0);
    };
  }
  var p = {
    key: r,
    sheet: new wk({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return p.sheet.hydrate(a), p;
};
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Go.apply(null, arguments);
}
var ns = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;
function Xk() {
  if (eu) return G;
  eu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var T = w.$$typeof;
      switch (T) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case a:
                case d:
                case p:
                case h:
                case s:
                  return w;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function P(w) {
    return x(w) === c;
  }
  return G.AsyncMode = l, G.ConcurrentMode = c, G.ContextConsumer = a, G.ContextProvider = s, G.Element = t, G.ForwardRef = d, G.Fragment = n, G.Lazy = p, G.Memo = h, G.Portal = r, G.Profiler = i, G.StrictMode = o, G.Suspense = u, G.isAsyncMode = function(w) {
    return P(w) || x(w) === l;
  }, G.isConcurrentMode = P, G.isContextConsumer = function(w) {
    return x(w) === a;
  }, G.isContextProvider = function(w) {
    return x(w) === s;
  }, G.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, G.isForwardRef = function(w) {
    return x(w) === d;
  }, G.isFragment = function(w) {
    return x(w) === n;
  }, G.isLazy = function(w) {
    return x(w) === p;
  }, G.isMemo = function(w) {
    return x(w) === h;
  }, G.isPortal = function(w) {
    return x(w) === r;
  }, G.isProfiler = function(w) {
    return x(w) === i;
  }, G.isStrictMode = function(w) {
    return x(w) === o;
  }, G.isSuspense = function(w) {
    return x(w) === u;
  }, G.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === i || w === o || w === u || w === f || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === h || w.$$typeof === s || w.$$typeof === a || w.$$typeof === d || w.$$typeof === b || w.$$typeof === g || w.$$typeof === S || w.$$typeof === y);
  }, G.typeOf = x, G;
}
var tu;
function Zk() {
  return tu || (tu = 1, ns.exports = Xk()), ns.exports;
}
var os, ru;
function Jk() {
  if (ru) return os;
  ru = 1;
  var e = Zk(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function s(p) {
    return e.isMemo(p) ? o : i[p.$$typeof] || t;
  }
  var a = Object.defineProperty, l = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, u = Object.getPrototypeOf, f = Object.prototype;
  function h(p, y, b) {
    if (typeof y != "string") {
      if (f) {
        var g = u(y);
        g && g !== f && h(p, g, b);
      }
      var S = l(y);
      c && (S = S.concat(c(y)));
      for (var x = s(p), P = s(y), w = 0; w < S.length; ++w) {
        var T = S[w];
        if (!r[T] && !(b && b[T]) && !(P && P[T]) && !(x && x[T])) {
          var $ = d(y, T);
          try {
            a(p, T, $);
          } catch {
          }
        }
      }
    }
    return p;
  }
  return os = h, os;
}
Jk();
var Qk = !0;
function $h(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var ja = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Qk === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Na = function(t, r, n) {
  ja(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function eT(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var tT = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, rT = /[A-Z]|^ms/g, nT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ah = function(t) {
  return t.charCodeAt(1) === 45;
}, nu = function(t) {
  return t != null && typeof t != "boolean";
}, is = /* @__PURE__ */ Ch(function(e) {
  return Ah(e) ? e : e.replace(rT, "-$&").toLowerCase();
}), ou = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(nT, function(n, o, i) {
          return et = {
            name: o,
            styles: i,
            next: et
          }, o;
        });
  }
  return tT[t] !== 1 && !Ah(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function $n(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return et = {
          name: o.name,
          styles: o.styles,
          next: et
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            et = {
              name: s.name,
              styles: s.styles,
              next: et
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return oT(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = et, c = r(e);
        return et = l, $n(e, t, c);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var u = t[d];
  return u !== void 0 ? u : d;
}
function oT(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += $n(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : nu(a) && (n += is(i) + ":" + ou(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          nu(s[l]) && (n += is(i) + ":" + ou(i, s[l]) + ";");
      else {
        var c = $n(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += is(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var iu = /label:\s*([^\s;{]+)\s*(;|$)/g, et;
function gi(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  et = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += $n(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += $n(r, t, e[a]), n) {
      var l = i;
      o += l[a];
    }
  iu.lastIndex = 0;
  for (var c = "", d; (d = iu.exec(o)) !== null; )
    c += "-" + d[1];
  var u = eT(o) + c;
  return {
    name: u,
    styles: o,
    next: et
  };
}
var iT = function(t) {
  return t();
}, Rh = xc.useInsertionEffect ? xc.useInsertionEffect : !1, Eh = Rh || iT, su = Rh || je, Wa = /* @__PURE__ */ oe(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Yk({
    key: "css"
  }) : null
);
Wa.Provider;
var sT = function() {
  return E(Wa);
}, Ha = function(t) {
  return /* @__PURE__ */ wt(function(r, n) {
    var o = E(Wa);
    return t(r, o, n);
  });
}, Pr = /* @__PURE__ */ oe({}), aT = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Go({}, t, r);
}, lT = /* @__PURE__ */ Jc(function(e) {
  return Jc(function(t) {
    return aT(e, t);
  });
}), cT = function(t) {
  var r = E(Pr);
  return t.theme !== r && (r = lT(r)(t.theme)), /* @__PURE__ */ D(Pr.Provider, {
    value: r
  }, t.children);
}, Ua = {}.hasOwnProperty, Ws = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uT = function(t, r) {
  var n = {};
  for (var o in r)
    Ua.call(r, o) && (n[o] = r[o]);
  return n[Ws] = t, n;
}, dT = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ja(r, n, o), Eh(function() {
    return Na(r, n, o);
  }), null;
}, fT = /* @__PURE__ */ Ha(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Ws], i = [n], s = "";
  typeof e.className == "string" ? s = $h(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = gi(i, void 0, E(Pr));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    Ua.call(e, c) && c !== "css" && c !== Ws && (l[c] = e[c]);
  return l.className = s, r && (l.ref = r), /* @__PURE__ */ D(pe, null, /* @__PURE__ */ D(dT, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ D(o, l));
}), hT = fT, au = function(t, r) {
  var n = arguments;
  if (r == null || !Ua.call(r, "css"))
    return D.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = hT, i[1] = uT(t, r);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return D.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(au || (au = {}));
var yi = /* @__PURE__ */ Ha(function(e, t) {
  var r = e.styles, n = gi([r], void 0, E(Pr)), o = ue();
  return su(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), su(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Na(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function pT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return gi(t);
}
function mT() {
  var e = pT.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
const qa = oe({});
qa.displayName = "ColorModeContext";
function Ga() {
  const e = E(qa);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
const yo = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function gT(e = {}) {
  const { preventTransition: t = !0, nonce: r } = e, n = {
    setDataset: (o) => {
      const i = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = o, document.documentElement.style.colorScheme = o, i == null || i();
    },
    setClassName(o) {
      document.body.classList.add(o ? yo.dark : yo.light), document.body.classList.remove(o ? yo.light : yo.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(o) {
      return n.query().matches ?? o === "dark" ? "dark" : "light";
    },
    addListener(o) {
      const i = n.query(), s = (a) => {
        o(a.matches ? "dark" : "light");
      };
      return typeof i.addListener == "function" ? i.addListener(s) : i.addEventListener("change", s), () => {
        typeof i.removeListener == "function" ? i.removeListener(s) : i.removeEventListener("change", s);
      };
    },
    preventTransition() {
      const o = document.createElement("style");
      return o.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), r !== void 0 && (o.nonce = r), document.head.appendChild(o), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(o);
          });
        });
      };
    }
  };
  return n;
}
const yT = "chakra-ui-color-mode";
function bT(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const vT = bT(yT), lu = () => {
}, _T = O0() ? je : le;
function cu(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
const Mh = function(t) {
  const {
    value: r,
    children: n,
    options: {
      useSystemColorMode: o,
      initialColorMode: i,
      disableTransitionOnChange: s
    } = {},
    colorModeManager: a = vT
  } = t, l = sT(), c = i === "dark" ? "dark" : "light", [d, u] = _e(
    () => cu(a, c)
  ), [f, h] = _e(
    () => cu(a)
  ), { getSystemTheme: p, setClassName: y, setDataset: b, addListener: g } = Z(
    () => gT({
      preventTransition: s,
      nonce: l == null ? void 0 : l.nonce
    }),
    [s, l == null ? void 0 : l.nonce]
  ), S = i === "system" && !d ? f : d, x = Re(
    (T) => {
      const $ = T === "system" ? p() : T;
      u($), y($ === "dark"), b($), a.set($);
    },
    [a, p, y, b]
  );
  _T(() => {
    i === "system" && h(p());
  }, []), le(() => {
    const T = a.get();
    if (T) {
      x(T);
      return;
    }
    if (i === "system") {
      x("system");
      return;
    }
    x(c);
  }, [a, c, i, x]);
  const P = Re(() => {
    x(S === "dark" ? "light" : "dark");
  }, [S, x]);
  le(() => {
    if (o)
      return g(x);
  }, [o, g, x]);
  const w = Z(
    () => ({
      colorMode: r ?? S,
      toggleColorMode: r ? lu : P,
      setColorMode: r ? lu : x,
      forced: r !== void 0
    }),
    [S, P, x, r]
  );
  return /* @__PURE__ */ C(qa.Provider, { value: w, children: n });
};
Mh.displayName = "ColorModeProvider";
const zh = String.raw, Dh = zh`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, ST = () => /* @__PURE__ */ C(yi, { styles: Dh }), xT = ({ scope: e = "" }) => /* @__PURE__ */ C(
  yi,
  {
    styles: zh`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${Dh}
    `
  }
);
function wT(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = Z(() => lv(r), [r]);
  return /* @__PURE__ */ C(cT, { theme: o, children: [
    /* @__PURE__ */ C(kT, { root: t }),
    n
  ] });
}
function kT({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ C(yi, { styles: (r) => ({ [t]: r.__cssVars }) });
}
zr({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function TT() {
  const { colorMode: e } = Ga();
  return /* @__PURE__ */ C(
    yi,
    {
      styles: (t) => {
        const r = Jf(t, "styles.global"), n = rt(r, { theme: t, colorMode: e });
        return n ? oh(n)(t) : void 0;
      }
    }
  );
}
const [CT, PT] = zr({
  strict: !1,
  name: "PortalManagerContext"
});
function Bh(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ C(CT, { value: { zIndex: r }, children: t });
}
Bh.displayName = "PortalManager";
const Ih = oe({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Ih.displayName = "EnvironmentContext";
function Vh(e) {
  const { children: t, environment: r, disabled: n } = e, o = ue(null), i = Z(() => r || {
    getDocument: () => {
      var a;
      return ((a = o.current) == null ? void 0 : a.ownerDocument) ?? document;
    },
    getWindow: () => {
      var a;
      return ((a = o.current) == null ? void 0 : a.ownerDocument.defaultView) ?? window;
    }
  }, [r]), s = !n || !r;
  return /* @__PURE__ */ C(Ih.Provider, { value: i, children: [
    t,
    s && /* @__PURE__ */ C("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
Vh.displayName = "EnvironmentProvider";
const $T = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: i = !0,
    theme: s = {},
    environment: a,
    cssVarsRoot: l,
    disableEnvironment: c,
    disableGlobalStyle: d
  } = e, u = /* @__PURE__ */ C(
    Vh,
    {
      environment: a,
      disabled: c,
      children: t
    }
  );
  return /* @__PURE__ */ C(wT, { theme: s, cssVarsRoot: l, children: /* @__PURE__ */ C(
    Mh,
    {
      colorModeManager: r,
      options: s.config,
      children: [
        i ? /* @__PURE__ */ C(xT, { scope: o }) : /* @__PURE__ */ C(ST, {}),
        !d && /* @__PURE__ */ C(TT, {}),
        n ? /* @__PURE__ */ C(Bh, { zIndex: n, children: u }) : u
      ]
    }
  ) });
}, Ka = oe({});
function Ya(e) {
  const t = ue(null);
  return t.current === null && (t.current = e()), t.current;
}
const Xa = typeof window < "u", Lh = Xa ? je : le, Hn = /* @__PURE__ */ oe(null), Za = oe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class AT extends $e {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = r.offsetParent, o = n instanceof HTMLElement && n.offsetWidth || 0, i = this.props.sizeRef.current;
      i.height = r.offsetHeight || 0, i.width = r.offsetWidth || 0, i.top = r.offsetTop, i.left = r.offsetLeft, i.right = o - i.width - i.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function RT({ children: e, isPresent: t, anchorX: r }) {
  const n = Er(), o = ue(null), i = ue({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: s } = E(Za);
  return Ln(() => {
    const { width: a, height: l, top: c, left: d, right: u } = i.current;
    if (t || !o.current || !a || !l)
      return;
    const f = r === "left" ? `left: ${d}` : `right: ${u}`;
    o.current.dataset.motionPopId = n;
    const h = document.createElement("style");
    return s && (h.nonce = s), document.head.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${f}px !important;
            top: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(h);
    };
  }, [t]), C(AT, { isPresent: t, childRef: o, sizeRef: i, children: xa(e, { ref: o }) });
}
const ET = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: s, anchorX: a }) => {
  const l = Ya(MT), c = Er(), d = Re((f) => {
    l.set(f, !0);
    for (const h of l.values())
      if (!h)
        return;
    n && n();
  }, [l, n]), u = Z(
    () => ({
      id: c,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: d,
      register: (f) => (l.set(f, !1), () => l.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? [Math.random(), d] : [r, d]
  );
  return Z(() => {
    l.forEach((f, h) => l.set(h, !1));
  }, [r]), le(() => {
    !r && !l.size && n && n();
  }, [r]), s === "popLayout" && (e = C(RT, { isPresent: r, anchorX: a, children: e })), C(Hn.Provider, { value: u, children: e });
};
function MT() {
  return /* @__PURE__ */ new Map();
}
function Fh(e = !0) {
  const t = E(Hn);
  if (t === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: n, register: o } = t, i = Er();
  le(() => {
    if (e)
      return o(i);
  }, [e]);
  const s = Re(() => e && n && n(i), [i, n, e]);
  return !r && n ? [!1, s] : [!0];
}
function zT() {
  return DT(E(Hn));
}
function DT(e) {
  return e === null ? !0 : e.isPresent;
}
const bo = (e) => e.key || "";
function uu(e) {
  const t = [];
  return ii.forEach(e, (r) => {
    Xt(r) && t.push(r);
  }), t;
}
const BT = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: s = !1, anchorX: a = "left" }) => {
  const [l, c] = Fh(s), d = Z(() => uu(e), [e]), u = s && !l ? [] : d.map(bo), f = ue(!0), h = ue(d), p = Ya(() => /* @__PURE__ */ new Map()), [y, b] = _e(d), [g, S] = _e(d);
  Lh(() => {
    f.current = !1, h.current = d;
    for (let w = 0; w < g.length; w++) {
      const T = bo(g[w]);
      u.includes(T) ? p.delete(T) : p.get(T) !== !0 && p.set(T, !1);
    }
  }, [g, u.length, u.join("-")]);
  const x = [];
  if (d !== y) {
    let w = [...d];
    for (let T = 0; T < g.length; T++) {
      const $ = g[T], R = bo($);
      u.includes(R) || (w.splice(T, 0, $), x.push($));
    }
    return i === "wait" && x.length && (w = x), S(uu(w)), b(d), null;
  }
  const { forceRender: P } = E(Ka);
  return C(pe, { children: g.map((w) => {
    const T = bo(w), $ = s && !l ? !1 : d === g || u.includes(T), R = () => {
      if (p.has(T))
        p.set(T, !0);
      else
        return;
      let I = !0;
      p.forEach((F) => {
        F || (I = !1);
      }), I && (P == null || P(), S(h.current), s && (c == null || c()), n && n());
    };
    return C(ET, { isPresent: $, initial: !f.current || r ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, onExitComplete: $ ? void 0 : R, anchorX: a, children: w }, T);
  }) });
};
function Ja(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qa(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let Oh = Be;
const IT = {
  useManualTiming: !1
};
// @__NO_SIDE_EFFECTS__
function el(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $r = /* @__NO_SIDE_EFFECTS__ */ (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
};
class tl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ja(this.subscriptions, t), () => Qa(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, bt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function jh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const VT = /* @__PURE__ */ el(() => window.ScrollTimeline !== void 0);
class LT {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let n = 0; n < this.animations.length; n++)
      this.animations[n][t] = r;
  }
  attachTimeline(t, r) {
    const n = this.animations.map((o) => {
      if (VT() && o.attachTimeline)
        return o.attachTimeline(t);
      if (typeof r == "function")
        return r(o);
    });
    return () => {
      n.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class FT extends LT {
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
}
function rl(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Hs = 2e4;
function Nh(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Hs; )
    t += r, n = e.next(t);
  return t >= Hs ? 1 / 0 : t;
}
function nl(e) {
  return typeof e == "function";
}
function du(e, t) {
  e.timeline = t, e.onfinish = null;
}
const ol = (e) => Array.isArray(e) && typeof e[0] == "number", OT = {
  linearEasing: void 0
};
function jT(e, t) {
  const r = /* @__PURE__ */ el(e);
  return () => {
    var n;
    return (n = OT[t]) !== null && n !== void 0 ? n : r();
  };
}
const Ko = /* @__PURE__ */ jT(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Wh = (e, t, r = 10) => {
  let n = "";
  const o = Math.max(Math.round(t / r), 2);
  for (let i = 0; i < o; i++)
    n += e(/* @__PURE__ */ $r(0, o - 1, i)) + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};
function Hh(e) {
  return !!(typeof e == "function" && Ko() || !e || typeof e == "string" && (e in Us || Ko()) || ol(e) || Array.isArray(e) && e.every(Hh));
}
const sn = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Us = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ sn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ sn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ sn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ sn([0.33, 1.53, 0.69, 0.99])
};
function Uh(e, t) {
  if (e)
    return typeof e == "function" && Ko() ? Wh(e, t) : ol(e) ? sn(e) : Array.isArray(e) ? e.map((r) => Uh(r, t) || Us.easeOut) : Us[e];
}
const vo = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], fu = {
  value: null
};
function NT(e, t) {
  let r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function c(u) {
    s.has(u) && (d.schedule(u), e()), l++, u(a);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, f = !1, h = !1) => {
      const y = h && o ? r : n;
      return f && s.add(u), y.has(u) || y.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, o) {
        i = !0;
        return;
      }
      o = !0, [r, n] = [n, r], r.forEach(c), t && fu.value && fu.value.frameloop[t].push(l), l = 0, r.clear(), o = !1, i && (i = !1, d.process(u));
    }
  };
  return d;
}
const WT = 40;
function qh(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => r = !0, s = vo.reduce((g, S) => (g[S] = NT(i, t ? S : void 0), g), {}), { read: a, resolveKeyframes: l, update: c, preRender: d, render: u, postRender: f } = s, h = () => {
    const g = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(g - o.timestamp, WT), 1), o.timestamp = g, o.isProcessing = !0, a.process(o), l.process(o), c.process(o), d.process(o), u.process(o), f.process(o), o.isProcessing = !1, r && t && (n = !1, e(h));
  }, p = () => {
    r = !0, n = !0, o.isProcessing || e(h);
  };
  return { schedule: vo.reduce((g, S) => {
    const x = s[S];
    return g[S] = (P, w = !1, T = !1) => (r || p(), x.schedule(P, w, T)), g;
  }, {}), cancel: (g) => {
    for (let S = 0; S < vo.length; S++)
      s[vo[S]].cancel(g);
  }, state: o, steps: s };
}
const { schedule: J, cancel: Et, state: be, steps: ss } = /* @__PURE__ */ qh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0), { schedule: il } = /* @__PURE__ */ qh(queueMicrotask, !1);
let Vo;
function HT() {
  Vo = void 0;
}
const it = {
  now: () => (Vo === void 0 && it.set(be.isProcessing || IT.useManualTiming ? be.timestamp : performance.now()), Vo),
  set: (e) => {
    Vo = e, queueMicrotask(HT);
  }
}, Ue = {
  x: !1,
  y: !1
};
function Gh() {
  return Ue.x || Ue.y;
}
function UT(e) {
  return e === "x" || e === "y" ? Ue[e] ? null : (Ue[e] = !0, () => {
    Ue[e] = !1;
  }) : Ue.x || Ue.y ? null : (Ue.x = Ue.y = !0, () => {
    Ue.x = Ue.y = !1;
  });
}
function qT(e, t, r) {
  var n;
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let o = document;
    const i = (n = void 0) !== null && n !== void 0 ? n : o.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Kh(e, t) {
  const r = qT(e), n = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: n.signal
  };
  return [r, o, () => n.abort()];
}
function hu(e) {
  return !(e.pointerType === "touch" || Gh());
}
function GT(e, t, r = {}) {
  const [n, o, i] = Kh(e, r), s = (a) => {
    if (!hu(a))
      return;
    const { target: l } = a, c = t(l, a);
    if (typeof c != "function" || !l)
      return;
    const d = (u) => {
      hu(u) && (c(u), l.removeEventListener("pointerleave", d));
    };
    l.addEventListener("pointerleave", d, o);
  };
  return n.forEach((a) => {
    a.addEventListener("pointerenter", s, o);
  }), i;
}
const Yh = (e, t) => t ? e === t ? !0 : Yh(e, t.parentElement) : !1, sl = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, KT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function YT(e) {
  return KT.has(e.tagName) || e.tabIndex !== -1;
}
const an = /* @__PURE__ */ new WeakSet();
function pu(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function as(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const XT = (e, t) => {
  const r = e.currentTarget;
  if (!r)
    return;
  const n = pu(() => {
    if (an.has(r))
      return;
    as(r, "down");
    const o = pu(() => {
      as(r, "up");
    }), i = () => as(r, "cancel");
    r.addEventListener("keyup", o, t), r.addEventListener("blur", i, t);
  });
  r.addEventListener("keydown", n, t), r.addEventListener("blur", () => r.removeEventListener("keydown", n), t);
};
function mu(e) {
  return sl(e) && !Gh();
}
function ZT(e, t, r = {}) {
  const [n, o, i] = Kh(e, r), s = (a) => {
    const l = a.currentTarget;
    if (!mu(a) || an.has(l))
      return;
    an.add(l);
    const c = t(l, a), d = (h, p) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", f), !(!mu(h) || !an.has(l)) && (an.delete(l), typeof c == "function" && c(h, { success: p }));
    }, u = (h) => {
      d(h, l === window || l === document || r.useGlobalTarget || Yh(l, h.target));
    }, f = (h) => {
      d(h, !1);
    };
    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", f, o);
  };
  return n.forEach((a) => {
    (r.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), a instanceof HTMLElement && (a.addEventListener("focus", (c) => XT(c, o)), !YT(a) && a.tabIndex === null && (a.tabIndex = 0));
  }), i;
}
const gu = 30, JT = (e) => !isNaN(parseFloat(e));
class QT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, r = {}) {
    this.version = "12.6.1", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      const i = it.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = it.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = JT(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new tl());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), J.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, r = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = it.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > gu)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, gu);
    return jh(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function An(e, t) {
  return new QT(e, t);
}
const Xh = oe({ strict: !1 }), yu = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ar = {};
for (const e in yu)
  Ar[e] = {
    isEnabled: (t) => yu[e].some((r) => !!t[r])
  };
function eC(e) {
  for (const t in e)
    Ar[t] = {
      ...Ar[t],
      ...e[t]
    };
}
const tC = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Yo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tC.has(e);
}
let Zh = (e) => !Yo(e);
function rC(e) {
  e && (Zh = (t) => t.startsWith("on") ? !Yo(t) : e(t));
}
try {
  rC(require("@emotion/is-prop-valid").default);
} catch {
}
function nC(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Zh(o) || r === !0 && Yo(o) || !t && !Yo(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function oC(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...n) => e(...n);
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const bi = /* @__PURE__ */ oe({});
function vi(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Rn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const al = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ll = ["initial", ...al];
function _i(e) {
  return vi(e.animate) || ll.some((t) => Rn(e[t]));
}
function Jh(e) {
  return !!(_i(e) || e.variants);
}
function iC(e, t) {
  if (_i(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Rn(r) ? r : void 0,
      animate: Rn(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function sC(e) {
  const { initial: t, animate: r } = iC(e, E(bi));
  return Z(() => ({ initial: t, animate: r }), [bu(t), bu(r)]);
}
function bu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const aC = Symbol.for("motionComponentSymbol");
function ur(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function lC(e, t, r) {
  return Re(
    (n) => {
      n && e.onMount && e.onMount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ur(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const cl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), cC = "framerAppearId", Qh = "data-" + cl(cC), ep = oe({});
function uC(e, t, r, n, o) {
  var i, s;
  const { visualElement: a } = E(bi), l = E(Xh), c = E(Hn), d = E(Za).reducedMotion, u = ue(null);
  n = n || l.renderer, !u.current && n && (u.current = n(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: d
  }));
  const f = u.current, h = E(ep);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && dC(u.current, r, o, h);
  const p = ue(!1);
  Ln(() => {
    f && p.current && f.update(r, c);
  });
  const y = r[Qh], b = ue(!!y && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, y)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, y)));
  return Lh(() => {
    f && (p.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), il.render(f.render), b.current && f.animationState && f.animationState.animateChanges());
  }), le(() => {
    f && (!b.current && f.animationState && f.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, y);
    }), b.current = !1));
  }), f;
}
function dC(e, t, r, n) {
  const { layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : tp(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!s || a && ur(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: n,
    layoutScroll: l,
    layoutRoot: c
  });
}
function tp(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : tp(e.parent);
}
function fC({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  var i, s;
  e && eC(e);
  function a(c, d) {
    let u;
    const f = {
      ...E(Za),
      ...c,
      layoutId: hC(c)
    }, { isStatic: h } = f, p = sC(c), y = n(c, h);
    if (!h && Xa) {
      pC();
      const b = mC(f);
      u = b.MeasureLayout, p.visualElement = uC(o, y, f, t, b.ProjectionNode);
    }
    return C(bi.Provider, { value: p, children: [u && p.visualElement ? C(u, { visualElement: p.visualElement, ...f }) : null, r(o, c, lC(y, p.visualElement, d), y, h, p.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(s = (i = o.displayName) !== null && i !== void 0 ? i : o.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = wt(a);
  return l[aC] = o, l;
}
function hC({ layoutId: e }) {
  const t = E(Ka).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function pC(e, t) {
  E(Xh).strict;
}
function mC(e) {
  const { drag: t, layout: r } = Ar;
  if (!t && !r)
    return {};
  const n = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
const rp = (e) => (t) => typeof t == "string" && t.startsWith(e), ul = /* @__PURE__ */ rp("--"), gC = /* @__PURE__ */ rp("var(--"), dl = (e) => gC(e) ? yC.test(e.split("/*")[0].trim()) : !1, yC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, En = {};
function bC(e) {
  for (const t in e)
    En[t] = e[t], ul(t) && (En[t].isCSSVariable = !0);
}
const Ir = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Qt = new Set(Ir);
function np(e, { layout: t, layoutId: r }) {
  return Qt.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!En[e] || e === "opacity");
}
const we = (e) => !!(e && e.getVelocity), op = (e, t) => t && typeof e == "number" ? t.transform(e) : e, xt = (e, t, r) => r > t ? t : r < e ? e : r, Vr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Mn = {
  ...Vr,
  transform: (e) => xt(0, 1, e)
}, _o = {
  ...Vr,
  default: 1
}, Un = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), $t = /* @__PURE__ */ Un("deg"), st = /* @__PURE__ */ Un("%"), B = /* @__PURE__ */ Un("px"), vC = /* @__PURE__ */ Un("vh"), _C = /* @__PURE__ */ Un("vw"), vu = {
  ...st,
  parse: (e) => st.parse(e) / 100,
  transform: (e) => st.transform(e * 100)
}, SC = {
  // Border props
  borderWidth: B,
  borderTopWidth: B,
  borderRightWidth: B,
  borderBottomWidth: B,
  borderLeftWidth: B,
  borderRadius: B,
  radius: B,
  borderTopLeftRadius: B,
  borderTopRightRadius: B,
  borderBottomRightRadius: B,
  borderBottomLeftRadius: B,
  // Positioning props
  width: B,
  maxWidth: B,
  height: B,
  maxHeight: B,
  top: B,
  right: B,
  bottom: B,
  left: B,
  // Spacing props
  padding: B,
  paddingTop: B,
  paddingRight: B,
  paddingBottom: B,
  paddingLeft: B,
  margin: B,
  marginTop: B,
  marginRight: B,
  marginBottom: B,
  marginLeft: B,
  // Misc
  backgroundPositionX: B,
  backgroundPositionY: B
}, xC = {
  rotate: $t,
  rotateX: $t,
  rotateY: $t,
  rotateZ: $t,
  scale: _o,
  scaleX: _o,
  scaleY: _o,
  scaleZ: _o,
  skew: $t,
  skewX: $t,
  skewY: $t,
  distance: B,
  translateX: B,
  translateY: B,
  translateZ: B,
  x: B,
  y: B,
  z: B,
  perspective: B,
  transformPerspective: B,
  opacity: Mn,
  originX: vu,
  originY: vu,
  originZ: B
}, _u = {
  ...Vr,
  transform: Math.round
}, fl = {
  ...SC,
  ...xC,
  zIndex: _u,
  size: B,
  // SVG
  fillOpacity: Mn,
  strokeOpacity: Mn,
  numOctaves: _u
}, wC = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, kC = Ir.length;
function TC(e, t, r) {
  let n = "", o = !0;
  for (let i = 0; i < kC; i++) {
    const s = Ir[i], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || r) {
      const c = op(a, fl[s]);
      if (!l) {
        o = !1;
        const d = wC[s] || s;
        n += `${d}(${c}) `;
      }
      r && (t[s] = c);
    }
  }
  return n = n.trim(), r ? n = r(t, o ? "" : n) : o && (n = "none"), n;
}
function hl(e, t, r) {
  const { style: n, vars: o, transformOrigin: i } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const c = t[l];
    if (Qt.has(l)) {
      s = !0;
      continue;
    } else if (ul(l)) {
      o[l] = c;
      continue;
    } else {
      const d = op(c, fl[l]);
      l.startsWith("origin") ? (a = !0, i[l] = d) : n[l] = d;
    }
  }
  if (t.transform || (s || r ? n.transform = TC(t, e.transform, r) : n.transform && (n.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = i;
    n.transformOrigin = `${l} ${c} ${d}`;
  }
}
const pl = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ip(e, t, r) {
  for (const n in t)
    !we(t[n]) && !np(n, r) && (e[n] = t[n]);
}
function CC({ transformTemplate: e }, t) {
  return Z(() => {
    const r = pl();
    return hl(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function PC(e, t) {
  const r = e.style || {}, n = {};
  return ip(n, r, e), Object.assign(n, CC(e, t)), n;
}
function $C(e, t) {
  const r = {}, n = PC(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = n, r;
}
const AC = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ml(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(AC.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const RC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, EC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function MC(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? RC : EC;
  e[i.offset] = B.transform(-n);
  const s = B.transform(t), a = B.transform(r);
  e[i.array] = `${s} ${a}`;
}
function Su(e, t, r) {
  return typeof e == "string" ? e : B.transform(t + r * e);
}
function zC(e, t, r) {
  const n = Su(t, e.x, e.width), o = Su(r, e.y, e.height);
  return `${n} ${o}`;
}
function gl(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, d, u) {
  if (hl(e, c, u), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: p } = e;
  f.transform && (p && (h.transform = f.transform), delete f.transform), p && (o !== void 0 || i !== void 0 || h.transform) && (h.transformOrigin = zC(p, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (f.x = t), r !== void 0 && (f.y = r), n !== void 0 && (f.scale = n), s !== void 0 && MC(f, s, a, l, !1);
}
const sp = () => ({
  ...pl(),
  attrs: {}
}), yl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function DC(e, t, r, n) {
  const o = Z(() => {
    const i = sp();
    return gl(i, t, yl(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ip(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function BC(e = !1) {
  return (r, n, o, { latestValues: i }, s) => {
    const l = (ml(r) ? DC : $C)(n, i, s, r), c = nC(n, typeof r == "string", e), d = r !== pe ? { ...c, ...l, ref: o } : {}, { children: u } = n, f = Z(() => we(u) ? u.get() : u, [u]);
    return D(r, {
      ...d,
      children: f
    });
  };
}
function xu(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, n) => {
    t[0][n] = r.get(), t[1][n] = r.getVelocity();
  }), t;
}
function bl(e, t, r, n) {
  if (typeof t == "function") {
    const [o, i] = xu(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = xu(n);
    t = t(r !== void 0 ? r : e.custom, o, i);
  }
  return t;
}
const qs = (e) => Array.isArray(e), IC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), VC = (e) => qs(e) ? e[e.length - 1] || 0 : e;
function Lo(e) {
  const t = we(e) ? e.get() : e;
  return IC(t) ? t.toValue() : t;
}
function LC({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: r }, n, o, i) {
  const s = {
    latestValues: FC(n, o, i, e),
    renderState: t()
  };
  return r && (s.onMount = (a) => r({ props: n, current: a, ...s }), s.onUpdate = (a) => r(a)), s;
}
const ap = (e) => (t, r) => {
  const n = E(bi), o = E(Hn), i = () => LC(e, t, n, o);
  return r ? i() : Ya(i);
};
function FC(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = Lo(i[f]);
  let { initial: s, animate: a } = e;
  const l = _i(e), c = Jh(e);
  t && c && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let d = r ? r.initial === !1 : !1;
  d = d || s === !1;
  const u = d ? a : s;
  if (u && typeof u != "boolean" && !vi(u)) {
    const f = Array.isArray(u) ? u : [u];
    for (let h = 0; h < f.length; h++) {
      const p = bl(e, f[h]);
      if (p) {
        const { transitionEnd: y, transition: b, ...g } = p;
        for (const S in g) {
          let x = g[S];
          if (Array.isArray(x)) {
            const P = d ? x.length - 1 : 0;
            x = x[P];
          }
          x !== null && (o[S] = x);
        }
        for (const S in y)
          o[S] = y[S];
      }
    }
  }
  return o;
}
function vl(e, t, r) {
  var n;
  const { style: o } = e, i = {};
  for (const s in o)
    (we(o[s]) || t.style && we(t.style[s]) || np(s, e) || ((n = r == null ? void 0 : r.getValue(s)) === null || n === void 0 ? void 0 : n.liveStyle) !== void 0) && (i[s] = o[s]);
  return i;
}
const OC = {
  useVisualState: ap({
    scrapeMotionValuesFromProps: vl,
    createRenderState: pl
  })
};
function lp(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function cp(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const up = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function dp(e, t, r, n) {
  cp(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(up.has(o) ? o : cl(o), t.attrs[o]);
}
function fp(e, t, r) {
  const n = vl(e, t, r);
  for (const o in e)
    if (we(e[o]) || we(t[o])) {
      const i = Ir.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      n[i] = e[o];
    }
  return n;
}
const wu = ["x", "y", "width", "height", "cx", "cy", "r"], jC = {
  useVisualState: ap({
    scrapeMotionValuesFromProps: fp,
    createRenderState: sp,
    onUpdate: ({ props: e, prevProps: t, current: r, renderState: n, latestValues: o }) => {
      if (!r)
        return;
      let i = !!e.drag;
      if (!i) {
        for (const a in o)
          if (Qt.has(a)) {
            i = !0;
            break;
          }
      }
      if (!i)
        return;
      let s = !t;
      if (t)
        for (let a = 0; a < wu.length; a++) {
          const l = wu[a];
          e[l] !== t[l] && (s = !0);
        }
      s && J.read(() => {
        lp(r, n), J.render(() => {
          gl(n, o, yl(r.tagName), e.transformTemplate), dp(r, n);
        });
      });
    }
  })
};
function NC(e, t) {
  return function(n, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...ml(n) ? jC : OC,
      preloadedFeatures: e,
      useRender: BC(o),
      createVisualElement: t,
      Component: n
    };
    return fC(s);
  };
}
function zn(e, t, r) {
  const n = e.getProps();
  return bl(n, t, r !== void 0 ? r : n.custom, e);
}
const hp = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ir
]);
function WC(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, An(r));
}
function HC(e, t) {
  const r = zn(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r || {};
  i = { ...i, ...n };
  for (const s in i) {
    const a = VC(i[s]);
    WC(e, s, a);
  }
}
function UC(e) {
  return !!(we(e) && e.add);
}
function Gs(e, t) {
  const r = e.getValue("willChange");
  if (UC(r))
    return r.add(t);
}
function pp(e) {
  return e.props[Qh];
}
const mp = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, qC = 1e-7, GC = 12;
function KC(e, t, r, n, o) {
  let i, s, a = 0;
  do
    s = t + (r - t) / 2, i = mp(s, n, o) - e, i > 0 ? r = s : t = s;
  while (Math.abs(i) > qC && ++a < GC);
  return s;
}
function qn(e, t, r, n) {
  if (e === t && r === n)
    return Be;
  const o = (i) => KC(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : mp(o(i), t, n);
}
const gp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, yp = (e) => (t) => 1 - e(1 - t), bp = /* @__PURE__ */ qn(0.33, 1.53, 0.69, 0.99), _l = /* @__PURE__ */ yp(bp), vp = /* @__PURE__ */ gp(_l), _p = (e) => (e *= 2) < 1 ? 0.5 * _l(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Sl = (e) => 1 - Math.sin(Math.acos(e)), Sp = yp(Sl), xp = gp(Sl), wp = (e) => /^0[^.\s]+$/u.test(e);
function YC(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || wp(e) : !0;
}
const gn = (e) => Math.round(e * 1e5) / 1e5, xl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function XC(e) {
  return e == null;
}
const ZC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, wl = (e, t) => (r) => !!(typeof r == "string" && ZC.test(r) && r.startsWith(e) || t && !XC(r) && Object.prototype.hasOwnProperty.call(r, t)), kp = (e, t, r) => (n) => {
  if (typeof n != "string")
    return n;
  const [o, i, s, a] = n.match(xl);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, JC = (e) => xt(0, 255, e), ls = {
  ...Vr,
  transform: (e) => Math.round(JC(e))
}, Nt = {
  test: /* @__PURE__ */ wl("rgb", "red"),
  parse: /* @__PURE__ */ kp("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + ls.transform(e) + ", " + ls.transform(t) + ", " + ls.transform(r) + ", " + gn(Mn.transform(n)) + ")"
};
function QC(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ks = {
  test: /* @__PURE__ */ wl("#"),
  parse: QC,
  transform: Nt.transform
}, dr = {
  test: /* @__PURE__ */ wl("hsl", "hue"),
  parse: /* @__PURE__ */ kp("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + st.transform(gn(t)) + ", " + st.transform(gn(r)) + ", " + gn(Mn.transform(n)) + ")"
}, xe = {
  test: (e) => Nt.test(e) || Ks.test(e) || dr.test(e),
  parse: (e) => Nt.test(e) ? Nt.parse(e) : dr.test(e) ? dr.parse(e) : Ks.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Nt.transform(e) : dr.transform(e)
}, eP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tP(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(xl)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(eP)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Tp = "number", Cp = "color", rP = "var", nP = "var(", ku = "${}", oP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Dn(e) {
  const t = e.toString(), r = [], n = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const a = t.replace(oP, (l) => (xe.test(l) ? (n.color.push(i), o.push(Cp), r.push(xe.parse(l))) : l.startsWith(nP) ? (n.var.push(i), o.push(rP), r.push(l)) : (n.number.push(i), o.push(Tp), r.push(parseFloat(l))), ++i, ku)).split(ku);
  return { values: r, split: a, indexes: n, types: o };
}
function Pp(e) {
  return Dn(e).values;
}
function $p(e) {
  const { split: t, types: r } = Dn(e), n = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (i += t[s], o[s] !== void 0) {
        const a = r[s];
        a === Tp ? i += gn(o[s]) : a === Cp ? i += xe.transform(o[s]) : i += o[s];
      }
    return i;
  };
}
const iP = (e) => typeof e == "number" ? 0 : e;
function sP(e) {
  const t = Pp(e);
  return $p(e)(t.map(iP));
}
const Mt = {
  test: tP,
  parse: Pp,
  createTransformer: $p,
  getAnimatableNone: sP
}, aP = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function lP(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(xl) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = aP.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const cP = /\b([a-z-]*)\(.*?\)/gu, Ys = {
  ...Mt,
  getAnimatableNone: (e) => {
    const t = e.match(cP);
    return t ? t.map(lP).join(" ") : e;
  }
}, uP = {
  ...fl,
  // Color props
  color: xe,
  backgroundColor: xe,
  outlineColor: xe,
  fill: xe,
  stroke: xe,
  // Border props
  borderColor: xe,
  borderTopColor: xe,
  borderRightColor: xe,
  borderBottomColor: xe,
  borderLeftColor: xe,
  filter: Ys,
  WebkitFilter: Ys
}, Ap = (e) => uP[e];
function Rp(e, t) {
  let r = Ap(e);
  return r !== Ys && (r = Mt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const dP = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function fP(e, t, r) {
  let n = 0, o;
  for (; n < e.length && !o; ) {
    const i = e[n];
    typeof i == "string" && !dP.has(i) && Dn(i).values.length && (o = e[n]), n++;
  }
  if (o && r)
    for (const i of t)
      e[i] = Rp(r, o);
}
const Wt = (e) => e * 180 / Math.PI, Xs = (e) => {
  const t = Wt(Math.atan2(e[1], e[0]));
  return Zs(t);
}, hP = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Xs,
  rotateZ: Xs,
  skewX: (e) => Wt(Math.atan(e[1])),
  skewY: (e) => Wt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Zs = (e) => (e = e % 360, e < 0 && (e += 360), e), Tu = Xs, Cu = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Pu = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), pP = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Cu,
  scaleY: Pu,
  scale: (e) => (Cu(e) + Pu(e)) / 2,
  rotateX: (e) => Zs(Wt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Zs(Wt(Math.atan2(-e[2], e[0]))),
  rotateZ: Tu,
  rotate: Tu,
  skewX: (e) => Wt(Math.atan(e[4])),
  skewY: (e) => Wt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function $u(e) {
  return e.includes("scale") ? 1 : 0;
}
function Js(e, t) {
  if (!e || e === "none")
    return $u(t);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, o;
  if (r)
    n = pP, o = r;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = hP, o = a;
  }
  if (!o)
    return $u(t);
  const i = n[t], s = o[1].split(",").map(gP);
  return typeof i == "function" ? i(s) : s[i];
}
const mP = (e, t) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return Js(r, t);
};
function gP(e) {
  return parseFloat(e.trim());
}
const Au = (e) => e === Vr || e === B, yP = /* @__PURE__ */ new Set(["x", "y", "z"]), bP = Ir.filter((e) => !yP.has(e));
function vP(e) {
  const t = [];
  return bP.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const Rr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Js(t, "x"),
  y: (e, { transform: t }) => Js(t, "y")
};
Rr.translateX = Rr.x;
Rr.translateY = Rr.y;
const Gt = /* @__PURE__ */ new Set();
let Qs = !1, ea = !1;
function Ep() {
  if (ea) {
    const e = Array.from(Gt).filter((n) => n.needsMeasurement), t = new Set(e.map((n) => n.element)), r = /* @__PURE__ */ new Map();
    t.forEach((n) => {
      const o = vP(n);
      o.length && (r.set(n, o), n.render());
    }), e.forEach((n) => n.measureInitialState()), t.forEach((n) => {
      n.render();
      const o = r.get(n);
      o && o.forEach(([i, s]) => {
        var a;
        (a = n.getValue(i)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((n) => n.measureEndState()), e.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  ea = !1, Qs = !1, Gt.forEach((e) => e.complete()), Gt.clear();
}
function Mp() {
  Gt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ea = !0);
  });
}
function _P() {
  Mp(), Ep();
}
class kl {
  constructor(t, r, n, o, i, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = n, this.motionValue = o, this.element = i, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Gt.add(this), Qs || (Qs = !0, J.read(Mp), J.resolveKeyframes(Ep))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: r, element: n, motionValue: o } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (n && r) {
            const l = n.readValue(r, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else
          t[i] = t[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Gt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Gt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const zp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), SP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function xP(e) {
  const t = SP.exec(e);
  if (!t)
    return [,];
  const [, r, n, o] = t;
  return [`--${r ?? n}`, o];
}
function Dp(e, t, r = 1) {
  const [n, o] = xP(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const s = i.trim();
    return zp(s) ? parseFloat(s) : s;
  }
  return dl(o) ? Dp(o, t, r + 1) : o;
}
const Bp = (e) => (t) => t.test(e), wP = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ip = [Vr, B, st, $t, _C, vC, wP], Ru = (e) => Ip.find(Bp(e));
class Vp extends kl {
  constructor(t, r, n, o, i) {
    super(t, r, n, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && (c = c.trim(), dl(c))) {
        const d = Dp(c, r.current);
        d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !hp.has(n) || t.length !== 2)
      return;
    const [o, i] = t, s = Ru(o), a = Ru(i);
    if (s !== a)
      if (Au(s) && Au(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this, n = [];
    for (let o = 0; o < t.length; o++)
      YC(t[o]) && n.push(o);
    n.length && fP(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t || !t.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Rr[n](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
    const o = r[r.length - 1];
    o !== void 0 && t.getValue(n, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: n, unresolvedKeyframes: o } = this;
    if (!r || !r.current)
      return;
    const i = r.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1, a = o[s];
    o[s] = Rr[n](r.measureViewportBox(), window.getComputedStyle(r.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, c]) => {
      r.getValue(l).set(c);
    }), this.resolveNoneKeyframes();
  }
}
const Eu = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Mt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function kP(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function TP(e, t, r, n) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], s = Eu(o, t), a = Eu(i, t);
  return !s || !a ? !1 : kP(e) || (r === "spring" || nl(r)) && n;
}
const CP = (e) => e !== null;
function Si(e, { repeat: t, repeatType: r = "loop" }, n) {
  const o = e.filter(CP), i = t && r !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || n === void 0 ? o[i] : n;
}
const PP = 40;
class Lp {
  constructor({ autoplay: t = !0, delay: r = 0, type: n = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = it.now(), this.options = {
      autoplay: t,
      delay: r,
      type: n,
      repeat: o,
      repeatDelay: i,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > PP ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && _P(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = it.now(), this.hasAttemptedResolve = !0;
    const { name: n, type: o, velocity: i, delay: s, onComplete: a, onUpdate: l, isGenerator: c } = this.options;
    if (!c && !TP(t, n, o, i))
      if (s)
        this.options.duration = 0;
      else {
        l && l(Si(t, this.options, r)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, r);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: r,
      ...d
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  flatten() {
    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const se = (e, t, r) => e + (t - e) * r;
function cs(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function $P({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, s = 0;
  if (!t)
    o = i = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - a;
    o = cs(l, a, e + 1 / 3), i = cs(l, a, e), s = cs(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: n
  };
}
function Xo(e, t) {
  return (r) => r > 0 ? t : e;
}
const us = (e, t, r) => {
  const n = e * e, o = r * (t * t - n) + n;
  return o < 0 ? 0 : Math.sqrt(o);
}, AP = [Ks, Nt, dr], RP = (e) => AP.find((t) => t.test(e));
function Mu(e) {
  const t = RP(e);
  if (!t)
    return !1;
  let r = t.parse(e);
  return t === dr && (r = $P(r)), r;
}
const zu = (e, t) => {
  const r = Mu(e), n = Mu(t);
  if (!r || !n)
    return Xo(e, t);
  const o = { ...r };
  return (i) => (o.red = us(r.red, n.red, i), o.green = us(r.green, n.green, i), o.blue = us(r.blue, n.blue, i), o.alpha = se(r.alpha, n.alpha, i), Nt.transform(o));
}, EP = (e, t) => (r) => t(e(r)), Gn = (...e) => e.reduce(EP), ta = /* @__PURE__ */ new Set(["none", "hidden"]);
function MP(e, t) {
  return ta.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function zP(e, t) {
  return (r) => se(e, t, r);
}
function Tl(e) {
  return typeof e == "number" ? zP : typeof e == "string" ? dl(e) ? Xo : xe.test(e) ? zu : IP : Array.isArray(e) ? Fp : typeof e == "object" ? xe.test(e) ? zu : DP : Xo;
}
function Fp(e, t) {
  const r = [...e], n = r.length, o = e.map((i, s) => Tl(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < n; s++)
      r[s] = o[s](i);
    return r;
  };
}
function DP(e, t) {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Tl(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}
function BP(e, t) {
  var r;
  const n = [], o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], a = e.indexes[s][o[s]], l = (r = e.values[a]) !== null && r !== void 0 ? r : 0;
    n[i] = l, o[s]++;
  }
  return n;
}
const IP = (e, t) => {
  const r = Mt.createTransformer(t), n = Dn(e), o = Dn(t);
  return n.indexes.var.length === o.indexes.var.length && n.indexes.color.length === o.indexes.color.length && n.indexes.number.length >= o.indexes.number.length ? ta.has(e) && !o.values.length || ta.has(t) && !n.values.length ? MP(e, t) : Gn(Fp(BP(n, o), o.values), r) : Xo(e, t);
};
function Op(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? se(e, t, r) : Tl(e)(e, t);
}
const VP = 5;
function jp(e, t, r) {
  const n = Math.max(t - VP, 0);
  return jh(r - e(n), t - n);
}
const ce = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Du = 1e-3;
function LP({ duration: e = ce.duration, bounce: t = ce.bounce, velocity: r = ce.velocity, mass: n = ce.mass }) {
  let o, i, s = 1 - t;
  s = xt(ce.minDamping, ce.maxDamping, s), e = xt(ce.minDuration, ce.maxDuration, /* @__PURE__ */ bt(e)), s < 1 ? (o = (c) => {
    const d = c * s, u = d * e, f = d - r, h = ra(c, s), p = Math.exp(-u);
    return Du - f / h * p;
  }, i = (c) => {
    const u = c * s * e, f = u * r + r, h = Math.pow(s, 2) * Math.pow(c, 2) * e, p = Math.exp(-u), y = ra(Math.pow(c, 2), s);
    return (-o(c) + Du > 0 ? -1 : 1) * ((f - h) * p) / y;
  }) : (o = (c) => {
    const d = Math.exp(-c * e), u = (c - r) * e + 1;
    return -1e-3 + d * u;
  }, i = (c) => {
    const d = Math.exp(-c * e), u = (r - c) * (e * e);
    return d * u;
  });
  const a = 5 / e, l = OP(o, i, a);
  if (e = /* @__PURE__ */ yt(e), isNaN(l))
    return {
      stiffness: ce.stiffness,
      damping: ce.damping,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const FP = 12;
function OP(e, t, r) {
  let n = r;
  for (let o = 1; o < FP; o++)
    n = n - e(n) / t(n);
  return n;
}
function ra(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const jP = ["duration", "bounce"], NP = ["stiffness", "damping", "mass"];
function Bu(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function WP(e) {
  let t = {
    velocity: ce.velocity,
    stiffness: ce.stiffness,
    damping: ce.damping,
    mass: ce.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Bu(e, NP) && Bu(e, jP))
    if (e.visualDuration) {
      const r = e.visualDuration, n = 2 * Math.PI / (r * 1.2), o = n * n, i = 2 * xt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ce.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const r = LP(e);
      t = {
        ...t,
        ...r,
        mass: ce.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Np(e = ce.visualDuration, t = ce.bounce) {
  const r = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: n, restDelta: o } = r;
  const i = r.keyframes[0], s = r.keyframes[r.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: c, mass: d, duration: u, velocity: f, isResolvedFromDuration: h } = WP({
    ...r,
    velocity: -/* @__PURE__ */ bt(r.velocity || 0)
  }), p = f || 0, y = c / (2 * Math.sqrt(l * d)), b = s - i, g = /* @__PURE__ */ bt(Math.sqrt(l / d)), S = Math.abs(b) < 5;
  n || (n = S ? ce.restSpeed.granular : ce.restSpeed.default), o || (o = S ? ce.restDelta.granular : ce.restDelta.default);
  let x;
  if (y < 1) {
    const w = ra(g, y);
    x = (T) => {
      const $ = Math.exp(-y * g * T);
      return s - $ * ((p + y * g * b) / w * Math.sin(w * T) + b * Math.cos(w * T));
    };
  } else if (y === 1)
    x = (w) => s - Math.exp(-g * w) * (b + (p + g * b) * w);
  else {
    const w = g * Math.sqrt(y * y - 1);
    x = (T) => {
      const $ = Math.exp(-y * g * T), R = Math.min(w * T, 300);
      return s - $ * ((p + y * g * b) * Math.sinh(R) + w * b * Math.cosh(R)) / w;
    };
  }
  const P = {
    calculatedDuration: h && u || null,
    next: (w) => {
      const T = x(w);
      if (h)
        a.done = w >= u;
      else {
        let $ = 0;
        y < 1 && ($ = w === 0 ? /* @__PURE__ */ yt(p) : jp(x, w, T));
        const R = Math.abs($) <= n, I = Math.abs(s - T) <= o;
        a.done = R && I;
      }
      return a.value = a.done ? s : T, a;
    },
    toString: () => {
      const w = Math.min(Nh(P), Hs), T = Wh(($) => P.next(w * $).value, w, 30);
      return w + "ms " + T;
    }
  };
  return P;
}
function Iu({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: s, min: a, max: l, restDelta: c = 0.5, restSpeed: d }) {
  const u = e[0], f = {
    done: !1,
    value: u
  }, h = (R) => a !== void 0 && R < a || l !== void 0 && R > l, p = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let y = r * t;
  const b = u + y, g = s === void 0 ? b : s(b);
  g !== b && (y = g - u);
  const S = (R) => -y * Math.exp(-R / n), x = (R) => g + S(R), P = (R) => {
    const I = S(R), F = x(R);
    f.done = Math.abs(I) <= c, f.value = f.done ? g : F;
  };
  let w, T;
  const $ = (R) => {
    h(f.value) && (w = R, T = Np({
      keyframes: [f.value, p(f.value)],
      velocity: jp(x, R, f.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: d
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (R) => {
      let I = !1;
      return !T && w === void 0 && (I = !0, P(R), $(R)), w !== void 0 && R >= w ? T.next(R - w) : (!I && P(R), f);
    }
  };
}
const HP = /* @__PURE__ */ qn(0.42, 0, 1, 1), UP = /* @__PURE__ */ qn(0, 0, 0.58, 1), Wp = /* @__PURE__ */ qn(0.42, 0, 0.58, 1), qP = (e) => Array.isArray(e) && typeof e[0] != "number", GP = {
  linear: Be,
  easeIn: HP,
  easeInOut: Wp,
  easeOut: UP,
  circIn: Sl,
  circInOut: xp,
  circOut: Sp,
  backIn: _l,
  backInOut: vp,
  backOut: bp,
  anticipate: _p
}, Vu = (e) => {
  if (ol(e)) {
    Oh(e.length === 4);
    const [t, r, n, o] = e;
    return qn(t, r, n, o);
  } else if (typeof e == "string")
    return GP[e];
  return e;
};
function KP(e, t, r) {
  const n = [], o = r || Op, i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Be : t;
      a = Gn(l, a);
    }
    n.push(a);
  }
  return n;
}
function YP(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Oh(i === t.length), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = KP(t, n, o), l = a.length, c = (d) => {
    if (s && d < e[0])
      return t[0];
    let u = 0;
    if (l > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const f = /* @__PURE__ */ $r(e[u], e[u + 1], d);
    return a[u](f);
  };
  return r ? (d) => c(xt(e[0], e[i - 1], d)) : c;
}
function XP(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = /* @__PURE__ */ $r(0, t, n);
    e.push(se(r, 1, o));
  }
}
function ZP(e) {
  const t = [0];
  return XP(t, e.length - 1), t;
}
function JP(e, t) {
  return e.map((r) => r * t);
}
function QP(e, t) {
  return e.map(() => t || Wp).splice(0, e.length - 1);
}
function Zo({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = qP(n) ? n.map(Vu) : Vu(n), i = {
    done: !1,
    value: t[0]
  }, s = JP(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : ZP(t),
    e
  ), a = YP(s, t, {
    ease: Array.isArray(o) ? o : QP(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const e$ = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => J.update(t, !0),
    stop: () => Et(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => be.isProcessing ? be.timestamp : it.now()
  };
}, t$ = {
  decay: Iu,
  inertia: Iu,
  tween: Zo,
  keyframes: Zo,
  spring: Np
}, r$ = (e) => e / 100;
class Cl extends Lp {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: r, motionValue: n, element: o, keyframes: i } = this.options, s = (o == null ? void 0 : o.KeyframeResolver) || kl, a = (l, c) => this.onKeyframesResolved(l, c);
    this.resolver = new s(i, a, r, n, o), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: n = 0, repeatDelay: o = 0, repeatType: i, velocity: s = 0 } = this.options, a = nl(r) ? r : t$[r] || Zo;
    let l, c;
    a !== Zo && typeof t[0] != "number" && (l = Gn(r$, Op(t[0], t[1])), t = [0, 100]);
    const d = a({ ...this.options, keyframes: t });
    i === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = Nh(d));
    const { calculatedDuration: u } = d, f = u + o, h = f * (n + 1) - o;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: u,
      resolvedDuration: f,
      totalDuration: h
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, r = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const { finalKeyframe: o, generator: i, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: d, resolvedDuration: u } = n;
    if (this.startTime === null)
      return i.next(0);
    const { delay: f, repeat: h, repeatType: p, repeatDelay: y, onUpdate: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), S = this.speed >= 0 ? g < 0 : g > d;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let x = this.currentTime, P = i;
    if (h) {
      const R = Math.min(this.currentTime, d) / u;
      let I = Math.floor(R), F = R % 1;
      !F && R >= 1 && (F = 1), F === 1 && I--, I = Math.min(I, h + 1), !!(I % 2) && (p === "reverse" ? (F = 1 - F, y && (F -= y / u)) : p === "mirror" && (P = s)), x = xt(0, 1, F) * u;
    }
    const w = S ? { done: !1, value: l[0] } : P.next(x);
    a && (w.value = a(w.value));
    let { done: T } = w;
    !S && c !== null && (T = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return $ && o !== void 0 && (w.value = Si(l, this.options, o)), b && b(w.value), $ && this.finish(), w;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ bt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ bt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ yt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    this.playbackSpeed = t, r && (this.time = /* @__PURE__ */ bt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = e$, onPlay: r, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), r && r();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = n ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const n$ = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function o$(e, t, r, { delay: n = 0, duration: o = 300, repeat: i = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const d = Uh(a, o);
  return Array.isArray(d) && (c.easing = d), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const i$ = /* @__PURE__ */ el(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Jo = 10, s$ = 2e4;
function a$(e) {
  return nl(e.type) || e.type === "spring" || !Hh(e.ease);
}
function l$(e, t) {
  const r = new Cl({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let n = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !n.done && i < s$; )
    n = r.sample(i), o.push(n.value), i += Jo;
  return {
    times: void 0,
    keyframes: o,
    duration: i - Jo,
    ease: "linear"
  };
}
const Hp = {
  anticipate: _p,
  backInOut: vp,
  circInOut: xp
};
function c$(e) {
  return e in Hp;
}
class Lu extends Lp {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, element: o, keyframes: i } = this.options;
    this.resolver = new Vp(i, (s, a) => this.onKeyframesResolved(s, a), r, n, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    let { duration: n = 300, times: o, ease: i, type: s, motionValue: a, name: l, startTime: c } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof i == "string" && Ko() && c$(i) && (i = Hp[i]), a$(this.options)) {
      const { onComplete: u, onUpdate: f, motionValue: h, element: p, ...y } = this.options, b = l$(t, y);
      t = b.keyframes, t.length === 1 && (t[1] = t[0]), n = b.duration, o = b.times, i = b.ease, s = "keyframes";
    }
    const d = o$(a.owner.current, l, t, { ...this.options, duration: n, times: o, ease: i });
    return d.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (du(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: u } = this.options;
      a.set(Si(t, this.options, r)), u && u(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
      duration: n,
      times: o,
      type: s,
      ease: i,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: r } = t;
    return /* @__PURE__ */ bt(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: r } = t;
    return /* @__PURE__ */ bt(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: n } = r;
    n.currentTime = /* @__PURE__ */ yt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: n } = r;
    n.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: r } = t;
    return r.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r)
        return Be;
      const { animation: n } = r;
      du(n, t);
    }
    return Be;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r, keyframes: n, duration: o, type: i, ease: s, times: a } = t;
    if (r.playState === "idle" || r.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: d, onComplete: u, element: f, ...h } = this.options, p = new Cl({
        ...h,
        keyframes: n,
        duration: o,
        type: i,
        ease: s,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ yt(this.time);
      c.setWithVelocity(p.sample(y - Jo).value, p.sample(y).value, Jo);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: r, name: n, repeatDelay: o, repeatType: i, damping: s, type: a } = t;
    if (!r || !r.owner || !(r.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: c } = r.owner.getProps();
    return i$() && n && n$.has(n) && (n !== "transform" || !c) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !o && i !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const u$ = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, d$ = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), f$ = {
  type: "keyframes",
  duration: 0.8
}, h$ = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, p$ = (e, { keyframes: t }) => t.length > 2 ? f$ : Qt.has(e) ? e.startsWith("scale") ? d$(t[1]) : u$ : h$;
function m$({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...d }) {
  return !!Object.keys(d).length;
}
const Pl = (e, t, r, n = {}, o, i) => (s) => {
  const a = rl(n, e) || {}, l = a.delay || n.delay || 0;
  let { elapsed: c = 0 } = n;
  c = c - /* @__PURE__ */ yt(l);
  let d = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  m$(a) || (d = {
    ...d,
    ...p$(e, d)
  }), d.duration && (d.duration = /* @__PURE__ */ yt(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ yt(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (u = !0)), d.allowFlatten = !a.type && !a.ease, u && !i && t.get() !== void 0) {
    const f = Si(d.keyframes, a);
    if (f !== void 0)
      return J.update(() => {
        d.onUpdate(f), d.onComplete();
      }), new FT([]);
  }
  return !i && Lu.supports(d) ? new Lu(d) : new Cl(d);
};
function g$({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Up(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  n && (s = n);
  const c = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in l) {
    const f = e.getValue(u, (i = e.latestValues[u]) !== null && i !== void 0 ? i : null), h = l[u];
    if (h === void 0 || d && g$(d, u))
      continue;
    const p = {
      delay: r,
      ...rl(s || {}, u)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = pp(e);
      if (g) {
        const S = window.MotionHandoffAnimation(g, u, J);
        S !== null && (p.startTime = S, y = !0);
      }
    }
    Gs(e, u), f.start(Pl(u, f, h, e.shouldReduceMotion && hp.has(u) ? { type: !1 } : p, e, y));
    const b = f.animation;
    b && c.push(b);
  }
  return a && Promise.all(c).then(() => {
    J.update(() => {
      a && HC(e, a);
    });
  }), c;
}
function na(e, t, r = {}) {
  var n;
  const o = zn(e, t, r.type === "exit" ? (n = e.presenceContext) === null || n === void 0 ? void 0 : n.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (i = r.transitionOverride);
  const s = o ? () => Promise.all(Up(e, o, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: f } = i;
    return y$(e, t, d + c, u, f, r);
  } : () => Promise.resolve(), { when: l } = i;
  if (l) {
    const [c, d] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => d());
  } else
    return Promise.all([s(), a(r.delay)]);
}
function y$(e, t, r = 0, n = 0, o = 1, i) {
  const s = [], a = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => a - c * n;
  return Array.from(e.variantChildren).sort(b$).forEach((c, d) => {
    c.notify("AnimationStart", t), s.push(na(c, t, {
      ...i,
      delay: r + l(d)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function b$(e, t) {
  return e.sortNodePosition(t);
}
function v$(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => na(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = na(e, t, r);
  else {
    const o = typeof t == "function" ? zn(e, t, r.custom) : t;
    n = Promise.all(Up(e, o, r));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function qp(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
const _$ = ll.length;
function Gp(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? Gp(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < _$; r++) {
    const n = ll[r], o = e.props[n];
    (Rn(o) || o === !1) && (t[n] = o);
  }
  return t;
}
const S$ = [...al].reverse(), x$ = al.length;
function w$(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => v$(e, r, n)));
}
function k$(e) {
  let t = w$(e), r = Fu(), n = !0;
  const o = (l) => (c, d) => {
    var u;
    const f = zn(e, d, l === "exit" ? (u = e.presenceContext) === null || u === void 0 ? void 0 : u.custom : void 0);
    if (f) {
      const { transition: h, transitionEnd: p, ...y } = f;
      c = { ...c, ...y, ...p };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: c } = e, d = Gp(e.parent) || {}, u = [], f = /* @__PURE__ */ new Set();
    let h = {}, p = 1 / 0;
    for (let b = 0; b < x$; b++) {
      const g = S$[b], S = r[g], x = c[g] !== void 0 ? c[g] : d[g], P = Rn(x), w = g === l ? S.isActive : null;
      w === !1 && (p = b);
      let T = x === d[g] && x !== c[g] && P;
      if (T && n && e.manuallyAnimateOnMount && (T = !1), S.protectedKeys = { ...h }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !x && !S.prevProp || // Or if the prop doesn't define an animation
      vi(x) || typeof x == "boolean")
        continue;
      const $ = T$(S.prevProp, x);
      let R = $ || // If we're making this variant active, we want to always make it active
      g === l && S.isActive && !T && P || // If we removed a higher-priority variant (i is in reverse order)
      b > p && P, I = !1;
      const F = Array.isArray(x) ? x : [x];
      let K = F.reduce(o(g), {});
      w === !1 && (K = {});
      const { prevResolvedValues: Ye = {} } = S, wi = {
        ...Ye,
        ...K
      }, Xn = (ye) => {
        R = !0, f.has(ye) && (I = !0, f.delete(ye)), S.needsAnimating[ye] = !0;
        const Ne = e.getValue(ye);
        Ne && (Ne.liveStyle = !1);
      };
      for (const ye in wi) {
        const Ne = K[ye], Fr = Ye[ye];
        if (h.hasOwnProperty(ye))
          continue;
        let Or = !1;
        qs(Ne) && qs(Fr) ? Or = !qp(Ne, Fr) : Or = Ne !== Fr, Or ? Ne != null ? Xn(ye) : f.add(ye) : Ne !== void 0 && f.has(ye) ? Xn(ye) : S.protectedKeys[ye] = !0;
      }
      S.prevProp = x, S.prevResolvedValues = K, S.isActive && (h = { ...h, ...K }), n && e.blockInitialAnimation && (R = !1), R && (!(T && $) || I) && u.push(...F.map((ye) => ({
        animation: ye,
        options: { type: g }
      })));
    }
    if (f.size) {
      const b = {};
      if (typeof c.initial != "boolean") {
        const g = zn(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        g && g.transition && (b.transition = g.transition);
      }
      f.forEach((g) => {
        const S = e.getBaseTarget(g), x = e.getValue(g);
        x && (x.liveStyle = !0), b[g] = S ?? null;
      }), u.push({ animation: b });
    }
    let y = !!u.length;
    return n && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), n = !1, y ? t(u) : Promise.resolve();
  }
  function a(l, c) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((f) => {
      var h;
      return (h = f.animationState) === null || h === void 0 ? void 0 : h.setActive(l, c);
    }), r[l].isActive = c;
    const u = s(l);
    for (const f in r)
      r[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => r,
    reset: () => {
      r = Fu(), n = !0;
    }
  };
}
function T$(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qp(t, e) : !1;
}
function Vt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fu() {
  return {
    animate: Vt(!0),
    whileInView: Vt(),
    whileHover: Vt(),
    whileTap: Vt(),
    whileDrag: Vt(),
    whileFocus: Vt(),
    exit: Vt()
  };
}
class zt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class C$ extends zt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = k$(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    vi(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let P$ = 0;
class $$ extends zt {
  constructor() {
    super(...arguments), this.id = P$++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    r && !t && o.then(() => {
      r(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const A$ = {
  animation: {
    Feature: C$
  },
  exit: {
    Feature: $$
  }
};
function Bn(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
function Kn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const R$ = (e) => (t) => sl(t) && e(t, Kn(t));
function yn(e, t, r, n) {
  return Bn(e, t, R$(r), n);
}
function Kp({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function E$({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function M$(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
const Yp = 1e-4, z$ = 1 - Yp, D$ = 1 + Yp, Xp = 0.01, B$ = 0 - Xp, I$ = 0 + Xp;
function Te(e) {
  return e.max - e.min;
}
function V$(e, t, r) {
  return Math.abs(e - t) <= r;
}
function Ou(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = se(t.min, t.max, e.origin), e.scale = Te(r) / Te(t), e.translate = se(r.min, r.max, e.origin) - e.originPoint, (e.scale >= z$ && e.scale <= D$ || isNaN(e.scale)) && (e.scale = 1), (e.translate >= B$ && e.translate <= I$ || isNaN(e.translate)) && (e.translate = 0);
}
function bn(e, t, r, n) {
  Ou(e.x, t.x, r.x, n ? n.originX : void 0), Ou(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ju(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Te(t);
}
function L$(e, t, r) {
  ju(e.x, t.x, r.x), ju(e.y, t.y, r.y);
}
function Nu(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Te(t);
}
function vn(e, t, r) {
  Nu(e.x, t.x, r.x), Nu(e.y, t.y, r.y);
}
const Wu = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), fr = () => ({
  x: Wu(),
  y: Wu()
}), Hu = () => ({ min: 0, max: 0 }), de = () => ({
  x: Hu(),
  y: Hu()
});
function Fe(e) {
  return [e("x"), e("y")];
}
function ds(e) {
  return e === void 0 || e === 1;
}
function oa({ scale: e, scaleX: t, scaleY: r }) {
  return !ds(e) || !ds(t) || !ds(r);
}
function Lt(e) {
  return oa(e) || Zp(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Zp(e) {
  return Uu(e.x) || Uu(e.y);
}
function Uu(e) {
  return e && e !== "0%";
}
function Qo(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function qu(e, t, r, n, o) {
  return o !== void 0 && (e = Qo(e, o, n)), Qo(e, r, n) + t;
}
function ia(e, t = 0, r = 1, n, o) {
  e.min = qu(e.min, t, r, n, o), e.max = qu(e.max, t, r, n, o);
}
function Jp(e, { x: t, y: r }) {
  ia(e.x, t.translate, t.scale, t.originPoint), ia(e.y, r.translate, r.scale, r.originPoint);
}
const Gu = 0.999999999999, Ku = 1.0000000000001;
function F$(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    i = r[a], s = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && pr(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Jp(e, s)), n && Lt(i.latestValues) && pr(e, i.latestValues));
  }
  t.x < Ku && t.x > Gu && (t.x = 1), t.y < Ku && t.y > Gu && (t.y = 1);
}
function hr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Yu(e, t, r, n, o = 0.5) {
  const i = se(e.min, e.max, o);
  ia(e, t, r, i, n);
}
function pr(e, t) {
  Yu(e.x, t.x, t.scaleX, t.scale, t.originX), Yu(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Qp(e, t) {
  return Kp(M$(e.getBoundingClientRect(), t));
}
function O$(e, t, r) {
  const n = Qp(e, r), { scroll: o } = t;
  return o && (hr(n.x, o.offset.x), hr(n.y, o.offset.y)), n;
}
const em = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xu = (e, t) => Math.abs(e - t);
function j$(e, t) {
  const r = Xu(e.x, t.x), n = Xu(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class tm {
  constructor(t, r, { transformPagePoint: n, contextWindow: o, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = hs(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = j$(u.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: p } = u, { timestamp: y } = be;
      this.history.push({ ...p, timestamp: y });
      const { onStart: b, onMove: g } = this.handlers;
      f || (b && b(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, f) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = fs(f, this.transformPagePoint), J.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: p, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = hs(u.type === "pointercancel" ? this.lastMoveEventInfo : fs(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(u, b), p && p(u, b);
    }, !sl(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const s = Kn(t), a = fs(s, this.transformPagePoint), { point: l } = a, { timestamp: c } = be;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = r;
    d && d(t, hs(a, this.history)), this.removeListeners = Gn(yn(this.contextWindow, "pointermove", this.handlePointerMove), yn(this.contextWindow, "pointerup", this.handlePointerUp), yn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Et(this.updatePoint);
  }
}
function fs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zu(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hs({ point: e }, t) {
  return {
    point: e,
    delta: Zu(e, rm(t)),
    offset: Zu(e, N$(t)),
    velocity: W$(t, 0.1)
  };
}
function N$(e) {
  return e[0];
}
function rm(e) {
  return e[e.length - 1];
}
function W$(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = rm(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > /* @__PURE__ */ yt(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ bt(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function H$(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? se(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? se(r, e, n.max) : Math.min(e, r)), e;
}
function Ju(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function U$(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Ju(e.x, r, o),
    y: Ju(e.y, t, n)
  };
}
function Qu(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function q$(e, t) {
  return {
    x: Qu(e.x, t.x),
    y: Qu(e.y, t.y)
  };
}
function G$(e, t) {
  let r = 0.5;
  const n = Te(e), o = Te(t);
  return o > n ? r = /* @__PURE__ */ $r(t.min, t.max - n, e.min) : n > o && (r = /* @__PURE__ */ $r(e.min, e.max - o, t.min)), xt(0, 1, r);
}
function K$(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const sa = 0.35;
function Y$(e = sa) {
  return e === !1 ? e = 0 : e === !0 && (e = sa), {
    x: ed(e, "left", "right"),
    y: ed(e, "top", "bottom")
  };
}
function ed(e, t, r) {
  return {
    min: td(e, t),
    max: td(e, r)
  };
}
function td(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const X$ = /* @__PURE__ */ new WeakMap();
class Z$ {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = de(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Kn(d).point);
    }, i = (d, u) => {
      const { drag: f, dragPropagation: h, onDragStart: p } = this.getProps();
      if (f && !h && (this.openDragLock && this.openDragLock(), this.openDragLock = UT(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe((b) => {
        let g = this.getAxisMotionValue(b).get() || 0;
        if (st.test(g)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const x = S.layout.layoutBox[b];
            x && (g = Te(x) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[b] = g;
      }), p && J.postRender(() => p(d, u)), Gs(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, s = (d, u) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: p, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: b } = u;
      if (h && this.currentDirection === null) {
        this.currentDirection = J$(b), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, b), this.updateAxis("y", u.point, b), this.visualElement.render(), y && y(d, u);
    }, a = (d, u) => this.stop(d, u), l = () => Fe((d) => {
      var u;
      return this.getAnimationState(d) === "paused" && ((u = this.getAxisMotionValue(d).animation) === null || u === void 0 ? void 0 : u.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new tm(t, {
      onSessionStart: o,
      onStart: i,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: em(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && J.postRender(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !So(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (s = H$(s, this.constraints[t], this.elastic[t])), i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && ur(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = U$(o.layoutBox, r) : this.constraints = !1, this.elastic = Y$(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Fe((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = K$(o.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ur(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = O$(n, o.root, this.visualElement.getTransformPagePoint());
    let s = q$(o.layout.layoutBox, i);
    if (r) {
      const a = r(E$(s));
      this.hasMutatedConstraints = !!a, a && (s = Kp(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = Fe((d) => {
      if (!So(d, r, this.currentDirection))
        return;
      let u = l && l[d] || {};
      s && (u = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, p = {
        type: "inertia",
        velocity: n ? t[d] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...u
      };
      return this.startAxisValueAnimation(d, p);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return Gs(this.visualElement, t), n.start(Pl(t, n, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`, n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Fe((r) => {
      const { drag: n } = this.getProps();
      if (!So(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[r];
        i.set(t[r] - se(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!ur(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Fe((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = G$({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Fe((s) => {
      if (!So(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: c } = this.constraints[s];
      a.set(se(l, c, o[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    X$.set(this.visualElement, this);
    const t = this.visualElement.current, r = yn(t, "pointerdown", (l) => {
      const { drag: c, dragListener: d = !0 } = this.getProps();
      c && d && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ur(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), J.read(n);
    const s = Bn(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Fe((d) => {
        const u = this.getAxisMotionValue(d);
        u && (this.originPoint[d] += l[d].translate, u.set(u.get() + l[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), r(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: s = sa, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function So(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function J$(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class Q$ extends zt {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new Z$(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const rd = (e) => (t, r) => {
  e && J.postRender(() => e(t, r));
};
class eA extends zt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new tm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: em(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: rd(t),
      onStart: rd(r),
      onMove: n,
      onEnd: (i, s) => {
        delete this.session, o && J.postRender(() => o(i, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Fo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function nd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Jr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (B.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = nd(e, t.target.x), n = nd(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, tA = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Mt.parse(e);
    if (o.length > 5)
      return n;
    const i = Mt.createTransformer(e), s = typeof o[0] != "number" ? 1 : 0, a = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + s] /= a, o[1 + s] /= l;
    const c = se(a, l, 0.5);
    return typeof o[2 + s] == "number" && (o[2 + s] /= c), typeof o[3 + s] == "number" && (o[3 + s] /= c), i(o);
  }
};
class rA extends $e {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    bC(nA), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Fo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, s = n.projection;
    return s && (s.isPresent = i, o || t.layoutDependency !== r || r === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || J.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), il.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function nm(e) {
  const [t, r] = Fh(), n = E(Ka);
  return C(rA, { ...e, layoutGroup: n, switchLayoutGroup: E(ep), isPresent: t, safeToRemove: r });
}
const nA = {
  borderRadius: {
    ...Jr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jr,
  borderTopRightRadius: Jr,
  borderBottomLeftRadius: Jr,
  borderBottomRightRadius: Jr,
  boxShadow: tA
};
function oA(e, t, r) {
  const n = we(e) ? e : An(e);
  return n.start(Pl("", n, t, r)), n.animation;
}
function iA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const sA = (e, t) => e.depth - t.depth;
class aA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ja(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Qa(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(sA), this.isDirty = !1, this.children.forEach(t);
  }
}
function lA(e, t) {
  const r = it.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (Et(n), e(i - t));
  };
  return J.read(n, !0), () => Et(n);
}
const om = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], cA = om.length, od = (e) => typeof e == "string" ? parseFloat(e) : e, id = (e) => typeof e == "number" || B.test(e);
function uA(e, t, r, n, o, i) {
  o ? (e.opacity = se(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    dA(n)
  ), e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, fA(n))) : i && (e.opacity = se(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let s = 0; s < cA; s++) {
    const a = `border${om[s]}Radius`;
    let l = sd(t, a), c = sd(r, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || id(l) === id(c) ? (e[a] = Math.max(se(od(l), od(c), n), 0), (st.test(c) || st.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = se(t.rotate || 0, r.rotate || 0, n));
}
function sd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dA = /* @__PURE__ */ im(0, 0.5, Sp), fA = /* @__PURE__ */ im(0.5, 0.95, Be);
function im(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(/* @__PURE__ */ $r(e, t, n));
}
function ad(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  ad(e.x, t.x), ad(e.y, t.y);
}
function ld(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function cd(e, t, r, n, o) {
  return e -= t, e = Qo(e, 1 / r, n), o !== void 0 && (e = Qo(e, 1 / o, n)), e;
}
function hA(e, t = 0, r = 1, n = 0.5, o, i = e, s = e) {
  if (st.test(t) && (t = parseFloat(t), t = se(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = se(i.min, i.max, n);
  e === i && (a -= t), e.min = cd(e.min, t, r, a, o), e.max = cd(e.max, t, r, a, o);
}
function ud(e, t, [r, n, o], i, s) {
  hA(e, t[r], t[n], t[o], t.scale, i, s);
}
const pA = ["x", "scaleX", "originX"], mA = ["y", "scaleY", "originY"];
function dd(e, t, r, n) {
  ud(e.x, t, pA, r ? r.x : void 0, n ? n.x : void 0), ud(e.y, t, mA, r ? r.y : void 0, n ? n.y : void 0);
}
function fd(e) {
  return e.translate === 0 && e.scale === 1;
}
function sm(e) {
  return fd(e.x) && fd(e.y);
}
function hd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function gA(e, t) {
  return hd(e.x, t.x) && hd(e.y, t.y);
}
function pd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function am(e, t) {
  return pd(e.x, t.x) && pd(e.y, t.y);
}
function md(e) {
  return Te(e.x) / Te(e.y);
}
function gd(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class yA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ja(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Qa(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function bA(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, s = (r == null ? void 0 : r.z) || 0;
  if ((o || i || s) && (n = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: c, rotate: d, rotateX: u, rotateY: f, skewX: h, skewY: p } = r;
    c && (n = `perspective(${c}px) ${n}`), d && (n += `rotate(${d}deg) `), u && (n += `rotateX(${u}deg) `), f && (n += `rotateY(${f}deg) `), h && (n += `skewX(${h}deg) `), p && (n += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (n += `scale(${a}, ${l})`), n || "none";
}
const ps = ["", "X", "Y", "Z"], vA = { visibility: "hidden" }, yd = 1e3;
let _A = 0;
function ms(e, t, r, n) {
  const { latestValues: o } = t;
  o[e] && (r[e] = o[e], t.setStaticValue(e, 0), n && (n[e] = 0));
}
function lm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = pp(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", J, !(o || i));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && lm(n);
}
function cm({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = _A++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(wA), this.nodes.forEach($A), this.nodes.forEach(AA), this.nodes.forEach(kA);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aA());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new tl()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = iA(s), this.instance = s;
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
        let u;
        const f = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = lA(f, 250), Fo.hasAnimatedSinceResize && (Fo.hasAnimatedSinceResize = !1, this.nodes.forEach(vd));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && d && (l || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || d.getDefaultTransition() || DA, { onLayoutAnimationStart: b, onLayoutAnimationComplete: g } = d.getProps(), S = !this.targetLayout || !am(this.targetLayout, p), x = !f && h;
        if (this.options.layoutRoot || this.resumeFrom || x || f && (S || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, x);
          const P = {
            ...rl(y, "layout"),
            onPlay: b,
            onComplete: g
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P);
        } else
          f || vd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Et(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(RA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(bd);
        return;
      }
      this.isUpdating || this.nodes.forEach(CA), this.isUpdating = !1, this.nodes.forEach(PA), this.nodes.forEach(SA), this.nodes.forEach(xA), this.clearAllSnapshots();
      const a = it.now();
      be.delta = xt(0, 1e3 / 60, a - be.timestamp), be.timestamp = a, be.isProcessing = !0, ss.update.process(be), ss.preRender.process(be), ss.render.process(be), be.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, il.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(TA), this.sharedNodes.forEach(EA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, J.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      J.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = de(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const l = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !sm(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, d = c !== this.prevTransformTemplateValue;
      s && (a || Lt(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), BA(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return de();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(IA))) {
        const { scroll: d } = this.root;
        d && (hr(l.x, d.offset.x), hr(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = de();
      if (Ve(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: f } = d;
        d !== this.root && u && f.layoutScroll && (u.wasRoot && Ve(l, s), hr(l.x, u.offset.x), hr(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = de();
      Ve(l, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a && d.options.layoutScroll && d.scroll && d !== d.root && pr(l, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), Lt(d.latestValues) && pr(l, d.latestValues);
      }
      return Lt(this.latestValues) && pr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = de();
      Ve(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Lt(c.latestValues))
          continue;
        oa(c.latestValues) && c.updateSnapshot();
        const d = de(), u = c.measurePageBox();
        Ve(d, u), dd(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return Lt(this.latestValues) && dd(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== be.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (this.resolvedRelativeTargetAt = be.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), vn(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), L$(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), Jp(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), vn(this.relativeTargetOrigin, this.target, h.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || oa(this.parent.latestValues) || Zp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === be.timestamp && (c = !1), c)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      F$(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = de());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ld(this.prevProjectionDelta.x, this.projectionDelta.x), ld(this.prevProjectionDelta.y, this.projectionDelta.y)), bn(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !gd(this.projectionDelta.x, this.prevProjectionDelta.x) || !gd(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = fr(), this.projectionDelta = fr(), this.projectionDeltaWithTransform = fr();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, d = { ...this.latestValues }, u = fr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = de(), h = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, y = h !== p, b = this.getStack(), g = !b || b.members.length <= 1, S = !!(y && !g && this.options.crossfade === !0 && !this.path.some(zA));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (P) => {
        const w = P / 1e3;
        _d(u.x, s.x, w), _d(u.y, s.y, w), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (vn(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), MA(this.relativeTarget, this.relativeTargetOrigin, f, w), x && gA(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = de()), Ve(x, this.relativeTarget)), y && (this.animationValues = d, uA(d, c, this.latestValues, w, S, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = J.update(() => {
        Fo.hasAnimatedSinceResize = !0, this.currentAnimation = oA(0, yd, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(yd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: d } = s;
      if (!(!a || !l || !c)) {
        if (this !== s && this.layout && c && um(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || de();
          const u = Te(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + u;
          const f = Te(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + f;
        }
        Ve(a, l), pr(a, d), bn(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new yA()), this.sharedNodes.get(s).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && ms("z", s, c, this.animationValues);
      for (let d = 0; d < ps.length; d++)
        ms(`rotate${ps[d]}`, s, c, this.animationValues), ms(`skew${ps[d]}`, s, c, this.animationValues);
      s.render();
      for (const d in c)
        s.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return vA;
      const c = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Lo(s == null ? void 0 : s.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Lo(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Lt(this.latestValues) && (y.transform = d ? d({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), c.transform = bA(this.projectionDeltaWithTransform, this.treeScale, f), d && (c.transform = d(f, c.transform));
      const { x: h, y: p } = this.projectionDelta;
      c.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? c.opacity = u === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = u === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in En) {
        if (f[y] === void 0)
          continue;
        const { correct: b, applyTo: g, isCSSVariable: S } = En[y], x = c.transform === "none" ? f[y] : b(f[y], u);
        if (g) {
          const P = g.length;
          for (let w = 0; w < P; w++)
            c[g[w]] = x;
        } else
          S ? this.options.visualElement.renderState.vars[y] = x : c[y] = x;
      }
      return this.options.layoutId && (c.pointerEvents = u === this ? Lo(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(bd), this.root.sharedNodes.clear();
    }
  };
}
function SA(e) {
  e.updateLayout();
}
function xA(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, s = r.source !== e.layout.source;
    i === "size" ? Fe((u) => {
      const f = s ? r.measuredBox[u] : r.layoutBox[u], h = Te(f);
      f.min = n[u].min, f.max = f.min + h;
    }) : um(i, r.layoutBox, n) && Fe((u) => {
      const f = s ? r.measuredBox[u] : r.layoutBox[u], h = Te(n[u]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const a = fr();
    bn(a, n, r.layoutBox);
    const l = fr();
    s ? bn(l, e.applyTransform(o, !0), r.measuredBox) : bn(l, n, r.layoutBox);
    const c = !sm(a);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: h } = u;
        if (f && h) {
          const p = de();
          vn(p, r.layoutBox, f.layoutBox);
          const y = de();
          vn(y, n, h.layoutBox), am(p, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = p, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function wA(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function TA(e) {
  e.clearSnapshot();
}
function bd(e) {
  e.clearMeasurements();
}
function CA(e) {
  e.isLayoutDirty = !1;
}
function PA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function vd(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function $A(e) {
  e.resolveTargetDelta();
}
function AA(e) {
  e.calcProjection();
}
function RA(e) {
  e.resetSkewAndRotation();
}
function EA(e) {
  e.removeLeadSnapshot();
}
function _d(e, t, r) {
  e.translate = se(t.translate, 0, r), e.scale = se(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Sd(e, t, r, n) {
  e.min = se(t.min, r.min, n), e.max = se(t.max, r.max, n);
}
function MA(e, t, r, n) {
  Sd(e.x, t.x, r.x, n), Sd(e.y, t.y, r.y, n);
}
function zA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const DA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, xd = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), wd = xd("applewebkit/") && !xd("chrome/") ? Math.round : Be;
function kd(e) {
  e.min = wd(e.min), e.max = wd(e.max);
}
function BA(e) {
  kd(e.x), kd(e.y);
}
function um(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !V$(md(t), md(r), 0.2);
}
function IA(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const VA = cm({
  attachResizeListener: (e, t) => Bn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), gs = {
  current: void 0
}, dm = cm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!gs.current) {
      const e = new VA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), gs.current = e;
    }
    return gs.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), LA = {
  pan: {
    Feature: eA
  },
  drag: {
    Feature: Q$,
    ProjectionNode: dm,
    MeasureLayout: nm
  }
};
function Td(e, t, r) {
  const { props: n } = e;
  e.animationState && n.whileHover && e.animationState.setActive("whileHover", r === "Start");
  const o = "onHover" + r, i = n[o];
  i && J.postRender(() => i(t, Kn(t)));
}
class FA extends zt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = GT(t, (r, n) => (Td(this.node, n, "Start"), (o) => Td(this.node, o, "End"))));
  }
  unmount() {
  }
}
class OA extends zt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Gn(Bn(this.node.current, "focus", () => this.onFocus()), Bn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Cd(e, t, r) {
  const { props: n } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && n.whileTap && e.animationState.setActive("whileTap", r === "Start");
  const o = "onTap" + (r === "End" ? "" : r), i = n[o];
  i && J.postRender(() => i(t, Kn(t)));
}
class jA extends zt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = ZT(t, (r, n) => (Cd(this.node, n, "Start"), (o, { success: i }) => Cd(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const aa = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap(), NA = (e) => {
  const t = aa.get(e.target);
  t && t(e);
}, WA = (e) => {
  e.forEach(NA);
};
function HA({ root: e, ...t }) {
  const r = e || document;
  ys.has(r) || ys.set(r, {});
  const n = ys.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(WA, { root: e, ...t })), n[o];
}
function UA(e, t, r) {
  const n = HA(t);
  return aa.set(e, r), n.observe(e), () => {
    aa.delete(e), n.unobserve(e);
  };
}
const qA = {
  some: 0,
  all: 1
};
class GA extends zt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, s = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : qA[o]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(), f = c ? d : u;
      f && f(l);
    };
    return UA(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(KA(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function KA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const YA = {
  inView: {
    Feature: GA
  },
  tap: {
    Feature: jA
  },
  focus: {
    Feature: OA
  },
  hover: {
    Feature: FA
  }
}, XA = {
  layout: {
    ProjectionNode: dm,
    MeasureLayout: nm
  }
}, la = { current: null }, fm = { current: !1 };
function ZA() {
  if (fm.current = !0, !!Xa)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => la.current = e.matches;
      e.addListener(t), t();
    } else
      la.current = !1;
}
const JA = [...Ip, xe, Mt], QA = (e) => JA.find(Bp(e)), e2 = /* @__PURE__ */ new WeakMap();
function t2(e, t, r) {
  for (const n in t) {
    const o = t[n], i = r[n];
    if (we(o))
      e.addValue(n, o);
    else if (we(i))
      e.addValue(n, An(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(n)) {
        const s = e.getValue(n);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(n);
        e.addValue(n, An(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const n in r)
    t[n] === void 0 && e.removeValue(n);
  return t;
}
const Pd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class r2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, blockInitialAnimation: i, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = kl, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = it.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, J.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c, onUpdate: d } = s;
    this.onUpdate = d, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = r.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = _i(r), this.isVariantNode = Jh(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const h in f) {
      const p = f[h];
      l[h] !== void 0 && we(p) && p.set(l[h], !1);
    }
  }
  mount(t) {
    this.current = t, e2.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), fm.current || ZA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : la.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Et(this.notifyUpdate), Et(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, r) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = Qt.has(t);
    n && this.onBindTransform && this.onBindTransform();
    const o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && J.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, r)), this.valueSubscriptions.set(t, () => {
      o(), i(), s && s(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ar) {
      const r = Ar[t];
      if (!r)
        continue;
      const { isEnabled: n, Feature: o } = r;
      if (!this.features[t] && o && n(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : de();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < Pd.length; n++) {
      const o = Pd[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = t2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n && (n && this.removeValue(t), this.bindToMotionValue(t, r), this.values.set(t, r), this.latestValues[t] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = An(r === null ? void 0 : r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var n;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (zp(o) || wp(o)) ? o = parseFloat(o) : !QA(o) && Mt.test(r) && (o = Rp(t, r)), this.setBaseTarget(t, we(o) ? o.get() : o)), we(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props;
    let o;
    if (typeof n == "string" || typeof n == "object") {
      const s = bl(this.props, n, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      s && (o = s[t]);
    }
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !we(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new tl()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class hm extends r2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Vp;
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
function n2(e) {
  return window.getComputedStyle(e);
}
class o2 extends hm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = cp;
  }
  readValueFromInstance(t, r) {
    if (Qt.has(r))
      return mP(t, r);
    {
      const n = n2(t), o = (ul(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Qp(t, r);
  }
  build(t, r, n) {
    hl(t, r, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return vl(t, r, n);
  }
}
class i2 extends hm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = de, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && lp(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Qt.has(r)) {
      const n = Ap(r);
      return n && n.default || 0;
    }
    return r = up.has(r) ? r : cl(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return fp(t, r, n);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && J.postRender(this.updateDimensions);
  }
  build(t, r, n) {
    gl(t, r, this.isSVGTag, n.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    dp(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = yl(t.tagName), super.mount(t);
  }
}
const s2 = (e, t) => ml(e) ? new i2(t) : new o2(t, {
  allowProjection: e !== pe
}), a2 = /* @__PURE__ */ NC({
  ...A$,
  ...YA,
  ...LA,
  ...XA
}, s2), l2 = /* @__PURE__ */ oC(a2), c2 = (e, t) => e.find((r) => r.id === t);
function $d(e, t) {
  const r = pm(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function pm(e, t) {
  for (const [r, n] of Object.entries(e))
    if (c2(n, t))
      return r;
}
function u2(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function d2(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", s = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: s
  };
}
var f2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, h2 = /* @__PURE__ */ Ch(
  function(e) {
    return f2.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), p2 = h2, m2 = function(t) {
  return t !== "theme";
}, Ad = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? p2 : m2;
}, Rd = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, g2 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ja(r, n, o), Eh(function() {
    return Na(r, n, o);
  }), null;
}, y2 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = Rd(t, r, n), l = a || Ad(o), c = !l("as");
  return function() {
    var d = arguments, u = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      u.push.apply(u, d);
    else {
      var f = d[0];
      u.push(f[0]);
      for (var h = d.length, p = 1; p < h; p++)
        u.push(d[p], f[p]);
    }
    var y = Ha(function(b, g, S) {
      var x = c && b.as || o, P = "", w = [], T = b;
      if (b.theme == null) {
        T = {};
        for (var $ in b)
          T[$] = b[$];
        T.theme = E(Pr);
      }
      typeof b.className == "string" ? P = $h(g.registered, w, b.className) : b.className != null && (P = b.className + " ");
      var R = gi(u.concat(w), g.registered, T);
      P += g.key + "-" + R.name, s !== void 0 && (P += " " + s);
      var I = c && a === void 0 ? Ad(x) : l, F = {};
      for (var K in b)
        c && K === "as" || I(K) && (F[K] = b[K]);
      return F.className = P, S && (F.ref = S), /* @__PURE__ */ D(pe, null, /* @__PURE__ */ D(g2, {
        cache: g,
        serialized: R,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ D(x, F));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = u, y.__emotion_forwardProp = a, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + s;
      }
    }), y.withComponent = function(b, g) {
      var S = e(b, Go({}, r, g, {
        shouldForwardProp: Rd(y, g, !0)
      }));
      return S.apply(void 0, u);
    }, y;
  };
}, b2 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ca = y2.bind(null);
b2.forEach(function(e) {
  ca[e] = ca(e);
});
const v2 = /* @__PURE__ */ new Set([
  ...Bb,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), _2 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function S2(e) {
  return (_2.has(e) || !v2.has(e)) && e[0] !== "_";
}
const x2 = Y0(ca), w2 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...s } = t, [a] = J0(s, Vb), l = rt(e, t), c = j0(
    {},
    o,
    l,
    Zf(a),
    i
  ), d = oh(c)(t.theme);
  return n ? [d, n] : d;
};
function bs(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = S2);
  const o = w2({ baseStyle: r }), i = x2(
    e,
    n
  )(o);
  return wt(
    function(l, c) {
      const { children: d, ...u } = l, { colorMode: f, forced: h } = Ga();
      return D(
        i,
        { ref: c, "data-theme": h ? f : void 0, ...u },
        d
      );
    }
  );
}
function k2() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(bs, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return bs(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, bs(r)), e.get(r);
    }
  });
}
const Ke = k2(), T2 = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, mm = oi((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: s = "bottom",
    duration: a = 5e3,
    containerStyle: l,
    motionVariants: c = T2,
    toastSpacing: d = "0.5rem"
  } = e, [u, f] = _e(a), h = zT();
  zc(() => {
    h || n == null || n();
  }, [h]), zc(() => {
    f(a);
  }, [a]);
  const p = () => f(null), y = () => f(a), b = () => {
    h && o();
  };
  le(() => {
    h && i && o();
  }, [h, i, o]), rb(b, u);
  const g = Z(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: d,
      ...l
    }),
    [l, d]
  ), S = Z(() => u2(s), [s]);
  return /* @__PURE__ */ C(
    l2.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: c,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: p,
      onHoverEnd: y,
      custom: { position: s },
      style: S,
      children: /* @__PURE__ */ C(
        Ke.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: g,
          children: rt(r, { id: t, onClose: b })
        }
      )
    }
  );
});
mm.displayName = "ToastComponent";
function Lr(e) {
  return wt(e);
}
var vs, Ed;
function C2() {
  if (Ed) return vs;
  Ed = 1;
  var e = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function o(i, s) {
    if (i === s) return !0;
    if (i && s && typeof i == "object" && typeof s == "object") {
      if (i.constructor !== s.constructor) return !1;
      var a, l, c;
      if (Array.isArray(i)) {
        if (a = i.length, a != s.length) return !1;
        for (l = a; l-- !== 0; )
          if (!o(i[l], s[l])) return !1;
        return !0;
      }
      var d;
      if (t && i instanceof Map && s instanceof Map) {
        if (i.size !== s.size) return !1;
        for (d = i.entries(); !(l = d.next()).done; )
          if (!s.has(l.value[0])) return !1;
        for (d = i.entries(); !(l = d.next()).done; )
          if (!o(l.value[1], s.get(l.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && s instanceof Set) {
        if (i.size !== s.size) return !1;
        for (d = i.entries(); !(l = d.next()).done; )
          if (!s.has(l.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(s)) {
        if (a = i.length, a != s.length) return !1;
        for (l = a; l-- !== 0; )
          if (i[l] !== s[l]) return !1;
        return !0;
      }
      if (i.constructor === RegExp) return i.source === s.source && i.flags === s.flags;
      if (i.valueOf !== Object.prototype.valueOf && typeof i.valueOf == "function" && typeof s.valueOf == "function") return i.valueOf() === s.valueOf();
      if (i.toString !== Object.prototype.toString && typeof i.toString == "function" && typeof s.toString == "function") return i.toString() === s.toString();
      if (c = Object.keys(i), a = c.length, a !== Object.keys(s).length) return !1;
      for (l = a; l-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, c[l])) return !1;
      if (e && i instanceof Element) return !1;
      for (l = a; l-- !== 0; )
        if (!((c[l] === "_owner" || c[l] === "__v" || c[l] === "__o") && i.$$typeof) && !o(i[c[l]], s[c[l]]))
          return !1;
      return !0;
    }
    return i !== i && s !== s;
  }
  return vs = function(s, a) {
    try {
      return o(s, a);
    } catch (l) {
      if ((l.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw l;
    }
  }, vs;
}
var P2 = C2();
const $2 = /* @__PURE__ */ Mf(P2);
function A2() {
  const e = E(
    Pr
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
function R2() {
  const e = Ga(), t = A2();
  return { ...e, theme: t };
}
function gm(e, t = {}) {
  const { styleConfig: r, ...n } = t, { theme: o, colorMode: i } = R2(), s = e ? Jf(o, `components.${e}`) : void 0, a = r || s, l = Oe(
    { theme: o, colorMode: i },
    (a == null ? void 0 : a.defaultProps) ?? {},
    Zf(Qf(n, ["children"])),
    (d, u) => d ? void 0 : u
  ), c = ue({});
  if (a) {
    const u = Gb(a)(l);
    $2(c.current, u) || (c.current = u);
  }
  return c.current;
}
function $l(e, t = {}) {
  return gm(e, t);
}
function E2(e, t = {}) {
  return gm(e, t);
}
const Md = {
  path: /* @__PURE__ */ C("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ C(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ C(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ C("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Yn = Lr((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: s,
    className: a,
    __css: l,
    ...c
  } = e, d = Dr("chakra-icon", a), u = $l("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...u
  }, h = {
    ref: t,
    focusable: i,
    className: d,
    __css: f
  }, p = n ?? Md.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ C(Ke.svg, { as: r, ...h, ...c });
  const y = s ?? Md.path;
  return /* @__PURE__ */ C(Ke.svg, { verticalAlign: "middle", viewBox: p, ...h, ...c, children: y });
});
Yn.displayName = "Icon";
function M2(e) {
  return /* @__PURE__ */ C(Yn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function z2(e) {
  return /* @__PURE__ */ C(Yn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function zd(e) {
  return /* @__PURE__ */ C(Yn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
const D2 = mT({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), ym = Lr((e, t) => {
  const r = $l("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: s = "transparent",
    className: a,
    ...l
  } = Ma(e), c = Dr("chakra-spinner", a), d = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: s,
    borderLeftColor: s,
    animation: `${D2} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ C(
    Ke.div,
    {
      ref: t,
      __css: d,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ C(Ke.span, { srOnly: !0, children: n })
    }
  );
});
ym.displayName = "Spinner";
const [B2, Al] = zr({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [I2, Rl] = zr({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), bm = {
  info: { icon: z2, colorScheme: "blue" },
  warning: { icon: zd, colorScheme: "orange" },
  success: { icon: M2, colorScheme: "green" },
  error: { icon: zd, colorScheme: "red" },
  loading: { icon: ym, colorScheme: "blue" }
};
function V2(e) {
  return bm[e].colorScheme;
}
function L2(e) {
  return bm[e].icon;
}
const vm = Lr(function(t, r) {
  const { status: n = "info", addRole: o = !0, ...i } = Ma(t), s = t.colorScheme ?? V2(n), a = E2("Alert", { ...t, colorScheme: s }), l = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...a.container
  };
  return /* @__PURE__ */ C(B2, { value: { status: n }, children: /* @__PURE__ */ C(I2, { value: a, children: /* @__PURE__ */ C(
    Ke.div,
    {
      "data-status": n,
      role: o ? "alert" : void 0,
      ref: r,
      ...i,
      className: Dr("chakra-alert", t.className),
      __css: l
    }
  ) }) });
});
vm.displayName = "Alert";
function _m(e) {
  const { status: t } = Al(), r = L2(t), n = Rl(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ C(
    Ke.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: Dr("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ C(r, { h: "100%", w: "100%" })
    }
  );
}
_m.displayName = "AlertIcon";
const Sm = Lr(
  function(t, r) {
    const n = Rl(), { status: o } = Al();
    return /* @__PURE__ */ C(
      Ke.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: Dr("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Sm.displayName = "AlertTitle";
const xm = Lr(
  function(t, r) {
    const { status: n } = Al(), o = Rl(), i = {
      display: "inline",
      ...o.description
    };
    return /* @__PURE__ */ C(
      Ke.div,
      {
        ref: r,
        "data-status": n,
        ...t,
        className: Dr("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
xm.displayName = "AlertDescription";
function F2(e) {
  return /* @__PURE__ */ C(Yn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ C(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
const wm = Lr(
  function(t, r) {
    const n = $l("CloseButton", t), { children: o, isDisabled: i, __css: s, ...a } = Ma(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ C(
      Ke.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: i,
        __css: {
          ...l,
          ...n,
          ...s
        },
        ...a,
        children: o || /* @__PURE__ */ C(F2, { width: "1em", height: "1em" })
      }
    );
  }
);
wm.displayName = "CloseButton";
const O2 = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: s,
    description: a,
    colorScheme: l,
    icon: c
  } = e, d = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ C(
    vm,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: d == null ? void 0 : d.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ C(_m, { children: c }),
        /* @__PURE__ */ C(Ke.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ C(Sm, { id: d == null ? void 0 : d.title, children: o }),
          a && /* @__PURE__ */ C(xm, { id: d == null ? void 0 : d.description, display: "block", children: a })
        ] }),
        i && /* @__PURE__ */ C(
          wm,
          {
            size: "sm",
            onClick: s,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function j2(e = {}) {
  const { render: t, toastComponent: r = O2 } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ C(r, { ...o, ...e });
}
const N2 = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ei = W2(N2);
function W2(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      n((s) => ({
        ...s,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: s[i].filter((a) => a.id != o)
      }));
    },
    notify: (o, i) => {
      const s = H2(o, i), { position: a, id: l } = s;
      return n((c) => {
        const u = a.includes("top") ? [s, ...c[a] ?? []] : [...c[a] ?? [], s];
        return {
          ...c,
          [a]: u
        };
      }), l;
    },
    update: (o, i) => {
      o && n((s) => {
        const a = { ...s }, { position: l, index: c } = $d(a, o);
        return l && c !== -1 && (a[l][c] = {
          ...a[l][c],
          ...i,
          message: j2(i)
        }), a;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, c) => (l[c] = i[c].map((d) => ({
          ...d,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      n((i) => {
        const s = pm(i, o);
        return s ? {
          ...i,
          [s]: i[s].map((a) => a.id == o ? {
            ...a,
            requestClose: !0
          } : a)
        } : i;
      });
    },
    isActive: (o) => !!$d(ei.getState(), o).position
  };
}
let Dd = 0;
function H2(e, t = {}) {
  Dd += 1;
  const r = t.id ?? Dd, n = t.position ?? "bottom";
  return {
    id: r,
    message: e,
    position: n,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ei.removeToast(String(r), n),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
const [km, U2] = zr({
  strict: !1,
  name: "PortalContext"
}), El = "chakra-portal", q2 = ".chakra-portal", G2 = (e) => /* @__PURE__ */ C(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), K2 = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = _e(null), i = ue(null), [, s] = _e({});
  le(() => s({}), []);
  const a = U2(), l = PT();
  Es(() => {
    if (!n)
      return;
    const d = n.ownerDocument, u = t ? a ?? d.body : d.body;
    if (!u)
      return;
    i.current = d.createElement("div"), i.current.className = El, u.appendChild(i.current), s({});
    const f = i.current;
    return () => {
      u.contains(f) && u.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ C(G2, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? ai(
    /* @__PURE__ */ C(km, { value: i.current, children: c }),
    i.current
  ) : /* @__PURE__ */ C(
    "span",
    {
      ref: (d) => {
        d && o(d);
      }
    }
  );
}, Y2 = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), s = Z(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = El), l;
  }, [o]), [, a] = _e({});
  return Es(() => a({}), []), Es(() => {
    if (!(!s || !i))
      return i.appendChild(s), () => {
        i.removeChild(s);
      };
  }, [s, i]), i && s ? ai(
    /* @__PURE__ */ C(km, { value: n ? s : null, children: t }),
    s
  ) : null;
};
function xi(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ C(Y2, { containerRef: r, ...n }) : /* @__PURE__ */ C(K2, { ...n });
}
xi.className = El;
xi.selector = q2;
xi.displayName = "Portal";
const [X2, yR] = zr({
  name: "ToastOptionsContext",
  strict: !1
}), Z2 = (e) => {
  const t = ri(
    ei.subscribe,
    ei.getState
  ), {
    motionVariants: r,
    component: n = mm,
    portalProps: o,
    animatePresenceProps: i
  } = e, a = Object.keys(t).map((l) => {
    const c = t[l];
    return /* @__PURE__ */ C(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${l}`,
        id: `chakra-toast-manager-${l}`,
        style: d2(l),
        children: /* @__PURE__ */ C(BT, { ...i, initial: !1, children: c.map((d) => /* @__PURE__ */ C(
          n,
          {
            motionVariants: r,
            ...d
          },
          d.id
        )) })
      },
      l
    );
  });
  return /* @__PURE__ */ C(xi, { ...o, children: a });
}, J2 = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ C($T, { theme: n, ...i, children: [
    /* @__PURE__ */ C(X2, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ C(Z2, { ...o })
  ] });
}, Q2 = J2(vh);
function ln(e) {
  return typeof e == "function";
}
function eR(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
const tR = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return bk(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, eR(
    ...n.map(
      (i) => (s) => ln(i) ? i(s) : rR(s, i)
    )
  )(o);
}, Tm = tR(vh);
function rR(...e) {
  return Oe({}, ...e, Cm);
}
function Cm(e, t, r, n) {
  if ((ln(e) || ln(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = ln(e) ? e(...o) : e, s = ln(t) ? t(...o) : t;
      return Oe({}, i, s, Cm);
    };
  if (Ae(e) && As(t) || As(e) && Ae(t))
    return t;
}
const Bd = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, d) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const f = t;
      t = d ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, f));
    }
  }, o = () => t, a = { setState: n, getState: o, getInitialState: () => l, subscribe: (c) => (r.add(c), () => r.delete(c)) }, l = t = e(n, o, a);
  return a;
}, nR = (e) => e ? Bd(e) : Bd, oR = (e) => e;
function iR(e, t = oR) {
  const r = Ts.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return Ts.useDebugValue(r), r;
}
const Id = (e) => {
  const t = nR(e), r = (n) => iR(t, n);
  return Object.assign(r, t), r;
}, Pm = (e) => e ? Id(e) : Id, sR = {
  en: {
    title: "Hello",
    subtitle: "Welcome to our site!"
  },
  nl: {
    title: "Hallo",
    subtitle: "Welkom op onze site!"
  }
}, aR = Pm((e) => ({
  locales: sR,
  updateLocales: (t) => {
    e((r) => ({
      locales: {
        en: { ...r.locales.en, ...t.en || {} },
        nl: { ...r.locales.nl, ...t.nl || {} }
      }
    }));
  }
}));
function lR() {
  const e = aR((t) => t.updateLocales);
  return le(() => {
    const t = document.getElementById("myComponent"), r = () => {
      if (t)
        try {
          const o = JSON.parse(t.getAttribute("data") || "{}");
          o.locales && e(o.locales);
        } catch (o) {
          console.error("Invalid JSON data:", o);
        }
    }, n = new MutationObserver(r);
    return t && n.observe(t, {
      attributes: !0,
      attributeFilter: ["data"]
    }), r(), () => n.disconnect();
  }, [e]), null;
}
const cR = Tm({
  components: {
    Button: {
      baseStyle: {
        background: "transparent",
        backgroundColor: "#123456",
        color: "#FFFFFF"
      }
    }
  }
}), $m = Pm((e) => ({
  theme: cR,
  updateTheme: (t) => {
    e((r) => ({
      theme: Tm(r.theme, t)
    }));
  }
})), uR = () => {
  const e = $m((t) => t.updateTheme);
  return le(() => {
    const t = document.getElementById("myComponent"), r = () => {
      if (t)
        try {
          const o = JSON.parse(t.getAttribute("data") || "{}");
          o.theme && e(o.theme);
        } catch (o) {
          console.error("Invalid JSON data:", o);
        }
    }, n = new MutationObserver(r);
    return t && n.observe(t, {
      attributes: !0,
      attributeFilter: ["data"]
    }), r(), () => n.disconnect();
  }, [e]), null;
}, dR = si(() => import("./page-DUOhN_Bp.mjs")), fR = si(() => import("./page-DNxhKWUJ.mjs"));
function hR({ data: e }) {
  const t = $m((r) => r.theme);
  return console.log({ theme: t }), /* @__PURE__ */ C(Q2, { theme: t, children: [
    /* @__PURE__ */ C(uR, {}),
    /* @__PURE__ */ C(lR, {}),
    /* @__PURE__ */ C(mr, { fallback: /* @__PURE__ */ C("div", { children: "Loading..." }), children: /* @__PURE__ */ C(R0, { children: /* @__PURE__ */ C(a0, { children: [
      /* @__PURE__ */ C(Ps, { path: "/", element: /* @__PURE__ */ C(fR, { data: e }) }),
      /* @__PURE__ */ C(Ps, { path: "/anotherpage", element: /* @__PURE__ */ C(dR, {}) })
    ] }) }) })
  ] });
}
class pR extends HTMLElement {
  constructor() {
    super(...arguments), this.mountPoint = null, this.data = {};
  }
  // Store the passed JSON data
  connectedCallback() {
    this.mountPoint = document.createElement("div"), this.appendChild(this.mountPoint);
    const t = this.getAttribute("data");
    if (t)
      try {
        this.data = JSON.parse(t);
      } catch (r) {
        console.error("Failed to parse the data attribute:", r);
      }
    this.renderComponent();
  }
  // Everything here can move into the Root component i.e. App
  renderComponent() {
    gy.createRoot(this.mountPoint).render(/* @__PURE__ */ C(hR, { data: this.data }));
  }
}
customElements.define("my-web-component", pR);
export {
  ym as S,
  Z as T,
  xa as _,
  Jt as a,
  C as b,
  Ke as c,
  $l as d,
  Zf as e,
  Lr as f,
  Dr as g,
  aR as h,
  zr as i,
  mR as j,
  _e as k,
  pe as l,
  Ma as o,
  Xt as p,
  Re as q,
  Uy as u
};

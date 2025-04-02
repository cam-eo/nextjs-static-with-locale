import { T as g, i as R, p as j, _ as z, g as y, b as s, c as o, S as G, j as D, k as W, q as $, f as x, d as q, o as H, l as L } from "./WebComponent-BJCzr32M.mjs";
const C = (t) => t ? "" : void 0;
function M(t, n) {
  if (t != null) {
    if (typeof t == "function") {
      t(n);
      return;
    }
    try {
      t.current = n;
    } catch {
      throw new Error(`Cannot assign value '${n}' to ref '${t}'`);
    }
  }
}
function O(...t) {
  return (n) => {
    t.forEach((e) => {
      M(e, n);
    });
  };
}
function U(...t) {
  return g(() => O(...t), t);
}
const [V, X] = R({
  strict: !1,
  name: "ButtonGroupContext"
});
function l(t) {
  const { children: n, className: e, ...a } = t, i = j(n) ? z(n, {
    "aria-hidden": !0,
    focusable: !1
  }) : n, r = y("chakra-button__icon", e);
  return /* @__PURE__ */ s(
    o.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...a,
      className: r,
      children: i
    }
  );
}
l.displayName = "ButtonIcon";
function h(t) {
  const {
    label: n,
    placement: e,
    spacing: a = "0.5rem",
    children: i = /* @__PURE__ */ s(G, { color: "currentColor", width: "1em", height: "1em" }),
    className: r,
    __css: u,
    ...p
  } = t, f = y("chakra-button__spinner", r), d = e === "start" ? "marginEnd" : "marginStart", c = g(
    () => D({
      display: "flex",
      alignItems: "center",
      position: n ? "relative" : "absolute",
      [d]: n ? a : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...u
    }),
    [u, n, d, a]
  );
  return /* @__PURE__ */ s(o.div, { className: f, ...p, __css: c, children: i });
}
h.displayName = "ButtonSpinner";
function Y(t) {
  const [n, e] = W(!t);
  return { ref: $((r) => {
    r && e(r.tagName === "BUTTON");
  }, []), type: n ? "button" : void 0 };
}
const F = x((t, n) => {
  const e = X(), a = q("Button", { ...e, ...t }), {
    isDisabled: i = e == null ? void 0 : e.isDisabled,
    isLoading: r,
    isActive: u,
    children: p,
    leftIcon: f,
    rightIcon: d,
    loadingText: c,
    iconSpacing: m = "0.5rem",
    type: k,
    spinner: b,
    spinnerPlacement: _ = "start",
    className: v,
    as: S,
    shouldWrapChildren: I,
    ...T
  } = H(t), w = g(() => {
    const A = { ...a == null ? void 0 : a._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...a,
      ...!!e && { _focus: A }
    };
  }, [a, e]), { ref: E, type: P } = Y(S), B = {
    rightIcon: d,
    leftIcon: f,
    iconSpacing: m,
    children: p,
    shouldWrapChildren: I
  };
  return /* @__PURE__ */ s(
    o.button,
    {
      disabled: i || r,
      ref: U(n, E),
      as: S,
      type: k ?? P,
      "data-active": C(u),
      "data-loading": C(r),
      __css: w,
      className: y("chakra-button", v),
      ...T,
      children: [
        r && _ === "start" && /* @__PURE__ */ s(
          h,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: m,
            children: b
          }
        ),
        r ? c || /* @__PURE__ */ s(o.span, { opacity: 0, children: /* @__PURE__ */ s(N, { ...B }) }) : /* @__PURE__ */ s(N, { ...B }),
        r && _ === "end" && /* @__PURE__ */ s(
          h,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: m,
            children: b
          }
        )
      ]
    }
  );
});
F.displayName = "Button";
function N(t) {
  const { leftIcon: n, rightIcon: e, children: a, iconSpacing: i, shouldWrapChildren: r } = t;
  return r ? /* @__PURE__ */ s("span", { style: { display: "contents" }, children: [
    n && /* @__PURE__ */ s(l, { marginEnd: i, children: n }),
    a,
    e && /* @__PURE__ */ s(l, { marginStart: i, children: e })
  ] }) : /* @__PURE__ */ s(L, { children: [
    n && /* @__PURE__ */ s(l, { marginEnd: i, children: n }),
    a,
    e && /* @__PURE__ */ s(l, { marginStart: i, children: e })
  ] });
}
const J = o("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
J.displayName = "Center";
const K = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
x(
  function(n, e) {
    const { axis: a = "both", ...i } = n;
    return /* @__PURE__ */ s(
      o.div,
      {
        ref: e,
        __css: K[a],
        ...i,
        position: "absolute"
      }
    );
  }
);
export {
  F as B,
  J as C
};

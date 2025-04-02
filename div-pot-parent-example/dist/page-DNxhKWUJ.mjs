import { f as x, b as n, c as h, d as k, o as y, e as C, g as N, u as S, a as w, h as T } from "./WebComponent-BJCzr32M.mjs";
import { B as m, C as b } from "./center-D6o7O-xJ.mjs";
const u = x(function(e, o) {
  const { direction: i, align: s, justify: l, wrap: r, basis: c, grow: a, shrink: g, ...d } = e, p = {
    display: "flex",
    flexDirection: i,
    alignItems: s,
    justifyContent: l,
    flexWrap: r,
    flexBasis: c,
    flexGrow: a,
    flexShrink: g
  };
  return /* @__PURE__ */ n(h.div, { ref: o, __css: p, ...d });
});
u.displayName = "Flex";
const f = x(function(e, o) {
  const i = k("Text", e), { className: s, align: l, decoration: r, casing: c, ...a } = y(e), g = C({
    textAlign: e.align,
    textDecoration: e.decoration,
    textTransform: e.casing
  });
  return /* @__PURE__ */ n(
    h.p,
    {
      ref: o,
      className: N("chakra-text", e.className),
      ...g,
      ...a,
      __css: i
    }
  );
});
f.displayName = "Text";
function v({ data: t }) {
  const e = S(), o = w(), i = o.pathname, s = new URLSearchParams(o.search), l = (a) => {
    s.set("lang", a), e(`${i}?${s.toString()}`);
  }, r = s.get("lang"), c = T((a) => a.locales[r]);
  return /* @__PURE__ */ n(b, { as: "main", w: "full", flexDirection: "column", pt: "20", children: [
    /* @__PURE__ */ n(f, { children: [
      "Name: ",
      t == null ? void 0 : t.name
    ] }),
    /* @__PURE__ */ n(
      m,
      {
        mb: "5",
        onClick: () => e(`anotherpage/?${s.toString()}`),
        children: "to another page"
      }
    ),
    /* @__PURE__ */ n(u, { mb: "5", gap: "1", children: [
      /* @__PURE__ */ n(m, { onClick: () => l("en"), children: "en" }),
      /* @__PURE__ */ n(m, { backgroundColor: t == null ? void 0 : t.color, onClick: () => l("nl"), children: "nl" })
    ] }),
    /* @__PURE__ */ n(f, { fontSize: "xl", children: c == null ? void 0 : c.title })
  ] });
}
export {
  v as default
};

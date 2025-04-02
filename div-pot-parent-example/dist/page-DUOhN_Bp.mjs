import { u as o, a as r, b as a } from "./WebComponent-BJCzr32M.mjs";
import { B as c, C as i } from "./center-D6o7O-xJ.mjs";
function u() {
  const t = o(), e = r(), n = new URLSearchParams(e.search);
  return /* @__PURE__ */ a(i, { as: "main", flexDirection: "column", pt: "20", children: [
    /* @__PURE__ */ a(c, { onClick: () => t(`/?${n.toString()}`), mb: "5", children: "back" }),
    /* @__PURE__ */ a("h1", { children: "Another NextJS Route" })
  ] });
}
export {
  u as default
};

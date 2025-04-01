import { defineConfig } from "vite";
import process from "process"; // Import process polyfill
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    process: process, // Ensure the 'process' object is available in the browser
  },
  build: {
    minify: "esbuild",
    lib: {
      entry: "components/WebComponent.tsx",
      name: "MyWebComponent",
      fileName: "my-web-component",
      formats: ["es", "umd"],
    },
  },
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
});

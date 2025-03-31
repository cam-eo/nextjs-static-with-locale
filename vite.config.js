import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process"; // Import process polyfill

export default defineConfig({
  define: {
    process: process, // Ensure the 'process' object is available in the browser
  },
  build: {
    lib: {
      entry: "components/WebComponent.tsx",
      name: "MyWebComponent",
      fileName: "my-web-component",
      formats: ["es", "umd"],
    },
  },
  plugins: [react()],
});

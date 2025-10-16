import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const externalPackages = (id: string) =>
  id === "tinycolor2" || id.startsWith("react") || id.startsWith("@mui/");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/themes": path.resolve(__dirname, "src/themes"),
      "@/helpers": path.resolve(__dirname, "src/helpers"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MuiThemesExtand",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.es" : "index"),
    },
    rollupOptions: {
      external: externalPackages,
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

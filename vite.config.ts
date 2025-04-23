import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  /* ---------- plugins ---------- */
  plugins: [react()],

  /* ---------- paths ---------- */
  base: "/press-play-website/",                       // GitHub Pages sub-folder
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

  /* ---------- dev server ---------- */
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: true },
  },

  /* ---------- build ---------- */
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true, passes: 2 },
      format: { comments: false },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: process.env.NODE_ENV === "development",

    rollupOptions: {
      output: {
        manualChunks: {
          react:   ["react", "react-dom", "react-router-dom"],
          vendors: ["@tanstack/react-query", "lucide-react", "sonner"],
        },
        assetFileNames: (info) =>
          info.name && /\.css$/i.test(info.name)
            ? "assets/css/[name]-[hash][extname]"
            : "assets/[name]-[hash][extname]",
      },
      onwarn(warning, warn) {
        if (warning.code === "SOURCEMAP_ERROR") return;
        warn(warning);
      },
    },
  },

  /* ---------- dependency optimisation ---------- */
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      jsx: "automatic",
      jsxImportSource: "react",
      legalComments:
        process.env.NODE_ENV === "development" ? "inline" : "none",
    },
  },
});
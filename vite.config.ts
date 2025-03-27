
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { execSync } from "child_process";

// Update browserslist database during build
try {
  console.log("Updating browserslist database...");
  execSync("npx update-browserslist-db@latest --force", { stdio: "inherit" });
  console.log("Browserslist database updated successfully");
} catch (error) {
  console.warn("Failed to update browserslist database:", error);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Basic SWC configuration without requiring external plugins
      jsxImportSource: "react",
      // Only add the emotion plugin if it's available
      plugins: process.env.NODE_ENV === 'production' ? [] : undefined,
    }),
    // Only use the componentTagger in development mode
    mode === 'development' && 
    (() => {
      try {
        const { componentTagger } = require("lovable-tagger");
        return componentTagger();
      } catch (e) {
        console.warn("Lovable tagger not available, skipping");
        return null;
      }
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui'],
          vendors: ['@tanstack/react-query', 'lucide-react', 'sonner'],
        },
      },
      // Add comment handling for external packages
      onwarn(warning, warn) {
        // Ignore specific warnings related to comment parsing in react-helmet-async
        if (warning.code === 'SOURCEMAP_ERROR' && 
            warning.message.includes('react-helmet-async')) {
          return;
        }
        warn(warning);
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    // Add esbuild options to handle comment parsing in dependencies
    esbuildOptions: {
      jsx: 'automatic',
      jsxImportSource: 'react',
      // Preserve comments in development, but not in production
      legalComments: mode === 'development' ? 'inline' : 'none',
    }
  },
}));

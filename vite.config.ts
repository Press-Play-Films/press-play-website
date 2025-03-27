
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
    // Add cache optimization for development
    hmr: {
      overlay: true,
    },
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
        passes: 2, // Multiple optimization passes
      },
      format: {
        comments: false, // Remove comments from production builds
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui'],
          vendors: ['@tanstack/react-query', 'lucide-react', 'sonner'],
        },
        // Add code splitting for large CSS files
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
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

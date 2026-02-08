import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Optimize build output
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Separate heavy Three.js bundle
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor';
          }
          // Framer Motion
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          // Icons
          if (id.includes('react-icons')) {
            return 'icons-vendor';
          }
          // Typewriter
          if (id.includes('react-simple-typewriter')) {
            return 'typewriter';
          }
          // Split large components
          if (id.includes('src/components/Skills')) {
            return 'skills';
          }
          if (id.includes('src/components/Projects')) {
            return 'projects';
          }
          if (id.includes('src/components/CurrentFocus')) {
            return 'current-focus';
          }
          if (id.includes('src/components/Experience')) {
            return 'experience';
          }
          // Group smaller components
          if (id.includes('src/components')) {
            return 'components';
          }
          // Vendor node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Compact asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      },
      treeshake: {
        moduleSideEffects: false,
        preset: 'recommended'
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Asset inlining threshold - inline small assets to reduce requests
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
    // No source maps in production
    sourcemap: false,
    // Report compressed size
    reportCompressedSize: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: []
  },
  // Performance improvements
  server: {
    hmr: {
      overlay: true
    }
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Set base URL for deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: 'react',
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'gray-matter',
    ],
    exclude: ['@emotion/react/jsx-dev-runtime']
  },
  build: {
    sourcemap: mode === 'development',
    outDir: 'dist',
    assetsDir: 'assets',
    // Improve chunking to avoid large bundles
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom', 
            '@tanstack/react-query',
            'gray-matter',
            'react-helmet-async'
          ],
          ui: [
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            'sonner'
          ]
        }
      }
    }
  }
}));

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      babel: {
        babelrc: false,
        configFile: false,
      }
    }),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    })
  ],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            '@firebase/app',
            '@firebase/firestore',
            '@firebase/analytics'
          ],
          // Split Google Maps into its own chunk
          maps: ['@react-google-maps/api'],
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    },
    cssCodeSplit: true, // Enable CSS code splitting for better performance
    chunkSizeWarningLimit: 1500, // Increased to accommodate vendor chunk
    reportCompressedSize: false,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  esbuild: {
    logLevel: 'error',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  }
});
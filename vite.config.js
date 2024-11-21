import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react']
        }
      }
    },
    sourcemap: true,
    // Ensure proper module resolution
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.jsx']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // Add optimizeDeps to pre-bundle dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
});
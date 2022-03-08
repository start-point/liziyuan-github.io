import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build',
    target: 'es2015',
  },
  server: {
    proxy: {
      '/api': {
        target: '127.0.0.1',
        changeOrigin: true,
      },
    },
  },
});

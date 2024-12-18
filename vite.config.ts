import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/apis', replacement: '/src/apis' },
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/commons', replacement: '/src/commons' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/hooks', replacement: '/src/hooks' },
      { find: '@/pages', replacement: '/src/pages' },
      { find: '@/stores', replacement: '/src/stores' },
      { find: '@/utils', replacement: '/src/utils' },
    ],
  },
});

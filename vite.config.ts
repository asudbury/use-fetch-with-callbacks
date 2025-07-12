import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'UseFetchWithCallbacks',
      fileName: format => `use-fetch-with-callbacks.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

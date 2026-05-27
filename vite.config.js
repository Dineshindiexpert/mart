import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Isse Sass compiler bootstrap ki internal legacy warnings ko ignore marega
        silenceDeprecations: ['import', 'global-builtin', 'meta-functions', 'legacy-js-api'],
      },
    },
  },
});

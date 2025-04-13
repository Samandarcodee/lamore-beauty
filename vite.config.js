import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@chakra-ui/icons'], // Ensure Vite pre-bundles the package
  },
  build: {
    rollupOptions: {
      // Remove '@chakra-ui/icons' from 'external' (if present)
    },
  },
});

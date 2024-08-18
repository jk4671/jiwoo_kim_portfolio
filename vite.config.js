import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Create a vendor chunk for libraries
          // Define other chunks as needed
        }
      }
    },
    chunkSizeWarningLimit: 2000 // Increase limit if you don't want warnings
  }
});

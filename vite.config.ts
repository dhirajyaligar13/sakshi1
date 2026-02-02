
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are linked relatively for GitHub Pages or Vercel sub-paths
  define: {
    // This explicitly tells Vite to replace 'process.env.API_KEY' in your code
    // with the actual value found in the environment during build time.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
}); 

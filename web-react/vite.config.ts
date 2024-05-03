import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['logo.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'streatbear',
        short_name: 'streatbear',
        description: 'streatbear - site for resale boots',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'boots192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'nike512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'nike512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.tsx',
    css: true,
  },
});

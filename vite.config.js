import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'AnimeVerse',
        short_name: 'AnimeVerse',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: './src/assets/img/pwaLogo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/img/pwaLogo1.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})

import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      manifest: {
        name: 'Ikeda Personal',
        short_name: 'Ikeda Personal',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
};

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pwa from './pwa.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pwa],
});

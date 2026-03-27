import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // 1. 핵심 수정 사항: 깃허브 저장소 이름에 맞춰 base 경로 수정
    base: '/ppt/', 
    
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || 'AIzaSyAheq5tRFMXmHqjKqtagGQ3UxxcoT5pztI'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // 2. 빌드 결과물 폴더 명시 (안전장치)
    build: {
      outDir: 'dist',
    }
  };
});

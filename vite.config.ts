import { defineConfig } from 'vite'

export default defineConfig({
  base: '/tilefile-info-viewer/',
  build: {
    sourcemap: true,
    assetsDir: '',
    outDir: 'docs'
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
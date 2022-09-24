import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // - because of: https://github.com/vitejs/vite/issues/3301
      fastRefresh: false,
    }),
  ],
})

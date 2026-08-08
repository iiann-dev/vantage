import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'vendor';
          if (id.includes('node_modules/motion/')) return 'motion';
          if (id.includes('node_modules/lenis/')) return 'lenis';
          if (id.includes('node_modules/embla-carousel')) return 'carousel';
        },
      },
    },
    cssMinify: 'lightningcss',
  },
})

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh({
    include: '**/*.jsx',
  })],
  resolve: {
    alias: [
      { find: 'components', replacement: '/src/components' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'img', replacement: '/src/assets/img' },
      { find: 'services', replacement: '/src/services' }
    ]
  },
  // root: 'src',
  build: {
    outDir: './dist'
  }
})

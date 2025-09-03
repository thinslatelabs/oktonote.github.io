import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  base: '/',
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        features: resolve(__dirname, 'features.html'),
        support: resolve(__dirname, 'support.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'blog-journal': resolve(__dirname, 'blog/how-to-journal-in-2025.html'),
        'blog-travel': resolve(__dirname, 'blog/travel-utility-no-one-thinks-about.html'),
        'blog-capture': resolve(__dirname, 'blog/quickest-way-capture-thoughts.html'),
        'blog-ai': resolve(__dirname, 'blog/ai-era-stop-organizing-notes.html'),
        'blog-professionals': resolve(__dirname, 'blog/best-note-takers-professionals.html'),
        'blog-showdown': resolve(__dirname, 'blog/ai-note-taking-showdown-daily-vs-professional.html'),
        'blog-comparison': resolve(__dirname, 'blog/oktonote-vs-mem-ai-complete-comparison.html')
      }
    }
  },
  server: {
    port: 3000
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'includes')
    })
  ]
})
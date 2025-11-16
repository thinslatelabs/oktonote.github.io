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
        faq: resolve(__dirname, 'faq.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        'blog-journal': resolve(__dirname, 'blog/how-to-journal-in-2025.html'),
        'blog-travel': resolve(__dirname, 'blog/travel-utility-no-one-thinks-about.html'),
        'blog-capture': resolve(__dirname, 'blog/quickest-way-capture-thoughts.html'),
        'blog-ai': resolve(__dirname, 'blog/ai-era-stop-organizing-notes.html'),
        'blog-professionals': resolve(__dirname, 'blog/best-note-takers-professionals.html'),
        'blog-showdown': resolve(__dirname, 'blog/ai-note-taking-showdown-daily-vs-professional.html'),
        'blog-comparison': resolve(__dirname, 'blog/oktonote-vs-mem-ai-complete-comparison.html'),
        'blog-sticky-notes': resolve(__dirname, 'blog/sticky-notes-ai-era-oktonote.html'),
        // Rebirth Affirmation App Blogs
        'blog-motivation': resolve(__dirname, 'blog/best-motivation-app-daily-affirmations.html'),
        'blog-mindfulness': resolve(__dirname, 'blog/best-mindfulness-app-daily-awareness.html'),
        'blog-inner-peace': resolve(__dirname, 'blog/best-inner-peace-app-calm-serenity.html'),
        'blog-self-confidence': resolve(__dirname, 'blog/best-self-confidence-app-daily-affirmations.html'),
        'blog-resilience': resolve(__dirname, 'blog/best-resilience-app-bounce-back-stronger.html'),
        'blog-relationship-healing': resolve(__dirname, 'blog/best-relationship-healing-app-repair-bonds.html'),
        'blog-personal-growth': resolve(__dirname, 'blog/best-personal-growth-affirmation-app-self-improvement.html'),
        'blog-spiritual': resolve(__dirname, 'blog/best-spiritual-affirmation-app-higher-self.html'),
        'blog-self-love': resolve(__dirname, 'blog/best-self-love-app-self-compassion.html'),
        'blog-happiness': resolve(__dirname, 'blog/best-happiness-app-make-me-smile-daily.html'),
        'blog-gratitude': resolve(__dirname, 'blog/best-gratitude-app-daily-thankfulness.html'),
        'blog-anxiety-relief': resolve(__dirname, 'blog/best-anxiety-relief-app-calm-peaceful-mind.html'),
        'blog-creativity': resolve(__dirname, 'blog/best-creativity-app-unlock-creative-potential.html'),
        'blog-love-relationship': resolve(__dirname, 'blog/best-love-relationship-app-romantic-affirmations.html'),
        'blog-productivity': resolve(__dirname, 'blog/best-productivity-app-get-things-done-affirmations.html'),
        'blog-one-day-at-a-time': resolve(__dirname, 'blog/best-one-day-at-a-time-app-present-moment.html'),
        'blog-manifestation': resolve(__dirname, 'blog/best-manifestation-app-law-of-attraction.html'),
        'blog-transformation': resolve(__dirname, 'blog/best-transformation-app-personal-change.html'),
        'blog-healing-heartbreak': resolve(__dirname, 'blog/best-healing-heartbreak-app-move-forward.html'),
        'blog-physical-health': resolve(__dirname, 'blog/best-physical-health-app-wellness-affirmations.html'),
        'blog-body-positivity': resolve(__dirname, 'blog/best-body-positivity-app-self-acceptance.html')
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
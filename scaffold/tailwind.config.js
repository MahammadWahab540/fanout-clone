/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: {
          50: 'var(--ref-paper-50)',
          100: 'var(--ref-paper-100)',
          200: 'var(--ref-paper-200)',
          300: 'var(--ref-paper-300)',
          400: 'var(--ref-paper-400)',
          600: 'var(--ref-paper-600)',
        },
        ink: {
          900: 'var(--text-primary)',
          700: 'var(--text-secondary)',
          500: 'var(--text-tertiary)',
          300: 'var(--text-disabled)',
        },
        brand: {
          DEFAULT: 'var(--brand)',
          subtle: 'var(--brand-subtle)',
        },
        stage: {
          learn: 'var(--stage-learn-solid)',
          'learn-tint': 'var(--stage-learn-tint)',
          'learn-line': 'var(--stage-learn-line)',
          practice: 'var(--stage-practice-solid)',
          'practice-text': 'var(--stage-practice-text)',
          'practice-tint': 'var(--stage-practice-tint)',
          'practice-line': 'var(--stage-practice-line)',
          build: 'var(--stage-build-solid)',
          'build-tint': 'var(--stage-build-tint)',
          'build-line': 'var(--stage-build-line)',
          review: 'var(--stage-review-solid)',
          'review-tint': 'var(--stage-review-tint)',
          'review-line': 'var(--stage-review-line)',
          prove: 'var(--stage-prove-solid)',
          'prove-text': 'var(--stage-prove-text)',
          'prove-tint': 'var(--stage-prove-tint)',
          'prove-line': 'var(--stage-prove-line)',
        }
      },
      borderRadius: {
        'mark': 'var(--radius-mark)',       // 2px
        'control': 'var(--radius-control)', // 6px
        'surface': 'var(--radius-surface)', // 8px
      }
    },
  },
  plugins: [],
}

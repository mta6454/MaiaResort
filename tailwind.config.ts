import type { Config } from 'tailwindcss'

export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e7c86',
        secondary: '#0a3d3f',
        sand: '#E3C29B',
      },
      fontFamily: {
        sans: ['SVN-Zona Pro', 'ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
        rosellinda: ['SVN-Rosellinda Alyamore', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config

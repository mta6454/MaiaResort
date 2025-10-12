import type {Config} from 'tailwindcss'

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
                primary: '#23ABA7',
                secondary: '#0a3d3f',
                sand: '#EBBB68',
                deep: '#0a3d3f',
            },
            fontFamily: {
                sans: ['SVN-Zona Pro', 'ui-sans-serif', 'system-ui', 'Inter', 'sans-serif', '"NVN Motherland Signature"', 'SVN-Rosellinda Alyamore', 'cursive'],
                rosellinda: ['SVN-Rosellinda Alyamore', 'serif'],
                zona: ['"SVN-Zona Pro"', 'SVN-Zona', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 10px 30px rgba(0,0,0,.15)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
} satisfies Config

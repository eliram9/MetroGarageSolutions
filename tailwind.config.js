/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Add this line
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#002C8C",
                secondaryBlue: "#0010A4",
                red: "#DE2A51",
                redHover: "#BF243F",
                orange: "#DD6951",
                orangeHover: "#C45C47",
                start: "#DD6951",
                end: "#DE2A51",
            },
            fontFamily: {
                sans: ['var(--font-rubik)', ...fontFamily.sans],
                comfortaa: ['var(--font-comfortaa)', 'sans-serif'],
                rubik: ['var(--font-rubik)', 'sans-serif'],
            },
            screens: {
                'xs': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                'xxl': '1536px',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'shimmer': 'shimmer 2s ease-in-out infinite',
            },
            keyframes: {
                spin: {
                    to: { transform: 'rotate(360deg)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            textColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                muted: 'var(--color-text-muted)',
                inverse: 'var(--color-text-inverse)',
                error: 'var(--color-text-error)',
                success: 'var(--color-text-success)',
                warning: 'var(--color-text-warning)',
                brand: 'var(--color-text-brand-primary)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    safelist: [
        'animate-spin-slow',
        'animate-shimmer',
    ],
};
/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#0010A4",
                start: "#DD6951", // Add gradient start color
                end: "#DE2A51",  // Add gradient end color
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', ...fontFamily.sans],
                comfortaa: ['var(--font-comfortaa)', 'sans-serif'],
                rubik: ['var(--font-rubik)', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
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
                secondaryBlue: "#0010A4",
                red: "#DE2A51",
                redHover: "#BF243F", // 10% darker red
                orange: "#DD6951",
                orangeHover: "#C45C47", // 10% darker orange
                start: "#DD6951", // Add gradient start color
                end: "#DE2A51",  // Add gradient end color
            },
            fontFamily: {
                sans: ['var(--font-rubik)', ...fontFamily.sans],
                comfortaa: ['var(--font-comfortaa)', 'sans-serif'],
                rubik: ['var(--font-rubik)', 'sans-serif'],
            },
            screens: {
                'xs': '375px',   // Extra small devices (e.g., small phones)
                'sm': '640px',   // Small devices (e.g., large phones)
                'md': '768px',    // Medium devices (e.g., tablets, iPad)
                'lg': '1024px',  // Large devices (e.g., small laptops)
                'xl': '1280px',  // Extra large devices (e.g., desktops)
                'xxl': '1536px', // 2X extra large devices (e.g., large desktops, 4K)
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
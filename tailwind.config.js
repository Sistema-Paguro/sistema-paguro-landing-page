/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "shimmer-slide":
                    "shimmer-slide var(--speed) ease-in-out infinite alternate",
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            },
            keyframes: {
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                "shimmer-slide": {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
                "pulse-slow": {
                    '0%, 100%': {
                        transform: 'translateX(-100%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
            animation: {
                "shimmer-slide":
                    "shimmer-slide var(--speed) ease-in-out infinite alternate",
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
                "pulse-slow": "pulse-slow 3s ease-in-out infinite",
            },
            colors: {
                // Brand Primary
                magenta: {
                    DEFAULT: '#c01c83',
                    dark: '#a0156b',
                    light: '#d64d9e',
                    soft: '#fce7f3', // for backgrounds/tags
                },
                // Brand Secondary
                blue: {
                    DEFAULT: '#0079d3',
                    dark: '#005fa3',
                    light: '#4dabf5',
                    soft: '#eff6ff', // for backgrounds/tags
                },
                // Neutrals (White Mode)
                black: {
                    DEFAULT: '#0a0a0a',
                    rich: '#171717',
                    soft: '#262626',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb', // Borders
                    300: '#d1d5db',
                    800: '#1f2937', // Secondary text
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

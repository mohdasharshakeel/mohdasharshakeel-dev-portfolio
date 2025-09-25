/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme: "#11001f",
            },
            fontFamily: {
                ovo: ["var(--font-ovo)", "serif"],
                outfit: ["var(--font-outfit)", "sans-serif"],
            }

        },
    },
    plugins: [],
};

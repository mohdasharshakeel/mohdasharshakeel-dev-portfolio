/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme : '#11001f'
        
      },
      fontfamily: {
        outfit :['Outfit', 'sans-serif'],
        ovo : ['Ovo', 'serif' ]
      }
    },
  },
  plugins: [],
};

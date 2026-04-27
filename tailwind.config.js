/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#060A12',
        bg2: '#0D1526',
        bg3: '#111827',
        indigo: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
        },
        accent: '#22C55E',
      },
    },
  },
  plugins: [],
}

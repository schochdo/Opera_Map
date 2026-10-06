/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        garamond: ['Lora', 'Georgia', '"Cormorant Garamond"', 'serif'],
        lora: ['Lora', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        parchment: {
          50: '#fcfaf6',
          100: '#f6f1e7',
          200: '#ebe1d1',
          300: '#ddceb8',
          400: '#c5ad8d',
          700: '#5c4832',
          800: '#3a2c1e',
          900: '#221911',
          950: '#140e0a',
        },
        velvet: {
          600: '#b1222c',
          700: '#8d1720',
          800: '#680f16',
          900: '#48080d',
          950: '#250407',
        },
        brass: {
          300: '#f3d999',
          400: '#e6c36c',
          500: '#d4af37',
          600: '#b28e23',
          700: '#876712',
        },
      },
    },
  },
  plugins: [],
}

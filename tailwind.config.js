/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        outer: {
          50: '#f3faf9',
          100: '#d9eeee',
          200: '#b2dddd',
          300: '#83c4c5',
          400: '#59a4a8',
          500: '#40868c',
          600: '#316b70',
          700: '#2a565b',
          800: '#264549',
          900: '#223a3d',
          950: '#0f2124',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      width: {
        'menu': '18rem',
      },
      backgroundImage: {
        'day': "url('/img/bg/pexels-nick-kwan-2614818.jpg')"
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: {
          900: '#191919',
          850: '#202225',
          800: '#242424',
          700: '#2f3136',
          600: '#36393f',
          500: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      }
    },
  },
  plugins: [],
}


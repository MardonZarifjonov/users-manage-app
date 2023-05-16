/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        primary: '15px',
        element: '10px',
      },
      colors: {
        primary: '#32C076',
        secondary: '#424F5E',
        tertiary: '#9494A0',
        input: '#C1C1CB',
        'main-bg': '#EBEBF0',
      },
      padding: {
        main: '52px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '480px', // Example custom width for extra small screens (320px - 480px)
      sm: '640px', // Example custom width for small screens
      md: '768px', // Example custom width for medium screens
      lg: '1024px', // Example custom width for large screens
      xl: '1280px', // Example custom width for extra-large screens
      '2xl': '1536px', // Example custom width for 2x extra-large screens
    },
    extend: {},
  },
  plugins: [],
};

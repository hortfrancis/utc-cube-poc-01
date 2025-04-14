/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#443AFF',
        offset: '#FBB106',
        default: '#002031',
      },
    },
  },
  plugins: [],
} 
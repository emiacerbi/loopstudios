/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Alata, sans-serif'],
        secondary: ['Josefin Sans, sans-serif']
      },
      backgroundImage: {
        hero: "url('/mobile/image-hero.jpg')",
        heroDesktop: "url('/desktop/image-hero.jpg')"
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#192a56',
        'brand-cream': '#f8f5f0',
        'brand-gold': '#d4af37',
        'brand-charcoal': '#333333',
      },
      fontFamily: {
        brand: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Lato', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
      }
    }
  },
  plugins: []
}

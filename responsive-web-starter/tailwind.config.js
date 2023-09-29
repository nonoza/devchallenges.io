/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#883AE1",
        "brand-light-blue": "#E6D6FC",
        "brand-grey": "#E5EAF0",
        "brand-grey-lighter":"#FAFAF9",
        "brand-white":"#FFFFFF",
        "brand-dark-gray":"#20293A",
        "brand-light-black":"#6C727F"
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
    },
    fontSize: {
      "title":"18px",
      "body":"14px",
      "small-text" : "12px",
      "tag":"10px"
  },
    },
  },
  plugins: [],
}
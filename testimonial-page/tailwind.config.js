/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
    },
      fontSize: {
        titleSize: "36px",
        bodySize: "20px",
        bodySizeTwo:"16px",
        listItemSize: "14px"
      },
      colors: {
        brandyellowColor:"#F5C044",
        brandgreen:"#4CA154",
        brandblack:"#18181B",
        brandgrey:"#52525A",
        brandlightGrey:"#D4D4D8",
        brandcream:"#FAFAF9",
        brandwhite:"#FFFFFF"
      },
      width:{
        paragraphWidth: "499px",
        gooleWidth :"4.5rem;",
        mobileParagraph:"361px",
      }
    },
  },
  plugins: [],
}


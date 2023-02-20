/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'backgroundColor': '#F6F6F6',
       'buttonColor': '#F67F51',
       'aboutColor': '#F0D4A9',
       'textColor': '#636363',
       'headlineColor': '#505050',
       'darkBlack': '#181818',
       'fastCard': '#B7FFC7',
       'premiumCard': '#FFABED',
       'satisfactionCard': '#FFF2AF'
      }
    },
    fontFamily: {
      'josefin-sans' : ['Josefin Sans', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

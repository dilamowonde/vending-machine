/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'vending-machine' : "url('../public/image/vending-machine.jpg')",
      'soda' : "url('../public/image/soda.jpg')",
      'chips' : "url('../public/image/chips.jpg')",
      'sardines' : "url('../public/image/sardines.jpg')",
      'chip' : "url('../public/image/chip.png')",
    }
  },
  plugins: [],
}

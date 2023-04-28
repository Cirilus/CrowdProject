/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
        colors:{
            vgreen: 'rgb(85, 30, 45)',
            vpurple: 'rgb(64,87,22)',
            vyellow: 'rgb(28,0,100)'
        }
    },
  },
  plugins: [],
}


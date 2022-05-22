module.exports = {
<<<<<<< HEAD
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'smm': '375px',
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

};
=======
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> c388b9b9a8438e8f36cca9e8993759d6f18f57d5

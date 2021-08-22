module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: (theme) => ({
        100: "100%",
      }),
      left: {
        "1/10": "10%",
        "-1/5": "-20%",
        "3/5": "60%",
        "1/10": "10%",
        "4/5": "80%",
        "-1/10": "-10%",
      },
      transitionDuration: {
        400: "400ms",
      },
      transitionDelay: {
        400: "400ms",
       },
      colors: {
        green: {
          special: "#5cebf6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

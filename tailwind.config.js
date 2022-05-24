module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#948374",

          "secondary": "#2a1009",

          "accent": "#22c967",

          "neutral": "#201D25",

          "base-100": "#F2F2F2",

          "info": "#4CAFF6",

          "success": "#6FECB2",

          "warning": "#F2B24A",

          "error": "#DE3A21",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FDFCFB",
        gray: {
          900: "#202123",
          800: "#323336",
        },
        orange: {
          800: "#5E4D4E",
          500: "#F28B81",
        },
      },
      fontFamily: {
        heading: "Roboto_700Bold",
        subtitle: "Roboto_500Medium",
        body: "Roboto_400Regular",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text_primary: "#A2C4E2",
        text_secondary: "#FFFFFF",
        bg_blue: "#0D1323"
      },
      rotate: {
        134: "134deg"
      },
      aspectRatio: {
        "15/3": "4 / 3"
      },
      maxWidth: {
        "8xl": "87.5rem"
      },
      fontSize: {
        44: "2.75rem"
      },
      inset: {
        "25per": "25%"
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};

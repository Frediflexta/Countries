/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 0px 5px 4px rgba(0,0,0,0.1)",
      },
    },
    fontFamily: {
      nunito: ["'Nunito Sans', sans-serif"],
    },
  },
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [require("@tailwindcss/forms")],
};

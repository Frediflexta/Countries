/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["'Nunito Sans', sans-serif"],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [require("@tailwindcss/forms")],
};

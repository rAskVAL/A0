/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          400: "#14202a",
          500: "#111b24",
        },
        zerogreen: "#00eac7",
      },
    },
  },

  plugins: [],
};

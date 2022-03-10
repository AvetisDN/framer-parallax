module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
  purge: {
    options: {
      safelist: ["xl:px-14 px-6", "py-8"],
    },
  },
};

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    extend: {
      colors: {
      }
    }
  },

  daisyui: {
    themes: ["pastel"],
  },

	plugins: [require("daisyui")],
};

module.exports = config;

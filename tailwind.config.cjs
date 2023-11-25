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
    themes: ["acid"],
  },

	plugins: [require("daisyui")],
};

module.exports = config;

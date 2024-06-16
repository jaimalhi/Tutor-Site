import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,svelte,js,ts}"],
   plugins: [daisyui],
   daisyui: {
      themes: [
         {
            avio: {
               primary: "#31A9BF",
               secondary: "#FF5FBF",
               accent: "#FFC908",
               neutral: "#9EA39F",
               "base-100": "#ffffff",
               "neutral-content": "#2E2E2E",
            },
         },
         "dim",
      ],
   },
};

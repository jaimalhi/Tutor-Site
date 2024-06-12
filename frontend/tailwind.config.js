import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,svelte,js,ts}"],
   plugins: [daisyui],
   daisyui: {
      themes: [
         {
            avio: {
               primary: "#a991f7",
               secondary: "#f6d860",
               accent: "#37cdbe",
               neutral: "#3d4451",
               base: "#ffffff",
            },
         },
         "dim",
      ],
   },
};

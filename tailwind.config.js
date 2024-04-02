/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: "#1f2937",
          secondary: "#b2b5b9",
          accent: "#f2f2f2",
          neutral: "#fefefe",
          "base-100": "#fefefe",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
      {
        darkMode: {
          primary: "#f2f2f2",
          secondary: "#85878c",
          accent: "#1c232e",
          neutral: "#1f2937",
          "base-100": "#1f2937",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
      "light",
      "dark",
    ],
  },
};

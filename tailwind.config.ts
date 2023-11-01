import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
        josefinSans: ["'Josefin Sans'", "sans-serif"],
        alata: ["'Alata'"],
        "shortly-sans": ["'Poppins'", "sans-serif"],
        "testimonial-sans": ["Barlow Semi Condensed", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      letterSpacing: {
        loopStudiosWidest: ".3rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vuejs: "#13c927",
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        shortly: {
          cyan: "hsl(180, 66%, 49%)",
          cyanLight: "hs1(180, 66%, 69%)",
          darkViolet: "hsl(257, 27%, 26%)",
          red: "hsl(0, 87%, 67%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          veryDarkBlue: "hsl(255, 11%, 22%)",
          veryDarkViolet: "hsl(260, 8%, 14%) ",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;

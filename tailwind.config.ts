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
        "flyo-sans": ["Raleway", "sans-serif"],
        "fly-opensans": ["Open Sans", "sans-serif"],
        "bookmark-sans": ["Rubik", "sans-serif"],
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
        "logo-dark-mode":
          "url('/images/all-project-assets/fylo/logo-dark-mode.svg')",
        "logo-light-mode":
          "url('/images/all-project-assets/fylo/logo-light-mode.svg')",
        "curvy-dark-mode":
          "url('/images/all-project-assets/fylo/bg-curvy-dark-mode.svg')",
        "curvy-light-mode":
          "url('/images/all-project-assets/fylo/bg-curvy-light-mode.svg')",
        dots: "url(/images/all-project-assets/bookmark/bg-dots.svg)",
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
        fylo: {
          darkBlue: "hsl(217, 28%, 15%)",
          darkBlue1: "hsl(218, 28%, 13%)",
          darkBlue2: "hsl(216, 53%, 9%)",
          darkBlue3: "hsl(219, 30%, 18%)",
          accentCyan: "hsl(176, 68%, 64%)",
          accentBlue: "hsl(198, 60%, 50%)",
          lightRed: "hsl(0, 100%, 63%)",
        },
        bookmark: {
          softBlue: "hsl(231, 69%, 60%)",
          softRed: "hsl(0, 94%, 66%)",
          grayishBlue: "hsl(229, 8%, 60%)",
          veryDarkBlue: "hsl(229, 31%, 21%)",
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
  variables: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

export default config;

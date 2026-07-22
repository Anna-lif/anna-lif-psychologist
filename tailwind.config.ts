import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F7F3EE",
          200: "#EDE6DD",
          300: "#E0D5C7",
        },
        warm: {
          black: "#3D3329",
          gray: "#6B5D4F",
          light: "#9A8B7A",
        },
        terracotta: {
          DEFAULT: "#C4705A",
          light: "#D48975",
          dark: "#A85D4A",
        },
        sage: {
          DEFAULT: "#7A8B6E",
          light: "#95A58A",
          dark: "#5E6E54",
        },
      },
      fontFamily: {
        serif: ["Cormorant", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

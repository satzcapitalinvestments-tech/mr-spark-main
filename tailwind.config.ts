import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spark: {
          50: "#f5f7ff",
          500: "#2e5bff",
          700: "#1a36b8",
          900: "#0b163d"
        },
        accent: "#ffb703"
      }
    },
  },
  plugins: [],
} satisfies Config;

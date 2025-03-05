import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        modalOpen: {
          '0%': { opacity: "0", transform: 'scale(0.95)' },
          '100%': { opacity: "1", transform: 'scale(1)' },
        },
        modalClose: {
          '0%': { opacity: "1", transform: 'scale(1)' },
          '100%': { opacity: "0", transform: 'scale(0.95)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        modalOpen: 'modalOpen 0.3s ease-out',
        modalClose: 'modalClose 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;

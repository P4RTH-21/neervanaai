import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050C16",
          navy: "#0A192F",
          slate: "#112240",
          lightNavy: "#233554",
          teal: "#00D4AA",
          tealHover: "#00B894",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          coral: "#FF6B35",
        },
        signal: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          dark: "#B45309",
          light: "#FEF3C7",
        },
        precision: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
        canvas: {
          light: "#FCFCFD",
          subtle: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E5E7EB",
          subtleBorder: "#EEF1F5",
        },
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -16px rgba(15, 23, 42, 0.12)",
        "card-hover": "0 2px 4px rgba(15, 23, 42, 0.08), 0 16px 40px -12px rgba(15, 23, 42, 0.16)",
        signal: "0 1px 2px rgba(15, 23, 42, 0.08), 0 4px 12px -4px rgba(180, 83, 9, 0.35)",
        "signal-hover": "0 2px 4px rgba(15, 23, 42, 0.1), 0 6px 16px -4px rgba(180, 83, 9, 0.4)",
        glow: "0 0 25px rgba(245, 158, 11, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;

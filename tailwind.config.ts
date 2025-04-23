/* tailwind.config.ts — stable build (allows complex @apply) */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default <Config>{
  darkMode: "class",

  /* -------------------------------------------------
     Files Tailwind should scan
  ------------------------------------------------- */
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./src/styles/**/*.css",
  ],

  /* -------------------------------------------------
     Allow complex @apply without build errors
  ------------------------------------------------- */
  experimental: {
    applyComplexClasses: true,
  },

  /* -------------------------------------------------
     Theme customisations (unchanged)
  ------------------------------------------------- */
  theme: {
    container: { center: true, padding: "2rem" },
    extend: {
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
        trajan: ["Trajan Pro", "Cinzel", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)",   opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
      },
    },
  },

  /* -------------------------------------------------
     Plugins & future flags
  ------------------------------------------------- */
  plugins: [require("tailwindcss-animate")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
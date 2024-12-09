import type { Config } from "tailwindcss";

export default {
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lato: ['var(--font-lato)'],
      },
      brand: {
        black: "var(--brand-black)",
        primary: "var(--brand)",
        "text-strong": "var(--brand-text-strong)",
        "text-weak": "var(--brand-text-weak)",
        "stroke-strong": "var(--brand-stroke-strong)",
        "stroke-weak": "var(--brand-stroke-weak)",
        "fill": "var(--brand-fill-bg)"
      }
    },
  },
  plugins: [],
} satisfies Config;

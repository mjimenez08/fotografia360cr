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
        cream:   "#F7F3EE",
        cream2:  "#EDE8E0",
        ink:     "#12100E",
        ink2:    "#2A2724",
        stone:   "#6B6560",
        gold:    "#A8895A",
        "gold-lt": "#C4A876",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost:      ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      keyframes: {
        spinSlow: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        pulse360: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(168,137,90,0.5)" },
          "50%":       { boxShadow: "0 0 0 12px rgba(168,137,90,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow":  "spinSlow 8s linear infinite",
        "pulse-wa":   "pulse360 2.5s ease-in-out infinite",
        "fade-up":    "fadeUp 0.85s cubic-bezier(.16,1,.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

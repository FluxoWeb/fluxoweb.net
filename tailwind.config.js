const defaultTheme = require("tailwindcss/defaultTheme");

// Colores como variables CSS (definidas en css/tailwind.css) para que claro y
// oscuro compartan las mismas clases: `bg-ground`, `text-ink`, `border-line`...
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ground: token("ground"),
        panel: token("panel"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        green: {
          DEFAULT: token("green"),
          ink: token("green-ink"),
        },
        // Superficie oscura fija: hero, cierre y paneles que son oscuros en ambos temas.
        night: {
          DEFAULT: "#1D1D1D",
          raised: "#2A2A2A",
          ink: "#F4F4F1",
          muted: "#A3A39E",
          line: "rgb(255 255 255 / 0.12)",
        },
      },
      fontFamily: {
        sans: ["Host Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        display: ["clamp(2.75rem, min(6.6vw, 11svh), 6rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        title: ["clamp(2rem, 4.2vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        lead: ["clamp(1.0625rem, 1.3vw, 1.25rem)", { lineHeight: "1.55" }],
      },
      borderRadius: {
        frame: "28px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

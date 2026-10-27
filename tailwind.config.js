const defaultTheme = require("tailwindcss/defaultTheme");

// Colores como variables CSS (definidas en css/tailwind.css) para que claro y
// oscuro compartan las mismas clases: `bg-ground`, `text-ink`, `border-line`...
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        // Escala del documento de diseño: H1 56–72px (36–42 en móvil), H2 36–48px (28–34 en móvil).
        display: ["clamp(2.375rem, min(5.2vw, 9.5svh), 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        title: ["clamp(1.75rem, 3.3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        lead: ["clamp(1.0625rem, 1.3vw, 1.25rem)", { lineHeight: "1.55" }],
      },
      borderRadius: {
        card: "16px",
        control: "10px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

import { useEffect, useState } from "react";
import { Lightbulb, BarChart3, Settings, Layers } from "lucide-react";
import { logoPaths } from "./brandPaths";

// Ilustración del hero: el símbolo original del logo, en un lienzo de 1000×800.
// El SVG del logo está "en negativo" (un cuadrado con las líneas recortadas), así que:
//  - el cuadrado se pinta del mismo negro que la franja (#1D1D1D) y desaparece;
//  - detrás va una capa blanca que se revela de arriba hacia abajo: las líneas se ven blancas;
//  - una franja verde recorre esa capa en bucle: el circuito se "enciende" sin tocar el arte.
// Cuatro conectores salen del logo hacia Ideas, Ventas, Operación y Tecnología; los pulsos
// viajan por ellos y encienden la terminal de cada tarjeta.

const BAND = "#1D1D1D";
const INK = "#F4F4F1";
const GREEN = "#27D46B";

// Posición del logo (lienzo de 1080) dentro del de 1000×800.
const LOGO = { x: 165.2, y: 68.3, scale: 0.62 };

// Conectores en coordenadas del lienzo de 1000×800. `anchor` es el punto donde tocan la tarjeta.
const nodes = [
  { label: "Ideas", Icon: Lightbulb, d: "M281.8 417.4 H252 L200 365.4 V166", anchor: [200, 166], above: true },
  { label: "Ventas", Icon: BarChart3, d: "M718.9 417.4 H748 L800 365.4 V206", anchor: [800, 206], above: true },
  { label: "Operación", Icon: Settings, d: "M372.9 457.7 H300 L230 527.7 V600", anchor: [230, 600], above: false },
  { label: "Tecnología", Icon: Layers, d: "M621.6 458.3 H720 L790 528.3 V640", anchor: [790, 640], above: false },
];

const pct = (v, total) => `${(v / total) * 100}%`;

export default function BrandCircuit({ className = "" }) {
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotion(!q.matches);
    const onChange = (e) => setMotion(!e.matches);
    q.addEventListener("change", onChange);
    return () => q.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={`relative aspect-[5/4] w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1000 800" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="fx-scan-band" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={GREEN} stopOpacity="0" />
            <stop offset="0.5" stopColor={GREEN} stopOpacity="1" />
            <stop offset="1" stopColor={GREEN} stopOpacity="0" />
          </linearGradient>
          {nodes.map((n, i) => (
            <path key={n.label} id={`fx-node-path-${i}`} d={n.d} />
          ))}
        </defs>

        {/* Logo original */}
        <g transform={`translate(${LOGO.x} ${LOGO.y}) scale(${LOGO.scale})`}>
          {/* Capa blanca solo sobre la zona del dibujo: si tocara el borde del cuadrado,
              el antialiasing dejaría ver un recuadro fino alrededor del logo. */}
          <rect
            x="150"
            y="150"
            width="780"
            height="780"
            fill={INK}
            style={{ transformBox: "fill-box", transformOrigin: "top", animation: "fx-reveal 1.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          />
          <rect
            className="fx-scan"
            x="0"
            y="0"
            width="1080"
            height="140"
            fill="url(#fx-scan-band)"
            style={{ animation: "fx-scan 3.6s cubic-bezier(0.45,0,0.55,1) 2s infinite both" }}
          />
          <g transform="translate(0 1080) scale(0.1 -0.1)" fill={BAND}>
            {logoPaths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </g>

        {/* Conectores hacia las cuatro áreas */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <path
              d={n.d}
              pathLength="1"
              fill="none"
              stroke={INK}
              strokeOpacity="0.55"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1"
              style={{ animation: `fx-draw 0.9s cubic-bezier(0.16,1,0.3,1) ${1.3 + i * 0.15}s both` }}
            />
            <circle cx={n.anchor[0]} cy={n.anchor[1]} r="5" fill={BAND} stroke={INK} strokeOpacity="0.7" strokeWidth="1.6">
              {motion && (
                <animate
                  attributeName="fill"
                  values={`${BAND};${BAND};${GREEN};${BAND};${BAND}`}
                  keyTimes="0;0.5;0.56;0.8;1"
                  dur="3.6s"
                  begin={`${2.4 + i * 0.9}s`}
                  repeatCount="indefinite"
                />
              )}
            </circle>
            {motion && (
              <circle r="4.5" fill={GREEN} opacity="0">
                <animateMotion dur="3.6s" begin={`${2.4 + i * 0.9}s`} repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear">
                  <mpath href={`#fx-node-path-${i}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0;0"
                  keyTimes="0;0.04;0.52;0.56;1"
                  dur="3.6s"
                  begin={`${2.4 + i * 0.9}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Tarjetas de las cuatro áreas (HTML para texto nítido): ancho automático, ancladas al
          extremo de su conector, arriba o abajo según el lado. */}
      {nodes.map(({ label, Icon, anchor, above }, i) => (
        <div
          key={label}
          className="absolute hidden sm:block"
          style={{
            left: pct(anchor[0], 1000),
            top: pct(anchor[1], 800),
            transform: above ? "translate(-50%, calc(-100% - 6px))" : "translate(-50%, 6px)",
          }}
        >
          <div
            className="flex items-center gap-2.5 whitespace-nowrap rounded-[12px] border border-white/15 bg-night-raised/90 px-4 py-2.5 text-[15px] text-night-ink backdrop-blur-sm"
            style={{ animation: `fx-appear 0.6s cubic-bezier(0.16,1,0.3,1) ${1.9 + i * 0.15}s both` }}
          >
            <Icon className="h-[18px] w-[18px] shrink-0 text-night-muted" strokeWidth={1.6} />
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

import { ArrowUpRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "./ui";

// Planes: el destacado es un campo verde completo, no una tarjeta con borde de color.
export default function Pricing({ plans, period = "/ mes" }) {
  return (
    <ul className="grid gap-3 lg:grid-cols-3">
      {plans.map((plan) => {
        const on = plan.featured;
        const soft = on ? "text-[#0B0B0B]/70" : "text-muted";
        return (
          <li
            key={plan.name}
            className={`frame flex flex-col p-7 sm:p-9 ${on ? "bg-green text-[#0B0B0B]" : "border border-line/15 bg-panel"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-tight">{plan.name}</h3>
              {on && (
                <span className="rounded-full border border-[#0B0B0B]/30 px-3 py-1 text-[13px] font-medium">
                  Más elegido
                </span>
              )}
            </div>
            <p className={`mt-2 text-[15px] ${soft}`}>{plan.description}</p>
            <p className="mt-10 flex items-baseline gap-2">
              <span className={`font-mono text-[13px] ${soft}`}>USD</span>
              <span className="tabular font-mono text-6xl font-medium tracking-tight">{plan.price}</span>
              <span className={`text-[15px] ${soft}`}>{period}</span>
            </p>
            <ul className={`mt-10 flex-1 space-y-3 border-t pt-8 ${on ? "border-[#0B0B0B]/20" : "border-line/15"}`}>
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px]">
                  <Check className={`h-4 w-4 shrink-0 ${on ? "" : "text-green-ink"}`} strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full text-[15px] font-medium transition-colors ${
                on
                  ? "bg-[#0B0B0B] text-green hover:bg-[#1E1E1E]"
                  : "border border-line/20 hover:border-green hover:bg-green hover:text-[#0B0B0B]"
              }`}
            >
              {plan.cta || `Contratar ${plan.name}`}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

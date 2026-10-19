import { ArrowUpRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "./ui";

// Planes sin precio publicado: muestran qué incluye cada nivel y llevan a una propuesta.
// La inversión se define después de entender la operación del cliente, no se compara en la web.
// El destacado es un campo verde completo, no una tarjeta con borde de color.
export default function Pricing({ plans }) {
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
                  Recomendado
                </span>
              )}
            </div>
            <p className={`mt-2 min-h-[3em] text-[15px] leading-normal ${soft}`}>{plan.description}</p>
            <p className={`mt-10 border-t pt-6 text-[15px] font-medium ${on ? "border-[#0B0B0B]/20" : "border-line/15"}`}>
              Inversión según tu operación
            </p>
            <ul className="mt-6 flex-1 space-y-3">
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
              {plan.cta || "Pedir propuesta"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nanduti from "./nanduti";

// Cabecera de páginas internas: el mismo marco oscuro del hero, más bajo,
// con la red asomando desde el borde. `children` va debajo de la bajada (acciones, datos).
export default function PageHero({ title, lead, back, children, web = true }) {
  return (
    <section className="p-2 sm:p-3">
      <div className="frame isolate bg-night text-night-ink">
        {web && <Nanduti variant="edge" />}
        {web && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,29,0.2),rgba(29,29,29,0.85))] md:bg-[linear-gradient(90deg,#1D1D1D_0%,rgba(29,29,29,0.9)_45%,rgba(29,29,29,0.1)_80%)]"
          />
        )}
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 lg:pt-44">
          {back && (
            <Link
              href={back.href}
              className="fx-rise mb-8 inline-flex items-center gap-2 text-[14px] text-night-muted transition-colors hover:text-night-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {back.label}
            </Link>
          )}
          <h1 className="fx-rise max-w-[16ch] text-display font-light">{title}</h1>
          {lead && (
            <p className="fx-rise mt-7 max-w-[54ch] text-lead text-night-muted [animation-delay:120ms]">{lead}</p>
          )}
          {children && <div className="fx-rise mt-10 [animation-delay:240ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}

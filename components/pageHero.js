import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nanduti from "./nanduti";
import Container from "./container";

// Cabecera de páginas internas: franja negra completa (como el hero de la home), con hilos de
// circuito que asoman desde el borde. `children` va debajo de la bajada (acciones, datos).
export default function PageHero({ title, lead, back, children, web = true }) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-night-ink">
      {web && <Nanduti variant="edge" />}
      {web && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,29,0.25),rgba(29,29,29,0.9))] md:bg-[linear-gradient(90deg,#1D1D1D_0%,rgba(29,29,29,0.92)_45%,rgba(29,29,29,0.15)_80%)]"
        />
      )}
      <Container className="relative z-10 pb-14 pt-32 sm:pb-20 lg:pb-24 lg:pt-40">
        {back && (
          <Link
            href={back.href}
            className="fx-rise mb-8 inline-flex items-center gap-2 text-[14px] text-night-muted transition-colors hover:text-night-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {back.label}
          </Link>
        )}
        <h1 className="fx-rise max-w-[18ch] text-display font-semibold">{title}</h1>
        {lead && <p className="fx-rise mt-6 max-w-[56ch] text-lead text-night-muted [animation-delay:120ms]">{lead}</p>}
        {children && <div className="fx-rise mt-10 [animation-delay:240ms]">{children}</div>}
      </Container>
    </section>
  );
}

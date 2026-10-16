import Nanduti from "./nanduti";
import ProjectCarousel from "./projectCarousel";
import { WhatsAppButton, ArrowLink } from "./ui";
import { projects } from "../data/projects";

// Solo datos verificables: año de fundación, socios y sistemas que se pueden visitar.
const stats = [
  { value: "2019", label: "Desde" },
  { value: "4", label: "Socios" },
  { value: String(projects.length), label: "Sistemas en línea" },
];

const Hero = () => {
  return (
    <section className="p-2 sm:p-3">
      <div className="frame isolate flex min-h-[calc(100svh-16px)] flex-col bg-night text-night-ink sm:min-h-[calc(100svh-24px)]">
        <Nanduti />
        {/* Velo para legibilidad del texto sobre el tejido */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,29,0.15)_0%,rgba(29,29,29,0.7)_55%,#1D1D1D_100%)] md:bg-[linear-gradient(90deg,#1D1D1D_0%,rgba(29,29,29,0.85)_36%,rgba(29,29,29,0)_66%)]"
        />

        <div className="relative z-10 flex flex-1 flex-col justify-end gap-10 px-5 pb-5 pt-32 sm:px-8 sm:pb-8 md:justify-between lg:px-12 lg:pb-10 lg:pt-28">
          <div>
            <h1 data-web-avoid className="fx-rise max-w-[11ch] text-display font-light">
              Software que <span className="text-green">conecta</span> toda tu empresa.
            </h1>
            <p data-web-avoid className="fx-rise mt-7 max-w-[46ch] text-lead text-night-muted [animation-delay:120ms]">
              Desarrollamos, alojamos y mantenemos los sistemas de PyMEs en Paraguay y la región. Un solo equipo, desde la
              primera línea de código hasta el servidor.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div data-web-avoid className="fx-rise flex flex-col gap-8 [animation-delay:240ms]">
              <dl className="flex gap-8 sm:gap-12">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse gap-1">
                    <dt className="text-[13px] text-night-muted">{s.label}</dt>
                    <dd className="tabular font-mono text-3xl font-medium tracking-tight sm:text-4xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                <WhatsAppButton />
                <ArrowLink href="#proyectos" className="text-night-ink">
                  Ver proyectos
                </ArrowLink>
              </div>
            </div>

            <ProjectCarousel data-web-avoid className="fx-rise hidden max-w-[320px] [animation-delay:360ms] md:block lg:absolute lg:bottom-10 lg:right-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

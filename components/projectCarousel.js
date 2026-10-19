import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const INTERVAL = 4800;
const pad = (n) => String(n).padStart(2, "0");

// Tarjeta flotante del hero: proyectos reales rotando, con contador y barra de avance.
export default function ProjectCarousel({ className = "", ...rest }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(q.matches);
    const onChange = (e) => setReduced(e.matches);
    q.addEventListener("change", onChange);
    return () => q.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return undefined;
    const id = setTimeout(() => setIndex((i) => (i + 1) % projects.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, reduced]);

  const go = (step) => setIndex((i) => (i + step + projects.length) % projects.length);
  const project = projects[index];

  return (
    <section
      {...rest}
      aria-roledescription="carrusel"
      aria-label="Proyectos en producción"
      className={`w-full rounded-[22px] border border-white/10 bg-night/70 p-2 text-night-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[16/10] overflow-hidden rounded-[16px] bg-night-raised"
      >
        {projects.map((p, i) => (
          <Image
            key={p.slug}
            src={p.image}
            alt={i === index ? `Captura de ${p.name}` : ""}
            fill
            sizes="340px"
            className={`object-cover object-top transition-[opacity,transform] duration-700 ease-out-expo group-hover:scale-[1.03] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-night/80 text-night-ink opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>

      <div className="flex items-end justify-between gap-3 px-2 pb-1 pt-3">
        <div className="min-w-0" aria-live="polite">
          <p className="truncate text-[15px] font-medium">{project.name}</p>
          <p className="truncate text-[13px] text-night-muted">{project.kind}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid h-8 w-8 place-items-center rounded-full text-night-muted transition-colors hover:bg-white/10 hover:text-night-ink"
            aria-label="Proyecto anterior"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid h-8 w-8 place-items-center rounded-full text-night-muted transition-colors hover:bg-white/10 hover:text-night-ink"
            aria-label="Proyecto siguiente"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 px-2 pb-2 pt-2">
        <span className="tabular font-mono text-[11px] text-night-muted">
          <span className="text-night-ink">{pad(index + 1)}</span>/{pad(projects.length)}
        </span>
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {projects.map((p, i) => (
            <span key={p.slug} className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/15">
              {i < index && <span className="absolute inset-0 bg-night-ink/60" />}
              {i === index && (
                <span
                  key={`${index}-${paused}`}
                  className="absolute inset-0 origin-left bg-green"
                  style={
                    paused || reduced ? undefined : { animation: `fx-fill ${INTERVAL}ms linear forwards` }
                  }
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

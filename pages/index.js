import Head from "next/head";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShoppingCart, Settings, BarChart3, Lightbulb } from "lucide-react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Container from "../components/container";
import Closing from "../components/closing";
import Nanduti from "../components/nanduti";
import { ArrowLink, Button, SectionHeading, WHATSAPP_URL } from "../components/ui";
import { projects, relationLabel } from "../data/projects";

// Estructura del documento de diseño (desing_2.md): hero · beneficios · proyectos · aspiración ·
// proceso · comunidad · manifiesto. Franjas negras y claras alternadas.

const benefits = [
  { Icon: ShoppingCart, title: "Vender mejor", text: "Convertí más oportunidades en clientes." },
  { Icon: Settings, title: "Simplificar tu operación", text: "Hacé más simple lo complejo del día a día." },
  { Icon: BarChart3, title: "Tener más control", text: "Tomá decisiones con información clara." },
  { Icon: Lightbulb, title: "Crear algo nuevo", text: "Llevá tus ideas a soluciones reales." },
];

const steps = [
  { title: "Te escuchamos", text: "Conocemos tu negocio, tus ideas y tus desafíos." },
  { title: "Definimos el camino", text: "Damos forma a la solución juntos." },
  { title: "Construimos con vos", text: "Desarrollamos y validamos en cada etapa." },
  { title: "Lo ponemos en marcha", text: "Te acompañamos en su implementación." },
];

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <>
      <Head>
        <title>Fluxo Web | Tecnología para convertir ideas en soluciones</title>
        <meta
          name="description"
          content="¿Tenés una idea o un desafío en tu empresa? En Fluxo Web desarrollamos soluciones tecnológicas junto a empresarios de Ciudad del Este."
        />
        <meta property="og:title" content="Fluxo Web | Tecnología para convertir ideas en soluciones" />
        <meta property="og:description" content="Vos conocés tu negocio. Juntos construimos lo que sigue." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_PY" />
      </Head>

      <Navbar />
      <main>
        <Hero />

        {/* Beneficios — capa Empresa */}
        <section className="band-light py-20 sm:py-28" aria-labelledby="beneficios-title">
          <Container>
            <SectionHeading align="center" title={<span id="beneficios-title">¿Qué querés hacer posible?</span>} />
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line/15">
              {benefits.map(({ Icon, title, text }) => (
                <li key={title} className="flex flex-col items-center px-6 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-line/15 bg-panel">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 max-w-[24ch] text-[15px] leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Proyectos — demostración de capacidad */}
        <section id="proyectos" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="proyectos-title">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="proyectos-title" className="max-w-[20ch] text-title font-semibold">
                Ideas que se convierten en proyectos.
              </h2>
              <ArrowLink href="/productos#demos" className="shrink-0 text-muted hover:text-ink">
                Ver todos los proyectos
              </ArrowLink>
            </div>

            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {featured.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-card border border-line/10 bg-panel p-3 transition-colors hover:border-green/60"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden rounded-[12px] bg-night-raised">
                      <Image
                        src={p.image}
                        alt={`Captura de ${p.name}`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="flex items-start justify-between gap-4 px-2 pb-2 pt-5">
                      <span>
                        <span className="block text-xl font-semibold tracking-tight">{p.name}</span>
                        <span className="mt-1 block text-[15px] text-muted">{p.kind}</span>
                        {relationLabel(p) && (
                          <span className={`mt-3 block text-[13px] font-medium ${p.own ? "text-green-ink" : "text-muted"}`}>
                            {relationLabel(p)}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-green" strokeWidth={1.6} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Aspiración — capa Marca */}
        <section className="relative isolate overflow-hidden border-t border-white/10" aria-labelledby="aspiracion-title">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
            <Nanduti variant="edge" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#1D1D1D_0%,rgba(29,29,29,0.3)_45%,rgba(29,29,29,0)_100%)]" />
          </div>
          <Container className="relative z-10 py-20 sm:py-28">
            <div className="max-w-xl">
              <h2 id="aspiracion-title" className="text-title font-semibold">
                Tu experiencia puede ser el comienzo de algo nuevo.
              </h2>
              <p className="mt-5 text-lead text-muted">
                Vos aportás el conocimiento de tu mercado. Nosotros, la tecnología para desarrollarlo con vos.
              </p>
            </div>
          </Container>
        </section>

        {/* Proceso — 4 etapas */}
        <section id="como-trabajamos" className="band-light scroll-mt-20 py-20 sm:py-28" aria-labelledby="proceso-title">
          <Container>
            <SectionHeading align="center" title={<span id="proceso-title">Un camino claro, desde la primera conversación.</span>} />
            <ol className="mt-14 grid gap-0 divide-y divide-line/15 lg:mt-16 lg:grid-cols-4 lg:divide-y-0">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 py-6 lg:flex-col lg:items-center lg:px-6 lg:py-0 lg:text-center">
                  <span className="tabular grid h-14 w-14 shrink-0 place-items-center rounded-full bg-panel font-mono text-lg font-medium ring-1 ring-line/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute right-0 top-[18px] hidden h-5 w-5 translate-x-1/2 text-muted lg:block"
                      strokeWidth={1.6}
                    />
                  )}
                  <div className="lg:mt-5">
                    <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1.5 max-w-[26ch] text-[15px] leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Comunidad — capa Tribu */}
        <section className="py-16 sm:py-20" aria-labelledby="comunidad-title">
          <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6 sm:gap-8">
              <svg viewBox="0 0 120 80" className="h-16 w-24 shrink-0 text-line/40 sm:h-20 sm:w-28" aria-hidden="true">
                <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="78" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="59" cy="40" r="4" fill="#27D46B" />
              </svg>
              <div>
                <h2 id="comunidad-title" className="text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold tracking-tight">
                  Empresas que Piensan
                </h2>
                <p className="mt-2 max-w-[48ch] text-[16px] text-muted">
                  Un espacio para compartir experiencias y descubrir nuevas posibilidades.
                </p>
              </div>
            </div>
            <Button href={WHATSAPP_URL} variant="outline" className="shrink-0 self-start md:self-auto">
              Conocé la iniciativa
            </Button>
          </Container>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}

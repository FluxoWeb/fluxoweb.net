import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import { WhatsAppButton, ArrowLink, SectionHeading } from "../../components/ui";

const services = [
  {
    id: "ia",
    name: "Inteligencia artificial",
    description:
      "Integramos inteligencia artificial en tus sistemas para automatizar procesos, analizar datos y apoyar decisiones con modelos de lenguaje.",
    capabilities: ["Chatbots y asistentes virtuales", "Análisis predictivo", "Automatización inteligente", "Integración con LLMs"],
    proof: { label: "Ver Quiro y MillonAI", href: "/#proyectos" },
  },
  {
    id: "software",
    name: "Software a medida",
    description:
      "Sistemas diseñados sobre los procesos y objetivos de tu organización, que se integran con lo que ya usas en lugar de reemplazarlo todo.",
    capabilities: ["Análisis de requerimientos", "Arquitectura escalable", "Integración con sistemas existentes"],
  },
  {
    id: "web",
    name: "Desarrollo web",
    description: "Sitios y aplicaciones web modernas, rápidas y optimizadas para buscadores, con panel para administrar tu contenido.",
    capabilities: ["Diseño adaptable a cualquier pantalla", "Optimización SEO", "Panel de administración"],
  },
  {
    id: "movil",
    name: "Aplicaciones móviles",
    description: "Aplicaciones nativas e híbridas para Android e iOS, conectadas a tu sistema y pensadas para el uso diario.",
    capabilities: ["Android e iOS", "Interfaz moderna", "Notificaciones push"],
  },
  {
    id: "hosting",
    name: "Hosting en la nube",
    description: "Alojamos tus aplicaciones en nuestra propia infraestructura, con copias de seguridad y soporte del mismo equipo que las desarrolló.",
    capabilities: ["Servidores propios", "Copias de seguridad automáticas", "Soporte del equipo de desarrollo"],
    proof: { label: "Ver planes de hosting", href: "/hosting" },
  },
];

const steps = [
  { title: "Descubrimiento", text: "Analizamos tus procesos y definimos qué tiene que resolver el sistema." },
  { title: "Planificación", text: "Diseñamos la arquitectura y acordamos un plan de entregas concreto." },
  { title: "Desarrollo", text: "Construimos en etapas, con entregas parciales que revisas en cada fase." },
  { title: "Lanzamiento", text: "Publicamos, capacitamos a tu equipo y seguimos acompañando después." },
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios — Fluxo Web</title>
        <meta
          name="description"
          content="Software a medida, inteligencia artificial, desarrollo web, aplicaciones móviles y hosting en la nube para PyMEs en Paraguay y la región."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Tecnología a la medida de cada problema."
          lead="Desde una app móvil hasta sistemas empresariales con inteligencia artificial. Elegimos la tecnología correcta para cada caso y nos quedamos para mantenerla."
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <WhatsAppButton label="Consultar un proyecto" />
            <ArrowLink href="#proceso" className="text-night-ink">
              Cómo trabajamos
            </ArrowLink>
          </div>
        </PageHero>

        <section className="pt-24 sm:pt-32" aria-label="Servicios">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <nav className="hidden lg:col-span-3 lg:block" aria-label="Índice de servicios">
              <ul className="sticky top-32 space-y-3 border-l border-line/15 pl-5">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-[15px] text-muted transition-colors hover:text-ink">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-9">
              {services.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28 border-t border-line/15 py-14 first:border-t-0 first:pt-0 sm:py-20">
                  <h2 className="text-title font-normal">{s.name}</h2>
                  <p className="mt-6 max-w-[58ch] text-lead text-muted">{s.description}</p>
                  <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-[16px]">
                        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-green" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {s.proof && (
                    <Link
                      href={s.proof.href}
                      className="group mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-green-ink underline-offset-[6px] hover:underline"
                    >
                      {s.proof.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="proceso" className="scroll-mt-24 pt-24 sm:pt-32" aria-labelledby="proceso-title">
          <Container>
            <SectionHeading title={<span id="proceso-title">Cómo trabajamos.</span>}>
              Cuatro etapas, con entregas que puedes revisar en cada una. Siempre sabes en qué punto está tu proyecto.
            </SectionHeading>
            <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <span aria-hidden="true" className="absolute left-0 right-0 top-[30px] hidden h-px bg-line/15 lg:block" />
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="relative inline-grid h-[60px] min-w-[60px] place-items-center rounded-full border border-line/20 bg-ground px-4 font-mono text-lg tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <Closing title="¿Listo para empezar?" text="Cuéntanos tu proyecto y te respondemos con una propuesta concreta." />
      </main>
      <Footer />
    </>
  );
}
